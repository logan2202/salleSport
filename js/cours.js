/*JS*/
let main = document.querySelector('main');
let divA = document.createElement('div');

let h1 = document.createElement('h1');
h1.style.textAlign = "center";

main.appendChild(divA);
main.appendChild(h1);
h1.innerHTML = "Nos Cours";

divA.id = "divA";
divA.className = "sticky-top";
main.classList.add("container");
const fetchData = async (reponse) => {
    try {
        reponse = await fetch("js/cours.json")
        reponse.json()
            .then(cours => {
                for (let i = 0; i < cours.length; i++) {
                    let divCours = document.createElement('div');
                    main.appendChild(divCours);
                    divCours.id = `div${i}`;
                    divCours.style.padding = "1em";
                    divCours.style.marginBottom = "2em";
                    divCours.className = "shad";
                    if (i % 2 == 0) {
                        divCours.style.background = "rgb(187, 187, 187)";
                        divCours.style.borderRadius = "25px";
                    } else {
                        divCours.style.border = "rgb(187, 187, 187) 1px solid";
                        divCours.style.borderRadius = "25px";
                    }
                    //Récupération des nom d'activité
                    const ActiviteUrl = cours[i].idActivite.url;
                    const activiteID = cours[i].idActivite.id;
                    fetch(ActiviteUrl)
                        .then(response2 => response2.json())
                        .then(activite => {
                            for (let j = 0; j < activite.length; j++) {
                                if (activite[j].idActivite == activiteID) {
                                    console.log(activite[j].nomActivite)
                                    let h3 = document.createElement('h3');
                                    divCours.appendChild(h3);

                                    h3.innerHTML = `${activite[j].nomActivite}`;
                                    let h5 = document.createElement('h5');
                                    divCours.appendChild(h5);
                                    h5.innerHTML = `Cours de ${cours[i].titreCours}`;
                                    //génération d'ID pour des ancrages
                                    h3.id = cours[i].titreCours + i;
                                    //Génération des liens 
                                    divA.insertAdjacentHTML("beforeend", `<a href='#${h3.id}'>${cours[i].titreCours}</a>`);
                                }
                            }
                        })
                        .catch(error => console.log("Error =>", error));
                    //Récupération des noms / prénom des coachs.
                    const coachsUrl = cours[i].idCoach.url;
                    const coachsID = cours[i].idCoach.id;
                    fetch(coachsUrl)
                        .then(response3 => response3.json())
                        .then(coachs => {

                            for (let j = 0; j < coachs.length; j++) {
                                if (coachs[j].id == coachsID) {
                                    let p1 = document.createElement('p');
                                    divCours.appendChild(p1);
                                    if (coachs[j].pseudo == "") { coachs[j].pseudo = coachs[j].nom + " " + coachs[j].prenom; }
                                    p1.innerHTML = "Cours donné par :" + " " + coachs[j].pseudo + " à " + cours[i].heureCoursDebut;
                                }
                            }
                        })
                        .then(() => {
                            let p2 = document.createElement('p');
                            divCours.appendChild(p2);
                            p2.innerHTML = cours[i].descriptionCours;
                        })
                        .catch(error => console.log("Error =>", error));
                }
            })
    } catch (error) {
        console.log(`ERRROR => ${error}`);
    }
}
fetchData();