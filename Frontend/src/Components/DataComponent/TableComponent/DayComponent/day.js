import React from 'react'
import './day.css'

class DayComponent extends React.Component{


    render(){
        console.log(this.props.audienceData)
        const days = ["Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        return(

            <>
                    <div className="day--component">
                    <div className="">
                        <ul>
                        {this.props.audienceData.events.results.map(event =>
                            <li>
                            <div>
                                <b>Название:</b>
                                {event.eventSubject}
                                </div>
                            <div> <b>Начало:</b>{event.start.split("T").join(",")}</div>
                            <div> <b>Конец:</b>{event.end.split("T").join(",")}</div>
                            </li>
                        )
                        }
                        </ul>
                    </div>
                </div>


    </>
    )
                }


}

export default DayComponent;