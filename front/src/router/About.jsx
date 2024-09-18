import { motion } from 'framer-motion';
import my from '../assets/my.png';

const About = () => {
  return (


    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}

    >

      <div className=' ml-5 mr-5 '>

        <div className='  w-auto h-full flex justify-center  '>

          <div className='m-4'>
            <h1 className='text-[42px]  font-sans font-bold'>ABOUT <span className='text-[#313BAC]'>ME</span></h1>

            <h3 className='text-[#313BAC] font-sans font-bold text-[23px] pl-4'>My Introduction</h3>
          </div>

        </div>




        <div className='flex mt-20  max-sm:flex-col'>


          {/* Left */}
          <div className='w-[50%] h-auto flex max-sm:flex justify-center items-center max-sm:w-[100%] max-sm:ml-4'>
            <img className='w-[45%] max-sm:w-[100%] max-sm:mr-7 ' src={my} alt="" />

          </div>


          {/* right? */}
          <div className='w-[50%] flex flex-col items-center max-sm:ml-6'>

            {/* Right Content */}
            <div className='w-full max-sm:mt-10  max-sm:ml-20 '>
              <h1 className= 'sm:ml-[4rem] my-3'>i'm<span className='font-serif text-lg text-[#313BAC] text-[45px] ml-5 font-semibold'>Kalandhar</span></h1>

              <p className='font-serif text-[35px] text-[#757575] max-sm:text-[30px] max-sm:ml-10 w-full '>Aspiring Software Developer
              </p>

              <br />

            <h1 className='absolute w-[35%] text-justify max-sm:w-[70%]'>
            I am currently pursuing a degree in Computer Science Engineering, I've learned languages like Java, Python, and C++, and gained a solid understanding of algorithms. I've focused on web development technologies, including HTML, CSS, and JavaScript. I've also delved into React.js, enhancing my skills in creating dynamic and responsive web applications.
            </h1>

              <div className='sm:mt-[11rem] flex flex-col justify-center items-center w-72'> 
                    hello
                <div className='w-[00px]   h-[50px]'>1</div>

                <div className=''>2</div>
                <div className=''>3</div>

                
              </div>
              

            </div>

          </div>





        </div>









      </div>







    </motion.div>
  );
};

export default About;
