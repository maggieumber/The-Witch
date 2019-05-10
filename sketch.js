var TwirlDistort;

function preload() {

	TwirlDistort = loadAnimation('assets/twistDistort_0000.png', 'assets/twistDistort_0005.png');
}

function setup() {
	createCanvas(1280, 853);
	background(100);
}

function draw() {
	animation(TwirlDistort, 500, 500);
}