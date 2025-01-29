


import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Pricing() {
    return (
        <>
            <Header2 />

            {/* Hero Section */}
            <section className="text-center px-6 md:px-[100px] pt-12 md:pt-32 pb-12 md:pb-32">
                <h2 className="text-3xl md:text-4xl font-semibold">Simple Pricing</h2>
                <p className="mt-2 text-gray-600">Home / Pricing</p>
            </section>

            <section className="text-center mt-6">
                <h3 className="text-2xl font-bold">Pricing</h3>
                <p className="text-gray-600 mt-2">Problems trying to resolve the conflict between Classical physics and Newtonian mechanics</p>

                <div className="flex justify-center mt-6">
                    <label className="mx-4">
                        <input type="radio" name="billing" defaultChecked className="hidden" />
                        <span className="text-blue-600 cursor-pointer">Monthly</span>
                    </label>
                    <label className="mx-4">
                        <input type="radio" name="billing" className="hidden" />
                        <span className="cursor-pointer">Yearly</span>
                    </label>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded ml-2">Save 25%</span>
                </div>
            </section>

            {/* Cards Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-[226px] mt-[48px]">
                {/* Free Plan */}
                <div className="bg-white shadow-md rounded-lg text-center border mt-[35px] px-[50px] py-[40px]">
                    <h4 className="font-bold text-[24px] mb-[30px] leading-[32px]">FREE</h4>
                    <p className="text-gray-600 mt-4">Organize across all apps by hand</p>
                    <p className="font-bold text-2xl mt-4">$0 <span className="text-sm text-gray-600">Per Month</span></p>
                    <p className="text-green-600 mt-4">Unlimited product updates</p>
                </div>

                {/* Standard Plan */}
                <div className="bg-[#252B42] text-white shadow-md rounded-lg p-6 text-center mb-[35px]">
                    <h4 className="font-bold text-xl ">STANDARD</h4>
                    <p className="mt-4">Organize across all apps by hand</p>
                    <p className="font-bold text-2xl mt-4">$9.99 <span className="text-sm">Per Month</span></p>
                    <p className="mt-4">Unlimited product updates</p>
                </div>

                {/* Premium Plan */}
                <div className="bg-white shadow-md rounded-lg text-center border mt-[35px] px-[50px] py-[40px]">
                    <h4 className="font-bold text-xl">PREMIUM</h4>
                    <p className="text-gray-600 mt-4">Organize across all apps by hand</p>
                    <p className="font-bold text-2xl mt-4">$19.99 <span className="text-sm text-gray-600">Per Month</span></p>
                    <p className="text-green-600 mt-4">Unlimited product updates</p>
                </div>
            </section>


            {/* Pricing FAQs */}
            <section>
                <div className="bg-white py-12 px-6 md:px-20 lg:px-40">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pricing FAQs</h2>
                        <p className="text-gray-500 mt-4">
                            Problems trying to resolve the conflict between the two major realms of Classical physics
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <span className="text-blue-500 text-xl">&gt;</span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        the quick fox jumps over the lazy dog
                                    </h3>
                                    <p className="text-gray-500">
                                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                                        consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-500">
                            Havent got your answer? <span className="text-blue-500 cursor-pointer">Contact our support</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Last Section */}
            <div className="bg-gray-50 py-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Start your 14 days free trial</h2>
                    <p className="text-gray-500 mt-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                    </p>
                    <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg mt-6 hover:bg-blue-600">
                        Try it free now
                    </button>
                </div>

                <div className="flex justify-center space-x-6 mt-10">
                    <button className="text-blue-500 text-2xl hover:opacity-75">
                        <FaTwitter />
                    </button>
                    <button className="text-blue-500 text-2xl hover:opacity-75">
                        <FaFacebook />
                    </button>
                    <button className="text-blue-500 text-2xl hover:opacity-75">
                        <FaInstagram />
                    </button>
                    <button className="text-blue-500 text-2xl hover:opacity-75">
                        <FaLinkedin />
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
  }
