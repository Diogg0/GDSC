import React from 'react';
import Image from 'next/image';

type ContactProps = {
    id:string;
};

const Contact:React.FC<ContactProps> = ({id}) => {
    
    return <>
        <div id={id} className="w-screen sm:h-screen sm:mt-32 text-center">
            <h1 className="text-4xl sm:text-6xl font-medium sm:pt-20 items-center">Contact</h1>
            <div className="w-full h-60 sm:h-1/2 sm:mt-20 flex items-center justify-center space-x-2 sm:space-x-20">
                <div className="w-32 sm:w-1/4 h-2/3 sm:h-full bg-gred rounded-2xl flex items-center flex-col text-white ">
                    <Image className="w-20 pt-2 sm:w-48 sm:pt-10" src="/hrishita.png" alt='hrishita' width={200} height={200}></Image>
                    <span className="inline-block text-xs sm:text-3xl font-medium">Hrishita Pandey</span>
                    <span className="inline-block text-xs sm:text-xl sm:font-normal">WIT Head</span>
                    <span className="inline-block text-xs sm:text-xl sm:font-normal">7263002829</span>
                </div>

                <div className="w-32 sm:w-1/4 h-2/3 sm:h-full bg-gblue rounded-2xl flex items-center flex-col text-white ">
                    <Image className="w-20 pt-2 sm:w-48 sm:pt-10" src="/naman.png" alt='Naman' width={200} height={200}></Image>
                    <span className="inline-block text-xs sm:text-3xl font-medium">Naman Kumar</span>
                    <span className="inline-block text-xs sm:text-xl sm:font-normal">AIML Head</span>
                    <span className="inline-block text-xs sm:text-xl sm:font-normal">7263002829</span>
                </div>

                <div className="w-32 sm:w-1/4 h-2/3 sm:h-full bg-ggreen rounded-2xl flex items-center flex-col text-white ">
                    <Image className="w-20 pt-2 sm:w-48 sm:pt-10" src="/sharvil.png" alt='sharvil' width={200} height={200}></Image>
                    <span className="inline-block text-xs sm:text-3xl font-medium">Sharvil Patil</span>
                    <span className="inline-block text-xs sm:text-xl sm:font-normal">Design Head</span>
                    <span className="inline-block text-xs sm:text-xl sm:font-normal">7263002829</span>
                </div>

                {/* <div className="w-1/4 h-full bg-gblue rounded-2xl flex items-center flex-col text-white ">
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
                </div> */}
            </div>
        </div>
    </>
}
export default Contact;