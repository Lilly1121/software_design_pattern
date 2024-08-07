import React from 'react'
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const NotFound = () => {
  return (
<div className="flex h-screen items-center justify-center">
  <NeonGradientCard className="max-w-sm h-64 flex items-center justify-center text-center">
    <span className="pointer-events-none z-20 flex items-center justify-center h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
      Not Found !!
    </span>
  </NeonGradientCard>
</div>

  
    
  )
}

export default NotFound