import { cn } from "@/lib/utils";

export const PhoneScreen = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center bg-gradient-to-b from-gray-800 to-black rounded-full",
        className
      )}
    >
      <div
        className={cn(
          "relative w-[330px] bg-black rounded-[40px] shadow-2xl overflow-hidden",
          "border-gray-900 ring-4 ring-gray-700",
          className
        )}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[30px] bg-black z-10 
          rounded-b-[20px] flex justify-center items-center"
        >
          <div className="w-[80px] h-[6px] bg-gray-800 rounded-full"></div>
        </div>

        {/* Screen Content */}
        <div
          className={cn(
            "absolute inset-0 top-[30px] bottom-[20px] left-[10px] right-[10px] rounded-[30px] overflow-hidden",
            className
          )}
        >
          {children}
        </div>

        {/* Home Indicator */}
        <div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 
          w-[140px] h-[5px] bg-gray-600 rounded-full"
        ></div>
      </div>
    </div>
  );
};