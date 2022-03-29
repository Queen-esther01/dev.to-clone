import React from 'react'
import Feed from '../components/home/feed'
import Header from '../components/shared/header'
import Info from '../components/home/info'
import Sidebar from '../components/home/sidebar'

const Home = () => {
    return (
        <>
            <Header/>
            <div className="w-full flex gap-2 lg:gap-3 lg:max-w-7xl mx-auto md:px-4 mt-4">
                <Sidebar/>
                <Feed/>
                <Info/>
            </div>
        </>
    )
}

export default Home