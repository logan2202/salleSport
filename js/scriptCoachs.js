fetch("js/coach.json")
    .then(response => response.json())
    .then(coachs => {
        console.log(coachs)
        /*récupération des ID*/
let modal = document.getElementById("modal-title");
let bio = document.getElementById('bioURL');
/*Fonction*/

    for (let i = 0; i < coachs.length; i++) {
        if (coachs[i].pseudo == "") {
            coachs[i].pseudo = `${coachs[i].prenom} ${coachs[i].nom}`;
        }
    }

    //Création du premier coach
    let btns = document.getElementById('carousel-indicators');
    btns.insertAdjacentHTML("afterbegin", `<button type="button" data-bs-target="#coachcarousel" data-bs-slide-to="0" class="active"
    aria-current="true" aria-label="Slide 1"></button>`);
    let inner = document.getElementById('carousel-inner');
    let div1 = document.createElement("div");
    div1.classList.add('carousel-item', 'active', 'text-center');
    inner.appendChild(div1);
    //Création de l'image
    let coachImg = document.createElement("img");
    coachImg.classList.add('d-block');
    coachImg.src = `${coachs[0].photoURL}`;
    coachImg.alt = `"Photo de ${coachs[0].prenom}`;
    div1.appendChild(coachImg);
    //Création du Pseudo / Prénom
    let coachH2 = document.createElement("h2");
    coachH2.innerHTML = `${coachs[0].pseudo}`;
    div1.appendChild(coachH2);
    //Création du titre
    let coachTitre = document.createElement("p");
    coachTitre.innerHTML = `${coachs[0].titre}`;
    div1.appendChild(coachTitre);
    //Création de la description
    let coachDesc = document.createElement('p');
    coachDesc.innerHTML = `${coachs[0].description}`;
    div1.appendChild(coachDesc);
    //Création du bouton
    let coachBtn = document.createElement('button');
    coachBtn.classList.add('btn', "btn-secondary");
    coachBtn.innerHTML = "En savoir plus";
    div1.appendChild(coachBtn);
    coachBtn.dataset.bsToggle = "modal";
    coachBtn.dataset.bsTarget = "#coachmod";
    coachBtn.dataset.coachId = coachs[0].id;
    //Création dynamique des coachs sans la classe active. On remplace 0 par i;
    if (coachs.length > 1) {
        for (let i = 1; i < coachs.length; i++) {
            btns.insertAdjacentHTML("afterbegin", `<button type ="button"
    data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`);
            let div1 = document.createElement("div");
            div1.classList.add('carousel-item', 'text-center');
            inner.appendChild(div1);
            let coachImg = document.createElement("img");
            coachImg.classList.add('d-block');
            coachImg.src = `${coachs[i].photoURL}`;
            coachImg.alt = `"Photo de ${coachs[i].prenom}`;
            div1.appendChild(coachImg);
            let coachH2 = document.createElement("h2");
            coachH2.innerHTML = `${coachs[i].pseudo}`;
            div1.appendChild(coachH2);
            let coachTitre = document.createElement("p");
            coachTitre.innerHTML = `${coachs[i].titre}`;
            div1.appendChild(coachTitre);
            let coachDesc = document.createElement('p');
            coachDesc.innerHTML = `${coachs[i].description}`;
            div1.appendChild(coachDesc);
            let coachBtn = document.createElement('button');
            coachBtn.classList.add('btn', "btn-secondary");
            coachBtn.innerHTML = "En savoir plus";
            div1.appendChild(coachBtn);
            coachBtn.dataset.bsToggle = "modal";
            coachBtn.dataset.bsTarget = "#coachmod";
            coachBtn.dataset.coachId = coachs[i].id;
        }
    }

    let coachTitle = document.getElementById("coachtitre")
    let btnCoachs = document.querySelectorAll(".carousel-item button");
    for (let i = 0; i < coachs.length; i++) {
        btnCoachs[i].addEventListener('click', () => {
            modal.innerHTML = `${coachs[i].pseudo}`;
            coachTitle.innerHTML = `${coachs[i].titre}`
            bio.innerHTML = `${coachs[i].bioURL}`;
        });
    }


    });



