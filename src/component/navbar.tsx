"use client";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'HOME', href: '/' },
    { title: 'SHOP', href: '/shop' },
    { title: 'ABOUT', href: '/about' },
    { title: 'CONTACT', href: '/contact' }
  ];
  return (
    <nav className="flex flex-col items-center justify-center fixed top-0 left-0 w-full h-[78px] bg-black text-white z-50">

    </nav>
  );
};

export default Navbar;