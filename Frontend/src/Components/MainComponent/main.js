import React from 'react'
import MenuComponent from "../MenuComponent/index";
import HeaderComponent from "../HeaderComponent/index";
import FooterComponent from "../FooterComponent/index";

import FilterDataContainer from "../../Containers/FilterDataContainer";
import DataComponent from "../DataComponent/index";
import {faculties} from "../../testData";

class MainComponent extends React.Component{


    render(){
        console.log(this.props)
        return(
           <div className="container">
               <div className="row">
                   <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <HeaderComponent/>
                   </div>
                   <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <MenuComponent selectedLine = {this.props.selectedLine}
                                   changeLineIndex = {this.props.changeLineIndex}
                                   changeType = {this.props.changeType}
                                   prevSelectedLine = {this.props.prevSelectedLine}
                                   getPrevIndex = {this.props.getPrevIndex}
                    />
                   </div>
                       <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                           <div className="row">
                               <div className="col-sm-12">
                               <FilterDataContainer
                                   selectedLine = {this.props.selectedLine}
                                   filterType = {this.props.type}
                                   isLoadAudienceData = {this.props.isLoadAudienceData}
                                   isLoadTeachersData = {this.props.isLoadTeachersData}
                                   isLoadGroupData = {this.props.isLoadGroupData}
                                   loadAudienceData = {this.props.loadAudienceData}
                                   loadTeachersData = {this.props.loadTeachersData}
                                   loadGroupsData = {this.props.loadGroupsData}
                                   />
                           </div>
                           </div>
                           </div>

               </div>
           </div>
        )
    }
}

export default MainComponent;