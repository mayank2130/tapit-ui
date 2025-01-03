import ScrollComponents from "@/components/landing/scroll-components";

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
