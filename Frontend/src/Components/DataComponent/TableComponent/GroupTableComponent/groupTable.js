import React from "react";
import "./table.css";

class GroupTableComponent extends React.Component {
    render() {
        console.log(this.props)
        const group = this.props.data;
        return group ? (
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
                    {
                        //Object.values(Object.values(Object.values(this.props.table)[0].groups)[0].data).map(data =>
                       group.map(discipline => (
                            <tr>
                                <th scope="row">{discipline.name}</th>
                                <td>{discipline.assignedHours}</td>
                                <td>{discipline.requiredHours}</td>
                                <td>{discipline.percents}</td>
                                <td>{discipline.restOfHours}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        ) : null;
    }
}

export default GroupTableComponent;
