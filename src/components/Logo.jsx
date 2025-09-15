import React from 'react'

const Logo = ({ variant = 'default' }) => {
  const isDark = variant === 'dark'
  
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          <span className="text-primary-500">Watt</span>
          <span className={`${isDark ? 'text-white' : 'text-gray-900'} ml-1`}>Savings</span>
        </span>
      </div>
    </div>
  )
}

export default Logo