let imgs = document.querySelectorAll("img");
let nextButton = document.querySelector(".after");
let prevButton = document.querySelector(".before");
let imgsNumber = imgs.length;
let transformNum = 0;
nextButton.onclick = next;
prevButton.onclick = prev;
sliding();
function next() {
  if (transformNum == (imgsNumber - 1) * 100) {
    return false;
  } else {
    transformNum += 100;
    sliding();
  }
}

function prev() {
  if (transformNum == 0) {
    return false;
  } else {
    transformNum -= 100;
    sliding();
  }
}

function sliding() {
  imgs.forEach((img) => {
    img.style.transform = `translateX(-${transformNum}%)`;
  });

  if (transformNum == 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (transformNum == (imgsNumber - 1) * 100) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
