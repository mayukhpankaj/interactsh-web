import React from 'react';

const DisplayDate = ({ utcDate }) => {
  // Convert UTC date string to Date object
  const dateObject = new Date(utcDate);

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC', // Set the time zone to UTC
  }).format(dateObject);

  return <div>{formattedDate}</div>;
};

export default DisplayDate;