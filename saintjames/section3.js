const main = document.querySelector("main");
const section3 = main.querySelector(".section3");

const article2 = document.createElement("article");
article2.classList.add("article2");

const item = document.createElement("div");
item.classList.add("item");


const juices = [
    "PASSIONFRUIT & PEACH TEA",
    "ORIGINAL GREEN TEA",
    "PINEAPPLE & MANGO TEA",
    "BLUEBERRY & RASPBERRY TEA",
    "BLOOD ORANGE & HIBISCUS TEA",
]

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
    const item = document.createElement("div");

    item.classList.add("item")

    // img
    img.setAttribute("src", `./img/juice${i+1}.png`);
    img.setAttribute("alt", `juice${i+1} 사진`);
    img.setAttribute("style","max-width:200px; max-height:300px; width:100%; height:100%;");
    img.setAttribute("width", "500px");
    
    // h3
    h3.textContent = juices[i];

    // div
    div.innerText = juiceTaste[i];

    // article
    item.append(img, h3, div);
    article2.append(item);
    section3.append(article2);

}
