"use client";

import React, { useState, useEffect } from "react";
import { Moon, Search } from "lucide-react";

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200  ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 bg-black">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg">Brand</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Components
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Templates
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Showcase
              </a>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Discord
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Twitter
            </a>

            {/* Theme toggle */}
            <button className="p-2 text-gray-300 hover:text-white transition">
              <Moon size={20} />
            </button>

            {/* Search */}
            <div className="relative">
              <div className="flex items-center bg-gray-900 rounded-lg px-3 py-1.5">
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
    </nav>
  );
};

export default Navbar;
