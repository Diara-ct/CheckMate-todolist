/*validation de l'email*/
function emailValide(email) {
  return email.includes("@") && email.endsWith(".com");
}

/*connexion et inscription*/
const btnConnexion = document.getElementById("btn-valider-inscription");
const inputEmail = document.querySelector("input[type='email']");

if (btnConnexion && inputEmail) {
  btnConnexion.addEventListener("click", () => {
    const email = inputEmail.value.trim();

    if (!emailValide(email)) {
      alert("Introduisez un email correct");
      return;
    }

    localStorage.setItem("userEmail", email);

    window.location.href = "taches.html";
  });
}

/*connexion-automatiquue*/
const emailSauvegarde = localStorage.getItem("userEmail");

if (
  emailSauvegarde &&
  (window.location.pathname.includes("connexion") ||
   window.location.pathname.includes("inscription"))
) {
  window.location.href = "taches.html";
}

/* ajout et stockage des taches*/
let taches = JSON.parse(localStorage.getItem("taches")) || [];

const btnEnregistrer = document.getElementById("btn-enregistrer");

if (btnEnregistrer) {
  btnEnregistrer.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");

    const titre = inputs[0].value.trim();
    const description = inputs[1].value.trim();

    if (titre === "") {
      alert("Veuillez entrer un nom de tâche");
      return;
    }

    const nouvelleTache = {
      titre: titre,
      description: description
    };

    taches.push(nouvelleTache);
    localStorage.setItem("taches", JSON.stringify(taches));
  });
}

/*taches.html*/
const listeTaches = document.getElementById("liste-taches");

if (listeTaches) {
  listeTaches.innerHTML = "";

  taches.forEach((tache) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${tache.titre}</strong>
      <p>${tache.description}</p>
    `;
    listeTaches.appendChild(li);
  });
}

