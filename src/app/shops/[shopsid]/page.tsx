




// search params use
// src\app\shops\[shopsid]\page.tsx
import Header from '@/components/Header'
import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa6'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '@/components/Footer'

async function DynamicPage({
    searchParams,
}:{
    searchParams:Promise<{
        productCard2Heading:string;
        productCard2SubHeading:string;
        productCard2OriginalPrice:string;
        productCard2SalePrice:string;
        productCard2Image:string;

    }>;
}){
    const { productCard2Heading,productCard2SubHeading,productCard2OriginalPrice,productCard2SalePrice,productCard2Image } = await searchParams

    

    return (
        <div>
            <Header />
            
            <section className='w-full bg-[#FFFFFF] flex  px-4 lg:px-[59px] items-center justify-center mt-10'>
                <Image src={productCard2Image} alt="logo" width={300} height={300} />
                <div className='ml-20 '>  <h3 className="font-bold text-lg text-[24px] text-gray-800 mt-4 mb-3">{productCard2Heading}</h3>
                    <h6 className="font-medium text-sm text-gray-600 mb-3">{productCard2SubHeading}</h6>
                    <p className=" text-sm text-black mb-3 font-semibold">{productCard2SalePrice} ${productCard2OriginalPrice}</p>
                    <div className="mt-6 flex ">
                       <h3>Stock:</h3>   
                       <h3 className='text-[#376bf9] ml-2'>Available</h3>                 </div>
                    <Link href={`/cart?name=${productCard2Heading}&price=${productCard2OriginalPrice}&image=${productCard2Image}&description=${productCard2SubHeading}`}>  <Button className='mt-10 bg-[#23A6F0] text-white hover:bg-slate-300  p-[15px]  border-[1px] border-blue-400 mb-[50px]'>ADD TO CART</Button></Link>
                        
                  {/* <Link href="/cart">  <Button className='mt-10 bg-[#23A6F0] text-white hover:bg-slate-300  p-[15px]  border-[1px] border-blue-400 mb-[50px]'>ADD TO CART</Button></Link> */}
                    <div className="flex items-center gap-4">
                      <Link href={`/wishlist?name=${productCard2Heading}&price=${productCard2OriginalPrice}&image=${productCard2Image}&description=${productCard2SubHeading}`}>  <CiHeart size={30} color='red' /></Link>
                        <Link href={`/cart?name=${productCard2Heading}&price=${productCard2OriginalPrice}&image=${productCard2Image}&description=${productCard2SubHeading}`}> <CiShoppingCart size={30} /></Link> 
                        <FaEye size={30} />
                    </div>
                </div>
            </section>

               <Footer/>
        </div>
    )
}

export default DynamicPage



