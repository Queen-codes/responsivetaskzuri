

/* Toggle between showing and hiding the navigation menu links when menu is clicked on */

  function myFunction() {
    var x = document.getElementById("thelinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }