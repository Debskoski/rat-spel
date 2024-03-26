let honger = 10;
const voerpunt = document.querySelector("#hongerlevelpunt");
const voerknop = document.querySelector("#etengeven");

function geefEten() {
    honger = Math.min(10, honger + 1);
    voerpunt.textContent = honger;
}

function disableButtons() {
    voerknop.disabled = true;
    slaapknop.disabled = true;
    speelknop.disabled = true;
}

voerknop.addEventListener("click", geefEten);
function checkDood() {
    if (honger <= 0 || slapen <= 0 || spelen <= 0) {
        disableButtons();
        normalerat.src = "images/dead.png";
        normalerat.style.width = "400px"; 
       
    } else if (honger === 5) {
        normalerat.src = "images/honger.png";
        normalerat.style.width = "900px"; 
     
    } else if (slapen === 5) {
        normalerat.src = "images/slapen.png";
        normalerat.style.width = "900px"; 
       
    } else if (spelen === 5) {
        normalerat.src = "images/spelen.png";
        normalerat.style.width = "900px"; 
      
    } else {
        normalerat.src = "images/rat.png";
        normalerat.style.width = "900px"; 
        
    }
}

/* Alle plaatjes, gemaakt via canva, gameboy, kaas, rip & bedje van iconenbibliotheek canva */




function etenomlaag() {
    honger = Math.max(0, honger - 1);
    voerpunt.textContent = honger;
    checkDood();
}

setInterval(etenomlaag, 4000);

let slapen = 10;
const slaappunt = document.querySelector("#slaaplevelpunt");
const slaapknop= document.querySelector("#slapenklik");

function geefSlaap() {
    slapen = Math.min(10, slapen + 1);
    slaappunt.textContent = slapen;
    checkDood();
}

slaapknop.addEventListener("click", geefSlaap);

function slaapomlaag() {
    slapen = Math.max(0, slapen - 1);
    slaappunt.textContent = slapen;
    checkDood();
}

setInterval(slaapomlaag, 10000);

let spelen = 10;
const speelpunt = document.querySelector("#verveellevelpunt");
const speelknop= document.querySelector("#spelenklik");

let level = 0
const levelomhoog = document.querySelector("#leeftijdlevelpunt")
const normalerat =document.querySelector("#rat")


function geefspelen() {
   spelen = Math.min(10, spelen + 1);
    speelpunt.textContent = spelen;
    if (spelen === 9){
        levelomhoog.textContent = level + 1;
    }
}

speelknop.addEventListener("click", geefspelen);

function spelenomlaag() {
    spelen = Math.max(0, spelen - 1);
    speelpunt.textContent = spelen;
}

setInterval(spelenomlaag, 3000);

function checkLevelUp() {
    if (honger === 10 || slapen === 10 || spelen === 10) {
        level++;
        levelomhoog.textContent = level;

        if (honger === 10) {
            honger = 9;
        }
        if (slapen === 10) {
            slapen = 9;
        }
        if (spelen === 10) {
            spelen = 9;
        }
    }
    
    if(level == 50) { 
        normalerat.src = "images/dead.png";
        normalerat.style.width = "400px";
        alert("Je rat is overleden aan ouderdom");
    }
}



setInterval(checkLevelUp, 1000);

const restartKnop = document.getElementById("restart");

restartKnop.addEventListener("click", function() {

    location.reload();
})

const geluiden = ['tussen.m4a', 'tussen2.m4a', 'kat.m4a'];
function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function speelRandomGeluid() {
  const randomIndex = randomizer(0, geluiden.length - 1);
  const geluid = new Audio(geluiden[randomIndex]);
  geluid.play();
}

const aantalKeer = 5;

const vertraging = 3000; 

for (let i = 0; i < aantalKeer; i++) {
  setTimeout(() => {
    speelRandomGeluid();
  }, i * vertraging);
}




