import Card from "../ui/Card"
import { motion } from "motion/react";
import { easeOut } from "motion";

const Features = () => {
  const cardItems = [
    {
      id: 1,
      title: "Kostumisasi Tema Sesuai Acara Kamu",
      desc: "Kami menawarkan berbagai tema yang dapat disesuaikan.",
      image: "src/images/Confetti.png"
    },
    {
      id: 2,
      title: "Kualitas Foto Tinggi dan Instan",
      desc: "Nikmati hasil foto berkualitas tinggi dalam sekejap.",
      image: "src/images/Photo Gallery.png"
    },
    {
      id: 3,
      title: "Aksesoris Seru untuk Setiap Momen",
      desc: "Pilih dari berbagai aksesori menarik untuk foto Anda.",
      image: "src/images/Sun Glasses.png"
    }
  ];

  const containerCardVariants = {
    hidden : {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3
      }
    }
  }

  return (

    <section className="h-fit bg-black text-white flex flex-col items-center py-20 md:py-28" id="features">
      <motion.h1
        initial = {{
          y: 100,
          scale: 0.8,
          opacity: 0,
          backdropFilter: 'blur(10px)'
        }}
        whileInView={{
          y: 0,
          scale: 1,
          opacity: 1,
          backdropFilter: 'blur(0px)',
          transition: {
            duration: 0.5,
            ease: easeOut
          }
        }}

        className="font-ubuntu font-bold text-4xl md:text-5xl text-center text-balance mb-10 md:mb-16"
      >
        Fitur Unggulan Hai Photobooth
      </motion.h1>

      <motion.div 
        variants={containerCardVariants}
        initial = 'hidden'
        whileInView= 'visible'
        className="flex flex-col w-full justify-center items-center gap-8 md:gap-12 md:flex-row"
      >
        {cardItems.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            desc={card.desc}
            image={card.image}
          />
        ))}
      </motion.div>

      <motion.button 
          className="px-8 py-4 md:px-24 border-white border rounded-xl font-oswald font-bold text-base md:text-lg mt-10 md:mt-12"
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
          initial={{opacity:0, scale: 0}}
          whileInView={{opacity:1, scale:1}}
          transition={{
            duration: 0.5,
            scale: {type: 'spring', visualDuration: 1, easeOut}
          }}
        >
          Booking Sekarang Juga!
        </motion.button>
    </section>
  )
}

export default Features