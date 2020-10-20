import React from 'react'
import {getFilterType, setFaculty} from "../action/filterAction";
import connect from "react-redux/es/connect/connect";
import FilterComponent from "../Components/FilterComponent/index";
import {faculties} from "../testData";
import {loadGroups, setActiveGroup} from "../action/groupAction";
import {loadData,loadTeachers,loadAddresses} from "../action/dataAction";
import DataComponent from "../Components/DataComponent/data";

class FilterDataContainer extends React.Component{

    componentWillMount(){
       // this.props.loadAddresses();
    }

    changeType = (index) =>{

      switch (Number(index)) {
          case 0:
              this.props.changeFilterType("audience");
              break;
          case 1:
              this.props.changeFilterType("teachers");
              break;
          case 2:
              this.props.changeFilterType("group control");
              break;
      }
    };

    render(){
        this.changeType(this.props.selectedLine);
        return(
            <>
            <FilterComponent
                            addresses = {this.props.addresses}
                            teachers = {this.props.teachers}
                            loadTeachersList = {this.props.loadTeachersList}
                            type={this.props.filterType}
                             faculties = {faculties}
                             currentFaculty = {this.props.faculty}
                             groupsList = {this.props.groupsList}
                             setFaculty = {this.props.setFaculty}
                             loadGroups = {this.props.loadGroups}
                             isLoadData = {this.props.isLoadData}
                             loadData = {this.props.loadData}
                             activeGroupData = {this.props.activeGroupData}
                             setActiveGroup = {this.props.setActiveGroup}
            />
                {this.props.isLoadData?(
                        <DataComponent type={this.props.filterType} data={this.props.activeGroupData}
                            teachers = {this.props.teachers}
                        />
                    ):
                    (null)
                }
            </>
        )
    }
}
const mapStateToProps = state => ({
    filterType:state.filterTypeReducer,
    faculty: state.facultyReducer,
    groupsList: state.groupsReducer,
    isLoadData: state.loadDataReducer,
    activeGroupData: state.groupReducer,
    teachers: state.teachersReducer,
    addresses: state.addressesReducer
});

const mapDispatchToProps = dispatch => ({

    changeFilterType: (type) => {
        dispatch(getFilterType(type))
    },

    setFaculty: (faculty) => {
        dispatch(setFaculty(faculty))
    },

    loadGroups:(groups) => {
        dispatch(loadGroups(groups))
    },

    loadData:(flag) =>{
        dispatch(loadData(flag))
    },

    setActiveGroup:(faculty,group) => {
        dispatch(setActiveGroup(faculty, group))
    },

    loadTeachersList: (address) => {
        dispatch(loadTeachers(address))
    },

    loadAddresses: () =>{
        dispatch(loadAddresses())
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDataContainer);