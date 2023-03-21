'use strict'

const carrousel = document.querySelector('.carrousel_container')
const leftButtons = document.querySelectorAll('.testimonial__left_button')
const rightButtons = document.querySelectorAll('.testimonial__right_button')

//To change the animation for changing the testimonial, uncomment the the commented code
//const testimonials = document.querySelectorAll('.main__testimonial')
//testimonials[1].style.display = 'none'

leftButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        if(!index){
            return;
        }else{
            //to change the animation uncomment the next  two lines
            // testimonials[index].style.display = 'none'
            // testimonials[index - 1].style.display = 'flex'

            //to change the animation comment the next line
            carrousel.style.transform = 'translateX(0%)'

        }
    })
})

rightButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        if(!index){
            //to change the animation uncomment the next  two lines
            // testimonials[index].style.display = 'none'
            // testimonials[index + 1].style.display = 'flex'

            //to change the animation comment the next line
            carrousel.style.transform = 'translateX(-51.5%)'
        }else{
            return;
        }
    })
})