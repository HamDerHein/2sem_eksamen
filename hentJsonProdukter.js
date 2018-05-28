 document.addEventListener("DOMContentLoaded", hentJsonSpisebord);


 async function hentJsonSpisebord() {

     let myTemplate = document.querySelector("#spisebordTemplate")
     let modtager = document.querySelector("#displaySpiseborde")

     let jsonData = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/spiseborde/");
     let event = await jsonData.json();

     console.log(event);

     event.forEach(function (element) {

         let klon = myTemplate.cloneNode(true).content;
         klon.querySelector("[data-overskriftSpisebord]").textContent = element.acf.overskrift;
         klon.querySelector("[data-billedeSpisebord]").src = element.acf.billede;
         klon.querySelector("[data-spisebord_beskrivelse]").innerHTML = element.acf.beskrivelse;
         klon.querySelector("[data-omSpisebord]").textContent = element.acf.udvidet_info;
         modtager.appendChild(klon);
     })
     hentJsonSofabord();
 }

 async function hentJsonSofabord() {

     let myTemplate = document.querySelector("#sofabordTemplate");
     let myTemplate2 = document.querySelector("#farveskriftTemplate");
     let modtager = document.querySelector("#displaySofaborde");

     let jsonData = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/sofaborde/");
     let event = await jsonData.json();

     console.log(event);

     event.forEach(function (element) {

         let klon = myTemplate.cloneNode(true).content;
         klon.querySelector("[data-overskriftSofabord]").textContent = element.acf.overskrift;
         klon.querySelector("[data-billedeSofabord]").src = element.acf.billede;
         klon.querySelector("[data-sofabord_beskrivelse]").innerHTML = element.acf.beskrivelse;
         klon.querySelector("[data-omSofabord]").textContent = element.acf.udvidet_info;
         modtager.appendChild(klon);
         if (element.acf.overskrift == "Colorspots Sofaborde") {
             let klon2 = myTemplate2.cloneNode(true).content;
             modtager.appendChild(klon2);
             farveskfit();
         }
     });


     hentJsonHylder();
 }

 async function hentJsonHylder() {

     let myTemplate = document.querySelector("#hyldeTemplate")
     let modtager = document.querySelector("#displayHylder")

     let jsonData = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/hylder/");
     let event = await jsonData.json();

     console.log(event);

     event.forEach(function (element) {

         let klon = myTemplate.cloneNode(true).content;
         klon.querySelector("[data-overskriftHylde]").textContent = element.acf.overskrift;
         klon.querySelector("[data-billedeHylde]").src = element.acf.billede;
         klon.querySelector("[data-hylde_beskrivelse]").innerHTML = element.acf.beskrivelse;
         klon.querySelector("[data-omHylde]").textContent = element.acf.udvidet_info;
         modtager.appendChild(klon);
     })
     hentJsonFarveskift();
 }

 async function hentJsonFarveskift() {

     let myTemplate = document.querySelector("#farveskriftTemplate")
     let modtager = document.querySelector("#displayFarveskift")

     let jsonData = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/produkter/122/");
     let event = await jsonData.json();

     console.log(event);

     event.forEach(function (element) {

         let klon = myTemplate.cloneNode(true).content;
         klon.querySelector("[data-overskriftFarveskift]").textContent = element.acf.overskrift10;
         modtager.appendChild(klon);

         event.forEach(function (element) {

             let klon = myTemplate.cloneNode(true).content;
             klon.querySelector("[data-overskriftHylde]").textContent = element.acf.overskrift;
         })

     });
 }
