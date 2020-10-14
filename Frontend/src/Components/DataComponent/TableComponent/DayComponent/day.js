import React from 'react'
import './day.css'

class DayComponent extends React.Component{


    render(){
        return(
            <div className="day--component">
                <h4>Название дня</h4>
                <span>Дата</span>
                <div className="day--timetable">
                    <ul>
                        <li>
                            <span>9:30 - 11:05</span>
                        </li>
                        <li>
                            <span>11:15 - 12:50</span>
                        </li>
                        <li>
                            <span> 13:40 - 15:15</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DayComponent;