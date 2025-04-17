const currentTimeDisplay = document.getElementById('current-time');
    const alarmInput = document.getElementById('alarm-input');
    const alarmSetDisplay = document.getElementById('alarm-set');
    const alarmStatus = document.getElementById('alarm-status');
    const alarmSound = document.getElementById('alarm-sound');
    const stopButton = document.getElementById('stop-button');

    let alarmTime = '';
    let alarmTriggered = false;

    function updateTime() {
      const now = new Date().toLocaleTimeString();
      currentTimeDisplay.textContent = `Current Time: ${now}`;

      if (alarmTime && now === alarmTime) {
        if (!alarmTriggered) {
          alarmTriggered = true;

          // Play sound slightly before alert
          setTimeout(() => {
            alarmSound.play();
          }, 100);

          alarmStatus.textContent = '🔔 Alarm Triggered!';
          stopButton.style.display = 'inline-block';
        }
      }
    }

    alarmInput.addEventListener('change', function() {
      const [hours, minutes] = this.value.split(':');
      const alarmDate = new Date();
      alarmDate.setHours(hours);
      alarmDate.setMinutes(minutes);
      alarmDate.setSeconds(0);

      alarmTime = alarmDate.toLocaleTimeString();
      alarmSetDisplay.textContent = `Alarm Set For: ${alarmTime}`;
      alarmTriggered = false;
      alarmStatus.textContent = '';
      stopButton.style.display = 'none';
    });

    stopButton.addEventListener('click', function() {
      alarmSound.pause();
      alarmSound.currentTime = 0;
      alarmTriggered = false;
      alarmStatus.textContent = 'Alarm stopped.';
      stopButton.style.display = 'none';
    });

    setInterval(updateTime, 1000);