import { easeInOut } from "motion"
import { motion } from "motion/react"

const OrderCard = ({title, desc}) => {
  return (
    <motion.div
    initial ={{
      opacity: 0.2,
      y: -20
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      ease: easeInOut
      
    }}
    className="flex flex-col items-center justify-center gap-8 max-w-60 md:items-start md:max-w-full">
      <div className="text-center md:text-start md:gap-2 flex flex-col">
        <h1 className="font-oswald font-medium text-xl md:text-3xl">{title}</h1>
        <p className="font-oswald text-base opacity-80 text-balance md:text-xl">{desc}</p>
      </div>

      <div >
        <img 
          src="public/images/arrow.png"
          alt="arrow-img"
          className={`${title === "Selesai" ? 'hidden' : ''}`}
        />
      </div>
    </motion.div>
  )
}

export default OrderCard