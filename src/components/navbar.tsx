// "use client";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { title: "Story", id: "story" },
//     { title: "NFTs", id: "nft" },
//     { title: "Merch", id: "merch" },
//     { title: "Partner", id: "partner" },
//     { title: "Tokenomics", id: "tokenomics" },
//     { title: "Faq", id: "faq" },
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <nav
//       className={`w-full bg-transparent h-[78px] px-5 relative z-50 flex flex-row gap-5 items-center ${isOpen ? "absolute top-0 left-4" : "justify-center"
//         } transition-all delay-700`}
//     >
//       {/* Button */}
//       <div className="absolute left-3 items-center bg-[#084A7D] rounded-full px-2 py-2">
//         <button
//           className={`bg-light-gradient px-2 py-2 rounded-full ${isOpen ? "rotate-180" : "rotate-0"
//             } transition-transform delay-700`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <img src="/menu.svg" alt="Menu" className="w-7 h-7 object-fill" />
//         </button>
//       </div>

//       {/* Menu Items */}
//       <ul
//         style={{
//           display: isOpen ? "flex" : "none",
//         }}
//         className="flex-row items-center justify-center gap-5 "
//       >
//         {menuItems.map((item) => (
//           <li
//             key={item.id}
//             className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
//             onClick={() => {
//               scrollToSection(item.id);
//               setIsOpen(false); // Close menu on click
//             }}
//           >
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Story', href: '#story' },
    { name: 'NFT', href: '#nft' },
    { name: 'Merch', href: '#merch' },
    { name: 'Partners', href: '#partners' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{
        backdropFilter: `blur(${isOpen ? '20px' : '0px'})`,
        backgroundColor: isOpen ? 'rgba(15, 15, 15, 0.5)' : 'rgba(15, 15, 15, 0)',
        width: '100%',
        opacity: 1
      }}
    >
      <div className="relative flex items-center">
        {/* Movable Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ x: 0 }}
          animate={{ x: isOpen ? -100 : 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="z-50 relative"
          style={{
            background: 'linear-gradient(180deg, rgb(77, 155, 255) 0%, rgb(51, 120, 254) 50.9%, rgb(0, 66, 204) 100%)',
            borderRadius: '30px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 20px 0px'
          }}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </motion.button>

        {/* Navigation Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "tween" }}
              className="absolute left-full ml-4 flex space-x-2"
              style={{
                backgroundColor: 'rgba(15, 15, 15, 0.5)',
                borderRadius: '60px',
                padding: '0.5rem'
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white rounded-full"
                  style={{
                    backgroundColor: 'rgba(15, 15, 15, 0.25)'
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav >
  );
};

export default Navigation;