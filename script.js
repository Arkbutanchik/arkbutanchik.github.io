function ChangeDate() {
  let date1 = new Date();
  let date2 = new Date('4/6/2024');
  let diffDays = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); n =  new Date();


  // Set the target date
  var targetDate = new Date('2024-04-06T17:08:00');

  // Get the current date
  var currentDate = new Date();

  // Calculate the difference in hours
  var hoursDifference = (Math.floor(Math.abs(targetDate - currentDate) / 36e5)%24).toString();
  var minutesDifference = (Math.floor(Math.abs(targetDate - currentDate) / 60000)%60).toString();
  var secondsDifference = (Math.floor(Math.abs(targetDate - currentDate) / 1000)%60).toString();

  var days = "";
  if (diffDays%10 == 1){
    days=" день ";
  }
  if (diffDays%10 == 2 || diffDays%10 == 3 || diffDays%10 == 4){
    days=" дня ";
  }
  if (diffDays%10 == 0 || diffDays%10 == 5 || diffDays%10 == 6 || diffDays%10 == 7 || diffDays%10 == 8 || diffDays%10 == 9){
    days=" дней ";
  }

  console.log(secondsDifference);

  if (hoursDifference.length == 1){
    hoursDifference = "0"+hoursDifference;
  }
  if (minutesDifference.length == 1){
    minutesDifference = "0"+minutesDifference;
  }
  if (secondsDifference.length == 1){
    secondsDifference = "0"+secondsDifference;
  }
  if (diffDays === 0){
    document.getElementById("date").innerHTML = `ДО ОРЕНБУРГА: ${hoursDifference}:${minutesDifference}:${secondsDifference}`;
  }
  else{
    document.getElementById("date").innerHTML = `До Оренбурга: ${diffDays} ${days} ${hoursDifference}:${minutesDifference}:${secondsDifference}`;
  }
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
