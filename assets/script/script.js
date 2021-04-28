//landing-page
new TypeIt("#companionMethods", {
    speed: 100,
    waitUntilVisible: true,
  })
    .type("eggs on toast?", {delay: 300})
    .delete(14)
    .type('salad?', {delay: 300})
    .delete('5')
    .pause(300)
    .type('omething yummy...')
    .pause(500)
    .delete(19)
    .type("let's find out!")
    .go();


//second-pg
let mainText = document.getElementById("main-text") ; 

let m1 = document.getElementById("m1");
m1.addEventListener("mouseover", function() {
    mainText.style.color = "pink";
});
m1.addEventListener("mouseout", function() {
    mainText.style.color = "black";
});

let m2 = document.getElementById("m2");
m2.addEventListener("mouseover", function() {
    mainText.style.color = "#ffd466";
});
m2.addEventListener("mouseout", function() {
    mainText.style.color = "black";
});

let m3 = document.getElementById("m3");
m3.addEventListener("mouseover", function() {
    mainText.style.color = "#afc985";
});
m3.addEventListener("mouseout", function() {
    mainText.style.color = "black";
});

let m4 = document.getElementById("m4");
m4.addEventListener("mouseover", function() {
    mainText.style.color = "#adb2f0";
});
m4.addEventListener("mouseout", function() {
    mainText.style.color = "black";
});   

//unhiding pop-ups

function unhidePop(popID) {
   document.getElementById('backdrop-overlay').classList.remove('hidden') 
   document.getElementById(popID).classList.remove('hidden') = popID;
}

document.getElementsByClassName("mood-pics").onclick = unhidePop;

function unhidePop1() {
	unhidePop('result1');
}
document.getElementById("m1").onclick = unhidePop1

function unhidePop2() {
	unhidePop('result2');
}
document.getElementById("m2").onclick = unhidePop2

function unhidePop3() {
	unhidePop('result3');
}
document.getElementById("m3").onclick = unhidePop3

function unhidePop4() {
	unhidePop('result4');
}
document.getElementById("m4").onclick = unhidePop4

function closePop(popID) {
	document.getElementById('backdrop-overlay').classList.add('hidden');
	document.getElementById(popID).classList.add('hidden');
}

function closeAllPop() {
	var popupBox = document.getElementsByClassName('result');
	for (var i = 0; i < popupBox.length; i++) {
		var id = popupBox[i].id;
		closePop(id);
	}
}
document.getElementById("backdrop-overlay").onclick = closeAllPop;
document.getElementById("no1").onclick = closeAllPop;
document.getElementById("no2").onclick = closeAllPop;
document.getElementById("no3").onclick = closeAllPop;
document.getElementById("no4").onclick = closeAllPop;