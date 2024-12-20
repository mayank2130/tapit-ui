"use client";
import React, { useState } from "react";

export const TabBar = () => {
  const tabsnav = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "documents", icon: "📄", label: "Documents" },
    { id: "chat", icon: "💬", label: "Chat" },
    { id: "profile", icon: "👤", label: "Profile" },
  ];

  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex mt-10 justify-center bg-gray-800 py-2 rounded-t-full rounded-b-full shadow-lg">
      <div className="flex items-center justify-between w-11/12 max-w-md gap-4">
        {tabsnav.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center p-3 rounded-full ${
              activeTab === tab.id
                ? "bg-green-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
