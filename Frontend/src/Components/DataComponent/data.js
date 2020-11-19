import React from 'react'
import './data.css'
import TeacherTableComponent from "./TeacherTableComponent/teacherTable";
import GroupControllerContainer from "../../Containers/GroupControllerContainer";

class DataComponent extends React.Component{


    loadAudience = (e, faculty) => {

        let cabinet = e.target.value;
        this.props.setActiveAudience(faculty,[cabinet]);
    };

    render(){

        if(this.props.type === "teachers"){
            return(
                this.props.teachers?(<div className="data--section">
                    <div className="data--table">
                        <TeacherTableComponent  {...this.props} />
                    </div>
                </div>):(null)
            )
        }
        if(this.props.type === "group control"){
            return(
                this.props.data?(
                <div className="data--section">
                        <GroupControllerContainer {...this.props}/>
                </div>
                ):(null)
            )
        }

    }
}

export default DataComponent;