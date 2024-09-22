import { AlignCenter, UserRoundPen } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';

const Nav = () => {
  const data = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const [check, setCheck] = useState(false);
  const [innerVisible, setInnerVisible] = useState(false);

  const toggleNavbar = () => {
    setCheck((curr) => !curr);
    if (check) {
      setInnerVisible(false); // Hide inner when closing
    }
  };

  return (
    <nav className='w-auto h-10 bg-inherit m-5 flex justify-between rounded-lg font-serif sm:justify-between'>
      <div className='ml-10'>
        <h1 className='text-2xl font-serif font-medium py-1 ml-2'>Portfolio</h1>
      </div>

      <div className='relative p-2 mr-32 max-sm:hidden'>
        <ul className='flex gap-8 font-light'>
          {data.map((item, index) => (
            <li key={index} className='hover:underline'>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>



      <AlignCenter
        className='sm:hidden mt-2 mr-3'
        onClick={toggleNavbar}
      />

      {check && (
        <motion.div
          initial={{ y: -300, opacity: 0, scale: 0.8 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: [0, 10, -10, 0],
          }}
          exit={{ y: -300, opacity: 0, scale: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20,
            mass: 0.8,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          }}
          onAnimationComplete={() => setInnerVisible(true)}

          className="sm:hidden w-[70%] h-[60%] z-10 absolute backdrop-blur-sm top-20 right-5 shadow-lg rounded-lg"
        >


          <div className='flex flex-col items-center justify-center mt-10'>


            {innerVisible && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="sm:hidden w-[50%]  cursor-pointer"
              >
                <h1 className='text-center hover:underline primary_text1   text-2xl'>Home</h1>
              </motion.div>
            )}
            <br />

            {innerVisible && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="sm:hidden w-[50%] "
              >
                <h1 className='text-center hover:underline primary_text1    text-2xl'>About</h1>
              </motion.div>
            )}
            <br />
            {innerVisible && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="sm:hidden w-[50%] "
              >
                <h1 className='text-center hover:underline primary_text1     text-2xl'>Contact</h1>
              </motion.div>
            )}
            <br />
            {innerVisible && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 1.2}}
                className="sm:hidden w-[50%] "
              >
                <h1 className='text-center hover:underline primary_text1      text-2xl'>Blog</h1>
              </motion.div>
            )}
            <br />
           


          </div>


        </motion.div>
      )}

      <UserRoundPen
        className='mr-5 mt-2 cursor-pointer max-sm:hidden'
        onClick={() => {
          console.log("hello");
        }}
      />
    </nav>
  );
}

export default Nav;
