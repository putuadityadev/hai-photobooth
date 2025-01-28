"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function Drag() {
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)
    const [borderColor, setBorderColor] = useState('rgba(0,0,0,0.1)')

    useEffect(() => {
        const checkBackgroundColor = (event) => {
            const element = document.elementFromPoint(event.clientX, event.clientY)
            
            if (element) {
                const computedStyle = window.getComputedStyle(element)
                const backgroundColor = computedStyle.backgroundColor

                const isTransparent = backgroundColor === 'rgba(0, 0, 0, 0)' || 
                                       backgroundColor === 'transparent'
    
                if (isTransparent) {
                    setBorderColor('rgba(0,0,0,0.2)')
                } else {
                    const rgbValues = backgroundColor.match(/\d+/g)
                    
                    if (rgbValues) {
                        const [r, g, b] = rgbValues.map(Number)
                        const brightness = (r * 299 + g * 587 + b * 114) / 1000
                        
                        
                        setBorderColor(brightness < 128 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.2)')
                    }
                }
            }
        }
    
        window.addEventListener('mousemove', checkBackgroundColor)
        return () => window.removeEventListener('mousemove', checkBackgroundColor)
    }, [])
    return (
        <motion.div 
            ref={ref} 
            style={{ 
                position: 'fixed', 
                width: 40, 
                height: 40, 
                background: 'rgba(0,0,0,0.0)', 
                borderRadius: "8px", 
                border: `2px solid ${borderColor}`, 
                x, 
                y,
                zIndex: 9999, 
                pointerEvents: 'none',
                backdropFilter: 'blur(1px)', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                isolation: 'isolate'
            }}
        >
            <div 
                style={{
                    width: 25,
                    height: 25,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.05)',
                    border: `2px solid ${borderColor}`,
                    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                    backdropFilter: "none",
                    backgroundColor: 'transparent', 
                    zIndex: 10
                }} 
            />
        </motion.div>
    )
}

function useFollowPointer(ref) {
    const xPoint = useMotionValue(0)
    const yPoint = useMotionValue(0)
    
    const spring = { 
        damping: 20,     
        stiffness: 300,  
        mass: 0.5        
    }
    
    const x = useSpring(xPoint, spring)
    const y = useSpring(yPoint, spring)

    useEffect(() => {
        const handlePointerMove = (event) => {
            if (!ref.current) return

            const element = ref.current
            xPoint.set(
                event.clientX - element.offsetLeft - element.offsetWidth / 2
            )
            yPoint.set(
                event.clientY - element.offsetTop - element.offsetHeight / 2
            )
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, )

    return { x, y }
}