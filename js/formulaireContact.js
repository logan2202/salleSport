//declaration de la const envoyer
const envoyer = document.getElementById('envoie');
//declaration de mes variable
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('mail');
let tel = document.getElementById('tel');
let msg = document.getElementById('msg')

//fonction qui permet de mettre la premiere saisie en maj
prenom.addEventListener('keyup', (e) => {
    prenom.value = prenom.value.charAt(0).toUpperCase() + prenom.value.slice(1);
});

//fonction qui permet de mettre de mettre toute les saisie en maj 
nom.addEventListener('keyup', (e) => {
    nom.value = nom.value.toUpperCase();
});

//fonction qui valide l'email
function validateEmail(email) {
    let verif = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    return verif.exec(email); 
};

//fonction qui valide l'email
function validateTel(tel) {
    let verifTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return verifTel.exec(tel); 
};

//function qui rajoute un evenement au bouton envoyer
envoyer.addEventListener('click', () => {
    if (!formulaireValidation()) {
    }
    else {
        document.getElementById('envoie').submit();   
    }
});

//fonction qui change le style de mes variable si false
function formulaireValidation() {
    let validation = true;

    //nom
    if (!nom.value || nom.value.length < 2) {
        validation = false;
        let error = document.getElementById('error')
        nom.classList.add('bgFalse');
        error.classList.add('false')
        error.innerHTML = "Champ non Valide (2 caracteres Minimum) !"

    }
    else {
        nom.classList.add('bgTrue');
    }

    //prenom
    if (!prenom.value || prenom.value.length < 2) { 
        validation = false;
        let error = document.getElementById('error2')
        prenom.classList.add('bgFalse');
        error.classList.add('false')
        error.innerHTML = "Champ non Valide (2 caracteres Minimum) !"
    }
    else {
        prenom.classList.add('bgTrue');
    }

    //email
    if (!email.value  || !validateEmail(email.value) ) {
        validation = false;
        let error = document.getElementById('error3')
        email.classList.add('bgFalse');  
        error.classList.add('false')
        error.innerHTML = "Adresse Mail non Valide !"
    }
    else{
        email.classList.add('bgTrue');
    }

    //tel
    if (!tel.value || tel.value.length != 10 || !validateTel(tel.value) ) {
        validation = false;
        let error = document.getElementById('error4')
        tel.classList.add('bgFalse');
        error.classList.add('false')
        error.innerHTML = "Le numéro de téléphone n'est pas valide !"     
    }
    else{
        tel.classList.add('bgTrue');
    }
    
    //msg
    if(msg.value < 2) {
        validation = false;
        let error = document.getElementById('error5')
        msg.classList.add('bgFalse');
        error.classList.add('false');
        error.innerHTML = "le remplissage et obligatoire !" 
    }
    else {
        msg.classList.add('bgTrue');
    }

};

//function qui permet de verifier les valeur de mes variables
function confSaisie(valeur) {
    return valeur != '';
};


//captcha
function onSubmit(token) {
    document.getElementById("formulaire").submit();
  }

function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('6Ld0Am4eAAAAAFR4rnD5Nl3Is6mtG9kyhOZ3W4-v', {action: 'submit'}).then(function(token) {
        document.getElementById("envoie").value = token  
      });
    });
  }


