import React from 'react'
import styles from './index.module.css'
import { Formik, Form, Field } from 'formik'
import { TfiEmail } from 'react-icons/tfi'
import { VscLocation } from 'react-icons/vsc'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
export default function ContactUs() {
    return (
        <div>
            <div className={styles.bgimg + " w-full min-h-[240px] flex justify-center items-center"}>
                <h2 className='font-bold text-[50px] leading-1 text-white'>Contact</h2>
            </div>
            <div className='flex flex-col justify-center py-10 items-center'>
                <div className='container grid grid-cols-2 p-[50px] '>
                    <div className=' container flex justify-center  '>
                        <div className='w-full border-1 border-gray-200 flex flex-col gap-8 py-20'>
                            <h4 className='text-[24px] text-[#333] text-center'>Send Us A Message</h4>
                            <Formik >
                                <Form className='flex flex-col gap-7'>
                                    <div className='flex justify-center relative'>
                                        <label className='absolute left-24 top-[30%]'><TfiEmail className='text-[#666666] text-[20px]' /></label>
                                        <Field className=" border border-[#e6e6e6] rounded-[2px] h-[50px] w-9/12 pl-14 text-[13px] text-[#333]" type="email" name="email" placeholder="Your Email Address" />
                                    </div>
                                    <div className='flex justify-center '>

                                        <Field as="textarea" className="border border-[#e6e6e6] rounded-[2px] min-h-[199px] w-9/12 pl-4 pt-4 text-[13px] text-[#333]" name="message" placeholder="How Can We Help?" />
                                    </div>
                                    <div className='flex justify-center '>
                                        <button
                                            type="submit"
                                            className="w-9/12  text-white  py-2 rounded-3xl font-medium bg-black  transition duration-200"
                                        >
                                            SUBMIT
                                        </button>
                                    </div>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className=' container flex justify-center '>
                        <div className='w-full border-1 border-gray-200  '>
                            <div className='container  flex flex-col justify-center items-center h-full gap-10 '>
                                <div className='w-7/12 flex  items-start gap-4'>
                                    <VscLocation className='text-[32px] text-[#222]' />
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-[18px] text-[#333]'>Address</span>
                                        <p className='text-[15px] w-10/12 text-[#888]'>
                                            Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
                                        </p>
                                    </div>

                                </div >
                                <div className='w-7/12 flex items-start gap-4'>
                                    <FiPhone className='text-[19px] text-[#222] mt-[5px]' />
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-[18px] text-[#333]'>Lets Talk</span>
                                        <p className='text-[15px] text-[#717fe0]'>+1 800 1236879  </p>
                                    </div>

                                </div>
                                <div className='w-7/12 flex items-start gap-4'>
                                    <MdOutlineEmail className='text-[19px] text-[#222] mt-[5px]' />
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-[18px] text-[#333]'>Sale Support </span>
                                        <p className='text-[15px] text-[#717fe0]'>contact@example.com</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
             <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27628.817095552226!2d31.1830531!3d30.0482702!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1755781827859!5m2!1sen!2seg"
                    className='w-full h-[450px]'
                  
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
        </div>
    )
}
