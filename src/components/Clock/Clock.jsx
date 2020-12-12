import React from 'react'
import * as Fi from 'react-icons/fi'
import * as Io from 'react-icons/io'
import './Clock.scss'

function Clock() {
    return (
        <div className="clock">
            <div className="clock_container">
                <Fi.FiSun/>
                <p>Good morning, It's currently</p>
            </div>
            <div className="clock_timezone">
                <h2>11:30</h2>
                <p>BST</p>
            </div>
            <h2>In London, UK</h2>
            <div className="clock_location">
                <button onClick={() => console.log("clicked")}>
                    More
                    <Io.IoIosArrowDown/>
                </button> 
            </div>
        </div>
    )
}

export default Clock
