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
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 rounded ${
            page === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </>
  );
};
