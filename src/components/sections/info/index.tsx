import { Compare } from "@/components/ui/compare";
import { FeaturesSectionDemo } from "@/components/ui/feature-section";
import { Section } from "@/components/ui/section";
import React from "react";

const Info = () => {
  return (
    <Section className="flex flex-row items-center">
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="px-8">
          <h4 className="text-3xl max-w-[560px] text-center lg:text-5xl lg:leading-tight mx-auto tracking-tight font-medium text-white">
            Impress with your designs not just product
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-8 mx-auto text-center font-normal text-neutral-300">
            From sexy components to impressive transitions, TapUI has components
            for literally everything. We can even create this custom components on demand.
          </p>
        </div>
      </div>
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-900  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="./screenshot.png"
          secondImage="./mobile-app-dark.webp"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
    </Section>
  );
};

export default Info;
