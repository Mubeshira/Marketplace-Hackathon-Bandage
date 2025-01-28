import Header2 from '@/components/Header2'
import { Button } from '@/components/ui/button'
import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
import Image from 'next/image';
import { FaCheckCircle, FaFacebookF, FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Footer from '@/components/Footer';
import NewHeader from '@/components/NewHeader';

function Pricing() {
    return (
<>
        <div className='flex flex-col items-center bg-[#FFFFFF]'>
            <NewHeader />
            <div className='w-[870px] h-[280px]  mt-[13px] flex items-center justify-center'>
                <div className='w-[427px] h-[180px]    flex-col flex items-center  mb-24 '>
                    <div className=' font-bold w-[71px] h-[24px] '>PRICING</div>
                    <div className=' text-[58px] font-bold text-[#252B42]  w-[445px] h-[80px] flex items-center justify-center'>Simple Pricing</div>
                    <div className='w-[138px] h-[44px] flex items-center justify-center gap-10 '>
                        <Button className='bg-white text-black hover:bg-slate-300'>HOME</Button>
                        <RiArrowDropRightLine className='w-[9px] h-[16px] bg-black' />


                        <Button className='bg-white text-black  hover:bg-slate-300'>PRICING</Button>

                    </div>


                </div>

            </div>
            <div className='w-[633px] h-[100px] flex items-center flex-col justify-center mt-[48px] '>
                <h1 className='font-bold text-[40px] text-[#252B42] font-Montserrat'>Pricing</h1>
                <pre className='text-[14px] text-[#737373] font-Montserrat'>Problems trying to resolve the conflict between </pre>
                <pre className='text-[14px] text-[#737373] font-Montserrat'> the two major realms of Classical physics Newtonian mechanics </pre>

            </div>
            <div className='w-[311px] h-[44px] flex    items-center  mt-[48px] '>
                <div className=' w-[186px] h-[28px] font-bold text-[16px] flex  font-Montserrat text-[#252B42] font-Montserrat '>
                    <div className='w-[68px] h-[24px] mr-20'>Monthly</div>

                    <div className='w-[68px] h-[24px]'>Monthly</div>

                </div>
                <div className='w-[109px] h-[44px] ml-7 bg-blue-300 rounded-[15px] text-[14px] text-bold text-[#23A6F0] flex justify-center items-center font-Montserrat  font-Montserrat'>Save 25%</div>
            </div>
            <div className='w-[985px] h-[704px] flex flex-col   mt-[48px] '>
                <div className='w-[985px] h-[404px] grid-cols-3 grid gap-4'>
                    {/* card1 */}
                    <div className='w-[327px] h-[404px] mt-6 flex flex-col  items-center'>
                        <h1 className='font-bold text-[30px] text-[#252B42] font-Montserrat'>FREE</h1>
                        <pre className='font-bold text-[17px] text-slate-400 font-Montserrat'>Organize across all </pre>
                        <pre className='font-bold text-[17px] text-slate-400 font-Montserrat'> apps by hand</pre>
                        <p className='font-bold text-[40px] text-[#23A6F0] font-Montserrat'>0  <sup>$</sup><sub className='text-[16px] text-[#23A6F0] font-Montserrat'>Per Month</sub></p>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-slate-400 '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>IGB Cloud Storage</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]    text-slate-400 '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Email and community support</p>

                        </div>
                        <Button className='bg-[#252B42] text-white w-[189px] mb-4 h-[52px] hover:bg-blue-400 mt-[30px]'>Try For Free</Button>

                    </div>
                    {/* card2 */}
                    <div className='w-[327px] h-[404px] mt-6 flex flex-col bg-[#252B42] items-center'>
                        <h1 className='font-bold text-[30px] text-white font-Montserrat'>STANDARD</h1>
                        <pre className='font-bold text-[17px] text-slate-400 font-Montserrat'>Organize across all </pre>
                        <pre className='font-bold text-[17px] text-slate-400 font-Montserrat'> apps by hand</pre>
                        <p className='font-bold text-[40px] text-[#23A6F0] font-Montserrat'>9.99  <sup>$</sup><sub className='text-[16px] text-[#23A6F0] font-Montserrat'>Per Month</sub></p>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-white font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-white font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-white font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-slate-400 '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-white font-Montserrat font-bold'>IGB Cloud Storage</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]    text-slate-400 '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-white font-Montserrat font-bold'>Email and community support</p>

                        </div>
                        <Button className='bg-[#23A6F0] text-white w-[189px] mb-4 h-[52px] hover:bg-blue-400 mt-[30px]'>Try For Free</Button>

                    </div>
                    {/* card3 */}
                    <div className='w-[327px] h-[404px] mt-6 flex flex-col  items-center'>
                        <h1 className='font-bold text-[30px] text-[#252B42] font-Montserrat'>FREE</h1>
                        <pre className='font-bold text-[17px] text-slate-400 font-Montserrat'>Organize across all </pre>
                        <pre className='font-bold text-[17px] text-slate-400 font-Montserrat'> apps by hand</pre>
                        <p className='font-bold text-[40px] text-[#23A6F0] font-Montserrat'>0  <sup>$</sup><sub className='text-[16px] text-[#23A6F0] font-Montserrat'>Per Month</sub></p>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-[#2DC071] '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Unlimited Product Update</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]  text-slate-400 '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>IGB Cloud Storage</p>

                        </div>
                        <div className='w-[242px] h-[50px] flex gap-2 ml-4 mt-[3px]    text-slate-400 '>
                            <p><FaCheckCircle size={20} /></p>
                            <p className='text-[16px] text-[#252B42] font-Montserrat font-bold'>Email and community support</p>

                        </div>
                        <Button className='bg-[#252B42] text-white w-[189px] h-[52px] mb-4 hover:bg-blue-400 mt-[30px]'>Try For Free</Button>

                    </div>              </div>
                <p className='text-[16px] text-[#737373] font-Montserrat flex justify-center mt-[80px]'>Trusted By Over 4000 Big Companies</p>
                <div className='mt-[50px] w-[1050px] h-[360px]'>
                    <Image src={"/desktop.png"} alt="desktop" width={1050} height={365} ></Image></div>

            </div>
            {/* <section className="py-16">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
              <p className="text-gray-500">
                Problems trying to resolve the conflict between the two major realms of Classical physics
              </p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>the quick fox jumps over the lazy dog</AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                  RELIT Mollie. Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>the quick fox jumps over the lazy dog</AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                  RELIT Mollie. Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>the quick fox jumps over the lazy dog</AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                  RELIT Mollie. Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-8">
              <p className="text-gray-500">Havent got your answer? Contact our support</p>
            </div>
          </div>
        </section> */}
        <section className="py-16">
  <div className="container max-w-3xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Pricing FAQs</h2>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg">
        Problems trying to resolve the conflict between the two major realms of Classical physics
      </p>
    </div>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>the quick fox jumps over the lazy dog</AccordionTrigger>
        <AccordionContent>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
          RELIT Mollie. Excitation venial consequent sent nostrum met.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>the quick fox jumps over the lazy dog</AccordionTrigger>
        <AccordionContent>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
          RELIT Mollie. Excitation venial consequent sent nostrum met.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>the quick fox jumps over the lazy dog</AccordionTrigger>
        <AccordionContent>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
          RELIT Mollie. Excitation venial consequent sent nostrum met.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <div className="text-center mt-8">
      <p className="text-gray-500 text-sm sm:text-base md:text-lg">Havent got your answer? Contact our support</p>
    </div>
  </div>
</section>

        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
            <p className="text-gray-500 mb-8">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            <Button size="lg">Try it free now</Button>
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 <FaTwitter size={24}/> 
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 <FaFacebookF size={24}/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 <FaInstagram size={24}/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <FaLinkedin size={24}/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      

        </div>
         <Footer/>
</>


    )
}

export default Pricing
