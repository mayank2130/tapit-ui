import { Cards } from "@/components/custom/card-component";
import TabsComponent from "@/components/custom/scrollable-tabs";
import { PhoneScreen } from "@/components/phonescreen";
import { tabsPreview } from "@/lib/utils";
import { motion } from "framer-motion";
import router from "next/router";
import React from "react";
import TabBar from "../tab-bar";


const cards = [{ id: "finance", title: "Card Title", label: "Card Label" }];
const cards2 = [{ id: "finance", title: "Card Title", label: "Card Label" }];

const PhoneCase = () => {
  return (
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
      <PhoneScreen className="h-[540px] w-[375px] md:h-[720px] md:w-[355px] border-black z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-400 to-gray-100 rounded-[30px]">
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
        <div className="mr-4 mt-14">
          <TabBar />
        </div>
      </PhoneScreen>
    </motion.div>
  );
};

export default PhoneCase;
