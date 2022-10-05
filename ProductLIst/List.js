
k=false;
var mas=importJSON();
elem = {
    name: "",
    date: "",
    category:""
};
function importJSON(){
    var mas =  new Array();
    mas.push({name:"meet",date:"22",category:"meet"});
    mas.push({name:"meet",date:"22",category:"meet"});
    mas.push({name:"meet",date:"22",category:"meet"});
    return mas;
}
function addE(id,name,date,category){
    document.write('            <section class="view" id=Sec'+id+'>');
    document.write('                <h2 id=N'+id+'><img src="media/shopping-cart.png" width="20px" height="20px">  '+name+'</h2>');
    document.write('                <p id="D'+id+'"><img src="media/calendar.png" width="15px" height="15px">  '+date+'</p>');
    document.write('                <p id="C'+id+'"><img src="media/menu-burger.png" width="15px" height="15px">  '+category+'</p>');
    document.write('                <section class="Button">');
    document.write('                    <button id='+id+' onclick="edit(this.id)"><img src="media/pencil.png" alt="edit" width="20px" height="20px"></button>');
    document.write('                    <button id='+id+' onclick="del(this.id)"><img src="media/trash.png" alt="thrash" width="20px" height="20px"></button>');
    document.write('                </section>');
    document.write('            </section>');
}
function edit(id) {
    if(k==false){
        var parent=document.getElementById("Sec"+id);
        var h2=document.getElementById("N"+id);
        const inputN=document.createElement('input');
        inputN.type='text';
        inputN.id='inpN'+id;
        inputN.value=h2.textContent;
        parent.insertBefore(inputN,h2);
        parent.removeChild(h2);

        var p1=document.getElementById("D"+id);
        const inputD=document.createElement('input');
        inputD.type='text';
        inputD.id='inpD'+id;
        inputD.value=p1.textContent;
        parent.insertBefore(inputD,p1);
        parent.removeChild(p1);

        var p2=document.getElementById("C"+id);
        const inputC=document.createElement('input');
        inputC.type='text';
        inputC.id='inpC'+id;
        inputC.value=p2.textContent;
        parent.insertBefore(inputC,p2);
        parent.removeChild(p2);
        
        k=true;
    }
    else {
        var img = document.createElement("img");
        img.src = src="media/shopping-cart.png";
        img.style.width="20px";
        img.style.height="20px";
        var parent=document.getElementById("Sec"+id);
        var text1=document.getElementById("inpN"+id);
        const h2=document.createElement('h2');
        h2.innerHTML=text1.value;
        parent.insertBefore(h2,text1);
        parent.removeChild(text1);
        h2.id='N'+id;

        var text2=document.getElementById("inpD"+id);
        const p1=document.createElement('p');
        p1.innerHTML=text2.value;
        parent.insertBefore(p1,text2);
        parent.removeChild(text2);
        p1.id='D'+id;

        var text3=document.getElementById("inpC"+id);
        const p2=document.createElement('p');
        p2.innerHTML=text3.value;
        parent.insertBefore(p2,text3);
        parent.removeChild(text3);
        p2.id='C'+id;
        k=false;
    }
}
function del(id) {
    const element = document.getElementById("Sec"+id);
    element.remove(); 
}

document.write(' <article  id="ProductList"> ');
document.write(' <h1>ProductList</h1>');
var mas=importJSON();
for (let i = 0;i< mas.length; i++){  
    addE(i,mas[i]["name"],mas[i]["date"],mas[i]["category"]);
}
document.write('            </article> ');