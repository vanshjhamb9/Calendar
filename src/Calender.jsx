import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export default function CustomMonthLayout() {
    const today = dayjs();

  return (
    <div className='calendar-container-style'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar minDate={today} showDaysOutsideCurrentMonth fixedWeekNumber={6} />
    </LocalizationProvider>
    </div>
  );
}