import React from 'react'
import './guest.scss'

const Guest = () => {
    return (
        <div className='guest'>
            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="info">
                <span className='title'> Apart hotel mistro</span>
                <span className='city'> Madrid </span>
                <span className='price'> Starting from $121 </span>
                <div className='stars'>
                    <span className='rating'>8.9</span>
                    <span className='rank'>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default Guest;