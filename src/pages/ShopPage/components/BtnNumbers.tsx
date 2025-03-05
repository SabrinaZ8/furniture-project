interface BtnNumbersProps {
  totalPages: number;
  handlePageClick: (pageNumber: number) => void;
  page: number;
}
export const BtnNumbers: React.FC<BtnNumbersProps> = ({
  totalPages,
  handlePageClick,
  page,
}) => {
  return (
    <>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          aria-label="page number"
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`flex items-center justify-center rounded-lg h-[60px] min-w-[60px] w-[60px] text-xl mx-2 md:mx-5 ${
            page === index + 1
              ? "bg-yellow-550 text-white"
              : "bg-yellow-70 text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </>
  );
};
