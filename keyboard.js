const keys = document.getElementById("keys")
const inputwords=document.getElementById("inputword")
for(let i= 65; i< 91; i++)
{
    
    //For creating the keys
    let button = document.createElement("button")
    button.classList.add("letters");
    keys.appendChild(button)
    button.innerText = String.fromCharCode(i);
    const letter = document.querySelector(".letters")
   
    
    inputwords.value="";
    
    button.addEventListener("focus",()=>{
        inputwords.value+=String.fromCharCode(i);
    
        
      
    })    
} 

//character button keys