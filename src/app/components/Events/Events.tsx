"use client";
import React from 'react';
import { RefObject, useState, useEffect, useRef } from 'react';
import  Image  from 'next/image';

type EventsProps = {
    id: string;
    
};

var topcard = 0;
var midcard = 1;
var botcard = 2;
var botcard2 = 3;

export function useIsVisible(ref: RefObject<Element>): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
      });
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}

const Events:React.FC<EventsProps> = ({id}) => {
    
    

    const colors = [" bg-gred", " bg-gyellow", " bg-ggreen", " bg-gblue"];
    const events = [{name:"Dino Dash", desc:"Participants take on the challenge of the classic Google dino game brought to life using AI technology. Cameras track their movements, projecting obstacles onto the smartboard in real-time. With each obstacle, participants must physically jump or duck to evade, competing to tackle the most hurdles for victory. Powered by OpenCV, DinoDash offers a thrilling blend of physical agility and digital gaming excitement."}, {"name":"Prompt Artistry", "desc":"Participants embark on a journey of prompt engineering, tasked with deciphering a collection of AI-generated images. Their mission is to reverse engineer these images, crafting prompts that yield similar results. Teams compete to generate images closest to the provided set, with the accuracy of their creations assessed through advanced differential hashing algorithms, blending creativity with technical prowess in an exciting artistic challenge."}, {"name":"Cosmic Relay", "desc":"Teams of four navigate through a series of commands appearing on their individual consoles, utilizing a variety of buttons with unique functionalities. As tasks escalate, communication among teammates becomes crucial to overcome challenges within the given time frame, leading to an exhilarating experience filled with chaos and camaraderie."}, {"name":"Schrödinger's Hunt", "desc":"Teams of 3 to 4 embark on a two-round challenge, beginning with physics simulations and transitioning to debugging code to reveal hidden images. Assembled images form a larger picture of a location within RAIT, where teams must locate and explore boxes embodying Schrödinger's superposition paradox—its contents remain a mystery until opened. Timing and teamwork are essential in this thrilling blend of intellect and uncertainty."}];
    

    const [card1, setCard1] = useState("ease-in duration-300 delay-1000"+colors[topcard]);
    const [card2, setCard2] = useState("ease-in duration-300 delay-500 rotate-8"+colors[midcard]);
    const [card3, setCard3] = useState("ease-in duration-300 delay-300 rotate-16"+colors[botcard]);
    const [card4, setCard4] = useState("ease-in duration-300 rotate-24" + colors[botcard2]);
    const [isActive, setIsActive] = useState(false);

    const handleAnimation = () => {

        setIsActive(true);
        // Animation for card 1
        setCard1("transition-transform-opacity ease-in duration-300 -translate-x-20 opacity-0"+colors[topcard]);
        setTimeout(() => {
            topcard = (topcard + 1) % 4;
            setCard1(colors[topcard]);
        },1000);

        setTimeout(() => {
            setCard1("ease-in duration-300 delay-1000" + colors[topcard]);
        },1300);
        // Animation for card 2
        setCard2("transition-transform ease-in duration-300 rotate-0"+colors[midcard]);
        setTimeout(() => {
            midcard = (midcard + 1) % 4;
            setCard2("rotate-8" + colors[midcard % 4]);
        },1000);
        setTimeout(() => {
            setCard2("ease-in duration-300 delay-500 rotate-8"+colors[midcard]);
        },1300);

        // Animation for card 3
        setCard3("transition-transform ease-in duration-300 rotate-8 "+colors[botcard]);
        setTimeout(() => {
            botcard = (botcard + 1) % 4;
            setCard3("rotate-16"+colors[botcard]);
        },1000);

        setTimeout(() => {
            setCard3("ease-in duration-300 delay-100 rotate-16"+colors[botcard]);
        },1300);   

        setCard4("rotate-16"+colors[botcard2]);
        setTimeout(() => {
            botcard2 = (botcard2 + 1) % 4;
            setCard4("rotate-24"+colors[botcard2]);
        },1000);

        setTimeout(() => {
            setIsActive(false);
        }, 1300);

    }

    const ref1= useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref1);

    return <>
        <div id={id} className="w-screen h-screen flex">
            <div ref={ref1} className="h-full w-3/5 relative">
                <div className={`absolute left-20 w-3/4 h-3/4 rounded-3xl z-30 ${card1} ${isVisible ? null : "-translate-x-20 opacity-0"}`}>
                    <p className="text-4xl font-semibold text-white ml-20 mt-16">{events[topcard]["name"]}</p>
                    <p className="text-2xl font-normal text-white mx-20 mt-10"> {events[topcard]["desc"]} </p>
                    
                </div>

                <div className={`absolute left-20 w-3/4 h-3/4 z-20 rounded-3xl ${isVisible ? card2 : "-translate-x-40 opacity-0"}`}>
                    <p className="text-4xl font-semibold text-white ml-20 mt-16">{events[midcard]["name"]}</p>
                    <p className="text-2xl font-normal text-white mx-20 mt-10"> {events[midcard]["desc"]} </p>
                </div>
                <div className={`absolute left-20 w-3/4 z-10 h-3/4 rounded-3xl ${isVisible ? card3 : " -translate-x-40 opacity-0"}`}>
                    <p className="text-4xl font-semibold text-white ml-20 mt-16">{events[botcard]["name"]}</p>
                    <p className="text-2xl font-normal text-white mx-20 mt-10"> {events[botcard]["desc"]} </p>
                    
                </div>
                <div className={`absolute left-20 w-3/4 h-3/4 rounded-3xl transition-transform ease-in duration-300 ${isVisible ? card4 : " -translate-x-40 opacity-0"}`}>
                    <p className="text-4xl font-semibold text-white ml-20 mt-16">{events[botcard]["name"]}</p>
                    <p className="text-2xl font-normal text-white mx-20 mt-10"> {events[botcard]["desc"]} </p>
                </div>
                <button disabled={isActive} onClick={handleAnimation} className="absolute right-5 top-60">
                    <Image src="/arrow.png" alt="arrow" width={25} height={25} />
                </button>
                
                
            </div>
            <div className="h-full w-1/3 relative">
                <div >
                    <p className="font-bold text-3xl mt-20 ml-20">Events</p>
                    <p className="font-medium text-xl ml-24 mt-4">{events[topcard]["name"]}: Rs. 50 per head</p>
                    
                    <button disabled={isActive} onClick={handleAnimation} className="rounded-full w-36 flex items-center justify-center h-20 mt-10 ml-20 duration-300 ease-in-out bg-violet-500 hover:bg-gblue">
                        <span className="font-medium text-2xl text-white">Register</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default Events;