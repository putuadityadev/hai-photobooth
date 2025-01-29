import { motion } from "motion/react"
import { easeOut } from "motion"

const CallToAction = () => {
  return (
    <section className="h-fit w-full px-8 my-20" id="booking">
      <div className="relative bg-black h-[60vh] md:max-h-80 p-8 md:p-12 rounded-xl overflow-hidden">
        <div className="flex flex-col gap-12 z-10">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="font-ubuntu text-3xl md:text-5xl text-white font-bold">Booking Layanan Photobooth Sekarang</h1>
            <p className="font-oswald font-normal text-xs md:text-xl text-white">Buat momen spesial Anda lebih berkesan dengan layanan photobooth profesional kami di Bali.</p>
          </div>

          <motion.button 
            className="px-8 py-[9px] max-w-36 border-white border rounded-xl font-oswald font-bold text-base text-white md:px-16 md:py-[18px] md:max-w-64 md:text-2xl"
            
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 1,
              duration: 0.5,
              scale: { type: 'spring', visualDuration: 1, easeOut }
            }}
          >
            Booking
          </motion.button>
        </div>

        <div>
          <img 
          className="absolute inset-0 h-full w-full opacity-15 object-cover pointer-events-none"
          src="src/images/imagecta.png" alt="bg-cta" />
        </div>
      </div>
    </section>
  )
}

export default CallToAction