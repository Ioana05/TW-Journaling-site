const timer = document.getElementsByClassName("meditation-time")[0];
let seconds = 0;
let minutes = 0;
let countdown;

document.onkeydown = (press_event) => {
    // in momentul in care apasa CTRL ALT M, incepe meditatia
    if(press_event.ctrlKey && press_event.altKey && press_event.keyCode === 77){
        // seteaza border bottom pentru prima oara dupa ce mediteaza
        const border = window.getComputedStyle(timer, null).getPropertyValue("border-bottom");
        console.log(border.substring(0,3) == "0px");
        
        if(border.substring(0,3) == "0px"){
            timer.style.borderBottom = "4px solid white";
        }

        countdown = setInterval(()=>{
            seconds++;
            if(seconds == 60){
                minutes++;
                seconds=0;
            }
                
            if(minutes < 10 && seconds < 10)
                timer.innerHTML = "0" + minutes + ":0" + seconds;
            else if(minutes < 10)
                timer.innerHTML = "0" + minutes + ":" + seconds;
            else if(seconds < 10)
                timer.innerHTML = minutes + ":0" + seconds;
            else
                timer.innerHTML = minutes + ":" + seconds;
        }, 1000);
    }
}

document.addEventListener("click", (event)=>{
    if(event.target.className == "meditation-time"){
        // daca obiectul care a fost apasat este timer-ul
        // oprim intervalul si resetam
        clearInterval(countdown);
        timer.innerHTML = "00:00";
        minutes = 0;
        seconds = 0;

        alert("Congratulations! You have meditated for " + minutes + " minutes and " + seconds + " seconds.");
    }
});