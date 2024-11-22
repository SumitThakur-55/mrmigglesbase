import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
export default function Naviagtion() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Story", id: "story" },
        { title: "NFTs", id: "nft" },
        { title: "Merch", id: "merch" },
        { title: "Partner", id: "partner" },
        { title: "Tokenomics", id: "tokenomics" },
        { title: "Faq", id: "faq" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.nav
            className={` z-50 h-[78px] flex  items-center justify-center gap-4${isOpen ? "backdrop-blur-lg bg-black/30 flex-row" : "bg-transparent"}`}
        // style={{
        //     backgroundColor: isOpen ? 'rgba(15, 15, 15, 0.5)' : 'transparent', // Change background color based on isOpen
        // }}
        >
            <motion.div
                className={`absolute left-[50%] top-[50%]  transform -translate-x-1/2 -translate-y-1/2  z-50 items-center  ${!isOpen ? "bg-[#084A7D] px-2 py-2" : ""} rounded-full `}
                animate={{
                    left: isOpen ? "3rem" : "50%", // Adjust left position // Moves left 12px when `isMoved` is true
                }}
                transition={{
                    type: "tween", duration: 0.5,
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <motion.button
                    className={`bg-light-gradient z-30 rounded-full ${!isOpen ? " px-2 py-2" : "px-3 py-3"}`}
                    onClick={() => setIsOpen(!isOpen)} // Toggle rotation
                    animate={{
                        rotate: isOpen ? 180 : 0, // Rotate 180 degrees when `isOpen` is true
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                        stiffness: 150,
                        damping: 20,
                    }}
                >
                    {isOpen ? (
                        <img
                            src="/close.svg"
                            alt="Close"
                            className=" w-[30px] h-[30px] object-fill"
                        />
                    ) : (
                        <img
                            src="/menu.svg"
                            alt="Menu"
                            className=" w-[30px] h-[30px] object-fill"
                        />
                    )}
                </motion.button>

            </motion.div>


            <motion.ul
                className={` absolute left-[6rem] flex flex-row gap-3   overflow-x-auto  z-40 scrollbar-hide  ${isOpen ? "" : "hidden"}  `}
                style={{
                    minWidth: "200px", // Ensure a minimum width
                    maxWidth: "calc(100% - 7rem)", // Ensure it doesn't overflow the viewport
                    whiteSpace: "wrap", // Prevent items from wrapping
                }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    stiffness: 150,
                    damping: 20,
                }}
            >
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className="backdrop-blur-lg bg-white/0 text-white text-[1.1rem]  cursor-pointer hover:text-gray-300  px-5 py-3 rounded-full"
                        style={{
                            backgroundColor: isOpen ? "rgba(15, 15, 15, 0.3)" : "transparent", // Change background color based on isOpen
                        }}
                        onClick={() => {
                            scrollToSection(item.id);
                            setIsOpen(false); // Close menu on click
                        }}
                    >
                        {item.title}
                    </li>
                ))}
            </motion.ul>

        </motion.nav >
    )
}
