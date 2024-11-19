"use client";
import Navbar from "@/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative w-full h-screen mb-20">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-Primary h-100 z-10 ">
            <div><Navbar /></div>
            <div className="flex flex-col gap-8 items-center">
              <div className="bg-red md:hidden w-[76px]">
                <img src="icon.png" alt="icon" className=" inset- border-white border-[3px] rounded-full" />
              </div>
              <div className=" bg-light-gradient py-1 px-3 text-primary font-semibold rounded-3xl">
                <p>$147,807,000 Mcap</p>
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl text-primary">Mr. Miggles</h1>
              </div>
              <div className="flex flex-row items-center justify-center"><h2 className="text-lg text-primary">The Feline Face Of  </h2>
                <img src="https://framerusercontent.com/images/8ForajCgJPxB8yAtt825R6KwM.png?scale-down-to=512" alt="" className="h-5 translate-x-2" />
              </div>
              <button className="group p-3 my-3 font-semibold text-lg bg-primary text-Hero rounded-lg flex items-center justify-between hover:gap-5 gap-2 transition-all duration-300">
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

      <div className=" my-7 items-center justify-center flex flex-col gap-3  md:flex-col-reverse">
        <div className="my-3 ">
          <iframe className="w-[90vw] max-w-3xl  aspect-video " title="Youtube Video" allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/BHsIS5viamE?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=BHsIS5viamE" >…</iframe>
        </div>
        <div>
          <div>
            <h2 className="text-4xl font-light px-10 text-center md:text-5xl "><span className=" text-Hero">The Story Behind </span>Mr. Miggles</h2>
          </div>

          <div className="px-5 py-3 text-lg font-thin text-center text-para md:px-10 md:max-w-[860px]">
            <p>Coinbase unleashed the purrfect storm with their NFT campaign, featuring the most adorable cat video starring none other than Mr. Miggles! This cute kitty inspired the birth of a meme token, created to empower all creators—from musicians and artists to, of course, cats!</p><br />
            <p>The token had no pre-sale, no KOLs, and no airdrops—just pure, decentralized fun. When the initial developer decided to chase other mice, the community took the lead. Now, it's all paws on deck as we continue this adventure together! Meow! :3</p>
          </div>
        </div>
      </div>

    </div>
  );
}
