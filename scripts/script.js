let arrows = document.querySelectorAll(".arrows");
let imgsDesk = document.querySelectorAll(".hero-desktop"); 

let counter = 0;
for(let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", e => {
        if(e.target.classList.contains("right")) {
            
            counter++;
            console.log(counter);
            imgsDesk[counter].classList.add("visible");
            imgsDesk[counter - 1].classList.remove("visible");
            
            if(counter >= 1) {
                // counter = 0;
                counter = imgsDesk[counter - 1];
                console.log(counter);
            }
            
        }
        
    });
}

console.log(imgsDesk[imgsDesk.length-imgsDesk.length]);
