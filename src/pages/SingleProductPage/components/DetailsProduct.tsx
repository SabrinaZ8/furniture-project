import { DetailsProductProps } from "../../../types/types";
import { formatMoney } from "../../../utils/formatMoney";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

export const DetailsProduct: React.FC<DetailsProductProps> = ({
  product,
  selectedOption,
  setSelectedOption,
  setQuantity,
  quantity,
  handleAddToCart,
}) => {
  return (
    <div
      key={product.id}
      className="flex flex-col xl:flex-row mt-9 mb-14 mx-5 md:mx-10 2xl:mx-28"
    >
      <div className="flex flex-col-reverse sm:flex-row justify-center w-full xl:w-1/2">
        <div className="flex items-center overflow-x-auto flex-row sm:flex-col mt-5 sm:mt-0">
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
        <div className="min-w-[300px] h-[380px] sm:min-w-[423px] sm:h-[500px] sm:mx-8 ">
          <img
            src={product.image}
            alt={product.description}
            className="w-full h-full rounded-md object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2">
        <div className="mt-7 mb-[30px] xl:mt-0">
          {/*Ajustar*/}
          <h2 className="text-3xl lg:text-[42px]">{product.name}</h2>
          <p className="text-xl lg:text-2xl text-gray-350">
            {formatMoney(product.price)}
          </p>
          <div className="flex py-4">
            <img
              src="/icons/group-star.png"
              className="border-r-2 border-gray-350 pr-7 object-contain"
            />
            <p className="text-sm ml-7 text-gray-350">5 Customer Review</p>
          </div>
          <p className="mb-4 w-full md:w-4/5 ">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
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
          <div className="flex items-center justify-center xl:justify-start my-8">
            <div className="border-2 border-gray-350 w-[108px] sm:w-[123px] h-16 p-3 rounded-[10px] flex items-center justify-center mr-5">
              <button
                aria-label="Decrease quantity of items"
                onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              <span className="mx-8 font-medium">{quantity}</span>
              <button
              aria-label="increase quantity of items"
              onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="h-16 w-[200px] sm:w-[215px] border-2 border-black rounded-[15px] text-xl btn-gray"
              >
                Add to cart
              </button>
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
              <td>{product.tags.join(", ")}</td>
            </tr>
            <tr>
              <td>Share</td>
              <td>:</td>
              <td className="flex text-white items-center">
                <TiSocialFacebook className="bg-black w-5 h-5 rounded-full mr-3" />
                <TiSocialLinkedin className="bg-black w-5 h-5 mr-3" />
                <TiSocialTwitter className="bg-black w-5 h-5 rounded-full mr-3" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
