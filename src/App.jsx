import Calendar from 'calendar-data-generate';
import './App.css';
import React, { useState } from "react";
import AddWeekNumber from './Calender';

function App() {

  return (
    <div className="App-header ">
    <div className='calendar-container'>Calendar : DatePicker</div>
      <AddWeekNumber />
    </div>
  );
}

export default App;
