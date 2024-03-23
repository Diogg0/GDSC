"use client";
import React from 'react';
import { RefObject, useState, useEffect, useRef } from 'react';
import  Image  from 'next/image';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';

type EventsProps = {
    id: string;
    
};

var topcard = 0;
var midcard = 1;
var botcard = 2;
var botcard2 = 3;

var event1 = 0;
var event2 = 1;
var event3 = 2;
var event4 = 3;

export function useIsVisible(ref: RefObject<Element>): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
              setIntersecting(true);
              setHasAnimated(true);
          }
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
    }, [ref, hasAnimated, isIntersecting]);
  
    return isIntersecting;
}


const Events:React.FC<EventsProps> = ({id}) => {


    const colors = [" bg-gred", " bg-gyellow", " bg-ggreen", " bg-gblue"];
    const events = [{name:"Dino Dash", desc:"Participants take on the challenge of the classic Google dino game brought to life using AI technology. Cameras track their movements, projecting obstacles onto the smartboard in real-time. With each obstacle, participants must physically jump or duck to evade, competing to tackle the most hurdles for victory.", link:"https://forms.gle/hT6Awgp5kpGPJae88", fee:" Rs.50 per head"}, 
    {name:"Prompt Artistry", desc:"Your mission is to reverse engineer these images, crafting prompts that yield similar results. Teams compete to generate images closest to the provided set, with the accuracy of their creations assessed through advanced differential hashing algorithms, blending creativity with technical prowess in an exciting artistic challenge.", link:"https://forms.gle/JfR6yUtmLLG1LgbS7", fee:" Rs.50 per head"}, 
    {name:"Cosmic Relay", desc:"Teams of four navigate through a series of commands appearing on their individual consoles, utilizing a variety of buttons with unique functionalities. As tasks escalate, communication among teammates becomes crucial to overcome challenges within the given time frame, leading to an exhilarating experience filled with chaos and camaraderie.", link:"https://forms.gle/WbG4T1YSdYVFmVFb8", fee:" Rs.50 per head"}, 
    {name:"Schrödinger's Hunt", desc:"Teams of 3 to 4 embark on a two-round challenge, beginning with physics simulations and transitioning to debugging code to reveal hidden images. Assembled images form a larger picture of a location within RAIT, where teams must locate and explore boxes embodying Schrödinger's superposition paradox—its contents remain a mystery until opened.", link:"https://forms.gle/ExjjNBYASF2dBGfD7", fee:" Rs.50 per head"},
    {name:"8 ball pool", desc:"1v1 pool match online with your companion to test your skills on the pool table.",link:"https://forms.gle/8eUAdKi5Kk9WSSHm7", fee:" Rs.50 per head"},
    {name:"BGMI", desc:"1v1 bgmi match to test your tactical skills on ground",link:"https://forms.gle/f8StZCBRgsA7mMT67", fee:" Rs.100 per head"},
    {name:"FIFA'24", desc:"Bringing the excitement of football onto the screen and showcase your skills to win the match", link:"https://forms.gle/epSWzMdPxUcPxJKU6", fee:" Rs.100 per head"}
    ];

    const [card1, setCard1] = useState("ease-in duration-300 delay-1000"+colors[topcard]);
    const [card2, setCard2] = useState("ease-in duration-300 delay-500 rotate-8"+colors[midcard]);
    const [card3, setCard3] = useState("ease-in duration-300 delay-300 rotate-16"+colors[botcard]);
    const [card4, setCard4] = useState("ease-in duration-300 rotate-24" + colors[botcard2]);
    const [isActive, setIsActive] = useState(false);

    const handleAnimation = () => {
        if(!isActive){
        setIsActive(true);
        // Animation for card 1
        setCard1("transition-transform-opacity ease-in duration-300 -translate-x-20 opacity-0"+colors[topcard]);
        setTimeout(() => {
            topcard = (topcard + 1) % 4;
            event1 = (event1 + 1) % 7;
            setCard1(colors[topcard]);
        },1000);

        setTimeout(() => {
            setCard1("ease-in duration-300 delay-1000" + colors[topcard]);
        },1300);
        // Animation for card 2
        setCard2("transition-transform ease-in duration-300 rotate-0"+colors[midcard]);
        setTimeout(() => {
            midcard = (midcard + 1) % 4;
            event2 = (event2 + 1) % 7;
            setCard2("rotate-8" + colors[midcard % 4]);
        },1000);
        setTimeout(() => {
            setCard2("ease-in duration-300 delay-500 rotate-8"+colors[midcard]);
        },1300);

        // Animation for card 3
        setCard3("transition-transform ease-in duration-300 rotate-8 "+colors[botcard]);
        setTimeout(() => {
            botcard = (botcard + 1) % 4;
            event3 = (event3 + 1) % 7;
            setCard3("rotate-16"+colors[botcard]);
        },1000);

        setTimeout(() => {
            setCard3("ease-in duration-300 delay-100 rotate-16"+colors[botcard]);
        },1300);   

        setCard4("rotate-16"+colors[botcard2]);
        setTimeout(() => {
            botcard2 = (botcard2 + 1) % 4;
            event4 = (event4 + 1) % 7;
            setCard4("rotate-24"+colors[botcard2]);
        },1000);

        setTimeout(() => {
            setIsActive(false);
        }, 1300);

        }

    }

    const ref1= useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref1);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleAnimation()
      });

    return <>
        <meta name="viewport" content="width=device-width, initial-scale=1 height=device-height" />
        <div id={id} className="sm:pt-20 w-screen h-[500px] sm:h-screen flex">
            <div ref={ref1}  className="h-[270px] mt-32 sm:mt-0 sm:h-full w-3/5 relative">
                <div {...handlers} className={`absolute w-full sm:left-20 sm:w-3/4 h-full sm:h-3/4 rounded-3xl z-30 ${card1} ${isVisible ? null : "-translate-x-20 opacity-0"}`}>
                    <p className="text-2xl sm:text-4xl font-semibold text-white ml-5 sm:ml-20 sm:mt-16 mt-8">{events[event1]["name"]}</p>
                    <p className="text-[10px]  sm:text-2xl font-normal text-white mx-4 my-3 sm:ml-20 sm:mt-16 "> {events[event1]["desc"]} </p>
                    <p className="absolute left-24 bottom-2 text-[10px]  sm:text-2xl font-normal text-gray-700 sm:opacity-0">Swipe left</p>
                    
                </div>

                <div className={`absolute w-full sm:left-20 sm:w-3/4 h-full sm:h-3/4 z-20 rounded-3xl ${isVisible ? card2 : "-translate-x-40 opacity-0"}`}>
                    <p className="text-2xl sm:text-4xl font-semibold text-white ml-5 sm:ml-20 sm:mt-16 mt-8">{events[event2]["name"]}</p>
                    <p className="text-[10px] sm:text-2xl font-normal text-white mx-4 my-3 sm:ml-20 sm:mt-16 "> {events[event2]["desc"]} </p>
                    <p className="absolute left-24 bottom-2 text-[10px]  sm:text-2xl font-normal text-gray-700 sm:opacity-0">Swipe left</p>
                </div>
                <div className={`absolute w-full sm:left-20 sm:w-3/4 h-full sm:h-3/4 z-10 rounded-3xl ${isVisible ? card3 : " -translate-x-40 opacity-0"}`}>
                    <p className="text-2xl sm:text-4xl font-semibold text-white ml-5 sm:ml-20 sm:mt-16 mt-8">{events[event3]["name"]}</p>
                    <p className="text-[10px] sm:text-2xl font-normal text-white mx-4 my-3 sm:ml-20 sm:mt-16 "> {events[event3]["desc"]} </p>
                    
                </div>
                <div className={`absolute w-full sm:left-20 sm:w-3/4 h-full sm:h-3/4 rounded-3xl transition-transform ease-in duration-300 ${isVisible ? card4 : " -translate-x-40 opacity-0"}`}>
                    <p className="text-2xl sm:text-4xl font-semibold text-white ml-5 sm:ml-20 sm:mt-16 mt-8">{events[event4]["name"]}</p>
                    <p className="text-[10px] sm:text-2xl font-normal text-white mx-4 my-3 sm:ml-20 sm:mt-16"> {events[event4]["desc"]} </p>
                </div>
                <button onClick={handleAnimation} className="absolute right-5 top-60 opacity-0 sm:opacity-100">
                    <Image src="/arrow.png" alt="arrow" width={25} height={25} />
                </button>
                
                
            </div>
            <div className="h-1/3 sm:mt-0 mt-32 w-2/5 sm:h-full sm:w-1/3 relative">
                <div >
                    <p className="font-bold text-xl sm:text-3xl sm:mt-20 sm:ml-20 mt-5 ml-10">Events</p>
                    <p className="font-medium text-xs sm:text-xl sm:ml-24 sm:mt-4 mt-3 ml-10">{events[event1]["name"]}: {events[event1]["fee"]}</p>
                    
                    
                        <Link href={events[event1]["link"]}>
                            <button className="rounded-full w-20 h-10 mt-5 ml-10 sm:w-36 flex items-center justify-center sm:h-20 sm:mt-10 sm:ml-20 duration-300 ease-in-out bg-violet-500 hover:bg-gblue text-white text-xs sm:text-xl">
                                Register
                            </button>
                        </Link>
                    
                </div>
            </div>
        </div>
    </>
}
export default Events;