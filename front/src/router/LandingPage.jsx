import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import myGif from '../assets/myGif.gif';

const LandingPage = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Programmer'], // Fix the typo in 'Developer'
    loop: true, 
    typeSpeed : 50,
    deleteSpeed : 50
  });

  return (
    <>
      <div className='ml-5 mr-5 w-auto h-screen bg-slate-100 flex max-sm:flex-col'>
        <div className='w-[50%] h-auto flex justify-center items-center max-sm:w-[100%]'>
          {/* Inside Left */}
          <div className='mb-20'>
            <h1 className='text-5xl font-serif mb-3'>
              I am <span className='text-red-600'>Kalandhar</span>
            </h1>
            <h1 className='text-3xl font-serif mb-3'>
              Best <br />
              <span className='text-red-600'>{text}</span>
              <Cursor />
            </h1>
          </div>
        </div>

        <div>
          {/* Right Side */}
          <div className='w-full h-full flex justify-center items-center max-sm:h-[70%]'>
            <img src={myGif} alt="My GIF" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
