import React, { useState } from "react";
import logo from "../assets/hopechainlogo.png";
import { useModalStore } from "../store/modalStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModalStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed mx-8 md:mx-auto z-20 my-8 md:max-w-3xl inset-0 rounded-xl bg-black px-4 lg:px-6 h-16 flex items-center justify-between">
      <a className="flex items-center justify-center" href="#start">
        <img src={logo} className="w-8 h-8 rounded-2xl" alt="Hopechain logo" />
        <span className="ml-2 text-md sm:text-xl font-bold text-white">
          Hopechain
        </span>
      </a>
      <>
        <nav className="ml-auto gap-4 sm:gap-6 text-white hidden sm:flex">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#usage"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#charities"
          >
            Charities
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About Us
          </a>
          <button
            onClick={openModal}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            View Awards
          </button>
        </nav>
        <button
          onClick={toggleMenu}
          className="flex sm:hidden text-white text-2xl"
        >
          <p>☰</p>
        </button>
        {isOpen && (
          <div className="absolute top-16 right-0 bg-black rounded-md shadow-lg p-4 flex flex-col gap-2 sm:hidden text-white">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#usage"
            >
              How It Works
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#charities"
            >
              Charities
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              About Us
            </a>
            <button
              onClick={openModal}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              View Awards
            </button>
          </div>
        )}
      </>
    </header>
  );
};

export default Header;
