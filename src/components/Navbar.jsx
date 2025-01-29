import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { easeOut } from "motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Beranda");
  const [menuButton, setMenuButton] = useState(false);

  const menuItems = [
    "Beranda",
    "Fitur Unggulan",
    "Layanan",
    "Kontak"
  ];

  useEffect(() => {
    const sections = menuItems.map(item => document.getElementById(item));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuButton(!menuButton);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      filter: 'blur(10px)',
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-col bg-white z-10 px-8 ">
      <div className="flex justify-between pt-6 items-center w-full max-w-[1400px] mx-auto">
        <div className="flex gap-3">
          <div className="md:hidden" onClick={handleMenuToggle}>
            <img 
              className="h-10"
              src="/src/images/Menu.png"
              alt="menu"
            />
          </div>
          <motion.img
            initial={{ 
              opacity: 0,
              scale: 0,
              filter: 'blur(10px)',
              transition: {
                duration: 0.6,
                ease: easeOut
              }
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.6,
                ease: easeOut
              }
            }}
            className="h-10 md:h-14"
            src="/src/images/logo.png"
            alt="logo"
          /> 
        </div>
        <div>
          <motion.ul
            className="hidden md:flex gap-12 font-ubuntu text-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
           {menuItems.map((item, i) => (
            <a href={`#${item}`} key={i}>
              <motion.li
                variants={itemVariants}
                className={`
                  ${activeSection === item 
                    ? "font-bold text-black" 
                    : "font-normal text-gray-500"}
                  transition-all duration-300 ease-in-out
                `}
                whileHover={{ 
                  scale: 1.05, 
                  cursor: 'pointer' 
                }}
                whileTap={{scale: 0.8}}
                transition={{ease: easeOut}}
              >
                {item}
              </motion.li>
            </a>
          ))}
          </motion.ul>
        </div>
        <motion.button 
          className="px-8 py-[9px] border-black border rounded-xl font-oswald font-bold text-base"
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
      <hr className="h-px mt-6 bg-gray-200 border-0 dark:bg-gray-700 md:hidden" />
      <div className={`bg-black h-full w-full fixed top-0 left-0 z-[999] ${menuButton ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all duration-500 ease-in-out`}>
        <ul className="text-white flex flex-col gap-10 font-ubuntu text-4xl ml-8 mt-5">
          <img src="/src/images/Close Window.png" alt="close" width={80} onClick={handleMenuToggle} />
          {menuItems.map((item, i) => (
            <li key={i} className="text-secondary-0">{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;