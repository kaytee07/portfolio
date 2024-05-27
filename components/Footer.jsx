import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { cn } from '@/utils/cn';

const Footer = () => {
  return (
    <footer className="w-full" id="contact"
    style={{
        paddingTop: "5rem",
        paddingBottom: "2.5rem"
    }}>
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-purple">your</span> digital
                presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 text-center"
            style={{
                marginTop: "1.5rem",
                marginBottom: "1.5rem"
            }}>
                Reach out to me today and let&apos;s discuss
                how I can help you achieve your goals
            </p>
            <a href="mailto:kofi.taylor07@gmail.com">
                <MagicButton
                    name="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position="right"
                />
            </a>
        </div>
        <div className={cn(`flex md:flex-row flex-col justify-between items-center`)}
        style={{marginTop: "4rem"}}
        >
            <p className="md:text-base text-sm md:font-normal
             font-light">
                Copyright &copy; 2024 Taylor
            </p>

        <div className="flex items-center md:gap-3 gap-6"
        style={{
            marginTop:"1.25rem",
            width: "200px",
            justifyContent: "center",
            gap: "10px"
        }}>
            {socialMedia.map(({id, img, link})=> (
                <div key={id} className="w-10 h-10 
                cursor-pointer flex justify-center items-center
                backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200
                rounded-lg border border-black-300"
                >
                    <a href={link}>
                    <img src={img} alt={id} width={20} height={20}/>
                    </a>
                </div>
            ))}
        </div>
        </div>
    </footer>
  )
}

export default Footer;
