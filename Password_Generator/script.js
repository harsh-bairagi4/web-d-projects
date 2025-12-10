const passwordBox = document.getElementById("password");
const copyButton = document.getElementById("copybutton");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "=+~!@{}[]/?#$%^&*()_-";

const allChars = upperCase + lowerCase + numbers + symbol;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    copyButton.style.opacity = 1;

}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    copyButton.style.opacity = 0.5;
  }