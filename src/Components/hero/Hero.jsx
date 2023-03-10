import React from 'react'
import City from '../city/City'
import Guest from '../guest/Guest'
import Property from '../property/Property'
import './hero.scss'

const images = {
    src1: 'https://images.pexels.com/photos/12165534/pexels-photo-12165534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src2: 'https://images.pexels.com/photos/11513529/pexels-photo-11513529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src3: 'https://images.pexels.com/photos/15521600/pexels-photo-15521600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}


const imagesMiddle = {
    src1: 'https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src2: 'https://images.pexels.com/photos/1105391/pexels-photo-1105391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src3: 'https://images.pexels.com/photos/371404/pexels-photo-371404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src4: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    src5: 'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
                    <h3 style={{ fontWeight: 'bold', marginTop: "12px", marginBottom: "10px" }}> Browse by property type</h3>
                    <div className="propertyContainer">
                        <Property src={imagesMiddle.src1} text1='Hotels' text2='133 hotels' />
                        <Property src={imagesMiddle.src2} text1='Appartments' text2='133 appartments' />
                        <Property src={imagesMiddle.src3} text1='Resorts' text2='1335 resorts' />
                        <Property src={imagesMiddle.src4} text1='Villas' text2='32 villas' />
                        <Property src={imagesMiddle.src5} text1='Cabins' text2='51 cabins' />
                    </div>
                </div>
                <div className="bottom">
                    <h3 style={{ fontWeight: 'bold', marginTop: "12px", marginBottom: "10px" }}>Homes guest love</h3>
                    <div className='guestComponent'>
                        <Guest />
                        <Guest />
                        <Guest />
                        <Guest />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero