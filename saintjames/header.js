// header 배경
console.log(window);
window.addEventListener("scroll",()=>{
    console.log(scrollY);
    if(scrollY > 660){
        document.querySelector("header").style.backgroundColor = "rgba(84,57,57,.25)";
        document.querySelector("header").style.backdropFilter = "blur(25px)";
    }else if(scrollY<=660 || scrollY>=4765){
        document.querySelector("header").style.backgroundColor = "transparent";
    }
});

// header의 hover 효과


