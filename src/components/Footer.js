import React from 'react'
import github from '../FooterImages/github.png'
import linkedin from '../FooterImages/linkedin.png'
import email from '../FooterImages/email.png'

const Footer = ()  => {
  return (
    <div>
        <br/>
        <div className='flex gap-4 max-w-md text-left mx-auto font-style: italic text-xs'>
            <footer>© 2025</footer>
            <footer>Ayush Bhanushali</footer>
            <footer>ayushb2005@gmail.com</footer>
            <a href="https://github.com/ayushb2005">
                <img className= 'w-5 h-5' src={github} alt='Github'/>
            </a>
            <a href='https://www.linkedin.com/in/ayushbhanushali/'>
                <img className='w-5 h-5' src={linkedin} alt='LinkedIn'/>
            </a>
            <a href='mailto:ayushb2005@gmail.com'>
                <img className='w-5 h-5' src={email} alt='Ayush Email'/>
            </a>
        </div>
    </div>
  )
}
export default Footer