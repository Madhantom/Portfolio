import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About me",
      href: "#about",
    },
    {
      name: "Project",
      href: "#project",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <>
      <nav
        id="home"
        className="bg-gray-300 text-gray-800 sticky top-0 z-50 shadow-md"
      >
        <div className="p-4 px-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-purple-800">
              Madhan <span className="text-gray-700">T</span>
            </h1>
          </div>

          <ul className="hidden md:flex gap-4 font-medium text-l">
            {navLink.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.name}</a>
              </li>
            ))}
          </ul>

          <button
            className="text-2xl block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden text-white p-4 bg-purple-600 transition-all duration-300`}
        >
          <ul className="flex flex-col gap-4 items-center font-semibold top-0 sticky z-20 ">
            {navLink.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
