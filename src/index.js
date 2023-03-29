import { loadPage } from "./load.js";
import { loadMenu } from "./menu.js";

loadPage();

    


    function erase(){
        
            const cont = document.querySelector('#container');
            const hm = document.querySelector('.home');
            cont.replaceChildren();
            console.log("Hi");
        
    }

function pageSwitching(){

    const cont = document.querySelector('#container');
    const hm = document.querySelector('.home');
    hm.addEventListener('click',function(){
        erase();
        loadPage();
        pageSwitching();
    });


    const mn = document.querySelector('.menu');
    mn.addEventListener('click',function(){
        erase();
        loadMenu();
        pageSwitching();
    })

}


pageSwitching();