import React from 'react'
import './property.scss'




const Property = ({ src }) => {
    return (
        <>
            <div className='property'>
                <img src={src} alt="" />
                <div className="info">
                    <span>Hotels</span>
                    <span>133 Hotels </span>
                </div>
            </div>
        </>
    )
}

export default Property