


import Header2 from '@/components/Header2';
import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Link from 'next/link';

function Blog() {
  return (
    <div>
      <Header2 />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-10 px-4 text-center">
        <h1 className="font-bold mb-4 text-sm sm:text-base">WHAT WE DO</h1>
        <h1 className="font-bold text-[24px] sm:text-[36px] lg:text-[58px] mb-4">
          Innovation tailored for you
        </h1>
        <div className="flex items-center gap-2 sm:gap-5 mb-8 text-sm sm:text-base">
          <Link href={"/"}><button>Home</button></Link>
          <MdArrowForwardIos />
          <button>Team</button>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full">
        <section className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 space-y-6 md:space-y-0">
          {/* Left */}
          <div className="flex justify-center">
            <Image
              src="/bgredgirl.png"
              alt="Main Image"
              width={600}
              height={600}
              className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px]"
            />
          </div>
          {/* Right */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {['/coat.png', '/jeancoat.png', '/blackcoat.png', '/bluecoat.png'].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Product ${index + 1}`}
                width={310}
                height={310}
                className="w-full max-w-[150px] xsm:max-w-[200px] sm:max-w-[250px] md:max-w-[310px] rounded-lg"
              />
            ))}
          </div>
        </section>
      </div>



<div className="w-full flex justify-center px-4">
  <div className="w-full max-w-[1050px] flex flex-col items-center">
    <div className="text-center mt-16 mb-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252B42]">Meet Our Team</h1>
      <p className="text-sm sm:text-base text-[#737373] mt-4">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        '/bluecapgirl.png', 
        '/mobilegirl.png', 
        '/headphonegirl.png', 
        '/boymobile.jpg', 
        '/pinkgirl.png', 
        '/orangegirl.jpg', 
        '/redgirl.png', 
        '/glassesgirl.png', 
        '/bandgirl.png'
      ].map((src, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={src}
            alt={`Team Member ${index + 1}`}
            width={329}
            height={383}
            className="rounded-lg hover:scale-110 duration-300"
          />
          <h2 className="mt-4 text-lg font-bold text-[#252B42]">Username</h2>
          <p className="text-sm text-[#737373]">Profession</p>
          <div className="flex gap-4 text-[#23A6F0] mt-2">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitter />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Trial Section */}
      <div className="w-full flex justify-center px-4 h-auto mt-20">
        <div className="w-full max-w-[607px] flex flex-col items-center text-center">
          <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold text-[#252B42] mb-6">
            Start your 14 days free trial
          </h1>
          <p className="text-sm sm:text-base text-[#737373] mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
          </p>
          <Button className="bg-[#23A6F0] text-white px-8 py-3 hover:bg-blue-400">Try it free now</Button>
          <div className="flex gap-4 mt-6 text-[#23A6F0]">
            <FaTwitter size={30} />
            <FaFacebook size={30} />
            <FaInstagramSquare size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
