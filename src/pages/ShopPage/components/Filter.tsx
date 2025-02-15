import { useEffect, useState } from "react";
import { HiAdjustmentsHorizontal, HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";

import { ProductType, FilterProps } from "../../../types/types";

export const Filter: React.FC<FilterProps> = ({
  setOption,
  allProducts,
  setAllProducts,
  itemsPerPage
}) => {
  const [optionSort, setOptionSort] = useState("Default");
  const [initialProducts] = useState([...allProducts]);
  const [showFilter, setShowFilter] = useState(false)

  const optionsCategory = ["Default", "table", "chair", "sofa", "lighting", "bed"];
  const optionsSort = [
    "Default",
    "Sort by Name A-Z",
    "Sort by Name Z-A",
    "Highest price",
    "Lowest price",
  ];

  const sortProducts = (products: ProductType[], option: string): ProductType[] => {
    if (option === "Default") {
      return [...initialProducts]; 
    }
    return [...products].sort((a, b) => { // First place the order by the discounted value
      const priceA = a.discountedPrice ?? a.price;
      const priceB = b.discountedPrice ?? b.price;

      switch (option) {
        case "Highest price":
          return priceB - priceA;
        case "Lowest price":
          return priceA - priceB;
        case "Sort by Name A-Z":
          return a.name.localeCompare(b.name);
        case "Sort by Name Z-A":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter)
  }

  useEffect(() => {
    const sortedProducts = sortProducts(allProducts, optionSort);
    setAllProducts(sortedProducts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionSort, initialProducts]); 

  return (
    <div className="flex bg-yellow-70 w-full h-[100px] items-center justify-between text-xl  px-24 mb-[60px]">
      <div className="flex">
        <div className="flex items-center border-r-2 border-gray-350 p-1 relative">
          <HiAdjustmentsHorizontal className="w-6 h-6" onClick={handleShowFilter} />
          {showFilter ? <select size={optionsCategory.length} onChange={(e) => setOption(e.target.value)} className="show-filter">
            {optionsCategory.map((category) => (
              <option value={category} key={category} className="hover:bg-gray-200">
                {category}
              </option>
            ))}
          </select> : null }
          
          <p className="ml-5 mr-8">Filter</p>
          <HiMiniSquares2X2 className="w-6 h-6" />
          <BsViewList className="w-6 h-6 mx-8" />
        </div>
        <div className="flex items-center p-1">
          <p className="ml-8 text-base">Showing 10 - 20 of {allProducts.length} results</p>
        </div>
      </div>
      <div className="flex items-center">
        <p>Show</p>
        <span className="h-14 w-14 bg-white flex items-center justify-center text-gray-350 ml-3 mr-6">
          {itemsPerPage}
        </span>
        <p>Sort By</p>
        <select
          onChange={(e) => setOptionSort(e.target.value)}
          className="ml-3 text-gray-350 h-14 px-1"
        >
          {optionsSort.map((sort) => (
            <option value={sort} key={sort}>
              {sort}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
