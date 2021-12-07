const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ( ) => {
    if (window.pageYOffset > 1) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

function arabic_function() {
  var checkBox = document.getElementById("arabic_checkbox");
  var elements = document.getElementsByClassName("arabic");

  for (const e of elements) {
    e.style.display = e.style.display === 'none' ? 'block' : 'none'; 
}}

function ayat_number_function() {
  var checkBox = document.getElementById("ayat_number");
  var elements = document.getElementsByClassName("ayat_number");

  for (const e of elements) {
    e.style.display = e.style.display === 'none' ? 'block' : 'none'; 
}}

function surahReference() {
  var checkBox = document.getElementById("surahReference");
  var elements = document.getElementsByClassName("surahReference");

  for (const e of elements) {
    e.style.display = e.style.display === 'none' ? 'block' : 'none'; 
}}

function bangla_pronounciation_function() {
  var checkBox = document.getElementById("bangla_pronouciation_checkbox");
  var elements = document.getElementsByClassName("banglaPronounciation");

  for (const e of elements) {
    e.style.display = e.style.display === 'none' ? 'block' : 'none'; 
}}

function bangla_meaning_function() {
  var checkBox = document.getElementById("bangla_meaning_checkbox");
  var elements = document.getElementsByClassName("banglaMeaning");

  for (const e of elements) {
    e.style.display = e.style.display === 'none' ? 'block' : 'none'; 
}}

function turnLightsOn() {

  var arabic_elements = document.getElementsByClassName("arabic");
   for (const e of arabic_elements) {
    e.style.color = "red"
    e.style.backgroundColor = "#D4E6F1"; 
   }
  
  var bangla_meaning_elements = document.getElementsByClassName("banglaMeaning");
   for (const e of bangla_meaning_elements) {
    e.style.color = "#52BE80"
    e.style.backgroundColor = "#F3e5dc"; 
   }

   var bangla_pronounciation_elements = document.getElementsByClassName("banglaPronounciation");
   for (const e of bangla_pronounciation_elements) {
    e.style.color = "darkblue"
    e.style.backgroundColor = "#F3e5dc"; 
   }

   var heading_elements = document.getElementsByClassName("heading");
   for (const e of heading_elements) {
    e.style.color = "black"
    e.style.backgroundColor = "#F3e5dc"; 
    ;
   }

  var surahReference = document.getElementsByClassName("surahReference");
   for (const e of surahReference) {
    e.style.color = "#8E44AD "
    e.style.backgroundColor = "#F3e5dc"; 
   }

   var ayat_number = document.getElementsByClassName("ayat_number");
   for (const e of ayat_number) {
    e.style.color = "black "
    e.style.backgroundColor = "#F3e5dc"; 
   }

   document.body.style.backgroundColor = "#F3e5dc";


} 


function turnLightsOff()
{
  var arabic_elements_2 = document.getElementsByClassName("arabic");
   for (const e of arabic_elements_2) {
    e.style.color = "#FFFF00"
    e.style.backgroundColor = "#273238"; 
   }
   document.body.style.backgroundColor = "#273238";

  var bangla_meaning_elements = document.getElementsByClassName("banglaMeaning");
   for (const e of bangla_meaning_elements) {
    e.style.color = "#977a85"
    e.style.backgroundColor = "#303b42"; 
   }

  var bangla_pronounciation_elements = document.getElementsByClassName("banglaPronounciation");
   for (const e of bangla_pronounciation_elements) {
    e.style.color = "white"
    e.style.backgroundColor = "#3c474d"; 
  
  var heading_elements = document.getElementsByClassName("heading");
   for (const e of heading_elements) {
    e.style.color = "white"
    e.style.backgroundColor = "#273238";
  }

  var surahReference = document.getElementsByClassName("surahReference");
   for (const e of surahReference) {
    e.style.color = "red"
    e.style.backgroundColor = "#273238";
   }
   
  var ayat_number = document.getElementsByClassName("ayat_number");
   for (const e of ayat_number) {
    e.style.color = "orange"
    e.style.backgroundColor = "#273238";
   }
   
}}
