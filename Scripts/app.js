/*
    Student Name  : Brejanth Rajendran
    StudentID     : 100557484
    Date Completed: 2020/01/30
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
   //create a h3 tag
    let h3 = document.createElement("h3");

    //link the contentArea tag to a var
    let contentArea = document.getElementById("contentArea");

    //Link the large button to a var
    let ButtonName = document.getElementById("largeButton");
     //Link the firstParagraph paragraph to a var
    let Paragraph1 = document.getElementById("firstParagraph");

   

    
    /**
     * Variable initialization in this function
     *
     */
    
    function Start()
    {


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        console.log("%cDeclaring Variables", "color: red;");
        //changes the text content of the button
       ButtonName.textContent ="Learn More";
      
       //sets the attribute for the h3 tag, then changes the text
       h3.setAttribute("class", "display-6");
       h3.textContent =" [Brejanth Rajendran] [100557484].";
       //adds the h3 tag to the main content area
       contentArea.appendChild(h3);
       //moves the h3 tag before the button
       ButtonName.parentNode.insertBefore(h3,ButtonName);

       // Changes the text content of the firstParagraph, and makes it hidden
       Paragraph1.textContent ="JavaScript is a prototype-based language, and every object in  JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods"
       Paragraph1.style.visibility = "hidden";
       //to check if paragraph1 exists and its contents
       console.log(Paragraph1);

  
            
      //Button click event listener with inline function
      ButtonName.addEventListener("click",function()
      {
          // doesnt work properly but it should change the button content to hide details when clicked
        if (ButtonName.textContent="Learn More")
        {
            ButtonName.textContent="Hide Details";
        }  else //When the text inside is not learn more should change it to learn more
        {
            ButtonName.textContent="Learn More";
        }

        if (ButtonName.textContent="Hide Details")
        { //should change the visibility of the paragraph if the button reads hide details
            Paragraph1.style.visibility = "visible";
        } else 
        {//should change the visibility of the paragraph if the button reads anything else
            Paragraph1.style.visibility = "hidden";
        }    
      });
  
            
      }
       

    window.addEventListener("load", Start);
})(app || (app = {}));

