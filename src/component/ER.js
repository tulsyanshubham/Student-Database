import React from 'react'
import erd from '../assets/ER.svg'

export default function ER() {
  return (
    <div className='d-flex align-items-center justify-content-center pt-5' style={{minHeight:"100vh"}}>
      <img src={erd} alt="ERROR" style={{width:"140vh"}}/>
    </div>
  )
}
