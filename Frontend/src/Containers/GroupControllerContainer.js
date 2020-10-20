import React from 'react'
import connect from "react-redux/es/connect/connect";
import {getTable} from "../action/tableAction";
import GroupTableComponent from "../Components/DataComponent/TableComponent/GroupTableComponent/groupTable";

class GroupControllerContainer extends React.Component{



    render(){

        return(
            <GroupTableComponent table = {this.props.table} updateTable = {this.props.updateTable}
                    data = {this.props.data}
            />
        )
    }
}
const mapStateToProps = state => ({
    table: state.groupControlReducer
});

const mapDispatchToProps = dispatch => ({
    updateTable:(table)=>{
        dispatch(getTable(table));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupControllerContainer);