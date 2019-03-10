import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Flatpickr from 'react-flatpickr'

class App extends Component{

    constructor() {
        super();
        
        this.state = {
            date: new Date()
        };
    }

    /**
     * to retrieve the Date object => dayElem.dateObj.getTime()
     * function to mark the dates
     * 
     * @param {array} m 
     * @param {string} n 
     * @param {object} fp 
     * @param {NodeElement} dayElem 
     */
    onDayCreated(m, n, fp, dayElem)
    {
        const timestamp = dayElem.dateObj.getTime();
        console.log(timestamp,dayElem.dateObj);
        if( timestamp < 1549231200000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<span class="event-day">${dayElem.textContent}</span><div class="aside event-dd-mark"></div><div class="aside event-group-mark"></div><div class="user-event-mark"></div>`;
        } else if (timestamp < 1549317600000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<span class="event-day">${dayElem.textContent}</span><div class="aside event-dd-mark"></div><div class="aside event-group-mark"></div>`;
        } else if (timestamp < 1550786400000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<span class="event-day">${dayElem.textContent}</span><div class="aside event-dd-mark"></div><div class="user-event-mark"></div>`;
        } else if (timestamp < 1551132000000) {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<span class="event-day">${dayElem.textContent}</span></div><div class="aside event-group-mark"></div><div class="user-event-mark"></div>`;
        } else if (timestamp === 1551218400000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<span class="event-day">${dayElem.textContent}</span><div class="aside event-dd-mark"></div><div class="user-event-mark"></div>`;
        } else if (timestamp === 1551304800000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<div class="aside event-dd-mark">${dayElem.textContent}</div>`;
        } else if (timestamp === 1552082400000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<div class="aside event-group-mark">${dayElem.textContent}</div>`;
        } else if (timestamp === 1551736800000)
        {
            dayElem.classList.add('has-event');
            dayElem.innerHTML = `<div class="aside user-event-mark">${dayElem.textContent}</div>`;
        }
    }

    render()
    {
        const {date} = this.state;
        return (
            <Fragment>
                <Flatpickr 
                    onDayCreate={this.onDayCreated.bind(this)}
                    data-inline
                    value={date}
                    onChange={date => { this.setState({date}) }} />
            </Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
