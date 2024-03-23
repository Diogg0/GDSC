"use client";
import React from 'react';
import { RefObject, useState, useEffect, useRef } from 'react';

type AboutProps = {
    
};

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




const About:React.FC<AboutProps> = () => {

    const ref1= useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref1);
    
    return <>
      <meta name="viewport" content="width=device-width, initial-scale=1 height=device-height" />
        <div ref={ref1} className="w-full h-60 sm:w-screen sm:h-screen">
            <div className={`w-full h-96 sm:w-full sm:h-full flex justify-between transition-transform-opacity duration-700 ease-in ${isVisible ? null : "-translate-x-20 opacity-0" }`}>
            <div className="flex w-3/4 h-3/5 -translate-x-10 -translate-y-10 sm:1/3 md:w-1/2 sm:h-1/2 md:h-full bg-gblue rounded-full sm:-translate-y-40 sm:-translate-x-40 items-start text-center" >
                <h1 className="absolute right-1/4 top-1/3 text-xl sm:top-0 text-white sm:text-6xl h-40 w-44 sm:translate-y-64 sm:right-1/2 pl-12">About</h1>
            </div>
            <div className='h-3/4 w-1/2'>
                <h1 className='text-sm sm:text-4xl sm:pt-20'>Embark on a journey through time and technology with Zenith, GDSC-RAIT's Techfest.<br></br>Join us for a captivating exploration of emerging trends, disruptive technologies, and limitless possibilities in the ever-evolving world of tech.</h1>
            </div>
        </div>
        </div>
    </>
}
export default About;