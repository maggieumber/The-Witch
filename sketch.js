var TwirlDistort;

function preload() {

	TwirlDistort = loadAnimation('assets/twistDistort_0000.png', 'assets/twistDistort_0005.png');
	//by default animations loop but it can be changed
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	animation(TwirlDistort, 0, 0);
}