import React from 'react'
import MainComponent from "../Components/MainComponent/index";
import {getFilterType} from "../action/filterAction";
import connect from "react-redux/es/connect/connect";
import FilterComponent from "../Components/FilterComponent/index";

class FilterDataContainer extends React.Component{

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
        this.changeType(this.props.selectedLine);
        return(
            <FilterComponent type={this.props.filterType}/>
        )
    }
}
const mapStateToProps = state => ({
    filterType:state.filterTypeReducer
});

const mapDispatchToProps = dispatch => ({

    changeFilterType:(type)=>{
        dispatch(getFilterType(type))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDataContainer);