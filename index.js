'use strict'

const carrousel = document.querySelector('.carrousel_container')
const leftButtons = document.querySelectorAll('.testimonial__left_button')
const rightButtons = document.querySelectorAll('.testimonial__right_button')

leftButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        if(!index){
            return;
        }else{
            carrousel.style.transform = 'translateX(0%)'
        }
    })
})

rightButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        if(!index){
            carrousel.style.transform = 'translateX(-51.5%)'
        }else{
            return;
        }
    })
})