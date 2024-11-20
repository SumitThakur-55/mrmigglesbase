import React from 'react'

export default function Nft() {
    return (
        <div className="flex gap-9 flex-col items-center justify-center  lg:flex-row my-20">
            {/* NFT Scrolling Container */}
            <div className=" mx-5 animate-fade-in-down rounded-2xl bg-slate-700 flex-1 overflow-hidden md:max-w-[816px] lg:max-w-full">
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

            <div className="  flex-1 pr-10 flex flex-col gap-4 mx-3 md:max-w-[810px] lg:max-w-full">
                <span className="animate-fade-in-up  bg-light  w-fit px-3 py-1.5 text-md text-Hero rounded-xl sm:"> Built On Base</span>
                <h2 className="animate-fade-in-up  text-4xl md:text-5xl my-3"><span className="text-Hero">10,000</span> Miggles NFTs</h2>
                <p className="animate-fade-in-up text-md text-para font-thin space-x-3 md:text-lg ">Mister Miggles memecoin community acquired Miggles 10k NFT collection, in August 2024. This was widely considered the first major NFT collection acquisition by a community take over (CTO) project.</p>
                <div className="animate-fade-in-up flex flex-row gap-3 my-3">
                    <button className="bg-Hero text-primary rounded-xl px-3 text-[1rem] md:text-[1.2rem] py-2 text-Primary flex   items-center">OpenSea<img className="h-5 translate-x-2" src="https://framerusercontent.com/images/xbcibKC4itgIdxonaP2HxeNJo.png" alt="" /></button>
                    <button className="bg-[#E22474] text-primary rounded-xl px-2 text-[1rem] md:text-[1.2rem] py-2 text-Primary flex   items-center">Magic Eden<img className="h-4 translate-x-1" src="https://framerusercontent.com/images/CxrwPzeNto4ZtkGZYybEzNTVf8.png" alt="" /></button>
                </div>
                <div className="animate-fade-in-up flex flex-row   gap-4 md:gap-14 sm:gap-12 my-5 ">
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

    )
}
