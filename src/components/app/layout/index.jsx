import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

const index = () => {
  return (
    <>
      <div class='w-full relative'>
        <img
          src='https://i.redd.it/byq2m9p22zx41.jpg'
          class='w-full h-[300px] object-cover shadow-sm'
        />
        <div class='absolute right-0 top-0'>
          <div class='flex flex-row-reverse justify-center items-center'>
            <div class='w-full flex justify-center'>
              <div class='relative'>
                <img
                  src='https://th.bing.com/th/id/R.748b6de5c5b9d7750f9e45991bd0968d?rik=%2b3DTzddINb%2f7Tw&riu=http%3a%2f%2fi.redd.it%2fuxu4trm3sn391.jpg&ehk=dyEmRLizfwOCLeTHCmO9PDpmnoMnZSHj0f%2fHi3r8gd8%3d&risl=&pid=ImgRaw&r=0'
                  class='shadow-xl rounded-full align-middle border-none overflow-hidden w-[100px] h-[100px] mt-10 object-cover'
                />
                <button className='rounded-lg mt-5 bg-green-400 text-white p-2 font-semibold'>
                  ver perfil
                </button>
              </div>
            </div>
            <div class='text-center text-green-500'>
              <div class='flex justify-center'>
                <div class='text-center'>
                  <span class='text-base font-bold block capitalize'>
                    Bienvenido Juana
                  </span>
                  <span class='text-sm'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Navbar />
        <main className='mt-10'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default index
