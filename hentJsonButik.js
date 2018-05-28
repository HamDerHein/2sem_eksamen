document.addEventListener("DOMContentLoaded", hentJsonOmButik);

async function hentJsonOmButik() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/om_butik/54/");
    let butik = await jsonObjekt.json();
    document.querySelector("[data-butik_billede]").src = butik.acf.butik_billede;
    document.querySelector("[data-butik_tekst]").textContent = butik.acf.butik_tekst;
    document.querySelector("[data_lilleTekst]").innerHTML = butik.acf.butik_lilletekst1;
    document.querySelector("[data_lilleTekst2]").innerHTML = butik.acf.butik_lilletekst2;
    document.querySelector("[data_lilleTekst3]").innerHTML = butik.acf.butik_lilletekst3;
    document.querySelector("[data_lilleTekst4]").innerHTML = butik.acf.butik_lilletekst4;

}