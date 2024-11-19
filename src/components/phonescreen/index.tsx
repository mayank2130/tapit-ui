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
      className={cn("flex justify-center items-center bg-[#101010]", className)}
    >
      <div
        className={cn(
          "w-[375px] h-[700px] bg-white rounded-3xl shadow-lg overflow-hidden border border-white",
          className
        )}
      >
        <div className={cn("h-full bg-black rounded-b-3xl p-4", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};
