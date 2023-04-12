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
/* harmony import */ var _getTasksFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasksFromLocalStorage */ "./src/modules/getTasksFromLocalStorage.js");


function clearCompletedTasks(tasks) {
  const completedTasks = tasks.filter(((task) => task.completed));
  completedTasks.forEach((task) => {
    const listItem = document.getElementById(`task-${task.id}`);
    if (listItem) {
      listItem.remove();
    }
  });
  const newTasks = tasks.filter(((task) => !task.completed));
  localStorage.setItem('tasks', JSON.stringify(tasks));
  (0,_getTasksFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromLocalStorage)(tasks);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/clearCompletedTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJjb21wbGV0ZWR0YXNrcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBQ3RFO0FBQ087QUFDUDtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLG1GQUF3QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7OztBQ2hCM0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9jbGVhckNvbXBsZXRlZFRhc2tzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9nZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkVGFza3ModGFza3MpIHtcclxuICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigoKHRhc2spID0+IHRhc2suY29tcGxldGVkKSk7XHJcbiAgY29tcGxldGVkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay0ke3Rhc2suaWR9YCk7XHJcbiAgICBpZiAobGlzdEl0ZW0pIHtcclxuICAgICAgbGlzdEl0ZW0ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIoKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgcmV0dXJuIG5ld1Rhc2tzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbXBsZXRlZFRhc2tzOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgY29uc3QgdGFza3NTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcclxuICBpZiAodGFza3NTdHJpbmcpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRhc2tzU3RyaW5nKTtcclxuICB9XHJcbiAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9