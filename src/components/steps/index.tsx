"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "cli", label: "CLI" },
  { id: "manual", label: "Manual" },
];

const InstallationGuide = () => {
  const [activeTab, setActiveTab] = useState<string>("cli");

  return (
    <div className="p-6 ml-72 bg-black text-gray-300">
      <h1 className="text-2xl font-bold text-white mb-6">Installation</h1>

      {/* Tabs */}
      <div className="relative mb-8">
        <div className="flex space-x-4 relative z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-sm transition-colors",
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Install Dependencies Section */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">
            1. Install dependencies
          </h2>
          <div className="bg-[#1B1B1B] rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-400">npm install nativewind</span>
                <br />
                <span className="text-gray-400">
                  npm install --save-dev tailwind@3.3.2
                </span>
                {/* <span className="text-green-400">framer-motion </span>
                <span className="text-blue-400">clsx </span>
                <span className="text-yellow-400">tailwind-merge</span> */}
              </div>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "npm install nativewind && npm install --save-dev tailwind@3.3.2"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Add util file Section */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">
            2. Setup Tailwind CSS
          </h2>
          <div className="mb-2 font-mono text-sm text-gray-400">
            Run{" "}
            <span className="bg-slate-800 rounded-sm ">
              npx tailwindcss init
            </span>{" "}
            to create a tailwind.config.js file Add the paths to all of your
            component files in your{" "}
            <span className="bg-slate-800 rounded-sm ">tailwind.config.js</span>{" "}
            file. Remember to replace{" "}
            <span className="bg-slate-800 rounded-sm ">
              `{"<"}custom directory{">"}`
            </span>{" "}
            with the actual name of your directory e.g. screens.
          </div>
          <div className="bg-[#1B1B1B] rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center"></div>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>
            <pre className="text-sm">
              <span className="text-green-300">module.exports</span>
              <span className="text-purple-400"> = </span>
              <span className="text-purple-400">{"{"}</span>
              {"\n  "}
              <span className="text-white">content:</span>
              <span className="text-blue-400"> [&quot;</span>
              <span className="text-amber-500">
                ./App.{"{(js, jsx, ts, tsx)}"}, ./&lt;custom
                directory&gt;/&#42;&#42;/&#42;.{"{(js, jsx, ts, tsx)}"}
              </span>
              <span className="text-blue-400">&quot;],</span>
              {"\n  "}
              <span className="text-white">theme:</span>
              <span className="text-purple-400"> {"{"}</span>
              {"\n    "}
              <span className="text-white">extend:</span>
              <span className="text-purple-400"> {"{}"},</span>
              {"\n  "}
              <span className="text-purple-400">{"},"}</span>
              {"\n  "}
              <span className="text-white">plugins:</span>
              <span className="text-blue-400"> []</span>
              {"\n"}
              <span className="text-purple-400">{"};"}</span>
              {"\n"}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-4">
            3. Add the Babel Plugin
          </h2>
          <div className="mb-2 font-mono text-sm text-gray-400">
            Modify your babel.config.js
          </div>
          <div className="bg-[#1B1B1B] rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center"></div>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};`
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>
            <pre className="text-sm">
              <span className="text-green-300">module.exports</span>
              <span className="text-purple-400"> = function </span>
              <span className="text-yellow-400">{"("}</span>
              <span className="text-white">api</span>
              <span className="text-yellow-500">{") {"}</span>
              {"\n  "}
              <span className="text-green-400">api</span>
              <span className="text-purple-400">.</span>
              <span className="text-blue-400">cache</span>
              <span className="text-purple-400">{"("}</span>
              <span className="text-red-500">true</span>
              <span className="text-purple-400">{");"}</span>
              {"\n  "}
              <span className="text-purple-400">return {"{"}</span>
              {"\n    "}
              <span className="text-white">presets: </span>
              <span className="text-blue-400">{"["}</span>
              <span className="text-amber-500">&quot;babel-preset-expo&quot;</span>
              <span className="text-blue-400">{"]"}</span>,{"\n    "}
              <span className="text-white">presets: </span>
              <span className="text-blue-400">{"["}</span>
              <span className="text-amber-500">&quot;nativewind/babel&quot;</span>
              <span className="text-blue-400">{"]"}</span>,{"\n  "}
              <span className="text-purple-400">{"};"}</span>
              {"\n"}
              <span className="text-yellow-500">{"};"}</span>
              {"\n"}
            </pre>
          </div>
        </section>

        {/* Add util file Section */}
        {/* <section>
          <h2 className="text-lg font-semibold text-white mb-4">
            Add util file
          </h2>
          <div className="mb-2 font-mono text-sm text-gray-400">
            lib/utils.ts
          </div>
          <div className="bg-[#1B1B1B] rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="flex h-6 items-center px-2 rounded bg-blue-400/10">
                  <span className="text-[11px] font-medium text-blue-400">
                    TS
                  </span>
                </div>
              </div>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>
            <pre className="text-sm">
              <span className="text-purple-400">import</span>
              <span className="text-white"> {"{ ClassValue, clsx }"} </span>
              <span className="text-purple-400">from</span>
              <span className="text-green-400"> "clsx"</span>;{"\n"}
              <span className="text-purple-400">import</span>
              <span className="text-white"> {"{ twMerge }"} </span>
              <span className="text-purple-400">from</span>
              <span className="text-green-400"> "tailwind-merge"</span>;{"\n\n"}
              <span className="text-purple-400">export function</span>
              <span className="text-blue-400"> cn</span>
              <span className="text-white">(...</span>
              <span className="text-orange-400">inputs</span>
              <span className="text-white">: ClassValue[]) {"{"}</span>
              {"\n  "}
              <span className="text-purple-400">return</span>
              <span className="text-blue-400"> twMerge</span>
              <span className="text-white">(</span>
              <span className="text-blue-400">clsx</span>
              <span className="text-white">(inputs));</span>
              {"\n"}
              <span className="text-white">{"}"}</span>
            </pre>
          </div>
        </section> */}

        {/* Copy the source code Section */}
        <section>
          {/* <h2 className="text-lg font-semibold text-white mb-4">
            Copy the source code
          </h2>
          <div className="mb-2 font-mono text-sm text-gray-400">
            components/ui/3d-pin.tsx
          </div> */}

          {/* <CodeDisplay /> */}

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">
              4. Add Component
            </h2>
            <div className="bg-[#1B1B1B] rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400">
                    npx @mayank2310/my-lib-ui add tabs
                  </span>
                </div>
                <button
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "npx @mayank2310/my-lib-ui add button"
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default InstallationGuide;
