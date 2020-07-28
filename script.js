// Write your JavaScript code here!
window.addEventListener("load", function() {
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
         alert("Invalid entry");
          } else
          {
            
            faultyItems.style.visibility = "visible"; 
                    
           if((fuelLevelInput.value) < 10000)
           {
            pilotStatus.innerHTML =`Pilot ${pilotnameInput.value} is ready for launch`;
            copilotStatus.innerHTML=`Copilot ${copilotnameInput.value}is ready for launch`;
            fuelStatus.innerHTML="Fuel too low for launch";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
           }
         }  
         
      // stop the form submission
        
       });
});
/*This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
<li>Diameter: ${}</li>
   <li>Star: ${Tatoo I & Tatoo II}</li>
   <li>Distance from Earth: ${43000 light years from galactic core}</li>
   <li>Number of Moons: ${https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg}</li>
</ol>
<img src="${}">
*/
