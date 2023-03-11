import React from 'react'
import '../styles/Shop/shop.css'
import FB from '../assets/fb.svg'
import TW from '../assets/tw.svg'
import Insta from '../assets/insta.svg'

export default function BottomInfo() {
  return (
    <div className='bottomInfo'>
        <div className='bot-left'>
      <p className='bottom-contacts'><b style={{color:'#008768'}}>Gmail</b>: <a className='contacts-links' href='mailto:shopmaster@gamil.com'>shopmaster@gamil.com</a></p>
      <p className='bottom-contacts'><b style={{color:'#008768'}}>Phone</b>: <a className='contacts-links' href='tel:+9954751786'>+9954751786</a></p>
      </div>
      <div className='bot-right'>
<a href='https://www.facebook.com'className='social-links' target='_blank'><img src={FB} className='socials'/></a>
<a href='https://www.twitter.com'className='social-links' target='_blank'><img src={TW} className='socials'/></a>
<a href='https://www.instagram.com'className='social-links' target='_blank'><img src={Insta} className='socials'/></a>
      </div>
    </div>
  )
}
