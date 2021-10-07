import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import { navigationItems } from "../../data";
// import Sidebar from "./Sidebar";
import SidebarBtn from "../common/SidebarBtn";
import styles from "../../../styles/sidebar.module.scss";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  const navigation = navigationItems;
  // position: fixed;
  // top: 64px;
  // left: 0;
  return (
    <div>
      <div
        // className="bg-white"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          background: "#121319",
        }}
      >
        {/* Mobile sidebar */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            // className="fixed inset-0 flex z-40 lg:hidden"
            className="fixed inset-0 flex z-40"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} passHref>
                        <p className="-m-2 p-2 block font-medium text-gray-900">
                          {page.name}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* PC sidebar */}

        <header className="relative">
          <nav
            aria-label="Top"
            // className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                {/* toggle */}
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
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

                {/* Search */}
                <div className="flex lg:ml-6">
                  <div className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Main content */}
      {/* <Sidebar>{children}</Sidebar> */}

      <div>
        <div className={styles.sidebar}>
          <SidebarBtn />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
