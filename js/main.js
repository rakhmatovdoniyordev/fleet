const collection = document.querySelector(".navbar__collection")

function navbarToggle(){
    collection.classList.toggle("show")
}

document.querySelector('.right-btn').addEventListener('click', function() {
  document.querySelector('.locations__wrapper').scrollBy({
    left: 150,
    behavior: 'smooth'
  });
});

document.querySelector('.left-btn').addEventListener('click', function() {
  document.querySelector('.locations__wrapper').scrollBy({
    left: -150,
    behavior: 'smooth'
  });
});