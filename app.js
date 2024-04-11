const scrollButton = document.getElementById('scrollContato');
const scrollProjetos = document.getElementById('scrollProjetos');
const targetDiv = document.getElementById('projetos'); 
const scrollForma = document.getElementById("scrollFormações");
const divForma = document.getElementById("formações");
const scrollSobre = document.getElementById("scrollSobre");
const divSobre = document.getElementById("carrosel-div"); 

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
scrollProjetos.addEventListener('click', () => {
  targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
scrollForma.addEventListener('click', () => {
    divForma.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
scrollSobre.addEventListener('click', () => {
    divSobre.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#animated", {
    speed:250,
    strings: "Pedrooaj",
    loop: true
  }).go()
});


const item = document.getElementById("item")
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleHover() {
  if (isElementInViewport(item)) {
    item.classList.add('hover');
  } else {
    item.classList.remove('hover');
  }
}

window.addEventListener('scroll', handleHover);
window.addEventListener('resize', handleHover);