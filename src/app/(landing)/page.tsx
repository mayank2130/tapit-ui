"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import Items from "@/components/sections/items";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Items />
      <Info />
    </MaxWidthWrapper>
  );
};

export default Page;
