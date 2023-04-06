"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["gettasksfromlocalstorage"],{

/***/ "./src/getTasksFromLocalStorage.js":
/*!*****************************************!*\
  !*** ./src/getTasksFromLocalStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTasksFromLocalStorage": () => (/* binding */ getTasksFromLocalStorage)
/* harmony export */ });
function getTasksFromLocalStorage() {
    const tasksString = localStorage.getItem('tasks');
    if (tasksString) {
      return JSON.parse(tasksString);
    } else {
      return [];
    }
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getTasksFromLocalStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGFza3Nmcm9tbG9jYWxzdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHRhc2tzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XHJcbiAgICBpZiAodGFza3NTdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3NTdHJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=