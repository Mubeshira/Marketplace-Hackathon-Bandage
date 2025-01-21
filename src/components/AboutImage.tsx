import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'


async function AboutImage() {
  const res= await client.fetch(`*[_type == 'aboutPage'][0].sections[1]{
  'aboutSectionImage':aboutSectionImage.asset->url,
}`)
const{aboutSectionImage}=await res
  return (
    <>
      <section className='relative bg-white py-12 md:py-16'>
                <div className='relative max-w-[1050px] mx-auto'>
                  <div className='relative w-full h-[300px] sm:h-[400px] md:h-[540px] bg-white rounded-2xl shadow-lg'>
                    <Image
                      src={aboutSectionImage}
                      alt='Background'
                      layout='fill'
                      objectFit='cover'
                      className='rounded-2xl'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/90 rounded-2xl'></div>
                    <div className='absolute inset-0 flex justify-center items-center'>
                      <button className='w-[60px] sm:w-[80px] md:w-[92.6px] h-[60px] sm:h-[80px] md:h-[92.6px] bg-[#23A6F0] rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='white'
                          className='w-4 h-5 sm:w-5 sm:h-6'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M5 3l14 9-14 9V3z' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
      
    </>
  )
}

export default AboutImage
