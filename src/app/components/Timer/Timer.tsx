"use client";
import React from 'react';
import CountdownTimer from '../Countdown/CountdownTimer';
import { useState, useEffect, useRef, RefObject } from 'react';


type TimerProps = {
    id: string;
    
};

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

const Timer:React.FC<TimerProps> = ({id}) => {
    const targetDate = new Date('2024-03-28T09:00:00');
    const ref1= useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref1);
    
    return <>
            <div id={id} className=" w-full h-72 flex items-center justify-center sm:pt-20 sm:w-screen sm:h-96 relative z-40">
            <div className="w-full h-full sm:h-[400px] flex justify-center items-center bg-zinc-50 drop-shadow-2xl">
                    <div className="w-2/4">
                        <div className="w-full h-1/2 flex items-center justify-center font-semibold">
                            <h1 ref={ref1} className={`text-7xl mb-10 sm:mt-0 duration-700 ease-in-out delay-200 ${isVisible ? "opacity-100" : "opacity-0" }`}>Zenith</h1>
                        </div>
                        <div className="sm:w-full h-1/2 text-4xl sm:text-6xl items-center justify-center">
                            <CountdownTimer targetDate={targetDate} />
                            {/* <p className='inline-block text-gred'>20: </p>
                            <p className='inline-block text-gyellow'>20: </p>
                            <p className='inline-block text-ggreen'>20: </p>
                            <p className='inline-block text-gblue'>20</p> */}
                        </div>
                    </div>
                </div>
            </div>
    </>

}
export default Timer;