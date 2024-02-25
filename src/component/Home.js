import React from 'react'
import home_image from '../assets/students.png'

export default function Home() {
  return (
    <div className='home-box'>
      <div className='home-left' >
        <div>Student Database</div>
        <div>
          Seamlessly manage student information with user-friendly features to insert student details and marks effortlessly. Retrieve comprehensive data instantly, empowering educators with a streamlined tool for efficient student record keeping. Simplify academic administration with our intuitive interface for seamless data handling.
        </div>
      </div>
      <div className='home-right' >
        <img src={home_image} alt="ERROR" />
      </div>
    </div>
  )
}
