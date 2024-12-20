import React, { useCallback, useEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
}

const TabsComponent: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  onChange,
}) => {
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: WheelEvent) => {
    const container = tabContainerRef.current;
    if (!container) return;

    // Prevent default scroll behavior
    e.preventDefault();

    // Check if the container can scroll horizontally
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScrollLeft = container.scrollLeft;

    // Only scroll if we're not at the scroll limits
    if (
      (e.deltaY > 0 && currentScrollLeft < maxScrollLeft) ||
      (e.deltaY < 0 && currentScrollLeft > 0)
    ) {
      container.scrollLeft += e.deltaY;
    }
  }, []);

  useEffect(() => {
    const container = tabContainerRef.current;
    if (!container) return;

    // Add wheel event listener with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);


  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div
      className="flex overflow-x-auto space-x-2 p-1 scrollbar-hide"
      ref={tabContainerRef}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`
        px-6 py-2 rounded-full text-sm font-medium
        transition-all duration-200
        ${
          activeTab === tab.id
            ? "bg-black border text-white border-1 border-gray-600"
            : "bg-transparent text-white hover:bg-gray-300 hover:text-black"
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
