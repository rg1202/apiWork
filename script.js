document.addEventListener('DOMContentLoaded', function() {

var changeBackground = document.querySelector('#changeBackground');
var increaseFont = document.querySelector('#increaseFont');
var decreaseFont = document.querySelector('#decreaseFont');
var paragraph = document.querySelector('#paragraph');
var fontColor = document.querySelector('#changeFontColor');
var hideImage = document.querySelector('#hideImage')
var showImage = document.querySelector('#showImage')
var image = document.querySelector('#image');




changeBackground.addEventListener('click',function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

fontColor.addEventListener('click', function () {
    var randomColor = getRandomColor();
    paragraph.style.color = randomColor;
});

increaseFont.addEventListener('click', function() {
    var currentFontSize = window.getComputedStyle(paragraph).fontSize;
    var newSize = parseInt(currentFontSize) + 1; 
    paragraph.style.fontSize = newSize + 'px';
});

decreaseFont.addEventListener('click', function() {
    var currentFontSize = window.getComputedStyle(paragraph).fontSize; //var only exists in function
    var newSize = parseInt(currentFontSize) - 1; //var only exists in this function
    paragraph.style.fontSize = newSize + 'px';
});

hideImage.addEventListener('click', function() {
    image.style.display = 'none';
});

showImage.addEventListener('click', function() {  
    image.style.display= 'block'

});






//color randomizer to be used by any event listening needing to randomize color//
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color ='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
});