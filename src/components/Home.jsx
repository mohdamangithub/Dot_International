import React from 'react'
import { Link } from 'react-router-dom'
import Page_1_img from '../assets/img/Page1_img.jpg'

const Page_1 = () => {
  return (
    <div className='page_1 flex justify-between w-full h-screen px-24'>
        <img className='scale-[0.9] hover:scale-[0.94] rounded-t-full shadow-md shadow-[black] ' src={Page_1_img} alt="" />
        <div className='pt-14'>
            <h1 className='mb-3 text-6xl'>WE ARE</h1>
            <h1 className='mb-3 text-6xl'>A <span className='font-bold'>CREATIVE</span></h1>
            <h1 className='mb-3 text-6xl'>MODERN <span className='font-bold'>DESIGN HOUSE</span></h1>
            <h1 className='mb-24 text-6xl shadow-md shadow-[#747474] rounded-md bg-[#65D1BE] px-5 py-3 text-white'>WITH FRESH NEW IDEAS</h1>
            <Link className='px-8 py-3 text-lg rounded-full shadow-md shadow-[#7f7f7f] bg-black text-white'>Read More</Link>
        </div>
    </div>
  )
}

export default Page_1