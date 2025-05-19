/** @format */

"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the actual Three.js component with SSR disabled
const ThreeScene = dynamic(() => import("./three-scene"), {
  ssr: false,
});

const ThreeWrapper = () => {
  return <ThreeScene />;
};

export default ThreeWrapper;
