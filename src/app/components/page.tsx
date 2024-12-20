import ScrollComponents from "@/components/landing/scroll-components";
import UiComponents from "@/components/ui-components";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="ml-40">
        <ScrollComponents />
        <UiComponents />
      </div>
    </main>
  );
};

export default page;
