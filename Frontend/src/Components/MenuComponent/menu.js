import React from 'react'
import './menu.css'

class MenuComponent extends React.Component{

    audiences = (ads) => this._audiences = ads;
    teachers = (tchrs) => this._teachers = tchrs;
    groups = (grps) => this._groups = grps;


    componentDidMount(){

        this._audiences.style.backgroundColor = "#e95420";
        this.props.getPrevIndex(0);
        this.props.changeLineIndex(0);
    }

    //меняем раздел
    changeIndex = (e) => {

        if(e.target.tagName === "DIV")
            return false;

        let prevIndex = this.props.prevSelectedLine;
        let currentIndex = e.target.getAttribute("data-index");

        if(prevIndex!== - 1)
            document.querySelector(`button[data-index="${prevIndex}"]`).style.backgroundColor = "";

        e.target.style.backgroundColor = "#e95420";

        this.props.getPrevIndex(currentIndex);
    //    this.props.changeLineIndex(currentIndex);
        this.props.changeType(currentIndex);
    };

    render(){
        return(
           <div className="menu">
               <div className="btn-group-vertical" onClick={this.changeIndex}>
                   <button className="btn btn-light" data-index="0" ref={this.audiences}>
                       Занятость аудиторий</button>
                   <button className="btn btn-light" data-index="1" ref={this.teachers}>Занятость преподавателей</button>
                   <button className="btn btn-light" data-index="2" ref={this.groups}>Контроль группы</button>
               </div>
           </div>

        )
    }
}

export default MenuComponent;