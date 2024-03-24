//const bg = "#21063a";
const fg = "#c8bbf0";
const bgspcl = "#0d0217";
const cursor = "#c8bbf0";
const color0 = "#21063a";
const color1 = "#6e48db";
const color2 = "#9d329b";
const color3 = "#9752a5";
const color4 = "#9d3cd6";
const color5 = "#9a5ddc";
const color6 = "#c667e3";
const color7 = "#c8bbf0";
const color8 = "#8c82a8";
const color9 = "#6e48db";
const color10 = "#9d329b";
const color11 = "#9752a5";
const color12 = "#9d3cd6";
const color13 = "#9a5ddc";
const color14 = "#c667e3";
const color15 = "#c8bbf0";

if (screen.width >= 360) {
  var navbar = document.getElementById("navbar");
  navbar.innerHTML = `<a href="#"><span class="material-icons" id="menu" style="color: ${fg}; height: 10px;">menu</span></a>`;
  //menu bar features
  document.querySelector("#menu").addEventListener("click", menubaropen);
  var menubar = false;
  function menubaropen() {
    //created a div for pop-in menu
    const newDiv = document.createElement("div");
    //innerhtml for the pop-in menu
    newDiv.innerHTML =
      '<a href="#" id="back" style="margin: 0px 0px 0px 200px"><span class="material-icons" style="height: 10px;">arrow_forward</span></a><a href="#">Contributors</a><a href="#">Contribute</a><a href="#">Login</a>';
    //styling
    newDiv.style.cssText = `position: fixed; top: 0; right: 0; height: 100vh; width: 250px; background-color: ${bgspcl}; backdrop-filter: blur(20px); opacity: 1; display: flex; flex-direction: column; border-left: solid; border-color: ${color1};`;
    newDiv.querySelectorAll("a").forEach((element) => {
      element.style.cssText = `padding: 15px 10px; color: ${fg}; text-decoration: none;`;
    });
    document.body.appendChild(newDiv);
  }
}
