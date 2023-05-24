const seconds = 5000;

window.onload = () => {
    setTimeout(() =>{
        // folosim confirm pentru a lasa utilizatorul sa aleage "ok" sau "anuleaza"
        const response = confirm("Do you want to subscribe to the newsletter?");
        if(response == true)
            alert("Thank you for subscribing! 😊")
    }, seconds);
}

const homeBackground = document.getElementsByClassName("wrapper")[0];
const backgrounds = ["../IMAGES/f.jpg","../IMAGES/floare.jpg","../IMAGES/pat.jpg","../IMAGES/bicicleta.jpg", "../IMAGES/cer.jpg" ];

function GenerateBackgroundIndex(len){
    return Math.floor(Math.random()*len);
}

setInterval(() => {
    // generez un nou index din lista de background-uri
    const newIndex = GenerateBackgroundIndex(backgrounds.length);
    // selectez un background
    const newBackground = backgrounds[newIndex];
    // .style pentru a accesa CSS-ul elementului
    // setez noul background
    homeBackground.style.backgroundImage = 'url("'+newBackground+'")';
}, 10000);