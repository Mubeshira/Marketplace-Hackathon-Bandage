// src\app\pages\[pagesid]\page.tsx
import Header from '@/components/Header'
import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa6'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { data } from '@/constant/data'

async function NewDynamicPage({ params }: { params: Promise<{ pagesid: number }> }) {
    const { pagesid } = await params
    const myDataa = data [pagesid]

    return (
        <div>
            <Header />

            <section className='w-full bg-[#FFFFFF] flex  px-4 lg:px-[59px] items-center justify-center mt-10'>
                <Image src={myDataa.src} alt="logo" width={300} height={300} />
                <div className='ml-20 '>  <h3 className="font-bold text-lg text-[24px] text-gray-800 mt-4 mb-3">Graphic Design</h3>
                    <h6 className="font-medium text-sm text-gray-600 mb-3">English Department</h6>
                    <p className="font-normal text-sm text-gray-800 mb-3">$16.48 $6.48</p>
                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                            <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
                            <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
                            <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
                        </div>
                    </div>
                    <Button className='mt-10 bg-[#23A6F0] text-white hover:bg-slate-300  p-[15px]  border-[1px] border-blue-400 mb-[50px]'>ADD TO CART</Button>
                    <div className="flex items-center gap-4">
                        <CiHeart size={30} />
                        <CiShoppingCart size={30} />
                        <FaEye size={30} />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default NewDynamicPage
