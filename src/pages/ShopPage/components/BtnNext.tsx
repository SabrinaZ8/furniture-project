import { useTranslation } from "react-i18next"

interface BtnNextProps {
    goToNextPage: () => void;
    page: number;
    totalPages: number
  }

export const BtnNext:React.FC<BtnNextProps> = ({goToNextPage, page, totalPages}) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={goToNextPage}
      disabled={page === totalPages}
      className={`${totalPages === page ? "invisible" : "visible"} ml-5 btn-back-next`}
    >
      {t("next")}
    </button>
  );
};
