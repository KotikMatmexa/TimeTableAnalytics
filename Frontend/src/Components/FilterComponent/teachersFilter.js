import React from 'react'
import './filter.css'
import DataComponent from "../DataComponent/data";
import {faculty_data} from "../../testData";

class TeachersFilterComponent extends React.Component{

    startDate = (startDate) => {this._startDate = startDate};
    endDate = (endDate) => {this._endDate = endDate};
    startTime = (startTime) => {this._startTime = startTime};
    endTime = (endTime) => {this._endTime = endTime};
    address = (address) => {this._address = address};


    componentWillMount(){
        this.props.setDateInterval(null, null);
    }
    startTimeFocus = () => {
        this._startTime.focus();
    };

    endTimeFocus = () => {
        this._endTime.focus();
    };

    loadTeachers = () => {
        let index = this._address.selectedIndex;

        if ((this._startDate.value)&&
            (this._startTime.value)&&(this._endDate.value)&&
            (this._endTime.value)&&(index >0)) {

            if(this.props.startDate > this.props.endDate){
                alert("Дата начала должна быть раньше, чем дата конца");
                return false;
            }


            let address = this._address.value;
            this.props.setDateInterval(this.props.startDate, this.props.endDate);
            this.props.loadData(true);
            this.props.loadTeachersList(address);
        }
        else alert("Проверьте, что все данные заполнены корректно!");
    };

    setDateFormat = (date, time) => {
        let current_time = time.split(":");
        let final_date = new Date(date);
        final_date.setHours(current_time[0]);
        final_date.setMinutes(current_time[1]);
        return final_date
    };

    //start date
    setStartDateTime = () =>{
        let startDay = this._startDate.value;
        let startTime = this._startTime.value;
        if (!startDay || !startTime) {
            alert("Выберите дату и время начала!");
            return false
        }
        if(startTime.length > 5) {
            alert("Неверный формат времени начала");
            return false;
        }
        if(startTime.indexOf(":") === -1){
            alert("Неверный формат времени начала");
            return false;
        }
        let date = this.setDateFormat(startDay, startTime);

        this.props.setStartDateTime(date);
        };

    //end date
    setEndDateTime = () =>{

        let endDay = this._endDate.value;
        let endTime = this._endTime.value;
        if (!endDay || !endTime) {
            alert("Выберите дату и время окончания!");
            return false
        }
        if(endTime.length > 5) {
            alert("Неверный формат времени конца");
            return false;
        }
        if(endTime.indexOf(":") === -1){
            alert("Неверный формат времени конца");
            return false;
        }
        let dateEnd = this.setDateFormat(endDay, endTime);

        this.props.setEndDateTime(dateEnd);

    };



    render(){
            return (
                <>
                <div className="teachers--filter">
                    <div className="teachers--address">
                        <b>Адрес:</b>
                        <div className="teachers--selection">
                            <select ref={this.address}>
                                <option defaultValue>Выбрать адрес...</option>
                                {Object.values(faculty_data).map(faculty =>
                                    <option value={faculty.address} title={faculty.name}>{faculty.address}</option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="teachers--start-period">
                        <b>Начало периода:</b>
                        <input type="date" ref={this.startDate} onSelect={this.startTimeFocus}/>
                        <input className="date--time"
                               type="text" placeholder="9:00"
                               ref={this.startTime}
                               onBlur={this.setStartDateTime}/>
                    </div>
                    <div className="teachers--end-period">
                        <b>Конец периода:</b>
                        <input type="date" ref={this.endDate} onSelect={this.endTimeFocus}/>
                        <input className="date--time"
                               type="text" placeholder="12:00"
                               ref={this.endTime}
                               onBlur={this.setEndDateTime}/>
                    </div>
                </div>
                    <button className="get--button" onClick={this.loadTeachers}>Получить</button>


                    </>
            )

    }
}

export default TeachersFilterComponent;