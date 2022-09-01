const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passwordBtn = document.getElementById("passwort-btn")
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const lengthInput = document.getElementById("count")
const errorEl = document.getElementById("error")

function getPassword(){
    //console.log(characters.length) -> 91
    let len = characters.length
    let tempPassword = ""
   
    let passwordLength

    if (lengthInput.value === ""){
            passwordLength = 15
    } else {
        passwordLength = parseInt(lengthInput.value)
    }
    
    if (passwordLength < 8){
        errorEl.textContent = "Your password should be at least 10 characters long."
    }
   
    for (let i = 0; i < passwordLength; i++){
        let randomChar = Math.floor(Math.random() * len)    
        //console.log(characters[randomChar])
        tempPassword += characters[randomChar]
    }
    
    
    return tempPassword
}

passwordBtn.addEventListener("click", function() {
      
    passwordOne.textContent = getPassword()
    passwordTwo.textContent = getPassword()
    
    lengthInput.value = ""
            
})

function copyPassword(){
    let copyText = passwordOne.textContent

    navigator.clipboard.writeText(copyText);  

}

passwordOne.addEventListener('click', copyPassword())
passwordTwo.addEventListener('click', copyPassword())