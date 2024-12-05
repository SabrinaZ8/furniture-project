import { ProductType } from "../../../../src/types/types";

type ProductProps = {
  product: ProductType;
};

export const Product: React.FC<ProductProps> = ({ product }) => {



  return (
    <div className="max-w-[285px] max-h-[446px]">
      <div className="relative">
        <img src={product.image} alt={product.description} />

        {product.isNew ? (
          <span
            className="absolute top-5 right-5 bg-green-450 text-white w-12 h-12 rounded-full 
            flex justify-center items-center"
          >
            New
          </span>
        ) : (
          <span
            className={`absolute top-5 right-5 bg-red-350 text-white w-12 h-12 rounded-full flex justify-center items-center
            ${product.discountPercentage === 0? "hidden" : "flex"}`}>
            -{product.discountPercentage}%
          </span>
        )}
      </div>
      <div className="bg-gray-100 p-4">
        <h2 className="text-gray-750 font-semibold text-2xl">{product.name}</h2>
        <p className="text-gray-898 my-2">{product.description}</p>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-750">
            {product.discountedPrice === 0 ? product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : product.discountedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </h3>
          <span className="text-gray-110 line-through">{product.discountedPrice === 0? null :  product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
      </div>
    </div>
  );
};
