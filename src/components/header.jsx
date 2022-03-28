import React from 'react'
import Logo from '../assets/dev.png'
import Search from '../assets/search.png'
import Menu from '../assets/menu.png'

function Header() {
    return (
        <>
            <div className='w-full bg-white border-b shadow-sm py-2'>
                <div className="flex justify-between lg:max-w-7xl mx-auto px-4">
                    <div className="flex">
                        <div className='w-12 flex items-center'>
                            <img src={Menu} className='w-6 h-6 mr-4 md:hidden' />
                            <img src={Logo} alt='logo' className='w-100 object-cover'/>
                        </div>
                        <div className="flex relative mx-4 w-auto h-auto">
                            <input type="text" placeholder='Search...' className='hidden md:block self-center py-2 px-2 border border-gray-300 rounded-md w-96 placeholder-gray-500' />
                            <img src={Search} alt="" className='w-5 h-5 absolute right-3 top-3' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button className='px-4 hidden md:block'>Log in</button>
                        <img src={Search} alt="" className='w-5 h-5 mx-3 md:hidden' />
                        <button className='button rounded-md px-4 py-2 self-center font-semibold'>Create account</button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Header