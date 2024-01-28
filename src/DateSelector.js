import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Format the date to UTC and pass it to the parent component
    const utcDate = date.toISOString();
    onDateChange(utcDate);
  };

  return (
    <span className='text-black inline'>
      <DatePicker
        id="datePicker"
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        timeFormat="HH:mm"
      />
    </span>
  );
};

export default DateSelector;