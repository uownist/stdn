function displayDateTime() {
   const dateTime = new Date();
   const date = dateTime.toLocaleDateString();
   const time = dateTime.toLocaleTimeString();
   document.getElementById('dateTime').innerText = date+' '+time;
}
setInterval(displayDateTime,1000);

