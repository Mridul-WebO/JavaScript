// AJAX
let btn = document.getElementById("demo");

function getData() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log(this.responseText);
  };

  xhr.open("GET", "./shareMe.js", true);
  xhr.send();
}
