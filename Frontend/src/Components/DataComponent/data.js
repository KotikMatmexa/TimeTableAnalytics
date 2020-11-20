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
console.log(this.props)
        if(this.props.type === "teachers"){
            return(
                this.props.teachers?(
                    this.props.teachers.hasOwnProperty("count") ? (
                        this.props.teachers.count > 0? ( <div className="data--section">
                            <div className="data--table">
                                <TeacherTableComponent  {...this.props} />
                            </div>
                        </div>):(<h4>Нет преподавателей по этому адресу</h4>)
                           ):(<h4>Загрузка списка...</h4>)
                 ):(null))

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