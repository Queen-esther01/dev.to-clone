import React from 'react'
import { popularTags, sidebarLinks, sidebarOtherLinks, socialMediaImages } from '../utils/sidebarLinks'

const Sidebar = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className='light-grey-bg py-4 px-4 border border-gray-200 rounded-md  self-start md:w-60'>
                    <h2 className='text-xl font-bold'><span className='text-blue'>DEV Community</span> is a community of 821,434 amazing developers</h2>
                    <p className='py-4'>We're a place where coders share, stay up-to-date and grow their careers.</p>
                    <button className='button w-full rounded-md px-4 py-2 self-center font-semibold'>Create account</button>
                    <button className='py-4 w-full'>Log in</button>
                </div>
                <nav className='ml-2 mt-5 md:w-60'>
                    <ul className=''>
                        {
                            sidebarLinks.map(link => {
                                return  <li className='flex mb-4'>
                                            <img src={link.image} alt={link.title} className='mr-2 w-6 h-6' />
                                            { link.title }
                                        </li>
                            })
                        }
                    </ul>
                </nav>
                <nav className='mt-8 md:w-60'>
                    <ul>
                        <h3 className='font-bold mb-4'>Other</h3>
                        {
                            sidebarOtherLinks.map(link => {
                                return  <li className='flex mb-4'>
                                            <img src={link.image} alt={link.title} className='mr-2' />
                                            { link.title }
                                        </li>
                            })
                        }
                    </ul>
                </nav>
                <div className="flex justify-between mr-10 my-8">
                    {
                        socialMediaImages.map(image => {
                            return  <img src={image} alt={image} className='w-5 h-5' />
                        })
                    }
                </div>
                <div>
                    <h3 className="font-bold mb-3">Popular Tags</h3>
                    {
                        popularTags.map(tag => {
                            return  <p className='mx-2 py-2 text-sm'>#{tag}</p>
                        })
                    }
                </div>
                <div className="light-grey-bg font-extrabold text-gray-700 my-4 py-4 px-4 border border-gray-200 rounded-md md:w-60">
                    <p className=''>Nearly 700 developers have contributed to the Forem codebase that powers DEV and other communities. 🤯</p>
                    <p className='text-2xl my-5'>Thank you!</p>
                    <p className="text-xl font-extrabold text-blue">👉 Forem on GitHub 👈</p>
                </div>
                <div className="light-grey-bg text-gray-700 my-4 py-4 px-4 border border-gray-200 rounded-md md:w-60">
                    <p className=''>DEV runs on 100% open source code known as <span className='text-blue'>Forem</span>.</p>
                    <p className=''>Contribute to the codebase or host your own!</p>
                    <h3 className="font-bold">Check these out! 👇</h3>
                    <ul className='my-5 ml-5'>
                        <li className="text-blue list-item-disc">Main Forem Repo</li>
                        <li className="text-blue">Self-Host Instructions</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar