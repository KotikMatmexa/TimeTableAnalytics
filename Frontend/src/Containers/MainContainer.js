import React from 'react'
import MainComponent from "../Components/MainComponent/index";
import {getLine, getPrevLine} from "../action/menuAction";
import connect from "react-redux/es/connect/connect";
import {getFilterType} from "../action/filterAction";
import {getTeachersList, loadAudienceData, loadGroupsData, loadTeachersData} from "../action/dataAction";
import {getFacultiesData} from "../action/tableAction";

class MainContainer extends React.Component{

    changeType = (index) =>{

        switch (Number(index)) {
            case 0:
                this.props.changeFilterType("audience");
             //   this.props.loadFacultiesList(null,null, null);
                break;
            case 1:
                this.props.changeFilterType("teachers");
                this.props.loadAudienceData(false);
                break;
            case 2:
                this.props.changeFilterType("group control");
                this.props.loadAudienceData(false);
                break;
        }
    };


    render(){

        return(
            (this.props.selectedLine > -1) ?(
                <MainComponent selectedLine = {this.props.selectedLine}
                               changeType = {this.changeType}
                               changeLineIndex={this.props.changeLineIndex}
                               prevSelectedLine = {this.props.prevSelectedLine}
                               getPrevIndex = {this.props.getPrevIndex}
                               type={this.props.filterType}
                               isLoadAudienceData = {this.props.isLoadAudienceData}
                               isLoadTeachersData = {this.props.isLoadTeachersData}
                               isLoadGroupData = {this.props.isLoadGroupData}
                               loadAudienceData = {this.props.loadAudienceData}
                               loadTeachersData = {this.props.loadTeachersData}
                               loadGroupsData = {this.props.loadGroupsData}
                >
                    {this.props.children}
                </MainComponent>)
                :
                (null)
        )
    }
}
const mapStateToProps = state => ({
    isLoadAudienceData: state.loadAudienceDataReducer,
    isLoadTeachersData:state.loadTeachersDataReducer,
    isLoadGroupData:state.loadGroupDataReducer,
    selectedLine:state.menuIndexReducer,
    prevSelectedLine: state.menuPrevIndexReducer,
    filterType:state.filterTypeReducer,
    facultiesList: state.facultiesReducer,
    teachers: state.teachersReducer
});

const mapDispatchToProps = dispatch => ({

    changeLineIndex:(index)=>{
        dispatch(getLine(index))
    },
    getPrevIndex:(index) =>{
        dispatch(getPrevLine(index))
    },
    changeFilterType:(type)=>{
        dispatch(getFilterType(type))
    },

    loadAudienceData:(flag) =>{
        dispatch(loadAudienceData(flag))
    },
    loadTeachersData:(flag) =>{
        dispatch(loadTeachersData(flag))
    },
    loadGroupsData:(flag) =>{
        dispatch(loadGroupsData(flag))
    },
    loadFacultiesList:(a,b,c) =>{
        dispatch(getFacultiesData(a,b,c))
    },
    loadTeachersList: (address) => {
        dispatch(getTeachersList(address));
    },


});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);