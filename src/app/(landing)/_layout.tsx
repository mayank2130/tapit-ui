import Navbar from "@/components/navbar";
import ScrollComponents from "@/components/scroll-components";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="ml-40">
      <ScrollComponents />
      {children}
    </div>
  );
}
