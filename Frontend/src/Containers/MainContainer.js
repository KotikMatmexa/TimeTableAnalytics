import React from 'react'
import MainComponent from "../Components/MainComponent/index";
import {getLine, getPrevLine} from "../action/menuAction";
import connect from "react-redux/es/connect/connect";

class MainContainer extends React.Component{




    render(){
        return(
            (this.props.selectedLine > -1) ?(
                <MainComponent selectedLine = {this.props.selectedLine}
                               changeLineIndex={this.props.changeLineIndex}
                               prevSelectedLine = {this.props.prevSelectedLine}
                               getPrevIndex = {this.props.getPrevIndex}
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
    prevSelectedLine: state.menuPrevIndexReducer
});

const mapDispatchToProps = dispatch => ({

    changeLineIndex:(index)=>{
        dispatch(getLine(index))
    },
    getPrevIndex:(index) =>{
        dispatch(getPrevLine(index))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);