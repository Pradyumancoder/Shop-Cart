import React from 'react'
import { BsGithub } from 'react-icons/bs'
import {ImLinkedin} from "react-icons/im"
import { IoMdMail } from 'react-icons/io'

export const Footer = () => {
  return (
    <div className='bg-gray-500 text-center py-3 text-white'>
        <h3 className='font-medium'>Made with ❤️ by Pradyuman Shukla</h3>
        <div>
        <p>Connect me</p>
            <div className='flex justify-center gap-3'>
                <a className='hover:scale-110' href="https://www.linkedin.com/in/pradyuman-shukla/">
                <ImLinkedin />
                </a>
                <a className='hover:scale-110' href="https://github.com/Pradyumancoder">
                <BsGithub />
                </a>
                <a className='hover:scale-110' href="mailto:shuklapradyuman786@gmail.com">
                <IoMdMail />
                </a>
            </div>
        </div>
    </div>
  )
}
