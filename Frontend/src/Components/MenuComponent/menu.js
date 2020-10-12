import React from 'react'

class MenuComponent extends React.Component{

    //меняем раздел
    changeIndex = (e) => {
        let prevIndex = this.props.prevSelectedLine;
        let currentIndex = e.target.getAttribute("data-index");

        if(prevIndex!== - 1)
            document.querySelector(`li[data-index="${prevIndex}"]`).style.backgroundColor = "";

        e.target.style.backgroundColor = "red";
        this.props.getPrevIndex(currentIndex);
        this.props.changeLineIndex(currentIndex);
    };

    render(){
        return(
           <div className="menu">
               <ul onClick={this.changeIndex}>
                   <li data-index="0">Занятость аудиторий</li>
                   <li data-index="1">Занятость преподавателей</li>
                   <li data-index="2">Контроль группы</li>
               </ul>
           </div>

        )
    }
}

export default MenuComponent;