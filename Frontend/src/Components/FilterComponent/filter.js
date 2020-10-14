import React from 'react'
import './filter.css'

class FilterComponent extends React.Component{

    loadGroups = (e) =>{
        console.log(e.target.selectedIndex)
    };

    render(){
        console.log(this.props.filterType)
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
                            <select>
                                <option selected>1</option>
                                <option>2</option>
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
                <div className="group-control--filter">
                    <div className="group-control--faculty">
                        <b>Факультет:</b>
                        <div className="group-control--selection">
                            <select onChange={this.loadGroups}>
                                <option selected>Выберете факультет...</option>
                                {this.props.faculties.map(faculty =>
                                    <option>{faculty}</option>
                                )}

                            </select>
                        </div>
                    </div>
                    <div className="group-control--group">
                        <b>Группа:</b>
                        <div className="group-control--selection">
                            <select>
                                <option selected>Выберете группу...</option>
                                <option>первая</option>
                                <option>вторая</option>
                            </select>
                        </div>
                    </div>
                </div>
            )
        }
        else return null;

    }
}

export default FilterComponent;