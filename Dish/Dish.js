class REQ{
    constructor(Name,Count) {
        this.Name=Name;
        this.Count=Count;
    }
    getName(){return this.Name;}
    getCount(){return this.Count;}
}
class Dish{
    constructor(Name,Recipe){
        this.Name=Name;
        this.Recipe=Recipe;
    }

    getRecipe(){return this.Recipe;}
    getName(){return this.Name;}
}
class List{
    constructor(array) {
        this.array=array;
        this.parent=document.querySelector(".DishList");

    }
    createList(){
        for (let i = 0; i < this.array.length; i++) {
            const el=document.createElement("div")
            el.className="Dish"
            el.innerHTML="<div class='Name'>"+this.array[i].getName()+"</div>";
            let req=this.array[i].getRecipe()
            let s=""
            for (let j = 0; j < req.length; j++) {
                s+=req[j].getName()+": "+req[j].getCount()+"\n"
            }
            el.innerHTML+="<div class='Recipe'>"+s+"</div>"
            this.parent.appendChild(el);
        }
    }
}
let list=[]
let req1=[]
req1.push(new REQ("��������","125�"))
req1.push(new REQ("�����","200�"))
req1.push(new REQ("����","4��"))
req1.push(new REQ("������","3��"))
list.push(new Dish("�����",req1))
let req2=[]
req2.push(new REQ("����","125�"))
req2.push(new REQ("������","12�"))
req2.push(new REQ("����","30�"))
list.push(new Dish("�������",req2))
new List(list).createList()