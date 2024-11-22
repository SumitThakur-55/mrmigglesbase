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
    <div className="flex justify-center gap-3 items-center">

      <motion.div
        className={`backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] rounded-full`}
        animate={{
          scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
          x: isHovered ? 50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
          opacity: isHovered ? 0 : 1,
          // Fade out when clicked, remain visible when not clicked
        }}
        transition={{
          type: 'spring',
          // Smooth spring animation
          stiffness: 100,                 // Stiffness of the spring
          damping: 25,
          delay: !isHovered ? 0.1 : 0.1
          // Damping factor for smoothness
        }}
      >
        <img src="social.png" alt="" />
      </motion.div>

      <motion.div
        className={`backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] rounded-full`}
        animate={{
          scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
          x: isHovered ? 50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
          opacity: isHovered ? 0 : 1,
          // Fade out when clicked, remain visible when not clicked
        }}

        transition={{
          type: 'spring',
          // Smooth spring animation
          stiffness: 100,                 // Stiffness of the spring
          damping: 25,
          delay: !isHovered ? 0.1 : 0.1
          // Damping factor for smoothness
        }}
      >
        <img src="social.png" alt="" />
      </motion.div>



      <motion.div
        ref={navRef}
        className="backdrop-blur-lg bg-[rgba(15,15,15,0.5)] flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="button"
        animate={isHovered ? "nav" : "button"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <Menu className="text-white bg-Hero p-1 w-[60px] h-[60px] rounded-[100px]" />
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


      <motion.div
        className={`backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] rounded-full`}
        animate={{
          scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
          x: isHovered ? -50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
          opacity: isHovered ? 0 : 1,
          // Fade out when clicked, remain visible when not clicked
        }}
        transition={{
          type: 'spring',
          // Smooth spring animation
          stiffness: 100,                 // Stiffness of the spring
          damping: 25,
          delay: !isHovered ? 0.1 : 0.1
          // Damping factor for smoothness
        }}
      >
        <img src="social.png" alt="" />
      </motion.div>

      <motion.div
        className={`backdrop-blur-sm bg-[rgb(15,15,15)]/50 h-[55px] w-[55px] rounded-full`}
        animate={{
          scale: isHovered ? 0.5 : 1,  // Grow to 150% when not clicked, shrink to 50% when clicked
          x: isHovered ? -50 : 0,         // Move 50px to the right when clicked, start from left when not clicked
          opacity: isHovered ? 0 : 1,
          // Fade out when clicked, remain visible when not clicked
        }}

        transition={{
          type: 'spring',
          // Smooth spring animation
          stiffness: 100,                 // Stiffness of the spring
          damping: 25,
          delay: !isHovered ? 0.1 : 0.1
          // Damping factor for smoothness
        }}
      >
        <img src="social.png" alt="" />
      </motion.div>
    </div >
  );
};

export default Navbar;
