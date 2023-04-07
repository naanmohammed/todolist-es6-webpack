"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["gettasksfromlocalstorage"],{

/***/ "./src/getTasksFromLocalStorage.js":
/*!*****************************************!*\
  !*** ./src/getTasksFromLocalStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getTasksFromLocalStorage": () => (/* binding */ getTasksFromLocalStorage)
/* harmony export */ });
function getTasksFromLocalStorage() {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasksFromLocalStorage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getTasksFromLocalStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGFza3Nmcm9tbG9jYWxzdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHRhc2tzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XG4gIGlmICh0YXNrc1N0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRhc2tzU3RyaW5nKTtcbiAgfVxuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=