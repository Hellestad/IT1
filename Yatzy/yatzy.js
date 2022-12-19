var kastTerning = document.getElementById("kastTerning"); /* Knappen for å kaste terning*/
var spillere = document.getElementById("Spillere"); /*Angir hvem som spiller*/
var deltakere = document.getElementsByClassName("deltakere") /*Deltakerne*/
var antallKast = document.getElementById("antallkast");/*Antall kast*/


let bilde6 = document.createElement("img");

bilde6.className = "terning";
bilde6.id = "bilde6";


bilde6.src = "terning6.png";
bilde6.setAttribute("data-verdi", "6");

// Array av terningene
let terningene = [
  document.getElementById("bilde1"),
  document.getElementById("bilde2"),
  document.getElementById("bilde3"),
  document.getElementById("bilde4"),
  document.getElementById("bilde5"),
  bilde6 
];




//Array som henter radene til tabellen
let tabellArray = [
  document.getElementsByClassName("rad1"),
  document.getElementsByClassName("rad2"),
  document.getElementsByClassName("rad3"),
  document.getElementsByClassName("rad4"),
  document.getElementsByClassName("rad5"),
  document.getElementsByClassName("rad6"),
  document.getElementsByClassName("rad7"),
  document.getElementsByClassName("rad8"),
  document.getElementsByClassName("rad9"),
  document.getElementsByClassName("rad10"),
  document.getElementsByClassName("rad11"),
  document.getElementsByClassName("rad12"),
  document.getElementsByClassName("rad13"),
  document.getElementsByClassName("rad14"),
  document.getElementsByClassName("rad15"),
  document.getElementsByClassName("rad16"),
  document.getElementsByClassName("rad17"),
  document.getElementsByClassName("rad18")
];


//denne funksjonen lar deg skrive navnene til personene som spiller

spillere.onclick = hvemSpiller;

let antallDeltakere = 0;
function hvemSpiller() {
  for (let i = 0; i < deltakere.length; i++) {
    deltakere[i].innerHTML = prompt("Navn på spiller")
    if (deltakere[i].innerHTML !== "") {
      antallDeltakere++;
    }
  }
}

//bytter terningenes bakgrunnsfargen til grønn hvis de trykkes på
function byttFarge(terningNr) {
  if (sumKast == 0) {}
  if (terningene[terningNr - 1].style.backgroundColor == "black") {
    terningene[terningNr - 1].style.backgroundColor = "green";
  }

  else if (terningene[terningNr - 1].style.backgroundColor == "green") {
    terningene[terningNr - 1].style.backgroundColor = "black";
  }
}


function terningBildeNr() {
  return Math.floor((Math.random() * 6) + 1);
}

// denne funksjonen kaster terningene når knappen kast() trykkes
sumKast = 0;
function kast() {
  if (sumKast != 3) { //sjekker om sum kast er 3. om den er mindere enn 3 kjører funksjonen hvis sum=3 kjører ikke funksjonen
    for (let i = 0; i < terningene.length; i++) {
      if (terningene[i].style.backgroundColor != "green") {// sjekker om terningene ikke er grønne denne funksjonen bytter kon terninger med svart bakgrunn
        terningene[i].innerHTML = terningBildeNr();
        terningene[i].src = "terning" + terningBildeNr() + ".png"
      }
    }
    sumKast++;
    antallKast.innerHTML = sumKast;
  }
}

kastTerning.onclick = kast;

for (let i = 0; i < terningene.length; i++)
  terningene[i].style.backgroundColor = "black";



// denne funksjonen bestemmer hva som sjer når man trykker på rad 1-6
function EnTilSeks(radNummer, kolonneNummer) {
  resultat = 0;
  antallGronneTerninger = 0;// definerer verdien til antallGronneTerninger til å være 0
  for (let i = 0; i < terningene.length; i++) {
    if (terningene[i].style.backgroundColor == "green") {
      resultat += radNummer 
      antallGronneTerninger++;
    }
  }
    tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
  
  resetKast();
}


function resetKast() {
  sumKast = 0;

  let antallKastElement = document.getElementById("antallkast");// definerer antallKastElement med å finne den igjennom id-en i html-filen
  if (antallKastElement) {
    antallKastElement.innerHTML = 0; //sjekker om verdiel av antallkast er 0
  }

  let terningene = document.getElementsByClassName("terning"); // definerer terningene med å hente classe navnet .terning i html-filen
  if (terningene) {
    
    for (let i = 0; i < terningene.length; i++) {
      terningene[i].style.backgroundColor = "black"; // endrer terningenes bakrunnsfarge til sort
    }
  }
}










// summerer første summen fra 1-6 og legger til eventuell bonus
function SumEn(radNummer, kolonneNummer) {
  sum = 0;
  if (tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML > 0) { // sjekker om om cellen har en verdi av 0
  }
  else {
      for (let i = 0; i < 7; i++) { // definerer i
          sum += Number(tabellArray[i][kolonneNummer - 1].innerHTML); // definerer sum
      }
      tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML = sum; // Endre innholdet i tabellcellen til sum
      if (sum >= 63) {// sjekker om verdien inni cellen er 63
        tabellArray[radNummer][kolonneNummer - 1].innerHTML = 50;// om sum har en verdi av 63 eller med skal den legge 50 inn i cellen 
      }
      else if (sum < 63) {
        tabellArray[radNummer][kolonneNummer - 1].innerHTML = 0;// hvis sum er under 63 skal den legge 0 inn i bonus cellen
      }

  }
  resetKast();
}


// denne funksjonen skriver ut 20 poeng i rad 9 hvis 5 terninger er grønne når rad 9 blir trykket
function litenStraight(radNummer, kolonneNummer) {
  resultat = 0;

  // Sjekk om alle terningene har grønn bakgrunnsfarge
  let grønneTerninger = terningene.filter(terning => terning.style.backgroundColor == "green");
  if (grønneTerninger.length == 5) {
    resultat = 15;
  }

  tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
  resetKast();
}


// denne funksjonen skriver ut 20 poeng i rad 10 hvis 5 terninger er grønne når rad 10 blir trykket
function Straight(radNummer, kolonneNummer) {
  resultat = 0;
  // Sjekk om alle terningene har grønn bakgrunnsfarge
  let grønneTerninger = terningene.filter(terning => terning.style.backgroundColor == "green");
  if (grønneTerninger.length == 5) {
    resultat = 20;
  }

  tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat;
  resetKast();
}



// denne funksjonen skal gi spilleren en random tall på alle 6 terningene og summere de
function Sjangse(radNummer, kolonneNummer) {
  resultat = 0; // resultat starter summen på 0
  for (let i = 0; i < 5; i++) { // Gjenta 5 ganger
    terning = Math.floor(Math.random() * 6) + 1; // Generer tilfeldig tall mellom 1 og 6
    resultat += terning; // her legger til terningverdien i summen
  }
  tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat; // Endre innholdet i tabellcellen
}



// denne funksjonen skriver ut 50 poeng i rad 12 hvis 5 terninger er grønne når rad 12 blir trykket
function yatzy(radNummer, kolonneNummer) {
  resultat = 0; // starter resultatet på 0
  antallGrønne = 0; // starter antall grønne på 0
  for (let i = 0; i < terningene.length; i++) {
    if (terningene[i].style.backgroundColor == "green") { // sjekker om terningen har grønn bakgrunnsfarge. 
      antallGrønne++; // hvis terningen har grønn bakgrunnsfarge skal antalGronne økes
    }
  }
  if (antallGrønne == 5) {// her sjekker den om det er 5 grønne . hvis det er det skal den kjøres
    resultat = 50; // hvis det er 5 grønne skal resultate bli 50 
  }
  tabellArray[radNummer - 1][kolonneNummer - 1].innerHTML = resultat; // her endrer innholdet i tabellcellen til resultatet i kolonnen som er trykket på i rad 12
  resetKast(); // her kjører en fonksjon som er definert lenger oppe
}










//Popup
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.popup')
    closeModal(modal)
  })
})
 
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

