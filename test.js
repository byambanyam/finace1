var Income = function (id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};
var Expense = function (id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};
var i1 = new Income(1, "цалин", 250000);
var i2 = new Income(1, "сугалаа хожисон ", 25000000);
// console.log(i1);
// console.log(i2);
var Incomes = [];
Incomes.push(i1);
Incomes.push(i2);
console.log(Incomes);
console.log(Incomes[1].value);
var date = {
  allitems: {
    inc: [],
    exp: [],
  },
  totals: {
    inc: 1000,
    exp: 500,
  },
};
