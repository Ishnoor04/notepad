document.addEventListener("DOMContentLoaded",function(){

    let fileContent = document.getElementById("addTxt");
    document.getElementById("underline-button").addEventListener("click",function(){
        if(fileContent.style.textDecoration === "underline")
        fileContent.style.textDecoration = "none";
        else
        fileContent.style.textDecoration = "underline";  
    })

    document.getElementById("bold-button").addEventListener("click",function(){
        if(fileContent.style.fontWeight === "bold")
        fileContent.style.fontWeight = "normal";
        else
        fileContent.style.fontWeight = "bold";  
    })

    document.getElementById("italic-button").addEventListener("click", function(){
        if(fileContent.style.fontStyle === "italic")
        fileContent.style.fontStyle = "normal";
        else
        fileContent.style.fontStyle = "italic";  
    })

})

