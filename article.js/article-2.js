

const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleImage = document.querySelector('.article-Image');
const body = document.querySelector('.body')
const active = document.querySelector('.active')
const mainLogo = document.querySelector(".mainLogo")
const authorName = document.querySelector(".author-name")
const date = document.querySelector(".date")
const subT1 = document.querySelector(".subT1")
const articleText1 = document.querySelector('.article-Text1');
const subT2 = document.querySelector(".subT2")
const articleText2 = document.querySelector('.article-Text2');
const subT3 = document.querySelector(".subT3")
const articleText3 = document.querySelector('.article-Text3');
const subT4 = document.querySelector(".subT4")
const articleText4 = document.querySelector('.article-Text4');
const subT5 = document.querySelector(".subT5")
const articleText5 = document.querySelector('.article-Text5');
const subT6 = document.querySelector(".subT6")
const articleText6 = document.querySelector('.article-Text6');





    mobilePov.addEventListener('click',()=>{   
        body.classList.toggle('fixed')
        
})


fetch('/index.JSON')
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data){
    articleTitle.append(data[1].title)
    authorName.append(data[1].name)
    date.append(data[1].date)
    

}





// ARTICLES PUSH


//Responsive menu
mobilePov.addEventListener('click',()=>{
    mobilePov.classList.toggle('active');
    navMenu.classList.toggle('active')
 })
   











