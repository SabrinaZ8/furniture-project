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
      className={`${totalPages === page ? "invisible" : "visible"} px-4 py-2 bg-gray-300 rounded disabled:opacity-50`}
    >
      Next
    </button>
  );
};
