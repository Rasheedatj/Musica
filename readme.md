# Ocotber Challenge - Musica website solution


This is a solution to the [Musica multi-page website](https://twitter.com/codingossy/status/1578823693979242497?s=20&t=TDRfiyTsFcjN6APypb2rMg) October frontend challenge

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Musica is an online music streaming website, users of this website should be able to play, pause and shuffle music. Its user friendly and easy to maneuveur with lots of songs to choose from ranging through all music genres.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Play, pause, skip and shuffle music

### Screenshot
![](./dist/img/page_shot.png)

### Links

- [Repository URL](https://github.com/Rasheedatj/musica)
- [Live site URL](https://rasheedatj.github.io/musica/)

## My process

After I saw this callenge on twitter I decided to study it and draw out saples of the layout and how i was going to structure the page, after understanding the concept of the page and the appropiate styles to use I proceeded to coding the solution. This project was built with SCSS so i started the styling by creating a partial in whuch i stored all the color variables and other general properties and then i Imported the prtial into all my .scss files. I then proceeded to the desktop styling and then the mobile layout, I tried two options on the side menu before I settled with this since it was my first time working with side menu. I also added DOM manipulation to this project using javascrip for functions like the love button and the hamburger menu. My final procedure was to check out my live site and make little adjustment to the padding and margin to attain perfection.

### Built with



- Semantic HTML5 markup
 
  ![](./dist/img/html.svg)
- Javascript
    
  ![](./dist/img/javascript%20logo.svg)

- SCSS
- ![](./dist/img/scss.png)

- Custom css properties
- Mobile-first workflow

### What I learned

- How to create side menu
- More on javascript DOM manipulation
- Background-blend-ode property
- I was able to test my css postion property skill

```html

             <aside class="side-menu">
         <div class="part-1">
            <a href="#"><img src="./dist/img/home.svg" alt="home icon"></a>
            <a href="./dist/collection.html"><img src="./dist/img/library.svg" alt="music library"></a>
            <a href="#"><img src="./dist/img/radio.svg" alt="radio"></a>
            <a href="#"><img src="./dist/img/video-horizontalvideo.svg" alt="videos"></a>
         </div>

         <div class="part-2">
            <a href="#"><img src="./dist/img/profile.svg" alt="profile"></a>
            <a href="#"><img src="./dist/img/Vectorexit.svg" alt="exit"></a>
         </div>
      </aside>
```

```scss
 .playlist{
        padding-left: 19.5rem;
        padding-top: 3rem;
        padding-right: 10rem;
        padding-bottom: 12rem;
        @include flexNormal(column);
        gap: 2rem;

        // mobile code
        @include mobile{
            padding-inline: 3.5rem
        }

        .song{
            @include flexNormal (row);
            align-items: center;
            justify-content: space-between;
            color: white;
            background-color: $accentAlt;
            padding: 0rem 2rem;
            border-radius: 20px;
            position: relative;
            padding: 1rem 2rem;

            .box1{
                @include flexNormal(row);
                align-items: center;
                gap: 5rem;

                @include mobile{
                    gap: 1.5rem;
                }

                .like{
                    @include mobile{
                        display: none
                    }
                }
            }
            .box2{
                @include flexNormal(row);
                align-items: center;
                gap: 10rem;
                position: absolute;
                left: 30%;

                @include mobile{
                    flex-direction: column;
                    gap: 0;
                    align-items: start;
                    line-height: 10px;
                }
                .song-type{
                    line-height: 15px;
                }
               
            }

            p{
                color: $white;
                font-size: 1.2rem;
                line-height: 25px;
                font-weight: 400;
                padding-block: 2.5rem;
                text-transform: capitalize;
                text-align: left;

                @include mobile{
                    padding-block: 0rem;
                }
            }
            > p{
                position: absolute;
                right:20%;
            }
        }
    }


```

```js
  let card = document.querySelectorAll('.swiper-slide')

    for(i = 0; i < card.length; i++) (function(i){
      card[i].onclick = function(){
        card[i].classList.toggle('active');
      }
  })(i)
```

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown) - This was my resort to finding handy solutions from other developers.
- [Swiper js](https://swiperjs.com/) - This is an amazing website that made swiper with javascript easier

## Author

- LinkedIn - [Rasheedat](https://www.linkedin.com/in/rashedat-jinadu-066078227)

- Twitter - [@Rashedatj](https://www.twitter.com/Rashedatj)