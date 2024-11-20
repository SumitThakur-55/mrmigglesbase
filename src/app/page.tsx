"use client";
import Faq from "@/component/faq";
import Merch from "@/component/merch";
import Navbar from "@/component/navbar";
import Nft from "@/component/nft";
import Partner from "@/component/partner";
import Story from "@/component/story";
import Tokenomics from "@/component/tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative w-full h-screen overflow-hidden mb-20">
          <div className="absolute inset-0 flex flex-col items-center justify-between text-Primary h-100 z-10 ">
            <div className=" bg-black h-[78px] w-full"><Navbar /></div>
            <div className="animate-fade-in-down flex flex-col gap-8 items-center">
              <div className="bg-red md:hidden w-[76px]">
                <img src="icon.png" alt="icon" className=" inset- border-white border-[3px] rounded-full" />
              </div>
              <div className="animate-fade-in-down  bg-light-gradient py-1 px-3 text-primary font-semibold rounded-3xl">
                <p>$147,807,000 Mcap</p>
              </div>
              <div>
                <h1 className="animate-fade-in-up  text-5xl md:text-7xl text-primary">Mr. Miggles</h1>
              </div>
              <div className="animate-fade-in-up flex flex-row items-center justify-center"><h2 className="text-lg text-primary">The Feline Face Of  </h2>
                <img src="https://framerusercontent.com/images/8ForajCgJPxB8yAtt825R6KwM.png?scale-down-to=512" alt="" className="h-5 translate-x-2" />
              </div>
              <button className=" animate-fade-in-up group p-3 my-3 font-semibold text-lg bg-primary text-Hero rounded-lg flex items-center justify-between hover:gap-5 gap-2 transition-all duration-300">
                Buy $miggles
                <span className="">
                  <img src="right-arrow.svg" alt="Right Arrow" />
                </span>
              </button>
              <div className="md:hidden">
                <ul className="flex flex-row gap-2">
                  <li className="h-9 w-9 flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-4 w-4" src="x.png" alt="" /></a></li>
                  <li className="h-9 w-9 flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-4 w-4" src="telegram.svg" alt="" /></a></li>
                  <li className="h-9 w-9 flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-4 w-4" src="social.png" alt="" /></a></li>
                  <li className="h-9 w-9 p-[6px] flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-3 w-4" src="me.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="flex overflow-hidden select-none gap-4 p-3">
              <ul className="animate-scroll flex shrink-0 justify-around min-w-full gap-4">
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
              </ul>
              <ul className="animate-scroll flex shrink-0 justify-around min-w-full gap-4" aria-hidden="true">
                <li className="text-2xl text-primary font-bold opacity-60">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold opacity-60">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold opacity-60">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold opacity-60">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold opacity-60">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary opacity-60">$MIGGLES</li>
              </ul>
            </div>
          </div>

          <video
            src="https://framerusercontent.com/assets/RNS5DEm72tdNksus4FxQB7yJGQ.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="cursor-auto w-full h-screen rounded-none block object-cover bg-transparent  object-[70%] z-0"
          ></video>
        </div>
      </div>

      <div id="story">
        <Story />
      </div>
      <div id="nft">
        <Nft />
      </div>
      <div id="merch">
        <Merch />
      </div>
      <div id="partner">
        <Partner />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="faq">
        <Faq />
      </div>


      <div className="h-[110svh] w-full bg-light-gradient flex flex-col  justify-between items-stretch">
        <div className="bg-light-gradient p-30">
          <div className="flex overflow-hidden select-none gap-4 p-3">
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full gap-4">
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>


            </ul>
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full gap-4" aria-hidden="true">
              <li className="text-2xl text-primary font-bold ">$MIGGLES</li>
              <li className="text-2xl text-primary font-bold ">$MIGGLES</li>
              <li className="text-2xl text-primary font-bold ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
              <li className="text-2xl font-bold text-primary ">$MIGGLES</li>

            </ul>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-red  w-32">
            <img src="icon.png" alt="icon" className=" inset-0 border-white border-[3px] rounded-full" />
          </div>
          <div className=" bg-light-gradient py-2 px-4  gap-3  text-primary font-semibold rounded-xl w-fit flex flex-row">
            <div className="flex flex-row">
              <img src="nfts/nft1.webp" className="rounded-full w-7 h-7 " alt="" />
              <img src="nfts/nft2.webp" className="rounded-full w-7 h-7  " alt="" />
              <img src="nfts/nft3.webp" className="rounded-full w-7 h-7  " alt="" />
            </div>
            <p className="text-lg font-light">Join 70k+ Holders</p>
          </div>
          <h1 className="text-3xl md:text-5xl text-primary">$ Miggles</h1>
          <p className="text-xl text-primary">The Coinbase cat Mascot</p>

          <div className="opacity-100 transform perspective-1200px">

            <a
              className="flex flex-row items-center justify-center gap-3 bg-gradient-to-b from-blue-400 to-blue-800 
               via-blue-600 border border-white/40 rounded-lg shadow-md p-3 transition transform hover:scale-105"
              href="#"
            >
              <p className="font-bold text-primary text-sm">
                Copy Contract Address
              </p>
              <div className="">
                <img src="check.svg" className="h-6 w-6" alt="" />
              </div>
            </a>


          </div>

          <div className="">
            <ul className="flex flex-row gap-2">
              <li className="h-10 w-10 flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-4 w-4" src="x.png" alt="" /></a></li>
              <li className="h-10 w-10 flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-4 w-4" src="telegram.svg" alt="" /></a></li>
              <li className="h-10 w-10 flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-4 w-4" src="social.png" alt="" /></a></li>
              <li className="h-10 w-10  p-[6px] flex items-center justify-center bg-Hero rounded-full hover:bg-[#0042CC]"><a href="#"><img className="h-3 w-4" src="me.png" alt="" /></a></li>
            </ul>
          </div>
        </div>


        <div>
          <div className="bg-light-gradient p-30">
            <div className="flex overflow-hidden select-none gap-4 p-3">
              <ul className="animate-scroll flex shrink-0 justify-around min-w-full gap-4">
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>


              </ul>
              <ul className="animate-scroll flex shrink-0 justify-around min-w-full gap-4" aria-hidden="true">
                <li className="text-2xl text-primary font-bold ">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold ">$MIGGLES</li>
                <li className="text-2xl text-primary font-bold ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>
                <li className="text-2xl font-bold text-primary ">$MIGGLES</li>

              </ul>
            </div>
          </div>
          <div className="  bg-[#428CFF] p-3 flex flex-col gap-3 justify-center items-center md:flex-row md:justify-between">
            <img src="icon.png" alt="icon" className=" inset-0  w-16 h-16 rounded-full" />
            <button className="text-[1.1rem] text-primary">Buit by convert labs</button>
          </div>
        </div>
      </div>


    </div >
  );
}
