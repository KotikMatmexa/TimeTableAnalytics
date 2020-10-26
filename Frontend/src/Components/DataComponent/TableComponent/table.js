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
                    <DayComponent/>
                    <DayComponent/>
                    <DayComponent/>

                </div>
            </div>)
        }

        else if (this.props.type === "audience") {
            return (
                <div className="table">
                    <span>Номер аудитории, количество мест</span>
                    <div className="table--components">
                        <DayComponent/>
                        <DayComponent/>
                        <DayComponent/>

                    </div>
                    <span>Номер аудитории, количество мест</span>
                    <div className="table--components">

                        <DayComponent/>
                        <DayComponent/>
                        <DayComponent/>

                    </div>
                </div>
            )
        }

        else return null;
    }
}

export default TableComponent;