"use client";
import { useRouter } from "next/navigation";

import { PhoneScreen } from "@/components/phonescreen";
import TabsComponent from "@/components/tabs-component";
import { Button } from "@/components/ui/button";
import { tabsPreview } from "@/lib/utils";
import React from "react";
import { Cards } from "@/components/card-component";

const cards = [{ id: "finance", title: "Bajaj Finance" }];
const page = () => {
  const router = useRouter();

  return (
    <div className="pt-20 px-40 h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"></div>
      <div className="flex flex-row justify-between items-center">
        <div className=" flex flex-col items-start justify-start">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Make your apps look 10x more beautiful
          </p>
          <p className="text-white">
            Copy paste the most trending components and use them in your
            <br />
            websites without having to worry about styling and animations.
          </p>
          <div className="pt-10 flex gap-4">
            <Button className="bg-white p-7 text-black text-base hover:bg-white">
              Browse Components
            </Button>
            <Button className="p-7 text-base">Custom Components</Button>
          </div>
        </div>
        <PhoneScreen className="border-white bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-white via-gray-100 to-slate-300 rounded-3xl">
          <TabsComponent
            tabs={tabsPreview}
            defaultActiveTab="holdings"
            onChange={(tabId) => console.log("Selected:", tabId)}
          />
          <div className="flex">
            <Cards
              className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-white via-gray-100 to-slate-300 text-black p-2 mt-12"
              cards={cards}
              handleClick={() => router.push("/")}
            />
            <Cards
              className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-white via-gray-100 to-slate-300 text-black p-2 mt-12"
              cards={cards}
              handleClick={() => router.push("/")}
            />
          </div>
        </PhoneScreen>
      </div>
    </div>
  );
};

export default page;
