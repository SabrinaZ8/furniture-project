import { useEffect, useState } from "react";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";


import { ProductType, FilterProps } from "../../../types/types";

export const Filter: React.FC<FilterProps> = ({setOption, allProducts, setAllProducts, itemsPerPage }) => {
    const [optionSort, setOptionSort] = useState("")


    const optionsCategory = [
        "table",
        "chair",
        "sofa",
        "lighting",
        "bed",
    ]
    const optionsSort = [
        "Default",
        "Sort by Name A-Z",
        "Sort by Name Z-A",
        "Highest price",
        "Lowest price"
    ]

    useEffect(() => {
        const sortProducts = (products: ProductType[]): ProductType[] => {
          switch (optionSort) {
            case "Highest price":
              return [...products].sort((a, b) => b.price - a.price);
            case "Lowest price":
              return [...products].sort((a, b) => a.price - b.price);
            case "Sort by Name A-Z":
              return [...products].sort((a, b) => a.name.localeCompare(b.name));
            case "Sort by Name Z-A":
              return [...products].sort((a, b) => b.name.localeCompare(a.name));
            default:
              return products; // Sem ordenação
          }
        };
    
        const sorted = sortProducts(allProducts);
        setAllProducts(sorted);
      }, [optionSort, allProducts, setAllProducts]);

  return (
    <div className="flex bg-yellow-70 w-full h-[100px] items-center justify-between text-xl mb-[60px]">
      <div className="flex">
        <div className="flex items-center  border-r-2 border-gray-350 p-1">
          <HiAdjustmentsHorizontal className="w-6 h-6"/>
          <select onChange={(e) => setOption(e.target.value )}>
            {optionsCategory.map((category) => (
                <option value={category} key={category}>{category}</option>
            ))}
          </select>
          <p className="ml-5 mr-8">Filter</p>
          <HiMiniSquares2X2 className="w-6 h-6"/>
          <BsViewList className="w-6 h-6  mx-8"/>
        </div>
        <div className="flex items-center p-1">
          <p className="ml-8 text-base">Showing 1-16 of 32 results</p>
        </div>
      </div>
      <div className="flex items-center">
        <p>Show</p>
        <span className="h-14 w-14 bg-white flex items-center justify-center text-gray-350 ml-3 mr-6">{itemsPerPage}</span>
        <p>Sort By</p>
        <select onChange={(e) => setOptionSort(e.target.value)} className="ml-3 text-gray-350 h-14 px-1">
        {optionsSort.map((sort) => (
                <option value={sort} key={sort}>{sort}</option>
            ))}
        </select>
      </div>
    </div>
  );
};
