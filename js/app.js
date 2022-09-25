const sideBar=document.querySelector("#sidebar");
const addButton=document.querySelector("#add-button");
const bold=document.querySelector("#bold-button")


addButton.addEventListener("click",function(){ notesUpdate()})

function notesUpdate(){
    const note=document.createElement("div");
    const title=document.querySelector("#title")
    note.classList.add("note");
    note.innerHTML=`
    <div class="card text-bg-light mb-3">
            ${(title.value==="")?"Note":title.value}
            
        </div>

    `
    sideBar.appendChild(note);
    
}
//adding little text in the note from the text area 
//push a small fontsize=10px into card (showing a glimpse)



bold.addEventListener("click",()=>{
let selection=window.getSelection().toString();
selection.style.fontWeight="800";
console.log(selection)
console.log
text=text.replace(selection,selection.style.fontWeight="bold");
})
