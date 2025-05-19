/** @format */

// components/home/ThreeWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/home/ThreeScene"), {
  ssr: false,
});

export default function ThreeWrapper() {
  return <ThreeScene />;
}
