var coordinateX;
var coordinateY;
var object;

function move() {
    coordinateX = document.getElementsByName('x-coordinate')[0].value;
    coordinateY = document.getElementsByName('y-coordinate')[0].value;
    object = document.getElementById('airplane')
    object.style.left = coordinateX + 'px';
    object.style.top = coordinateY + 'px';
}