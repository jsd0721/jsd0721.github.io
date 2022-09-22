const background=document.querySelector(".background");
const backgroundSelector = document.querySelector('#background-theme-selector');



const bgSource_cartoon=[
    './image/background_cartoon/background_myapp (1).jpg',
    './image/background_cartoon/background_myapp (2).jpg',
    './image/background_cartoon/background_myapp (3).jpg',
    './image/background_cartoon/background_myapp (4).jpg',
    './image/background_cartoon/background_myapp (5).jpg',
    './image/background_cartoon/background_myapp (6).jpg',
    './image/background_cartoon/background_myapp (7).jpg',
    './image/background_cartoon/background_myapp (8).jpg',
    './image/background_cartoon/background_myapp (9).jpg',
    './image/background_cartoon/background_myapp (10).jpg'
    ];
const bgSource_nature=[
    './image/background_nature/background_myapp (1).jpg',
    './image/background_nature/background_myapp (2).jpg',
    './image/background_nature/background_myapp (3).jpg',
    './image/background_nature/background_myapp (4).jpg',
    './image/background_nature/background_myapp (5).jpg',
    './image/background_nature/background_myapp (6).jpg',
    './image/background_nature/background_myapp (7).jpg',
    './image/background_nature/background_myapp (8).jpg',
    './image/background_nature/background_myapp (9).jpg',
    './image/background_nature/background_myapp (10).jpg',
    ];

let bgTheme = bgSource_cartoon;

function backgroundSelectEvent(e){
    const bgSrcValue = e.target.value;
    if(bgSrcValue === 'bgSrc_cartoon'){
        bgTheme = bgSource_cartoon;
        console.log(bgTheme);
    }else if(bgSrcValue==='bgSrc_nature'){
        bgTheme = bgSource_nature;
        console.log(bgTheme);
    }
    
    background.src= bgTheme[Math.floor(Math.random()*10)];
    console.log(bgSrcValue);
}

function setBackground(){
    let bgNumber = Math.floor(Math.random()*10);
    background.src = bgTheme[bgNumber];
}
background.src= bgTheme[Math.floor(Math.random()*10)];
backgroundSelector.addEventListener('change',backgroundSelectEvent);
setBackground();
setInterval(setBackground,5000);