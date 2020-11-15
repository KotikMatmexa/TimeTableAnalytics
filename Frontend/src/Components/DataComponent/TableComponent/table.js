import React from 'react'
import DataComponent from "../data";
import DayComponent from "./DayComponent/day";
import './table.css'

class TableComponent extends React.Component{


    render(){
        console.log("updated");

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
                    {this.props.activeAudiences.map(audience => <>
                    <span>Аудитория № {audience}, Количество мест: 20</span>
                    <div className="table--components">
                        {this.props.dateInterval.map(date =>
                            <DayComponent date={date} />
                        )}
                    </div>
                            </>
                        )}
                </div>
            )
        }

        else return null;
    }
}

export default TableComponent;