let statusFS= false, statusFCT=false;
function filterSort(event){
    if(event.checked === true && statusFS===false){
        a.SortByDate("<");
        DelAll();
        let t=a.getArray();
        if (statusFCT===true){
            statusFCT=false;
            filterCat(event)
        }
        else {
            for (let i = 0; i < t.length; i++) {
                addE(i, t[i].getName(), t[i].getDate(), t[i].getCat())
            }
        }
    }
}
function filterCat(event){
    if(event.checked === true &&statusFCT===false){
        statusFCT=true;
        const parent=document.querySelector("#ProductList")
        DelAll();
        a.createCatArray(a.CatLine())
        let t=a.getCat()
        let id=0
        for(let i=0;i<t.length;i++){
            const h=document.createElement("h2")
            h.textContent=t[i].getCat()
            h.className="CatTitle"
            parent.appendChild(h)
            let t2=t[i].getArray()
            for(let j=0;j<t2.length;j++){
                addE(id,t2[j].getName(),t2[j].getDate(),t2[j].getCat())
                id++
            }
        }
    }
    else if(event.checked===false){
        statusFCT=false;
        DelAll();
        let t=a.getArray()
        for (let i = 0; i < t.length; i++) {
            addE(i, t[i].getName(), t[i].getDate(), t[i].getCat())
        }
    }
}
