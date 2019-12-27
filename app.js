function clock() {
  const fullDate = new Date();
  const hour = fullDate.getHours();
  const minutes = fullDate.getMinutes();
  const seconds = fullDate.getSeconds();

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minutes").innerHTML = ":" + minutes;
  document.getElementById("seconds").innerHTML = ":" + seconds;
}

setInterval(clock, 100);
