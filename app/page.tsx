import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const Home = () => {
  const items = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaHome/>,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <FaHome />
      ),
    },
  ];

  return (
      <main className="relative bg-black-100
      flex justify-center items-center flex-]
      overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav
          navItems={items}
          />
            <Hero/>
            <Grid/>
        </div>
      </main>
  )
}

export default Home

