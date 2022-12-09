let k = false;
let KAdd = false
class Category{
    constructor(Category,array) {
        this.Category=Category
        this.array=array;
    }
    getCat() {
        return this.Category;
    }

    getArray() {
        return this.array;
    }
}
class ArrayOperation {

    constructor(array) {
        this.array = array;
    }

    CatLine() {
        let flags = {};
        return this.array.filter(function (entry) {
            if (flags[entry.getCat()]) {
                return false;
            }
            flags[entry.getCat()] = true;
            return true;
        });
    }

    createCatArray(array) {
        let cat = [];
        for (let i = 0; i < array.length; i++) {
            let t = [];
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[j].getCat() === array[i].getCat()) {
                    t.push(new elem(this.array[j].getName(), this.array[j].getDate(), this.array[j].getCat()));
                }
            }
            cat.push(new Category(array[i].getCat(),t));
        }
        this.cat = cat;
    }
    SortByDate(operand) {
        if (operand === "<") {
            (this.array).sort((a, b) => a.getDate() - b.getDate());
            this.array.sort((a, b) => {
                let d1 = new Date(a.getDate()) - new Date();
                let d2 = new Date(b.getDate()) - new Date();
                if (d1 < d2) {
                    return -1;
                }
                if (d1 > d2) {
                    return 1;
                }
                return 0;
            });
        } else {
            (this.array).sort((a, b) => a.getDate() - b.getDate());
            this.array.sort((a, b) => {
                let d1 = new Date(a.getDate()) - new Date();
                let d2 = new Date(b.getDate()) - new Date();
                if (d1 > d2) {
                    return -1;
                }
                if (d1 < d2) {
                    return 1;
                }
                return 0;
            });
        }
    }

    getArray() {
        return this.array;
    }

    getCat() {
        return this.cat;
    }
    setArray(array){
        this.array=array.filter(function (el) {
            return el != null;
        });
    }
}


let mas = importJSON();
for (let i = 0; i < mas.length; i++) {
    addE(i, mas[i]["name"], mas[i]["date"], mas[i]["category"]);
}
let a = new ArrayOperation(mas);    //глобальная переменная


function fromFile() {
    let file = document.getElementById("inputFile");
    alert(file.value());
}


function importJSON() {
    let mas = [];
    mas.push(new elem("meat1", "2022-11-11", "meat"));
    mas.push(new elem("meat2", "2022-12-22", "meat"));
    mas.push(new elem("meat3", "2022-11-30", "meat"));
    mas.push(new elem("meat4", "2022-12-22", "meat"));
    mas.push(new elem("meat5", "2022-12-22", "meat"));
    mas.push(new elem("meat6", "2022-12-22", "meat"));
    mas.push(new elem("meat7", "2022-12-22", "meat"));
    mas.push(new elem("meat8", "2022-12-22", "meat"));
    mas.push(new elem("meat9", "2021-12-22", "meat"));
    mas.push(new elem("bread", "2021-12-22", "bakery products"));
    mas.push(new elem("NeMoloko", "2022-12-22", "milk"));
    return mas;
}
function setStatus(el, date) {
    let dateLoc = new Date();
    let dateEnd = new Date(date);
    dateLoc.setHours(0, 0, 0, 0);
    dateEnd.setHours(0, 0, 0, 0);
    let status = (dateEnd - dateLoc) / 60 / 60 / 24 / 1000;
    el.style.border = "4px solid";
    if (status === 1) {
        el.style.borderColor = "yellow";
    } else if (status < 0) {
        el.style.borderColor = "red";
    } else {
        el.style.borderColor = "green";
    }
}
function addE(id, name, date, category) {
    const parent=document.querySelector("#ProductList");
    const el=document.createElement("section")
    el.className='view'
    el.id="Sec"+id
    el.innerHTML+='                <h2 id=N' + id + '>' + name + '</h2>';
    el.innerHTML+='                <p id="D' + id + '">' + date + '</p>';
    el.innerHTML+='                <p id="C' + id + '">' + category + '</p>';
    el.innerHTML+='                <section class="Button">';
    el.innerHTML+='                    <button class="EDIT" id=' + id + '><img src="img/ProductList/pencil.png" alt="edit" width="20px" height="20px">';
    el.innerHTML+='                    <button class="DEL" id=' + id +  '><img src="img/ProductList/trash.png" alt="thrash" width="20px" height="20px">';
    el.innerHTML+='                </section>';
    parent.appendChild(el)
    setStatus(el, date);
}
function EDIT_START(obj) {
    setTimeout(() => {
        obj.style.opacity = "100%";
        obj.style.transform = "translateY(0px)";

    }, 400);
}

function inputADD(parent, obj1, obj2, id) {
    obj1.type = 'text';
    obj1.id = id;
    obj1.className = "EDITFORM";
    obj1.value = obj2.textContent;
    obj2.style.opacity = "100%";
    obj1.style.opacity = "0%";
    parent.insertBefore(obj1, obj2);
}

function edit(id) {
    let parent;
    if (k === false) {
        parent = document.getElementById("Sec" + id);
        const h2 = document.getElementById("N" + id);
        const inputN = document.createElement('input');
        inputADD(parent, inputN, h2, "inpN" + id);
        inputN.style.transform = "translateY(-70px)";
        parent.removeChild(h2);

        const p1 = document.getElementById("D" + id);
        const inputD = document.createElement('input');
        inputADD(parent, inputD, p1, "inpD" + id);
        inputD.style.transform = "translateY(-80px)";
        parent.removeChild(p1);

        const p2 = document.getElementById("C" + id);
        const inputC = document.createElement('input');
        inputADD(parent, inputC, p2, "inpC" + id);
        inputC.style.transform = "translateY(-40px)";
        parent.removeChild(p2);

        EDIT_START(inputC);
        EDIT_START(inputD);
        EDIT_START(inputN);

        k = true;
    } else {

        parent = document.getElementById("Sec" + id);
        const text1 = document.getElementById("inpN" + id);
        const h2 = document.createElement('h2');
        h2.innerHTML = text1.value;
        parent.insertBefore(h2, text1);
        parent.removeChild(text1);
        h2.id = 'N' + id;

        const text2 = document.getElementById("inpD" + id);
        const p1 = document.createElement('p');
        p1.innerHTML = text2.value;
        parent.insertBefore(p1, text2);
        parent.removeChild(text2);
        p1.id = 'D' + id;

        let text3 = document.getElementById("inpC" + id);
        const p2 = document.createElement('p');
        p2.innerHTML = text3.value;
        parent.insertBefore(p2, text3);
        parent.removeChild(text3);
        p2.id = 'C' + id;
        k = false;
    }
}

function del(id) {
    const element1 = document.getElementById("Sec" + id);
    k = false;
    delete mas[id];
    a.setArray(mas);

    console.log(mas);
    element1.style.transition = ".5";
    element1.style.transform = "translateY(-30px)";
    element1.style.opacity = "0";
    setTimeout(() => {
        element1.remove();
    }, 400);
}

function funcTransport() {
    let id = document.getElementById("inputArea");
    if (KAdd === false) {
        KAdd = true;
        id.style.transform = "translateX(0%)";
    } else {
        KAdd = false;
        id.style.transform = "translateX(150%)";
    }
}

function AddNew() {
    let Name = this.Product.value;
    let Dat = this.Dat.value;
    let Cat = this.Category.value;
    if (Name != null && Name !== "") {
        if (Dat != null && Dat !== "") {
            if (Cat != null && Cat !== "") {
                mas.push(new elem(Name, Dat, Cat));
                let id = mas.length - 1;
                let par = document.getElementById("ProductList");
                let sec1 = document.createElement('section');
                sec1.className = "view";
                sec1.id = "Sec" + id;
                sec1.innerHTML = "<h2 id=N" + id + ">" + Name + "</h2>" + "<p id=D" + id + ">" + Dat + "</p>" + "<p id=C" + id + ">" + Cat + "</p>" + "<section class=Button></section> <button class=EDIT id=" + id + "><img src=img/ProductList/pencil.png alt=edit width=20px height=20px></button>" + "<button class=DEL id=" + id + "><img src=img/ProductList/trash.png alt=thrash width=20px height=20px></button>";
                sec1.style.opacity = "0%";
                sec1.style.transition = "0.5s";
                setStatus(sec1, Dat);
                par.appendChild(sec1);
                this.Product.value = "";
                this.Dat.value = Dat - Dat;
                this.Category.value = "";
                setTimeout(() => {
                    sec1.style.opacity = "100%";
                }, 400);
            }
        }
    }
}

function download() {
    return JSON.stringify(mas);
}
function updateList(){
    console.log(this.result);
}

function DelAll(){
    const list = document.getElementsByClassName('view');
    const h = document.getElementsByClassName('CatTitle');
    while(list[0]) {
        list[0].parentNode.removeChild(list[0]);
    }
    while (h[0]){
        h[0].parentNode.removeChild(h[0]);
    }
}