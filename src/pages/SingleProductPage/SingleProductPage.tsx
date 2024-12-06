import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import axios from "axios";
import { ProductType, CartProductType } from "../../types/types";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

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
      <NavBar />
      {product && (
        <div key={product.id} className="flex  mt-9 mb-14 mx-28">
          <div className="flex w-1/2">
            <div>
              <img
                src={product.image}
                alt={product.description}
                className="imgs-side-left"
              />
              <img
                src={product.image}
                alt={product.description}
                className="imgs-side-left"
              />
              <img
                src={product.image}
                alt={product.description}
                className="imgs-side-left"
              />
              <img
                src={product.image}
                alt={product.description}
                className="imgs-side-left"
              />
            </div>
            <div>
              <img
                src={product.image}
                alt={product.description}
                className="min-w-[423px] h-[500px] rounded-md object-cover"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-[30px]"> {/*Ajustar*/}
              <h2 className="text-[42px]">{product.name}</h2>
              <p className="text-2xl text-gray-350">{product.price}</p>
              <div className="flex py-4">
                <img
                  src="../../../src/assets/images/icons/group-star.png"
                  className="border-r-2 border-gray-350 pr-7"
                />
                <p className="text-sm ml-7 text-gray-350">5 Customer Review</p>
              </div>
              <p className="w-4/5 mb-4">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div>
                <span className="text-gray-350 flex my-4">Size</span>
                <div className="flex">
                  <label
                    htmlFor="l"
                    className={`btn-size-cart ${
                      selectedOption === "l"
                        ? "bg-yellow-550 text-white"
                        : "bg-yellow-70 text-black"
                    } `}
                  >
                    L
                  </label>
                  <label
                    htmlFor="xl"
                    className={`btn-size-cart ${
                      selectedOption === "xl"
                        ? "bg-yellow-550 text-white"
                        : "bg-yellow-70 text-black"
                    }`}
                  >
                    XL
                  </label>
                  <label
                    htmlFor="xs"
                    className={`btn-size-cart ${
                      selectedOption === "xs"
                        ? "bg-yellow-550 text-white"
                        : "bg-yellow-70 text-black"
                    }`}
                  >
                    XS
                  </label>
                  <input
                    type="radio"
                    id="l"
                    name="input-size"
                    className="hidden"
                    onChange={() => setSelectedOption("l")}
                  />
                  <input
                    type="radio"
                    id="xl"
                    name="input-size"
                    className="hidden "
                    onChange={() => setSelectedOption("xl")}
                  />
                  <input
                    type="radio"
                    id="xs"
                    name="input-size"
                    className="hidden"
                    onChange={() => setSelectedOption("xs")}
                  />
                </div>
                <span className="text-gray-350 flex my-4">Color</span>
                <div>
                  <input
                    type="radio"
                    id="purple"
                    name="input-color"
                    className="input-radio-color bg-indigo-450"
                  />
                  <input
                    type="radio"
                    id="black"
                    name="input-color"
                    className="input-radio-color bg-black"
                  />
                  <input
                    type="radio"
                    id="yellow"
                    name="input-color"
                    className="input-radio-color bg-yellow-550"
                  />
                </div>
              </div>

              <div className="flex items-center my-8">
                <div className="border-2 border-gray-350 w-[123px] h-16 p-3 rounded-[10px] flex items-center justify-center mr-5">
                  <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>
                    -
                  </button>
                  <span className="mx-8 font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
                <div>
                  <button onClick={handleAddToCart} className="h-16 w-[215px] border-2 border-black rounded-[15px] text-xl">Add to cart</button>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <table className="table-auto border-separate border-spacing-4 text-gray-350">
                <tr>
                  <td>SKU</td>
                  <td>:</td>
                  <td>SS001</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>:</td>
                  <td>{product.Category}</td>
                </tr>
                <tr>
                  <td>Tags</td>
                  <td>:</td>
                  <td>{product.tags}</td>
                </tr>
                <tr>
                  <td>Share</td>
                  <td>:</td>
                  <td>...</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        
      )}
      
      <hr />
      <Footer />
    </section>
  );
};
