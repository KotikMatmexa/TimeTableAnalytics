import React from 'react'
import FacultyDataComponent from "../Components/DataComponent/facultydata";
import {setAudiences} from "../reducer/tableReducer";
import ErrorComponent from "../Components/ErrorComponent/error";


class FacultyDataContainer extends React.Component {


    constructor(props){
        super();
        this.state = {
            facultyData: props.faculty,
            loadData:false
        }

    }

    componentDidMount(){
        let faculty;

     //   if(!localStorage.getItem("faculties_data")){
       //     localStorage.setItem("faculties_data", JSON.stringify(this.state.facultyData));
            faculty =  this.props.faculty;
        //}
       // else {
         //   faculty =  JSON.parse(localStorage.getItem("faculties_data"));
       // }
            if(faculty.locationWithEventsDto.count > 0) {
                this.setThisAudience(
                    faculty,
                    faculty.locationWithEventsDto.results[0].location.number_actual,
                    this.props.dateInterval);
            }

    }

    setThisAudience = (address, audience, date) =>{
        this.setState({
            facultyData: setAudiences(address, audience, date),
            loadData: true
        })
    };

    render() {

        return (
            this.state.loadData ?(

                <FacultyDataComponent
                    type={this.props.type}
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    facultyData={this.state.facultyData}
                    dateInterval={this.props.dateInterval}
                    activeAudience = {this.props.activeAudience}
                    setThisAudience={this.setThisAudience}
                />
                ):( <ErrorComponent
                    data={"Нет данных о факультете по адресу " + this.props.faculty.address.russian_name }/>))


    }
}

export default FacultyDataContainer;