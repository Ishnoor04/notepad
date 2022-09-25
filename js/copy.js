document.addEventListener("DOMContentLoaded",function(){

    copyTextBtn = document.getElementById("copy-button");
    copyTextBtn.addEventListener('click', function(event) {
    let copyTextarea = document.getElementById("addTxt");
    copyTextarea.focus();
    copyTextarea.select();
    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        
        } catch(err) {
             
            }
    });
})