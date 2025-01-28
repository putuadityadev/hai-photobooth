import { easeInOut } from "motion";
import { motion } from "motion/react";

const PhotoCard = (props) => {
  const { onClick, image, isActive } = props;
 

  return (
    <motion.div
      initial = {{
        opacity: 0,
      }}
      whileInView = {{
        opacity: 1,
        transition: {
          duration: 1,
          ease: easeInOut
        }
      }}
      whileHover={onClick}
      onClick={onClick}
      className={`transition-all duration-300 relative w-[308px] h-[208px] ${isActive === false ? `grayscale` : 'scale-110  -translate-x-40 md:-translate-x-0'}`}
    >
      <div className= "h-fit w-fit absolute -right-1/2 md:right-auto">
        <div className="bg-white w-[308px] h-[208px] md:w-[520px] md:h-[330px] 2xl:w-[560px] 2xl:h-[350px] rounded-lg relative shadow-xl">
          <img
            src={image}
            className="absolute left-0 right-0 mx-auto top-5 rounded-lg md:w-[480px] 2xl:w-[520px]"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PhotoCard