// delgetstei ajiilah controller
var uicontroller = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        discriptiom: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
// санхүүтэй ажиллах контроллер
var financeController = (function () {
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
  var date = {
    allitems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();
// програмтай ажиллах контроллер
var appcontroller = (function (uicontroller, financeController) {
  var ctrlAddItem = function () {
    // 1 oruulah ugugduliig delgetsees olj awna
    console.log(uicontroller.getInput());

    // 2 ol awsan ugugdliig sanhuugiin kontroller damjuulj hadaglana
    // 3 hadgalsan ugugdlii g bolowsruulj tohiroh bairlald bairshuulan
    // tusuw tootsoolono
    // 5 etssin uldegdel , tootsdog delegtsend garagjee};
  };
  var setupEventlistene = function () {
    var DOM = uicontroller.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application started...");
      setupEventlistene();
    },
  };
})(uicontroller, financeController);
appcontroller.init();
