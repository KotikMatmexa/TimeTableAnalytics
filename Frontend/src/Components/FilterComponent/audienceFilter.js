import React from 'react'
import './filter.css'

class AudienceFilterComponent extends React.Component{

    startDate = (startDate) => {this._startDate = startDate};
    endDate = (endDate) => {this._endDate = endDate};
    startTime = (startTime) => {this._startTime = startTime};
    endTime = (endTime) => {this._endTime = endTime};
    selectedAddress = (selectedAddress) => {this._selectedAddress = selectedAddress};
    selectedAddresses = (selectedAddresses) => {this._selectedAddresses = selectedAddresses};


    loadData = (e) => {
        let index = e.target.selectedIndex;

        if(index === 0)
            return false;

        let group = e.target.children[index].text;
        this.props.loadData(true);
        this.props.setActiveGroup(this.props.currentFaculty, group);
    };

    setDateFormat = (date, time) => {
        let current_time = time.split(":");
        let final_date = new Date(date);
        final_date.setHours(current_time[0]);
        final_date.setMinutes(current_time[1]);
        return final_date
    };

    //start date
    setStartDateTime = () =>{
        let startDay = this._startDate.value;
        let startTime = this._startTime.value;
        if (!startDay || !startTime) {
            alert("Выберите дату и время начала!");
            return false
        }
        let date = this.setDateFormat(startDay, startTime);

        console.log(date);
        this.props.setStartDateTime(date);
        };


    loadTables = () => {

        if ((this._startDate.value)&&
            (this._startTime.value)&&(this._endDate.value)&&
            (this._endTime.value)&&(this._selectedAddresses.children.length >0)){
            let addresses = [] ;
            let divs = this._selectedAddresses.children;
            for (let div of divs) {
                let data = div.children[1].textContent;
                addresses.push(data);
            }

            //загрузка таблиц
            this.props.loadData(true);
            this.props.loadFacultiesList(addresses);
            this.props.setDateInterval(this.props.startDate, this.props.endDate)
            //this.props.setActiveAddresses(addresses);
        }
        else {
            alert("Должны быть заполнены все данные");
            return false;
        }
    };

    //end date
    setEndDateTime = () =>{

        let endDay = this._endDate.value;
        let endTime = this._endTime.value;
        if (!endDay || !endTime) {
            alert("Выберите дату и время окончания!");
            return false
        }

        let dateEnd = this.setDateFormat(endDay, endTime);

        console.log(dateEnd);
        this.props.setEndDateTime(dateEnd);

    };

    setAddress = () => {

        let selectedAddress = this._selectedAddress.value;
        const index = this._selectedAddress.selectedIndex;
        let divs = this._selectedAddresses.children;


        for (let div of divs) {
            let id = div.children[1].id;
            if (id == index)
                return false
        }

        let div = document.createElement("div");
        div.className = "selected-address";

        let label = document.createElement("label");
        label.id = index;
        label.textContent = selectedAddress;
        let button = document.createElement("button");
        button.textContent = "X";
        button.className = "btn btn-outline-secondary";
        button.type = "button";

        button.addEventListener("click",(e)=>{
            this._selectedAddresses.removeChild(e.target.parentNode);
        });

        div.append(button);
        div.append(label);
        this._selectedAddresses.appendChild(div);
    };

    render(){

            return(
                <>
                <div className="audience--filter">
                    <div className="audience--address">
                        <b>Адрес:</b>
                        <div className="address--selection">
                           <select onChange={this.setAddress} ref={this.selectedAddress} >
                               <option>Выбрать адрес...</option>
                               {Object.values(this.props.addresses).map(faculty =>
                                   <option value={faculty.address} title={faculty.name}>{faculty.address}</option>
                               )}
                           </select>

                            <div className="selected--addresses" ref={this.selectedAddresses}>
                            </div>
                        </div>
                    </div>
                    <div className="audience--start-period">
                        <b>Начало периода:</b>
                        <input type="date" ref={this.startDate}/>
                        <input className="date--time"
                               type="text" placeholder="9:00"
                               ref={this.startTime}
                               onBlur={this.setStartDateTime}/>
                    </div>
                    <div className="audience--end-period">
                        <b>Конец периода:</b>
                        <input type="date" ref={this.endDate}/>
                        <input className="date--time"
                               type="text" placeholder="12:00"
                               ref={this.endTime}
                               onBlur={this.setEndDateTime}/>
                    </div>
                </div>
                    <button className="get--button" onClick={this.loadTables}>Получить</button>
                    </>
            )
        }

}

export default AudienceFilterComponent;