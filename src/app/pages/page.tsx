// // src\app\pages\page.tsx
import NewHeader from '@/components/NewHeader';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Footer from '@/components/Footer';
import Link from 'next/link';
import { data } from '@/constant/data';

function Pages() {
  return (
    <>
      <div>
        <NewHeader />
         {/* Breadcrumb Section */}
        <div className="w-full h-auto py-4 bg-[#FAFAF2] flex justify-center items-center">
          <div className="w-full max-w-6xl px-4 flex items-center gap-4">
            <div className="font-Montserrat font-bold text-sm sm:text-base text-[#252B42]">
             <Link href="/"> Home</Link>
            </div>
            <MdOutlineKeyboardArrowRight />
            <h6 className="font-Montserrat font-bold text-sm sm:text-base text-[#BDBDBD]">
            <Link href="/shops">  Shop </Link>
            </h6>
          </div>
        </div>
         {/* Product Section */}
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
          {/* Left Section - Image Slider */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-sm sm:max-w-lg">
              <Image
                src={"/yellowsofa.jpg"}
                alt="Product Image"
                className="rounded-lg"
                width={600}
                height={400}
              />
              {/* Arrows */}
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 gap-4 justify-center">
              <Image
                src={"/greysofa.jpg"}
                alt="Thumbnail 1"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
              <Image
                src={"/yellowsofa.jpg"}
                alt="Thumbnail 2"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
            </div>
          </div>
         {/* Right Section - Product Details */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Floating Phone
            </h1>
            <div className="flex items-center mt-2">
              <span className="flex items-center text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              </span>
              <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
            </div>

            <p className="text-lg sm:text-xl font-Montserrat font-semibold text-black mt-4">
              $1,139.33
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>
              <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
               <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
                <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
                <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
                Select Options
              </button>
              <div className="flex items-center gap-4">
                <CiHeart />
                <CiShoppingCart />
                <FaEye />
              </div>
            </div>
          </div>
        </div>

              {/* Product Cards */}
<div className="w-full py-10">
  <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {data.map((pic) => (
      <Link key={pic.id} href={`pages/${pic.id}`}>
        <div className="flex flex-col items-center text-center">
          <Image
            src={pic.src}
            alt={`Product ${pic.id}`}
            width={238}
            height={488}
            className="w-full max-w-[200px] rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <h3 className="font-bold text-lg text-gray-800 mt-4">Graphic Design</h3>
          <h6 className="font-medium text-sm text-gray-600">English Department</h6>
          <p className="font-normal text-sm text-gray-800">$16.48 $6.48</p>
          <Image
            src="/col.png"
            alt="Rating"
            width={82}
            height={16}
            className="mt-2"
          />
        </div>
      </Link>
    ))}
  </div>
</div>
</div>
      {/* Quick box */}
    

<div className="w-full bg-pink-200 flex flex-col py-6">
  {/* Tab Section */}
  <div className="w-full max-w-[1051px] mx-auto mb-6 px-4">
    <ul className="flex justify-between items-center gap-4 sm:gap-16 lg:gap-[170px] text-center text-[#737373]">
      <li className="text-sm md:text-base">Description</li>
      <li className="text-sm md:text-base">Additional Information</li>
      <li className="text-sm md:text-base">Reviews (0)</li>
    </ul>
  </div>

  {/* Content Section */}
  <div className="w-full max-w-[1056px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {/* Image Section */}
    <div className="bg-white rounded-lg overflow-hidden">
      <Image
        src={"/home.png"}
        alt=""
        width={332}
        height={727}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col space-y-6 px-2 sm:px-4">
      <h2 className="text-lg md:text-xl lg:text-2xl font-Montserrat font-bold text-gray-800">
        The quick fox jumps over
      </h2>
      <p className="text-sm md:text-base text-[#737373] font-Montserrat leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
      </p>
      <p className="text-sm md:text-base text-[#737373] font-Montserrat leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
      </p>
      <p className="text-sm md:text-base text-[#737373] font-Montserrat leading-relaxed">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
      </p>
    </div>

    {/* List Section */}
    <div className="space-y-6 px-2 sm:px-4">
      {/* First List */}
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-Montserrat font-semibold text-gray-800 mb-4">
          The quick fox jumps over
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-[#737373] font-Montserrat font-bold">
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
        </ul>
      </div>

      {/* Second List */}
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-Montserrat font-semibold text-gray-800">
          The quick fox jumps over
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-[#737373] font-Montserrat font-bold">
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            The quick fox jumps over the lazy dog
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Pages;

