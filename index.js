console.log("working");

function addlist() {
    document.getElementById("container1").style.display = "inline-block";
    document.getElementsByClassName("main")[0].style.filter = "blur(5px)"

}
const tasklist = []
function changeHere() {
    document.getElementById("content").style.display = "none";

    const name = document.getElementById("name").value



    const tempObject = {

        taskname: name
    }
    tasklist.push(tempObject)
    console.log(tasklist)

    addtaskonScreen()

}

function addtaskonScreen() {

    const element = document.createElement("div")
    element.setAttribute("class", "child")
    element.innerText = tasklist[tasklist.length - 1].taskname

    const ExistingElement = document.getElementById("parent")
    ExistingElement.appendChild(element)

    const hrline = document.createElement("hr")
    hrline.setAttribute("class", "hrone")
    element.appendChild(hrline);

    const deleteSign = document.createElement("i")
    deleteSign.setAttribute("class", "delete")
    deleteSign.innerHTML = '<i class= "fa-solid fa-trash-can"></i>'
    deleteSign.style.color = "red";
    element.appendChild(deleteSign);
    function del() {
        var child = document.getElementsByClassName("child")[0];

        child.parentNode.removeChild(child);
    }
    deleteSign.addEventListener('click', del)

    const addSign = document.createElement("i")
    addSign.setAttribute("class", "plus")
    addSign.innerHTML = '<i class= "fa-solid fa-circle-plus"></i>'
    addSign.onclick = additem
    element.appendChild(addSign);
    function additem() {
        document.getElementById("container2").style.display = "inline-block";
        document.getElementsByClassName("main")[0].style.filter = "blur(5px)"
    }

    document.getElementById("container1").style.display = "none";
    document.getElementsByClassName("main")[0].style.filter = "none";

}

const itemlist = [];
function additemlist() {

    const itemname = document.getElementById("itemname").value

    const itemObject = {

        taskitem: itemname
    }
    itemlist.push(itemObject)
    console.log(itemlist)

    additemlistonscreen()

}
function additemlistonscreen() {

    const anotherlistitem = document.createElement("div")
    anotherlistitem.setAttribute("class", "anotherchild")
    anotherlistitem.innerText = itemlist[itemlist.length - 1].taskitem

    const existingchild = document.getElementsByClassName("child")[0]
    existingchild.appendChild(anotherlistitem);

    const butt = document.createElement("button")
    butt.setAttribute("id", "btn")
    butt.innerText = "Mark Done"
    anotherlistitem.appendChild(butt)
    butt.onclick = taskdone
    function taskdone() {
        const tskdone = document.getElementsByClassName("anotherchild")[0]
        tskdone.style.textDecoration = "line-through";
        tskdone.style.color = "red"

        document.getElementById("btn").style.display = "none";
    }
    document.getElementById("container2").style.display = "none";
    document.getElementsByClassName("main")[0].style.filter = "none";
}