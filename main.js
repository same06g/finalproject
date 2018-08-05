
var thumbnails = document.getElementsByClassName('gallery-option');
var display = document.getElementById('gallery-selected')
var image = document.createElement('img');

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(){
        image.setAttribute('src', this.getAttribute('src'));
        display.innerText = '';
        display.appendChild(image);
    });
}