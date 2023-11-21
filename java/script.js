const dynamicText = document.querySelector("h1 span");
const words = ["ER EN KODER", "ER STUDENT", "ER KREATIV", "LÆRER RASKT"];

let wordIndex = 0; // Forteller hvilket ord som skal vises
let charIndex = 0; // Forteller hvilke karakterer i ordet som vises
let isDeleting = false; // Vilkår/Boolean
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    if (!isDeleting && charIndex < currentWord.length) {
        // Hvis vilkåret er sant, skriv neste karakter
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // Hvis vilkåret er sant, fjern forrige karakter
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // Hvis ordet er slettet, bytt over til neste ord
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect(); // Kaller skrive effekten


let red = false; // Boolean/Vilkår som sier om darkmode er på(true) eller av(false)

function darkMode () {
    document.body.classList.toggle("dark-mode");
    document.getElementById("text").classList.toggle("red");

    if (red == true) {
        document.getElementById("progress").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("progress1").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("progress2").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("progress3").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("progress4").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)"; // Bytte farge på progress barene
        document.getElementById("progress5").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("progress6").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("progress7").style.background = "conic-gradient(#31c6f7 var(--p),lightgrey 0)";
        document.getElementById("person").src = "img/person.png";
        document.getElementById("person2").src = "img/person2.png"; // Bytte bildene på nettsiden
        document.getElementById("swap").src = "img/moon-regular.svg";
        console.log("blå") // Sender om det er blå/rød modus i konsollen
        red = false;
    } else if (red == false){
        document.getElementById("person").src = "img/devil.png";
        document.getElementById("person2").src = "img/devil2.png";
        document.getElementById("swap").src = "img/sun-regular.svg";
        document.getElementById("progress").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress1").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress2").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress3").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress4").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress5").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress6").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        document.getElementById("progress7").style.background = "conic-gradient(#ff0000de var(--p),lightgrey 0)";
        console.log("rød")
        red = true;
    }
}