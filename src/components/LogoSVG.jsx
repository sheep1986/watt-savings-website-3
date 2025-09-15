import React from 'react'

const LogoSVG = ({ className = "h-12 w-auto", variant = "default" }) => {
  const isDark = variant === 'dark'
  
  return (
    <svg 
      className={className}
      viewBox="0 0 480 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Watt text in blue */}
      <text 
        x="10" 
        y="50" 
        fontSize="42" 
        fontWeight="bold" 
        fill="#1d4ed8"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Watt
      </text>
      
      {/* Savings text in black/white */}
      <text 
        x="140" 
        y="50" 
        fontSize="42" 
        fontWeight="bold" 
        fill={isDark ? "#ffffff" : "#000000"}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Savings
      </text>
      
      {/* Curved underline */}
      <path 
        d="M 20 60 Q 240 75 460 60" 
        stroke={isDark ? "#ffffff" : "#000000"}
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />
      
      {/* Blue accent curve on the right */}
      <path 
        d="M 400 55 Q 420 65 440 55" 
        stroke="#1d4ed8"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

export default LogoSVG