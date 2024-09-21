import React from 'react'
import { logo_1, logo_2, logo_3 } from '../assets'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Why = () => {

  const controls = useAnimation();
  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });


  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className='bg-slate-100 ml-5 mr-5 mb-5 flex justify-center items-center'>
      <div className='h-[70vh] flex justify-between items-center gap-[100px] max-sm:flex-col max-sm:h-full max-sm:mt-10 max-sm:pb-10 px-7'>
        {/* First Motion Div */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls} 
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
         
          <div className='w-[280px]'>
            <div className='flex justify-center h-[6rem] relative mb-6'>
              <img src={logo_3} alt="Logo 3" />
              <img src="https://dizme.vercel.app/img/brushes/process/1.png" alt="" className='absolute w-9 top-8' />
            </div>
            <div className='flex justify-center pl-2'>
              <h1 className='primary_text1 text-[21px] font-semibold'>Pixel Perfect</h1>
            </div>
            <p className='text-wrap leading-8 mt-5 primary_text1 text-[17px]'>
              Most common methods for designing websites that work well on desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>

        {/* Second Motion Div */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <div className='w-[280px]'>
            <div className='flex justify-center h-[6rem] relative mb-6'>
              <img src={logo_1} alt="Logo 1" />
              <img src="https://dizme.vercel.app/img/brushes/process/1.png" alt="" className='absolute w-9 top-8' />
            </div>
            <div className='flex justify-center pl-2'>
              <h1 className='primary_text1 text-[21px] font-semibold'>Awesome Idea</h1>
            </div>
            <p className='text-wrap leading-8 mt-5 primary_text1 text-[17px]'>
              Most common methods for designing websites that work well on desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>

        {/* Third Motion Div */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: 'easeIn' }}
        >
          <div className='w-[280px]'>
            <div className='flex justify-center h-[6rem] relative mb-6'>
              <img src={logo_2} alt="Logo 2" />
              <img src="https://dizme.vercel.app/img/brushes/process/1.png" alt="" className='absolute w-9 top-8' />
            </div>
            <div className='flex justify-center pl-2'>
              <h1 className='primary_text1 text-[21px] font-semibold'>High Quality</h1>
            </div>
            <p className='text-wrap leading-8 mt-5 primary_text1 text-[17px]'>
              Most common methods for designing websites that work well on desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Why;
