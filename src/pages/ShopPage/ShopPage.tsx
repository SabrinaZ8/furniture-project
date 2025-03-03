import { useEffect, useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Product } from "./components/Product";

import { ProductType } from "../../../src/types/types";
import { BtnBack } from "./components/BtnBack";
import { BtnNext } from "./components/BtnNext";
import { BtnNumbers } from "./components/BtnNumbers";
import { Filter } from "./components/Filter";
import { Link } from "react-router-dom";
import { MoreInfos } from "../../components/MoreInfos/MoreInfos";
import { Banner } from "../../components/Banner/Banner";
import { Loading } from "../../components/Loading/Loading";
import { baseUrl } from "../../constants/baseUrl";

export const ShopPage = () => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("Default");
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [itemsPerPage, setItemasPerPage] = useState(16);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatePages = useCallback((response: AxiosResponse<any>) => {
    setAllProducts(response.data);
    setTotalPages(Math.ceil(response.headers["x-total-count"] / itemsPerPage));
    setTotalItems(response.headers["x-total-count"]);
  }, [itemsPerPage]); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        //if for category or no category filtering
        if (option === "Default") {
          const response = await axios.get(`${baseUrl}/products?_page=${page}&_limit=${itemsPerPage}`);
          
          updatePages(response)
        } else {
          const response = await axios.get(
            `${baseUrl}/products?Category=${option}&_page=${page}&_limit=${itemsPerPage}`
          );
          updatePages(response)
        }
      } catch (error) {
        console.log("Erro search products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [option, page, itemsPerPage, updatePages]);

  const handlePageClick = (pageNumber: number): void => {
    setPage(pageNumber);
  };

  const goToNextPage = (): void => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = (): void => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar />
      <Banner path={"Shop"} />
      <section className="flex flex-col items-center">
        <Filter
          setOption={setOption}
          option={option}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          page={page}
          setPage={setPage}
          setItemsPerPage={setItemasPerPage}
        />
        <div className="grid gap-8 mx-3 lg:mx-12 2xl:mx-24 my-9 max-w-[1250px] grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {allProducts?.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Product product={product} />
            </Link>
          ))}
        </div>

        <div className=" flex gap-2 my-20">
          <BtnBack goToPreviousPage={goToPreviousPage} page={page} />

          <BtnNumbers
            totalPages={totalPages}
            handlePageClick={handlePageClick}
            page={page}
          />
          <BtnNext
            goToNextPage={goToNextPage}
            page={page}
            totalPages={totalPages}
          />
        </div>
      </section>
      <MoreInfos />
      <Footer />
    </div>
  );
};
