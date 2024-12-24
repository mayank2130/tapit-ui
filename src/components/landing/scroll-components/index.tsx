"use client";

import Link from "next/link";
import React from "react";

interface MenuItem {
  title: string;
  isNew?: boolean;
  href: string;
}

const ALL_COMPONENTS: MenuItem[] = [
  { title: "Scroll Tabs", href: "/components/scroll-tabs" },
  { title: "Card", href: "/components/card" },
  { title: "Dropdown Menu", href: "/components/dropdown-menu" },
  { title: "OTP Input", href: "/components/otp-input" },
  { title: "Flip Words", href: "/components/flip-words" },
  // { title: "Animated Modal" },
  // { title: "Animated Testimonials", isNew: false },
  // { title: "Animated Tooltip" },
  // { title: "Apple Cards Carousel" },
  // { title: "Aurora Background" },
  // { title: "Background Beams" },
  // { title: "Background Beams With Collision" },
  // { title: "Background Boxes" },
  // { title: "Background Gradient" },
  // { title: "Background Lines", isNew: false },
  // { title: "Bento Grid" },
  // { title: "Canvas Reveal Effect" },
  // { title: "Card Hover Effect" },
  // { title: "Card Spotlight" },
  // { title: "Card Stack" },
  // { title: "Cards" },
];

const ScrollComponents = () => {
  return (
    <div className="mt-40 font-mono min-h-screen w-[280px] fixed bg-black p-6 pr-0 text-gray-400 group">
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        /* Hide scrollbar by default */
        .scroll-container::-webkit-scrollbar {
          width: 0;
          opacity: 0;
          transition: all 0.3s;
        }

        /* Show scrollbar on container hover */
        .group:hover .scroll-container::-webkit-scrollbar {
          width: 4px;
          opacity: 1;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background-color: #242124;
          border-radius: 20px;
          min-height: 50px; /* Minimum height of the scrollbar thumb */
        }

        /* For Firefox */
        .scroll-container {
          scrollbar-width: none;
          transition: scrollbar-width 0.3s;
        }

        .group:hover .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #242124 transparent;
        }
      `}</style>

      {/* Main content container with custom scrollbar */}
      <div className="h-[calc(100vh-160px)] overflow-y-auto scroll-container">
        {/* Follow section */}
        <section className="mb-8">
          <h2 className="text-white text-xl font-semibold mb-2">
            Follow for updates
          </h2>
          <Link
            href="https://x.com/mayank01322310"
            className="hover:text-green-500 transition-colors"
          >
            Twitter @mayank
          </Link>
        </section>

        {/* Installation section */}
        <section className="mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">
            Installation
          </h2>
          <div className="space-y-3">
            <p className="hover:text-green-500 cursor-pointer">
              Install Next.js
            </p>
            <p className="hover:text-green-500 cursor-pointer">
              Install Tailwind CSS
            </p>
            <p className="hover:text-green-500 cursor-pointer">Add utilities</p>
            <p className="hover:text-green-500 cursor-pointer">CLI</p>
          </div>
        </section>

        {/* All Components section */}
        <section className="pb-10">
          <h2 className="text-white text-xl font-semibold mb-4">
            All Components
          </h2>
          <div className="space-y-3">
            {ALL_COMPONENTS.map((item) => (
              <Link href={item.href} key={item.title}>
                <div
                  className="flex pt-2 items-center group/item cursor-pointer"
                >
                  <span className="hover:text-green-500 transition-colors">
                    {item.title}
                  </span>
                  {item.isNew && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-500 text-white rounded">
                      New
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollComponents;
