import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tabsPreview = [
  { id: "explore", label: "Explore" },
  { id: "holdings", label: "Holdings" },
  { id: "positions", label: "Positions" },
  { id: "orders", label: "Stocks" },
  { id: "stocks", label: "Equity" },
  { id: "waitlist", label: "ETFs" },
];