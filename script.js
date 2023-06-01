function generateRandomNumber() {
  var result = (Math.floor(Math.random() * 90000) + 10000) * Date.now();
  return result;
}

var idcookie = generateRandomNumber();
var date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
var cookie = "user=" + idcookie + "; expires=" + date;
document.cookie;
