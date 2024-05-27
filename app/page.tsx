import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import RecentProject from '@/components/RecentProject'
import { navItems } from '@/data'
import Client from '@/components/Client'
import Experience from '@/components/Experience'
import Process from '@/components/Process'
import Footer from '@/components/Footer';

const Home = () => {

  return (
      <main className="relative bg-black-100
      flex justify-center items-center flex-]
      mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav
          navItems={navItems}
          />
            <Hero/>
            <Grid/>
            <RecentProject/>
            <Client/>
            <Experience/>
            <Process/>
            <Footer/>
        </div>
      </main>
  )
}

export default Home

