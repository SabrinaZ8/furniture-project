interface BtnNextProps {
    goToNextPage: () => void;
    page: number;
    totalPages: number
  }

export const BtnNext:React.FC<BtnNextProps> = ({goToNextPage, page, totalPages}) => {
  return (
    <button
      onClick={goToNextPage}
      disabled={page === totalPages}
      className={`${totalPages === page ? "invisible" : "visible"} ml-5 btn-back-next`}
    >
      Next
    </button>
  );
};
