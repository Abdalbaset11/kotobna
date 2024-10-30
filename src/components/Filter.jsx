import React from 'react'

const title = (<>نحن نغير العالم  <br /> عن طريق القراءة</>)
const description = (<>القراءة مهمه لتغيير الامم وتساعد علي تنمية قدرات الفرد لتطوير المجتمعات الانسانية</>)

export const Filter = () => {
    return (
        <section className='text-gray-900 dark:bg-gray-900 dark:text-white'>
            <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
                <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>{title}</h1>
                <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48'>{description}</p>

                <div>
                    <ul className='flex justify-center align-middle gap-3 text-sm bg-gray-200 p-2 rounded-full'>
                        <li className='px-4 py-2 rounded-full cursor-pointer sele hover:bg-gray-900 hover:text-white'>اكثر الكتب سماعا</li>
                        <li className='px-4 py-2 rounded-full cursor-pointer sele bg-gray-900 text-white'>6 كتب جديدة مشهورة</li>
                        <li className='px-4 py-2 rounded-full cursor-pointer sele hover:bg-gray-900 hover:text-white'>اكثر الكتب اعجابا</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
