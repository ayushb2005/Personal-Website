import React from 'react'
import github from '../FooterImages/github.png'
import linkedin from '../FooterImages/linkedin.png'
import email from '../FooterImages/email.png'

const Footer = ()  => {
  return (
    <div>
        <br/>
        <div className='flex flex-nowrap sm:flex-wrap items-center gap-3 sm:gap-4 max-w-md text-left mx-auto text-[11px] sm:text-xs px-4'>
            <footer className='whitespace-nowrap shrink-0'>© 2025</footer>
            <footer className='whitespace-nowrap shrink-0'>Ayush Bhanushali</footer>
            <a href='mailto:ayushb2005@gmail.com' className='flex items-center gap-2 whitespace-nowrap shrink-0'>
                <footer>ayushb2005@gmail.com</footer>
                <img className='w-5 h-5 sm:w-5 sm:h-5' src={email} alt='Ayush Email'/>
            </a>
            <div className='flex items-center gap-3 sm:gap-4 shrink-0'>
                <a href="https://github.com/ayushb2005">
                    <img className='w-5 h-5' src={github} alt='Github'/>
                </a>
                <a href='https://www.linkedin.com/in/ayushbhanushali/'>
                    <img className='w-5 h-5' src={linkedin} alt='LinkedIn'/>
                </a>
            </div>
        </div>
    </div>
  )
}
export default Footer