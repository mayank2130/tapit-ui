"use client";

import { useRouter } from "next/navigation";
import { PhoneScreen } from "@/components/phonescreen";
import TabsComponent from "@/components/custom/scrollable-tabs";
import { Button } from "@/components/ui/button";
import { tabsPreview } from "@/lib/utils";
import React from "react";
import { Cards } from "@/components/custom/card-component";
import Image from "next/image";
import TabBar from "@/components/landing/tab-bar";
import { motion } from "framer-motion";

const cards = [{ id: "finance", title: "Card Title", label: "Card Label" }];
const cards2 = [{ id: "finance", title: "Card Title", label: "Card Label" }];
const Page = () => {
  const router = useRouter();

  return (
    <div className=" bg-black bg-grid-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-row justify-around items-center ">
        <div className="relative">
          {/* Hero Text */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600"
          >
            Make your apps look 10x
            <br /> more beautiful
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#b4b4b4] font-sans text-xl tracking-wide"
          >
            Copy paste the most trending components and use them in your
            <br />
            websites without having to worry about styling and animations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-10 flex gap-4"
          >
            <Button
              onClick={() => router.push("/components")}
              className="bg-white p-7 text-black text-base bg-gradient-to-b from-gray-100 to-gray-500"
            >
              Browse Components
            </Button>
            <Button
              onClick={() => router.push("/pricing")}
              className="p-7 text-base"
            >
              Custom Components
            </Button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-10 mt-20"
          >
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
          </motion.div>

          {/* Phone Case */}
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="mt-24"
        >
          <PhoneScreen className="h-[540px] w-[375px] md:h-[750px] border-black z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-400 to-gray-100 rounded-[30px]">
            <div className="ml-2 mt-5">
              <TabsComponent
                tabs={tabsPreview}
                defaultActiveTab="explore"
                onChange={(tabId) => console.log("Selected:", tabId)}
              />
            </div>
            <div className="flex mt-12 mx-2 flex-row w-full">
              <Cards
                className=" text-black"
                height="h-32 w-40"
                cards={cards}
                handleClick={() => router.push("/")}
              />
              <Cards
                className="text-black"
                height="h-32 w-40"
                cards={cards2}
                handleClick={() => router.push("/")}
              />
            </div>
            <div className="mr-3">
              <Cards
                className="text-black mx-2"
                cards={cards2}
                handleClick={() => router.push("/")}
              />
              <Cards
                className="text-black mx-2"
                cards={cards2}
                height="h-44"
                handleClick={() => router.push("/")}
              />
            </div>
            <div className="mr-4 mt-24">
              <TabBar />
            </div>
          </PhoneScreen>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
