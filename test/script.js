var slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides li"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30, 
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");

makeClone();

function makeClone(){
    for(var i = 0; i<slideCount; i++){
        // Node.cloneNode(): 이 메서드를 호출한 Node의 복제된 Node를 반환한다.
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.append(cloneSlide);
    }
    for(var i = slideCount-1; i>=0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
    }
}