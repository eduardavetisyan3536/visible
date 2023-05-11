let hid = document.querySelector(".hid");
let open = document.querySelector(".open");
let vis = document.querySelector(".vis");
let blur = document.querySelector(".blur");
const see = document.querySelector("#see");
const txt = document.querySelector("#text");

open.onclick = function (e) {
  open.style.filter = "blur(5px)";
  hid.style.visibility = "visible";
  see.style.visibility = "visible";
};

vis.onclick = function (e) {
  hid.style.visibility = "hidden";
  see.style.visibility = "hidden";
  open.style.filter = "blur(0)";
};

text.addEventListener("keyup",function(e)
{see.innerHTML = e.target.value;}
);