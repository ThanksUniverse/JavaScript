function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode")
    let image = document.getElementById('dark');
    if (image.src.match("../images/dark.webp")) {
        image.src = "../images/light.png";
    } else {
        image.src = "../images/dark.webp";
    }
}

let valor = 30000
let prestacao = 750
let entrada = 3000

(valor -= entrada) / prestacao

console.log(valor)

let f = branco + preto + cinza
f.length