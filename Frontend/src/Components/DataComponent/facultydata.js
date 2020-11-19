import React from 'react'
import TableComponent from "./TableComponent/table";
import './data.css'
import TeacherTableComponent from "./TeacherTableComponent/teacherTable";
import GroupControllerContainer from "../../Containers/GroupControllerContainer";

class FacultyDataComponent extends React.Component{

    cabinet = () => cabinet => this._cabinet = cabinet;

    loadAudiences = (e, faculty) => {
        let cabinet = e.target.value;
        this.props.setThisAudience(faculty,cabinet,this.props.dateInterval);
    };

    render(){
            return(
             <div className="data--section">
                    <div className="data--table">
                        <div className="data--header">
                            <label>{this.props.facultyData.address.russian_name}</label>
                            <select onChange={(e)=>this.loadAudiences(e,this.props.facultyData)}>
                                {Object.values(this.props.facultyData.locationWithEventsDto.results).map((cabinet) =>
                                    <option key={cabinet.location.oid}>{cabinet.location.number_actual}</option>
                                )}
                            </select>
                        </div>
                        {this.props.facultyData.activeAudience ?
                            (<TableComponent {...this.props} />):
                            (null)}

                    </div></div>
            )


    }
}

export default FacultyDataComponent;