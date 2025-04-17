import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);

      if (alarmTime === currentTime) {
        setAlarmTriggered(true);
        alert('⏰ Alarm ringing!');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [alarmTime]);

  function handleChange(e){
    const [hours, minutes] = e.target.value.split(':');
    const setFor = new Date();
    setFor.setHours(hours);
    setFor.setMinutes(minutes);
    setFor.setSeconds(0);
    setAlarmTime(setFor.toLocaleTimeString());
    setAlarmTriggered(false);
  }

  return (
    <div>
      <h1>Simple Alarm Clock</h1>
      <p>Current Time: {time}</p>

      <input
        type="time"
        onChange={handleChange}
      />
      <p>Alarm Set For: {alarmTime || 'Not Set'}</p>

      {alarmTriggered && <p>🔔 Alarm Triggered!</p>}
    </div>
  );
}

export default App;
