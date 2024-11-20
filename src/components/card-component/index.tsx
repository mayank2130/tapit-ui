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
    } else {
      return;
    }
  };

  return (
    <div>
      {cards.map((card) => (
        <Link
          key={card.id}
          href={"/"}
          onClick={() => onCardPress(card.id)}
          className={cn(
            `
            bg-black border mb-10 border-gray-700 ml-5 rounded-2xl flex items-end justify-start p-1 h-36 w-36
          `,
            className
          )}
        >
          <div className="">

          <p className={cn(`text-white font-JakartaSemiBold text-xl p-1`, className)}>
            {card.title}
          </p>
          <p className="text-white font-sans text-sm p-1">{card.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
