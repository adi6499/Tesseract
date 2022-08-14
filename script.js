let box= document.querySelector(".box")
let contain = document.querySelector(".contain")
contain.addEventListener("mousemove",(e)=>{
    let x = e.clientX/window.innerWidth * 360
    let y = e.clientY/window.innerHeight * 360;
    box.style.animation="none"
    box.style.transform=`rotateX(${x}deg)rotateY(${y}deg)rotateZ(${x+y}deg)`
    console.log(x)
})

contain.addEventListener("touchmove",(e)=>{
    
    let x = e.touches[0].clientX/window.innerWidth * 360
    let y = e.touches[0].clientY/window.innerHeight * 360;
    box.style.animation="none"
    box.style.transform=`rotateX(${x}deg)rotateY(${y}deg)rotateZ(${x+y}deg)`
    console.log(x)
})