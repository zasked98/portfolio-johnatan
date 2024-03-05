let currentIndex = 0;
const images = [
    "imagenes3/c1.png",
    "imagenes3/c2.png",
    "imagenes3/c3.png",
    "imagenes3/c4.png",
    "imagenes3/c5.png",
    "imagenes3/c6.png",
    "imagenes3/c7.png"
];

function changeImage() {
    const imageElement = document.querySelector(".gallery img");
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 2000);
