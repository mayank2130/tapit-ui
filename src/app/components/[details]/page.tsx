"use client";

import { useParams } from "next/navigation";
import Previews from "@/components/previews";
import InstallationGuide from "@/components/steps";
import React from "react";

const Page = () => {
  const params = useParams();
  return (
    <>
      {typeof params.details === "string" ? (
        <Previews phoneComponent={params.details} />
      ) : null}
      <InstallationGuide />
    </>
  );
};

export default Page;
