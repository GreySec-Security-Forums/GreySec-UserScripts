// ==UserScript==
// @name         Greysec TopButton
// @namespace    https://greysec.net/
// @version      0.1
// @description  Simple script for changing latests posts to the top and the button "return to top"
// @author       enmafia2
// @match        https://greysec.net/*
// @grant        none
// ==/UserScript==

(function() {
CreateButton();
//  ---[CREATE THE BUTTON "TO TOP"] ---
function CreateButton() {
   var btn = document.createElement("BUTTON");
   var t = document.createTextNode("⇧");
   btn.appendChild(t);
   document.body.appendChild(btn);
   btn.style.position="fixed";
   btn.style.bottom="5px";
   btn.style.right="5px";
   btn.style.fontSize="18px"
   btn.onclick = function() {
       location.href = "#top";
   };
}
})();