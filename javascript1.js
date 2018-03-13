var i = 0
var images = []
var time = 2000;

images[0] = 'Recipes1.jpg';
images[1] = 'Recipes2.jpg';
images[2] = 'Recipes3.jpg';
images[3] = 'Recipes10.jpg';
images[4] = 'Recipes4.jpg';
images[5] = 'Recipes5.jpg';
images[5] = 'Recipes12.jpg';
images[6] = 'Recipes6.jpg';
images[7] = 'Recipes7.jpg';
images[8] = 'Recipes13.jpg';
images[9] = 'Recipes9.jpg';

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