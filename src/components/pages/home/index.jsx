import React from 'react'
import { Card } from '../../../shared/components/Card'

const Home = () => {
  return (
    <div className='overflow-y-visible flex flex-col space-y-5'>
      <div className=''>
        <div className='flex justify-between m-4'>
          <h2 className='font-bold text-2xl'>Entradas recientes</h2>
          <select
            name='select'
            className='w-1/4 border border-emerald-200 p-2 hover:bg-emerald-200 hover:text-white bg-white'
          >
            <option value='value1' selected>
              sort by
            </option>
            <option value='value2'>Value 2</option>
            <option value='value3'>Value 3</option>
          </select>
        </div>
        <div className='grid grid-cols-3 gap-8 border p-4'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=''>
        <div className='flex justify-between m-4'>
          <h2 className='font-bold text-2xl'>Entradas mas votadas</h2>
          <select
            name='select'
            className='w-1/4 border border-emerald-200 p-2 hover:bg-emerald-200 hover:text-white bg-white'
          >
            <option value='value1' selected>
              sort by
            </option>
            <option value='value2'>Value 2</option>
            <option value='value3'>Value 3</option>
          </select>
        </div>
        <div className='grid grid-cols-3 gap-8 border p-4'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=''>
        <div className='flex justify-between m-4'>
          <h2 className='font-bold text-2xl'>
            Herramientas recomendadas para ti
          </h2>
          <select
            name='select'
            className='w-1/4 border border-emerald-200 p-2 hover:bg-emerald-200 hover:text-white bg-white'
          >
            <option value='value1' selected>
              sort by
            </option>
            <option value='value2'>Value 2</option>
            <option value='value3'>Value 3</option>
          </select>
        </div>
        <div className='grid grid-cols-3 gap-8 border p-4'>
          <Card />
          <iframe
            className='h-[300px] w-auto'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
          />
          <div className='grid grid-rows-3 gap-2'>
            <div class='h-full p-2 flex flex-row border-2 border-gray-200 border-opacity-60 overflow-hidden'>
              <img
                class='h-20 object-cover object-center'
                src='https://th.bing.com/th?id=OIF.VhHowe5%2fzdsn0zcOE3w%2f5g&pid=ImgDet&rs=1'
                alt='blog cover'
              />

              <div class='p-4'>
                <h2 class='tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase '>
                  Web development
                </h2>
                <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
                  This is a blog template
                </h1>
              </div>
            </div>
            <div class='h-full p-2 flex flex-row border-2 border-gray-200 border-opacity-60 overflow-hidden'>
              <img
                class='h-20 object-cover object-center'
                src='https://th.bing.com/th?id=OIF.VhHowe5%2fzdsn0zcOE3w%2f5g&pid=ImgDet&rs=1'
                alt='blog cover'
              />

              <div class='p-4'>
                <h2 class='tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase '>
                  Web development
                </h2>
                <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
                  This is a blog template
                </h1>
              </div>
            </div>
            <div class='h-full p-2 flex flex-row border-2 border-gray-200 border-opacity-60 overflow-hidden'>
              <img
                class='h-20 object-cover object-center'
                src='https://th.bing.com/th?id=OIF.VhHowe5%2fzdsn0zcOE3w%2f5g&pid=ImgDet&rs=1'
                alt='blog cover'
              />

              <div class='p-4'>
                <h2 class='tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase '>
                  Web development
                </h2>
                <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
                  This is a blog template
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
