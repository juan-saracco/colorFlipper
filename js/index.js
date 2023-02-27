const colores = ['red', 'blue', 'violet', 'green', 'aqua', 'wheat', 'brown', 'coral'];
const btn = document.getElementById('btn');
const span = document.getElementById('span');

btn.addEventListener('click', () => {
    let color = colores[Math.floor(Math.random() * colores.length)]
    document.body.style.backgroundColor = color;
    span.textContent = color;
    span.style.color = color;
});

