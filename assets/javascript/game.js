//hp = health points ap = attack points cap = counter attack points

let obi = {
    characterNumber: 0,
    name: "Obi-Wan Kenobi",
    hp: 90,
    ap: 10,
    cap: 13,
    image: "./assets/images/obi.png",
}

let luke = {
    characterNumber: 1,
    name: "Luke Skywalker",
    hp: 100,
    ap: 15,
    cap: 20,
    image: "./assets/images/luke.png",
}

let darths = {
    characterNumber: 2,
    name: "Darth Sidious",
    hp: 120,
    ap: 12,
    cap: 5,
    image: "./assets/images/darths.png",
}

let darthm = {
    characterNumber: 3,
    name: "Darth Maul",
    hp: 80,
    ap: 15,
    cap: 20,
    image: "./assets/images/darthm.png",
}

const allCharacters = [obi, luke, darths, darthm];
let defender;
let attacker;
let chosen = false;
let attackerChosen = false;
let indexvar = null;
let deathCount;


$(document).ready(function () {

    //generating characters

    for (i = 0; i < allCharacters.length; i++) {
        createDOM();
    }
    
    addClickEvents();

    $(".reset-btn").on("click", resetGame );  // click event for reset button
  
    $(".attack-btn").on("click", fight );   // click event for attack button

    
    
    
    // click events for characters

    function addClickEvents() {
        $(".character-container-0").on("click", () => {
            indexvar = 0;
            characterMove();
        });

        $(".character-container-1").on("click", () => {
            indexvar = 1;
            characterMove();
        });

        $(".character-container-2").on("click", () => {
            indexvar = 2;
            characterMove();
        });

        $(".character-container-3").on("click", () => {
            indexvar = 3;
            characterMove();
        });
    }

    //function to move the characters from top list to fight area

    function createDOM(){
        characterContainer = $("<div></div>");
        characterImage = $("<img>");
        characterText = $("<div></div>")
        characterHealth = $("<div></div>")
            .addClass("health-character-" + i);
        characterImage
            .attr("src", allCharacters[i].image)
            .addClass("character-image character-image-" + i);

        characterContainer
            .addClass("character-container-" + i + " justify-content-center character-container animated delay-0s")
            .css("border", "solid green 3px");
        $(".characters").append(characterContainer);

        characterText.text(allCharacters[i].name);
        $(".character-container-" + i).append(characterText);

        $(".character-container-" + i).append(characterImage);

        characterHealth.text("Health: " + allCharacters[i].hp + "   Attack: " + allCharacters[i].ap);
        $(".character-image-" + i).after(characterHealth)
        }

    function characterMove() {
        $(".character-container").removeClass("shake");
        $(".hidden").css("display", "block");
        if (chosen == false) {
            $(".character-container-" + indexvar).addClass("pulse").detach().appendTo("div.character-choice");
            if(attackerChosen == false){
                attacker = allCharacters[indexvar];
                console.log(attacker);
                
            }
            $(".characters").detach().appendTo("div.attack-section").children().addClass("active").css("background-color","red");
            $(".character-container-" + indexvar).off();
            console.log("attacker");
            chosen = true;
        }
        else {
            $(".character-container-" + indexvar).addClass("pulse").detach().appendTo("div.defender").removeClass("active").css("background-color", "");
            defender = allCharacters[indexvar];
            console.log(defender);
            chosen = false;
            console.log("defender");
        }
        console.log(chosen);
        if(chosen == false) {
            $(".character-container").off();
        }
    }

    function fight() {
        
        $(".character-container").removeClass("pulse");
        defender.hp = defender.hp - attacker.ap;
        attacker.hp = attacker.hp - defender.ap;
        attacker.ap = attacker.ap + attacker.cap;
        console.log(defender.hp, attacker.hp);
        $(".health-character-" + defender.characterNumber).text("Health: " + defender.hp + " Attack: " + defender.ap);
        $(".health-character-" + attacker.characterNumber).text("Health: " + attacker.hp + " Attack: " + attacker.ap);
        $(".character-container-" + defender.characterNumber).addClass("shake");
        $(".character-container-" + attacker.characterNumber).addClass("shake");
        attackerChosen = true;

        if (defender.hp <= 0) {
            $(".defender").empty();
            alert("Defeted!");

            addClickEvents();
            characterMove();
        }
        else if(attacker.hp <= 0) {
            deathCount++;
            alert("You are dead!");
            resetGame();
        }

    }

    function resetGame() {
        location.reload();
        } 
});

//DischooseRandomDefendering Characters







// Random defender choice

// $(".character-container-0").on("click", ()=>{
//     $("div.character-container-0").detach().appendTo("div.character-choice");
//     allCharacters[0].chosen = true;
//     attacker = allCharacters[0];
//     chooseRandomDefender();
// });
// $(".character-container-1").on("click", ()=>{
//     $("div.character-container-1").detach().appendTo("div.character-choice");   
//     allCharacters[1].chosen = true;
//     attacker = allCharacters[0];
//     chooseRandomDefender();
// });
// $(".character-container-2").on("click", ()=>{
//     $("div.character-container-2").detach().appendTo("div.character-choice");
//     allCharacters[2].chosen = true;
//     attacker = allCharacters[0];
//     chooseRandomDefender();
// });
// $(".character-container-3").on("click", ()=>{
//     $("div.character-container-3").detach().appendTo("div.character-choice");
//     allCharacters[3].chosen = true;
//     attacker = allCharacters[0];
//     chooseRandomDefender();
// });

// function to choose defender

function chooseRandomDefender() {
    let computerChoice = Math.floor(Math.random() * allCharacters.length);
    let chosenCharacter = allCharacters[computerChoice].chosen;
    if (chosenCharacter == false) {
        $(".character-container-" + computerChoice).detach().appendTo("div.defender");
    }
    else {
        chooseRandomDefender();
    }
    defender = allCharacters[computerChoice];
};