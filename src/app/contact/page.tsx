

import Header2 from '@/components/Header2'
import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Card } from '@/components/ui/card';
import { CiPhone } from "react-icons/ci";
import { Button } from '@/components/ui/button';
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import Footer from '@/components/Footer';


function Contact() {
  return (
    <>
      <div>
        <Header2 />
        <section>
          <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between p-8'>
            <div className='flex flex-col w-full md:w-1/2 mb-8 md:mb-0'>
              <h1 className='mt-12 font-bold text-lg text-[#252B42] font-Montserrat'>CONTACT US</h1>
              <h2 className='font-bold text-4xl text-[#252B42] mt-6'>Get In Touch Y us</h2>
              <h2 className='font-bold text-4xl text-[#252B42]'>Today</h2>
              <p className='mt-8 text-lg text-[#252B42]'>We know how large objects will act, but things on a small scale</p>
              <p className='text-lg text-[#252B42] font-bold mt-8'>Phone: +451 215 215</p>
              <p className='text-lg text-[#252B42] font-bold mt-2'>Fax: +451 215 215</p>
              <div className='mt-8 flex gap-8'>
                <FaTwitter size={20} />
                <BiLogoFacebookSquare size={20} />
                <BsInstagram size={20} />
                <FaLinkedin size={20} />
              </div>
            </div>

            <div className='flex justify-center'>
              <Image src="/none.png" alt="contact" width={500} height={500} />
            </div>
          </div>
        </section>

        <div className='max-w-screen-xl mx-auto flex flex-col p-8'>
          <div className='flex flex-col items-center mb-8'>
            <h1 className='font-bold text-lg text-[#252B42]'>VISIT OUR OFFICE</h1>
            <h2 className='font-bold text-4xl text-[#252B42] mt-2'>We help small businesses</h2>
            <h2 className='font-bold text-4xl text-[#252B42]'>with big ideas</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* card1 */}
            <Card className='flex flex-col items-center p-6 border border-gray-200'>
              <CiPhone size={72} color='#23A6F0' className='mb-4' />
              <p className='font-bold text-base text-[#252B42]'>georgia.young@example.com</p>
              <p className='font-bold text-base text-[#252B42]'>georgia.young@ple.com</p>
              <h1 className='font-bold text-lg text-[#252B42] mt-4'>Get Support</h1>
              <Button className='bg-white text-blue hover:bg-slate-300 rounded-full p-3 mt-4 text-blue-600 border border-blue-400'>Submit Request</Button>
            </Card>
            {/* card2 */}
            <Card className='flex flex-col items-center p-6 bg-[#252B42]'>
              <FaMapMarkerAlt size={72} color='#23A6F0' className='mb-4' />
              <p className='font-bold text-base text-white'>georgia.young@example.com</p>
              <p className='font-bold text-base text-white'>georgia.young@ple.com</p>
              <h1 className='font-bold text-lg text-white mt-4'>Get Support</h1>
              <Button className='bg-[#252B42] text-blue hover:bg-slate-300 rounded-full p-3 mt-4 text-blue-600 border border-blue-400'>Submit Request</Button>
            </Card>
            {/* card3 */}
            <Card className='flex flex-col items-center p-6 border border-gray-200'>
              <TfiEmail size={72} color='#23A6F0' className='mb-4' />
              <p className='font-bold text-base text-[#252B42]'>georgia.young@example.com</p>
              <p className='font-bold text-base text-[#252B42]'>georgia.young@ple.com</p>
              <h1 className='font-bold text-lg text-[#252B42] mt-4'>Get Support</h1>
              <Button className='bg-white text-blue hover:bg-slate-300 rounded-full p-3 mt-4 text-blue-600 border border-blue-400'>Submit Request</Button>
            </Card>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto flex flex-col items-center mt-8 mb-16'>
          <PiArrowBendRightDownBold size={72} color='#23A6F0' />
          <h1 className='font-bold text-lg text-[#252B42]'>WE Cant WAIT TO MEET YOU</h1>
          <h1 className='font-bold text-5xl text-[#252B42]'>Lets Talk</h1>
          <Button className='bg-[#23A6F0] text-white hover:bg-slate-300 p-3 mt-4'>Try it free now</Button>
        </div>
        
       <Footer/>
      </div>
    </>
  )
}

export default Contact;