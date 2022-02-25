const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
  circumference: function() 
  {
    let circum= 2 * Math.PI * r;
  return circum},
  area: function()
  {
    let cirarea= Math.PI * r * r;
  return cirarea}
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);