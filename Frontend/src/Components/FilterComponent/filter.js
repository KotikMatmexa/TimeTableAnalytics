import React from 'react'
import './filter.css'
import DataComponent from "../DataComponent/data";

class FilterComponent extends React.Component{

    loadGroups = (e) =>{
        let index = e.target.selectedIndex;
        let faculty = e.target.children[index].text;
        this.props.setFaculty(faculty);
        this.props.loadGroups(faculty);
        document.getElementsByClassName("group-control--selection")[1].children[0].selectedIndex = 0;
        this.props.loadData(false);
    };

    loadData = (e) => {
        let index = e.target.selectedIndex;
        let group = e.target.children[index].text;
        this.props.loadData(true);
        this.props.setActiveGroup(this.props.currentFaculty, group);
    };

    loadTeachers = (e) => {
        let index = e.target.selectedIndex;
        let address = e.target.children[index].text;
        this.props.loadData(true);
        this.props.loadTeachersList(address);
    };

    render(){
        if(this.props.type === "audience"){
            return(
                <div className="audience--filter">
                    <div className="audience--address">
                        <b>Адрес:</b>
                        <div className="address--selection">
                           <select>
                               <option selected>1</option>
                               <option>2</option>
                           </select>
                        </div>
                    </div>
                    <div className="audience--start-period">
                        <b>Начало периода:</b>
                        <div className="date--selection">
                            дата
                        </div>
                    </div>
                    <div className="audience--end-period">
                        <b>Конец периода:</b>
                        <div className="date--selection">
                            дата
                        </div>
                    </div>

                </div>
            )
        }
        else if (this.props.type === "teachers") {
            return (
                <>
                <div className="teachers--filter">
                    <div className="teachers--address">
                        <b>Адрес:</b>
                        <div className="teachers--selection">
                            <select onChange={this.loadTeachers}>
                                <option selected>Выбрать адрес...</option>
                                {this.props.addresses.map(address =>
                                    <option>{address}</option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="teachers--start-period">
                        <b>Начало периода:</b>
                        <div>
                            дата
                        </div>
                    </div>
                    <div className="teachers--end-period">
                        <b>Конец периода:</b>
                        <div>
                            дата
                        </div>
                    </div>

                </div>
                    <div className="teachers--surname--filter">
                        А,Б,В,Г,Д...
                    </div>
                    </>
            )
        }

        else if (this.props.type === "group control"){
            return (
                <>
                <div className="group-control--filter">
                    <div className="group-control--faculty">
                        <b>Факультет:</b>
                        <div className="group-control--selection">
                            <select onChange={this.loadGroups}>
                                <option selected>Выбрать факультет...</option>
                                {this.props.faculties.map(faculty =>
                                    <option>{faculty}</option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="group-control--group">
                        <b>Группа:</b>
                        <div className="group-control--selection">
                            <select onChange={this.loadData}>
                                <option selected>Выбрать группу...</option>
                                {this.props.groupsList ? (
                                    Object.values(this.props.groupsList).map(group =>
                                        <option>{group.name}</option>
                                    )
                                ):
                                    (
                                    null
                                )}

                            </select>
                        </div>
                    </div>
                </div>


                    </>
            )
        }
        else return null;

    }
}

export default FilterComponent;