import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <span>Majid Booking</span>
                </div>
                <div className="right">
                    <button>Login</button>
                    <button>Singup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar