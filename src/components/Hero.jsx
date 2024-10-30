import React from 'react'
// import { FaArrowRight, FaBookOpen } from "react-icon/fa"

const title = (<>نحن نغير العالم  <br /> عن طريق القراءة</>)
const description = (<>القراءة مهمه لتغيير الامم وتساعد علي تنمية قدرات الفرد لتطوير المجتمعات الانسانية</>)

export const Hero = () => {
    return (
        <section className='text-gray-900 dark:bg-gray-900 dark:text-white'>
            <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
                {/* <FaBookOpen className='mx-auto text-8xl bg-orange-400 py-3 px-4 mb-5 rounded-3xl text-white dark:bg-transparent dark:border-white' /> */}
                <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>{title}</h1>
                <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48'>{description}</p>
                <div className='felx flex-col-reverse space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
                    <a href="#" className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700'>
                        إبدا معنا
                        <svg className='w-3.5 h-3.5 ms-2 rtl:rotate-180' xmlns='http://www.w3.org/200/svg' fill='none' viewBox='0 0 14 10'>
                            <path stroke='currentColor' strokeLinejoin='round' strokeWidth={2} d='M1 Sh12m0 0L9 1m4 4L9 9' />
                        </svg>
                        {/* <FaArrowRight className='mr-3' /> */}
                    </a>
                    <a href="" className='inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border border-gray-500 dark:text-white dark:hover:text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 '>
                        المزيد عن كتبنا
                    </a>
                </div>
            </div>
        </section>
    )
}
