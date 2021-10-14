import Link from "next/link";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { NavbarProps } from "../../interfaces";
import Toggle from "./Toggle";
import { useState } from "react";

const Navbar = ({ setOpen }: NavbarProps) => {
  const [theme, setTheme] = useState("dark");

  return (
    <header className="relative">
      <nav
        aria-label="Top"
        // className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="border-b border-gray-200">
          <div className="flex items-center" style={{ padding: "15px 0" }}>
            {/* toggle */}
            <button
              type="button"
              className=" p-2 ml-4 rounded-md text-gray-400 lg:hidden"
              style={{ background: "var(--card-background)" }}
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/overview" passHref>
                <Image src="/logo.svg" alt="logo" height={40} width={140} />
              </Link>
            </div>

            <section
              className="w-full mr-2 flex justify-end"
              // style={{ background: "red" }}
            >
              <div className="nav__search">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search  Auctions"
                    className="w-4/5 py-2 border-b-2 border-none outline-none bg-transparent focus:bg-transparent"
                  />
                </div>
              </div>
              <div className="flex lg:ml-6 nav__searchMobile">
                <div className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>
              <div className="nav__currencyName">
                <Image
                  src={
                    theme === "dark"
                      ? "/assets/layout/eth.svg"
                      : "/assets/layout/eth-black.svg"
                  }
                  alt="eth"
                  height={20}
                  width={20}
                />
                <p style={{ color: "var(--card-color)" }}>Ethereum</p>
              </div>
              <div className="nav__profileBtn">
                <div style={{ marginRight: "10px" }}>
                  <p
                    style={{
                      color: "var(--card-background)",
                      fontSize: "14px",
                    }}
                  >
                    0.3223 ETH
                  </p>
                  <p style={{ fontSize: "10px" }}>0x47Ea...22B2</p>
                </div>
                <Image
                  src="/assets/layout/avatar.png"
                  alt="eth"
                  height={20}
                  width={20}
                />
              </div>
              <button className="nav__themeBtn">
                <Toggle theme={theme} setTheme={setTheme} />
              </button>
            </section>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
