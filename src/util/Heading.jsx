import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Heading = ({icon, title, desc}) => {
  return (
    <div className='container d-flex'>
        <div className='row '>
            <div className='col-md-2 my-auto'>
                {icon}
            </div>
            <div className='col-md-8'>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <div className='col-md-2 my-auto'>
                <FaArrowRightLong />
            </div>

        </div>
    </div>
  )
}

export default Heading
