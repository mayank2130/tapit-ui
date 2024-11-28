export const tabsCode = `import React, { useState } from 'react';
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
            \${
          activeTab === tab.id
            ? "bg-black text-white border-1 border-gray-600"
            : "bg-transparent text-white hover:bg-gray-300 hover:text-black"
        }
          \`)}
        >
          <Text>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};`;

export const cardsCode = `import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface Card {
  id: string;
  logo?: string;
  title: string;
  label?: string;
}

interface TabsProps {
  cards: Card[];
  className?: string;
  style?: {
    container?: string;
    card?: string;
    title?: string;
    label?: string;
  };
  handleClick?: (cardId: string) => void;
  height?: string;
  width?: string;
}

export const Cards: React.FC<TabsProps> = ({
  cards,
  handleClick,
  className = "",
  style = {},
  height = "h-auto",
  width = "w-full",
}) => {
  return (
    <StyledView className={\`flex flex-col \${style.container || ""}\`}>
      {cards.map((card) => (
        <StyledTouchableOpacity
          key={card.id}
          onPress={() => handleClick?.(card.id)}
          className={\`rounded-2xl p-4 mb-4 border border-gray-700 \${height} \${width} \${className} \${style.card || ""}\`}
        >
          <StyledView className="flex justify-end h-full">
            <StyledText className={\`text-xl font-bold \${style.title || ""}\`}>
              {card.title}
            </StyledText>
            {card.label && (
              <StyledText className={\`text-sm \${style.label || ""}\`}>
                {card.label}
              </StyledText>
            )}
          </StyledView>
        </StyledTouchableOpacity>
      ))}
    </StyledView>
  );
};
`;
