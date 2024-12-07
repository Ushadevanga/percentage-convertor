var a = document.getElementById("num1");
var b = document.getElementById("num2");
var result = document.getElementById("result");
var form = document.getElementById("form");
form.addEventListener('submit', function(event) {
  if (!num1.value || !num2.value) {
    alert("please enter the values");
  } else {
    var x = parseFloat(num1.value);
    var y = parseFloat(num2.value);
    var div = x / y;
    var percent = div * 100;
    result.innerText = "Answer: " + percent + "%";
    event.preventDefault();
  }

})