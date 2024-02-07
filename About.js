
    
const newDate = new Date().toLocaleTimeString();
const button = document.getElementById("btn-click");
button.addEventListener("click",  () => {
    console.log(newDate);

    const display = document.createElement("p");
     display.textContent =  `The time is ${newDate}`;
     document.body.appendChild(display);

} 
     
)



