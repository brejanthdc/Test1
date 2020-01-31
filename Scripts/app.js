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
   
    

    

    
    /**
     * Variable initialization in this function
     *
     */
    let h3 = document.createElement("h3");
    let contentArea = document.getElementById("contentArea");

    let ButtonName = contentArea.getElementsByTagName("button");
    let Paragraph1 = document.getElementById("firstParagraph");
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
       // let ButtonName = contentArea.document
      
       h3.setAttribute("class", "display-6");
       h3.textContent =" [Brejanth Rajendran] [100557484].";
       contentArea.appendChild(h3);
       firstParagraph.textContent ="JavaScript is a prototype-based language, and every object in  JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods"
        firstParagraph.style.visibility = "hidden";
       
       console.log(firstParagraph);
      // contentArea.parentNode.insertBefore(h3,ButtonName);

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

