window.onload = function () {
    let flag = true;
    let flagDiag=false;
    var summ=0, diagSumm=0;
    var x=0, y=0;
    var arr=[];

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    function ce(name="div",text,event,fn){
        let x = document.createElement(name);
        if(text!=undefined){
            x.innerHTML=text;
        }

        if(event!=undefined){
            x.addEventListener(event,fn);
        }

        return x;
    }

    //Создаем первую строчку и одну ячейку
    function firstLine() {
        if(flag) {
            let tr= ce("tr");
            let td=ce("td",randomInteger(1,9),"click",sum);
            tr.append(td);
            document.getElementById("body").append(tr);
            flag=false;
            x++
            y++
            return false;
        }

        return true
    }

    function addButtons (){
        let parent = ce("div");
            parent.className="buttons";
        let x = ce("span","add TR","click",addTR);
        x.classList.add("button")
        let y = ce("span","add TD","click",addTD);
        y.classList.add("button")
            parent.append(x);
            parent.append(y);
        let sum=ce("span", `summ = ${summ}`)
        sum.classList.add("button", "sum")
            parent.append(sum)
            document.body.prepend(parent);
    }

    //тут добавляем table и кнопки
    function init() {

        let table=ce("table");
        let tbody=ce("tbody");
        table.setAttribute("cellpadding", "5px")
            tbody.id="body";
            table.append(tbody);
            document.body.append(table);

            addButtons();
    }

    function addTR() {
        if(firstLine()) {
           let clone = document.getElementById("body").children[0].cloneNode(true);
                for(let i=0;i<clone.children.length;i++){
                    clone.children[i].innerHTML=randomInteger(1,9);
                    clone.children[i].addEventListener("click", sum)
                    clone.children[i].style.backgroundColor=``;
                }
            document.getElementById("body").append(clone);
            x++
        }
        diagonal()
    }

    function addTD() {
        if(firstLine()) {
            //let tr = document.getElementById("body").children;
            let tr = document.querySelectorAll("#body > tr");
            //let tr = body.getElementsByTagName("tr");
            for (let i=0;i<tr.length;i++){
                tr[i].append(ce("td",randomInteger(1,9),"click",sum))
            }
            y++
        }
        diagonal()
    }


    function sum() {
        if (!this.classList.contains("active")) {
            summ += +this.innerText
            this.classList.add("active")
            this.style.backgroundColor = `rgb(${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)})`;
            document.querySelector(`.sum`).innerText = `summ = ${summ}`
        }
        else{
            summ -= +this.innerText
            this.classList.remove("active")
            this.style.backgroundColor = ``;
            document.querySelector(`.sum`).innerText = `summ = ${summ}`
        }
    }

    function diagonal() {
        if (x==y){
            diagonalSumm(x);
            let diag=ce("span", `summ diag= ${diagSumm}`)
            diag.classList.add("button")
            diag.id="diag"
            flagDiag=true;
            document.getElementsByClassName("buttons")[0].append(diag)

        }
        if (x!=y && flagDiag){
            document.getElementById("diag").remove()
            flagDiag=false;
            diagSumm=0;
            for(i=0;i<arr.length;i++){
                arr[i].style.backgroundColor = "";
            }
            arr.length=0
        }
    }

    function diagonalSumm(x) {
        for (let i=0; i<x; i++) {
            diagSumm += +document.getElementById("body").children[i].children[i].innerText;
            document.getElementById("body").children[i].children[i].style.backgroundColor = "red"
            arr.push(document.getElementById("body").children[i].children[i])
        }
    }
    init();
}