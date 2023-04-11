"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["clearcompletedtasks"],{

/***/ "./src/modules/clearCompletedTasks.js":
/*!********************************************!*\
  !*** ./src/modules/clearCompletedTasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCompletedTasks": () => (/* binding */ clearCompletedTasks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToLocalStorage */ "./src/modules/saveToLocalStorage.js");
/* harmony import */ var _getTasksFromLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTasksFromLocalStorage */ "./src/modules/getTasksFromLocalStorage.js");



function clearCompletedTasks(tasks) {
  const completedTasks = tasks.filter(((task) => task.completed));
  completedTasks.forEach((task) => {
    const listItem = document.getElementById(`task-${task.id}`);
    if (listItem) {
      listItem.remove();
    }
  });
  const newTasks = tasks.filter(((task) => !task.completed));
  (0,_saveToLocalStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(newTasks);
  (0,_getTasksFromLocalStorage__WEBPACK_IMPORTED_MODULE_1__.getTasksFromLocalStorage)(tasks);
  return newTasks;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);

/***/ }),

/***/ "./src/modules/getTasksFromLocalStorage.js":
/*!*************************************************!*\
  !*** ./src/modules/getTasksFromLocalStorage.js ***!
  \*************************************************/
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/clearCompletedTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJjb21wbGV0ZWR0YXNrcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNPO0FBQ3RFO0FBQ087QUFDUDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSw0RUFBdUI7QUFDekIsRUFBRSxtRkFBd0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUNqQjNCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7OztBQ1JoQztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9jbGVhckNvbXBsZXRlZFRhc2tzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3NhdmVUb0xvY2FsU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vc2F2ZVRvTG9jYWxTdG9yYWdlJztcclxuaW1wb3J0IHsgZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkVGFza3ModGFza3MpIHtcclxuICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigoKHRhc2spID0+IHRhc2suY29tcGxldGVkKSk7XHJcbiAgY29tcGxldGVkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke3Rhc2suaWR9YCk7XHJcbiAgICBpZiAobGlzdEl0ZW0pIHtcclxuICAgICAgbGlzdEl0ZW0ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIoKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpKTtcclxuICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZShuZXdUYXNrcyk7XHJcbiAgZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICByZXR1cm4gbmV3VGFza3M7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29tcGxldGVkVGFza3M7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICBjb25zdCB0YXNrc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xyXG4gIGlmICh0YXNrc1N0cmluZykge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3NTdHJpbmcpO1xyXG4gIH1cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZTsiLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=