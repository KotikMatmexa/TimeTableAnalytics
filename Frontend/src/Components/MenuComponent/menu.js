import React from 'react'
import './menu.css'

class MenuComponent extends React.Component{

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
        this.props.changeLineIndex(currentIndex);
    };

    render(){
        return(
           <div className="menu">
               <div className="btn-group-vertical" onClick={this.changeIndex}>
                   <button data-index="0">
                       Занятость аудиторий</button>
                   <button data-index="1">Занятость преподавателей</button>
                   <button data-index="2">Контроль группы</button>
               </div>
           </div>

        )
    }
}

export default MenuComponent;