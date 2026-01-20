function colorChanger(){
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    return `rgb(${r}, ${g}, ${b}) `; 
};
document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".color").style.backgroundColor = colorChanger();
})