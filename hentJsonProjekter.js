document.addEventListener("DOMContentLoaded", hentJsonProjekter);

async function hentJsonProjekter() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/projekter/51/");
    let projekter = await jsonObjekt.json();
    document.querySelector("[data-present_video]").src = projekter.acf.video;
    document.querySelector("[data-projekter_tekst]").innerHTML = projekter.acf.projekter_tekst1;
    document.querySelector("[data-projekter_billede]").src = projekter.acf.projekter_billede;
    document.querySelector("[data-projekter_tekst2]").innerHTML = projekter.acf.projekter_tekst2;
}
