import React from 'react'
import { useLocation } from 'react-router-dom'
import './list.scss'

const List = () => {
    const location = useLocation()
    console.log(location.state)

    return (
        <div className='list'>
            list
        </div>
    )
}

export default List;