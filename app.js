const countdown = () => {
  const countDate = new Date('November 14, 2021 23:35:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour );
  const textMinute = Math.floor((gap % hour) / minute );
  const textSecond = Math.floor((gap % minute) / second );

  const dayText = document.querySelector('.day');
  const hourText = document.querySelector('.hour');
  const minuteText = document.querySelector('.minute');
  const secText = document.querySelector('.second');

  const mainBx = document.querySelector('.coming-soon');

  dayText.innerText = textDay;
  hourText.innerText = textHour;
  minuteText.innerText = textMinute;
  secText.innerText = textSecond;

  const timeBx = document.querySelectorAll(".container-time");

  console.log(gap);

  

  if(gap < 86492042) {
    hourText.style.color = "red";
    timeBx.forEach(e => e.style.color = "red");
  }

  if (gap < 86428433) { mainBx.style.display = "none"; }

  if( dayText === 0 ) {  }

}

setInterval(countdown, 1000);