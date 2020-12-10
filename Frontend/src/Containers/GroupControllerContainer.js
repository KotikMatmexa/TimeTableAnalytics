import React from 'react'
import connect from "react-redux/es/connect/connect";
import {getTable} from "../action/tableAction";
import {getFacultiesList, getGroupData, getGroupsList} from "../action/groupAction"
import GroupTableComponent from "../Components/DataComponent/TableComponent/GroupTableComponent/groupTable";

class GroupControllerContainer extends React.Component{


    componentDidMount(){
        this.props.getFacultiesList()
    }

    render(){
        let faculties = this.props.facultiesList;
        let groupsList = this.props.groupsList;
        let group = this.props.group;
        return(
            faculties ?(
                    <GroupTableComponent table = {this.props.table} updateTable = {this.props.updateTable}
                                         data = {this.props.data}
                                         faculties = {faculties}
                                         groupsList = {groupsList}
                                         group = {group}
                                         getGroupsList = {this.props.getGroupsList}
                                         getGroupData = {this.props.getGroupData}
                    />
                ):(null)
        )
    }
}
const mapStateToProps = state => ({
    table: state.groupControlReducer,
    facultiesList: state.facultiesListReducer,
    groupsList: state.groupsReducer,
    activeGroup: state.groupReducer
});

const mapDispatchToProps = dispatch => ({
    getFacultiesList: () =>{
      dispatch(getFacultiesList())
    },
    getGroupsList:(facultyId) => {
        dispatch(getGroupsList(facultyId))
    },
    getGroupData:(groupId) => {
      dispatch(getGroupData(groupId))
    },
    updateTable:(table)=>{
        dispatch(getTable(table));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupControllerContainer);