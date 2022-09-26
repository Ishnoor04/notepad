const sideBar=document.querySelector("#sidebar");
const addButton=document.querySelector("#add-button");
const bold=document.querySelector("#bold-button")


addButton.addEventListener("click",function(){ notesUpdate()})

function notesUpdate(){
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
        <div class="my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note</h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Delete<~/a>
        </div>
      </div>
    `
    sideBar.appendChild(note);
    
}
//make sidebar horizontal--

//adding little text in the note from the text area 
//push a small fontsize=10px into card (showing a glimpse)



bold.addEventListener("click",()=>{
let selection=window.getSelection().toString();
selection.style.fontWeight="800";
console.log(selection)
console.log
text=text.replace(selection,selection.style.fontWeight="bold");
})
