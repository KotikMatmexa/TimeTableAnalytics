import React from 'react'
import DataComponent from "../data";
import DayComponent from "./DayComponent/day";
import './table.css'

class TableComponent extends React.Component{


    render(){
        console.log(this.props)
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
                    <h6>Аудитория № {this.props.facultyData.activeAudience.location.number_actual},</h6>
                        <h6>Количество мест:
                        {this.props.facultyData.activeAudience.location.capacity}</h6>
                    <div className="table--components">
                            <DayComponent audienceData={this.props.facultyData.activeAudience} />
                    </div>
                </div>
            )
        }

        else return null;
    }
}

export default TableComponent;