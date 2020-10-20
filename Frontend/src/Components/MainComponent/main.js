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
           <div className="container">
               <div className="row">
                   <div className="col-sm-12">
                    <HeaderComponent/>
                   </div>
                   <div className="col-sm-3">
                    <MenuComponent selectedLine = {this.props.selectedLine}
                                   changeLineIndex = {this.props.changeLineIndex}
                                   prevSelectedLine = {this.props.prevSelectedLine}
                                   getPrevIndex = {this.props.getPrevIndex}
                    />
                   </div>
                       <div className="col-sm-9">
                           <div className="row">
                               <div className="col-sm-12">
                               <FilterDataContainer selectedLine = {this.props.selectedLine}/>
                           </div>

                           </div>
                           </div>

                               <div className="col-sm-12">
                       <FooterComponent/>
                               </div>
               </div>
           </div>
        )
    }
}

export default MainComponent;