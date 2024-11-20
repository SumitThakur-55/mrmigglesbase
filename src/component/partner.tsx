import React from 'react'

export default function Partner() {
    return (
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
    )
}
