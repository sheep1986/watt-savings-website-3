import React from 'react'

const GlassCard = ({ 
  children, 
  className = '',
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'backdrop-blur-md border border-white/20 rounded-2xl'
  
  const variants = {
    default: 'bg-white/10',
    light: 'bg-white/20',
    dark: 'bg-black/10',
    primary: 'bg-primary-500/10',
    hero: 'bg-white/15 border-white/30'
  }

  const hoverClasses = hover 
    ? 'hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1' 
    : ''

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default GlassCard