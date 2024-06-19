const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();


let hiddenElement1 = document.getElementById("box1");
let btn1 = document.querySelector(".btn1");
function handleButtonClick1() {
  hiddenElement1.scrollIntoView({ block: "center", behavior: "smooth" });
}
btn1.addEventListener("click", handleButtonClick1);


let hiddenElement2 = document.getElementById("box2");
let btn2 = document.querySelector(".btn2");
function handleButtonClick2() {
  hiddenElement2.scrollIntoView({ block: "center", behavior: "smooth" });
}
btn2.addEventListener("click", handleButtonClick2);


let hiddenElement3 = document.getElementById("box3");
let btn3 = document.querySelector(".btn3");
function handleButtonClick3() {
  hiddenElement3.scrollIntoView({ block: "center", behavior: "smooth" });
}
btn3.addEventListener("click", handleButtonClick3);






document.getElementById('callback').addEventListener('click', function() {
    document.getElementById('feedbackPopup').style.display = 'block';
});

document.getElementById('feedbackPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Здесь можно добавить код для отправки данных формы через AJAX или другим способом
    // Например, использовать Fetch API для отправки данных на сервер
});
document.getElementById('callback').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('feedbackPopup').style.display = 'block';
});

document.getElementById('feedbackPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }
});

document.getElementById('img1').addEventListener('click', function() {
  document.getElementById('imgPopup1').style.display = 'block';
});

document.getElementById('imgPopup1').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});
document.getElementById('img1').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('imgPopup1').style.display = 'block';
});





document.getElementById('img2').addEventListener('click', function() {
  document.getElementById('imgPopup2').style.display = 'block';
});

document.getElementById('imgPopup2').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});
document.getElementById('img2').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('imgPopup2').style.display = 'block';
});






document.getElementById('img3').addEventListener('click', function() {
  document.getElementById('imgPopup3').style.display = 'block';
});

document.getElementById('imgPopup3').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});
document.getElementById('img3').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('imgPopup3').style.display = 'block';
});






document.getElementById('img4').addEventListener('click', function() {
  document.getElementById('imgPopup4').style.display = 'block';
});

document.getElementById('imgPopup4').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});
document.getElementById('img4').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('imgPopup4').style.display = 'block';
});



