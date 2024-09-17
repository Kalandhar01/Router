import React from 'react'
import '../index.css'
import { UserRoundPen } from 'lucide-react';
import { AlignCenter } from 'lucide-react';

const Nav = () => {
  





  return (
    <>
    <nav className='w-auto h-10 bg-slate-300 m-5 flex justify-between rounded-lg font-serif sm:justify-between'>
        <div className='ml-10'>
            <h1 className='text-2xl font-serif font-medium py-1 ml-2'>Portfolio</h1>
        </div>

        <div className='relative p-2 mr-32 max-sm:hidden'>
            <ul className='flex gap-8 '>
              <a href=""><li className='hover:underline '>Home</li></a>  
              <a href=""><li className='hover:underline '>About</li></a>  
              <a href=""><li className='hover:underline '>Contact</li></a>  
              <a href=""><li className='hover:underline '>Blog</li></a>  
                
            </ul>
        </div> 

        <AlignCenter className='sm:hidden mt-2 mr-3 '/>



          {/* <div class="mr-5 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
    <svg   class="rounded-md max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div> */}

   
<UserRoundPen className='mr-5 mt-2 cursor-pointer max-sm:hidden '  />



   
    </nav>
      
    </>
  )
}

export default Nav