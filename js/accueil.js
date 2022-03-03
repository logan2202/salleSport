let activity = document.querySelector("#activites")

fetch("js/Activite.json")
    .then(reponse => reponse.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {

            let div = document.createElement("div");
            let a = document.createElement("a");
            let img = document.createElement("img");
            let icon = document.createElement("img");
            let texte = document.createElement("span")

            activity.appendChild(div);
            div.className = "act"
            div.appendChild(a);
            a.appendChild(img);
            a.appendChild(icon)
            icon.className = "icon";
            a.appendChild(texte);
            a.href = "";
            img.src = data[i].imgUrlActivite;
            img.alt = data[i].nomActivite;
            icon.src = data[i].logoUrlActivite;
            texte.textContent = data[i].nomActivite;
        }
    })