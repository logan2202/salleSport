let header = document.querySelector('header');
let bandeau = document.createElement('div');
header.appendChild(bandeau);
bandeau.className = 'marquee-rtl';
let nav = document.createElement('nav');
header.appendChild(nav);
nav.id = 'nav';
nav.className = 'navbar navbar-dark bg-dark';


let a = document.createElement('a');
bandeau.appendChild(a);
let div = document.createElement('div')
div.id = 'event';
a.appendChild(div);
div.innerHTML = 'GRANDE FOIRE AU GRAS CE WEEK-END A BRIVE-LA-GAILLARDE';

let cont = document.createElement('div');
nav.appendChild(cont);
cont.className = "container-fluid";
let p = document.createElement('p');
cont.appendChild(p);
p.id = 'title';
p.className = 'navbar-brand';
let img = document.createElement('img');
p.appendChild(img);
img.id = 'logo';
img.src = 'img/logo.webp';
p.insertAdjacentHTML('beforeend', 'Training Form');
let button1 = document.createElement('button');
p.appendChild(button1);
button1.id = "menu";
button1.className = "navbar-toggler";
button1.type = "button";
button1.dataset.bsToggle = 'offcanvas';
button1.dataset.bsTarget = '#offcanvasNavbar';
button1.setAttribute("aria-controls", 'offcanvasNavbar');
let span = document.createElement('span');
button1.appendChild(span);
span.className = 'navbar-toggler-icon';
let canvas = document.createElement('div');
cont.appendChild(canvas);
canvas.classList = 'offcanvas offcanvas-end';
canvas.id = "offcanvasNavbar";
canvas.setAttribute("aria-labelledby", 'offcanvasNavbarLabel');
canvas.tabIndex = '-1';
let offheader = document.createElement('div');
canvas.appendChild(offheader);
offheader.className = 'offcanvas-header';
let h5 = document.createElement('h5');
offheader.appendChild(h5);
h5.className = 'offcanvas-title';
h5.id = 'offcanvasNavbarLabel';
h5.style.color = 'white';
let button2 = document.createElement('button');
offheader.appendChild(button2);
button2.type = 'button';
button2.className = 'btn-close text-reset';
button2.dataset.bsDismiss = 'offcanvas';
button2.setAttribute("aria-label", 'Close');
let offbody = document.createElement('div');
canvas.appendChild(offbody);
offbody.className = 'offcanvas-body';
let ul = document.createElement('ul');
offbody.appendChild(ul);
ul.className = 'navbar-nav justify-content-end flex-grow-1 pe-3';


fetch('js/nav.json')
    .then(reponse => reponse.json())
    .then(data => {
        console.log(data)
        for (i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            let b = document.createElement('a')
            ul.appendChild(b);
            b.appendChild(li)
            li.insertAdjacentHTML('afterend', data[i].menu)
            b.href = data[i].href
            b.className = 'choix'
        }
    })


fetch('js/footer.json')
    .then(reponse => reponse.json())
    .then(data => {
        console.log(data)
        let footer = document.querySelector('footer');
        let div = document.createElement('div');
        div.className = "container text-center";
        footer.appendChild(div);
        for (i = 0; i < data.length; i++) {
            let div1 = document.createElement('div');
            div.appendChild(div1);
            let c = document.createElement('a');
            div1.appendChild(c);
            let img = document.createElement('img');
            c.appendChild(img);
            c.href = data[i].href;
            img.src = data[i].src;
            img.className = "icones"
            div1.className = "top"
            c.insertAdjacentHTML('beforeend', data[i].text)
            c.target = "_blank"
        }
    })   