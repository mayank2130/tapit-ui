import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Card {
  id: string;
  logo?: string;
  title: string;
  label?: string;
}

interface TabsProps {
  cards: Card[];
  className?: string;
  handleClick?: (cardId: string) => void;
}

export const Cards: React.FC<TabsProps> = ({
  cards,
  handleClick,
  className,
}) => {
  const onCardPress = (cardId: string) => {
    if (handleClick) {
      handleClick(cardId);
    }
  };

  return (
    <div className="w-full">
      {cards.map((card) => (
        <Link
          key={card.id}
          href={"/"}
          onClick={() => onCardPress(card.id)}
          className={cn(
            `
            bg-none border border-gray-700 rounded-2xl flex items-end justify-start p-4 h-36 w-full mb-4
          `,
            className
          )}
        >
          <div className="w-full">
            <p className={cn(`text-white font-JakartaSemiBold text-xl`, className)}>
              {card.title}
            </p>
            <p className={cn("text-white font-sans text-sm", className)}>
              {card.label}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
