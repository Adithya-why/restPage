const load = function(){
    const cdiv = document.querySelector("#content");

    const hdiv = document.createElement('div');
    hdiv.classList.add('hd');
    const h1hd = document.createElement('h1');
    h1hd.innerHTML = "McDonald/'s";
    hdiv.appendChild(h1hd);
    cdiv.appendChild(hdiv);

    const imdiv = document.createElement('div');
    imdiv.classList.add('im');
    const imgs = document.createElement('img');
    imgs.setAttribute('src','mclogo');
    imdiv.appendChild(imgs);
    cdiv.appendChild(imdiv);

    const rvdiv = document.createElement('div');
    rvdiv.classList.add('rv');
    const pt = document.createElement('p');
    rvdiv.appendChild(pt);
    cdiv.appendChild(rvdiv);



}


export { load };