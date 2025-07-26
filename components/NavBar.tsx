"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const dropdownLinks = [
  { name: "Features", path: "/features" },
  { name: "Quote", path: "/quote" },
  { name: "Team", path: "/team" },
  { name: "Testimonial", path: "/testimonial" },
  { name: "career", path: "/career" },
];

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="hidden lg:flex items-center justify-between h-20 shadow-gray-300 shadow-sm">
      <Link href="/" className="flex items-center justify-center gap-2 px-10">
        <img src="/images/malogo.png" alt="logo" className="size-14" />
        <h1 className="text-3xl font-bold text-primary">MA ALUMINIUM</h1>
      </Link>
      <div className="flex gap-4 h-full">
        <ul className="flex items-center gap-5 text-md">
          <Link
            href="/"
            className={clsx(
              pathName === "/" && "text-primary font-semibold",
              "hover:text-primary"
            )}
          >
            HOME
          </Link>
          <Link
            href="about"
            className={clsx(
              pathName === "/about" && "text-primary font-semibold",
              "hover:text-primary"
            )}
          >
            ABOUT
          </Link>
          <Link
            href="products"
            className={clsx(
              pathName === "/products" && "text-primary font-semibold",
              "hover:text-primary"
            )}
          >
            PRODUCTS
          </Link>
          <div className="relative group">
            <button
              className={clsx(
                "flex items-center gap-1 pointer",
                "hover:text-primary"
              )}
            >
              GO-TO
              <IoIosArrowDown />
            </button>

            <ul className="absolute left-0 w-40 bg-white shadow-md z-10 hidden group-hover:block">
              <div className="flex flex-col pt-2 gap-1">
                {dropdownLinks.map((nav, index) => {
                  return (
                    <Link
                      key={index}
                      href={nav.path}
                      className={clsx(
                        pathName === nav.path && "bg-primary text-white",
                        "hover:bg-gray-100 px-3"
                      )}
                    >
                      {nav.name}
                    </Link>
                  );
                })}
              </div>
            </ul>
          </div>
          <Link
            href="contact"
            className={clsx(
              pathName === "/contact" && "text-primary font-semibold",
              "hover:text-primary"
            )}
          >
            CONTACT
          </Link>
        </ul>
        <Link
          href="/quote"
          className="bg-primary flex px-10 items-center justify-center text-white gap-2"
        >
          Get a Quote
          <FaArrowRight />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
