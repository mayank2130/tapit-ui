"use client";

import { useRouter } from "next/navigation";
import { PhoneScreen } from "@/components/phonescreen";
import TabsComponent from "@/components/tabs-component";
import { Button } from "@/components/ui/button";
import { tabsPreview } from "@/lib/utils";
import React from "react";
import { Cards } from "@/components/card-component";
import Image from "next/image";
import TabBar from "@/components/tab-bar";

const cards = [{ id: "finance", title: "Card Title", label: "Card Label" }];
const cards2 = [{ id: "finance", title: "Card Title", label: "Card Label" }];
const Page = () => {
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
          <p className="text-[#b4b4b4] font-sans text-xl tracking-wide">
            Copy paste the most trending components and use them in your
            <br />
            websites without having to worry about styling and animations.
          </p>
          <div className="pt-10 flex gap-4">
            <Button
              onClick={() => router.push("/components")}
              className="bg-white p-7 text-black text-base hover:bg-white"
            >
              Browse Components
            </Button>
            <Button
              onClick={() => router.push("/pricing")}
              className="p-7 text-base"
            >
              Custom Components
            </Button>
          </div>
          <div className="flex  gap-10 mt-20">
            <div className="flex items-center gap-2">
              <Image
                alt="react native"
                height={40}
                width={40}
                src={"/reactnative.svg"}
              />
              <p className="text-muted-foreground text-xl font-semibold">
                React Native
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="tailwind css"
                height={40}
                width={40}
                src="./tailwind.svg"
              />
              <p className="text-muted-foreground text-xl font-semibold">
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        <PhoneScreen className="border-black z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-400 to-gray-100 rounded-3xl">
          <TabsComponent
            tabs={tabsPreview}
            defaultActiveTab="holdings"
            onChange={(tabId) => console.log("Selected:", tabId)}
          />
          <div className="flex mt-12 flex-row w-full gap-5">
            <Cards
              className=" text-black"
              height="h-36"
              cards={cards}
              handleClick={() => router.push("/")}
            />
            <Cards
              className="text-black"
              height="h-36"
              cards={cards2}
              handleClick={() => router.push("/")}
            />
          </div>
          <Cards
            className="text-black"
            cards={cards2}
            handleClick={() => router.push("/")}
          />
          <Cards
            className="text-black"
            cards={cards2}
            height="h-44"
            handleClick={() => router.push("/")}
          />
          <TabBar />
        </PhoneScreen>
      </div>
    </div>
  );
};

export default Page;
