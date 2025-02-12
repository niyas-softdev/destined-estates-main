"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "../molecules/SideBar";
import classNames from "classnames";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import headerNavLinks from "@/content/headerNavLinks";

const Menu = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dropdown visibility
  const handleMouseEnter = (title) => {
    setOpenDropdowns((prev) => ({ ...prev, [title]: true }));
  };

  const handleMouseLeave = (title) => {
    setOpenDropdowns((prev) => ({ ...prev, [title]: false }));
  };

  return (
    <header
      className={classNames(
        "z-40 fixed top-0 w-full transition-all duration-500",
        scrolled
          ? "bg-white/60 text-gray-800 shadow-lg backdrop-blur-lg"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Destined Estates">
          <img
            src={"/static/Logo_1.png"}
            alt="LOGO"
            className="w-40 lg:w-52 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center space-x-10">
          {headerNavLinks.map(({ title, href, links }) => {
            const active = pathName?.includes(href);
            return (
              <div
                key={title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={() => handleMouseLeave(title)}
              >
                <Link
                  href={href}
                  className={classNames(
                    "relative pb-1 text-base font-semibold tracking-wide transition duration-300",
                    {
                      "text-gray-800": scrolled,
                      "text-white": !scrolled,
                      'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:scale-x-0 after:bg-[#ff8200] after:transition-transform after:duration-300 group-hover:after:scale-x-100':
                        active,
                    }
                  )}
                >
                  {title}
                </Link>

                {/* Dropdown Menu */}
                {links.length > 0 && (
                  <div
                    className={classNames(
                      "absolute left-0 mt-6 w-56 bg-white/70 backdrop-blur-lg shadow-lg rounded-lg py-3 z-10 transition-opacity duration-300",
                      {
                        "opacity-100 visible": openDropdowns[title],
                        "opacity-0 invisible": !openDropdowns[title],
                      }
                    )}
                  >
                    {links.map(({ href, title }) => (
                      <Link
                        key={title}
                        href={href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-[#ff8200] transition-colors duration-300 rounded-md"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar for smaller screens */}
        <div className="xl:hidden">
          <SideBar />
        </div>

        {/* Icons */}
        <div className="hidden xl:flex items-center space-x-6">
          <div
            className={`p-2 rounded-full transition-all duration-700 hover:scale-105 hover:shadow-[0_4px_20px_rgba(32,32,64,0.8)] ${
              scrolled
                ? "bg-gradient-to-r from-blue-900 via-purple-800 to-teal-700"
                : "bg-gray-800"
            }`}
          >
            <MdEmail
              size={21}
              className={classNames(
                "transition-colors duration-500",
                scrolled ? "text-teal-300" : "text-gray-500"
              )}
            />
          </div>
          <div
            className={`p-2 rounded-full transition-all duration-700 hover:scale-105 hover:shadow-[0_4px_20px_rgba(32,32,64,0.8)] ${
              scrolled
                ? "bg-gradient-to-r from-blue-900 via-purple-800 to-teal-700"
                : "bg-gray-800"
            }`}
          >
            <FaLocationDot
              size={21}
              className={classNames(
                "transition-colors duration-500",
                scrolled ? "text-teal-300" : "text-gray-500"
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
