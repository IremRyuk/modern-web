import React, {useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav/nav.css'

export default function Nav() {
  const [windowSize,setWindowSize] = useState(window.innerWidth)
  useEffect(()=>{
  window.addEventListener('resize',()=>{
  setWindowSize(window.innerWidth)
})
  },[])
  // console.log(windowSize)
  return (
    <div className='nav'>
        <Link to='/' className='links-main'>ShopMaster</Link>
        <div className='boxLinks'>
            <Link to='' className='links'>shop</Link>
            <Link to='' className='links'>Profile</Link>
            <Link to='' className='links'>jobs</Link>
            <Link to='' className='links'>contact us</Link>
            <Link to='' className='links'>report</Link>
        </div>
        {windowSize <=1000 &&
        <>
        <div className='burgerBar'><i className="fa-solid fa-bars" />
        <div className='boxLinks-mini'>
            <Link to='' className='links-mini'>shop</Link>
            <Link to='' className='links-mini'>Profile</Link>
            <Link to='' className='links-mini'>jobs</Link>
            <Link to='' className='links-mini'>contact us</Link>
            <Link to='' className='links-mini'>report</Link>
        </div>
        </div>
        </>
        }
    </div>
  )
}
