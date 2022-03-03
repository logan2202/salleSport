// let question1= document.getElementById('question1')
// let response1= document.getElementById('reponse1')

// fetch("json/faq.json")
// .then(response => response.json())
// .then(data => console.log(data))
// document.getElementById("question1").innerHTML=`${question}`;
// document.getElementById("reponse1").insertAdjacentHTML=`${reponse}`;


// fonction de l'accordéon
let items = document.querySelectorAll('.accordion button');
//nous recupérons tous les selecteurs 

function toggleAccordion() {//toggle permet de (plier/déplier) l'accordéon
  let itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');//Ajoute un nouvel attribut /change la valeur de l' attribut  déja existant 
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
//addEventListner declanche l evenement au click

// Fonction Boutons suprimer et Ajouter 
let Ajouter= document.getElementById("Ajout")
let Annuler=document .getElementById('Delete')

Ajouter.addEventListener('click',()=>{
    //si je clique sur ajouter (dans le modal) alors create new question+reponse

})



console.log(items);

