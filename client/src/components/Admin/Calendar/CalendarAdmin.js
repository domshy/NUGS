import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react'
import './Calendar.css';

const CalendarAdmin = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <div className="calendar-holder">
            <Calendar onChange={onChange} value={date} />
            {console.log(date)}
        </div>
    )
}

export default CalendarAdmin