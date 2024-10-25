function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("bground1");
const modalBody = document.querySelector(".modal-body");
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
const modalbgConfirmation = document.getElementById('modal-bodyConfirmation');
const btnCloseConfirm = document.getElementById('buttonConfirm');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
btnClose.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbgConfirmation.style.display = "none";
  modalBody.style.display = "block";
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = 'none'; // Cache la modale
}



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
  const today = new Date();
  const errorMessageBirthdate = document.getElementById('errorMessageBirthdate');
  const errorMessageBirthdateToday = document.getElementById('errorMessageBirthdateToday');
  const errorMessageBirthdateFormat = document.getElementById('errorMessageBirthdateFormat');
  
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

  // Vérification si la valeur de balise est vide
  if (balise.value === '') {
      errorMessageBirthdate.style.display = "block";
      errorMessageBirthdateToday.style.display = "none"; // Masquer l'autre message d'erreur
      return false; // indique que la date est invalide
  } 
  
  // Vérification si la date est au format jj/mm/aaaa
  if (!dateRegex.test(balise.value)) {
      errorMessageBirthdateFormat.style.display = "block";
      errorMessageBirthdate.style.display = "none"; // Afficher le message d'erreur
      errorMessageBirthdateToday.style.display = "none"; // Masquer l'autre message d'erreur
      return false; // indique que la date est invalide
  }

  // Conversion de la date saisie en objet Date
  const dateParts = balise.value.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Mois de 0 à 11
  const year = parseInt(dateParts[2], 10);

  // Créer l'objet Date à partir des valeurs saisies
  const inputDate = new Date(year, month, day);

  // Vérification si la date saisie est supérieure à aujourd'hui
  if (inputDate > today) {
      errorMessageBirthdateToday.style.display = "block"; // Afficher le message
      errorMessageBirthdate.style.display = "none"; // Masquer le message d'erreur principal
      errorMessageBirthdateFormat.style.display = "none";
      return false; // Indique que la date est invalide
  } 
  
  // Vérification si la date saisie est antérieure à 1900
  if (year < 1900) {
      errorMessageBirthdate.style.display = "block"; // Afficher le message d'erreur pour année trop ancienne
      errorMessageBirthdateFormat.style.display = "none"; // Masquer le message d'erreur principal
      errorMessageBirthdateToday.style.display = "none"; // Masquer l'autre message
      return false; // Indique que la date est invalide
    } else {
      errorMessageBirthdate.style.display = "none"; // Masquer le message d'erreur principal si la date est valide
      errorMessageBirthdateToday.style.display = "none"; // Masquer l'autre message
      errorMessageBirthdateFormat.style.display = "none";
      return true; // Indique que la date est valide
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
  const errorMessageQuantity = document.getElementById('errorMessageQuantity');
  if (balise.value === '' || balise.value < 0) {
    errorMessageQuantity.style.display = "block";
    return false; // indique que le nombre de tournois n'est pas inscrit
  } else {
    errorMessageQuantity.style.display = "none";
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
  event.preventDefault();
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
  if (
    locationSelected &&
    nomValide &&
    prenomValide &&
    emailValide &&
    birthdateValide &&
    checkbox1Valide &&
    quantityValide
  ) {
      modalbgConfirmation.style.display = "block"; // Affiche la modal de confirmation
      modalBody.style.display = "none"; // Masque la modal body
    } else {
      console.log("Erreur de validation");
    }

    btnCloseConfirm.addEventListener("click", function(){
      modalbg.style.display = "none";
      modalbgConfirmation.style.display = "none";
    });
    
});

