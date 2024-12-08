import React from "react";

type handleMoreItems = {
  handleMoreItems: () => void;
};

export const BtnShowMore: React.FC<handleMoreItems> = ({ handleMoreItems }) => {
  return (
    <div className="flex justify-center items-center">
      <button onClick={handleMoreItems} className="btn-show-more">
        Show More
      </button>
    </div>
  );
};
