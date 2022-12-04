class info{
    constructor(date,title) {
        this.date=date;
        this.title=title;
    }
    getDate(){return this.date;}
    getTitle(){return this.title;}
}
class ManagerNews{
    constructor(array) {
        this.array=array;
    }
    createOnScreen(){
        const parent=document.querySelector("#cards")
        for(let i=this.array.length-1;i>-1;i--){
            const card=document.createElement("div")
            card.className="card";
            card.innerHTML='<div class="date">'+this.array[i].getDate()+'</div>'
            card.innerHTML+='<div class="title">'+this.array[i].getTitle()+'</div>'
            parent.appendChild(card)
        }
    }
}