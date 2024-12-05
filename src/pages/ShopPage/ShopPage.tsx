import { useEffect, useState } from "react";
import axios from "axios";

import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Product } from "./components/Product";

import { ProductType } from "../../../src/types/types";
import { BtnBack } from "./components/BtnBack";
import { BtnNext } from "./components/BtnNext";
import { BtnNumbers } from "./components/BtnNumbers";
import { Filter } from "./components/Filter"

export const ShopPage = () => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([]); 
  const [visibleProducts, setVisibleProducts] = useState<ProductType[]>([]); 
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("")

  const itemsPerPage = 16;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products?Category=${option}`);
        console.log(response)
        console.log(option)
        setAllProducts(response.data);
        
       // setAllProducts(response2)
      } catch (error) {
        console.log("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [option]);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleProducts(allProducts.slice(startIndex, endIndex));
    console.log(visibleProducts)
  }, [page, allProducts]);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageClick = (pageNumber: number):void => {
    setPage(pageNumber);
  };

  const goToNextPage = ():void => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = ():void => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <NavBar />
      <section className="flex flex-col items-center">
        <Filter setOption={setOption} allProducts={allProducts} setAllProducts={setAllProducts} itemsPerPage={itemsPerPage}/>
        <div className="grid grid-cols-4 gap-8 mx-24 max-w-[1250px]">
          {visibleProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-4 flex gap-2">
          
          <BtnBack goToPreviousPage={goToPreviousPage} page={page}/>

          <BtnNumbers totalPages={totalPages} handlePageClick={handlePageClick} page={page}/>
          <BtnNext goToNextPage={goToNextPage} page={page}  totalPages={ totalPages}/>
        </div>
      </section>
      <Footer />
    </div>
  );
};
