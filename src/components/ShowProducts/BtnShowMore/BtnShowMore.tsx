import React from "react";
import { useTranslation } from "react-i18next"

type handleMoreItems = {
  handleMoreItems: () => void;
};

export const BtnShowMore: React.FC<handleMoreItems> = ({ handleMoreItems }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center">
      <button onClick={handleMoreItems} className="btn-show-more btn-yellow">
        {t("showMore")}
      </button>
    </div>
  );
};
