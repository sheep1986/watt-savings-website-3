import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SupplierCarousel = () => {
  const suppliers = [
    { name: 'British Gas', logo: '/supplier-logos/british-gas.png' },
    { name: 'Crown Gas & Power', logo: '/supplier-logos/crown.png' },
    { name: 'Drax', logo: '/supplier-logos/drax.webp' },
    { name: 'EDF Energy', logo: '/supplier-logos/edf.png' },
    { name: 'E.ON Next', logo: '/supplier-logos/eon-next.png' },
    { name: 'Opus Energy', logo: '/supplier-logos/opus.png' },
    { name: 'SEFE Energy', logo: '/supplier-logos/sefe.png' },
    { name: 'Smartest Energy', logo: '/supplier-logos/smartest.png' },
    { name: 'Scottish Power', logo: '/supplier-logos/scottish-power.png' },
    { name: 'Yu Energy', logo: '/supplier-logos/yu.png' },
    { name: 'Valda Energy', logo: '/supplier-logos/valda.png' },
    { name: 'Utilita', logo: '/supplier-logos/utilita.png' },
    { name: 'Pozitive Energy', logo: '/supplier-logos/pozitive.png' },
    { name: 'Total Energies', logo: '/supplier-logos/total.png' },
    { name: 'Water Plus', logo: '/supplier-logos/water-plus.png' },
    { name: 'Everflow', logo: '/supplier-logos/everflow.webp' },
  ]

  // Duplicate the array for continuous scrolling
  const duplicatedSuppliers = [...suppliers, ...suppliers]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 * suppliers.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedSuppliers.map((supplier, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
          >
            <img
              src={supplier.logo}
              alt={supplier.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SupplierCarousel