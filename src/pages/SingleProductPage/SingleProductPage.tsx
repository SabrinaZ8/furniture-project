import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import axios from "axios";
import { ProductType, CartProductType } from "../../types/types";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null); // Ajuste para armazenar um único produto

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      const productWithQuantity: CartProductType = {
        ...product,
        quantity: quantity
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
        <div key={product.id}>
          <div>
            <div>
              <img src={product.image} alt={product.description} />
              <img src={product.image} alt={product.description} />
              <img src={product.image} alt={product.description} />
              <img src={product.image} alt={product.description} />
            </div>
            <div>
              <img src={product.image} alt={product.description} />
            </div>
          </div>
          <div>
            <div>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <div>
                <p>Estrelas</p>
                <p>5 Customer Review</p>
              </div>
              <p>
                Setting the bar as one of the loudest speakers in its class,
                the Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a sound.
              </p>
              <div>
                <label htmlFor="l">L</label>
                <label htmlFor="xl">XL</label>
                <label htmlFor="xs">XS</label>
                <input type="radio" id="l" name="input-size" className="hidden" />
                <input type="radio" id="xl" name="input-size" className="hidden" />
                <input type="radio" id="xs" name="input-size" className="hidden" />
              </div>
              <div>
                <input type="radio" id="purple" name="input-color" />
                <input type="radio" id="black" name="input-color" />
                <input type="radio" id="yellow" name="input-color" />
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                  />
                </div>
                <div>
                  <button onClick={handleAddToCart}>Add to cart</button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </section>
  );
};
