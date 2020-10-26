import React from 'react'
import TableComponent from "./TableComponent/table";
import './data.css'
import TeacherTableComponent from "./TeacherTableComponent/teacherTable";
import GroupTableComponent from "./TableComponent/GroupTableComponent/groupTable";
import GroupControllerContainer from "../../Containers/GroupControllerContainer";



class DataComponent extends React.Component{


    render(){




        if(this.props.type === "audience"){
            return(
                <div className="data--section">

                    <div className="data--table">
                        <div className="data--header">
                            <label>Адрес</label>
                            <select>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <TableComponent type="audience"/>
                    </div>
                    <div className="data--table">
                        <div className="data--header">
                            <label>Адрес</label>
                            <select>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <TableComponent type="audience"/>
                    </div>

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