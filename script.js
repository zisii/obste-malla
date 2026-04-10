const requisitos = {

  bioquimica: ["quimica"],
  matro1: ["histo"],

  fisiologia: ["fisica", "biologia"],
  sexualidad: ["humanista"],
  educacion: ["humanista"],
  matro2: ["matro1"],

  fisiologia2: ["fisiologia", "bioquimica", "histo"],
  micro1: ["biologia", "bioquimica"],
  gine1: ["sexualidad"],
  obste1: ["matro2", "histo"]

};

const ramos = document.querySelectorAll(".ramo");

ramos.forEach(ramo => {
  ramo.addEventListener("click", () => {

    if (ramo.classList.contains("locked")) return;

    ramo.classList.toggle("approved");

    actualizarEstado();
  });
});

function actualizarEstado() {

  Object.keys(requisitos).forEach(ramoId => {
    const ramo = document.getElementById(ramoId);
    const reqs = requisitos[ramoId];

    const cumplidos = reqs.every(req =>
      document.getElementById(req).classList.contains("approved")
    );

    if (cumplidos) {
      ramo.classList.remove("locked");
      ramo.classList.add("unlocked");
    } else {
      if (!ramo.classList.contains("approved")) {
        ramo.classList.add("locked");
        ramo.classList.remove("unlocked");
      }
    }
  });
}
