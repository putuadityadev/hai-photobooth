import TestiCard from "../ui/TestiCard"
import { testiData } from "../../data/maindata"
import { motion } from "motion/react"
import { easeOut } from "motion"


const Testimonial = () => {
  return (
    <section className="h-fit mt-52 mb-36 px-8 2xl:mt-36 max-w-[1400px] mx-auto" id="Testimoni">
      <div className="text-center flex flex-col gap-1">
        <motion.h1
        initial = {{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5,
          ease: easeOut
        }}
        className="font-ubuntu font-bold text-3xl md:text-5xl md:mt-28">Testimoni Pelanggan</motion.h1>
        <motion.p 
        initial = {{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: easeOut
        }}
        className="font-oswald text-xs opacity-80 md:text-base">Layanan photobooth yang luar biasa dan memuaskan!</motion.p>
      </div>

      <div className="bg-[#EFEFEF] h-fit w-full flex flex-col mt-8 p-4 rounded-xl gap-10 md:flex-row md:h-48">
         {testiData.map((testi, i) => (
          <TestiCard
            key={i}
            name={testi.name}
            title={testi.title}
            testimonial={testi.testimonial}
            stars={testi.stars}
            photo={testi.photo}
          />
         ))}
      </div>
    </section>
  )
}

export default Testimonial