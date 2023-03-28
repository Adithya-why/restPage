import { loadPage } from "./load.js";

loadPage();

function pageSwtiching(){
    const cont = document.querySelector('#container');
    const hm = document.querySelector('.home');
    hm.addEventListener('click',function(){
        cont.replaceChildren();
        console.log("Hi");
        loadPage();
    });
}


pageSwtiching();