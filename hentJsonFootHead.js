document.addEventListener("DOMContentLoaded", hentJsonHeader);

async function hentJsonHeader() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/header/42/");
    let header = await jsonObjekt.json();
    document.querySelector("[data-logo]").src = header.acf.logo;

}


document.addEventListener("DOMContentLoaded", hentJsonFooter);

async function hentJsonFooter() {

    let jsonObjekt = await fetch("http://frilander.dk/kea/2sem_eksamen/wordpress/wp-json/wp/v2/footer/47");
    let footer = await jsonObjekt.json();
    document.querySelector("[data-kontakt]").innerHTML = footer.acf.kontaktinformation;
    document.querySelector("[data-aabningstider]").innerHTML = footer.acf.aabningstider;
    document.querySelector("[data-fbLogo]").src = footer.acf.facebook_logo.url;
    document.querySelector("[data-insLogo]").src = footer.acf.instagram_logo.url;
}
