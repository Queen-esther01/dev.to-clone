import React from 'react'
import Feed from './components/feed'
import Header from './components/header'
import Info from './components/info'
import Sidebar from './components/sidebar'

const Home = () => {
    return (
        <>
            <Header/>
            <div className="w-full flex gap-2 lg:max-w-7xl mx-auto md:px-4 mt-4">
                <Sidebar/>
                <Feed/>
                <Info/>
            </div>
        </>
    )
}

export default Home