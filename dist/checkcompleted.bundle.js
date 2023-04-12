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
function checkCompleted(task, checkbox, listItem, tasks) {
  task.completed = checkbox.checked;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  if (task.completed) {
    listItem.classList.add('completed');
  } else {
    listItem.classList.remove('completed');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCompleted);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/checkCompleted.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tjb21wbGV0ZWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvY2hlY2tDb21wbGV0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29tcGxldGVkKHRhc2ssIGNoZWNrYm94LCBsaXN0SXRlbSwgdGFza3MpIHtcclxuICB0YXNrLmNvbXBsZXRlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrQ29tcGxldGVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==