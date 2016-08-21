var pineHeight = document.getElementById("tallness");
var character = document.getElementById("character");
var button = document.getElementById("button");
// var display = document.getElementById("output");
button.addEventListener("click", checker);
pineHeight.addEventListener("keypress", whatKey)
character.addEventListener("keypress", whatKey)

function whatKey(eventArgument) {
  // console.log(eventArgument)
  if (eventArgument.code === "Enter") {
     checker()
  }
}

function checker(){
  if ((!pineHeight.value) || (!character.value)){
    alert("The boxes are incomplete please take your time to fill it all");
  }   else {
  var pine = {
    pineHeight: pineHeight.value,
    character: character.value
  }
  Tree(pine);
  }
}
//  now lets make the tree
function Tree(pine){
  for (var x=1; x <= pine.pineHeight; x++){
    var spacesCount = pine.pineHeight-x;
    var charCount = (2*x)-1;

    console.log(" ".repeat(spacesCount) + pine.character.repeat(charCount) );
  }

}
