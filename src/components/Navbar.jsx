import React from "react";

import { navLinks } from "../constants";
import { logo } from "../assets/images";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-20 flex items-center mt-3">
        <nav className="navbar w-full grid md:grid-cols-12 grid-cols-6 gap-4">
          <div className="logo col-span-3 flex items-center justify-start">
            <img src={logo} alt="Logo" className="object-contain h-12 w-auto" />
          </div>

          <div className="menu col-span-6 md:flex items-center justify-center hidden">
            <ul className="flex gap-10 font-medium text-lg">
              {navLinks.map((link) => (
                <li key={link.name} className="cursor-pointer">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="signup col-span-3 flex items-center justify-end font-medium">
            <Button buttonText="SIGN UP" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
