import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../types/types";
import { Product } from "../../pages/ShopPage/components/Product";
import { BtnShowMore } from "./BtnShowMore/BtnShowMore";
import { baseUrl } from "../../constants/baseUrl";

type ShowProductsProps = {
  limit: number;
  category?: string;
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
          `${baseUrl}/products?Category=${category}&_page=1&_limit=${
          itemsMore > maxItems ? maxItems : itemsMore}` //if you don't reach the limit, load more items
        );

        setAllProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Erro search products:", error);
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
      <div className="grid gap-8 mx-3 lg:mx-12 2xl:mx-24 my-9 max-w-[1250px] grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {allProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="max-w-[175px] min-w-[175px] max-h-[351px]  md:max-w-[285px] md:min-w-[285px] md:min-h-[446px] md:max-h-[446px]"
          >
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </div>
      {itemsMore <= allProducts.length ? (
        <BtnShowMore handleMoreItems={handleMoreItems} />
      ) : null}
    </div>
  );
};
