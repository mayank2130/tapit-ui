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

export const inputOtpCode = `import React, {
  forwardRef,
  useContext,
  useRef,
  useState,
} from "react";
import { View, TextInput, Text, TextInputProps, Image } from "react-native";
import { cn } from "@/lib/utils";

interface InputOTPContextType {
  slots: {
    char: string;
    isActive: boolean;
    hasFakeCaret: boolean;
  }[];
  handleChange: (value: string, index: number) => void;
  handleBackspace: (value: string, index: number) => void;
  inputsRef: React.MutableRefObject<(TextInput | null)[]>;
}

const InputOTPContext = React.createContext<InputOTPContextType>({
  slots: [],
  handleChange: () => {},
  handleBackspace: () => {},
  inputsRef: { current: [] },
});

interface InputOTPProps extends React.ComponentProps<typeof View> {
  maxLength?: number;
  onComplete?: (otp: string) => void;
}

export const InputOTP = forwardRef<View, InputOTPProps>(
  ({ maxLength = 6, children, onComplete, ...props }, ref) => {
    const [otp, setOtp] = useState<string[]>(Array(maxLength).fill(""));
    const inputsRef = useRef<(TextInput | null)[]>([]);

    const handleChange = (value: string, index: number) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      
      if (value && index < maxLength - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      
      const newOtpString = newOtp.join("");
      if (newOtpString.length === maxLength && onComplete) {
        onComplete(newOtpString);
      }
    };

    const handleBackspace = (value: string, index: number) => {
      if (!value && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };

    const slots = otp.map((char, index) => ({
      char,
      isActive: inputsRef.current[index]?.isFocused() || false,
      hasFakeCaret: false,
    }));

    return (
      <InputOTPContext.Provider
        value={{
          slots,
          handleChange,
          handleBackspace,
          inputsRef,
        }}
      >
        <View {...props}>{children}</View>
      </InputOTPContext.Provider>
    );
  }
);
InputOTP.displayName = "InputOTP";

interface InputOTPGroupProps extends React.ComponentProps<typeof View> {}

export const InputOTPGroup = forwardRef<View, InputOTPGroupProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(\`flex-row items-center justify-center\`, className)}
      {...props}
    />
  )
);
InputOTPGroup.displayName = "InputOTPGroup";

interface InputOTPSlotProps extends TextInputProps {
  index: number;
}

export const InputOTPSlot = forwardRef<TextInput, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const { slots, handleChange, handleBackspace, inputsRef } =
      useContext(InputOTPContext);
    const { char } = slots[index];

    return (
      <TextInput
        ref={(input) => {
          inputsRef.current[index] = input;
          
          if (typeof ref === "function") {
            ref(input);
          } else if (ref && "current" in ref) {
            ref.current = input;
          }
        }}
        value={char}
        onChangeText={(value) => handleChange(value, index)}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") handleBackspace(char, index);
        }}
        maxLength={1}
        keyboardType="number-pad"
        textAlign="center"
        className={cn(
          \`h-12 w-12 border border-gray-300 text-center text-lg rounded-md 
           focus:border-blue-500 focus:ring-2 focus:ring-blue-200\`,
          className
        )}
        {...props}
      />
    );
  }
);
InputOTPSlot.displayName = "InputOTPSlot";
`;
