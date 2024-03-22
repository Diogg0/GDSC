import Navbar from '@/app/components/Navbar/Navbar';
import React from 'react';
import Timer from './components/Timer/Timer';
import About from './components/About/About';
import Events from './components/Events/Events';
import Core from './components/Core/Core';
import Contact from './components/Contact/Contact';
import Head from 'next/head';

type pageProps = {
  
};

const page:React.FC<pageProps> = () => {
  
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <meta name="viewport" content="width=device-width, initial-scale=1 height=device-height" />

      <div className="overflow-hidden">
        <Navbar />
        <Timer id="home"/>
        <About/>
        <Events id="events"/>
        <Core id="about"/>
        <Contact/>
        <footer className="w-screen h-24 bg-white border-2 shadow-inner sticky border-slate-500">
          <p className="text-center text-black pt-5">GDSC RAIT'24© </p>
        </footer>
      </div>

  </>
}
export default page;