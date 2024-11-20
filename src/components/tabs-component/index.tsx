import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
}

const TabsComponent: React.FC<TabsProps> = ({ tabs, defaultActiveTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className="flex overflow-x-auto space-x-2 p-1 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`
        px-6 py-2 rounded-full text-sm font-medium
        transition-all duration-200
        ${
          activeTab === tab.id
            ? "bg-black text-white border-1 border-gray-600"
            : "bg-transparent text-gray-400 hover:bg-gray-300 hover:text-black"
        }
      `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsComponent;
