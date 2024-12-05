import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import { ProductType } from "../../types/types";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/?id=${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <section className="product-details">
      {product?.map((product) => (
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
              <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, 
                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </p>
              <div>
                <label htmlFor="l">L</label>
                <label htmlFor="xl">XL</label>
                <label htmlFor="xs">XS</label>
                <input type="radio" id="l" name="input-size" className="hidden" />
                <input type="radio" id="xl" name="input-size"  className="hidden" />
                <input type="radio" id="xs" name="input-size"  className="hidden" />
              </div>
              <div>
                <input type="radio" id="purple" name="input-color" />
                <input type="radio" id="black" name="input-color"  />
                <input type="radio" id="yellow" name="input-color"  />
              </div>
              <div>
                <div>
                  <button>+ 1 -</button>
                </div>
                <div>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </section>
  );
};
