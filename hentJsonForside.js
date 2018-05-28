document.addEventListener("DOMContentLoaded", hentJsonForside);
async function hentJsonForside() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/forside/39/");
    let forside = await jsonObjekt.json();
    document.querySelector("[data-billede]").src = forside.acf.forside_slideshow1;
    document.querySelector("[data-billede2]").src = forside.acf.forside_slideshow2;
    document.querySelector("[data-billede3]").src = forside.acf.forside_slideshow3;
    document.querySelector("[data-billede4]").src = forside.acf.forside_slideshow4;
    document.querySelector("[data-billede5]").src = forside.acf.forside_slideshow5;
    document.querySelector("[data-slogan]").innerHTML = forside.acf.forside_tekst;

    //      document.querySelector("[data-overskrift]").textContent = forside.title.rendered;

}



//document.addEventListener("DOMContentLoaded", hentJsonSpisebord);
//
//async function hentJsonSpisebord() {
//
//    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/produkter/28/");
//    spisebord = await jsonObjekt.json();
//
//    console.log(spisebord);
//
//    lavFiltreringSpisebord();
//
//}
//
//function visSpisebord() {
//
//    document.querySelector("[data-spisebord_billede]").src = spisebord.acf.produktbillede1;
//    document.querySelector("[data-spisebord_beskrivelse]").innerHTML = spisebord.acf.produktTekst1;
//    document.querySelector("[data-spisebord_billede2]").src = spisebord.acf.produktbillede2;
//    document.querySelector("[data-spisebord_beskrivelse2]").innerHTML = spisebord.acf.produktTekst2;
//    document.querySelector("[data-spisebord_billede3]").src = spisebord.acf.produktbillede3;
//    document.querySelector("[data-spisebord_beskrivelse3]").innerHTML = spisebord.acf.produktTekst4;
//    document.querySelector("[data-spisebord_billede4]").src = spisebord.acf.produktbillede4;
//    document.querySelector("[data-spisebord_beskrivelse4]").innerHTML = spisebord.acf.produktTekst4;
//
//}



//document.addEventListener("DOMContentLoaded", hentJsonSofabord);
//
//async function hentJsonSofabord() {
//
//    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/produkter/118/");
//    let sofabord = await jsonObjekt.json();
//    document.querySelector("[data-sofabord_billede]").src = sofabord.acf.produktbillede1;
//    document.querySelector("[data-sofabord_beskrivelse]").innerHTML = sofabord.acf.produktTekst1;
//    document.querySelector("[data-sofabord_billede2]").src = sofabord.acf.produktbillede2;
//    document.querySelector("[data-sofabord_beskrivelse2]").innerHTML = sofabord.acf.produktTekst2;
//
//    lavFiltrering();
//
//}



//document.addEventListener("DOMContentLoaded", hentJsonHylder);
//
//async function hentJsonHylder() {
//
//    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/produkter/120/");
//    let hylde = await jsonObjekt.json();
//    document.querySelector("[data-hylde_billede]").src = hylde.acf.produktbillede1;
//    document.querySelector("[data-hylde_beskrivelse]").innerHTML = hylde.acf.produktTekst1;
//    document.querySelector("[data-hylde_billede2]").src = hylde.acf.produktbillede2;
//    document.querySelector("[data-hylde_beskrivelse2]").innerHTML = hylde.acf.produktTekst2;
//    document.querySelector("[data-hylde_billede3]").src = hylde.acf.produktbillede3;
//    document.querySelector("[data-hylde_beskrivelse3]").innerHTML = hylde.acf.produktTekst3;
//
//    lavFiltrering();
//
//}


//document.addEventListener("DOMContentLoaded", hentJsonDetails);
//
//async function hentJsonDetails() {
//
//    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/produkter/121/");
//    let details = await jsonObjekt.json();
//    document.querySelector("[data-omSpisebord]").textContent = details.acf.details1;
//    document.querySelector("[data-omSpisebord2]").textContent = details.acf.details1;
//    document.querySelector("[data-omSpisebord3]").textContent = details.acf.details1;
//    document.querySelector("[data-omSpisebord4]").textContent = details.acf.details1;
//    document.querySelector("[data-omSofabord]").textContent = details.acf.details2;
//    document.querySelector("[data-omSofabord2]").textContent = details.acf.details2;
//    document.querySelector("[data-farvevalg]").textContent = details.acf.details3;
//    document.querySelector("[data-omHylden]").textContent = details.acf.details4;
//    document.querySelector("[data-omHylden2]").textContent = details.acf.details4;
//    document.querySelector("[data-omHylden3]").textContent = details.acf.details4;
//}



//document.addEventListener("DOMContentLoaded", hentJsonOverskrift);
//
//async function hentJsonOverskrift() {
//
//    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/produkter/122/");
//    let overskrift = await jsonObjekt.json();
//    document.querySelector("[data-overskriftSpisebord1]").textContent = overskrift.acf.overskrift1;
//    document.querySelector("[data-overskriftSpisebord2]").textContent = overskrift.acf.overskrift2;
//    document.querySelector("[data-overskriftSpisebord3]").textContent = overskrift.acf.overskrift3;
//    document.querySelector("[data-overskriftSpisebord4]").textContent = overskrift.acf.overskrift4;
//    document.querySelector("[data-overskriftSofabord1]").textContent = overskrift.acf.overskrift5;
//    document.querySelector("[data-overskriftSofabord2]").textContent = overskrift.acf.overskrift10;
//    document.querySelector("[data-overskriftSofabord3]").textContent = overskrift.acf.overskrift6;
//    document.querySelector("[data-overskriftHylder1]").textContent = overskrift.acf.overskrift7;
//    document.querySelector("[data-overskriftHylder2]").textContent = overskrift.acf.overskrift8;
//    document.querySelector("[data-overskriftHylder3]").textContent = overskrift.acf.overskrift9;
//}
//
//
//let filterKnapper = document.querySelectorAll("#filter button").forEach(knap => {
//    knap.addEventListener("click", (e) => {
//        filterType = e.target.className;
//        filterNavn = e.target.textContent;
//
//        console.log("filter");
//
//        if (filterType == "spiseborde") {
//            hentJsonSpisebord();
//        };
//        if (filterType == "sofaborde") {
//            hentJsonSofabord();
//        };
//        if (filterType == "hylder") {
//            hentJsonHylder();
//        };
//    });
//});
//
//function lavFiltreringSpisebord() {
//
//
//    console.log("filter_2");
//
//    document.querySelector("#filter button").textContent = filterNavn;
//
//    if (filterNavn != "Alle") {
//        spisebord = spisebord.filter(obs => obs.acf[filterType] == filterNavn);
//    }
//
//    visSpisebord();
//}
