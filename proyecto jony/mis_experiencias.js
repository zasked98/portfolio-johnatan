// JavaScript para la galería de imágenes
let currentIndex = 0;
const images = [
    "imagenes2/i1.jpg",
    "imagenes2/i2.jpg",
    "imagenes2/i3.jpg",
    "imagenes2/i4.jpg",
    "imagenes2/i5.jpg",
    "imagenes2/i6.jpg",
    "imagenes2/i7.jpg",
    "imagenes2/i8.jpg"
];

function changeImage() {
    const imageElement = document.getElementById("gallery-image");
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 1500);
