
function pigLatin(userInput) {
  if (userInput[0]==="a" || userInput[0] ==="e" || userInput[0]==="i" || userInput[0]==="o" || userInput[0]==="u"){

    userInput += "ay";
    return userInput;

}  else {
    return true;
  }
};





$(document).ready(function(){
  $("form#pig-latin").submit (function(event){
    var userInput = $("input#latin").val();
    var x = pigLatin(userInput);
    //console.log(userInput);
    $("#result").text(x);

    event.preventDefault();
  });
});
