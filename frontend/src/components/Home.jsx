import React from 'react'
import Header from './Header'
import home_img from "../assets/home_img.svg"

const HomePage = () => {
  return (
    <div className="relative px-14 py-5 min-h-screen font-primary bg-[#fff]">
        <Header />
        <div className="relative flex py-10">
            <div className="z-10">
                <div className="py-6 max-w-[280px] pr-6 text-2xl font-normal border-b-8 border-[#2C363F]">
                    <p>
                        Get your Chores done
                    </p>
                </div>
                <div>
                    <h1 className="text-7xl text-[#2C363F] max-w-[734px] py-8">
                    QUICKER AND FASTER
                    </h1>
                    <p className="text-2xl py-4 max-w-[650px]">
                    We provide you with the resources you need to excel and get chores and work done within your locality.
                    </p>
                </div>
                <div>
                    <button className="py-4 px-8 text-white text-lg bg-[#111111]">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="absolute right-[190px] z-0">
                <img alt="Backgound Image" src={home_img} className="h-[560px]" />
            </div>
        </div>
    </div>
  )
}

export default HomePage