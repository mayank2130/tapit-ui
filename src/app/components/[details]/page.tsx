// app/components/[type]/page.tsx
"use client";

import { useParams } from "next/navigation";
import CardPreview from "@/components/cardpreview";
import Preview from "@/components/preview";
import InstallationGuide from "@/components/steps";
import React, { useState, useEffect } from "react";

const Page = () => {
  const params = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (params.details === "card") {
      setShow(true);
    }
  }, [params.details]);

  console.log(params);

  return (
    <>
      {show ? <CardPreview /> : <Preview />}
      <InstallationGuide />
    </>
  );
};

export default Page;
