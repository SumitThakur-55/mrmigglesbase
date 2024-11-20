import React from 'react'

export default function Story() {
    return (
        <div className=" my-20 items-center justify-center flex flex-col gap-3  md:flex-col-reverse">
            <div className="my-3 ">
                <iframe className="w-[90vw] max-w-3xl  aspect-video " title="Youtube Video" allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/BHsIS5viamE?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=BHsIS5viamE" >…</iframe>
            </div>
            <div>
                <div>
                    <h2 className=" animate-fade-in-down text-4xl font-light px-10 text-center md:text-6xl md:font-medium "><span className=" text-Hero">The Story Behind </span>Mr. Miggles</h2>
                </div>

                <div className="animate-fade-in-up px-5 py-3 text-xl font-thin text-center text-para md:px-10  md:font-medium md:max-w-[900px]">
                    <p>Coinbase unleashed the purrfect storm with their NFT campaign, featuring the most adorable cat video starring none other than Mr. Miggles! This cute kitty inspired the birth of a meme token, created to empower all creators—from musicians and artists to, of course, cats!</p><br />
                    <p>The token had no pre-sale, no KOLs, and no airdrops—just pure, decentralized fun. When the initial developer decided to chase other mice, the community took the lead. Now, it's all paws on deck as we continue this adventure together! Meow! :3</p>
                </div>
            </div>
        </div>
    )
}
