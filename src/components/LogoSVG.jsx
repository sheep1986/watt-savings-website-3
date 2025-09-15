import React from 'react'

const LogoSVG = ({ className = "h-12 w-auto", variant = "default" }) => {
  const isDark = variant === 'dark'
  
  return (
    <svg 
      className={className}
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Watt text in blue */}
      <text 
        x="10" 
        y="40" 
        fontSize="32" 
        fontWeight="bold" 
        fill="#3b82f6"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Watt
      </text>
      
      {/* Savings text in black/white */}
      <text 
        x="85" 
        y="40" 
        fontSize="32" 
        fontWeight="bold" 
        fill={isDark ? "#ffffff" : "#111827"}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Savings
      </text>
      
      {/* Lightning bolt accent */}
      <path 
        d="M 175 15 L 165 30 L 172 30 L 165 45 L 180 25 L 172 25 L 175 15 Z" 
        fill="#fbbf24"
        opacity="0.8"
      />
    </svg>
  )
}

export default LogoSVG