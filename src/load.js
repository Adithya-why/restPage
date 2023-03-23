import mcimgUrl from './mc.jpg';


const loadPage = function(){
    const divcont = document.querySelector("#container");

    const divhd = document.createElement('div');
    divhd.classList.add('hd');
    const txth1 = document.createElement('h1');
    txth1.innerHTML = "McDonald/'s";
    divhd.appendChild(txth1);


    const divimg = document.createElement('div');
    divimg.classList.add('ig');
    const mcimg = document.createElement('img');
    mcimg.src = mcimgUrl;
    divimg.appendChild(mcimg);
    
    
    const divrv = document.createElement('div');
    divrv.classList.add('rv');
    const ptx = document.createElement('p');
    ptx.innerHTML = "The food is wonderful";
    divrv.appendChild(ptx);


    divcont.appendChild(divhd);
    divcont.appendChild(divimg);
    divcont.appendChild(divrv);
}


export { loadPage };