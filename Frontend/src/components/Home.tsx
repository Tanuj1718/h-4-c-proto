"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { useRouter } from "next/navigation";

export function AuroraBackgroundDemo(){
  const router = useRouter()
  const handleGetStarted = ()=>{
    router.push('/signup')
  }
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Empower Your Business with AI
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Unlock new growth opportunities with our AI-driven insights tailored for small vendors and shopkeepers in rural and developing areas. Join us and transform your business today!
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 font-[600]" onClick={handleGetStarted} >
          Register
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo
