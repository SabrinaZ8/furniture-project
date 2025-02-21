import { useEffect, useState } from "react";
import { HiAdjustmentsHorizontal, HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";

import { ProductType, FilterProps } from "../../../types/types";

export const Filter: React.FC<FilterProps> = ({
  setOption,
  allProducts,
  setAllProducts,
  itemsPerPage,
  totalItems,
  page,
  setItemsPerPage,
}) => {
  const [optionSort, setOptionSort] = useState("Default");
  const [initialProducts] = useState([...allProducts]);
  const [showFilter, setShowFilter] = useState(false);

  const optionsCategory = [
    "Default",
    "table",
    "chair",
    "sofa",
    "lighting",
    "bed",
  ];
  const optionsSort = [
    "Default",
    "Sort by Name A-Z",
    "Sort by Name Z-A",
    "Highest price",
    "Lowest price",
  ];

  const sortProducts = (
    products: ProductType[],
    option: string
  ): ProductType[] => {
    if (option === "Default") {
      return [...initialProducts];
    }
    return [...products].sort((a, b) => {
      // First place the order by the discounted value
      const priceA = a.discountedPrice || a.price;
      const priceB = b.discountedPrice || b.price;

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
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const sortedProducts = sortProducts(allProducts, optionSort);
    setAllProducts(sortedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionSort, initialProducts]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[100px] bg-yellow-70  text-xl py-10 px-4 mb-[60px] sm:px-10 md:py-1 lg:px-24">
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center border-gray-350 p-1 relative sm:border-r-2">
          <HiAdjustmentsHorizontal
            className="w-6 h-6"
            onClick={handleShowFilter}
          />
          {showFilter ? (
            <select
              size={optionsCategory.length}
              onChange={(e) => setOption(e.target.value)}
              className="show-filter"
            >
              {optionsCategory.map((category) => (
                <option
                  value={category}
                  key={category}
                  className="hover:bg-gray-200"
                >
                  {category}
                </option>
              ))}
            </select>
          ) : null}

          <p className="ml-5 mr-8 text-base lg:text-xl">Filter</p>
          <HiMiniSquares2X2 className="w-6 h-6" />
          <BsViewList className="w-6 h-6 mx-8" />
        </div>
        <div className="flex items-center p-1">
          <p className="my-5 text-base sm:ml-8 sm:my-0">
            Showing {(page - 1) * itemsPerPage + 1} -{" "}
            {Math.min(page * itemsPerPage, totalItems)} of {totalItems} results
          </p>
        </div>
      </div>
      <div className="flex my-5 items-center text-base lg:text-xl md:my-0">
        <p>Show</p>
        <input
          type="number"
          className="h-14 w-14 bg-white flex items-center justify-center text-center text-gray-350 ml-3 mr-6"
          min={4}
          placeholder={`${itemsPerPage}`}
          onBlur={(e) => setItemsPerPage(Number(e.target.value))}
        />
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
