// Assignment Code
var generateBtn = document.querySelector("#generate");
let useChar = "";
function generatePassword(){
    var charInput = document.getElementById("myTextboxVal").value;
    if(charInput>=8 && charInput<=128){
      console.log("charinput "+charInput);   
      useChar = ""+ checkCriteria();
      var pWord = '';
      useCharLength = useChar.length;
      for (let i = 0; i < charInput; i++) {
        pWord += useChar.charAt(Math.floor(Math.random() * useCharLength));
      }
      return pWord;
    } else if(charInput==""){
      return "";
    } else{
      return "Error: Please enter a number between 8 and 128."
    }

    }

// Write password to the #password input
function writePassword() {
var showBox=document.querySelector('#cBoxes');
showBox.style.display = 'block';
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