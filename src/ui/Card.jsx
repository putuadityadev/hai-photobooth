import { easeInOut, easeOut } from 'motion';
import { motion } from 'motion/react';

import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = ({title, desc, image}) => {

  const variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: easeInOut
      }
    },
    initial: {
      scale: 1,
    },
    hidden: {
      opacity: 0,
      x : -100,
      filter: 'blur(10px)',
      transition: {
        duration: 1,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: easeOut
      }
    },
  }

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  

  return (
    <motion.div 
      initial= 'hidden'
      viewport={{
        margin: '-100px'
      }}
      whileInView= 'visible'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={variants}
      animate={isHovered? "hover" : "initial"}
      className={`flex flex-col h-[333px] md:h-[453px] w-[264px] md:w-[338px] bg-[#1A1A1A] px-6 pt-32 md:pt-52 rounded-xl border ${isHovered? 'border-white' : ' border-[#999999]'}`}>
      <motion.div
        className="flex flex-col justify-start w-fit flex-wrap gap-4"
       >
        <div>
          <img
            className={`${isHovered ? 'opacity-100' : 'opacity-50'} md:w-20`} 
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className={`font-oswald font-bold text-lg md:text-2xl ${ isHovered ? 'text-white' : ' text-[#999999]'} transition-all duration-300 ease-in-out`}>{title}</h1>
          <p className={`font-oswald text-xs md:text-base text-white ${isHovered ? 'opacity-100' : 'opacity-50'} transition-all duration-300 ease-in-out `}>{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: 'Default Title',
  desc: 'Default Description',
  image: '/default-image.png'
}

export default Card