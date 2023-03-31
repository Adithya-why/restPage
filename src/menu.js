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
    li1.innerHTML = "Home";
    li2.innerHTML ="Menu";
    li3.innerHTML = "Contact";

    divls.appendChild(li1);
    divls.appendChild(li2);
    divls.appendChild(li3);
    
    
    divcont.appendChild(divhd);
    divcont.appendChild(divls);



    
}


export{ loadMenu }