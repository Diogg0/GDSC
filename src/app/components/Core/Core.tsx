import React from 'react';
import Image from 'next/image';

type CoreProps = {
    id:string;
};

const Core:React.FC<CoreProps> = ({id}) => {
    
    return <>
        <div id={id} className='h-screen w-screen flex-col bg-white'>
            <h1 className='text-6xl text-center pt-20'>Our Core Team</h1>
            <div className='w-screen h-1/2 flex items-center space-x-52'>
                <Image className="ml-60" src="/harisha.png" alt="Harisha" width={200} height={200} />
                
                <Image src="/polade.png" alt="Kulkarni" width={200} height={200} />
                <Image src="/shraddha.png" alt="Shraddha" width={200} height={200} />
            </div>
            <div className='w-screen h-1/2 flex items-center space-x-52'>
                <Image className="ml-60" src="/nihar.png" alt="Nihar" width={200} height={200} />
                <Image src="/harshil.png" alt="Harshil" width={200} height={200} />
                <Image src="/kulkarni.png" alt="Kulkarni" width={200} height={200} />
                
                
                
            </div>
        </div>
            
    </>
}
export default Core;