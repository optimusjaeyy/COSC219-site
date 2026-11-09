const original = { name: "Knox", km: 2.8 };
const alias = original;
const copy = { ...original };
alias.km = 99; // original.km would still be 99
copy.km = 1; // original.km would still be 99

const outer = { name: "X", meta: { tags: ["steep"] } };
const shallow = { ...outer };
shallow.meta.tags.push("rocky"); // outer.meta.tags would be ['steep', 'rocky'] since tags is an array

({ x: 1 }) === { x: 1 }; // always return false since both are different objects

console.log("orginal.km is: ", original.km);
console.log("outer.meta.tags is: ", outer.meta.tags);
console.log({ x: 1 } === { x: 1 });
console.log(original === alias); //true
console.log(original === copy); //false
console.log(outer.meta === shallow.meta); //true
