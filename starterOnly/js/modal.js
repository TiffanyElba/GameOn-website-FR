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
const baliseBirthdate = document.getElementById('birthdate');
const baliseCheckboxCU = document.getElementById('checkbox1');
const baliseQuantity = document.getElementById('quantity');

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
  const errorMessageEmail = document.getElementById('errorMessageEmail');
  let emailRegEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegEx.test(balise.value)) {
    errorMessageEmail.style.display = "none";
    return true; // indique que l'email est valide (retourner un booléen pour le submit du formulaire)
  } else {
    errorMessageEmail.style.display = "block";
    return false; // indique que l'email est invalide
  }
}

// fonction pour vérifier le champ prénom
function verifierChampPrenom(balise) {
  const errorMessageFirst = document.getElementById('errorMessageFirst');
  if (balise.value === '' || balise.value.length < 2) {
    errorMessageFirst.style.display = "block";
    return false; // indique que le prenom est invalide
  } else {
    errorMessageFirst.style.display = "none";
    return true; // indique que le prenom est valide
  }
}

// fonction pour vérifier le champ nom
function verifierChampNom(balise) {
  const errorMessageLast = document.getElementById('errorMessageLast');
  if (balise.value === '' || balise.value.length < 2) {
    errorMessageLast.style.display = "block";
    return false; // indique que le nom est invalide
  } else {
    errorMessageLast.style.display = "none";
    return true; // indique que le prenom est valide
  }
}


// fonction pour vérifier le champ birthdate
function verifierBirthdate(balise) {
  const errorMessageBirthdate = document.getElementById('errorMessageBirthdate');
  if (balise.value === '') {
    errorMessageBirthdate.style.display = "block";
    return false; // indique que la date est invalide
  } else {
    errorMessageBirthdate.style.display = "none";
    return true; // indique que la date est valide
  }
}


// fonction pour vérifier si le champ des conditions d'utilisation est coché
function verifierCU(balise) {
  const errorMessageConditionsUtilisations = document.getElementById('errorMessageConditionsUtilisations');
  if (!balise.checked) {
    errorMessageConditionsUtilisations.style.display = "block";
    return false; // indique que les CU ne sont pas cochés
  } else {
    errorMessageConditionsUtilisations.style.display = "none";
    return true; // indique que les CU sont cochés
  }
}


// fonction pour vérifier si le champ du nombre des tournois est valide
function verifierNbreTournois(balise) {
  if (balise.value === '') {
    return false; // indique que le nombre de tournois n'est pas inscrit
  } else {
    return true; // indique que le nombre de tournois est inscrit
  }
}


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

baliseBirthdate.addEventListener('input', (event) => {
  verifierBirthdate(baliseBirthdate);
});

baliseCheckboxCU.addEventListener('input', (event) => {
  verifierCU(baliseCheckboxCU);
});

baliseQuantity.addEventListener('input', (event) => {
  verifierNbreTournois(baliseQuantity);
});



// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {

  // Appel des fonctions des champs en les stockant dans des variables pour les appeler dans l'envoi du form
  const nomValide = verifierChampNom(baliseNom);
  const prenomValide = verifierChampPrenom(balisePrenom);
  const emailValide = verifierEmail(baliseEmail);
  const birthdateValide = verifierBirthdate(baliseBirthdate);
  const checkbox1Valide = verifierCU(baliseCheckboxCU);
  const quantityValide = verifierNbreTournois(baliseQuantity);
  

  // Vérification des boutons radio
  const errorMessageOption = document.getElementById('errorMessageOption');
  const locationRadios = document.querySelectorAll('input[name="location"]');
  let locationSelected = false;

  // Vérification si un bouton radio est coché
  for (let i = 0; i < locationRadios.length; i++) {
      if (locationRadios[i].checked) {
          locationSelected = true;
          break; // Sortir de la boucle dès qu'un bouton est coché
      }
  }

  if (!locationSelected) {
      errorMessageOption.style.display = "block"; // Affiche un message d'erreur si aucun n'est sélectionné
  } else {
      errorMessageOption.style.display = "none"; // Cache le message d'erreur si un bouton est sélectionné
  }

  // Si toutes les validations sont bonnes, soumettre le formulaire
  if (locationSelected && nomValide && prenomValide && emailValide && birthdateValide && checkbox1Valide && quantityValide/* ajouter les autres conditions de validation ici */) {
    form.submit();// Soumettre le formulaire si toutes les validations passent
  } else {
  // Si des validations ne sont pas bonnes, ne pas soumettre le formulaire et garder en l'état ce qu'il était noté par l'utilisateur
    event.preventDefault();
  }

});
