import React, { useEffect, useReducer } from 'react'
import Nav from '../components/Nav'
import '../styles/Contacts/contacs.css'
import {reduce,Initial_Values} from '../components/InitialValues'
import $ from 'jquery'

export default function Contacts() {
    const [state,dispatch] = useReducer(reduce,Initial_Values)
    useEffect(()=>{
        let time = setInterval(()=>{
            // get time date
            let time = new Date()
            let Second = time.getSeconds()
            dispatch({type:'setTimeSeconds',seconds:Second})

            let Minutes = time.getMinutes()
            dispatch({type:'setTimeMinutes',minutes:Minutes})

            let Hour = time.getHours()
            dispatch({type:'setTimeHours',hours:Hour})

        },1000)
        setTimeout(()=>{
          $('.con-table-header').css({opacity:'1'})
          $('.con-table').css({opacity:'1'})
        },300)
setTimeout(()=>{
  $('.times').css({opacity:'1'})
},700)
        // clear event "time"
        return ()=>clearInterval(time)
    })
  return (
    <div className='contacts'>
        <Nav />
      <div className='contacts-middle'>
      <center><p className='con-table-header'>Informations About Our Offices</p></center>
      <div className='first-part'>
      <div className='times'>
        <p className='timeSh'>{state.setHour}:</p>
        <p className='timeSh'>{state.setMinute}:</p>
        <p className='timeSh'>{state.setSecond}</p>
      </div>
        <table className='con-table'>
            <tbody>
                <tr className='con-table-main'>
                    <th>Addresses</th>
                    <th>Open/Close</th>
                    <th>Phone Numbers</th>
                </tr>
                <tr>
                    <td>1476 Johnson Street</td>
                    <td>7AM/6PM</td>
                    <td><a href='tel:919-837-9286' style={{textDecoration:'none',color:'#00ffc4',fontWeight:'bold'}}>Call: 919-837-9286</a></td>
                </tr>
                <tr>
                    <td>2185 Poplar Street</td>
                    <td>9AM/9PM</td>
                    <td><a href='tel:708-688-7818' style={{textDecoration:'none',color:'#00ffc4',fontWeight:'bold'}}>Call: 708-688-7818</a></td>
                </tr>
                <tr>
                    <td>2648 Copperhead Road</td>
                    <td>12AM/9PM</td>
                    <td><a href='tel:860-625-0577' style={{textDecoration:'none',color:'#00ffc4',fontWeight:'bold'}}>Call: 860-625-0577</a></td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
