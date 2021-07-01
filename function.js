
function myFunction() {
  var txt;
  if (confirm("Would you like to add this item to your cart?")) {
  } else {
    alert("You pressed Cancel!");
  }
  document.getElementById("demo").innerHTML = txt;
}
