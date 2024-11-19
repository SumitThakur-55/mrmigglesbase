"use client";
import Navbar from "@/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative w-full h-screen overflow-hidden mb-20">
          <div className="absolute inset-0 flex flex-col items-center justify-between text-Primary h-100 z-10 ">
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

      <div className=" my-20 items-center justify-center flex flex-col gap-3  md:flex-col-reverse">
        <div className="my-3 ">
          <iframe className="w-[90vw] max-w-3xl  aspect-video " title="Youtube Video" allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/BHsIS5viamE?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=BHsIS5viamE" >…</iframe>
        </div>
        <div>
          <div>
            <h2 className="text-4xl font-light px-10 text-center md:text-6xl md:font-medium "><span className=" text-Hero">The Story Behind </span>Mr. Miggles</h2>
          </div>

          <div className="px-5 py-3 text-xl font-thin text-center text-para md:px-10  md:font-medium md:max-w-[900px]">
            <p>Coinbase unleashed the purrfect storm with their NFT campaign, featuring the most adorable cat video starring none other than Mr. Miggles! This cute kitty inspired the birth of a meme token, created to empower all creators—from musicians and artists to, of course, cats!</p><br />
            <p>The token had no pre-sale, no KOLs, and no airdrops—just pure, decentralized fun. When the initial developer decided to chase other mice, the community took the lead. Now, it's all paws on deck as we continue this adventure together! Meow! :3</p>
          </div>
        </div>
      </div>


      <div className="flex gap-9 flex-col items-center justify-center  lg:flex-row my-20">
        {/* NFT Scrolling Container */}
        <div className=" mx-5  rounded-2xl bg-slate-700 flex-1 overflow-hidden md:max-w-[816px] lg:max-w-full">
          {/* First Row */}
          <div className="flex overflow-hidden select-none  ">
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full ">
              {Array.from({ length: 9 }).map((_, i) => (
                <li key={i}>
                  <img
                    src={`/nfts/nft${i + 1}.webp`}
                    alt={`NFT ${i + 1}`}
                    className="w-60 h-60 object-cover "
                  />
                </li>
              ))}
            </ul>
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full " aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <li key={i}>
                  <img
                    src={`/nfts/nft${i + 1}.webp`}
                    alt={`NFT ${i + 1}`}
                    className="w-60 h-60 object-cover "
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Second Row */}
          <div className="flex overflow-hidden select-none  ">
            <ul className="animate-scrollReverse flex shrink-0 justify-around min-w-full ">
              {Array.from({ length: 9 }).map((_, i) => (
                <li key={i + 9}>
                  <img
                    src={`/nfts/nft${i + 10}.webp`}
                    alt={`NFT ${i + 10}`}
                    className="w-60 h-60 object-cover "
                  />
                </li>
              ))}
            </ul>
            <ul className="animate-scrollReverse flex shrink-0 justify-around min-w-full " aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <li key={i + 9}>
                  <img
                    src={`/nfts/nft${i + 10}.webp`}
                    alt={`NFT ${i + 10}`}
                    className="w-60 h-60 object-cover "
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Placeholder Section */}

        <div className=" flex-1 pr-10 flex flex-col gap-4 mx-3 md:max-w-[810px] lg:max-w-full">
          <span className="bg-light  w-fit px-3 py-1.5 text-md text-Hero rounded-xl sm:"> Built On Base</span>
          <h2 className="text-4xl md:text-5xl my-3"><span className="text-Hero">10,000</span> Miggles NFTs</h2>
          <p className="text-md text-para font-thin space-x-3 md:text-lg ">Mister Miggles memecoin community acquired Miggles 10k NFT collection, in August 2024. This was widely considered the first major NFT collection acquisition by a community take over (CTO) project.</p>
          <div className="flex flex-row gap-3 my-3">
            <button className="bg-Hero text-primary rounded-xl px-3 text-[1rem] md:text-[1.2rem] py-2 text-Primary flex   items-center">OpenSea<img className="h-5 translate-x-2" src="https://framerusercontent.com/images/xbcibKC4itgIdxonaP2HxeNJo.png" alt="" /></button>
            <button className="bg-[#E22474] text-primary rounded-xl px-2 text-[1rem] md:text-[1.2rem] py-2 text-Primary flex   items-center">Magic Eden<img className="h-4 translate-x-1" src="https://framerusercontent.com/images/CxrwPzeNto4ZtkGZYybEzNTVf8.png" alt="" /></button>
          </div>
          <div className="flex flex-row   gap-4 md:gap-14 sm:gap-12 my-5 ">
            <div>
              <div className="h-14 w-14 bg-light rounded-2xl p-2"><img src="lock.svg" alt="" /></div>
              <p className="  my-2 text-sm md:text-lg">Holders Access Exclusive Rewards</p>
            </div>
            <div>
              <div className="h-14 w-14 bg-light rounded-2xl p-2"><img src="analytics.svg" alt="" /></div>
              <p className=" my-2 text-sm md:text-lg">100% Of Royalties Go To Charity</p>
            </div>
          </div>
        </div>


      </div>

      <div className="flex gap-9 flex-col-reverse  mx-5   items-center  md:justify-center  lg:flex-row my-20">

        <div className=" flex-1 pr-10 px-5 flex flex-col gap-4  w-full md:max-w-[810px] lg:max-w-full">
          <span className="bg-light  w-fit px-3 py-1.5 text-md text-Hero rounded-xl sm:"> $MIGGLES Merch</span>
          <h2 className="text-4xl md:text-5xl my-3 ">Got <span className="text-Hero">$Miggles</span> drip</h2>
          <p className="text-md text-para font-thin space-x-3 md:text-lg ">Shop here now. NFT Holders get exclusive discounts.</p>
          <div className="flex flex-row gap-3 my-3">
            <button className="group p-3 my-3 font-semibold  w-full md:w-fit  text-lg bg-light-gradient text-primary rounded-lg flex items-center justify-center hover:gap-5 gap-2 transition-all duration-300">
              Buy $miggles
              <span className="">
                <img src="right-arrow-1.svg" alt="Right Arrow" />
              </span>
            </button>
          </div>
          <div>

          </div>

        </div>
        <div className=" mx-5  rounded-2xl bg-slate-700 flex-1 overflow-hidden md:max-w-[816px] lg:max-w-full">
          {/* First Row */}
          <div className="flex overflow-hidden select-none  ">
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full ">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>
                  <img
                    src={`/clothes/clothes${i + 1}.png`}
                    alt={`clothes ${i + 1}`}
                    className="w-[31rem] h-[31rem] object-cover "
                  />
                </li>
              ))}
            </ul>
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full " aria-hidden="true">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>
                  <img
                    src={`/clothes/clothes${i + 1}.png`}
                    alt={`clothes ${i + 1}`}
                    className="w-[31rem] h-[31rem] object-cover "
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>


      <div className="flex gap-9 flex-col items-center justify-center overflow-hidden  lg:flex-row my-20">
        {/* NFT Scrolling Container */}
        <div className="mx-5 rounded-2xl bg-[#F5F5F5] px-7 m-4 flex-1 max-w-[90%] overflow-hidden md:max-w-[816px] lg:max-w-full">
          {/* First Row (Left to Right) */}
          <div className="flex overflow-hidden select-none px-3">
            {/* First UL for Left to Right scrolling */}
            <ul className="animate-scrollReverse flex shrink-0 justify-around min-w-full">
              {Array.from({ length: 13 }).map((_, i) => (
                <li key={i} >
                  <img
                    src={`/brands/brand${i + 1}.png`} // Update the source to brands folder
                    alt={`Brand ${i + 1}`}
                    className="w-[10rem] h-[6rem] rounded-2xl bg-white mx-4 my-10 object-scale-down"
                  />
                </li>
              ))}
            </ul>

            {/* Second UL for Left to Right scrolling (duplicate of the first row for seamless loop) */}
            <ul className="animate-scrollReverse flex shrink-0 justify-around rounded-lg min-w-full" aria-hidden="true">
              {Array.from({ length: 13 }).map((_, i) => (
                <li key={i} >
                  <img
                    src={`/brands/brand${i + 1}.png`} // Same update here
                    alt={`Brand ${i + 1}`}
                    className="w-[10rem] h-[6rem] rounded-2xl border-gray-700 border-3 bg-white mx-4 my-10  object-scale-down"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Second Row (Right to Left) */}
          <div className="flex overflow-hidden select-none">
            {/* First UL for Right to Left scrolling */}
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full">
              {Array.from({ length: 13 }).map((_, i) => (
                <li key={i + 13} >
                  <img
                    src={`/brands/brand${i + 1}.png`}
                    alt={`Brand ${i + 1}`}
                    className="w-[10rem] h-[6rem] rounded-2xl border-gray-700 border-3 bg-white mx-4 my-10 object-scale-down"
                  />
                </li>
              ))}
            </ul>

            {/* Second UL for Right to Left scrolling (duplicate of the second row for seamless loop) */}
            <ul className="animate-scroll flex shrink-0 justify-around min-w-full" aria-hidden="true">
              {Array.from({ length: 13 }).map((_, i) => (
                <li key={i + 13} >
                  <img
                    src={`/brands/brand${i + 1}.png`} // Same update here
                    alt={`Brand ${i + 1}`}
                    className="w-[10rem] h-[6rem] rounded-2xl border-gray-700 border-3 bg-white mx-4 my-10 object-scale-down"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Placeholder Section */}

        <div className=" flex-1 pr-10 flex flex-col gap-4 mx-7 md:max-w-[810px] lg:max-w-full">
          <span className="bg-light  w-fit px-3 py-1.5 text-md text-Hero rounded-xl sm:"> Partners</span>
          <h2 className="text-4xl md:text-5xl my-3"><span className="text-Hero">$Miggles</span> is easy to find</h2>
          <p className="text-md text-para font-thin space-x-3 md:text-lg ">Meet the fabulous partners of Mister Miggles— With their whiskers twitching and paws tapping, they're constantly pushing the boundaries of blockchain and making the Web3 world a meow-nificent place to be.   </p>
          <p className="text-md text-para font-thin space-x-3 md:text-lg ">Together, they're not just chasing tails; they're chasing innovation for all miggleskind! 🐾✨</p>


        </div>


      </div>


      <div className="bg-Hero p-5 flex flex-col gap-4 items-center justify-center">
        <div className=" bg-light-gradient flex flex-row items-center justify-center w-fit  py-2 px-5 text-primary font-semibold rounded-xl">
          <p className="text-md">Built on  </p>
          <img src="https://framerusercontent.com/images/8ForajCgJPxB8yAtt825R6KwM.png?scale-down-to=512" alt="" className="h-5 translate-x-1" />
        </div>
        <h2 className="text-5xl  text-primary font-medium">Tokenomics</h2>
      </div>
    </div>
  );
}
