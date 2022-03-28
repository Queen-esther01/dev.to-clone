import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className='light-grey-bg hidden md:block py-4 px-4 border border-gray-200 rounded-md md:w-96 lg:w-60 self-start'>
                <h2 className='text-xl md:text-lg lg:text-xl font-bold'><span className='text-blue'>DEV Community</span> is a community of 821,434 amazing developers</h2>
                <p className='py-4'>We're a place where coders share, stay up-to-date and grow their careers.</p>
                <button className='button w-full rounded-md px-4 py-2 self-center font-semibold'>Create account</button>
                <button className='py-4 w-full'>Log in</button>
            </div>
        </>
    )
}

export default Sidebar