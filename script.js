
    
    // Assignment Code
var generateBtn = document.querySelector("#generate");

//total arrays

var total = []
var whole = []
var ch = 0
console.log(total)
//lowercase arrays
var lc  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p", "q", "r", "s", "t", "u","v","w", "x", "y", "z"]

// uppercase array
var uc  = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P", "Q","R","S","T","U","V","W","X","Y","Z"] 

//number array
var num = ["0","1","2","3","4","5","6","7","8","9"]

//specail character array
var sp  = ["!","@","#","$","%","^","&","*","(", ")"]
// Write password to the #password input
function writePassword() {

    // prompts

var howLong = prompt("How long do you want your password to be? it must be between 8 and 128 characters")

if(howLong > 8 && howLong < 128){

var lowercase = confirm(" press  ok if you want lowercase characters")
if(lowercase){
 total = total.concat(lc);
  console.log(total);
  ch++;
}

var uppercase = confirm ("press ok if you want uppercase characters")
if(uppercase){
 total = total.concat(uc);
  console.log(total);
  ch++;
}

var number = confirm ("press ok if you want numbers")
if(number){
total = total.concat(num);
console.log(total);
ch++;
}
var special = confirm ("press ok if you want special characters")
if(special){
 total = total.concat(sp);
  console.log(total);
  ch++;
}


if(ch > 0){

//password function

for (var i = 0; i < howLong; i++) {
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var parts = total[Math.floor(Math.random() * total.length)];

  console.log(parts);
  whole= whole.concat(parts);
  console.log(whole);
 password = whole.join('');

  // Test if it's working correctly
// document.write(password)

var passwordText = document.querySelector("#password");
passwordText.value = password;

}




}

else{
  alert("you need at least one type of character");
}


}
else{
  alert("it needs to be between 8 and 128 characters");
}






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    
    
    