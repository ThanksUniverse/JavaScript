function darkMode() {
   let element = document.body;
   element.classList.toggle("dark-mode");
   let image = document.getElementById("dark");
   if (image.src.match("../images/dark.webp")) {
      image.src = "../images/light.png";
   } else {
      image.src = "../images/dark.webp";
   }
}
