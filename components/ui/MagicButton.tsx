import React from 'react'

interface MagicProps {
    name: string,
    icon:React.ReactNode,
    position:string,
    handleClick: () => void,
    otherClasses?: string
}

const MagicButton = ({name, icon, position, handleClick, otherClasses}: MagicProps) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg  mt-3
    p-[1px] focus:outline-none  focus:ring-offset-2
     focus:ring-offset-slate-50 md:w-60 md:mt-10">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className={`inline-flex h-full w-full cursor-pointer gap-2
           items-center justify-center rounded-lg bg-slate-950
            px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl %{otherClasses}`}>
            {position === "left" && icon}
            {name}
            {position === "right" && icon}
          </span>
    </button>
  )
}

export default MagicButton
