import React from "react";
import "./table.css";
import TableComponent from "../TableComponent/table";

class TeacherTableComponent extends React.Component {
    teacherTable = teacherTable => (this._teacherTable = teacherTable);
    arr_RU = [
        "А",
        "Б",
        "В",
        "Г",
        "Д",
        "Е",
        "Ё",
        "Ж",
        "З",
        "И",
        "Й",
        "К",
        "Л",
        "М",
        "Н",
        "О",
        "П",
        "Р",
        "С",
        "Т",
        "У",
        "Ф",
        "Х",
        "Ц",
        "Ч",
        "Ш",
        "Щ",
        "Э",
        "Ю",
        "Я"
    ];

    showTeacherInformation = (e, teacher) => {
        let buttons = document.getElementsByClassName("get-table-button");
        for (let button of buttons) {
            button.style.backgroundColor = "";
        }
        e.target.style.backgroundColor = "red";

        if (this._teacherTable.className === "teacher--table")
            this._teacherTable.className = "teacher--table-active";

        this.props.setCurrentTeacher(teacher);
        //this.props.downloadTeacherData(teacher);
    };

    selectLetter = e => {
      e.target.style.backgroundColor = "#e95420";
    };

    cancelLetter = e =>{
        e.target.style.backgroundColor = "";
    };
    //
    teachersFilter = e => {
        let letter = e.target.textContent;

        this.props.setFilteredTeachersList(letter, this.props.teachers);
    };
    render() {

        return (
            <>
                <div className="teachers--surname--filter">
                    {this.arr_RU.map(letter => (
                        <button
                            className="teachers--surname--letter"
                            onClick={this.teachersFilter}
                            onMouseMove={this.selectLetter}
                            onMouseOut={this.cancelLetter}
                        >
                            {letter}
                        </button>
                    ))}
                </div>

                {this.props.filteredTeachersList.length > 0 ? (
                    this.props.filteredTeachersList == "Нет фамилий с такой буквы" ? (
                        <div>
                            {" "}
                            <h5>{this.props.filteredTeachersList}</h5>
                        </div>
                    ) : (
                        <div className="teacher-table">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Фамилия</th>
                                    <th scope="col">Факультет</th>
                                    <th scope="col">Звание</th>
                                    <th scope="col">Занятость</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.filteredTeachersList.map(teacher => (
                                    <tr>
                                        <th scope="row">
                                            {teacher.firstName} {teacher.patronymic}{" "}
                                            {teacher.sirName}
                                        </th>
                                        <td>{teacher.faculty}</td>
                                        <td>{teacher.level}</td>
                                        <td>
                                            <button
                                                className="get-table-button"
                                                onClick={e => this.showTeacherInformation(e, teacher)}
                                            >
                                                Посмотреть занятость
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            <div className="teacher--table" ref={this.teacherTable}>
                                <TableComponent {...this.props} />
                            </div>
                        </div>
                    )
                ) : (
                    <>
                        <div className="teachers--table">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Фамилия</th>
                                <th scope="col">Занятость</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.teachers.results.map(teacher => (
                                <tr>
                                    <th scope="row">
                                        {teacher.name}
                                    </th>
                                   <td>

                                        <button
                                            className="get-table-button"
                                            onClick={e => this.showTeacherInformation(e, teacher)}
                                        >
                                            Посмотреть занятость
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    <div className="teacher--table" ref={this.teacherTable}>
                    <TableComponent {...this.props} />
                    </div>
                    </>
                )}
            </>
        );
    }
}

export default TeacherTableComponent;
