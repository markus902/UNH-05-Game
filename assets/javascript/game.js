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
    ap: 20,
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
    ap: 16,
    cap: 20,
    image: "./assets/images/darthm.png",
}

const allCharacters = [obi, luke, darths, darthm];
let defender;
let attacker;
let chosen = false;
let attackerChosen = false;
let indexvar = null;
let deathCount = 0;


$(document).ready(function () {

    
    // add click events for characters

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
        
        console.log(deathCount);

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
            deathCount++;
            $(".defender").empty();
            alert("Opponent defeated!");
            addClickEvents();
            characterMove();
        }
        else if(attacker.hp <= 0) {
            alert("You are dead!");
            resetGame();
        }
        if(deathCount == 3){
            alert("You win!!!")
        }
    }

    function resetGame() {
        location.reload();
        } 


    for (i = 0; i < allCharacters.length; i++) {
        createDOM();
    }
    
    addClickEvents();

    $(".reset-btn").on("click", resetGame );  // click event for reset button
    
    $(".attack-btn").on("click", fight );   // click event for attack button
});

//option for later, to chooose reandom defender

// function chooseRandomDefender() {
//     let computerChoice = Math.floor(Math.random() * allCharacters.length);
//     let chosenCharacter = allCharacters[computerChoice].chosen;
//     if (chosenCharacter == false) {
//         $(".character-container-" + computerChoice).detach().appendTo("div.defender");
//     }
//     else {
//         chooseRandomDefender();
//     }
//     defender = allCharacters[computerChoice];
// };