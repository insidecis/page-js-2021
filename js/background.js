const images = ["image01.jpg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImage}`;
document.body.appendChild(bgImage);
