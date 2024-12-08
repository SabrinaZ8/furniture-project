import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import axios from "axios";
import { ProductType, CartProductType } from "../../types/types";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { PathBar } from "./components/PathBar";
import { DetailsProduct } from "./components/DetailsProduct";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedOption, setSelectedOption] = useState("l");

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      const productWithQuantity: CartProductType = {
        ...product,
        quantity: quantity,
      };
      console.log("Produto adicionado ao carrinho", productWithQuantity);
      dispatch(addToCart(productWithQuantity));
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/?id=${id}`
        );
        setProduct(response.data[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <section className="product-details">
      {product && (
        <div>
          <NavBar />
          <PathBar nameProduct={product.name} />
          <DetailsProduct
            product={product}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setQuantity={setQuantity}
            quantity={quantity}
            handleAddToCart={handleAddToCart}
          />

          <hr />
          <Footer />
        </div>
      )}
    </section>
  );
};
