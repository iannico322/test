import React from 'react'
import './input.css'
export const Input = (props) => {
  return (
    <div className='input'>
        <p className='text'>{props.text}</p>
        <input type="text"  placeholder={props.placeholder}/>
        <p className='warning'>{props.warning}</p>
    </div>
  )
}
