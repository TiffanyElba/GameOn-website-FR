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
const baliseNom = document.getElementById('last');
const balisePrenom = document.getElementById('first');
const baliseEmail = document.getElementById('email');

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






// fonction pour vérifier le champ email
function verifierEmail(balise) {
  let emailRegEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegEx.test(balise.value)) {
    console.log("OK");
  } else {
    console.log("ERREUR");
  }
}

// fonction pour vérifier le champ prénom
function verifierChampPrenom(balise) {
  const errorMessageFirst = document.getElementById('errorMessageFirst');
  const errorMessageLast = document.getElementById('errorMessageLast');
  if (balise.value === '' || balise.value.length < 2) {
    errorMessageFirst.style.display = "block";
  } else {
    errorMessageFirst.style.display = "none";
  }
}

// fonction pour vérifier le champ nom
function verifierChampNom(balise) {
  const errorMessageLast = document.getElementById('errorMessageLast');
  if (balise.value === '' || balise.value.length < 2) {
    errorMessageLast.style.display = "block";
  } else {
    errorMessageLast.style.display = "none";
  }
}


// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // Empêche le comportement par défaut
      event.preventDefault();
});



// fonction pendant la saisie d'un champ du formulaire
baliseNom.addEventListener('input', (event) => {
    verifierChampNom(baliseNom);
});

balisePrenom.addEventListener('input', (event) => {
  verifierChampPrenom(balisePrenom);
});

baliseEmail.addEventListener('input', (event) => {
    verifierEmail(baliseEmail);
});


