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
req1.push(new REQ("Маргарин","125г"))
req1.push(new REQ("Сахар","200г"))
req1.push(new REQ("Яйца","4шт"))
req1.push(new REQ("Яблоки","3шт"))
list.push(new Dish("Пирог",req1))
let req2=[]
req2.push(new REQ("Мясо","125г"))
req2.push(new REQ("Специи","12г"))
req2.push(new REQ("Мука","30г"))
list.push(new Dish("Шницель",req2))
new List(list).createList()