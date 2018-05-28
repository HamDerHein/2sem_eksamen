  document.getElementById("kasse1").addEventListener("click", show_jasminGul);
  document.getElementById("kasse2").addEventListener("click", show_hindbaerRod);
  document.getElementById("kasse3").addEventListener("click", show_lyserod);
  document.getElementById("kasse4").addEventListener("click", show_midnatsblaa);
  document.getElementById("kasse5").addEventListener("click", show_petroleumsBlaa);
  document.getElementById("kasse6").addEventListener("click", show_aquamarine);
  document.getElementById("kasse7").addEventListener("click", show_graa);
  document.getElementById("kasse8").addEventListener("click", show_sort);
  document.getElementById("kasse9").addEventListener("click", show_lysGraa);


  let sort;
  let jasmin_gul;
  let hindbaer_rod;
  let lyserod;
  let midnatsblaa;
  let petroleums_blaa;
  let aquamarine;
  let graa;
  let lys_graa;


  document.addEventListener("DOMContentLoaded", farveskfit);

  async function farveskfit() {

      let mySvg = await fetch("/img/bordplader.svg");
      let svg = await mySvg.text();
      document.querySelector("#farveskift").innerHTML = svg;

      console.log("Hent SVG");


      sort = document.querySelector("#sort");
      jasmin_gul = document.querySelector("#jasmin_gul");
      hindbaer_rod = document.querySelector("#hindbaer_rod");
      lyserod = document.querySelector("#lyserod");
      midnatsblaa = document.querySelector("#midnatsblaa");
      petroleums_blaa = document.querySelector("#petroleums_blaa");
      aquamarine = document.querySelector("#aquamarine");
      graa = document.querySelector("#graa");
      lys_graa = document.querySelector("#lys_graa");
      sort = document.querySelector("#sort");
  }

  //----------------------------------------------

  function hideAll() {
      jasmin_gul.style.visibility = "hidden";
      hindbaer_rod.style.visibility = "hidden";
      lyserod.style.visibility = "hidden";
      midnatsblaa.style.visibility = "hidden";
      petroleums_blaa.style.visibility = "hidden";
      aquamarine.style.visibility = "hidden";
      graa.style.visibility = "hidden";
      lys_graa.style.visibility = "hidden";

  }

  function show_jasminGul() {
      console.log("jasmin_gul = " + jasmin_gul);
      hideAll();
      jasmin_gul.style.visibility = "visible";

      console.log("skift farve");
  }


  function show_hindbaerRod() {

      hideAll();
      hindbaer_rod.style.visibility = "visible";

  }

  function show_lyserod() {

      hideAll();
      lyserod.style.visibility = "visible";

  }

  function show_midnatsblaa() {

      hideAll();
      midnatsblaa.style.visibility = "visible";

  }

  function show_petroleumsBlaa() {

      hideAll();
      petroleums_blaa.style.visibility = "visible";

  }

  function show_aquamarine() {

      hideAll();
      aquamarine.style.visibility = "visible";

  }

  function show_graa() {

      hideAll();
      graa.style.visibility = "visible";

  }

  function show_lysGraa() {

      hideAll();
      lys_graa.style.visibility = "visible";

  }

  function show_sort() {

      hideAll();
      sort.style.visibility = "visible";

  }
