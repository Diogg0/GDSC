import React from 'react';
import Image from 'next/image';

type ContactProps = {
    
};

const Contact:React.FC<ContactProps> = () => {
    
    return <>
        <div className="w-screen h-screen bg-white mt-32">
            <h1 className="text-6xl font-medium ml-20 pt-20">Contact:</h1>
            <div className="w-full h-1/2 bg-white mt-20 flex items-center justify-center space-x-20">
                <div className="w-1/4 h-full bg-gred rounded-2xl flex items-center flex-col text-white ">
                    <Image className="pt-10" src="/hrishita.png" alt='hrishita' width={200} height={200}></Image>
                    <span className="inline-block text-3xl font-medium">Hrishita Pandey</span>
                    <span className="inline-block text-xl font-normal">WIT Head</span>
                    <span className="inline-block text-xl font-normal">7263002829</span>
                </div>

                <div className="w-1/4 h-full bg-gblue rounded-2xl flex items-center flex-col text-white ">
                    <Image className="pt-10" src="/naman.png" alt='naman' width={200} height={200}></Image>
                    <span className="inline-block text-3xl font-medium">Naman Kumar</span>
                    <span className="inline-block text-xl font-normal">AIML Head</span>
                    <span className="inline-block text-xl font-normal">7263002829</span>
                </div>

                <div className="w-1/4 h-full bg-ggreen rounded-2xl flex items-center flex-col text-white">
                    <Image className="pt-10" src="/sharvil.png" alt='sharvil' width={200} height={200}></Image>
                    <span className="inline-block text-3xl font-medium">Sharvil Patil</span>
                    <span className="inline-block text-xl font-normal">Design Head</span>
                    <span className="inline-block text-xl font-normal">7263002829</span>
                </div>
            </div>
        </div>
    </>
}
export default Contact;