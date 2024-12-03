import { Link } from "react-router-dom"
import { TbUserExclamation } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";


export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-24 mx-14">
      <Link to="/"  className="flex">
        <img src="../../../public/LogoFurniro/furniroLogo.png" alt="Logo Furniro" className="mr-2"/>
        <span className="font-montserrat font-bold text-3xl">Furniro</span>
      </Link>
      <div className="w-1/3">
        <ul className="flex font-medium justify-between">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="flex">
        <TbUserExclamation className="w-7 h-6 mr-3.5" />
        <AiOutlineShoppingCart className="w-7 h-6"/>
      </div>
    </nav>
  )
}
