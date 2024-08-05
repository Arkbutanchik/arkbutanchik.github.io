const targetTime = new Date(2024, 10, 5, 17, 8, 0);

function ChangeDate() {
  var currentTime = new Date();
  
  var diffInMilliseconds = targetTime - currentTime;
  
  var diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  var diffInMinutes = Math.floor(diffInSeconds / 60);
  var diffInHours = Math.floor(diffInMinutes / 60);
  var remainingDays = Math.floor(diffInHours / 24);
  
  var remainingSeconds = (diffInSeconds % 60).toString();
  var remainingMinutes = (diffInMinutes % 60).toString();
  var remainingHours = (diffInHours % 24).toString();
  
  if (remainingHours.length == 1){
    remainingHours = "0"+remainingHours;
  }
  if (remainingMinutes.length == 1){
    remainingMinutes = "0"+remainingMinutes;
  }
  if (remainingSeconds.length == 1){
    remainingSeconds = "0"+remainingSeconds;
  }
  document.getElementById("date").innerHTML = `${remainingDays} ${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
}


ChangeDate();
setInterval(ChangeDate, 10);

