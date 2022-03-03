let carte = document.querySelector('#carte')

fetch("js/tarif.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {

            let div = document.createElement("div");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let div3 = document.createElement("div");
            let div4 = document.createElement("div");
            let div5 = document.createElement("div");
            let div6 = document.createElement("div");
            let div7 = document.createElement("div");
            let div8 = document.createElement("div");
            let h1 = document.createElement("h1");
            let h4 = document.createElement("h4");
            let h5 = document.createElement("h5");
            let bold = document.createElement("bold");
            let bold1 = document.createElement("bold");
            let p = document.createElement("p");
            let p1 = document.createElement("p");
            let a = document.createElement("a");
            let a1 = document.createElement("a");
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let i1 = document.createElement("i");
            let i2 = document.createElement("i");


            carte.appendChild(div);
            div.className = "col-12 col-sm-6 col-md-4";
            div.appendChild(div1);
            div1.className = "flip-div";
            div1.appendChild(div2);
            div2.className = "flip-main";
            div2.appendChild(div3);
            div3.className = "front"
            div3.appendChild(div4)
            div4.className = "card";
            div4.id = "card";
            div4.appendChild(div5);
            div5.className = "card-body text-center pb-2";
            div5.appendChild(h1);
            div5.appendChild(h5);
            h5.className = 'card-title';
            h5.appendChild(bold);
            div5.appendChild(p);
            p.className = 'card-text';
            div5.appendChild(a);
            a.href = '#';
            a.className = "btn btn-info btn-sm";
            a.appendChild(i1);
            i1.className = "fa fa-arrow-right";
            div2.appendChild(div6);
            div6.className = "back rounded";
            div6.appendChild(div7);
            div7.className = "card";
            div7.id = "card";
            div7.appendChild(div8);
            div8.className = "card-body text-center"
            div8.appendChild(h4);
            h4.className = "card-title"
            h4.appendChild(bold1);
            div8.appendChild(p1);
            p1.className = "card-text";
            div8.appendChild(ul);
            ul.className = "list-inline";
            ul.appendChild(li);
            li.className = "list-inline-item";
            div8.appendChild(a1);
            a1.className = "social-icon text-xs-center text-info";
            a1.target = "_blank";
            a1.href = "https://www.facebook.com/Brive19";
            a1.appendChild(i2);
            i2.className = "fa fa-facebook";

            h1.innerHTML = data[i].prix + "€/" + data[i].periode;
            h4.innerHTML = data[i].intitulé;
            p.innerHTML = data[i].descriptionFace;
            bold.innerHTML = data[i].titredos;
            p1.innerHTML = data[i].descriptionDos;


        }
    })