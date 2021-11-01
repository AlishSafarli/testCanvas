let img = new Image(); // your img elements have a width of 500 from css, but the image data is much larger. we want to work with raw image here
let can = document.getElementById('myCan');
let ctx = can.getContext('2d');
let can2 = document.getElementById('myCan2');
let ctx2 = can2.getContext('2d');
let canImage = new Image();
canImage.id = "pic";
img.onload = function () {

	let iw = img.width;
	let ih = img.height;

	let iw2 = canImage.width;
	let ih2 = canImage.height;
	if (iw > 1000) {
		can.style.width = 400;
		resizeImg(img);
	}
	else {
		can.width = iw * 1.2; //making canvas a bit wider so that the spacing will fit inside it
		can.height = ih;

		const sliceWidth = iw / 3;
		const spacing = iw * 0.1;
		for (let i = 0; i < 3; i++) {
			ctx.drawImage(img, sliceWidth * i, 0, sliceWidth, ih, (sliceWidth + spacing) * i, 0, sliceWidth, ih);
		}
	}

}
function resizeImg(pic) {
	let resizingPicW = pic.width;
	resizingPicW = 500;
	let resizingPicH = resizingPicW / 1.5;
	can2.width = resizingPicW;
	can2.height = resizingPicH;
	ctx2.drawImage(img, 0, 0, resizingPicW, resizingPicH);
}
//I want to take that pic but it is empty
const dataURI = can2.toDataURL();

img.src = "https://mralish.com/imgs/me_watch.jpg";
resizeImg(img);
document.getElementById('myImg').src = dataURI;
//img.src = "dog.jpg";
// img.width = 600;
// img.height = 250;

