const bg = "#21063a";
const fg = "#c8bbf0";
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

if (screen.width == 360) {
  //nav element
  //changing the #logo size
  var nav = document.querySelector("nav");
  var logo = document.querySelectorAll("#logo");
  logo.forEach(function (logo) {
    logo.style.fontSize = "15px";
  });
  //changing padding of nav bar

  var navbar = document.getElementById("navbar");
  navbar.innerHTML = `<a href="#"><span class="material-icons" style="color: ${fg}; height: 15px;">menu</span></a>`;
  navbar.style.width = "10%";
}
