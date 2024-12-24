"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Moon, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        type: "spring",
        stiffness: 200,
      }}
      className={`fixed font-mono top-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-32 lg:mx-40 px-4 bg-black">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <div className="flex items-center">
                <span className="text-white font-semibold text-lg">TapUI</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <Link
                href="/components"
                className="text-gray-300 hover:text-white transition"
              >
                Components
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                Templates
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                Showcase
              </Link>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition"
            >
              Discord
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition"
            >
              Twitter
            </Link>

            {/* Theme toggle */}
            <button className="p-2 text-gray-300 hover:text-white transition">
              <Moon size={20} />
            </button>

            {/* Search */}
            <div className="relative">
              <div className="flex items-center bg-black border border-gray-600 rounded-lg px-3 py-1.5">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Components"
                  className="bg-transparent border-none text-sm text-gray-300 placeholder-gray-500 focus:outline-none ml-2"
                />
                <div className="border border-gray-700 rounded px-1.5 py-0.5 ml-2 text-xs text-gray-500">
                  ⌘K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
