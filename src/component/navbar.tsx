"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Story", id: "story" },
    { title: "NFTs", id: "nft" },
    { title: "Merch", id: "merch" },
    { title: "Partner", id: "partner" },
    { title: "Tokenomics", id: "tokenomics" },
    { title: "Faq", id: "faq" },
  ];

  return (
    <nav></nav>
  );
};

export default Navbar;
