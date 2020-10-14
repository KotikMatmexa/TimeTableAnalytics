import React from 'react'
import './table.css'
import TableComponent from "../TableComponent/table";

class TeacherTableComponent extends React.Component{

    showTeacherInformation = (e) =>{
        let buttons = document.getElementsByClassName("get-table-button");
        for (let button of buttons){
            button.style.backgroundColor = "";
        }
        e.target.style.backgroundColor = "red";

        let table_active = document.getElementsByClassName("teacher--table")[0];
        if(table_active)
            document.getElementsByClassName("teacher--table")[0].className = "teacher--table-active"

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
                   <tr>
                       <th scope="row">Щербаков</th>
                       <td>Биологический</td>
                       <td>доцент</td>
                       <td><button className="get-table-button" onClick={this.showTeacherInformation}>Посмотреть занятость</button></td>
                   </tr>
                   <tr>
                       <th scope="row">Ильин</th>
                       <td>Мат-мех</td>
                       <td>доцент</td>
                       <td><button className="get-table-button" onClick={this.showTeacherInformation}>Посмотреть занятость</button></td>
                   </tr>

                   </tbody>
               </table>
              <div className="teacher--table">
               <TableComponent type="teachers"/>
              </div>
           </div>
        )
    }
}

export default TeacherTableComponent;