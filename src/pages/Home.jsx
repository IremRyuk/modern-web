import React, { useEffect, useState } from 'react'
import '../styles/Home/home.css'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function Home() {
    let [number,setNumber] = useState(0)
    useEffect(()=>{
        let time = setTimeout(()=>{
            // categories show
            $('.ul').css({opacity:'1'})

            // here will be if screen size is lower than some number change animation duration
            // $('.cart').css({animation:'15s cartanime infinite'})
            // welcome page title
            while(number<=3){
                setNumber(number+1)
                if(number === 1){
                    $('.title1').css({left:'10%',opacity:'1',transition:'0.4s',animation:'5s titleAnimation infinite'})
                }else if(number === 2){
                    $('.title2').css({left:'15%',opacity:'1',transition:'0.4s',animation:'3s titleAnimation infinite'})
                }else if(number === 3){
                    $('.title3').css({left:'5%',opacity:'1',transition:'0.4s',animation:'4s titleAnimation infinite'})
                }
                break
            }
        },700)
        return ()=>clearTimeout(time)
    })
  return (
    <div className='home'>
         <ul className='ul'>
            <li style={{'--i':5}} className='--i:5 li'><Link to='/shop'>Shop</Link></li>
            <li style={{'--i':4}} className='--i:4 li'><Link to='/help'>Help</Link></li>
            <li style={{'--i':3}} className='--i:3 li'><Link to=''>Jobs</Link></li>
            <li style={{'--i':2}} className='--i:2 li'><Link to=''>Contact Us</Link></li>
            <li style={{'--i':1}} className='--i:1 li'><Link to=''>Report</Link></li>
        </ul>
<div className='right'>
    <p className='title1'>Welcome To ShopMaster</p>
    <p className='title2'>Here You Can Buy Everything</p>
    <p className='title3'>For Your Journey And Advantures</p>
</div>
<Link to='/shop'  className='cart'></Link>
    </div>
  )
}
