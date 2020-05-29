var cookies = 0;

function cookieClick(number) {
  cookies = cookies + number;
  document.getElementById('cookies').innerHTML = cookies;
}

var cursors = 0;

function buyCursor() {
  var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
  if(cookies >= cursorCost) {
    cursors = cursors + 1;
    cookies = cookies - cursorCost;
    document.getElementById('cursors').innerHTML = cursors;
    document.getElementById('cookies').innerHTML = cookies;
  }
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
  document.getElementById('cursorCost').innerHTML = nextCost;
}

window.setInterval(function() {
  cookieClick(cursors);
}, 1000);

function save() {
  var save = {
    cookies: cookies,
    cursors: cursors
  }
  localStorage.setItem("save", JSON.stringify(save));
  console.log(save);
}

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
  console.log(savegame);
}

function reset() {
    localStorage.removeItem("save");
    console.log(save);
}
