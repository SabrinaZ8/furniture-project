interface BtnBackProps {
    goToPreviousPage: () => void; // Função sem retorno
    page: number; // Número da página atual
  }
export const BtnBack:React.FC<BtnBackProps> = ({goToPreviousPage, page}) => {
  return (
    <button
      onClick={goToPreviousPage}
      className={` ${page === 1 ? "invisible" : "visible"} px-4 py-2 bg-gray-300 rounded disabled:opacity-50`}
    >
      Back
    </button>
  );
};
