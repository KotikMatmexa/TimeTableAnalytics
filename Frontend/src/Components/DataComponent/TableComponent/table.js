import React from 'react'
import DataComponent from "../data";
import DayComponent from "./DayComponent/day";
import './table.css'

class TableComponent extends React.Component{


    render(){

        if(this.props.type === "teachers"){
            return(<div className="table">
                <div className="table--components">
                    <label>{this.props.teacher.sirName}</label>


                </div>
            </div>)
        }

        else if (this.props.type === "audience") {

            return (
                <div className="table">
                    <h6>Аудитория № {this.props.faculty.activeAudience.location.number_actual},</h6>
                        <h6>Количество мест:
                        {this.props.faculty.activeAudience.location.capacity}</h6>
                    <div className="table--components">
                        <div className="row">
                        {this.props.faculty.activeAudience.events.results.map( day =>
                            new Date(day.day).getDay() != 0 ? (
                                <div className="col-sm-6">
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