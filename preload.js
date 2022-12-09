function preload(){
    const body=document.querySelector("body")
    const img=document.createElement('img')
    console.log("preload");
    document.querySelector("html").style.pointerEvents="none"
    document.querySelector("body").style.opacity = "0%";
    img.src="img/preload2.gif"
    document.querySelector("html").appendChild(img);
    img.style.position="absolute"
    img.style.top="50%";
    img.style.left="45%";
    img.style.width="100px"
    img.style.height="100px"
    setTimeout(() => {
        body.style.opacity = "100%";
        img.remove()
    }, 700);
    setTimeout(() => {
        document.querySelector("html").style.pointerEvents="fill"
    }, 100);

}