var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

for(let i=0;i<navMenuAnchorTags.length;i++){
navMenuAnchorTags[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionID=this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionID);
    var interval=setInterval(function(){
        var targetSectionCoordinates=targetSection.getBoundingClientRect();
        console.log(targetSectionCoordinates);
        if(targetSectionCoordinates.top<=0 || Date.now() > timeout){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,45);
    },20);
    //console.log(targetSection);
    
    //
    var timeout = Date.now() + 2000;
    });
}




