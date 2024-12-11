import { BallTriangle } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
    <img src="../../../src/assets/images/LogoFurniro/furniroLogo.png" alt="Logo" className="mb-3"/>
    <span className="font-montserrat font-bold text-3xl mb-6">Furniro</span>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#B88E2F"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
