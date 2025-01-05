function returnSound(key){
    switch(key)
                {
                    case "w":
                        return new Audio("sounds/tom-1.mp3").play();
                        break;
                    case "a":
                        return new Audio("sounds/tom-2.mp3").play();
                        break;
                    case "s":
                        return new Audio("sounds/tom-3.mp3").play();
                        break;
                    case "d":
                        return new Audio("sounds/tom-4.mp3").play();
                        break;
                    case "j":
                        new Audio("sounds/crash.mp3").play();
                        break;
                    case "k":
                        new Audio("sounds/kick-bass.mp3").play();
                        break;
                    case "l":
                        new Audio("sounds/snare.mp3").play();
                        break;
                    default:
                        console.log(this.innerHTML);
             }
}
// Detects the key stroke

document.addEventListener("keydown",function(event){
    returnSound(event.key);
})

 // Detectes Cursor press

allbuttons = document.querySelectorAll("button");
for(var index=0;index<allbuttons.length;index++){
             allbuttons[index].addEventListener('click',function (){
                  returnSound(this.innerHTML);   
             })
};


