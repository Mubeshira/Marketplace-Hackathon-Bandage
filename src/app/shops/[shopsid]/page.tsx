





import Header from '@/components/Header';
import React from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa6';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/Footer';

async function DynamicPage({
    searchParams,
}: {
    searchParams: Promise<{
        productCard2Heading: string;
        productCard2SubHeading: string;
        productCard2OriginalPrice: string;
        productCard2SalePrice: string;
        productCard2Image: string;
    }>;
}) {
    const { productCard2Heading, productCard2SubHeading, productCard2OriginalPrice, productCard2SalePrice, productCard2Image } = await searchParams;

    return (
        <div>
            <Header />

            <section className="w-full bg-[#FFFFFF] flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-[59px] items-center justify-center mt-10">
                <Image src={productCard2Image} alt="logo" width={300} height={300} className="w-[200px] sm:w-[250px] md:w-[300px]" />
                <div className="mt-6 md:mt-0 md:ml-10 xl:ml-20 flex flex-col">
                    <h3 className="font-bold text-lg text-[18px] sm:text-[20px] md:text-[24px] text-gray-800 mt-4 mb-3">{productCard2Heading}</h3>
                    <h6 className="font-medium text-sm text-gray-600 mb-3">{productCard2SubHeading}</h6>
                    <p className="text-sm sm:text-base text-black mb-3 font-semibold">
                        {productCard2SalePrice} ${productCard2OriginalPrice}
                    </p>
                    <div className="mt-6 flex items-center gap-2">
                        <h3>Stock:</h3>
                        <h3 className="text-[#376bf9]">Available</h3>
                    </div>
                    <Link href={`/cart?name=${productCard2Heading}&price=${productCard2OriginalPrice}&image=${productCard2Image}&description=${productCard2SubHeading}`}>
                        <Button className="mt-10 bg-[#23A6F0] text-white hover:bg-slate-300 p-[12px] sm:p-[15px] border-[1px] border-blue-400 mb-[30px] md:mb-[50px]">
                            ADD TO CART
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 mt-4">
                        <Link href={`/wishlist?name=${productCard2Heading}&price=${productCard2OriginalPrice}&image=${productCard2Image}&description=${productCard2SubHeading}`}>
                            <CiHeart className="text-red-600 w-6 h-6 sm:w-8 sm:h-8" />
                        </Link>
                        <Link href={`/cart?name=${productCard2Heading}&price=${productCard2OriginalPrice}&image=${productCard2Image}&description=${productCard2SubHeading}`}>
                            <CiShoppingCart className="text-gray-800 w-6 h-6 sm:w-8 sm:h-8" />
                        </Link>
                        <FaEye className="text-gray-800 w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default DynamicPage;
