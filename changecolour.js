let body = document.querySelector("h1");
let btn = document.querySelector("button");
btn.addEventListener("click",() =>{
    const num1= Math.floor(Math.random() * 266);
    const num2= Math.floor(Math.random() * 266);
    const num3= Math.floor(Math.random() * 11);
    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    body.innerText = `rgb(${num1}, ${num2}, ${num3})`;
})