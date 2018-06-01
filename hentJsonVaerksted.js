document.addEventListener("DOMContentLoaded", hentJsonOmVaerksted);

async function hentJsonOmVaerksted() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/om_vaerksted/52/");
    let vaerksted = await jsonObjekt.json();
    document.querySelector("[data-360video]").src = vaerksted.acf.vr_video;
    document.querySelector("[data-vaerksted_tekst]").innerHTML = vaerksted.acf.vaerksted_tekst1;
    document.querySelector("[data-bestillingsmenu]").innerHTML = vaerksted.acf.bestillingsmenu;
    document.querySelector("[data-kontaktOverskrift]").innerHTML = vaerksted.acf.kontaktoverskrift;
    document.querySelector("[data-kontaktBeskrivelse]").innerHTML = vaerksted.acf.kontaktbeksrivelse;
    document.querySelector("[data-vaerkstedVideo_overskrift]").innerHTML = vaerksted.acf.videooverskrift;


    //    document.querySelector("[data-vaerksted_tekst2]").textContent = vaerksted.acf.vaerksted_tekst2;
}
