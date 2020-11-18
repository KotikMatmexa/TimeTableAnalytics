import React from 'react'
import TableComponent from "./TableComponent/table";
import './data.css'
import TeacherTableComponent from "./TeacherTableComponent/teacherTable";
import GroupControllerContainer from "../../Containers/GroupControllerContainer";

class DataComponent extends React.Component{

    cabinet = () => cabinet => this._cabinet = cabinet;

    loadAudience = (e, faculty) => {

        let cabinet = e.target.value;
        this.props.setActiveAudience(faculty,[cabinet]);
    };

    render(){

        if(this.props.type === "audience"){
            return(
                <div className="data--section">

                    { this.props.facultiesList.map((faculty) =>

                        <div className="data--table">
                            <div className="data--header">
                                <label>{faculty.address}</label>
                                <select onChange={(e)=>this.loadAudience(e,faculty)}>
                                    {faculty.cabinets.map((cabinet) =>
                                        <option>{cabinet}</option>
                                    )}
                                </select>
                            </div>
                            {faculty.activeAudiences ?
                                (<TableComponent dateInterval = {this.props.dateInterval}
                                                 type={this.props.type}
                                                 activeAudiences = {faculty.activeAudiences}/>):
                                (null)}

                        </div>
                    )}

                </div>
            )
        }
        if(this.props.type === "teachers"){
            return(
                <div className="data--section">
                    <div className="data--table">
                        <TeacherTableComponent  {...this.props} />
                    </div>
                </div>
            )
        }
        if(this.props.type === "group control"){
            return(
                <div className="data--section">
                        <GroupControllerContainer {...this.props}/>
                </div>
            )
        }

    }
}

export default DataComponent;