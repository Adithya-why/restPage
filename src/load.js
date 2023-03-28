import mcimgUrl from './si.jpg';
import css from './mstyle.css';



const loadPage = function(){
    const divcont = document.querySelector("#container");

    const divhd = document.createElement('div');
    divhd.classList.add('hd');
    const txth1 = document.createElement('h1');
    txth1.innerHTML = "Fancy South Indian Restaurant";
    divhd.appendChild(txth1);


    const divls = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.innerHTML = "Home";
    li2.innerHTML ="Menu";
    li3.innerHTML = "Contact";

    divls.appendChild(li1);
    divls.appendChild(li2);
    divls.appendChild(li3);



    const divimg = document.createElement('div');
    divimg.classList.add('ig');
    const mcimg = document.createElement('img');
    mcimg.src = mcimgUrl;
    divimg.appendChild(mcimg);
    const taglinediv = document.createElement('div');
    taglinediv.classList.add('tg');
    const tagline = document.createElement('p');
    tagline.innerHTML = "Best food with even better names";
    taglinediv.appendChild(tagline);
    divimg.appendChild(taglinediv);
    
    
    const divrv = document.createElement('div');
    divrv.classList.add('rv');
    const ptx = document.createElement('p');
    ptx.innerHTML = "Totally authentic and not bad at all<br><span>-Random Tourist</span>";
    divrv.appendChild(ptx);


    divcont.appendChild(divhd);
    divcont.append(divls);
    divcont.appendChild(divimg);
    divcont.appendChild(divrv);
    
}


export { loadPage };