import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

async function Hero() {
  const res= await client.fetch("*[_type == 'landingPage'] [0]{'heroHeading': sections[0].heroHeading,'heroHeading2':sections[0].heroHeading2,'heroHeadingParagraph':sections[0].heroHeadingParagraph,'heroHeadingButton':sections[0].heroHeadingButton,'heroImage':sections[0].heroImage.asset->url,}  ")

 const {heroHeading,heroHeading2,heroHeadingParagraph,heroHeadingButton,heroImage}= await res

  return (
    <>
    <div className='w-full h-[716px] relative'>
        
    <div className='w-[599px] h-[331px] absolute top-[40%] left-[10%]'>
   <div className='w-[122px] h-[24px] font-Montserrat text-white'>
    <h1><span>{heroHeading}</span></h1>
    </div>
    <h1 className=' font-Montserrat text-white text-[58px] mt-[35px]'><span>{heroHeading2}</span></h1>
    <p className='font-Montserrat text-white mt-[35px] text-[20px] leading-[30px]'><span>{heroHeadingParagraph}</span>
      </p>

<Link href={"/shops"}><Button className='bg-[#2DC071] mt-[35px] w-[170px] h-[62px]'>{heroHeadingButton}</Button></Link>
</div>
<span> <Image src={heroImage} alt="hero" width={1438} height={716}>
    
    
    </Image></span>
    
    </div>
      
    </>
  )
}

export default Hero
