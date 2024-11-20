import React from 'react'

export default function Tokenomics() {
    return (
        <div className="bg-Hero p-5 h-screen  flex flex-col gap-6 w-full items-center justify-center">
            <div className=" bg-light-gradient flex flex-row items-center justify-center w-fit  py-2 px-5 text-primary font-semibold rounded-xl">
                <p className="text-md">Built on  </p>
                <img src="https://framerusercontent.com/images/8ForajCgJPxB8yAtt825R6KwM.png?scale-down-to=512" alt="" className="h-5 translate-x-1" />
            </div>
            <h2 className="text-5xl  text-primary font-medium">Tokenomics</h2>
            <div className="w-full md:max-w-[710px] flex flex-col gap-5 px-5">
                <div className="relative h-full w-[100%] rounded-xl  flex flex-row p-6 justify-between border-2 border-white bg-gradient-to-r from-[#4D9BFF] via-[#3378FE] to-[#0042CC] shadow-lg shadow-black/10 backdrop-blur-[15px]">
                    <div className="flex flex-col justify-start">
                        <p className="font-bold text-lg md:text-2xl text-white">Supply</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-regular text-lg md:text-2xl text-white">1bn</p>
                    </div>
                </div>
                <div className="relative h-full w-[100%] rounded-xl flex flex-row p-6 justify-between border-2 border-white bg-gradient-to-r from-[#4D9BFF] via-[#3378FE] to-[#0042CC] shadow-lg shadow-black/10 backdrop-blur-[15px]">
                    <div className="flex flex-col justify-start">
                        <p className="font-bold text-lg md:text-2xl text-white">Buy / Sell Tax</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-regular text-lg md:text-2xl text-white">0%</p>
                    </div>
                </div>
                <div className="relative h-full w-[100%] rounded-xl flex flex-row p-6 justify-between border-2 border-white bg-gradient-to-r from-[#4D9BFF] via-[#3378FE] to-[#0042CC] shadow-lg shadow-black/10 backdrop-blur-[15px]">
                    <div className="flex flex-col justify-start">
                        <p className="font-bold text-xl md:text-2xl  text-white">Launched on</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-regular text-xl md:text-2xl text-white">Ape.store</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col gap-4 py-4 md:flex-row md:justify-between w-[80%]">
                <li className="flex flex-row items-center justify-center w-full gap-2 opacity-100">
                    <img src="check.svg" alt="check" className="w-6 h-6" />
                    <p className="text-xl font-regular text-white">Fair Launch</p>
                </li>
                <li className="flex flex-row items-center justify-center w-full gap-2 opacity-100">
                    <img src="check.svg" alt="check" className="w-6 h-6" />
                    <p className="text-xl font-regular text-white">LP Burned</p>
                </li>
                <li className="flex flex-row items-center justify-center w-full gap-2 opacity-100">
                    <img src="check.svg" alt="check" className="w-6 h-6" />
                    <p className="text-xl font-regular text-white">Renounced</p>
                </li>
            </div>
        </div>
    )
}
