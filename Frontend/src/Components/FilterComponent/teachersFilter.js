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


            let addressId = this._address.value;

            this.props.setDateInterval(this.props.startDate, this.props.endDate);
            this.props.loadData(true);
            this.props.loadTeachersList(addressId);
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
        if(startTime.length > 5) {
            alert("Неверный формат времени начала");
            return false;
        }
        if(startTime.length>0 &&startTime.indexOf(":") === -1){
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


        if(endTime.length > 5) {
            alert("Неверный формат времени конца");
            return false;
        }
        if(endTime.length >0 && endTime.indexOf(":") === -1){
            alert("Неверный формат времени конца");
            return false;
        }

        let dateEnd = this.setDateFormat(endDay, endTime);

        this.props.setEndDateTime(dateEnd);

    };

    clean = () =>{
        this.props.setStartDateTime(null);
        this.props.setEndDateTime(null);
        this._startDate.value = '';
        this._endDate.value = '';
        this._startTime.value = '';
        this._endTime.value = '';
        this._selectedAddress.selectedIndex = 0;
        this._selectedAddresses.innerHTML = '';
    };



    render(){

            return (
                <div className="filter--menu">
                <div className="teachers--filter">
                    <div className="teachers--address">
                        <b>Адрес:</b>
                        <div className="teachers--selection">
                            <select ref={this.address}>
                                <option defaultValue>Выбрать адрес...</option>
                                {this.props.addresses.map(faculty =>
                                    <option key={faculty.oid} value={faculty.oid}  title={faculty.building_name}>
                                        {faculty.street}, {faculty.house}
                                        {faculty.korpus?(", "+faculty.korpus):(null)}
                                        </option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="teachers--start-period">
                        <b>Начало периода:</b>
                        <input type="date" ref={this.startDate} onChange={this.startTimeFocus}/>
                        <input className="date--time"
                               type="text" placeholder="9:00"
                               ref={this.startTime}
                               onBlur={this.setStartDateTime}/>
                    </div>
                    <div className="teachers--end-period">
                        <b>Конец периода:</b>
                        <input type="date" ref={this.endDate} onChange={this.endTimeFocus}/>
                        <input className="date--time"
                               type="text" placeholder="12:00"
                               ref={this.endTime}
                               onBlur={this.setEndDateTime}/>
                    </div>
                </div>
                    <button className="get--button btn btn-secondary" onClick={this.loadTeachers}>Получить</button>
                    <button className="clean--button btn btn-light" onClick={this.clean}>Очистить все</button>


                </div>
            )

    }
}

export default TeachersFilterComponent;