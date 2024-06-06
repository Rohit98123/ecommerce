import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-gray-200 flex'>
        <div className='text-blue font-[600] py-[10px] mx-[30px]'> 
            <h1>E-COMMERCE SITE</h1>
            <h5>Welcome to my site</h5></div>
            <div className='flex justify-between py-[20px] mx-[1100px] mr-[10px]'>
                <ul className='flex gap-[16px] font-[600] '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
