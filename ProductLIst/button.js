
document.querySelector("#filter1").addEventListener("click", function (event) {
    filterSort(this)
});
document.querySelector("#filter2").addEventListener("click", function (event) {
    filterCat(this)
});

let clickFuncEdit= function clickFunc(){
    const t=event.target.nodeName;
    if(t==="IMG"){
        edit(event.target.parentNode.id)
    }
    else if(t==="BUTTON"){
        edit(event.target.id)
    }
};
let clickFuncDel= function clickFunc(){
    const t=event.target.nodeName;
    if(t==="IMG"){
        del(event.target.parentNode.id)
    }
    else if(t==="BUTTON"){
        del(event.target.id)
    }
};
let buttonEdit=document.getElementsByClassName("EDIT");
let buttonDel=document.getElementsByClassName("DEL");
document.querySelector("#AddButtonINP").addEventListener("click", function (event) {
    AddNew()
    buttonEdit=document.getElementsByClassName("EDIT");
    buttonDel=document.getElementsByClassName("DEL");
    start()
});
function start(){
    for (let i = 0; i < buttonEdit.length; i++) {
        buttonDel[i].addEventListener('click', clickFuncDel, false);
        buttonEdit[i].addEventListener('click', clickFuncEdit, false);
    }
}
start()