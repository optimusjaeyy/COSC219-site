# Lab 8 — Debugging worksheet

Fill one block in for each fault you find. **The reasoning is what is marked**,
not the fix — a one-line correction with no explanation earns very little.

Copy the block as many times as you need.

---

## Fault 1

**Symptom** — what did you see, or what did the checker say?
The checker said that "heading levels are not skipped" as STILL BROKEN. I saw that the headings went `h1` straight to `h3`, with no `<h2>` in between.

**How I found it** — which tool, and what did it tell you?
(Console message? Elements panel? Reading the CSS? Tabbing through the page?)
The checker's hint pointed me to Lecture 2 and "one h1, then no jumps going down". I then read through `index.html` mainly focusing only on the headings, which showed me where the jump was.

**Cause** — why did that happen? Name the concept, not just the line.
Headings levels describe the document's outline, not its font size. A skipped level means the structure has a missing section. Screen-reader users navigate by jumping between headings, so an `<h3>` that follows an `<h1>` makes them think a content is mssing.

**Fix** — what you changed.
I changed the `<h3>` heading to `<h2>` to follow the proper HTML convention

**Lecture** — which one covers this.
Lecture 2

---

## Fault 2

**Symptom**
`check.html` showed "every form control has a label" as STILL BROKEN. The search box looked fine on screen because it's placeholder text said "Searh by name", but it didn't have a `<label>` element.

**How I found it**
I read through the `index.html` and the `check.html`.

**Cause**
A placeholder is not a label. It disappears as soon as the user types, and it is not a reliable accessible name, so assistive technology may not announce what the field is for.

**Fix**
I added a `<label for="search">Search by name</label>` before the input. The `for` matches the input's id.

**Lecture**
Lecture 3

---

## Fault 3

**Symptom**
When I made the window about 400px wide, the search box hung off the right edge of the page. `check.html` also hinted "box-sizing: border-box is set" as STILL BROKEN.

**How I found it**
I saw it by using the page before opening any code.

**Cause**
The default box model is content-box, where `width` sets only the content area, and padding and border are added outside it. At wide screens the overflow lands in empty margin and goes unnoteced, but at narrow widths it pushes past the viewport edge.

**Fix**
Added `*, *::before, *::after { box-sizing: border-box; }` to `styles.css`.

**Lecture**
Lecture 4

---

## Fault 4

**Symptom**
Pressing Tab through the form moved focus between the search box, the rating select, and the Apply button, but nothing visibly highlighted. check.html reported "a visible focus style survives JavaScript" as STILL BROKEN.

**How I found it**
I found it by tabbing through the form with the keyboard, the only way to test focus.

**Cause**
Browsers draw a default outline on focused elements so that keyboard users can see where they are on the page. `outline: none` on `:focus` removes that indicator and replaces it with nothing. `:hover` is not a substitute, because keyboard users never hover, and people who cannot use a mouse rely on focus to know which control will receive input.

**Fix**
Replaced `outline: none` with `outline: 2px solid var(--brand); outline-offset: 2px;` so the style is visible against the page.

**Lecture**
Lecture 4

---

## Fault 5

**Symptom**
`check.html` reported "filtering compares without converting types" as STILL BROKEN.

**How I found it**
The checker flagged it, and its hint pointed to the lecture on comparison. I read `matches()` in app.js and found the rating comparison used `==`.

**Cause**
`==` is loose equality. If the two operands have different types, JavaScript converts one before comparing, so values like `"5"` and `5` count as equal. `===` is strict equality: it never converts, so different types are never equal. Loose comparison lets the wrong values match without any error, which is why this bug is silent.

**Fix**
Changed `==` to `===` in the rating comparison.

**Lecture**
Lecture 7

---

## Fault 6

**Symptom**
Results were not in distance order. check.html reported "sorting actually orders by distance" as STILL BROKEN. After I fixed that, "sorting does not reorder the array it was given" started failing, though it had passed before.

**How I found it**
I saw the wrong order by using the page. I then logged the `km` values before and after sorting with console.log and saw they were not ascending. After fixing the comparator, I logged the array I passed in and saw it had been reordered too.

**Cause**
First, `sort()` with no usable comparator converts elements to strings and compares them as text, so objects all become "[object Object]" and nothing moves. A comparator has to return a negative, zero or positive number, and `a.km - b.km` does
that. Second, `sort()` mutates the array it is called on. The "does not reorder the input" check passed at first only because the broken sort never moved anything. Fixing the comparator exposed the mutation hidden behind it.

**Fix**
Changed the comparator to `(a, b) => a.km - b.km`, and sorted a copy with `[...trails].sort(...)` so the original array stays untouched.

**Lecture**
Lecture 9

---

## Fault 7

**Symptom**
`check.html` reported "a trail name is put on the page as text" as STILL BROKEN. Nothing looked wrong on screen with normal trail names.

**How I found it**
I read `render()` and found the trail name being inserted with `innerHTML`.

**Cause**
`innerHTML` parses its string as HTML. `innerHTML` is also pront to cross-site scripting (XSS). `textContent` inserts a string as plain text, never as markup, so the browser cannot treat data as code.

**Fix**
Kept the structure but created the spans with `document.createElement`, set only the trail name and distance via `textContent`, and appended them to the `<li>`.

**Lecture**
Lecture 13

---

## Fault 8

**Symptom**
Pressing Apply made the page flash and reset. `check.html` reported "submitting the form does not reload the page" as STILL BROKEN.

**How I found it**
I saw it when I opened the file in Live Server and tested the app before seeing any code.

**Cause**
A form's default behavior on submit is to send a request to the server and load the result, which reloads the page and throws away the JavaScript state and the DOM. `preventDefault()` cancels that default action so the handler can update the page in place.

**Fix**
I added `event.preventDefault()` at the top of the submit handler, before calling `apply()`.

**Lecture**
Lecture 14

---

## One more thing

**Which fault took you longest, and why?**

**Which one would you never have found without the checker?**
