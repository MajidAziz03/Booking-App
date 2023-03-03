import React from 'react'
import City from '../city/City'
import Property from '../property/Property'
import './hero.scss'

const images = {
    src1: 'https://images.pexels.com/photos/12165534/pexels-photo-12165534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src2: 'https://images.pexels.com/photos/11513529/pexels-photo-11513529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src3: 'https://images.pexels.com/photos/15521600/pexels-photo-15521600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="top">
                    <City src={images.src1} text1='Dubai' text2='123 Properties' />
                    <City src={images.src2} text1='Austin' text2='533 Properties' />
                    <City src={images.src3} text1='Bella' text2='623 Properties' />
                </div>
                <div className="middle">
                    <h3> Browse by property type</h3>
                    <div className="container">
                        <Property />
                        <Property />
                        <Property />
                        <Property />
                        <Property />
                    </div>
                </div>
                <div className="bottom">bottom</div>
            </div>
        </div>
    )
}

export default Hero