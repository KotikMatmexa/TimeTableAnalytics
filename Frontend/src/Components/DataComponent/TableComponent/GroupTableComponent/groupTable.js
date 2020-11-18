import React from 'react'
import './table.css'


class GroupTableComponent extends React.Component{



    render(){
        return(
           this.props.data ? (
           <div className="teacher-table">
               <table className="table table-bordered">
                   <thead className="thead-dark">
                   <tr>
                       <th scope="col">Дисциплина</th>
                       <th scope="col">Назначенное кол. часов</th>
                       <th scope="col">Требуемое кол. часов</th>
                       <th scope="col">%</th>
                       <th scope="col">Остаток, ч.</th>
                   </tr>
                   </thead>
                   <tbody>
                   {//Object.values(Object.values(Object.values(this.props.table)[0].groups)[0].data).map(data =>
                       Object.values(this.props.data).map(data =>

                           <tr>
                           <th scope="row">{data.subject}</th>
                           <td>{data.assignedHours}</td>
                           <td>{data.requiredHours}</td>
                           <td>{data.percents}</td>
                           <td>{data.restOfHours}</td>
                       </tr>
                   )}
                   </tbody>
               </table>

           </div>):(null)
        )
    }
}

export default GroupTableComponent;