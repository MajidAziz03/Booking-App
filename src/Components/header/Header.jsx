import './header.scss'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Bed, Boy, Event } from '@mui/icons-material';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [adult, setAdult] = useState(1)
    const [children, setChildren] = useState(0)
    const [room, setRoom] = useState(1)
    const [openVacancy, setOpenVacancy] = useState(false)
    const navigate = useNavigate()

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, adult, children, room } })
    }

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
                        <input type="text" placeholder='Where are you going?' onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="inputfields">
                        <Event onClick={() => setOpenDate(!openDate)} className='icon' id='datt' />
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            style={{ color: "#222" }}
                        >
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
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
                    <div className="inputfields adult">
                        <Boy className='icon1' onClick={() => setOpenVacancy(!openVacancy)} />
                        {/* <input type="text" placeholder='1 adult - 0 children - 1 room  ' /> */}
                        <span onClick={() => setOpenVacancy(!openVacancy)}>{adult} adult - {children} children - {room} Room</span>
                        {openVacancy &&
                            <div className="holder">
                                <div className='holdItem'>
                                    <span>Adult</span>
                                    <div className="btns">
                                        <button onClick={() => adult !== 0 ? setAdult(adult - 1) : setAdult(0)}>-</button>
                                        <span>{adult}</span>
                                        <button onClick={() => setAdult(adult + 1)}>+</button>
                                    </div>
                                </div>
                                <div className='holdItem'>
                                    <span>Children</span>
                                    <div className="btns">
                                        <button onClick={() => children !== 0 ? setChildren(children - 1) : setChildren(0)}>-</button>
                                        <span>{children}</span>
                                        <button onClick={() => setChildren(children + 1)}>+</button>
                                    </div>
                                </div>
                                <div className='holdItem'>
                                    <span>Room</span>
                                    <div className="btns">
                                        <button onClick={() => room !== 0 ? setRoom(room - 1) : setRoom(0)}>-</button>
                                        <span>{room}</span>
                                        <button onClick={() => setRoom(room + 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div >
    )
}

export default Header