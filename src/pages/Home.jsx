import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] h-screen pt-4  w-full flex justify-between flex-col bg-amber-400'>
        <img className='w-16 ml-6' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-semibold'>Get Started with Uber</h2>
          <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 px-6 mt-5 rounded text-xl font-medium'>continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home