import React from "react";
import { loadTeacherData } from "../../../dataParser";
import DayComponent from "./DayComponent/day";
import "./table.css";
import { teacherData } from "../../../reducer/dataReducer";

class TableComponent extends React.Component {
    render() {
        let teacher = this.props.teacher;
        let events = [];
        //let teacher = loadTeacherData(this.props.id);
      if(teacher) {
          teacher = teacherData(teacher, this.props.dateInterval);
          events = teacher.actualEvents;
      }
        if (this.props.type === "teachers") {
            return teacher ? (
                <div className="table">
                    <div className="table--components">
                        <label title="имя преподавателя">{teacher.educator.name}, {teacher.educator.position_name}</label>
                        <div className="row">
                            {events.map(day =>
                                new Date(day.day).getDay() != 0 ? (
                                    <div className="col-sm-6" key={day.oid}>
                                        <DayComponent day={day} variant="teacher" />
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            ) : null;
        } else if (this.props.type === "audience") {
            return (
                <div className="table">
                    <h6>
                        Аудитория №{" "}
                        {this.props.facultyData.activeAudience.location.number_actual},
                    </h6>
                    <h6>
                        Количество мест:
                        {this.props.facultyData.activeAudience.location.capacity}
                    </h6>
                    <div className="table--components">
                        <div className="row">
                            {this.props.facultyData.activeAudience.events.results.map(day =>
                                new Date(day.day).getDay() != 0 ? (
                                    <div className="col-sm-6" key={day.oid}>
                                        <DayComponent day={day} variant="audience" />
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            );
        } else return null;
    }
}

export default TableComponent;
