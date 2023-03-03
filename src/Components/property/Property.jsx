import React from 'react'
import './property.scss'




const Property = ({ src, text1, text2 }) => {
    return (
        <>
            <div className='property'>
                <img src={src} alt="" />
                <div className="info">
                    <span>{text1}</span>
                    <span>{text2}</span>
                </div>
            </div>
        </>
    )
}

export default Property