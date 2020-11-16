import React from 'react'
import {getFilterType, setFaculty, setFilteredTeachersListByLetter} from "../action/filterAction";
import connect from "react-redux/es/connect/connect";
import {loadFacultiesList, setActiveAudience} from "../action/tableAction";
import {loadData,
    setEndDate, setStartDate, setDateInterval} from "../action/dataAction";
import FacultyDataComponent from "../Components/DataComponent/facultydata";


class FacultyDataContainer extends React.Component{

    componentDidMount(){
   //     this.props.setActiveAudiences(this.props.faculty, [])
    }
    render() {
            return (
                <>

                        <FacultyDataComponent
                            type = {this.props.type}
                            data={this.props.activeGroupData}
                            startDate={this.props.startDate}
                            endDate={this.props.endDate}
                            facultyData={this.props.faculty}
                            dateInterval={this.props.dateInterval}
                            setActiveAudience = {this.props.setActiveAudience}
                        />



                </>
            )

    }
}
const mapStateToProps = state => ({
    addresses: state.addressesReducer,
    startDate: state.startDateReducer,
    endDate: state.endDateReducer,
    facultyData: state.audiencesReducer,
    dateInterval: state.dateReducer
});

const mapDispatchToProps = dispatch => ({

    changeFilterType: (type) => {
        dispatch(getFilterType(type))
    },

    loadData:(flag) =>{
        dispatch(loadData(flag))
    },

    setStartDateTime: (startDate) => {
        dispatch(setStartDate(startDate));
    },

    setEndDateTime: (endDate) => {
        dispatch(setEndDate(endDate));
    },

    setActiveAudience:(faculty, audience, timeInterval)=>{
        dispatch(setActiveAudience(faculty, audience, timeInterval))
    },
    setDateInterval: (startDate, endDate) => {
        dispatch(setDateInterval(startDate, endDate))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FacultyDataContainer);