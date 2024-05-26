import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Client = () => {
  return (
    <div>
      <h1 className="heading">
        Feeback from {' '}
        <span className="text-purple">
          satisfied client
          </span>
      </h1>
      <div className="flex items-center flex-col">
        <div className="h-[50vh] md:h-[30rem] rounded-md
        flex flex-col antialiased items-center relative overflow-hidden">
            <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
        />
        </div>
      </div>
    </div>
  )
}

export default Client
