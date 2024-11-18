export const PhoneScreen = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-center items-center py-10 bg-[#101010]">
      <div className="w-[375px] h-[700px] bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="h-full bg-black rounded-b-3xl p-4">{children}</div>
      </div>
    </div>
  );
};
