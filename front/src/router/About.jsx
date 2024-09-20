import React, { useEffect, useState } from 'react';
import bg from '../assets/Logo/bg.jpg';
import sprink from '../assets/Logo/sprink.png';

const About = () => {
  const [count, setCount] = useState(0);
  const [project, setProject] = useState(0);

  useEffect(() => {
    const incrementCount = () => {
      for (let i = 0; i <= 2; i++) {
       
        setTimeout(() => {
          setCount(i);
        }, i * 1000); 
      }
    };
    incrementCount();
  }, []);


  useEffect(() => {
    const incrementCount = () => {
      for (let i = 0; i <= 10; i++) {
       
        setTimeout(() => {
          setProject(i);
        }, i * 500); 
      }
    };
    incrementCount();
  }, []);






  return (
    <>
      <div className='w-full h-screen flex pt-16 px-7 ml-5 max-sm:flex-col max-sm:p-0 max-sm:m-0'>
        {/* Left */}
        <div className='w-[45%] flex pt-12 max-sm:w-full relative'>
          <div className='absolute max-sm:hidden'>
            <img src={sprink} alt="" />
          </div>
          <div className='m-20 max-sm:hidden max-sm:m-0'>
            <img src={bg} className='' alt="" />
          </div>

          <div className='absolute bottom-[400px] left-[1.6rem] bg-white w-[170px] h-[100px] rounded-lg flex justify-center gap-2 items-center shadow-xl'>
            <h1 className='text-[35px] text-[#1CBE59] font-sans primary_text mr-4'>{count}</h1>
            <h1 className='primary_text font-bold'>
              Years of <br /> React
            </h1>
          </div>

          <div className='absolute bottom-[200px] left-[30rem] bg-white w-[170px] h-[100px] rounded-lg flex justify-center gap-2 items-center shadow-xl'>
            <h1 className='text-[35px] text-[#1CBE59] font-sans primary_text mr-1'>{project}+</h1>
            <h1 className='primary_text font-bold'>
             Project
            </h1>
          </div>

        </div>




            {/* //right */}
        <div className='p-20 ml-10 max-sm:p-0 w-[50%] max-sm:w-full max-'>

          <div className='max-sm:ml-0'>

            <h1 className='text-[22px] primary_text1 text-red-600 font-thin font-bold m-5 max-sm:text-center'>I'm a Web Developer</h1>
            <h1 className='text-[35px] primary_text1  pr-20 font-thin font-semibold m-5'>I Can Design Anything You Want</h1>
            <h1 className='text-[16px] primary_text1   font-thin font-thin m-5 line leading-9'>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 2 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</h1>

            <a href="#_" class="ml-5 relative inline-flex items-center gap-2 px-9 py-2 overflow-hidden text-lg font-medium text-black-600 border-2 border-red-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-red-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Hire Me</span>
</a>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
