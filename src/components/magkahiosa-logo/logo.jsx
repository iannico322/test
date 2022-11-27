import React from 'react'
import logo from './../../assets/images/MagkahiOSA Logo.svg'
import "./logo.css"
export const Logo = (props) => {
    
    
  return (
    <div className='magkahiosa_logo'>
        <img src={logo} alt=""  style={{width: props.iw,height: props.ih}}/>
        <div>
            <h3 className='text-head'>MAGKAHI<span>OSA</span> </h3>
            <p className='text-des'>CENTRALIZE    PLATFORM</p>
        </div>
        
    </div>
  )
}


