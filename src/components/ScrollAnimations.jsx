import React, { useEffect } from 'react'

// Custom scroll animations component that mimics AOS functionality
const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const animationType = element.dataset.animate
          
          switch (animationType) {
            case 'fade-up':
              element.style.transform = 'translateY(0)'
              element.style.opacity = '1'
              break
            case 'fade-down':
              element.style.transform = 'translateY(0)'
              element.style.opacity = '1'
              break
            case 'fade-left':
              element.style.transform = 'translateX(0)'
              element.style.opacity = '1'
              break
            case 'fade-right':
              element.style.transform = 'translateX(0)'
              element.style.opacity = '1'
              break
            case 'zoom-in':
              element.style.transform = 'scale(1)'
              element.style.opacity = '1'
              break
            case 'zoom-out':
              element.style.transform = 'scale(1)'
              element.style.opacity = '1'
              break
            case 'flip-left':
              element.style.transform = 'rotateY(0deg)'
              element.style.opacity = '1'
              break
            case 'slide-up':
              element.style.transform = 'translateY(0)'
              element.style.opacity = '1'
              break
            default:
              element.style.opacity = '1'
          }
          
          element.classList.add('animate-in')
          observer.unobserve(element)
        }
      })
    }, observerOptions)

    // Initialize elements
    const initializeElements = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      
      animatedElements.forEach(element => {
        const animationType = element.dataset.animate
        const delay = element.dataset.delay || '0'
        
        // Set initial state
        element.style.opacity = '0'
        element.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
        
        switch (animationType) {
          case 'fade-up':
            element.style.transform = 'translateY(30px)'
            break
          case 'fade-down':
            element.style.transform = 'translateY(-30px)'
            break
          case 'fade-left':
            element.style.transform = 'translateX(30px)'
            break
          case 'fade-right':
            element.style.transform = 'translateX(-30px)'
            break
          case 'zoom-in':
            element.style.transform = 'scale(0.8)'
            break
          case 'zoom-out':
            element.style.transform = 'scale(1.2)'
            break
          case 'flip-left':
            element.style.transform = 'rotateY(-90deg)'
            break
          case 'slide-up':
            element.style.transform = 'translateY(50px)'
            break
        }
        
        observer.observe(element)
      })
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeElements, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return null
}

export default ScrollAnimations