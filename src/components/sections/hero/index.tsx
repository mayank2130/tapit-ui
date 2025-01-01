import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";
import PhoneCase from "./phoneCase";
import { Section } from "@/components/ui/section";

const Hero = () => {
  const router = useRouter();
  return (
    <Section>
      <div className=" bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-row justify-around items-center ">
          <div className="relative">
            {/* Hero Text */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600"
            >
              Give your idea the
              <br />
              app it deserves
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
              <div className="flex flex-col text-white">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <Logo image={React} name="React Native" version="19.0.0" />
                  <Logo image={TypeScript} name="TypeScript" version="5.6.3" />
                  <Logo image={ShadcnUi} name="Shadcn/ui" version="2.1.8" />
                  <Logo image={Tailwind} name="Tailwind" version="3.4.14" />
                </div>
              </div>
            </motion.div>

            {/* Phone Case */}
          </div>
          <PhoneCase />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
