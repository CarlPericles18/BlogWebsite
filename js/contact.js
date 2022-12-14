
const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleImage = document.querySelector('.article-Image');
const articleText = document.querySelector('.article-Text');
const body = document.querySelector('.body')
const active = document.querySelector('.active')
const mainLogo = document.querySelector(".mainLogo")





function homepage(){
    window.location.href='/index.html'
}





    mobilePov.addEventListener('click',()=>{   
        body.classList.toggle('fixed')
        
})






// ARTICLES PUSH


// window.addEventListener('load',()=>{
// })




//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   




