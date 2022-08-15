// function to creat X when ckick on BaseAudioContext

const box1 = document.getElementById("grid-box-1")
const box2 = document.getElementById("grid-box-2")
const box3 = document.getElementById("grid-box-3")
const box4 = document.getElementById("grid-box-4")
const box5 = document.getElementById("grid-box-5")
const box6 = document.getElementById("grid-box-6")
const box7 = document.getElementById("grid-box-7")
const box8 = document.getElementById("grid-box-8")
const box9 = document.getElementById("grid-box-9")



document.querySelectorAll(".grid-box").forEach(box => {
  box.addEventListener("click",function (event) {
    box.innerHTML = "X"
});

  
})