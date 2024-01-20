import React, { useContext, useEffect, useState } from "react";
// Context
import { CartContext, SidebarContext } from "../contexts";
// react-icons
import { BsBag } from "react-icons/bs";
// react-router-dom
import { Link } from "react-router-dom";
// Assets
import { Logo } from "../assets";

const Header = () => {
  // Header State
  const [isActive, setIsActive] = useState(false);

  // Context
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Event Listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex flex-col md:flex-row items-center gap-3" >
            <img className="w-[40px] hover:scale-125 hover:animate-spin" src={Logo} alt="" />
            <h2 className="text-3xl md:text-xl">ShopVista</h2>
          </div>
        </Link>

        {/* Cart */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative animate-bounce">
          <BsBag className="text-4xl hover:text-red-500" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
