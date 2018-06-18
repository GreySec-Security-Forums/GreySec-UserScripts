// ==UserScript==
// @name         Greysec Post Table
// @namespace    https://greysec.net/
// @version      0.1
// @description  Simple script for changing latests posts to the top and the button "return to top"
// @author       enmafia2
// @match        https://greysec.net/
// @match        https://greysec.net/index.php
// @grant        none
// ==/UserScript==

// ---[MAIN]---
"use strict";
(function() {
ChangePos();

//  ---[CHANGE THE POSITION OF THE POSTS TABLE]---
function ChangePos() {
   //Add space for the table
   var d = document.querySelector("div.navigation");
   d.innerHTML += '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
   var lu = d.offsetWidth;

   //Change position of the table
   var posts = document.getElementById("prostats_table");
   posts.style.position = "absolute";
   posts.style.top = '225px';
   posts.style.width = lu-25+"px";
}
//Change size of the table if event triggered
function fooOnResize() {
   var newlu = document.querySelector("div.navigation").offsetWidth;
   document.getElementById("prostats_table").style.width = newlu-25+"px"
}

//Event Listener
window.addEventListener("resize", fooOnResize)

})();
