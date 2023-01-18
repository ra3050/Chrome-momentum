const images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url(background-image/${chosenImage})`;

const bgImage = document.createElement("img");
bgImage.src = `background-image/${chosenImage}`;
bgImage.style.position = "fixed";
bgImage.style.top ="0px";
bgImage.style.left = "0px";
bgImage.style.width = "100vw";
bgImage.style.height = "100vh";
bgImage.style.zIndex = -1;
bgImage.style.pointerEvents = "none";
console.dir(bgImage);

document.body.appendChild(bgImage);
document.body.prepend(bgImage) // 제일 위에 아이템을 추가함 
