//hp = health points ap = attack points cap = counter attack points

let obi = {
    "characterNumer" : 1,
    "name" : "Luke Obi-Wan Kenobi",
    "hp" : 120,
    "ap" : 40,
    "cap" : 40,
    "image": "./assets/images/obi.png"
}

let luke = {
    "characterNumer" : 2,
    "name" : "Luke Skywalker",
    "hp" : 100,
    "ap" : 30,
    "cap" : 20,
    "image": "./assets/images/luke.png"
}

let darths = {
    "characterNumer" : 3,
    "name" : "Darth Sidious",
    "hp" : 110,
    "ap" : 50,
    "cap" : 30,
    "image": "./assets/images/darths.png"
}

let darthm = {
    "characterNumer" : 4,
    "name" : "Darth Maul",
    "hp" : 180,
    "ap" : 70,
    "cap" : 200,
    "image": "./assets/images/darthm.png"
}

let allCharacters = [obi, luke, darths, darthm];
let characterChoice = false;

$(document).ready(function(){
   
    //generating characters

    for(i = 0; i < allCharacters.length; i++){
        
        let characterContainer = $("<div></div>");
        let characterImage = $("<img>");
        let characterText = $("<div></div>");
        let characterHealth = $("<div></div>");
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

    // click Events
    $(".character-container-0").on("click", function move(characterChoice) {
        $("div.character-container-0").detach().appendTo("div.character-choice");
        return true;
    });
    $(".character-container-1").on("click", function move() {
        $("div.character-container-1").detach().appendTo("div.character-choice");
        return true;
    });
    $(".character-container-2").on("click", function move() {
        $("div.character-container-2").detach().appendTo("div.character-choice");
        return true;
    });
    $(".character-container-3").on("click", function move() {
        $("div.character-container-3").detach().appendTo("div.character-choice");
        return true;
    });

    console.log(characterChoice);




   










  });
//Displaying Characters



