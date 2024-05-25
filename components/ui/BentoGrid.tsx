"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimationDemo } from "./GradientBg";
import { BackgroundGradientAnimation } from "./BackGroundGradientAnimation";
import { GlobeDemo as GridGlobe } from "./GridGlobe";
import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline, IoCheckmark } from "react-icons/io5"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string
}) => {
    const [copied, setCopied] = useState(false); 
    const handleCopy = () => {
        navigator.clipboard.writeText('kofi.taylor07@gmail.com');
        setCopied(true);
    }

  return (
    <div
      
      className={cn(
        "row-span-1 relative  rounded-3xl group/bento hover:shadow-xl transition overflow-hidden duration-200 shadow-input dark:shadow-none border-transparent justify-between gap-5 flex flex-col space-y-4 border-white/[0.1]",
        className
      )}

      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
            {img && (
                <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                />
            )}
        </div>
        <div  className={`absolute right-0 -bottom-5 ${id == 5 && 'w-full opacity-80'}`}>
            {
                spareImg && (
                    <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, 'object-cover, object-center, w-full, h-full')}
                    />
                )
            }
        </div>
        {
            id === 6 && (
               <BackgroundGradientAnimation>
                    <div className="absolute 7-50 flex itens-center 
                    justify-center text-white w-full h-full"/>
               </BackgroundGradientAnimation>
            )
        }

        <div className={cn(titleClassName,
             'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                <div className="font-sans font-extralight
                  text-sm md:text-xs lg:text-base
                 dark:text-neutral-300 text-[#c1c2d3]">
                    {description}
                </div>
                <div className="font-sans font-bold lg:text-3xl max-w-96 z-10">
                {title}
                </div>
                 {
                    id === 2 && <GridGlobe/>
                 }
                 {
                    id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit
                        absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8">
                                {
                                    ["React.js", "Next.js", "Typescript"].map((item, i)=> (
                                        <span key={i} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132E]">
                                            {item}
                                        </span>
                                    ))
                                }
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                                {
                                    ["AWS", "Java", "Linux"].map((item, i)=> (
                                        <span key={i} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132E]">
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    )
                 }
                 {
                    
                    id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}
                                />
                            </div>
                            <MagicButton
                                name={copied ? "Email Copied" : "Copy my email"}
                                icon={copied ? <IoCheckmark/> : <IoCopyOutline/>}
                                position="left"
                                otherClasses="!bg-[161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )
                 }
        </div>
       
        
      </div>
    </div>
  );
};
