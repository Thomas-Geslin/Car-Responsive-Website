/* Intégration des cartes de la div Choose */
let chooseArray = [{
    brand: 'Porsche',
    name: 'Taycan',
    img: './assets/img/popular2.png',
    price: '$114,900'
},
{
    brand: 'Porsche',
    name: 'Turbo S Cross',
    img: './assets/img/popular3.png',
    price: '$150,900'
},
{
    brand: 'Porsche',
    name: 'Boxster 718',
    img: './assets/img/popular4.png',
    price: '$125,900'
},
{
    brand: 'Porsche',
    name: 'Cayman',
    img: './assets/img/popular5.png',
    price: '$128,900'
},
{
    brand: 'Porsche',
    name: 'Turbo S',
    img: './assets/img/popular1.png',
    price: '$175,900'
}]

function cardChooseIntegration () {
    const chooseDiv = document.getElementById('cardLocation')
    for(let card of chooseArray) {
        // Création de la carte
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('choose__card');
        // Ajout de l'éclairage en haut à droite
        const cloud = document.createElement('div');
        cloud.classList.add('choose__card__cloud');
        cardDiv.appendChild(cloud);
        // Ajout de la marque
        const brand = document.createElement('h3');
        brand.classList.add('choose__card__title')
        brand.innerText = card.brand;
        cardDiv.appendChild(brand);
        // Ajout du nom
        const name = document.createElement('p');
        name.classList.add('choose__card__subtitle');
        name.innerText = card.name;
        cardDiv.appendChild(name);
        // Ajout de l'image
        const carImg = document.createElement('img');
        carImg.setAttribute('src', card.img);
        carImg.classList.add('choose__card__img');
        cardDiv.appendChild(carImg);
        // Ajout de la div info
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('choose__card__info');
        cardDiv.appendChild(infoDiv);
        // Ajout des différentes infos
        // 0-100
        const speed = document.createElement('div');
        speed.classList.add('choose__card__info__div');
        let speedIcon = document.createElement('i');
        speedIcon.classList.add('fa-solid', 'fa-gauge-high', 'choose__card__info__div__icon');
        let speedText = document.createElement('p');
        speedText.innerText = '3.7 Sec';
        speed.appendChild(speedIcon);
        speed.appendChild(speedText);
        infoDiv.appendChild(speed);
        // Vitesse Max
        const maxSpeed = document.createElement('div');
        maxSpeed.classList.add('choose__card__info__div');
        let maxSpeedIcon = document.createElement('i');
        maxSpeedIcon.classList.add('fa-solid', 'fa-chart-line', 'choose__card__info__div__icon');
        let maxSpeedText = document.createElement('p');
        maxSpeedText.innerText = '356 Km/h';
        maxSpeed.appendChild(maxSpeedIcon);
        maxSpeed.appendChild(maxSpeedText);
        infoDiv.appendChild(maxSpeed);
        // Type de voiture
        const type = document.createElement('div');
        type.classList.add('choose__card__info__div');
        let typeIcon = document.createElement('i');
        typeIcon.classList.add('fa-solid', 'fa-charging-station', 'choose__card__info__div__icon');
        let typeText = document.createElement('p');
        typeText.innerText = '3.7 Sec';
        type.appendChild(typeIcon);
        type.appendChild(typeText);
        infoDiv.appendChild(type);
        // Ajout du prix 
        let price = document.createElement('p');
        price.classList.add('choose__card__price');
        price.innerText = card.price;
        cardDiv.appendChild(price);
        // Ajout de l'icone panier
        let cart = document.createElement('i');
        cart.classList.add('fa-solid', 'fa-bag-shopping', 'choose__card__cart');
        cardDiv.appendChild(cart);
        // Ajout de la carte au DOM
        chooseDiv.appendChild(cardDiv);
    }
}

document.addEventListener('DOMContentLoaded', cardChooseIntegration);



/* Intégration des cartes de la div Luxury */
let luxuryArray = [{
    brand: 'Tesla',
    name: 'Model X',
    img: './assets/img/featured1.png',
    price: '$98,900'
},
{
    brand: 'Tesla',
    name: 'Model 3',
    img: './assets/img/featured2.png',
    price: '$45,900'
},
{
    brand: 'Audi',
    name: 'E-tron',
    img: './assets/img/featured3.png',
    price: '$175,900'
},
{
    brand: 'Porsche',
    name: 'Boxster 987',
    img: './assets/img/featured4.png',
    price: '$126,900'
},
{
    brand: 'Porsche',
    name: 'Panamera',
    img: './assets/img/featured5.png',
    price: '$126,900'
}]

function cardLuxuryIntegration () {
    const chooseDiv = document.getElementById('luxuryLocation')
    for(let card of luxuryArray) {
        // Création de la carte
        const cardDiv = document.createElement('div');

        cardDiv.classList.add('choose__card');
        // Ajout de l'éclairage en haut à droite
        const cloud = document.createElement('div');
        cloud.classList.add('choose__card__cloud');
        cardDiv.appendChild(cloud);
        // Ajout de la marque
        const brand = document.createElement('h3');
        brand.classList.add('choose__card__title')
        brand.innerText = card.brand;
        cardDiv.appendChild(brand);
        // Ajout du nom
        const name = document.createElement('p');
        name.classList.add('choose__card__subtitle');
        name.innerText = card.name;
        cardDiv.appendChild(name);
        // Ajout de l'image
        const carImg = document.createElement('img');
        carImg.setAttribute('src', card.img);
        carImg.classList.add('choose__card__img');
        cardDiv.appendChild(carImg);
        // Ajout du prix 
        let price = document.createElement('p');
        price.classList.add('choose__card__price');
        price.innerText = card.price;
        cardDiv.appendChild(price);
        // Ajout de l'icone panier
        let cart = document.createElement('i');
        cart.classList.add('fa-solid', 'fa-bag-shopping', 'choose__card__cart');
        cardDiv.appendChild(cart);
        // Ajout de la carte au DOM
        chooseDiv.appendChild(cardDiv);
    }
}

document.addEventListener('DOMContentLoaded', cardLuxuryIntegration);

/* Header reste en haut de l'écran lorsqu'on défile la page */
window.onscroll = function () {
    let header = document.getElementById('header');
    if (document.documentElement.scrollTop > 20) {
        header.classList.add('onscroll');;
    } else {
        header.classList.remove('onscroll');
    }
}



/* Appartion au défilement */
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

// Elements div Home apparaissant au défilement de haut en bas
const handleIntersection = function (entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible-home')
            observer.unobserve(entry.target)
        }
    })
}
  
const observer = new IntersectionObserver(handleIntersection, options)
document.querySelectorAll('[class*="revealHome-"]').forEach(function (r) {
    observer.observe(r)
})

// Elements div Home apparaissant au défilement de bas en haut
const handleIntersectionBottom = function (entries, observerBottom) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible-home')
            observerBottom.unobserve(entry.target)
        }
    })
}
  
const observerBottom = new IntersectionObserver(handleIntersectionBottom, options)
document.querySelectorAll('[class*="revealHomeBottom-"]').forEach(function (r) {
    observerBottom.observe(r)
})

//Elements Apparaissant de gauche à droite
const handleIntersectionLeft = function (entries, observerLeft) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible')
            observerLeft.unobserve(entry.target)
        }
    })
}
  
const observerLeft = new IntersectionObserver(handleIntersectionLeft, options)
document.querySelectorAll('[class*="revealLeft-"]').forEach(function (r) {
    observerLeft.observe(r)
})

// Elements apparaissant de droite à gauche
const handleIntersectionRight = function (entries, observerRight) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible')
            observerRight.unobserve(entry.target)
        }
    })
}
  
const observerRight = new IntersectionObserver(handleIntersectionRight, options)
document.querySelectorAll('[class*="revealRight-"]').forEach(function (r) {
    observerRight.observe(r)
})

// Elements div Choose apparaissant au défilement
const handleIntersectionChoose = function (entries, observerChoose) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            console.log('choose révélé !!!')
            entry.target.classList.add('reveal_visible-choose')
            observerChoose.unobserve(entry.target)
        }
    })
}
  
const observerChoose = new IntersectionObserver(handleIntersectionChoose, options)
document.querySelectorAll('[class*="revealChoose-"]').forEach(function (r) {
    observerChoose.observe(r)
})

// Elements div Luxury apparaissant au défilement
const handleIntersectionLuxury = function (entries, observerLuxury) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible-luxury')
            observerLuxury.unobserve(entry.target)
        }
    })
}
  
const observerLuxury = new IntersectionObserver(handleIntersectionLuxury, options)
document.querySelectorAll('[class*="revealLuxury-"]').forEach(function (r) {
    observerLuxury.observe(r)
})

// Elements div Icon apparaissant au défilement
const handleIntersectionIcon = function (entries, observerIcon) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible-icon')
            observerIcon.unobserve(entry.target)
        }
    })
}
  
const observerIcon = new IntersectionObserver(handleIntersectionIcon, options)
document.querySelectorAll('[class*="revealIcon-"]').forEach(function (r) {
    observerIcon.observe(r)
})

// Elements div Footer apparaissant au défilement
const handleIntersectionFooter = function (entries, observerFooter) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_visible-footer')
            observerFooter.unobserve(entry.target)
        }
    })
}
  
const observerFooter = new IntersectionObserver(handleIntersectionFooter, options)
document.querySelectorAll('[class*="revealFooter-"]').forEach(function (r) {
    observerFooter.observe(r)
})