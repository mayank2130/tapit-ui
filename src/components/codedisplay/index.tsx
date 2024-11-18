import React from 'react';

const CodeDisplay = () => {
  return (
    <div className="bg-[#1B1B1B] rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="flex h-6 items-center px-2 rounded bg-blue-400/10">
            <span className="text-[11px] font-medium text-blue-400">
              TSX
            </span>
          </div>
        </div>
        <button
          className="text-gray-400 hover:text-white transition-colors"
          onClick={() => navigator.clipboard.writeText(`import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { tailwind } from 'nativewind';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tailwind('flex flex-row gap-2 p-1')}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          onPress={() => handleTabClick(tab.id)}
          style={tailwind(\`
            flex-1 min-w-fit px-6 py-2 rounded-full text-sm font-medium
            transition-all duration-200 hover:bg-gray-800
            \${activeTab === tab.id ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-400'}
          \`)}
        >
          <Text>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};`)}
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
        <span className="text-white"> React, {"{ useState }"} </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> &apos;react&apos;</span>;{"\n"}
        <span className="text-purple-400">import</span>
        <span className="text-white"> {"{ ScrollView, TouchableOpacity, Text }"} </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> &apos;react-native&apos;</span>;{"\n"}
        <span className="text-purple-400">import</span>
        <span className="text-white"> {"{ tailwind }"} </span>
        <span className="text-purple-400">from</span>
        <span className="text-green-400"> &apos;nativewind&apos;</span>;{"\n\n"}

        <span className="text-purple-400">interface</span>
        <span className="text-blue-400"> Tab</span>
        <span className="text-white"> {"{"}</span>{"\n  "}
        <span className="text-orange-400">id</span>
        <span className="text-white">: </span>
        <span className="text-yellow-400">string</span>;{"\n  "}
        <span className="text-orange-400">label</span>
        <span className="text-white">: </span>
        <span className="text-yellow-400">string</span>;{"\n"}
        <span className="text-white">{"}"}</span>{"\n\n"}

        <span className="text-purple-400">interface</span>
        <span className="text-blue-400"> TabsProps</span>
        <span className="text-white"> {"{"}</span>{"\n  "}
        <span className="text-orange-400">tabs</span>
        <span className="text-white">: </span>
        <span className="text-yellow-400">Tab</span>
        <span className="text-white">[];</span>{"\n  "}
        <span className="text-orange-400">defaultActiveTab</span>
        <span className="text-white">?: </span>
        <span className="text-yellow-400">string</span>;{"\n  "}
        <span className="text-orange-400">onChange</span>
        <span className="text-white">?: (</span>
        <span className="text-orange-400">tabId</span>
        <span className="text-white">: </span>
        <span className="text-yellow-400">string</span>
        <span className="text-white">) =`{'>'}` </span>
        <span className="text-yellow-400">void</span>;{"\n"}
        <span className="text-white">{"}"}</span>{"\n\n"}

        <span className="text-purple-400">export const</span>
        <span className="text-blue-400"> Tabs</span>
        <span className="text-white">: React.FC</span>
        <span className="text-yellow-400">{"<TabsProps>"}</span>
        <span className="text-white"> = ({"{"}tabs, defaultActiveTab, onChange{"}"}) =`{'>'}` </span>
        <span className="text-white">{"{"}</span>{"\n  "}
        {/* Continue with the rest of the code following the same syntax highlighting pattern */}
      </pre>
    </div>
  );
};

export default CodeDisplay;