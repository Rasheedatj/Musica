var swiper = new Swiper(".mySwiper", {
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
          slidesPerView: 2.2,
         
        },
        768: {
          slidesPerView: 3.2,
           
        },
        1200: {
            slidesPerView: 5.2,
            
          },
      },
  });


  // like icon chnages onclick
  let heartBtn = document.querySelector('#like')
  let filled = document.getElementById('filled-heart')
  heart = 'empty'

  document.querySelector('.heart').addEventListener('click', function(){
    if(heart === 'empty'){
      heartBtn.style.display = 'none'
      filled.style.display = 'block'
      heart = 'filled'
    }else{
      heartBtn.style.display = 'block'
      filled.style.display = 'none'
      heart = 'empty'
    }
  })

  let heartBtn2 = document.querySelector('#like2')
  let filled2 = document.getElementById('filled-heart2')
  heart = 'empty'

  document.querySelector('.heart2').addEventListener('click', function(){
    if(heart === 'empty'){
      heartBtn2.style.display = 'none'
      filled2.style.display = 'block'
      heart = 'filled'
    }else{
      heartBtn2.style.display = 'block'
      filled2.style.display = 'none'
      heart = 'empty'
    }
  })

  let heartBtn3 = document.querySelector('#like3')
  let filled3 = document.getElementById('filled-heart3')
  heart = 'empty'

  document.querySelector('.heart3').addEventListener('click', function(){
    if(heart === 'empty'){
      heartBtn3.style.display = 'none'
      filled3.style.display = 'block'
      heart = 'filled'
    }else{
      heartBtn3.style.display = 'block'
      filled3.style.display = 'none'
      heart = 'empty'
    }
  })

  // Pulsing play button
  let card = document.querySelectorAll('.swiper-slide')

    for(i = 0; i < card.length; i++) (function(i){
      card[i].onclick = function(){
        card[i].classList.toggle('active');
      }
  })(i)


let open = document.querySelector('.ham-menu')
let menu = document.querySelector('.menu')
let close = document.querySelector('.close-btn')

open.addEventListener('click', function(){
  menu.classList.toggle('active')
})

close.addEventListener('click', function(){
  menu.classList.remove('active')
})
