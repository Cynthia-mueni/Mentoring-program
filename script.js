const inputBox=document.getElementsById("input-nox")
const listContainer=getElementsById(inputBox)
function assTask(){
    if(inputBox.value===0){
    alert("You must write something")
}
else{
    let li = document.createElement("li")
    li.innerHTML=inputBox.value;
    listContainer.appendchild(li)
    let span=document.createElement('span')
    span.innerHTML="u00d7"
    li.appendChild(span;)
}
inputBox.value=""
}
