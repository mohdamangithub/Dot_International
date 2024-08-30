import React from 'react'
import { Link } from 'react-router-dom'

const Page_6 = () => {
  return (
    <div className='page_6 flex flex-col items-center justify-center w-full py-5 pb-10 px-24 pt-32' id='CONTACT'>
          <h1 className='text-5xl font-bold'>CONTACT</h1>
          <div className='w-[100%] h-[70vh] mt-12 mb-9 overflow-hidden rounded-lg shadow-md shadow-[black]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62193.74401787275!2d77.45804708644249!3d13.028730146551837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d624a6eb9ef%3A0x975320fcc347a0b0!2sSri%20Lakshmi%20Venkateshwara%20swamy%20nilaya!5e0!3m2!1sen!2sin!4v1724920945081!5m2!1sen!2sin" width='100%' height='100%'></iframe>
          </div>
          <Link className='px-10 py-3 text-lg rounded-full shadow-md shadow-[#7f7f7f] bg-black text-white'>Contact</Link>
          <form className=' flex flex-col items-center justify-center gap-6 w-[100%] px-12 py-8 mt-20 bg-[#4C4C4C] text-white rounded-lg shadow-md shadow-[#747474]' action="#">
<div className="name w-full">
  <label className='text-lg' htmlFor="name">Full Name</label><br />
  <input className='w-full px-4 py-2 mt-2 border-2 border-white bg-transparent rounded-md' type="text" name="name" id="name" />
</div>
<div className="number w-full">
  <label className='text-lg' htmlFor="number">Contact Number</label><br />
  <input className='w-full px-4 py-2 mt-2 border-2 border-white bg-transparent rounded-md' type="number" name="number" id="number" />
</div>
<div className="email w-full">
  <label className='text-lg' htmlFor="email">Email</label><br />
  <input className='w-full px-4 py-2 mt-2 border-2 border-white bg-transparent rounded-md' type="email" name="email" id="email" />
</div>
<div className="password w-full">
  <label className='text-lg' htmlFor="prd">Password</label><br />
  <input className='w-full px-4 py-2 mt-2 border-2 border-white bg-transparent rounded-md' type="password" name="password" id="password" />
</div>
<div className="message w-full">
  <label className='text-lg' htmlFor="message">Message</label><br />
  <textarea className='w-full h-44 px-4 py-2 resize-none mt-2 border-2 border-white bg-transparent rounded-md' name="message" id="message"></textarea>
</div>
<div className='submit w-full flex items-center justify-center'>
<input className='px-10 py-2 text-lg rounded-full shadow-md shadow-[#2a2a2a] bg-white font-medium text-black text-center' type="submit"/>
</div>
          </form>
    </div>
  )
}

export default Page_6