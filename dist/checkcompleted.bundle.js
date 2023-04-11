"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["checkcompleted"],{

/***/ "./src/modules/checkCompleted.js":
/*!***************************************!*\
  !*** ./src/modules/checkCompleted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCompleted": () => (/* binding */ checkCompleted),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToLocalStorage.js */ "./src/modules/saveToLocalStorage.js");


function checkCompleted(task, checkbox, listItem, tasks) {
  task.completed = checkbox.checked;
  (0,_saveToLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(tasks);
  if (task.completed) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCompleted);

/***/ }),

/***/ "./src/modules/saveToLocalStorage.js":
/*!*******************************************!*\
  !*** ./src/modules/saveToLocalStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "saveTasksToLocalStorage": () => (/* binding */ saveTasksToLocalStorage)
/* harmony export */ });
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTasksToLocalStorage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/checkCompleted.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tjb21wbGV0ZWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNsRTtBQUNPO0FBQ1A7QUFDQSxFQUFFLCtFQUF1QjtBQUN6QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDWnRCO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NoZWNrQ29tcGxldGVkLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9zYXZlVG9Mb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3NhdmVUb0xvY2FsU3RvcmFnZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb21wbGV0ZWQodGFzaywgY2hlY2tib3gsIGxpc3RJdGVtLCB0YXNrcykge1xyXG4gIHRhc2suY29tcGxldGVkID0gY2hlY2tib3guY2hlY2tlZDtcclxuICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XHJcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja0NvbXBsZXRlZDsiLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=