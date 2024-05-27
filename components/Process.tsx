"use client";
import React from "react";
 
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { Card } from "./ui/Card";
import MagicButton from "./ui/MagicButton";
 
export function Process() {
  return (
    <div className="w-full mt-12">
        <h1 className="heading">
        My Work
        <span className="text-purple"> Process
          </span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center bg-transparent w-full gap-4 mx-auto px-8">
        <Card 
            title="Planning & Strategy"
            description="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
            icon={<AceternityIcon order="phase 1"/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
            title="Development & Progress Update"
            description="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
            icon={<AceternityIcon order="phase 2"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
            title="Development & Launch" 
            description="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
            icon={<AceternityIcon order="phase 3"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const AceternityIcon = ({ order }: {order: string}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-2xl text-bol font-bold text-white backdrop-blur-3xl">
            { order }
        </span>
        </button>
    </div>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Process;