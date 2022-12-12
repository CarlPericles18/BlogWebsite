




function homepage(){
    window.location.href='/index.html'
}












const mobilePov = document.querySelector('.mobileMenu');
const navMenu = document.querySelector('.ulList')
const articleTitle = document.querySelector('.articleTitle');
const articleImage = document.querySelector('.article-Image');
const articleText = document.querySelector('.article-Text');
const body = document.querySelector('.body')
const active = document.querySelector('.active')
const mainLogo = document.querySelector(".mainLogo")















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
   





 // invalid FORMS JS

 const submitBtn = document.querySelector('.sub')
 const box1 = document.querySelector('.box1');
 const box2 = document.querySelector('.box2');
 const box3 = document.querySelector('.box3');
 const box4 = document.querySelector('.box4');
 const invalidMain = document.querySelector('.invalidMain')
 const invalidMainTwo = document.querySelector('.invalidMainTwo')
 const contactBox = document.querySelectorAll('.contactBox')




let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let emailValues = box2.value;
   if(box1.value === '' || box3.value === ''|| box4.value === ''){
        invalidMain.style.display ='block';
        invalidMainTwo.style.display ='none';
   }else if(!emailValues.match(validRegex)){
    
        invalidMainTwo.style.display ='block';
        invalidMain.style.display ='none';

   }else{
    invalidMain.style.display ='none';
    invalidMainTwo.style.display ='none';
    sendEmail()
   }

})

    function sendEmail(){

       
    }


    // LANGUAGE 

    const languageBtn = document.querySelector('.languageBtn');
    const languageBox = document.querySelector('.lang')


    function openLang(){
        languageBox.classList.toggle('langActive')
    }

    // let languageChange = {
    //     eng:{
    //         body:body;
    //     },
    //     es:{
    //         body:''
    //     }
    // }

    // function changeLanguage(lan){

    // }

