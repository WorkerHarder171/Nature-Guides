import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const menuItems = [
    { text: "Home", link: "home" },
    { text: "Introduction", link: "introduction" },
    { text: "Information", link: "information" },
    { text: "Contact Us", link: "contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`${
      scrollY > 72 ? "bg-[#151817] text-white " : ""
    } fixed top-0 left-0 w-full py-7 px-24 flex justify-between items-center z-50 transition duration-300`}
  >
    <div className="navbar-nav uppercase lg:text-2xl sm:text-lg tracking-widest text-white">
      <a href="/">nature guide</a>
    </div>
    <ul className="flex items-center justify-evenly w-5/12 lg:inline-flex sm:hidden">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            smooth={true}
            to={item.link}
            className="group flex capitalize items-center justify-between relative overflow-hidden py-2 text-xl text-white focus:outline-none focus:ring active:text-white cursor-pointer"
          >
            <span className="ease capitalize absolute bottom-0 left-0 right-0 h-0 w-0 border-b border-white transition-all duration-700 group-hover:w-full"></span>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
    <div className="wrapper flex items-center gap-14">
      <button className="relative capitalize border border-[#aaa] px-6 py-4 text-xl duration-300 hover:text-white group overflow-hidden lg:inline-flex sm:hidden">
        <span className="relative z-10 text-white">discover us</span>
        <span className="absolute bottom-0 left-0 h-full w-full bg-white opacity-10 transform -translate-x-full translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></span>
      </button>
      <button
        className="wrapper-span flex flex-col gap-2 lg:hidden"
        onClick={() => setToggleNavbar(!toggleNavbar)}
      >
        <span className="bg-white px-4 border"></span>
        <span className="bg-white px-4 border"></span>
        <span className="bg-white px-4 border"></span>
      </button>
    </div>
    {/* Mobile Menu */}
    <div
      className={`${
        toggleNavbar ? "translate-x-0" : "-translate-x-full"
      } p-24 lg:hidden fixed top-0 left-0 w-8/12 h-full bg-[#151817] z-50 transition-transform duration-300`}
    >
      <div className="navbar-nav uppercase flex items-center justify-between lg:text-2xl sm:text-lg tracking-widest">
        <a href="/">nature guide</a>
        <RxCross2
          className="text-4xl"
          onClick={() => setToggleNavbar(false)}
        />
      </div>
      <ul className="flex flex-col items-start text-[#FDFDFD] space-y-4 pt-10">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              smooth={true}
              duration={500}
              className="font-semibold text-lg cursor-pointer transition duration-300 hover:text-green-600"
              onClick={() => setToggleNavbar(false)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  );
}
