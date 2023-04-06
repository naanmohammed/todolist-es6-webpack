"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["updatetasks"],{

/***/ "./src/updateTasks.js":
/*!****************************!*\
  !*** ./src/updateTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
function updateTask(tasks, id, description) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].id === id) {
      tasks[i].description = description;
      break;
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTask);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/updateTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRldGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3VwZGF0ZVRhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2tzLCBpZCwgZGVzY3JpcHRpb24pIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAodGFza3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgIHRhc2tzW2ldLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVUYXNrOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==