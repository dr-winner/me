import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import {FaLocationArrow} from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />

                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />

                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h1 className="uppercase tracking-widest text-5xl text-center text-blue-100 font-extrabold font-outfit animate-color-change mb-4 animate-fade-in-up ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                            Richard Winner Duvor
                        </span>
                    </h1>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Blockchain Developer Specialized in Smart Contracts Engineering, AI/MLOps and Front-End Design"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m an expert software developer with vast experience in blockchain development, artificial intelligence, and frontend engineering. I build secure smart contracts, brilliant AI agents, and code magic into user interfaces. When I'm not coding, I'm debugging life with a cup of coffee. Ready to create the future? Let's do this!
                    </p>

                    <a href="#about">
                        <ShimmerButton
                            title="Have a look here!"
                            icon={<FaLocationArrow/>}
                            position='right'
                        />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Hero