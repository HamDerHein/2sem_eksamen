document.addEventListener("DOMContentLoaded", hentJsonOmButik);

async function hentJsonOmButik() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/om_butik/54/");
    let butik = await jsonObjekt.json();
    document.querySelector("[data-butik_billede]").src = butik.acf.butik_billede;
    document.querySelector("[data-butik_tekst]").innerHTML = butik.acf.butik_tekst;
    document.querySelector("[data-lilleTekst]").innerHTML = butik.acf.butik_lilletekst1;
    document.querySelector("[data-lilleTekst2]").innerHTML = butik.acf.butik_lilletekst2;
    document.querySelector("[data-lilleTekst3]").innerHTML = butik.acf.butik_lilletekst3;
    document.querySelector("[data-lilleTekst4]").innerHTML = butik.acf.butik_lilletekst4;

}
