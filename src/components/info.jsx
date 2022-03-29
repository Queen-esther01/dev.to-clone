import React from 'react'
import { Link } from 'react-router-dom'
import Deepgram from '../assets/deepgram.webp'
import { deepGramLinks, listings } from '../utils/infoLinks'

const Info = () => {
    return (
        <>
            <div className="hidden lg:block">
                <div className='light-grey-bg px-4 pt-4 pb-4 border border-gray-200 rounded-md self-start lg:w-64 xl:w-80'>
                    <h2 className='text-2xl font-extrabold text-blue leading-10'>Experience Dev on Android via the new Forem app</h2>
                </div>
                <div className='border border-gray-200 light-grey-bg md:rounded-md overflow-hidden mt-2  lg:w-64 xl:w-80'>
                    <img src={Deepgram} alt="" className='overflow-none' />
                    <div className="">
                        <h3 className='p-4 text-xl font-bold border-b border-gray-100'>Deepgram x DEV Hackathon (26)</h3>
                        {
                            deepGramLinks.map(link => {
                                return <p className='p-4 border-b border-gray-100'>{link}</p>
                            })
                        }
                        <div className='mt-5 mb-4 px-4'>
                            <button className="w-full bg-blue rounded-md py-2 text-white font-semibold text-base">Submit Your Project!</button>
                            <button className="w-full mt-2 rounded-md py-2 text-base bg-gray-300">See all posts</button>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4  flex items-center justify-between">
                        <h3 className='font-bold text-xl'>Listings</h3>
                        <Link to='#' className='text-blue text-sm font-semibold'>See all</Link>
                    </div>
                    {
                        listings.map(link => {
                            return  <div className="border-b border-gray-100 p-4">
                                        <p className=''>{link.title}</p>
                                        <p className='text-sm text-gray-500 mt-2'>{link.tag}</p>
                                    </div>
                        })
                    }
                    <div className="p-4">
                        <p className='text-gray-800 text-center text-sm font-bold'>Create a Listing</p>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4">
                        <h3 className='font-bold text-xl'>#help</h3>
                    </div>
                    <div className="p-4">
                        <p className='mb-2'>I need suggestions for my web game</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4  flex items-center justify-between">
                        <h3 className='font-bold text-xl'>#discuss</h3>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Do you think that we need another go-like language ?</p>
                        <p className='text-sm text-gray-500 mt-2'>3 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>Pusat Jual Alat Bantu Sex Di Balikpapan 085225060052 Jual Alat Bantu Sex Pria Wanita Di Balikpapan</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Most Software Developers Are Depressed</p>
                        <p className='text-sm text-gray-500 mt-2'>5 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>How has JavaScript development changed over the last decade?</p>
                        <p className='text-sm text-gray-500 mt-2'>29 comments</p>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4  flex items-center justify-between">
                        <h3 className='font-bold text-xl'>#explainlikeimfive</h3>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>What is Event Sourcing?</p>
                        <p className='text-sm text-gray-500 mt-2'>7 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>How to get data in json format from tweepy.Client() ?</p>
                        <p className='text-sm text-gray-500 mt-2'>1 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Explain the difference between PATCH and PUT Like I'm Five</p>
                        <p className='text-sm text-gray-500 mt-2'>12 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>What is meant by a "shape" in programming</p>
                        <p className='text-sm text-gray-500 mt-2'>9 comments</p>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4  flex items-center justify-between">
                        <h3 className='font-bold text-xl'>#challenge</h3>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>🚩 Insomni'hack 2022 CTF write-up</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>Who Are We Helping?</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>Publish your first Web Application in AWS</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4  flex items-center justify-between">
                        <h3 className='font-bold text-xl'>#meta</h3>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Forem for Android is Here! 🤖</p>
                        <p className='text-sm text-gray-500 mt-2'>12 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Two things you can do to improve your DEV home feed</p>
                        <p className='text-sm text-gray-500 mt-2'>22 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>Metaverse Development Company – A New Noble Services from Maticz</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>For Empowering Community</p>
                        <p className='text-sm text-gray-500 mt-2'>107 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Interested in learning more about Commercial Open Source? There’s a Forem for that.</p>
                        <p className='text-sm text-gray-500 mt-2'>6 comments</p>
                    </div>
                </div>
                <div className="border border-gray-200 mt-3 light-grey-bg rounded-md lg:w-64 xl:w-80">
                    <div className="border-b border-gray-100 p-4  flex items-center justify-between">
                        <h3 className='font-bold text-xl'>#watercooler</h3>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Most Software Developers Are Depressed</p>
                        <p className='text-sm text-gray-500 mt-2'>5 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>Why Every Programmers Must Blog</p>
                        <p className='text-sm text-gray-500 mt-2'>12 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className=''>One Month of Coffee Chats in Review: Frequently Asked Questions</p>
                        <p className='text-sm text-gray-500 mt-2'>2 comments</p>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <p className='text-gray-800 mb-2'>One Month of Coffee Chats in Review – 5 Life Lessons</p>
                        <span className='text-sm bg-yellow-400 w-auto rounded-md px-1 py-1'>New</span>
                    </div>
                </div>
                <div className="mt-3 lg:w-64 xl:w-80">
                    <div className="p-4  flex items-center justify-between">
                        <p className='font-semibold'>trending guides/resources</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>Mastering Python the Right Way</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>19 Valuable GitHub Repositories for Beginner Developers 📚✨</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>Make VS Code better by editing and updating some settings</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>I quit my job to make free web tools</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>How to understand complex coding concepts better using the Feynman Technique</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>The Power of Factory Design Pattern in JavaScript</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>C# 11 is Coming! 5 Features that will Blow your Mind 🤯</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>Docker: Explained to a 5 year old. 👶🏻</p>
                    </div>
                    <div className="p-4 pl-8">
                        <p className=''>Controlling React API Calls With Hooks</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info