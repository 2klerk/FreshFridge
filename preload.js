function preload(){
    const html=document.querySelector("html")
    const body=document.querySelector("body")
    const img=document.createElement('img')
    console.log("preload");
    html.style.display="flex";
    html.style.justifyContent="center";
    html.style.overflow="hidden";
    html.style.pointerEvents="none"
    body.style.opacity = "0%";
    img.src="img/preload2.gif"
    html.appendChild(img);
    img.style.position="absolute"
    img.style.top="50%"
    img.style.width="100px"
    img.style.height="100px"
    setTimeout(() => {
        html.style.overflow="visible"
        body.style.opacity = "100%";
        html.style.display="block";
        img.remove()
    }, 700);
    setTimeout(() => {
        html.style.pointerEvents="fill"
    }, 100);

}