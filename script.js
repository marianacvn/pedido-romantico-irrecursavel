const btn2 = document.getElementById("Btn2")
const btn = document.getElementById("Btn")
const cor1 = document.getElementById("cor1")    
const cor2 = document.getElementById("cor2")
const cor3 = document.getElementById("cor3")

const quadrado = document.getElementById("quadrado")

const maxX = window.innerWidth - quadrado.offsetWidth;
const maxY = window.innerHeight - quadrado.offsetHeight;

btn2.addEventListener("mouseover", function() {
quadrado.style.display = 'none'

var randomX = Math.random() * maxX;
var randomY = Math.random() * maxY;
quadrado.style.left = randomX + "px"
quadrado.style.top = randomY + "px"
quadrado.style.display = "block"
})

btn.addEventListener("click", function () {
    quadrado.style.display = 'none'
    document.querySelector(".deucerto").style.display = "block"
    document.querySelector(".legal").style.display = "block"
    cor1.classList.add("content-coracao")
    cor2.classList.add("square")
    cor3.classList.add("circle")

    
})

