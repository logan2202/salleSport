//Variables
let main = document.querySelector("main");

// buttonAct.innerHTML = `<img src='${data[i].logoUrlActivite}'> <br> <p id='${data[i].nomActivite}'>${data[i].nomActivite}</p>`;
let navDiv = document.createElement("div");
main.appendChild(navDiv);
navDiv.id = "navDiv";
navDiv.className = "sticky-top";
let h1 = document.createElement('h1');
main.appendChild(h1);
h1.innerHTML = "Nos Activités"

//fetch
fetch("js/Activite.json")
    .then(data => data.json())
    .then(data => {
        //Génération dynamique des boutons
        for (let i = 0; i < data.length; i++) {
            navDiv.insertAdjacentHTML("beforeend", `<a href='#activite${data[i].idActivite}'>${data[i].nomActivite}</a>`);
            let div0 = document.createElement('div');
            main.classList.add("container");
            main.appendChild(div0);
            div0.classList.add("d-flex", "justify-content-evenly", "flex-wrap", "divider");
            div0.id = `div${i}`;
            let div1 = document.createElement("div");
            div1.id = `vid${i}`
            div1.style.padding = "1em";
            div1.className = "shad";
            if (i % 2 == 0) {
                div1.style.background = "rgb(187, 187, 187)";
                div1.style.borderRadius = "25px";

            } else {
                div1.style.border = "rgb(187, 187, 187) 1px solid";
                div1.style.borderRadius = "25px";
            }
            let h2 = document.createElement('h2');
            let divImg = document.createElement("div");
            let actImg = document.createElement('img');
            let pDesc = document.createElement("p");
            main.appendChild(div1);
            div1.appendChild(h2);
            h2.innerHTML = data[i].nomActivite;
            div0.id = `activite${data[i].idActivite}`;
            div1.appendChild(divImg);
            divImg.classList.add("imgCSS");
            divImg.appendChild(actImg);
            div1.appendChild(pDesc);
            pDesc.innerHTML = data[i].descriptionActivite;
            actImg.src = data[i].imgUrlActivite;
            actImg.alt = data[i].nomActivite;
        }
    }
    )