import idli from './idli.jpg';
import menucss from './menustyle.css';

const loadMenu = function(){
    const divcont = document.querySelector("#container");

    const divhd = document.createElement('div');
    divhd.classList.add('hd');
    const txth1 = document.createElement('h1');
    txth1.innerHTML = "Fancy South Indian Restaurant";
    divhd.appendChild(txth1);


    const divls = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.classList.add('home');
    const li2 = document.createElement('li');
    li2.classList.add('menu');
    const li3 = document.createElement('li');
    li3.classList.add('contact');
    li1.innerHTML = "Home";
    li2.innerHTML ="Menu";
    li3.innerHTML = "Contact";

    divls.appendChild(li1);
    divls.appendChild(li2);
    divls.appendChild(li3);
    
    
    divcont.appendChild(divhd);
    divcont.appendChild(divls);


    const subcont = document.createElement('div');
    subcont.classList.add('scont');

    const idlicont = document.createElement('div');
    const idlipic = document.createElement('img');
    idlipic.src = idli;
    idlicont.appendChild(idlipic);
    const idlidis = document.createElement('div');
    const idlidisp = document.createElement('p');
    idlidisp.innerHTML = "Fancy rice cakes";
    idlidis.appendChild(idlidisp);
    idlicont.appendChild(idlidis);


    subcont.appendChild(idlicont);

    const idlicont2 = document.createElement('div');
    const idlipic2 = document.createElement('img');
    idlipic2.src = idli;
    idlicont2.appendChild(idlipic2);
    const idlidis2 = document.createElement('div');
    const idlidisp2 = document.createElement('p');
    idlidisp2.innerHTML = "Fancy rice cakes";
    idlidis2.appendChild(idlidisp2);
    idlicont2.appendChild(idlidis2);


    subcont.appendChild(idlicont2);


    const idlicont3 = document.createElement('div');
    const idlipic3 = document.createElement('img');
    idlipic3.src = idli;
    idlicont3.appendChild(idlipic3);
    const idlidis3 = document.createElement('div');
    const idlidisp3 = document.createElement('p');
    idlidisp3.innerHTML = "Fancy rice cakes";
    idlidis3.appendChild(idlidisp3);
    idlicont3.appendChild(idlidis3);


    subcont.appendChild(idlicont3);

    const idlicont4 = document.createElement('div');
    const idlipic4 = document.createElement('img');
    idlipic4.src = idli;
    idlicont4.appendChild(idlipic4);
    const idlidis4 = document.createElement('div');
    const idlidisp4 = document.createElement('p');
    idlidisp4.innerHTML = "Fancy rice cakes";
    idlidis4.appendChild(idlidisp4);
    idlicont4.appendChild(idlidis4);


    subcont.appendChild(idlicont4);
    
    divcont.appendChild(subcont);
    





}


export{ loadMenu }