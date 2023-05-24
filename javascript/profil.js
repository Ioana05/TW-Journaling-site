const notes = document.getElementsByClassName("notes")[0];
const yourday_button = document.getElementsByClassName("yourday-buton")[0];
let created_notes = [];

window.onload = () => {
    // reincarcam notilele adaugate in sesiunile precedente pentru a putea
    // continua eventuala adaugare de noi notite
    if(localStorage.getItem("created_notes_storage")){
        created_notes = JSON.parse(localStorage.getItem("created_notes_storage"));   
    }

    // pentru fiecare notita create, o readaugam in HTML
    for(let i=0; i<created_notes.length; i++){
        const newNote = document.createElement("div");
        const newTextSoul = document.createElement("p");
        newTextSoul.innerText = "For my soul " + created_notes[i].textSoul;
    
        const newTextDay = document.createElement("p");
        newTextDay.innerText = "Today I... " +  created_notes[i].textDay;
    
        const newEmoji = document.createElement("p");
        newEmoji.innerText = "I am feeling " +  created_notes[i].emoji + ".";
    
        const newSport = document.createElement("p");
        if( created_notes[i].sport == "Yes")
            newSport.innerText = "I have moved my body!";
        else
            newSport.innerText = "I have not moved my body!";
    
        const newWater = document.createElement("p");
        newWater.innerText = "I have drank " +  created_notes[i].water + " of water.";
    
        const newVeggie = document.createElement("p");
        if( created_notes[i].veggie == "Yes")
            newVeggie.innerText = "I have eaten my veggies!";
        else
            newVeggie.innerText = "I have not eaten my veggies!";
        
        newNote.appendChild(newEmoji);
        newNote.appendChild(newTextDay);
        newNote.appendChild(newTextSoul);
        newNote.appendChild(newWater);
        newNote.appendChild(newSport);
        newNote.appendChild(newVeggie);
    
        notes.appendChild(newNote); 
    }
}

yourday_button.addEventListener("click", (event) => {
    // nu se mai reincarca pagina cand dai send
    event.preventDefault();

    const textSoul = document.getElementsByName("textSoul")[0].value;
    const textDay = document.getElementsByName("textDay")[0].value;
    const emoji = document.querySelector('input[name="emoji"]:checked').value;
    const sport = document.querySelector('input[name="sport"]:checked').value;
    const water = document.querySelector('input[name="water"]:checked').value;
    const veggie = document.querySelector('input[name="veggie"]:checked').value;

    const newNote = document.createElement("div");
    const newTextSoul = document.createElement("p");
    newTextSoul.innerText = "For my soul " + textSoul;

    const newTextDay = document.createElement("p");
    newTextDay.innerText = "Today I... " + textDay;

    const newEmoji = document.createElement("p");
    newEmoji.innerText = "I am feeling " + emoji + ".";

    const newSport = document.createElement("p");
    if(sport == "Yes")
        newSport.innerText = "I have moved my body!";
    else
        newSport.innerText = "I have not moved my body!";

    const newWater = document.createElement("p");
    newWater.innerText = "I have drank " + water + " of water.";

    const newVeggie = document.createElement("p");
    if(veggie == "Yes")
        newVeggie.innerText = "I have eaten my veggies!";
    else
        newVeggie.innerText = "I have not eaten my veggies!";
    
    newNote.appendChild(newEmoji);
    newNote.appendChild(newTextDay);
    newNote.appendChild(newTextSoul);
    newNote.appendChild(newWater);
    newNote.appendChild(newSport);
    newNote.appendChild(newVeggie);

    notes.appendChild(newNote);    

    // creez un nou obiect pentru lista de obiecte notes, si il adaug in localstorage
    // creez un 'dictionar' si il adaug in lista de dictionare, dupa lista de dictionare
    // o adaug in localstorage
    const newNoteJSON = {
        emoji: emoji,
        textSoul: textSoul,
        textDay: textDay,
        water: water,
        sport: sport,
        veggie: veggie,
    }
    created_notes.push(newNoteJSON);
    // adaugam in local local storage
    localStorage.setItem("created_notes_storage", JSON.stringify(created_notes));
});
