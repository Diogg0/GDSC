"use client";
import React from 'react';
import Image from 'next/image';
import { useEffect, RefObject, useState, useRef } from 'react';

type CoreProps = {
    id:string;
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


const Core:React.FC<CoreProps> = ({id}) => {

    const ref1= useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref1);
    
    return <>
        <div id={id} className='h-screen w-screen flex-col items-center '>
            <h1 className={`text-4xl sm:text-6xl text-center sm:pt-20 transition-all duration-700 ease-in ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>Our Core Team</h1>
            <div ref={ref1} className='w-screen h-1/2 flex items-center justify-center sm:space-x-52 space-x-5'>
                <Image className={`w-28 sm:w-52 transition-opacity duration-700 delay-75 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `} src="/harisha.png" alt="Harisha" width={200} height={200} />
                <Image className={`w-28 sm:ml-60 sm:w-52 transition-opacity duration-700 delay-200 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `} src="/polade.png" alt="Kulkarni" width={200} height={200} />
                <Image className={`w-28 sm:ml-60 sm:w-52 transition-opacity duration-700 delay-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `} src="/shraddha.png" alt="Shraddha" width={200} height={200} />
                
            </div>
            <div className='w-screen h-1/2 flex items-start justify-center sm:items-center space-x-5 sm:space-x-52'>
                <Image className={`w-28 sm:w-52 transition-opacity duration-1000 delay-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `} src="/nihar.png" alt="Nihar" width={200} height={200} />
                <Image className={`w-28 sm:w-52 transition-opacity duration-700 delay-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `} src="/harshil.png" alt="Harshil" width={200} height={200} />
                <Image className={`w-28 sm:w-52 transition-opacity duration-700 delay-1200 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} `} src="/kulkarni.png" alt="Kulkarni" width={200} height={200} />
            </div>
        </div>
            
    </>
}
export default Core;