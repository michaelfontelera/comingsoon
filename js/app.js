// countdown date
var countDownDate = new Date("Aug 30, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // todays date and time
  var now = new Date().getTime();

  // distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in HTML element with id="cd"
  document.getElementById("cd").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // When countdown is done
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd").innerHTML = "IT's TIME!";
  }
}, 1000);