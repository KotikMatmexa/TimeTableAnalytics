import React from 'react'
import './data.css'
import TeacherTableComponent from "./TeacherTableComponent/teacherTable";
import GroupControllerContainer from "../../Containers/GroupControllerContainer";
import ErrorComponent from "../ErrorComponent/error";

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
                        </div>):(<ErrorComponent data="Нет преподавателей по этому адресу"/>)
                           ):(<h4>Загрузка списка...</h4>)
                 ):( <h4>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-warnin" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </h4>))

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