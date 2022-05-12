/** @format */

const menuNav = document.querySelector(".nav-menu");
const skillNav = document.querySelector(".skill-menu");
const expNav = document.querySelector(".exp-menu");
const testNav = document.querySelector(".test-menu");
const contactNav = document.querySelector(".contact-menu");
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});

menuNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});
skillNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});
expNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});
testNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});
contactNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});

// Testemomial
/** @format */

const text1_options = [
	"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores numquam nobis iure ratione aliquid veniam aspernatur explicabo perspiciatis eos reprehenderit ",
	"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores numquam nobis iure ratione aliquid veniam aspernatur explicabo perspiciatis eos",
	"Maiores numquam nobis iure ratione aliquid veniam aspernatur explicabo perspiciatis eos reprehenderit in, nulla quod accusantium illum, dolor sit debitis eius ",
	"Lorem ipsum dolor, sit . Maiores numquam nobis iure ratione aliquid veniam aspernatur explicabo perspiciehenderit in, nulla quod accusantium illum, dolor sit debitis eius voluptatibus!",
];
const text2_options = ["A-Robin L.", "Juli B.", "Selam Dawit", "Romos c."];
const text3_options = ["B-Robin L.", "Juli B.", "Selam Dawit", "Romos c."];
const text4_options = ["C-Robin L.", "Juli B.", "Selam Dawit", "Romos c."];
const text5_options = ["D-Robin L.", "Juli B.", "Selam Dawit", "Romos c."];
const color_options = ["#ffec99", "#FE9968", "#ffc078", "#ffa94d"];
const image_options = [
	"https://www.youtube.com/embed/JntZdudPCoY?autoplay=1&amp;mute=1&amp;controls=0&amp;start=549&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1",
	"https://source.unsplash.com/_ihwcvahzRk",
	"https://source.unsplash.com/_p2gpPRgvek",
	"https://source.unsplash.com/iCTcQqTXaCw",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionText3 = document.getElementById("current-option-text3");
const currentOptionText4 = document.getElementById("current-option-text4");
const currentOptionText5 = document.getElementById("current-option-text5");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionText3.innerText = text3_options[i];
currentOptionText4.innerText = text4_options[i];
currentOptionText5.innerText = text5_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
	i = i + 1;
	i = i % text1_options.length;
	currentOptionText1.dataset.nextText = text1_options[i];

	currentOptionText2.dataset.nextText = text2_options[i];
	currentOptionText3.dataset.nextText = text3_options[i];
	currentOptionText4.dataset.nextText = text4_options[i];
	currentOptionText5.dataset.nextText = text5_options[i];

	mainMenu.style.background = color_options[i];
	carousel.classList.add("anim-next");

	setTimeout(() => {
		currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
	}, 455);

	setTimeout(() => {
		currentOptionText1.innerText = text1_options[i];
		currentOptionText2.innerText = text2_options[i];
		currentOptionText3.innerText = text3_options[i];
		currentOptionText4.innerText = text4_options[i];
		currentOptionText5.innerText = text5_options[i];
		carousel.classList.remove("anim-next");
	}, 650);
};

optionPrevious.onclick = function () {
	if (i === 0) {
		i = text1_options.length;
	}
	i = i - 1;
	currentOptionText1.dataset.previousText = text1_options[i];

	currentOptionText2.dataset.previousText = text2_options[i];

	mainMenu.style.background = color_options[i];
	carousel.classList.add("anim-previous");

	setTimeout(() => {
		currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
	}, 455);

	setTimeout(() => {
		currentOptionText1.innerText = text1_options[i];
		currentOptionText2.innerText = text2_options[i];
		carousel.classList.remove("anim-previous");
	}, 650);
};
