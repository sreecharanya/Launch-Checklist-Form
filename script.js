// Write your JavaScript code here!
window.addEventListener("load", function() {
 let json=[];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      
   response.json().then(function(json){
          
   let missionTarget=  document.getElementById("missionTarget")
   let index = Math.floor(Math.random()*json.length);
   missionTarget.innerHTML=`<h2>Mission Destination</h2>
   <ol>
      <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
      <li>Star: ${json[index].star}</li>
      <li>Distance from Eainrth: ${json[index].distance}</li>
      <li>Number of Moons: ${json[index].moons}</li>
   </ol>
   <img src="${json[index].image}">
`
});


   });
   let form = document.querySelector("form");
form.addEventListener("submit",function()
{  
      event.preventDefault();
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let copilotnameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
     
       if (pilotnameInput.value === "" || copilotnameInput.value === "" || fuelLevelInput.value ==="" || cargoMassInput.value==="")
       {
          console.log("hi");
          alert("All fields are required!");
                   }else if(isNaN(pilotnameInput.value) === false ||  isNaN(copilotnameInput.value)=== false  || isNaN(fuelLevelInput.value)=== true || isNaN(cargoMassInput.value) === true) 
         {        
         alert("Invalid entry.Pilot and copilot names should be string.fuel and cargo must be number.");
          } else
          {
            
            faultyItems.style.visibility = "visible"; 
                    
           if((fuelLevelInput.value) < 10000)
           {
            pilotStatus.innerHTML =`Pilot ${pilotnameInput.value} is ready for launch`;
            copilotStatus.innerHTML=`Copilot ${copilotnameInput.value} is ready for launch`;
            fuelStatus.innerHTML="Fuel too low for launch";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
           }else if((cargoMassInput.value) >10000)
           {
            pilotStatus.innerHTML =`Pilot ${pilotnameInput.value} is ready for launch`;
            copilotStatus.innerHTML=`Copilot ${copilotnameInput.value} is ready for launch`;
            cargoStatus.innerHTML="Cargo mass too high to take off";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
           }else
           {
            pilotStatus.innerHTML =`Pilot ${pilotnameInput.value} is ready for launch`;
            copilotStatus.innerHTML=`Copilot ${copilotnameInput.value} is ready for launch`;
            launchStatus.innerHTML="Shuttle is ready for launch";
            launchStatus.style.color="green";

           }
         }  
         
      // stop the form submission
        
       });
});
/*This block of code shows how to format the HTML once you fetch some planetary JSON!*/
