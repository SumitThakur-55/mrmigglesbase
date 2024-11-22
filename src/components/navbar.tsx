import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const menuItems: MenuItem[] = [
    { name: "Story", href: "#story" },
    { name: "NFTs", href: "#nft" },
    { name: "Merch", href: "#merch" },
    { name: "Partner", href: "#partner" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Faq", href: "#faq" },
  ];

  const containerVariants = {
    button: {
      width: '80px',
      height: '80px',
      borderRadius: '70px',
      transition: {
        duration: 0.3
      }
    },
    nav: {
      width: '600px',
      height: '80px',
      backgroundColor: ' rgba(225, 225, 225, 0.5)',
      borderRadius: '70px',
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1
      }
    })
  };

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };
    document.addEventListener('mousemove', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center gap-[100px] my-4 items-center">
      <div className='flex flex-row items-center justify-center gap-3'>
        <motion.div
          className={`relative  backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] rounded-full z-10 flex felx-row items-center justify-center`}
          animate={{
            scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
            x: isHovered ? 50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
            opacity: isHovered ? 0 : 1,
            // Fade out when clicked, remain visible when not clicked
          }}
          transition={{
            type: 'tween',
            // Smooth spring animation
            stiffness: 100,                 // Stiffness of the spring
            damping: 25,
            delay: !isHovered ? 0.1 : 0
            // Damping factor for smoothness
          }}
        >
          <img src="telegram.svg" alt="" className='h-[30px] w-[30px]' />
        </motion.div>

        <motion.div
          className={` relative backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] rounded-full flex z-10 felx-row items-center justify-center`}
          animate={{
            scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
            x: isHovered ? 50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
            opacity: isHovered ? 0 : 1,
            // Fade out when clicked, remain visible when not clicked
          }}

          transition={{
            type: 'tween',
            // Smooth spring animation
            stiffness: 100,                 // Stiffness of the spring
            damping: 25,
            delay: !isHovered ? 0.1 : 0.1
            // Damping factor for smoothness
          }}
        >
          <img src="x.png" alt="" className='h-[20px] w-[20px]' />
        </motion.div>


      </div>
      <motion.div
        ref={navRef}
        className=" absolute backdrop-blur-lg bg-[rgba(15,15,15,0.5)] flex items-center justify-center z-30 overflow-hidden"
        variants={containerVariants}
        initial="button"
        animate={isHovered ? "nav" : "button"}
        transition={{ type: 'tween' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <Menu className="text-white bg-Hero p-3 w-[50px] h-[50px] rounded-[100px]" />
        ) : (
          <div className="flex items-center  justify-between px-6 w-full">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-para no-underline text-lg font-medium"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        )}
      </motion.div>

      <div className='flex flex-row items-center justify-center gap-3'>
        <motion.div
          className={`relative backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] z-10 rounded-full flex felx-row items-center justify-center`}
          animate={{
            scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
            x: isHovered ? -50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
            opacity: isHovered ? 0 : 1,
            // Fade out when clicked, remain visible when not clicked
          }}
          transition={{
            type: 'tween',
            // Smooth spring animation
            stiffness: 100,                 // Stiffness of the spring
            damping: 25,
            delay: !isHovered ? 0.1 : 0.1
            // Damping factor for smoothness
          }}
        >
          <img src="social.png" alt="" className='h-[40px] w-[40px]' />
        </motion.div>

        <motion.div
          className={`relative backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] z-10 rounded-full flex felx-row items-center justify-center `}
          animate={{
            scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
            x: isHovered ? -50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
            opacity: isHovered ? 0 : 1,
            // Fade out when clicked, remain visible when not clicked
          }}

          transition={{
            type: 'tween',
            // Smooth spring animation
            stiffness: 100,                 // Stiffness of the spring
            damping: 25,
            delay: !isHovered ? 0.1 : 0.1
            // Damping factor for smoothness
          }}
        >
          <img src="me.png" alt="" className='h-[18px] w-[28px]' />
        </motion.div>
      </div >
    </div >
  );
};

export default Navbar;
