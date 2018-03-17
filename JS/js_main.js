$( document).ready (function(){
  
  let ObiWan = {
      "name": "luke",
      "health": 200,
      "multiplier": 10,
      "power": function (){
          return Math.random()*this.multiplier
    },
    src: ".assets/Obiwan.jpg"
  };

  let darthMaul = {
      "name": "darth maul",
      "health":300,
      "multiplier": 5,
      "power": function(){
          return Math.random()*this.multiplier
      },
    src: ".assets/Darthmaul_profile.jpg"
  };
  
  function isJEdiDead(jedi) {
    if (jedi.health <= 0) {
        return true;
    }
    return false;
  }

  function powerboost(jedi) {
      jedi.multiplier = this.multiplier * 10;
      return jedi;
  }

  //attack two jedi

function attack(jediOne, jediTwo) {
   let j1Power = jediOne.power();
   let j2Power = jediTwo.power();
   jediOne.health = jediOne.health - j2Power
   jediTwo.health = jediTwo.health - j1Power

   //increas luke's power
   powerboost (jediOne);
   
   
   // jediOne.health = jediOne.health - jediTwo.power;
   //   jediTwo.health = jediTwo.health - jediOne.power;
   //   console.log(jediOne.health);
   //   console.log(jediTwo.health);
  }
  function renderCharacters(){
      let image = $("<img>")
      image.attr("src",darthMaul.src)
      image.addClass("character")
      image.attr("data-name", darthMaul.name)
      $("#characters").append(image);
  }
renderCharacters();
  
  //the following is one way
  //function attack(jediOne, jediTwo) {
  //  let jedionehealth = jedione.health; //this is a number 200
  //  let jeditwohealth = jeditwo.health; //this is a number 300
  //  let jediOneAttack = 10;

  //}

  attack(luke, darthMaul);

//});

  
    //variables
let darthMauldiv = $('#darthmaul');
let charAttacksDic = $('#attackcharacters')

//functions
function moveAttacker(attacker){
    charAttaksDiv.append(attacker);

}

//events
//clicking character will move darth maul below
$('.character').on('click', function(){
console.log("this is working?")
console.log($(this).attr("data-name"))
});

//click button
$('#attacksBtn').on('click', function(){
    //you hit them (take away some points)
    //they hit you (take away some of your points)
    });
});