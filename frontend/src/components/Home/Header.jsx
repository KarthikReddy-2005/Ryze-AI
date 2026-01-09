import React from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        <a href="/">
          <p className="text-4xl font-bold ">Ryze</p>
        </a>

        <div className="hidden sm:flex items-center gap-8 transition duration-500 text-slate-800">
          <a href="/casestudies" className="hover:text-orange-600 transition">
            Case Studies
          </a>
          <a href="/aboutus" className="hover:text-orange-600 transition">
            About us
          </a>
        </div>

        <div className="flex gap-2">
          <a
            href=""
            className="hidden md:block px-6 py-2 bg-orange-500 hover:bg-orange-700 active:scale-95 transition-all rounded-full text-white"
          >
            Login
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/" className="text-white">
          Home
        </a>
        <a href="/casestudies" className="text-white">
          Case studies
        </a>
        <a href="/aboutus" className="text-white">
          About us
        </a>
        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-orange-600 hover:bg-orange-700 transition text-white rounded-md flex"
        >
          X
        </button>
      </div>
    </>
  );
};

export default Header;
