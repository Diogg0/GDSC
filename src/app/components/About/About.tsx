"use client";
import React from 'react';
import { RefObject, useState, useEffect, useRef } from 'react';

type AboutProps = {
    
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



const About:React.FC<AboutProps> = () => {

    const ref1= useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref1);
    
    return <>
        <div className="w-screen h-screen">
            <div className={`w-full h-full flex justify-between transition-transform-opacity duration-700 ease-in ${isVisible ? null : "-translate-x-20 opacity-0" }`}>
            <div ref={ref1} className="flex w-1/2 h-full bg-gblue rounded-full -translate-y-40 -translate-x-40" >
                <h1 className="absolute text-white text-6xl h-40 w-44 translate-y-64 right-1/2 pl-12">About</h1>
            </div>
            <div className='h-3/4 w-1/2'>
                <h1 className='text-4xl pt-20'>Embark on a journey through time and technology with Zenith, GDSC-RAIT's Techfest.<br></br> This year, under the theme "Chronosphere," we delve into the intersection of past, present, and future innovations. <br></br>Join us for a captivating exploration of emerging trends, disruptive technologies, and limitless possibilities in the ever-evolving world of tech.</h1>
            </div>
        </div>
        </div>
    </>
}
export default About;