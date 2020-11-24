import React from 'react'
import './day.css'

class DayComponent extends React.Component{


    render(){

        const days = ["Воскресенье","Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        return(

            <>
                    <div className="day--component">

                        <h4>{days[new Date(this.props.day.day).getDay()]}</h4>
                        <span>{new Date(this.props.day.day).getDate()}.{new Date(this.props.day.day).getMonth()+1}</span>

                        <div className="day--timetable">
                        {this.props.day.data.length == 0? (<span>Кабинет полностью
                            свободен на выбранный промежуток времени</span>):( <ul>
                            {this.props.day.data.map(event =>
                                <li key={event.oid}>
                                    <span>{event.start.split("T")[1]}- {event.end.split("T")[1]}</span>
                                    <div className="lesson--info">
                                        {this.props.variant == "teacher"?(
                                            <>
                                                <span><b>Дисциплина:</b></span>
                                                <div className="discipline--info">{event.eventSubject}</div>
                                                <span><b>Группа:</b></span>
                                                <div className="group--info">-</div>
                                                <span><b>Адрес:</b></span>
                                                <div className="teacher--info">{event.address}</div>
                                                <span><b>Аудитория:</b></span>
                                                <div className="teacher--info">-</div>
                                            </>


                                        ):(
                                            <>
                                            <span><b>Дисциплина:</b></span>
                                            <div className="discipline--info">{event.eventSubject}</div>
                                                <span><b>Преподаватель:</b></span>
                                                <div className="teacher--info">-</div>
                                                <span><b>Группа:</b></span>
                                                <div className="group--info">-</div>
                                            </>
                                        )}
                                    </div>

                                </li>)
                            }

                        </ul>)
                        }

                    </div>
                </div>


    </>
    )
                }


}

export default DayComponent;