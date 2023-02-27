const colores = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const span = document.getElementById('span');


btn.addEventListener('click', ()=>{
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colores[Math.floor(Math.random() * colores.length)];
    }
    document.body.style.backgroundColor = color;
    span.textContent=color;
});

