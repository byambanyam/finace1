// delgetstei ajiilah controller
var uicontroller = (function () {
  var x = 1;
  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      console.log("хүлээн авсан утага " + a);
    },
  };
})();
// санхүүтэй ажиллах контроллер
var financeController = (function () {})();
// програмтай ажиллах контроллер
var appcontroller = (function (uicontroller, financeController) {
  var ctrlAddItem = function () {
    // 1 oruulah ugugduliig delgetsees olj awna
    console.log("delegtsees ugudul awah heseg");
    // 2 ol awsan ugugdliig sanhuugiin kontroller damjuulj hadaglana
    // 3 hadgalsan ugugdlii g bolowsruulj tohiroh bairlald bairshuulan
    // tusuw tootsoolono
    // 5 etssin uldegdel , tootsdog delegtsend garagjee};
  };
  document.querySelector(".add__btn").addEventListener("click", function () {});
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uicontroller, financeController);
