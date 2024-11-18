import Preview from "@/components/preview";
import InstallationGuide from "@/components/steps";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Preview />
      <InstallationGuide />
    </>
  );
};

export default page;
