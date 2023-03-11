import React, { useEffect, useState } from 'react'
import '../styles/Home/home.css'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import LogIn from '../components/LogIn'
import SignUp from './SignUp'

export default function Home() {
    let [number,setNumber] = useState(0)
    useEffect(()=>{
        let time = setTimeout(()=>{
            // categories show
            $('.ul').css({opacity:'1'})
            // title speed and shop button bottom
            while(number<=4){
                setNumber(number+1)
                if(number === 1){
                    $('.title1').css({left:'10%',opacity:'1',transition:'0.4s',animation:'5s titleAnimation infinite'})
                    $('.mini-nav').css({top:'5%',opacity:'1'})
                }else if(number === 2){
                    $('.title2').css({left:'15%',opacity:'1',transition:'0.4s',animation:'3s titleAnimation infinite'})
                }else if(number === 3){
                    $('.title3').css({left:'5%',opacity:'1',transition:'0.4s',animation:'4s titleAnimation infinite'})
                }else if(number === 4){
                    $('.shopbtn').css({opacity:'1'})
                }
                break;
            }
        },700)
        return ()=>clearTimeout(time)
    })
    const showLog = () =>{
        $('.showSign').hide()
        $('.showLog').toggle()
    }
    const showSign = () =>{
        $('.showLog').hide()
        $('.showSign').toggle()
    }
  return (
    <div className='home'>
        <div className='mini-nav'>
        <Link to='/' className='headers'>ShopMaster</Link>
        <div className='register'>
            <div><button className='registerBtn logLeft' onClick={()=>{showLog()}}>Log In</button><div className='showLog'><LogIn close={showLog}/> </div></div>
            <div><button className='registerBtn logRight' onClick={()=>{showSign()}}>Sign Up</button><div className='showSign'><SignUp /> </div></div>
        </div>
        </div>
         <ul className='ul'>
            <li style={{'--i':5}} className='--i:5 li'><Link to='/shop'>Shop</Link></li>
            <li style={{'--i':4}} className='--i:4 li'><Link to='/Profile'>Profile</Link></li>
            <li style={{'--i':3}} className='--i:3 li'><Link to=''>Jobs</Link></li>
            <li style={{'--i':2}} className='--i:2 li'><Link to=''>Contact Us</Link></li>
            <li style={{'--i':1}} className='--i:1 li'><Link to=''>Report</Link></li>
        </ul>
<div className='right'>
    <p className='title1'>Welcome To ShopMaster</p>
    <p className='title2'>Here You Can Buy Everything</p>
    <p className='title3'>For Your Journey And Advantures</p>
</div>
<Link to='/shop'  className='shopbtn'>Go To Shop</Link>
<Link to='/shop'  className='cart'></Link>
    </div>
  )
}
