import { easeInOut } from "motion";
import { motion, useInView } from "motion/react";
import { useRef } from "react"


const Hero = () => {
  const text1 = "Abadikan Momen Spesial Kamu Bersama Hai Photobooth!"
  const ref = useRef(null);

  const isInView = useInView(ref, { once : true});

  return (
    <section className="pt-32 w-full h-screen px-8 2xl:pt-44 relative pb-90 md:pb-[1150px] 2xl:pb-[1080px]">
      <div className="container flex flex-col z-10 md:flex-row md:w-full">
        <div className="flex flex-col gap-12 md:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 ref={ref} className="font-ubuntu font-extrabold text-[32px] leading-[120%] whitespace-nowrap sm:text-6xl  sm:text-nowrap md:text-6xl md:leading-[120%]">
              {text1.split('').map((letter, i) => (
                i === 14 || i === 35 ? <br key={`br-${i}`} /> :
                <motion.span
                  key={i}
                  initial={{opacity: 0}}
                  animate={ isInView ? {opacity: 1} : {}}
                  transition={{duration: 0.1, delay: i * 0.04}}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <motion.p className="font-oswald text-xs opacity-50 text-balance sm:text-lg sm:text-wrap"
              initial={{opacity: 0}}
              animate={{opacity: 0.5}}
              transition={{
                delay: 2.5,
                duration: 0.5,
                ease: easeInOut
              }}
            >
              Layanan photobooth terkece dan terlengkap di Bali. Pesan sekarang dan atur jadwalnya sesuai dan seflexsibel dengan acaramu!
            </motion.p>
          </div>
          <div>
            <motion.button className="bg-black text-white font-oswald font-bold text-base px-6 py-3 sm:px-14 sm:py-6 sm:rounded-2xl sm:text-xl rounded-xl border" 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              initial = {{opacity: 0, x: -500}}
              animate = {{opacity: 1, x: 0}}
              transition={{
                duration: 0.4,
              }}
              
            >Booking Sekarang!</motion.button>
          </div>
        </div>

        <motion.div 
          className="-mt-52 md:-mt-80"
          initial={{opacity: 0}}
          animate={{opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
            ease: easeInOut
          }}
        >
          <img 
            src="src/images/hero.png"
            alt="hero-image" 
            className="pointer-events-none absolute left-0 right-0 bottom-0 lg:bottom-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero