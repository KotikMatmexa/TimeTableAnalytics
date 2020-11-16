import React from 'react'
import {getFilterType, setFaculty, setFilteredTeachersListByLetter} from "../action/filterAction";
import connect from "react-redux/es/connect/connect";
import {loadGroups, setActiveGroup} from "../action/groupAction";
import {loadFacultiesList, setActiveAudience} from "../action/tableAction";
import {loadData,loadTeachers, setCurrentTeacher, loadAddresses,
    setActiveAddresses,
    setEndDate, setStartDate, setDateInterval} from "../action/dataAction";
import DataComponent from "../Components/DataComponent/data";
import AudienceFilterComponent from "../Components/FilterComponent/audienceFilter";
import TeachersFilterComponent from "../Components/FilterComponent/teachersFilter";
import GroupFilterComponent from "../Components/FilterComponent/groupFilter";
import FacultyDataComponent from "../Components/DataComponent/facultydata";
import FacultyDataContainer from "./FacultyDataContainer";
import {addressesList} from "../dataParser";

class FilterDataContainer extends React.Component{

    componentWillMount(){
        let addresses = addressesList();
        this.props.loadAddresses(addresses);
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

    render() {
        this.changeType(this.props.selectedLine);

        console.log(this.props)
        if (this.props.filterType === "audience") {
            return (
                <>
                    <AudienceFilterComponent {...this.props}/>
                    {this.props.isLoadData ? (
                            this.props.facultiesList.map(faculty =>
                                <FacultyDataContainer
                                    type={this.props.filterType}
                                                      data={this.props.activeGroupData}
                                               startDate={this.props.startDate}
                                               endDate={this.props.endDate}
                                               faculty = {faculty}
                                               setActiveAudience = {this.props.setActiveAudience}
                                               dateInterval = {this.props.dateInterval}
                                />

                            )

                        ) :
                        (null)
                    }
                </>
            )
        }
        else if (this.props.filterType === "teachers") {
            return (
                <>
                    <TeachersFilterComponent {...this.props}/>
                    {this.props.isLoadData ? (
                            <DataComponent type={this.props.filterType} data={this.props.activeGroupData}
                                           teachers={this.props.teachers}
                                           addresses={this.props.addresses}
                                           activeAddresses={this.props.activeAddresses}
                                           teacher={this.props.currentTeacher}
                                           startDate={this.props.startDate}
                                           endDate={this.props.endDate}
                                           filteredTeachersList = {this.props.filteredTeachersList}
                                           setCurrentTeacher={this.props.setCurrentTeacher}
                                           setFilteredTeachersList = {this.props.setFilteredTeachersList}
                                           dateInterval = {this.props.dateInterval}
                            />
                        ) :
                        (null)
                    }
                </>
            )
        }
        else if (this.props.filterType === "group control") {
            return (
                <>
                    <GroupFilterComponent {...this.props}/>
                    {this.props.isLoadData ? (
                            <DataComponent type={this.props.filterType} data={this.props.activeGroupData}
                                           teachers={this.props.teachers}
                                           addresses={this.props.addresses}
                                           activeAddresses={this.props.activeAddresses}
                                           teacher={this.props.currentTeacher}
                                           startDate={this.props.startDate}
                                           endDate={this.props.endDate}
                                           setCurrentTeacher={this.props.setCurrentTeacher}
                                           filteredTeachersList = {this.props.filteredTeachersList}
                            />
                        ) :
                        (null)
                    }
                </>
            )
        }
    }
}
const mapStateToProps = state => ({
    filterType:state.filterTypeReducer,
    groupsList: state.groupsReducer,
    isLoadData: state.loadDataReducer,
    activeGroupData: state.groupReducer,
    teachers: state.teachersReducer,
    addresses: state.addressesReducer,
    startDate: state.startDateReducer,
    endDate: state.endDateReducer,
    currentTeacher: state.teacherReducer,
    activeAddresses: state.activeAddressesReducer,
    filteredTeachersList: state.teachersListReducer,
    facultiesList: state.facultiesReducer,
    activeAudiences: state.audiencesReducer,
    dateInterval: state.dateReducer
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
        dispatch(loadTeachers(address));
    },

    loadAddresses: (addresses) =>{
        dispatch(loadAddresses(addresses))
    },

    setStartDateTime: (startDate) => {
        dispatch(setStartDate(startDate));
    },

    setEndDateTime: (endDate) => {
        dispatch(setEndDate(endDate));
    },

    setCurrentTeacher: (teacher) => {
        dispatch(setCurrentTeacher(teacher))
    },

    setActiveAddresses: (addresses) => {
        dispatch(setActiveAddresses(addresses))
    },

    setFilteredTeachersList: (letter, list) => {
        dispatch(setFilteredTeachersListByLetter(letter, list))
    },

    loadFacultiesList: (addresses) => {
        dispatch(loadFacultiesList(addresses))
    },
    setActiveAudience:(faculty, audience)=>{
        dispatch(setActiveAudience(faculty, audience))
    },
    setDateInterval: (startDate, endDate) => {
        dispatch(setDateInterval(startDate, endDate))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDataContainer);