

function pigLatin(userInput) {

  var phrase = userInput.split(" ");
  console.log(phrase);
  var output = "";
  for (var i = 0; i < phrase.length; i++) {
    var word = phrase[i].split("");
    if (word[0]==="a" || word[0] ==="e" || word[0]==="i" || word[0]==="o" || word[0]==="u"){
      output += word.join("") + "ay ";
    } else {
      console.log(word);
      for (var j = 0; j < word.length; j++) {
        var firstLetter = word.shift();
        word.push(firstLetter);
        //console.log(word);
        if (word[0]==="a" || word[0] ==="e" || word[0]==="i" || word[0]==="o" || word[0]==="u"){
          output += word.join("") + "ay ";
          break;
        }
      }
    }


  }
  return output;

}

$(document).ready(function(){
  $("form#pig-latin").submit (function(event){
    event.preventDefault();
    var userInput = $("input#latin").val();
    var phrase =pigLatin(userInput);

    $("#result").text(phrase);

  });
});
