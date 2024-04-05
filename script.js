const targetTime = new Date(2024, 3, 6, 17, 8, 0);

function ChangeDate() {
  var currentTime = new Date();
  
  var diffInMilliseconds = targetTime - currentTime;
  
  var diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  var diffInMinutes = Math.floor(diffInSeconds / 60);
  var diffInHours = Math.floor(diffInMinutes / 60);
  
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
  document.getElementById("date").innerHTML = `ДО ОРЕНБУРГА: ${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
}

function setRandomGradientBackground() {
  var h = Math.floor(Math.random() * 360);
  var s = Math.floor(Math.random() * 50+50);
  var l = Math.floor(Math.random() * 20)+20;
  var color1 = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  h+=Math.random()*50+50;
  if (h>360){
    h-=360;
  }
  var color2 = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  document.body.style.background = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
}

ChangeDate();
setInterval(ChangeDate, 10);


setRandomGradientBackground();
