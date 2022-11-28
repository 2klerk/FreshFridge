function filterSort(event){
    if(event.checked === true){
        DelAll();
        let t=a.getArray()
        for(let i=0;i<t.length;i++){
            addE(i,t[i].getName(),t[i].getDate(),t[i].getCat())
        }
    }
}
function filterCat(event){
    if(event.checked === true){
        const parent=document.querySelector("#ProductList")
        DelAll();
        a.createCatArray(a.CatLine())
        let t=a.getCat()
        console.log(t)
        let id=0
        console.log(t.length)
        for(let i=0;i<t.length;i++){
            const h=document.createElement("h2")
            h.textContent=t[i].getCat()
            parent.appendChild(h)
            let t2=t[i].getArray()
            for(let j=0;j<t2.length;j++){
                addE(id,t2[j].getName(),t2[j].getDate(),t2[j].getCat())
                console.log(id,t2[j].getName(),t2[j].getDate(),t2[j].getCat())
                id++
            }
        }
    }
}