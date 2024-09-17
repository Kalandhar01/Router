import { AlignCenter, UserRoundPen } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';




const Nav = () => {
  return (
    <>
      <nav className='w-auto h-10 bg-slate-300 m-5 flex justify-between rounded-lg font-serif sm:justify-between'>
        <div className='ml-10'>
          <h1 className='text-2xl font-serif font-medium py-1 ml-2'>Portfolio</h1>
        </div>

        <div className='relative p-2 mr-32 max-sm:hidden'>
          <ul className='flex gap-8'>
           
            <li className='hover:underline'>
              <Link to={'/'}>Home</Link>
            </li>

            <li className='hover:underline'>
              <Link to={'/about'}>About</Link>
            </li>

            <li className='hover:underline'>
              <Link to={'/contact'}>Contact</Link>
            </li>
            
            <li className='hover:underline'>
              <Link to={'/blog'}>Blog</Link>
            </li>

          </ul>
        </div>

        <AlignCenter className='sm:hidden mt-2 mr-3' />

        <UserRoundPen className='mr-5 mt-2 cursor-pointer max-sm:hidden' />
      </nav>
    </>
  );
}

export default Nav;
