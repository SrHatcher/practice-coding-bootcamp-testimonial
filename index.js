'use strict'
//comment from line 3 to 26 to use the fade animation and don't forget to comment from line 40 to 55 in index.html, you can use CONTROL + K + C to comment, use CONTROL + K + U to uncomment
// const carrousel = document.querySelector('.carrousel_container')
// const leftButtons = document.querySelectorAll('.testimonial__left_button')
// const rightButtons = document.querySelectorAll('.testimonial__right_button')


// leftButtons.forEach((button, index)=>{
//     button.addEventListener('click', ()=>{
//         if(!index){
//             return;
//         }else{
//             carrousel.style.transform = 'translateX(0%)'
//         }
//     })
// })

// rightButtons.forEach((button, index)=>{
//     button.addEventListener('click', ()=>{
//         if(!index){
//             carrousel.style.transform = 'translateX(-51.5%)'
//         }else{
//             return;
//         }
//     })
// })


//To use the fade animation uncomment all the code below, you can use CONTROL + K + C to comment, use CONTROL + K + U to uncomment

const testimonial = document.querySelector('.main__testimonial')
const imageTag = document.getElementById('image')
const textTag = document.querySelector('.testimonial__text')
const nameTag = document.querySelector('.testimonial__name')
const degreeTag = document.querySelector('.testimonial__degree')
const leftButton = document.querySelector('.testimonial__left_button')
const rightButton = document.querySelector('.testimonial__right_button')
const people = [
    {
        img: "./images/image-tanya.jpg",
        testimonial: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recomment this course enough. I'm now in the job of my dreams and so excited about the future."`,
        name: "Tanya Sinclair",
        degree: "UX Engineer"
    },
    {
        img: "./images/image-john.jpg",
        testimonial: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so condifent about starting up as a professional developer."`,
        name: "John Tarkpor",
        degree: "Junior Front-end Developer"
    }
]

let index = 0
leftButton.addEventListener('click', ()=>{
    if(index > 0){
        index--

        testimonial.style.display = 'none'

        imageTag.src=`${people[index].img}`
        textTag.innerText = people[index].testimonial
        nameTag.innerText = people[index].name
        degreeTag.innerText = people[index].degree

        setTimeout(() => {
            testimonial.style.display = 'flex'
        }, 10);
    }
})
rightButton.addEventListener('click', ()=>{
    if(index + 1 < people.length){
        index++

        testimonial.style.display = 'none'

        imageTag.src=`${people[index].img}`
        textTag.innerText = people[index].testimonial
        nameTag.innerText = people[index].name
        degreeTag.innerText = people[index].degree

        setTimeout(() => {
            testimonial.style.display = 'flex'
        }, 10);
    }
})