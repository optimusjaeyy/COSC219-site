/*
  COSC 219 — Lab 7 · app.js
  The only file that touches the page. Open index.html with Live Server.
*/

// import from ./storage.js, ./render.js and ./trails.js

import {
  makeTrail,
  addTrail,
  isValidTrail,
  findAction,
  removeTrail,
  toggleTrail,
} from "./trails.js";
import { renderTrails, summaryText } from "./render.js";
import { saveTrails, loadTrails, clearTrails } from "./storage.js";

const form = document.getElementById("add-form");
const nameEl = document.getElementById("name");
const distanceEl = document.getElementById("km");
const errorEl = document.getElementById("error");
const summaryEl = document.getElementById("summary");
const listEl = document.getElementById("trail-list");

/* Load the saved trails into a `let` — the array is replaced, not edited,
   every time something changes. */
let trails = loadTrails();

/* update() — redraw the list, rewrite the summary, and save.
   Call it whenever the data changes, and once at the very bottom of this
   file so the page is not blank on load. */
function update() {
  renderTrails(trails, listEl);
  summaryEl.textContent = summaryText(trails);
  saveTrails(trails);
}

/* The add form.

   A submit reloads the page by default, throwing away everything in
   memory. Stop that first, then validate, then add.

   When the input is invalid: put a message in #error, focus the name
   field, and return without changing anything.
   When it is valid: clear #error, add the trail, reset the form. */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameEl.value;
  const distance = distanceEl.value;

  if (!isValidTrail(name, distance)) {
    errorEl.textContent = "Give the trail a name and a distance above zero.";
    nameEl.focus();
    return;
  }

  errorEl.textContent = "";
  trails = addTrail(trails, makeTrail(name, distance));
  form.reset();
  update();
});

/* The list.

   ONE listener on #trail-list — not one per button. The buttons are
   destroyed and rebuilt on every render, so a listener on a button would
   not survive the first redraw.

   Use findAction(event.target) to work out what was clicked.

   Clear #error here too — once the user clicks something in the list they
   have moved on from the form, and a stale validation message left on
   screen is just noise. */

listEl.addEventListener("click", (event) => {
  const hit = findAction(event.target);
  errorEl.textContent = "";
  if (!hit) return;

  if (hit.action === "toggle") {
    trails = toggleTrail(trails, hit.id);
  } else if (hit.action === "delete") {
    trails = removeTrail(trails, hit.id);
  }
  update();
});

/* The Clear all button: empty the array, clear storage, update. */
const resetBtn = document.getElementById("clear");

resetBtn.addEventListener("click", () => {
  trails = [];
  clearTrails();
  update();
});

update();
