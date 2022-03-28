import React from 'react'
import Javascript from '../assets/js.webp'
import { feedInfo } from '../utils/feedInfo'
import Dev from '../assets/banner.jpg'
import Like from '../assets/heart.png'
import Comment from '../assets/comment.png'

const Feed = () => {
    console.log(feedInfo)
    return (
        <div className='md:4/5 lg:w-7/12 self-start'>
            <nav className='px-4 md:pl-4 mb-3 mt-2'>
                <ul className='flex text-lg'>
                    <li className='font-bold'>Relevant</li>
                    <li className='ml-6'>Latest</li>
                    <li className='ml-6'>Top</li>
                </ul>
            </nav>
            {
                feedInfo.map((info, index) => {
                    return (
                        <div key={info.id} className='border border-gray-200 bg-white md:rounded-md overflow-hidden mt-2'>
                            {
                                info.id === 1 && <img src={Javascript} alt="" className='overflow-none' />
                            }
                            <div className='p-5'>
                                <div className="flex">
                                    <div className="h-9 w-9 rounded-full border border-gray-200 ">
                                        <img src={Dev} className='w-full h-full object-cover rounded-full' alt="" />
                                    </div>
                                    <div className='ml-2'>
                                        <h3 className='text-sm'>{info.author}</h3>
                                        <p className='text-xs '>{info.date}</p>
                                    </div>
                                </div>
                                
                                <div className='md:ml-10'>
                                    
                                    <p className={(info.id === 1 ? 'text-xl leading-normal md:text-3xl md:leading-11' : 'md:text-title text-xl') + ' font-bold md:leading-8 mt-2 cursor-pointer'}>{info.title}</p>
                                    {
                                        info.tags && <div className="mt-3 my-2">
                                            {
                                                info.tags.map(tag => {
                                                    return <span className={(tag === 'discuss' ? 'bg-gray-200' : '') + ' rounded-md p-2 text-sm'}>#{tag}</span>
                                                })
                                            }
                                        </div>
                                    }
                                    <div className="flex justify-between mt-3">
                                        <div className='flex'>
                                            <div className="flex items-center">
                                                <img src={Like} alt="" className='w-5 h-5 mr-2' />
                                                <p className='text-sm'>{info.reactions}<span className='hidden md:inline'> reaction{info.reactions > 1 && 's'}</span></p>
                                            </div>
                                            <div className="flex items-center ml-5">
                                                <img src={Comment} alt="" className='w-6 h-6 mr-2' />
                                                <p className='text-sm'>{info.comments}<span className='hidden md:inline'> comment{info.comments > 1 && 's'}</span></p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className='text-sm'>{info.time}</span>
                                            <button className='bg-gray-300 rounded-md p-2 px-3 ml-4 text-sm'>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Feed