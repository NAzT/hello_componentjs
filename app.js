var blink = document.querySelector('.blink');

setInterval(function () {
  blink.style.visibility = getComputedStyle(blink).visibility === 'hidden'
    ? 'visible'
    : 'hidden';
}, 300);


var dropAnywhere = require("component~drop-anywhere@0.7.0");

var drop = dropAnywhere(function(e){
  e.items.forEach(function(item){
    console.log(item);
  });
});