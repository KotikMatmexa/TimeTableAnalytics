import React from 'react'
import DataComponent from "../data";
import DayComponent from "./DayComponent/day";
import './table.css'

class TableComponent extends React.Component{


    render(){

        if(this.props.type === "teachers"){
            return(
                this.props.teacher?( <div className="table">
                    <div className="table--components">
                        <label title="имя преподавателя">{this.props.teacher.name}</label>
                    </div>
                </div>):(null)
               )
        }

        else if (this.props.type === "audience") {

            return (
                <div className="table">
                    <h6>Аудитория № {this.props.facultyData.activeAudience.location.number_actual},</h6>
                        <h6>Количество мест:
                        {this.props.facultyData.activeAudience.location.capacity}</h6>
                    <div className="table--components">
                        <div className="row">
                        {this.props.facultyData.activeAudience.events.results.map( day =>
                            new Date(day.day).getDay() != 0 ? (
                                <div className="col-sm-6" key={day.oid}>
                                    <DayComponent day = {day} />
                                </div>):(null)
                        )}
                        </div>
                    </div>
                </div>
            )
        }

        else return null;
    }
}

export default TableComponent;