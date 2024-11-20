import React from 'react'

export default function Merch() {
    return (
        <div className="flex gap-9 flex-col-reverse  mx-5   items-center  md:justify-center  lg:flex-row my-20">

            <div className=" animate-fade-in-up flex-1 pr-10 px-5 flex flex-col gap-4  w-full md:max-w-[810px] lg:max-w-full">
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


            </div>
            <div className=" mx-5 animate-fade-in-up rounded-2xl  flex-1 overflow-hidden md:max-w-[816px] lg:max-w-full">
                {/* First Row */}
                <div className="flex overflow-hidden select-none  ">
                    <ul className="animate-scroll flex shrink-0 justify-around min-w-full ">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}>
                                <img
                                    src={`/clothes/clothes${i + 1}.png`}
                                    alt={`clothes ${i + 1}`}
                                    className="w-[31rem] h-[31rem] object-cover"
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
    )
}
