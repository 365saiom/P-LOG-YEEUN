const container3 = document.querySelector(".container3");
const box2 = document.createElement("div");
box2.classList.add("box2");
const juices = [
    "PASSIONFRUIT & PEACH TEA",
    "ORIGINAL GREEN TEA",
    "PINEAPPLE & MANGO TEA",
    "BLUEBERRY & RASPBERRY TEA",
    "BLOOD ORANGE & HIBISCUS TEA",
];

const juiceTaste = [
    "Subtly sweet",
    "A clean take on a classic",
    "Perfectly playful",
    "Cool and refreshing",
    "Crisp and easy"
]

for(let i=0; i<juices.length; i++){
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    const article = document.createElement("article");
    
    // img
    img.setAttribute("src", `./img/juice${i+1}.png`);
    img.setAttribute("alt", `juice${i+1} 사진`);
    img.classList.add("juice-box")
    img.setAttribute("style","max-width:200px; max-height:300px; width:100%; height:100%;");
    img.setAttribute("width", "500px");
    // h3
    h3.textContent = juices[i];

    // div
    div.innerText = juiceTaste[i];

    // article
    article.append(img, h3, div);
    box2.append(article);
    container3.append(box2);
}

window.addEventListener("scroll", () =>{
    console.log(scrollY);
})