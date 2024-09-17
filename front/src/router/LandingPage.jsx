import React from 'react'
import { Linkedin } from 'lucide-react';
import myGif from '../assets/myGif.gif';



const LandingPage = () => {
    return (
        <>
            <div className='ml-5 mr-5  w-auto h-screen bg-slate-100 flex  max-sm:flex-col max-sm:flex-col '>

                <div className='w-[50%] h-auto flex justify-center items-center max-sm:flex-1 max-sm:items-center  max-sm:justify-center max-sm:w-[100%]  '>

                    {/* //Inside Left */}
                    <div className='mb-20 '>

                        <h1 className='text-5xl font-serif mb-3'> I am <span className='text-red-600'> Kalandhar</span> </h1>
                        <h1 className='text-3xl font-serif mb-3'> An Intractive <br /> <span className='text-red-600 hover:'> Designer</span> </h1>
                        {/* <h1 className='text-5xl font-serif mb-3'> I am <span className='text-red-600'> Kalandhar</span> </h1> */}

                    </div>

                </div>



                <div>
                    {/* //RIght Side */}
                    <div className=' w-full h-full flex justify-center items-center max-sm:h-[70%]'>

                        
                        <img src={myGif} alt="My GIF" />

                    </div>


                </div>



            </div>
        </>
    )
}

export default LandingPage
