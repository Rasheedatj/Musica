const global = {
  currentPage: window.location.pathname,
};
const open = document.querySelector('.ham-menu');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close-btn');

function initSwiper() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
}

// like icon changes onclick
function like(e) {
  if (e.target.classList.contains('fa-heart-o')) {
    e.target.classList.replace('fa-heart-o', 'fa-heart');
  } else if (e.target.classList.contains('fa-heart')) {
    e.target.classList.replace('fa-heart', 'fa-heart-o');
  }
}

// Pulsing play button
function play(e) {
  if (e.target.classList.contains('fa-play')) {
    document.querySelectorAll('.fa-pause').forEach((icon) => {
      icon.classList.replace('fa-pause', 'fa-play');
      console.log('object');
    });
    e.target.classList.replace('fa-play', 'fa-pause');
  } else if (e.target.classList.contains('fa-pause')) {
    e.target.classList.replace('fa-pause', 'fa-play');
  }
}

function init() {
  switch (global.currentPage) {
    case '/Musica/':
    case '/Musica/index.html':
      document.querySelector('.top-charts').addEventListener('click', like);
      initSwiper();
      document.addEventListener('click', play);
      break;
    case '/Musica/dist/album.html':
      console.log('album');
      break;
    case '/Musica/dist/collection.html':
      console.log('collection');
      document.addEventListener('click', play);

      break;
  }

  open.addEventListener('click', function () {
    menu.classList.add('active');
  });

  close.addEventListener('click', function () {
    menu.classList.remove('active');
  });
}

init();

// async function data() {
//   // const url =
//   //   'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';

//   // const url =
//   //   'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';

//   const url =
//     'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '5424b54b56msh33a2871700b6e9dp156c33jsn6683997ba1c6',
//       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// data();
