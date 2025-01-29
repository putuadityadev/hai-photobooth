import { easeInOut } from "motion"
import { motion } from "motion/react"

const TestiCard = ({name, title, testimonial, stars, photo}) => {
  return (
    <motion.div
    initial = {{
      opacity: 0,
      x: -50,
      scale: 0.8
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      scale: 1
    }}
    transition={{
      delay: 1,
      duration: 0.8,
      ease: easeInOut
    }}

    className="flex gap-4 justify-center items-center">
      <div className="w-[30%]">
        <div className="w-full h-20 rounded-full overflow-hidden md:h-[100px] 2xl:h-[120px]">
          <img src={photo} alt="profile-photo" className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className="w-[70%]">
        <div className="flex flex-col gap-2 justify-start">
            <div>
              <img src={stars} alt="stars" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-ubuntu font-light text-xs">
                &quot;{testimonial}&quot;
              </p>
              <div>
                <h1 className="font-ubuntu font-bold text-base">{name}</h1>
                <h2 className="font-ubuntu text-xs italic">{title}</h2>
              </div>
            </div>
          </div>
      </div>
    </motion.div>
  )
}

export default TestiCard