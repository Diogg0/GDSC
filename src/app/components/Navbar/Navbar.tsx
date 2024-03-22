"use client";
import React from 'react';
import Image from 'next/image';

type navbarProps = {
    
};

const handleEvents = () => {
    const element = document.getElementById('events');
    if(element){
        element.scrollIntoView({behavior: "smooth"});
    }
}

const handleHome = () => {
    const element = document.getElementById('home');
    if(element){
        element.scrollIntoView({behavior: "smooth"});
    }
}

const handleAbout = () => {
    const element = document.getElementById('about');
    if(element){
        element.scrollIntoView({behavior: "smooth"});
    }
}

const navbar:React.FC<navbarProps> = () => {
    
    return <>
        <meta name="viewport" content="width=device-width, initial-scale=1 height=device-height" />
        <nav className="h-20 w-full flex items-center sm:w-screen justify-between pr-8 drop-shadow-2xl sticky sm:fixed z-50 bg-white border-black">
            <Image className="left-0 ml-5 py-5" src="/long-logo.png" alt='logo' width={250} height={250}></Image>
            <div className="flex opacity-0 sm:opacity-100 items-center space-x-14 pr-10 py-3 text-xl font-normal">
                <button onClick={handleHome} className= "text-gred group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Home</button>
                <button onClick={handleEvents} className= "text-gyellow group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Events</button>
                <button onClick={handleAbout} className= "text-ggreen group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">About us</button>
                <button className= "text-gblue group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Contact</button>
            </div>
        </nav>
    </>
}
export default navbar;