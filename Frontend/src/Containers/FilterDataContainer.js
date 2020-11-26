import React from 'react'
import {getFilterType, setFaculty, setFilteredTeachersListByLetter} from "../action/filterAction";
import connect from "react-redux/es/connect/connect";
import {loadGroups, setActiveGroup} from "../action/groupAction";
import {loadFacultiesList, setActiveAudience, getFacultiesData} from "../action/tableAction";
import {loadData,getTeachersList, getTeachersData, loadAddresses,
    setActiveAddresses,
    setEndDate, setStartDate, setDateInterval, getAddresses} from "../action/dataAction";
import DataComponent from "../Components/DataComponent/data";
import AudienceFilterComponent from "../Components/FilterComponent/audienceFilter";
import TeachersFilterComponent from "../Components/FilterComponent/teachersFilter";
import GroupFilterComponent from "../Components/FilterComponent/groupFilter";
import FacultyDataComponent from "../Components/DataComponent/facultydata";
import FacultyDataContainer from "./FacultyDataContainer";
import {addressesList} from "../dataParser";


class FilterDataContainer extends React.Component{

    cat = (cat) => this._cat = cat;

    componentWillMount(){
        //запрос к бэку
         this.props.getAddresses();
    }

    changeType = (index) =>{

      switch (Number(index)) {
          case 0:
              this.props.changeFilterType("audience");
              this.props.loadGroups(null);
              break;
          case 1:
              this.props.changeFilterType("teachers");
              this.props.loadGroups(null);
              break;
          case 2:
              this.props.changeFilterType("group control");
              break;
      }

    };

    draw = (timePassed) => {
        this._cat.style.left = timePassed / 5 + 'px';
    };

    startLoaderCat = () => {
        let start = Date.now(); // запомнить время начала

        let timer = setInterval(()=> {
            // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;

            if (timePassed >= 2000) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
            }

            // отрисовать анимацию на момент timePassed, прошедший с начала анимации
            this.draw(timePassed);

        }, 20);
    };




    render() {

        this.changeType(this.props.selectedLine);

        if (this.props.filterType === "audience") {
            return (
                <>
                    <AudienceFilterComponent {...this.props} loadCat={this.startLoaderCat}/>
                    {this.props.isLoadData ? (
                            this.props.facultiesList  ? (
                                this.props.facultiesList.count > 0  ?(
                                    this.props.facultiesList.results.map(faculty =>
                                    <FacultyDataContainer key={faculty.address.oid}
                                                          type={this.props.filterType}
                                                          startDate={this.props.startDate}
                                                          endDate={this.props.endDate}
                                                          faculty = {faculty}
                                                          dateInterval = {this.props.dateInterval}
                                    />
                                )):(<h4>Нет данных</h4>)


                        ):(
                            <h4 ref={this.cat}>
                                <div className="d-flex justify-content-center">
                                <div className="spinner-border text-warnin" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                </div>
                            </h4>)) :
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
                            <DataComponent type={this.props.filterType}
                                           teachers={this.props.teachers}
                                           startDate = {this.props.startDate}
                                           endDate = {this.props.endDate}
                                           addresses={this.props.addresses}
                                           teacher={this.props.currentTeacher}
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
        dispatch(getTeachersList(address));
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

    setCurrentTeacher: (teacher, startDate, endDate) => {
        dispatch(getTeachersData(teacher,startDate,endDate))
    },

    getAddresses: () => {
        dispatch(getAddresses())
    },

    setActiveAddresses: (addresses) => {
        dispatch(setActiveAddresses(addresses))
    },

    setFilteredTeachersList: (letter, list) => {
        dispatch(setFilteredTeachersListByLetter(letter, list))
    },

   loadFacultiesList: (addresses,startDate, endDate) => {
        dispatch(getFacultiesData(addresses,startDate, endDate))
    },
    setActiveAudience:(faculty, audience)=>{
        dispatch(setActiveAudience(faculty, audience))
    },
    setDateInterval: (startDate, endDate) => {
        dispatch(setDateInterval(startDate, endDate))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDataContainer);