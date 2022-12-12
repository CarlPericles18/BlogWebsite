



const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleTitle2 = document.querySelector('.articleTitle2');
const articleTitle3 = document.querySelector('.articleTitle3');
const articleTitle4 = document.querySelector('.articleTitle4');
const articleTitle5 = document.querySelector('.articleTitle5');
const articleTitle6 = document.querySelector('.articleTitle6');
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

const authorName= Array.from(document.querySelectorAll('.author-name'))
const date= Array.from(document.querySelectorAll('.date'))
fetch('./index.json')
.then(response => response.json())
.then(data => showInfo(data));


function showInfo(data){
    articleTitle.append(data[0].title)
    articleTitle2.append(data[1].title)
    articleTitle3.append(data[2].title)
    articleTitle4.append(data[3].title)
    articleTitle5.append(data[4].title)
    articleTitle6.append(data[5].title)
    authorName.forEach((Element)=>{
        Element.append(data[0].name)
    })
    date.forEach((Element)=>{
        Element.append(data[0].date)
    })

}














// ARTICLES PUSH


window.addEventListener('load',()=>{
})








//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   