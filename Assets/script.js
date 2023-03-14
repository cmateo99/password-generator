// Assignment Code
var generateBtn = document.querySelector("#generate");
let useChar = "";
function generatePassword(){
       
    useChar = ""+ checkCriteria();
    var pWord = '';
    useCharLength = useChar.length;
    for (let i = 0; i < 8; i++) {
      pWord += useChar.charAt(Math.floor(Math.random() * useCharLength));
    }
    return pWord;
    }

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Criteria check

function checkCriteria(){
  useChar = "";
  var upperCheck = document.getElementById('uppercaseCheckbox');
  var lowerCheck=document.getElementById('lowercaseCheckbox');
  var numCheck = document.getElementById('num');
  var specialCharCheck = document.getElementById('specialChar');
  console.log(upperCheck.checked)
  console.log(lowerCheck);
  console.log(numCheck);
  console.log(specialCharCheck);  
  if (upperCheck.checked){
    useChar+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCheck.checked){
    useChar+="abcdefghijklmnopqrstuvwxyz";
  }
  if (numCheck.checked == true){
    useChar+="0123456789";
  }
  if (specialCharCheck.checked == true){
    useChar+= "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  }
  console.log(useChar + 'This is in usechar');
  return useChar;
  
}