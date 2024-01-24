// Ted Strömne fixar Javascript som gömmer och visar element och sådant

// document.getElementById("gameSection")
    // document.getElementById("HandsDiv")
    // document.getElementById("ownHandDiv")
    // document.getElementById("ownHand")
    // document.getElementById("dealerHandDiv")
    // document.getElementById("dealerHand")
    // document.getElementById("btnsDiv")

// function Me() {
//     document.getElementById("hitBtn").disabled = true;
//     document.getElementById("standBtn").disabled = true;
// }

function toRules() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection");
    var contactTitle = document.getElementById("contactTitle");
    menu.style.display = "none";
    game.style.display = "none";
    gameTitle.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "flex";
    rulesTitle.style.display = "block";
    contact.style.display = "none";
    contactTitle.style.display = "none";
}

function toContact() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection")
    var contactTitle = document.getElementById("contactTitle")
    menu.style.display = "none";
    game.style.display = "none";
    gameTitle.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "flex";
    contactTitle.style.display = "block";
}

function MeToo() {
    alert("Yay!");
}

function playBtn() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    menu.style.display = "none";
    game.style.display = "flex";
}

function optBtn() {
    var menu = document.getElementById("menuSection");
    var options = document.getElementById("optSection");
    menu.style.display = "none";
    options.style.display = "flex";
}

function playAudio() {
    document.getElementById('bgMusic').play()
}

function stopAudio() {
    document.getElementById('bgMusic').pause()
}

function raiseVol() {
    if (document.getElementById('bgMusic').volume != 1.0) {
        document.getElementById('bgMusic').volume += 0.1
    }
}

function lowerVol() {
    if (document.getElementById('bgMusic').volume != 0.0) {
        document.getElementById('bgMusic').volume -= 0.1
    }
}

function ldrBrdBtn() {
    var ldrBrd = document.getElementById("leaderboard");
    var menu = document.getElementById("menuSection");
    menu.style.display = "none";
    ldrBrd.style.display = "block";
}

function backToMenu() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection")
    var contactTitle = document.getElementById("contactTitle")
    menu.style.display = "flex";
    game.style.display = "none";
    gameTitle.style.display = "block";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "none";
    contactTitle.style.display = "none";
}

window.onkeydown = keyPressed;

// if esc is pressed, run backToMenu(), which basically is the reverse of playBtn()
function keyPressed(event) {
    if (event.keyCode == 27) {
        backToMenu();
    }
}