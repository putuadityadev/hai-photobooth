"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Drag() {
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)

    return (
        <motion.div 
            ref={ref} 
            style={{ 
                position: 'fixed', 
                width: 80, 
                height: 80, 
                background: 'rgba(0,0,0,0.0)', 
                borderRadius: "8px", 
                border: '2px solid rgba(0,0,0,0.1)', 
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
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.05)',
                    border: '2px solid rgba(0,0,0,0.2)',
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