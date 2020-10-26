import React from 'react'
import './filter.css'
import DataComponent from "../DataComponent/data";

class FilterComponent extends React.Component{

    startDate = (startDate) => {this._startDate = startDate};
    endDate = (endDate) => {this._endDate = endDate};
    startTime = (startTime) => {this._startTime = startTime};
    endTime = (endTime) => {this._endTime = endTime};


    loadGroups = (e) =>{
        let index = e.target.selectedIndex;

        if(index === 0)
            return false;

        let faculty = e.target.children[index].text;
        this.props.setFaculty(faculty);
        this.props.loadGroups(faculty);
        document.getElementsByClassName("group-control--selection")[1].children[0].selectedIndex = 0;
        this.props.loadData(false);
    };

    loadData = (e) => {
        let index = e.target.selectedIndex;

        if(index === 0)
            return false;

        let group = e.target.children[index].text;
        this.props.loadData(true);
        this.props.setActiveGroup(this.props.currentFaculty, group);
    };

    loadTeachers = (e) => {
        let index = e.target.selectedIndex;

        if(index === 0)
            return false;

        let address = e.target.children[index].text;

        this.props.loadData(true);
        this.props.loadTeachersList(address);
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
        let date = this.setDateFormat(startDay, startTime);

        console.log(date);
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

        let date = this.setDateFormat(endDay, endTime);

        console.log(date);
        this.props.setEndDateTime(date);
    };

    render(){

        let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж',
            'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
            'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

        if(this.props.type === "audience"){
            return(
                <div className="audience--filter">
                    <div className="audience--address">
                        <b>Адрес:</b>
                        <div className="address--selection">
                           <select>
                               <option selected>Выбрать адрес...</option>
                               {this.props.addresses.map(address =>
                                   <option>{address}</option>
                               )}
                           </select>
                        </div>
                    </div>
                    <div className="audience--start-period">
                        <b>Начало периода:</b>
                        <input type="date" ref={this.startDate}/>
                        <input className="date--time"
                               type="text" placeholder="9:00"
                               ref={this.startTime}
                               onBlur={this.setStartDateTime}/>
                    </div>
                    <div className="audience--end-period">
                        <b>Конец периода:</b>
                        <input type="date" ref={this.endDate}/>
                        <input className="date--time"
                               type="text" placeholder="12:00"
                               ref={this.endTime}
                               onBlur={this.setEndDateTime}/>
                    </div>

                </div>
            )
        }
        else if (this.props.type === "teachers") {
            return (
                <>
                <div className="teachers--filter">
                    <div className="teachers--address">
                        <b>Адрес:</b>
                        <div className="teachers--selection">
                            <select onChange={this.loadTeachers}>
                                <option selected>Выбрать адрес...</option>
                                {this.props.addresses.map(address =>
                                    <option>{address}</option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="teachers--start-period">
                        <b>Начало периода:</b>
                        <input type="date" ref={this.startDate}/>
                        <input className="date--time"
                               type="text" placeholder="9:00"
                               ref={this.startTime}
                               onBlur={this.setStartDateTime}/>
                    </div>
                    <div className="teachers--end-period">
                        <b>Конец периода:</b>
                        <input type="date" ref={this.endDate}/>
                        <input className="date--time"
                               type="text" placeholder="12:00"
                               ref={this.endTime}
                               onBlur={this.setEndDateTime}/>
                    </div>

                </div>
                    <div className="teachers--surname--filter">
                        {
                            arr_RU.map(letter =>
                            <button className="teachers--surname--letter">{letter}</button>
                            )
                           }

                    </div>
                    </>
            )
        }

        else if (this.props.type === "group control"){
            return (
                <>
                <div className="group-control--filter">
                    <div className="group-control--faculty">
                        <b>Факультет:</b>
                        <div className="group-control--selection">
                            <select onChange={this.loadGroups}>
                                <option selected>Выбрать факультет...</option>
                                {this.props.faculties.map(faculty =>
                                    <option>{faculty}</option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="group-control--group">
                        <b>Группа:</b>
                        <div className="group-control--selection">
                            <select onChange={this.loadData}>
                                <option selected>Выбрать группу...</option>
                                {this.props.groupsList ? (
                                    Object.values(this.props.groupsList).map(group =>
                                        <option>{group.name}</option>
                                    )
                                ):
                                    (
                                    null
                                )}

                            </select>
                        </div>
                    </div>
                </div>


                    </>
            )
        }
        else return null;

    }
}

export default FilterComponent;