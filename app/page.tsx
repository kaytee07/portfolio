import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import RecentProject from '@/components/RecentProject'
import { navItems } from '@/data'
import Client from '@/components/Client'

const Home = () => {
  // const items = [
  //   {
  //     name: "Home",
  //     link: "/",
  //     icon: <FaHome />,
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //     icon: <FaHome/>,
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //     icon: (
  //       <FaHome />
  //     ),
  //   },
  // ];

  return (
      <main className="relative bg-black-100
      flex justify-center items-center flex-]
      overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav
          className='mx-5'
          navItems={navItems}
          />
            <Hero/>
            <Grid/>
            <RecentProject/>
            <Client/>
        </div>
      </main>
  )
}

export default Home

