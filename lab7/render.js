/*
  COSC 219 — Lab 7 · render.js
  Building DOM nodes. No storage and no event handling in this file.
*/

/* createTrailItem(trail) — one <li>, built and returned (not inserted).

   Structure, exactly:

     <li class="trail" data-id="x1">
       <span class="trail-name">Knox Mountain</span>
       <span class="trail-km">2.8 km</span>
       <button type="button" data-action="toggle">
         <span class="btn-label">Close</span>
       </button>
       <button type="button" data-action="delete"
               aria-label="Delete Knox Mountain">
         <span class="btn-label">Delete</span>
       </button>
     </li>

   Note the label sits in a <span> INSIDE each button. That is deliberate:
   it is what a real button looks like once it holds an icon, and it is
   why findAction has to use closest() rather than reading the target.

   When the trail is closed:
     · the <li> also gets the class "is-closed"
     · the toggle button says "Reopen" instead of "Close"

   Use document.createElement and textContent.
   NEVER innerHTML — the name came from a form or from storage, and
   innerHTML would parse it as markup. One of the tests feeds this
   function an <img onerror> and checks nothing was created.
   ---------------------------------------------------------------------- */

export function createTrailItem(trail) {
  const li = document.createElement("li");
  li.className = "trail";
  li.dataset.id = trail.id;

  const trailName = document.createElement("span");
  trailName.className = "trail-name";
  trailName.textContent = trail.name;

  const trailKm = document.createElement("span");
  trailKm.className = "trail-km";
  trailKm.textContent = trail.km + " km";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.action = "toggle";

  const label = document.createElement("span");
  label.className = "btn-label";
  btn.append(label);

  const btn2 = document.createElement("button");
  btn2.type = "button";
  btn2.dataset.action = "delete";
  btn2.setAttribute("aria-label", "Delete " + trail.name);

  const label2 = document.createElement("span");
  label2.className = "btn-label";
  label2.textContent = "Delete";
  btn2.append(label2);

  if (trail.closed) {
    li.classList.add("is-closed");
  }
  label.textContent = trail.closed ? "Reopen" : "Close";

  li.append(trailName, trailKm, btn, btn2);
  return li;
}

/* renderTrails(trails, container) — replace everything in the container
   with one item per trail.

   container.replaceChildren(...) empties and refills in one step.
   ---------------------------------------------------------------------- */

export function renderTrails(trails, container) {
  const items = trails.map((trail) => createTrailItem(trail));
  container.replaceChildren(...items);
}

/* summaryText(trails) — one line describing the list.

     []                                   →  "No trails yet. Add one above."
     [one open trail of 2.8 km]           →  "1 trail, 1 open, 2.8 km total."
     [2 trails, 1 open, 14.8 km]          →  "2 trails, 1 open, 14.8 km total."

   Note "1 trail" but "2 trails". Round the distance to one decimal place.
   ---------------------------------------------------------------------- */

export function summaryText(trails) {
  if (trails.length === 0) return "No trails yet. Add one above.";
  const total = trails.reduce((sum, t) => sum + t.km, 0);
  const noun = trails.length === 1 ? "trail" : "trails";
  const openCount = trails.filter((t) => !t.closed).length;
  return `${trails.length} ${noun}, ${openCount} open, ${total.toFixed(1)} km total.`;
}
