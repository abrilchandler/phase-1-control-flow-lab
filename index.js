function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400) {
  let greeting = "This one is on me!";
  return greeting;
}
  if (ride > 400 && ride < 2000) {
    let greeting = "That will be twenty bucks.";
    return greeting;
}  
if (ride > 2500) {
     let greeting = "No can do.";
    return greeting;
  }
  if (ride > 2000) {
      let greeting = "I will gladly take your thirty bucks.";
     return greeting;
  }

}
function ternaryCheckCity(city){
  // Write your code here!
   if (city == "NYC") {
    let destination = "Ok, sounds good.";
     return destination;
   } else {
    let destination = "No go.";
    return destination;
   }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response = "";
switch (tip) {
  case "generous":
    response = "Thank you so much.";
    break;
   case "not as generous":
    response = "Thank you.";
    break; 
default: response = "Bye.";
}
    return response; 
  
 
    

}
