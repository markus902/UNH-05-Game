//hp = health points ap = attack points cap = counter attack points

let obi = {
    "characterNumer" : 1,
    "name" : "Obi-Wan Kenobi",
    "hp" : 100,
    "ap" : 30,
    "cap" : 40,
    "image": "./assets/images/obi.png",
    "chosen": false
}

let luke = {
    "characterNumer" : 2,
    "name" : "Luke Skywalker",
    "hp" : 100,
    "ap" : 30,
    "cap" : 20,
    "image": "./assets/images/luke.png",
    "chosen": false
}

let darths = {
    "characterNumer" : 3,
    "name" : "Darth Sidious",
    "hp" : 100,
    "ap" : 30,
    "cap" : 30,
    "image": "./assets/images/darths.png",
    "chosen": false
}

let darthm = {
    "characterNumer" : 4,
    "name" : "Darth Maul",
    "hp" : 100,
    "ap" : 30,
    "cap" : 100,
    "image": "./assets/images/darthm.png",
    "chosen": false
}

let allCharacters = [obi, luke, darths, darthm];
let defender;
let attacker;

$(document).ready(function(){
   
    //generating characters

    for(i = 0; i < allCharacters.length; i++){
        
        characterContainer = $("<div></div>");
        characterImage = $("<img>");
        characterText = $("<div></div>");
        characterHealth = $("<div></div>");
        characterImage
        .attr("src" , allCharacters[i].image)
        .addClass("character-image character-image-" + i + " clearfix");

        characterContainer
        .addClass( "character-container-" + i + " justify-content-center character-container")
        .css( "border" , "solid green 3px");
        $(".characters").append(characterContainer); 

        characterText.text(allCharacters[i].name);
        $(".character-container-" + i).append(characterText);   

        $(".character-container-" + i).append(characterImage);

        characterHealth.text("Health: " + allCharacters[i].hp);
        $(".character-image-" + i).after(characterHealth); 

    }

    // click events for characters

    $(".character-container-0").on("click", ()=>{
        $("div.character-container-0").detach().appendTo("div.character-choice");
        allCharacters[0].chosen = true;
        attacker = allCharacters[0];
        chooseDefender();
    });
    $(".character-container-1").on("click", ()=>{
        $("div.character-container-1").detach().appendTo("div.character-choice");   
        allCharacters[1].chosen = true;
        attacker = allCharacters[0];
        chooseDefender();
    });
    $(".character-container-2").on("click", ()=>{
        $("div.character-container-2").detach().appendTo("div.character-choice");
        allCharacters[2].chosen = true;
        attacker = allCharacters[0];
        chooseDefender();
    });
    $(".character-container-3").on("click", ()=>{
        $("div.character-container-3").detach().appendTo("div.character-choice");
        allCharacters[3].chosen = true;
        attacker = allCharacters[0];
        chooseDefender();
    });

    // function to choose defender

    function chooseDefender(){
            let computerChoice = Math.floor(Math.random() * allCharacters.length);
            let chosenCharacter = allCharacters[computerChoice].chosen;
                if(chosenCharacter == false){
                    $(".character-container-" + computerChoice).detach().appendTo("div.defender");
                }
                else{
                    chooseDefender();
                }
            defender = allCharacters[computerChoice];
            };

    // clickEvent for attack button

    $("#attack-btn").on("click", ()=>{fight()});

    function fight(){
        defender.hp = defender.hp - attacker.ap;
        attacker.hp = attacker.hp - defender.ap;

        console.log(defender.hp, attacker.hp)

        if(defender.hp <= 0){
            $(".defender").empty();
            attacker.ap = attacker.ap + attacker.cap;
            console.log(attacker.ap);
            chooseDefender();
        }
        else if(attacker.hp <= 0){
            alert("You are dead!");
            resetGame();
        }
    
    function reset(){
        // reload page;
    }

}
    
});

    //DischooseDefendering Characters

    
    