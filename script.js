console.log("Script started");

function changecolor() {
    console.log("click")
    let color = prompt("Enter a new color for the peom");
    let poem = document.getElementById("poem");
    poem.style.color = color;
}