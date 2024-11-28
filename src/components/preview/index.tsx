"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn, tabsPreview } from "@/lib/utils";
import TabsComponent from "../tabs-component";
import { PhoneScreen } from "../phonescreen";
import { tabsCode } from "@/lib/codeString";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
];

const Preview = () => {
  const [activeTab, setActiveTab] = useState<string>("preview");

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

        <div className="border flex items-center justify-center bg-[#101010] border-[#1c1a1a55] ">
          {activeTab !== "code" && (
            <PhoneScreen>
              <TabsComponent
                tabs={tabsPreview}
                defaultActiveTab="holdings"
                onChange={(tabId) => console.log("Selected:", tabId)}
              />
            </PhoneScreen>
          )}
        </div>
        {activeTab === "code" && (
          <div className="bg-[#101010] rounded-lg p-4 font-mono text-sm max-h-96">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center"></div>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText(tabsCode)}
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
            <pre className="text-sm overflow-y-auto max-h-72 scrollbar-hide">
              <code>{tabsCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
