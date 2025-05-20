/** @format */

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import ThreeWrapper from "@/components/home/ThreeWrapper";

export function BlackHoleVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme !== "dark") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none">
      {/* <video
        src="/blackhole.mp4"
        className="absolute  top-[-360px] left-0 w-[700px] h-[1100px] lg:w-full lg:h-[1100px] object-cover overflow-hidden opacity-65"
        autoPlay
        loop
        muted
        playsInline></video> */}

      <ThreeWrapper />

      <audio src="/audio.mp4" autoPlay loop preload="auto" playsInline />
    </motion.div>
  );
}
