interface BtnBackProps {
    goToPreviousPage: () => void; // Função sem retorno
    page: number; // Número da página atual
  }
export const BtnBack:React.FC<BtnBackProps> = ({goToPreviousPage, page}) => {
  return (
    <button
      onClick={goToPreviousPage}
      className={` ${page === 1 ? "invisible" : "visible"} mr-5 btn-back-next`}
    >
      Back
    </button>
  );
};
