import React from 'react'
import './city.scss'

const City = ({ src, text1, text2 }) => {
    return (
        <>
            <div className='city'>
                <img src={src} alt="" />
                <div className="info">
                    <span>{text1}</span>
                    <span>{text2}</span>
                </div>
            </div>
        </>
    )
}

export default City