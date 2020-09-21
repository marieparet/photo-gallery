const images = document.querySelectorAll("#galery img");

let imgActive = 0; //indice [0] pour la 1e image;

images[imgActive].classList.add("show");

//Masquer les photos sauf la 1e (indice [0]) :
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add("hidden");
}

let interval; //déclarat° d'une variable globale pour pouvoir la réutiliser;

//Clic sur le bouton suivant (appel de la fonction next) :
document.querySelector("#next").addEventListener("click", function () {
  next();
});

//Clic sur le bouton précédent (appel de la fonction prev) :
document.querySelector("#prev").addEventListener("click", function () {
  prev();
});

//Clic sur le bouton play (appel de la fonction next toutes les 2 sec) :
document.querySelector("#play").addEventListener("click", function () {
  interval = setInterval(next, 1800); //créat° de l'interval de temps;
});

//Clic sur le bouton pause (arrêter l'interval) :
document.querySelector("#pause").addEventListener("click", function () {
  clearInterval(interval); //destruct° de l'interval de temps;
});

//Fonction pour la photo suivante :
const next = function () {
  //Enlever la class show et ajouter la classe hidden sur l'image active, pour faire apparaître l'image suivante :
  images[imgActive].classList.remove("show");
  images[imgActive].classList.add("hidden");
  imgActive += 1;
  //Réafficher la 1e image s'il n'y a plus d'images dans le tableau images :
  if (imgActive >= images.length) {
    imgActive = 0;
  }
  //Afficher l'image suivante, en lui enlevant la classe hidden, et lui ajoutant la classe show :
  images[imgActive].classList.remove("hidden");
  //Ajouter la classe show qu'après 300ms pour voir la transition entre hidden et show :
  setTimeout(() => {
    images[imgActive].classList.add("show");
  }, 300);
};

//Fonction pour la photo précédente :
const prev = function () {
  //Enlever la class show et ajouter la classe hidden sur l'image active, pour faire apparaître l'image précédente :
  images[imgActive].classList.remove("show");
  images[imgActive].classList.add("hidden");
  imgActive -= 1;
  //Réafficher la dernière image s'il n'y a plus d'images dans le tableau images :
  if (imgActive < 0) {
    imgActive = images.length - 1;
  }
  //Afficher l'image précédente, en lui enlevant la classe hidden, et lui ajoutant la classe show :
  images[imgActive].classList.remove("hidden");
  //Ajouter la classe show qu'après 300ms pour voir la transition entre hidden et show :
  setTimeout(() => {
    images[imgActive].classList.add("show");
  }, 300);
};
