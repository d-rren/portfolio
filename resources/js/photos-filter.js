// Source: https://www.w3schools.com/howto/howto_js_portfolio_filter.asp

filterSelection("all") // Execute the function and show all columns

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card-img-zoom");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    // w3RemoveClass(x[i], "d-inline-block");
    x[i].classList.remove('d-inline-block');
    x[i].classList.add('d-none');
    // console.log('removed d-inline-block from ', x[i]);
    // if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "d-inline-block");
    if (x[i].className.indexOf(c) > -1) x[i].classList.add('d-inline-block');
  }
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.filterSelection = filterSelection;
