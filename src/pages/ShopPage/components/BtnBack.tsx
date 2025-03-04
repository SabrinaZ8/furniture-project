import { useTranslation } from "react-i18next"

interface BtnBackProps {
    goToPreviousPage: () => void; 
    page: number;
  }
export const BtnBack:React.FC<BtnBackProps> = ({goToPreviousPage, page}) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={goToPreviousPage}
      className={` ${page === 1 ? "invisible" : "visible"} mr-5 btn-back-next`}
    >
      {t("back")}
    </button>
  );
};
