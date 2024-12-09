import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../types/types";
import { Product } from "../../pages/ShopPage/components/Product";
import { BtnShowMore } from "./BtnShowMore/BtnShowMore";
import { baseUrl } from "../../constants/baseUrl";

type ShowProductsProps = {
  limit: number; // 'title' é opcional
  category?: string; // 'description' é obrigatório
};

export const ShowProducts: React.FC<ShowProductsProps> = ({
  limit,
  category,
}) => {
  const [loading, setLoading] = useState(false);
  const [itemsMore, setItemsMore] = useState(limit);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const maxItems = 16;
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `${baseUrl}products?Category=${category}&`,
          {
            params: {
              _page: 1,
              _limit: itemsMore > maxItems ? maxItems : itemsMore,
            },
          }
        );

        setAllProducts(response.data);
      } catch (error) {
        console.log("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, itemsMore]);

  const handleMoreItems = () => {
    setItemsMore(limit + itemsMore);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 mx-24 my-9 max-w-[1250px]">
        {allProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>
        ))}
      </div>
      {itemsMore <= allProducts.length ? (
        <BtnShowMore handleMoreItems={handleMoreItems} />
      ) : null}
    </div>
  );
};
