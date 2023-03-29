const loadMenu = function(){
    const divcont = document.querySelector("#container");
    const divhd = document.createElement('div');
    divhd.innerHTML = "I am the Menu";
    divcont.appendChild(divhd);   
}


export{ loadMenu }