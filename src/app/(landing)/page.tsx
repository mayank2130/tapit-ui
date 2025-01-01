"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CTA from "@/components/sections/cta";
import FooterSection from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import Items from "@/components/sections/items";
import Qna from "@/components/sections/qna";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Items />
      <Info />
      <Qna />
      <CTA />
      <FooterSection />
    </MaxWidthWrapper>
  );
};

export default Page;
