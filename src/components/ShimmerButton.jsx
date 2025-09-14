import React from 'react'

const ShimmerButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'default',
  ...props 
}) => {
  const baseClasses = 'relative overflow-hidden font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300',
    white: 'bg-white text-primary-600 hover:bg-gray-50',
    gradient: 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white hover:from-primary-600 hover:via-primary-700 hover:to-primary-800'
  }

  const sizes = {
    small: 'px-4 py-2 text-sm rounded-lg',
    default: 'px-6 py-3 rounded-lg',
    large: 'px-8 py-4 rounded-lg text-lg'
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} group`}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-0 -left-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out transform -skew-x-12"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

export default ShimmerButton