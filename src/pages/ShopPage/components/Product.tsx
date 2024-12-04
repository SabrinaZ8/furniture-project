import { ProductType } from "../../../../src/types/types"

type ProductProps = {
    product: ProductType;
  };

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="max-w-[285px] max-h-[446px]">
        <div className="relative">
            <img src={product.image} alt={product.description} />
            <span className="absolute top-5 right-5 bg-red-350 text-white w-12 h-12 rounded-full 
            flex justify-center items-center">-{product.discountPercentage}%</span>
        </div>
        <div className="bg-gray-100 p-4">
            <h2 className="text-gray-750 font-semibold text-2xl">{product.name}</h2>
            <p className="text-gray-898 my-2">{product.description}</p>
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-gray-750">{product.discountedPrice}</h3>
                <span className="text-gray-110 line-through">{product.price}</span>
            </div>
        </div>
    </div>
  )
}
