//CAROUSEL
let arrowsD = document.querySelectorAll(".arrows-desktop > .arrows");
let arrowsM = document.querySelectorAll(".arrows-mobile > .arrows");
let imgDesk = document.querySelectorAll(".hero-desktop");
let imgMob = document.querySelectorAll(".hero-mobile");
let mob = "visible-m";
let desk = "visible-d";
let i = 0;
let title = document.querySelector(".title");
let text = document.querySelector(".text");

const msg = {
    text: [
        {
            text1: {
                title: "Discover innovative ways to decote",
                
                text:  `We provide unmatched quality, comfort, and style
                        for property owners across the coutry. Our experts
                        combine form and function in bringing your vision 
                        to life. Create a room in your own style with our collection
                        and make your property a reflection of you and what you love.`  
            },

            text2: {
                title: "We are avaible all across the globe",
                text:  `With stores all over the world, it's 
                        easy for you to find furniture for
                        your home or place of business. Locally,
                        we're in most major cities throughout
                        the country. Find the branch nearest you using
                        our store locator. Any questions? Dont't
                        hesitate to contract us today.`
            },

            text3: {
                title: "Manufactured with the best materials",
                text:  `Our modern furniture store provide a high level
                        of quality. Our company has invested in advanced
                        tecnology to ensure that every product is made as
                        perfect and as consistent as possible. With three decades
                        of experience in this industry, we understood
                        what customers want for their home and office.`
            }
        }
    ]
}

const {text: [{text1, text2, text3}]} = msg

function leftArrow(element, device, item) {
    if(item.classList.contains("left")) {
        console.log(element.length);
        i--;

        addAffect();

        if(i < 0) {
            i = element.length - 1;
        }
        
        try {
            element[i].classList.add(device);
            element[i + 1].classList.remove(device); 

            if(i === 0) {
                title.textContent = text1.title;
                text.textContent = text1.text;
            }
        
            else if(i === 1) {
                title.textContent = text2.title;
                text.textContent = text2.text;
            }

        }

        catch(err) {
            console.log(err);
            element[0].classList.remove(device);
            
            if(i === 2) {
                title.textContent = text3.title;
                text.textContent = text3.text;
            }
        }

    }
}

function rightArrow(element, device, item) {
    if(item.classList.contains("right")) {
        console.log("right");
        i++;
        
        addAffect();
        if(i > element.length - 1) {
            i = 0;
        }

        try {
            element[i].classList.add(device);
            element[i-1].classList.remove(device);
           
            if(i === 1) {
                title.textContent = text2.title;
                text.textContent = text2.text;
            }
        
            else if(i === 2) {
                title.textContent = text3.title;
                text.textContent = text3.text;
            }
        }

        catch(err) {
            console.log(err, i);
            element[element.length -1].classList.remove(device);
            
            if(i === 0) {
                title.textContent = text1.title;
                text.textContent = text1.text;
            }
        }

        
    }
}


function addAffect() {
    let desc = document.querySelector(".description");
    desc.classList.add("fadein");
    setTimeout(() => {
        desc.classList.remove("fadein")
    }, 1000);
}

arrowsM.forEach((item) => {
    item.addEventListener("click", () => {
        rightArrow(imgMob, mob, item);
        leftArrow(imgMob, mob, item);
    });
});

arrowsD.forEach((item) => {
    item.addEventListener("click", () => {
        rightArrow(imgDesk, desk, item);
        leftArrow(imgDesk, desk, item);
    });
});



//CAOUSEL
const menuMobile = {
    button: document.querySelector(".hamburguer-box"),
    overlay: document.querySelector(".overlay"),
    menu: document.querySelector(".menu-mobile"),
    target: document.querySelector(".hamburguer-icon"),
    action() {
        this.button.addEventListener("click", () => {
            console.log("lala")
            if(!this.button.classList.contains("close-btn")) {
                this.target.classList.toggle("close-btn")
                this.overlay.classList.toggle("openOverlay");
                this.menu.classList.toggle("openMenu");
            }

           
        });
    }
}

menuMobile.action();