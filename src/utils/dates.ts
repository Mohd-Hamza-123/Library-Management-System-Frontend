export function getDateTime() {
    
  const date = new Date();

  const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const optionsDay:  Intl.DateTimeFormatOptions = { weekday: 'long' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

  const formattedDate = date.toLocaleDateString('en-US', optionsDate);
  const formattedDay  = date.toLocaleDateString('en-US', optionsDay);
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

  return `${formattedDate} | ${formattedDay}, ${formattedTime}`;
}


