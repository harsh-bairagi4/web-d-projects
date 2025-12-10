const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showData(){
    notesContainer.innerHTML = localStorage.getItem("data");
}
showData();

function updateStorage(){
    localStorage.setItem("data", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.className = "input-box";
    // p.contentEditable = true;
    p.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(p).appendChild(img);
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

