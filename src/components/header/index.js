import { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import MobileLogo from "../../assets/images/mobilelogo.png";
import "./style.css";
import Timer from "../timer";

const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="bg-primary">
        <div className="container p-4">
          <div className=" w-full max-w-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
            <h1 className="text-md sm:text-xl mb-2 ">Mint Day</h1>
            <Timer />
            {/* <p className=" text-xl sm:text-2xl">30 Sepetember 2021</p> */}
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="bg-white  font-thin text-sm text-black py-4 relative">
        {/* Desktop view Nav 👇*/}
        <div className="hidden md:block">
          <nav className="container flex justify-between items-center">
            <div className="flex">
              <DesktopNavItem text="About" link="#about" />
              <DesktopNavItem text="Buy ViralGoats" link="#buyviralgot" />
            </div>
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div className="flex">
              <DesktopNavItem text="Roadmap" link="#roadmap" />
              <DesktopNavItem text="FAQ's" link="#faq" />
            </div>
          </nav>
        </div>
        {/* Desktop view Nav 👆 */}
        <div className="md:hidden">
          <nav className="container flex justify-between items-center">
            <div>
              <img src={MobileLogo} alt="logo" />
            </div>
            <div className="text-dark text-lg cursor-pointer lg:hidden ml-8">
              <span
                onClick={() => setOpen(!open)}
                className="transition-all duration-1000 text-xl bar"
              >
                {open ? (
                  <i class="fas fa-times transition-all "></i>
                ) : (
                  <i className="fas fa-bars transition-all "></i>
                )}
              </span>
            </div>
          </nav>
          <div
            className={`mobile-nav bg-dark ${open ? "active" : null} lg:hidden`}
          >
            <ul className="list-none text-center p-8 text-white bg-primary">
              <li className="p-2 text-md">
                <a href="#about">About</a>
              </li>
              <li className="p-2 text-md">
                <a href="#buyviralgot">Buy ViralGoats</a>
              </li>
              <li className="p-2 text-md">
                <a href="#roadmap">Roadmap</a>
              </li>
              <li className="p-2 text-md">
                <a href="#faq">FAQ's</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;

const DesktopNavItem = ({ text, link = "/" }) => (
  <a href={link} className="block py-2 mx-4">
    {text}
  </a>
);
