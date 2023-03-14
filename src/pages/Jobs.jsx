import React from 'react'
import '../styles/Jobs/jobs.css'
import {useReducer} from 'react'
import {Initial_Values, reduce} from '../components/InitialValues'
import $ from 'jquery'
import JobsImage from '../assets/jobs.webp'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function Jobs() {
    const [state, dispatch] = useReducer(reduce, Initial_Values)
    class NewPerson {
        constructor(position,name,gmail,phone){
            this.position  = position
            this.name = name
            this.gmail = gmail
            this.phone = phone
        }
        sendPersonInformation(){
            return `Jobs Position: ${this.position}, Name: ${this.name}, Gmail: ${this.gmail}, Phone Number : ${this.phone}.`
        }
    }
let newPerson = new NewPerson(state.position,state.jobsName,state.jobsGmail,state.jobsPhoneNumber)
const jobsSend = (e) => {
    e.preventDefault()
    // check inputs
    if(state.jobsName === ''){
        $('.input-name').css({border:'2px solid red'})
    }else if(state.jobsGmail === ''){
        $('.input-gmail').css({border:'2px solid red'})
    }else if(state.jobsPhoneNumber === ''){
        $('.input-phone').css({border:'2px solid red'})
    }else if(state.position === ''){
        $('.jobsSelect').css({border:'2px solid red'})
    }
    else{
console.log('Ready New Person Information to Send on Gmail: ' + newPerson.sendPersonInformation())
ClearBorders()
clearAllInputs()
    }
}

// clear input borders and clear input values
const ClearBorders = () =>{
    $('.input-name').css({border:'none'})    
    $('.input-gmail').css({border:'none'})
    $('.input-phone').css({border:'none'})
    $('.jobsSelect').css({border:'none'})    
}

const clearAllInputs = () =>{
dispatch({type:'position',payload:''})
dispatch({type:'jobsName',payload:''})
dispatch({type:'jobsGmail',payload:''})
dispatch({type:'jobsPhoneNumber',payload:''})
}

    return (
        <div className='jobs'>
            <Nav />
            <div className='first-part-elements'>
            <img src={JobsImage} className='jobs-image' alt='jobs shopmaster'/>
            <form className='jobs-form' onSubmit={jobsSend}>
                <label className='labels'>Select Position</label>
                <select
                    onChange={(e) => dispatch({type: 'position', payload: e.target.value})}
                    className='jobsSelect'
                    value={state.position}
                    >
                    <option value=''>none</option>
                    <option value='Front End'>Front End</option>
                    <option value='Back End'>Back End</option>
                    <option value='Manager'>Manager</option>
                    <option value='CyberSecurity'>cybersecurity</option>
                </select>
                <label className='labels-name'>Your Name</label>
                <input type='text' onChange={(e)=>{dispatch({type:'jobsName',payload:e.target.value})}} className='jobs-inp input-name'  value={state.jobsName}/>
                <label className='labels-name'>Your Gmail</label>
                <input type='email' onChange={(e)=>{dispatch({type:'jobsGmail',payload:e.target.value})}} className='jobs-inp input-gmail'  value={state.jobsGmail}/>
                <label className='labels-name'>Your Phone Number</label>
                <input type='number' onChange={(e)=>{dispatch({type:'jobsPhoneNumber',payload:e.target.value})}} className='jobs-inp input-phone' value={state.jobsPhoneNumber} />
                <div className='jobsBtns'>
<input type='reset' className='resetBtn' onClick={()=>clearAllInputs()}/>
<input type='submit' className='submitBtn' />
                </div>
            </form>
            </div>
            <div className='jobs-con'><Link to='/contact' className='jobs-con-tag'><p className='jobs-link-w'>if you have any question please click here</p></Link></div>
        </div>
    )
}
