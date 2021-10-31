let img = document.getElementById('img2');
let can = document.getElementById('can');
let ctx = can.getContext('2d');

img.onload = function () {
	let iw = img.width;
	let ih = img.height;

	can.width = iw;
	can.height = ih;

	for (let i = 0; i <= 3; i++) {

		ctx.drawImage(img, 0, 0, iw, ih, 0, 0, iw / i, ih);
	}

}
img.src = "https://mralish.com/imgs/me_watch.jpg"

