// client/src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { format, parse } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Sample events for the calendar
const events = [
  {
    title: 'Meeting with John',
    start: new Date(2024, 11, 2, 10, 0), // December 2, 2024, 10:00 AM
    end: new Date(2024, 11, 2, 11, 0),   // December 2, 2024, 11:00 AM
    desc: 'Discuss project updates and roadmap.',
  },
  {
    title: 'Workout Session',
    start: new Date(2024, 11, 2, 18, 0), // December 2, 2024, 6:00 PM
    end: new Date(2024, 11, 2, 19, 0),   // December 2, 2024, 7:00 PM
    desc: 'Cardio and strength training session.',
  },
  // You can add more events here dynamically
];

const localizer = momentLocalizer(format);  // This will use date-fns for formatting

const CalendarComponent = () => {
  const [calendarEvents, setCalendarEvents] = useState(events);

  // Fetch events from API (replace with your API call)
  useEffect(() => {
    // Example of how you might fetch events dynamically
    // fetch('/api/events')
    //   .then(res => res.json())
    //   .then(data => setCalendarEvents(data));
  }, []);

  // Handle event selection (e.g., display a modal with event details)
  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}\nDescription: ${event.desc}`);
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        popup
      />
    </div>
  );
};

export default CalendarComponent;
