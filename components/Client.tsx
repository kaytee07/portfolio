import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Client = () => {
  return (
    <div id="testimonials">
      <h1 className="heading">
        Feeback from {' '}
        <span className="text-purple">
          satisfied client
          </span>
      </h1>
      <div className="flex items-center mt-7 flex-col max-lg:mt-10">
            <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-16">
            {companies.map(({id, img, name, nameImg}, i)=> (
                <div className="flex md:max-w-60
                max-w-32 gap-2" key={i}>
                    <img
                        src={img}
                        alt={name}
                        className="md:w-10 w-5"
                    />
                    <img
                        src={nameImg}
                        alt={name}
                        className="md:w-24 w-20"
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Client
