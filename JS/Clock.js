const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');  
const hourHand = document.querySelector('.hour-hand'); 


function setDate(){
const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees =(( seconds / 60) * 360) + 90;
if(secondsDegrees == 90){
secondHand.style.transition = ""; /*prevent hand spin when it flips to 90 deg*/
}
else{
secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
}
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const minutes = now.getMinutes();
const minutesDegrees = (( minutes / 60) * 360) + ((seconds/60)*6)  + 90;
minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;  


const hours = now.getHours();
const hoursDegrees = (( hours / 12) * 360) + ((minutes/60)*30) + 90;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`; 
}

setInterval(setDate, 1000); //runs setDate every Second


//Control CSS Variables

const inputs = document.querySelectorAll('.controller input'); //selects all inputs on pages

function handleUpdate(){
  const suffix = this.dataset.sizing || '' ; //specifies the suffix from the dataset, otherwise lists nothing
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //set property according to the inputs name defined within the input element to the new value + suffix
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); /* if there is a change to any input, execute handleUpdate function*/
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); 
