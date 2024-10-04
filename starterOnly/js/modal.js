function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector(".close");
const form = document.querySelector('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fonction pour fermer la modal 
btnClose.addEventListener("click", function(){
  modalbg.style.display = "none";
});



// fonction pendant la saisie d'un champ du formulaire 
const baliseNom = document.getElementById('last');
const balisePrenom = document.getElementById('first');
const baliseEmail = document.getElementById('email');




function verifierEmail(balise) {
  let emailRegEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegEx.test(balise.value)) {
    console.log("OK");
  } else {
    console.log("ERREUR");
  }
}

function verifierChamp(balise) {
  const errorMessageFirst = document.getElementById('errorMessageFirst');
  if (balise.value === '' || balise.value.length < 2) {
    errorMessageFirst.style.display = "block";
  } else {
    errorMessageFirst.style.display = "none";
    console.log("OK");
  }
}

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
      event.preventDefault();
});




baliseNom.addEventListener('input', (event) => {
    verifierChamp(baliseNom);
});

balisePrenom.addEventListener('input', (event) => {
  verifierChamp(balisePrenom);
});

baliseEmail.addEventListener('input', (event) => {
    verifierEmail(baliseEmail);
});



/*

/*function verifierChamp(chaine) {
  if (chaine.length < 2) {
    throw new Error(`La chaîne ${chaine} est trop courte`)
  }
}

try {
  verifierChamp(baliseNom.value);

} catch(erreur) {
  console.log(erreur);
}
*/