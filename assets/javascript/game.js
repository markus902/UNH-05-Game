//hp = health points ap = attack points cap = counter attack points

let obi = {
    "characterNumer" : 1,
    "name" : "Obi-Wan Kenobi",
    "hp" : 120,
    "ap" : 40,
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
    "hp" : 110,
    "ap" : 50,
    "cap" : 30,
    "image": "./assets/images/darths.png",
    "chosen": false
}

let darthm = {
    "characterNumer" : 4,
    "name" : "Darth Maul",
    "hp" : 180,
    "ap" : 70,
    "cap" : 200,
    "image": "./assets/images/darthm.png",
    "chosen": false
}

let allCharacters = [obi, luke, darths, darthm];

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

    $(".character-container-0").on("click", function move() {
        $("div.character-container-0").detach().appendTo("div.character-choice");
        allCharacters[0].chosen = true;
        chooseDefender();
    });
    $(".character-container-1").on("click", function move() {
        $("div.character-container-1").detach().appendTo("div.character-choice");   
        allCharacters[1].chosen = true;
        chooseDefender();
    });
    $(".character-container-2").on("click", function move() {
        $("div.character-container-2").detach().appendTo("div.character-choice");
        allCharacters[2].chosen = true;
        chooseDefender();
    });
    $(".character-container-3").on("click", function move() {
        $("div.character-container-3").detach().appendTo("div.character-choice");
        allCharacters[3].chosen = true;
        chooseDefender();
    });

    

    function chooseDefender(){
            var computerChoice = Math.floor(Math.random() * allCharacters.length);
            console.log(computerChoice);
            var chosenCharacter = allCharacters[computerChoice].chosen;
            console.log(chosenCharacter);
                if(chosenCharacter == false){
                    $(".character-container-" + computerChoice).detach().appendTo("div.defender");
                }
                else{
                    chooseDefender();
                }
            };
    
   
});

    //DischooseDefendering Characters

    
    