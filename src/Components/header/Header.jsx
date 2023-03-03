import './header.scss'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Bed, Boy, Event } from '@mui/icons-material';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div className='header'>
            <div className="container">
                <div className="top">
                    <ul className="menu-links">
                        <li className="link-item">Stays</li>
                        <li className="link-item">Flights</li>
                        <li className="link-item">Car Rentals</li>
                        <li className="link-item">Attractions</li>
                        <li className="link-item">Airport</li>
                    </ul>
                </div>
                <div className="bottom">
                    <div>A lifetime of discounts ? It's Genius</div>
                    <span>Get Rewarded for your travels - Unlock instant savings of 10% or more </span>
                    <div>
                        <button>Signin /Register </button>
                    </div>
                </div>
                <div className="search">
                    <div className="inputfields">
                        <Bed className='icon' />
                        <input type="text" placeholder='Where are you going?' />
                    </div>
                    <div className="inputfields">
                        <Event onClick={() => setOpenDate(!openDate)} className='icon' id='datt' />
                        <span onClick={() => setOpenDate(!openDate)} style={{ color: "#222" }}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {
                            openDate
                            &&
                            <div>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    ranges={date}
                                    color='#3d91ff'
                                    rangeColors='#222'
                                    className='date'
                                />
                            </div>
                        }
                    </div>
                    <div className="inputfields">
                        <Boy className='icon1' />
                        <input type="text" placeholder='1 adult - 0 children - 1 room  ' />
                    </div>
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header