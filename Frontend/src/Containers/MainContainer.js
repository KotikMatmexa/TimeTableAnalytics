import React from 'react'
import MainComponent from "../Components/MainComponent/index";
import {getLine, getPrevLine} from "../action/menuAction";
import connect from "react-redux/es/connect/connect";
import {getFilterType} from "../action/filterAction";

class MainContainer extends React.Component{

    changeType = (index) =>{
        console.log(Number(index));
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
        return(
            (this.props.selectedLine > -1) ?(
                <MainComponent selectedLine = {this.props.selectedLine}
                               changeLineIndex={this.props.changeLineIndex}
                               prevSelectedLine = {this.props.prevSelectedLine}
                               getPrevIndex = {this.props.getPrevIndex}
                               type={this.props.filterType}
                >
                    {this.props.children}
                </MainComponent>)
                :
                (null)
        )
    }
}
const mapStateToProps = state => ({
    selectedLine:state.menuIndexReducer,
    prevSelectedLine: state.menuPrevIndexReducer,
    filterType:state.filterTypeReducer
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);