// const image=document.getElementById("image")
const btn= document.getElementById("btn");

// btn.addEventListener("click",changeimg)
// function changeimg(){
//     image.src = "https://picsum.photos/300?random=300";
// }
btn.addEventListener("click", function () {
    image.src = " https://picsum.photos/300?random?"+Math.floor(Math.random() * 1677721).toString(16);
    var randomColor = Math.floor(Math.random() * 1677721).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    btn.innerText = `#${randomColor}`;
  });
  