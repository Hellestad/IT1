
function gjett(){
  var passord = "12345-eth";
  var svar = document.getElementById("svar").value;
  if(svar == passord){
    document.getElementById("tekst").innerHTML = 'Du gjettet riktig';
  }

  else if(svar == '?lengde'){
    document.getElementById("tekst").innerHTML = (passord.length);
  }

  else if(svar == '?1'){
    document.getElementById("tekst").innerHTML = (passord[0]);
  }

  else if(svar == '?2'){
    document.getElementById("tekst").innerHTML = (passord[1]);
  }

  else if(svar == '?siste'){
    document.getElementById("tekst").innerHTML = (passord[8]);
  }

  else if(svar == '?store'){
    document.getElementById("tekst").innerHTML = (passord.toUpperCase());
  }

  else if(svar == '?små'){
    document.getElementById("tekst").innerHTML = (passord.toLowerCase());
  }

  else if (svar == ''){

  }

  else if(svar != passord){
    document.getElementById("tekst").innerHTML = 'Du gjettet feil';
  }
  
};








/*var passord = '12345';
var svar;

while(svar != passord) {
  svar = window.prompt('enter passord')
}

alert('riktig');*/