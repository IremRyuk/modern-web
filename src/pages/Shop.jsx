import React, { useEffect, useReducer, useState } from 'react'
import '../styles/Shop/shop.css'
import Nav  from '../components/Nav'
import CurrentItem from './CurrentItem'
import { Initial_Values, reduce } from '../components/Values'
import BottomInfo from './BottomInfo'

export default function Shop() {
    const [state,dispatch] = useReducer(reduce,Initial_Values)
    const [data,setData] = useState([])
    useEffect(()=>{
        let server = async() =>{
            let main = await fetch('https://fakestoreapi.com/products')
            let json = await main.json()
            setData(json)
            dispatch({type:'loading'})
        }
        server()
    },[])
  return (
    <div className='shop'>
        <Nav />
        <div className='searchCall'>
            <input type='text' className='shop-search' placeholder='Search...' onChange={(e)=>{dispatch({type:'search',payload:e.target.value})}}/>
            <div className='shop-call-box'><p className='shop-call'><a href='tel:+99547812641' className='shop-call-phone'>Call Us</a></p></div>
        </div>
        
            {state.loading?<center><h1>Loading...</h1></center>:
            <div className='allItems'>
                        {data.filter(word=>{
                            if(state.searchTxt === ''){
                                return data
                            }else if(word.title.toLowerCase().includes(state.searchTxt.toLowerCase())){
                                return state.searchTxt
                            }
                        }).map(res=><CurrentItem key={res.id} main={res} />)}
                        </div>}
        <BottomInfo />
    </div>
  )
}
