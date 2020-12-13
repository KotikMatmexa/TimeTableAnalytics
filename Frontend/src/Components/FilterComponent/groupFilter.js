import React from "react";
import "./filter.css";

class GroupFilterComponent extends React.Component {
    group = group => {
        this._group = group;
    };
    faculty = faculty => {
        this._faculty = faculty;
    };

    componentDidMount() {
        this.props.getFacultiesList();
    }

    loadGroups = () => {
        let index = this._faculty.selectedIndex;

        if (index === 0) return false;

        let facultyId = this._faculty.value;

        //  this.props.setFaculty(faculty);

        this.props.getGroupsList(facultyId);

        this._group.selectedIndex = 0;
        //  this.props.loadData(false);
    };

    loadData = () => {
        let index = this._group.selectedIndex;

        if (index === 0) {
            alert("Выберите группу!");
            return false;
        }

        let groupId = this._group.value;
    //    let faculty = this._faculty.value;

        this.props.loadData(true);
        this.props.getGroupData(this._faculty.value,groupId);
    };

    render() {
        console.log(this.props)
        return (
            <div className="filter--menu">
                <div className="group-control--filter">
                    <div className="group-control--faculty">
                        <b>Факультет:</b>
                        <div className="group-control--selection">
                            <select onChange={this.loadGroups} ref={this.faculty}>
                                <option selected>Выбрать факультет...</option>

                                {this.props.faculties
                                    ? this.props.faculties.map(faculty => (
                                        <option value={faculty.oid}>{faculty.name}</option>
                                    ))
                                    : null}
                            </select>
                        </div>
                    </div>
                    <div className="group-control--group">
                        <b>Группа:</b>
                        <div className="group-control--selection">
                            <select ref={this.group}>
                                <option selected>Выбрать группу...</option>
                                {this.props.groupsList
                                    ? Object.values(this.props.groupsList).map(group => (
                                        <option value={group.id}>{group.name}</option>
                                    ))
                                    : null}
                            </select>
                        </div>
                    </div>
                </div>

                <button
                    className="get--button btn btn-secondary"
                    onClick={this.loadData}
                >
                    Получить
                </button>
            </div>
        );
    }
}

export default GroupFilterComponent;
