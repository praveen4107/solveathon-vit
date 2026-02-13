"use client";

import { GridScan } from "./GridScan";

export default function ClientBackground() {
  return (
    <GridScan
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.72,
        filter: "saturate(0.9) brightness(0.85) contrast(0.95)",
      }}
      linesColor="#0891b2"
      scanColor="#34d399"
      scanOpacity={0.18}
      gridScale={0.16}
      lineThickness={1.2}
      noiseIntensity={0.008}
      chromaticAberration={0.0015}
    />
  );
}
