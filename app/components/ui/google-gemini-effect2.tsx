"use client";
import { cn } from "../../utils/ct";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect2 = ({
  pathLengths,
  title,
  description,
  className,
  d,
}: {
  pathLengths: MotionValue[];
  title?: string[];
  description?: string;
  className?: string;
  d?: string;
}) => {
  return (
    <div className={cn("sticky top-80 left-80", className)}>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute lg:left-[600px] sm:left-[150px] md:left-[300px] md:left- -top-60  md:-top-40 w-full"
      >
        <motion.path
          d={d}
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={transition}
        />

        <path
          d={d}
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
