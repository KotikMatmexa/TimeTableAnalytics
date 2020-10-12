import React from 'react'
import MenuComponent from "../MenuComponent/index";
import HeaderComponent from "../HeaderComponent/index";
import FooterComponent from "../FooterComponent/index";

import FilterDataContainer from "../../Containers/FilterDataContainer";
import DataComponent from "../DataComponent/index";

class MainComponent extends React.Component{


    render(){
       // console.log(this.props.selectedLine)
        return(
           <>
            <HeaderComponent/>
            <MenuComponent selectedLine = {this.props.selectedLine}
                           changeLineIndex={this.props.changeLineIndex}
                           prevSelectedLine = {this.props.prevSelectedLine}
                           getPrevIndex = {this.props.getPrevIndex}
            />
               <FilterDataContainer selectedLine = {this.props.selectedLine}/>
                <DataComponent/>
               <FooterComponent/>
           </>
        )
    }
}

export default MainComponent;