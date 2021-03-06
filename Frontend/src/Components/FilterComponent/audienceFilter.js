import React from "react";
import "./filter.css";

class AudienceFilterComponent extends React.Component {
    startDate = startDate => {
        this._startDate = startDate;
    };
    endDate = endDate => {
        this._endDate = endDate;
    };
    startTime = startTime => {
        this._startTime = startTime;
    };
    endTime = endTime => {
        this._endTime = endTime;
    };
    selectedAddress = selectedAddress => {
        this._selectedAddress = selectedAddress;
    };
    selectedAddresses = selectedAddresses => {
        this._selectedAddresses = selectedAddresses;
    };

    componentWillMount() {}

    startTimeFocus = () => {
        this._startTime.focus();
    };

    endTimeFocus = () => {
        this._endTime.focus();
    };

    loadData = e => {
        let index = e.target.selectedIndex;

        if (index === 0) return false;

        let group = e.target.children[index].text;
        this.props.loadData(true);

        this.props.setActiveGroup(this.props.currentFaculty, group);
    };

    setDateFormat = (date, time) => {
        let current_time = time.split(":");
        // let final_date = date + time;
        let final_date = new Date(date);
        final_date.setHours(current_time[0]);
        final_date.setMinutes(current_time[1]);
        return final_date;
        //      return date+" "+ time;
    };

    //start date
    setStartDateTime = () => {
        let startDay = this._startDate.value;
        let startTime = this._startTime.value;

        if (startTime.length > 5) {
            alert("Неверный формат времени начала");
            return false;
        }
        if (startTime.length > 0 && startTime.indexOf(":") === -1) {
            alert("Неверный формат времени начала");
            return false;
        }

        let date = this.setDateFormat(startDay, startTime);

        this.props.setStartDateTime(date);
    };

    loadTables = () => {
        this.props.loadFacultiesList(null, null, null);
        if (
            this.props.startDate &&
            this.props.endDate &&
            //&&(this._endDate.value)&&
            //(this._endTime.value)&&
            this._selectedAddresses.children.length > 0
        ) {
            let addresses = [];
            let divs = this._selectedAddresses.children;
            for (let div of divs) {
                let data = div.children[1].id;
                addresses.push(data);
            }

            if (this.props.startDate > this.props.endDate) {
                alert("Дата начала должна быть раньше, чем дата конца");
                return false;
            }

            this.props.setDateInterval(this.props.startDate, this.props.endDate);
            this.props.loadFacultiesList(
                addresses,
                this.props.startDate,
                this.props.endDate
            );
            this.props.loadAudienceData(true);
            //загрузка таблиц

            //this.props.loadCat();
        } else {
            alert("Проверьте, что все данные заполнены корректно!");
            return false;
        }
    };

    //end date
    setEndDateTime = () => {
        let endDay = this._endDate.value;
        let endTime = this._endTime.value;

        if (endTime.length > 5) {
            alert("Неверный формат времени конца");
            return false;
        }
        if (endTime.length > 0 && endTime.indexOf(":") === -1) {
            alert("Неверный формат времени конца");
            return false;
        }
        let dateEnd = this.setDateFormat(endDay, endTime);

        this.props.setEndDateTime(dateEnd);
    };

    setAddress = () => {
        // let selectedAddress = this._selectedAddress.textContent;

        const index = this._selectedAddress.selectedIndex;
        const id = document.getElementsByClassName("address--selection")[0]
            .children[0].children[index].value;
        let selectedAddress = document.getElementsByClassName(
            "address--selection"
        )[0].children[0].children[index].textContent;
        let divs = this._selectedAddresses.children;

        for (let div of divs) {
            let id = div.children[1].id;
            if (id == index) return false;
        }

        let div = document.createElement("div");
        div.className = "selected-address";

        let label = document.createElement("label");
        label.id = id;
        label.textContent = selectedAddress;

        let button = document.createElement("button");
        button.textContent = "X";
        button.className = "btn btn-outline-secondary";
        button.type = "button";

        button.addEventListener("click", e => {
            this._selectedAddresses.removeChild(e.target.parentNode);
        });

        div.append(button);
        div.append(label);
        this._selectedAddresses.appendChild(div);
    };

    clean = () => {
        this.props.setStartDateTime(null);
        this.props.setEndDateTime(null);
        this._startDate.value = "";
        this._endDate.value = "";
        this._startTime.value = "";
        this._endTime.value = "";
        this._selectedAddress.selectedIndex = 0;
        this._selectedAddresses.innerHTML = "";
    };

    render() {
        return (
            <div className="filter--menu">
                <div className="audience--filter">
                    <div className="audience--address">
                        <b>Адрес:</b>
                        <div className="address--selection">
                            <select onChange={this.setAddress} ref={this.selectedAddress}>
                                <option>Выбрать адрес...</option>
                                {this.props.addresses
                                    ? this.props.addresses.map(faculty => (
                                        <option
                                            key={faculty.oid}
                                            value={faculty.oid}
                                            data-id={faculty.oid}
                                            title={faculty.building_name}
                                        >
                                            {faculty.street}, {faculty.house}
                                            {faculty.korpus ? ", " + faculty.korpus : null}
                                        </option>
                                    ))
                                    : null}
                            </select>

                            <div
                                className="selected--addresses"
                                ref={this.selectedAddresses}
                            ></div>
                        </div>
                    </div>
                    <div className="audience--start-period">
                        <b>Начало периода:</b>
                        <input
                            type="date"
                            ref={this.startDate}
                            onChange={this.startTimeFocus}
                        />
                        <input
                            className="date--time"
                            type="text"
                            placeholder="9:00"
                            ref={this.startTime}
                            onBlur={this.setStartDateTime}
                        />
                    </div>
                    <div className="audience--end-period">
                        <b>Конец периода:</b>
                        <input
                            type="date"
                            ref={this.endDate}
                            onChange={this.endTimeFocus}
                        />
                        <input
                            className="date--time"
                            type="text"
                            placeholder="12:00"
                            ref={this.endTime}
                            onBlur={this.setEndDateTime}
                        />
                    </div>
                </div>
                <button
                    className="get--button btn btn-secondary"
                    onClick={this.loadTables}
                >
                    Получить
                </button>
                <button className="clean--button btn btn-light" onClick={this.clean}>
                    Очистить все
                </button>
            </div>
        );
    }
}

export default AudienceFilterComponent;
