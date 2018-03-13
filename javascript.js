var i = 0
var images = []
var time = 1000;

images[0] = 'Magnolia3.jpg';
images[1] = 'Magnolia4.jpg';
images[2] = 'Magnolia1.jpg';
images[3] = 'Magnolia2.jpg';
images[4] = 'Magnolia8.jpg';
images[5] = 'Magnolia9.jpg';

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

var viewer = document.getElementByClassName("viewer") 

