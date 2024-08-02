import React from "react";
import './FeatureColumn.css';

const newColOne = () => {
    return (
        <>
            <div id="col-one">
                <div id="item-ov-one">
                    <img id="todo-ov" src="images/icon-todo.svg" alt="notepad" />
                    <p id="note-ov">To-do List</p>
                </div>
                <div id="item-ov-two">
                    <img id="calendar-ov" src="images/icon-calendar.svg" alt="" />
                    <p id="cal-ov">Calendar</p>
                </div>
                <div id="item-ov-three">
                    <img id="reminder-ov" src="images/icon-reminders.svg" alt="" />
                    <p id="rem-ov">Reminders</p>
                </div>
                <div id="item-ov-four">
                    <img id="planning-ov" src="images/icon-planning.svg" alt="" />
                    <p id="plan-ov">Planning</p>
                </div>
            </div>
        </>
    )
}

export default newColOne;