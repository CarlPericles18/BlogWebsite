



const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleImage = document.querySelector('.article-Image');
const articleText = document.querySelector('.article-Text');
const body = document.querySelector('.body')
const active = document.querySelector('.active')


function homepage(){
    window.location.href='/index.html'
}


    mobilePov.addEventListener('click',()=>{   
        body.classList.toggle('fixed')
        
})


fetch('./index.json')
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data){
    console.log(data[0].title)
}














// ARTICLES PUSH


window.addEventListener('load',()=>{
})








//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   