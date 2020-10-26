import React from 'react'
import './table.css'
import TableComponent from "../TableComponent/table";

class TeacherTableComponent extends React.Component{

    teacherTable = (teacherTable) => this._teacherTable = teacherTable;

    showTeacherInformation = (e, teacher) =>{
        let buttons = document.getElementsByClassName("get-table-button");
        for (let button of buttons){
            button.style.backgroundColor = "";
        }
        e.target.style.backgroundColor = "red";


        if(this._teacherTable.className === "teacher--table")
            this._teacherTable.className = "teacher--table-active"


        this.props.setCurrentTeacher(teacher);
        //this.props.downloadTeacherData(teacher);
    };

    render(){


        return(
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
                   {this.props.teachers.map(teacher =>
                       <tr>
                           <th scope="row">{teacher.firstName} {teacher.patronymic} {teacher.sirName}</th>
                           <td>{teacher.faculty}</td>
                           <td>{teacher.level}</td>
                           <td><button className="get-table-button"
                                       onClick={(e)=>this.showTeacherInformation(e,teacher)}>Посмотреть занятость</button></td>
                       </tr>
                   )}

                   </tbody>
               </table>

              <div className="teacher--table" ref={this.teacherTable}>
               <TableComponent {...this.props}/>
              </div>
           </div>
        )
    }
}

export default TeacherTableComponent;