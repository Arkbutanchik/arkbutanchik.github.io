const targetTime = new Date("April 4, 2025 08:22:00").getTime();

function ChangeDate() {
  var currentTime = new Date().getTime();
  
  var diffInMilliseconds = targetTime - currentTime;
  
  var diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  var diffInMinutes = Math.floor(diffInSeconds / 60);
  var diffInHours = Math.floor(diffInMinutes / 60);
  var diffInDays = Math.floor(diffInHours / 24);
  
  var remainingSeconds = (diffInSeconds % 60).toString();
  var remainingMinutes = (diffInMinutes % 60).toString();
  var remainingHours = (diffInHours % 24).toString();
  var remainingDays = diffInDays.toString();
  
  if (remainingDays.length == 1) {
    remainingDays = "0" + remainingDays;
  }
  if (remainingHours.length == 1) {
    remainingHours = "0" + remainingHours;
  }
  if (remainingMinutes.length == 1) {
    remainingMinutes = "0" + remainingMinutes;
  }
  if (remainingSeconds.length == 1) {
    remainingSeconds = "0" + remainingSeconds;
  }
  
  document.getElementById("date").innerHTML = `${remainingDays}:${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
}

ChangeDate();
setInterval(ChangeDate, 1000);