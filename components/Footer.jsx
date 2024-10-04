import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillTikTok } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 Hoco Store All rights reserved</p>
      <p className='icon'>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillTikTok />
      </p>
    </div>
  )
}

export default Footer