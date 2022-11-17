
k=false;
KAdd=false
elem = {
    name: "",
    date: "",
    category:""
};
function fromFile(){
    var file = document.getElementById("inputFile");
    alert(file.value());
}
document.write(' <article  id="ProductList"> ');
function importJSON(){
    var mas =  new Array();
    mas.push({name:"meet1",date:"2022-11-11",category:"meet"});
    mas.push({name:"meet2",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet3",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet4",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet5",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet6",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet7",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet8",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet9",date:"2021-12-22",category:"meet"});
    mas.push({name:"meet10",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet11",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet12",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet13",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet14",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet15",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet16",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet17",date:"2022-12-22",category:"meet"});
    mas.push({name:"meet18",date:"2022-12-22",category:"meet"});
    return mas;
}
function setStatus(el,date){
    let dateLoc=new Date();
    let dateEnd=new Date(date);
    dateLoc.setHours(0,0,0,0);
    dateEnd.setHours(0,0,0,0);
    let status = (dateEnd-dateLoc)/60/60/24/1000;
    el.style.border="4px solid";
    if(status==1){
        el.style.borderColor="yellow";
    }
    else if(status<0){
        el.style.borderColor="red";
    }
    else{
        el.style.borderColor="green";
    }
}
function addE(id,name,date,category){
    document.write('            <section class="view" id=Sec'+id+'>');
    document.write('                <h2 id=N'+id+'>'+name+'</h2>');
    document.write('                <p id="D'+id+'">'+date+'</p>');
    document.write('                <p id="C'+id+'">'+category+'</p>');
    document.write('                <section class="Button">');
    document.write('                    <button class="EDIT" id='+id+' onclick="edit(this.id)"><img src="media/pencil.png" alt="edit" width="20px" height="20px"></button>');
    document.write('                    <button class="DEL" id='+id+' onclick="del(this.id)"><img src="media/trash.png" alt="thrash" width="20px" height="20px"></button>');
    document.write('                </section>');
    document.write('            </section>');
    var el=document.getElementById("Sec"+id);
    setStatus(el,date);
}
function EDIT_START(obj){
    setTimeout(() => {
        obj.style.opacity="100%";
        obj.style.transform="translateY(0px)";

    }, 400);
}
function inputADD(parent,obj1,obj2,id){
    obj1.type='text';
    obj1.id=id;
    obj1.className="EDITFORM";
    obj1.value=obj2.textContent;
    obj2.style.opacity="100%";
    obj1.style.opacity="0%";
    parent.insertBefore(obj1,obj2);
}
function edit(id,) {
    if(k==false){
        var parent=document.getElementById("Sec"+id);
        var h2=document.getElementById("N"+id);
        const inputN=document.createElement('input');
        inputADD(parent,inputN,h2,"inpN"+id);
        inputN.style.transform="translateY(-70px)";
        parent.removeChild(h2);

        var p1=document.getElementById("D"+id);
        const inputD=document.createElement('input');
        inputADD(parent,inputD,p1,"inpD"+id);
        inputD.style.transform="translateY(-80px)";
        parent.removeChild(p1);

        var p2=document.getElementById("C"+id);
        const inputC=document.createElement('input');
        inputADD(parent,inputC,p2,"inpC"+id);
        inputC.style.transform="translateY(-40px)";
        parent.removeChild(p2);

        EDIT_START(inputC);
        EDIT_START(inputD);
        EDIT_START(inputN);

        k=true;
    }
    else {

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
    const element1 = document.getElementById("Sec"+id);
    k=false;
    delete mas[id];
    console.log(mas);
    element1.style.transition=".5";
    element1.style.transform="translateY(-30px)";
    element1.style.opacity="0";
    setTimeout(() => { element1.remove(); }, 400);
}
function funcTransport() {
    var id=document.getElementById("inputArea");
    if(KAdd==false){
        KAdd=true;
        id.style.transform="translateX(0%)";
    }
    else {
        KAdd=false;
        id.style.transform="translateX(150%)";
    }
}

function AddNew(){
    var Name=this.Product.value;
    var Dat = this.Dat.value;
    var Cat=this.Category.value;
    if(Name!=null && Name!=undefined && Name!=""){
        if(Dat!=null && Dat!=undefined && Dat!=""){
            if(Cat!=null && Cat!=undefined && Cat!=""){
                mas.push({name:Name,date:Dat,category:Cat});
                var id=mas.length-1;
                var par = document.getElementById("ProductList");
                var sec1 = document.createElement('section');
                sec1.className="view";
                sec1.id="Sec"+id;
                sec1.innerHTML="<h2 id=N"+id+">"+Name+"</h2>"+"<p id=D"+id+">"+Dat+"</p>"+ "<p id=C"+id+">"+Cat+"</p>"+ "<section class=Button></section> <button class=EDIT id="+id+" onclick=edit(this.id)><img src=media/pencil.png alt=edit width=20px height=20px></button>"+ "<button class=DEL id="+id+" onclick=del(this.id)><img src=media/trash.png alt=thrash width=20px height=20px></button>";"</section>"+ "</section>";
                sec1.style.opacity="0%";
                sec1.style.transition="0.5s";
                setStatus(sec1,Dat);
                par.appendChild(sec1);
                this.Product.value="";
                this.Dat.value=Dat-Dat;
                this.Category.value="";
                setTimeout(() => {sec1.style.opacity="100%"; }, 400);
            }
        }
    }
}
function download(){
    var myJsonString = JSON.stringify(mas);
    return myJsonString;
}

var mas=importJSON();
for (let i = 0;i< mas.length; i++){
    addE(i,mas[i]["name"],mas[i]["date"],mas[i]["category"]);
}
document.write('            </article> ');
