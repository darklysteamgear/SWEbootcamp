
document.addEventListener("mousemove", function(hover){
//console.log(hover.pageX, hover.pageY);
const r = Math.round(hover.pageX *255 / window.innerWidth);
const b = Math.round(hover.pageY * 255 / window.innerHeight);
const color = `rgb(${r}, 0 , ${b})`;
document.body.style.backgroundColor = color;
});