"use client";

import { Cards } from "@/components/custom/card-component";
import { useRouter } from "next/navigation";
import { cardsCode, dropdownmenu, inputOtpCode, tabsCode } from "./codeString";
import TabsComponent from "@/components/custom/scrollable-tabs";
import { tabsPreview } from "./utils";
import { InputOTPDemo } from "@/components/previews/otp-input";
import { SelectDemo } from "@/components/previews/dropdown-menu";

import React from "react";

export const ComponentsPreview = () => {
  const router = useRouter();
  const cards = [{ id: "finance", title: "Title", label: "Label" }];

  return [
    {
      id: "card",
      component: (
        <div className="flex space-x-4 pt-4">
          <Cards
            className=" text-white pl-2"
            height="h-36"
            cards={cards}
            handleClick={() => router.push("/")}
          />
          <Cards
            className=" text-white pl-2"
            height="h-36"
            cards={cards}
            handleClick={() => router.push("/")}
          />
        </div>
      ),
      code: cardsCode,
    },
    {
      id: "scroll-tabs",
      component: (
        <div className="flex mt-5">
          <TabsComponent
            tabs={tabsPreview}
            defaultActiveTab="holdings"
            onChange={(tabId) => console.log("Selected:", tabId)}
          />
        </div>
      ),
      code: tabsCode,
    },
    {
      id: "otp-input",
      component: (
        <div className="flex justify-center m-4 mt-20">
          <InputOTPDemo />
        </div>
      ),
      code: inputOtpCode,
    },
    {
      id: "dropdown-menu",
      component: (
        <div className="flex justify-center m-4 mt-20">
          <SelectDemo />
        </div>
      ),
      code: dropdownmenu,
    },
  ];
};
