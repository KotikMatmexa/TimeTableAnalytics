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
                                <div className="lesson--info">
                                    <span><b>Дисциплина:</b></span>
                                    <div className="discipline--info">Основы программирования</div>
                                    <span><b>Преподаватель:</b></span>
                                    <div className="teacher--info">Романов Александр Сергеевич</div>
                                    <span><b>Группа:</b></span>
                                    <div className="group--info">309</div>
                                </div>
                        </li>
                        <li>
                            <span>11:15 - 12:50</span>
                            <div className="lesson--info">
                                <span><b>Дисциплина:</b></span>
                                <div className="discipline--info">Основы БД</div>
                                <span><b>Преподаватель:</b></span>
                                <div className="teacher--info">Олешкин Иван Юрьевич</div>
                                <span><b>Группа:</b></span>
                                <div className="group--info">111,112</div>
                            </div>
                        </li>
                        <li>
                            <span> 13:40 - 15:15</span>
                            <div className="lesson--info">
                                <span><b>Дисциплина:</b></span>
                                <div className="discipline--info">Мат. статистика</div>
                                <span><b>Преподаватель:</b></span>
                                <div className="teacher--info">Рубанцов Илья Романович</div>
                                <span><b>Группа:</b></span>
                                <div className="group--info">102</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DayComponent;