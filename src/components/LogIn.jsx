import React from 'react'
import '../styles/Registation/registr.css'

export default function LogIn(props) {
  const closeMenu = () =>{
    props.close()
  }
  return (
    <div className='login'>
      <button onClick={()=>{closeMenu()}} className='closeBtnLog'><i className="fa-sharp fa-solid fa-circle-xmark" /></button>
      <form className='loginForm'>
        <center>
        <label className='logLabel'>Gmail</label>
        <br />
<input type='email' className='logInp' placeholder='gmail...'/>
<br />
<label className='logLabel'>Password</label>
<br />
<input type='password' className='logInp' placeholder='pass...'/>
<br />
<input type='submit' className='logSub'/>
</center>
      </form>
    </div>
  )
}
