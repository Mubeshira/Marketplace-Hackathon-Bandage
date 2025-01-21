import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'

async function About() {
  const res =await client.fetch(`*[_type == 'aboutPage'][0]{
  'aboutSectionHeading':sections[0].aboutSectionHeading,
  'aboutSectionHeading2':sections[0].aboutSectionHeading2,
  'aboutSectionPara1':sections[0].aboutSectionPara1,
  'aboutSectionPara2':sections[0].aboutSectionPara2,
  'aboutSectionPara3':sections[0].aboutSectionPara3 ,
  'aboutSectionPara4':sections[0].aboutSectionPara4,
  'aboutSectionBtn':sections[0].aboutSectionBtn,
  'aboutSectionImage':sections[0].aboutSectionImage.asset->url  ,
  }
`)

const{aboutSectionHeading,aboutSectionHeading2,aboutSectionPara1,aboutSectionPara2,aboutSectionPara3,aboutSectionPara4,aboutSectionBtn,aboutSectionImage}=await res
  return (
    <>
       <div className='mt-8 sm:mt-12 w-full max-w-[1050px] px-4 sm:px-8'>
                  <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>
                    {/* Text Column */}
                    <div className='flex flex-col gap-6 md:gap-8 max-w-lg text-center md:text-left'>
                      <h5 className='text-sm sm:text-base font-semibold text-[#252B42]'>{aboutSectionHeading}</h5>
                      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#252B42]'>{aboutSectionHeading2}</h1>
                      <h4 className='text-sm sm:text-base md:text-lg text-[#737373]'>
                        {aboutSectionPara1}
                      </h4>
                      <div>
                        <button className='bg-[#23A6F0] text-white text-sm sm:text-base font-bold px-6 py-3 rounded'>
                          {aboutSectionBtn}
                        </button>
                      </div>
                    </div>
      
                    
                    <div className='relative max-w-full'>
                      <Image
                        src={aboutSectionImage}
                        alt='Girl'
                        width={900}
                        height={500}
                        className='w-full h-auto rounded-md'
                      />
                    </div>
                  </div>
                </div>
                 {/* Problems Section */}
        <div className='flex flex-col md:flex-row items-center mt-12 md:mt-16 px-4 sm:px-8 max-w-[1050px] mx-auto gap-6 md:gap-8'>
          {/* Left Column */}
          <div className='flex flex-col gap-4 md:gap-6 max-w-md'>
            <p className='text-sm sm:text-base font-medium text-[#E74040]'>{aboutSectionPara2}</p>
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-[#252B42]'>
              {aboutSectionPara3}
            </h2>
          </div>

          {/* Right Column */}
          <div className='text-sm sm:text-base text-[#737373]'>
            {aboutSectionPara4}
          </div>
        </div>

    </>
  )
}

export default About

