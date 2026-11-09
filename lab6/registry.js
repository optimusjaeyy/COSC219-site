/*
  COSC 219 — Lab 6 · registry.js
  A class that owns a collection of Trails.
*/

// import the two classes from ./trail.js — note the .js is required
import { Trail, BikeTrail } from "./trail.js";

export class TrailRegistry {
  /* The array is PRIVATE. Nothing outside may push to it, sort it or
     empty it — this class decides what happens to the collection. */
  #trails = [];

  /* Accept an optional array of Trails and add each one. */
  constructor(trails = []) {
    for (const trail of trails) {
      this.add(trail);
    }
  }

  /* get size — how many trails. */
  get size() {
    return this.#trails.length;
  }

  /* get all — a COPY of the array.

     Returning the private array itself would let a caller do
     registry.all.push("junk") and walk straight past every check in
     this class. One of the tests does exactly that.
     ---------------------------------------------------------------- */
  get all() {
    return [...this.#trails];
  }

  /* add(trail) — reject anything that is not a Trail.

     Throw a TypeError if it is not, otherwise store it and return `this`.
     Use `instanceof`. Remember a BikeTrail IS a Trail.
     ---------------------------------------------------------------- */
  add(trail) {
    if (!(trail instanceof Trail)) {
      throw new TypeError("TrailRegistry.add() only accepts Trail objects");
    }
    this.#trails.push(trail);
    return this;
  }

  /* find(name) — the matching Trail, ignoring case, or undefined. */
  find(name) {
    return this.#trails.find(
      (t) => t.name.toLowerCase() === name.toLowerCase(),
    );
  }

  /* byRating(rating) — every trail with that rating. */
  byRating(rating) {
    return this.#trails.filter((t) => t.rating === rating);
  }

  /* get openTrails — every trail that is not closed. */
  get openTrails() {
    return this.#trails.filter((t) => !t.isClosed);
  }

  /* get totalDistance — all the km added up, to one decimal place. */
  get totalDistance() {
    const sum = this.#trails.reduce((total, t) => total + t.km, 0.0);
    return Math.round(sum * 10) / 10;
  }

  /* get steepest — the trail with the largest steepness.
     undefined when there are none. */
  get steepest() {
    if (this.#trails.length === 0) return undefined;
    return this.#trails.reduce((best, t) =>
      t.steepness > best.steepness ? t : best,
    );
  }

  /* describeAll() — an array of every trail's describe() string. */
  describeAll() {
    return this.#trails.map((t) => t.describe());
  }

  /* static fromData(rows) — build a registry from plain objects.

     A row with a `surface` property becomes a BikeTrail; anything else
     becomes a Trail. Default a missing gain to 0.
     ---------------------------------------------------------------- */
  static fromData(rows) {
    const trails = rows.map((row) =>
      row.surface
        ? new BikeTrail(row.name, row.km, row.rating, row.gain, row.surface)
        : Trail.fromObject(row),
    );
    return new TrailRegistry(trails);
  }
}
