'use client'

import { PiSpinnerGapBold } from "react-icons/pi";

export default function Spinner({ size = 20, className = "" }) {
  return (
    <PiSpinnerGapBold
      size={size}
      className={`animate-spin text-current ${className}`}
    />
  );
}
