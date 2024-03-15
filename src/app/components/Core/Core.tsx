import React from 'react';
import Image from 'next/image';

type CoreProps = {
    id:string;
};

const Core:React.FC<CoreProps> = ({id}) => {
    
    return <>
        <div id={id} className='h-screen w-screen flex-col '>
            <h1 className='text-4xl sm:text-6xl text-center sm:pt-20'>Our Core Team</h1>
            <div className='w-screen h-1/2 flex items-center sm:space-x-52 space-x-5'>
                <Image className="w-28 ml-3 sm:ml-60 sm:w-52" src="/harisha.png" alt="Harisha" width={200} height={200} />
                
                <Image className="w-28 sm:w-52" src="/polade.png" alt="Kulkarni" width={200} height={200} />
                <Image className="w-28 sm:w-52" src="/shraddha.png" alt="Shraddha" width={200} height={200} />
            </div>
            <div className='w-screen h-1/2 flex items-start sm:items-center space-x-5 sm:space-x-52'>
                <Image className="w-28 ml-3 sm:ml-60 sm:w-52" src="/nihar.png" alt="Nihar" width={200} height={200} />
                <Image className="w-28 sm:w-52" src="/harshil.png" alt="Harshil" width={200} height={200} />
                <Image className="w-28 sm:w-52" src="/kulkarni.png" alt="Kulkarni" width={200} height={200} />
                
                
                
            </div>
        </div>
            
    </>
}
export default Core;