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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTasksFromLocalStorage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getTasksFromLocalStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGFza3Nmcm9tbG9jYWxzdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICBjb25zdCB0YXNrc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xyXG4gIGlmICh0YXNrc1N0cmluZykge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0YXNrc1N0cmluZyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9