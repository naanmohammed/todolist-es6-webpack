"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["addtasks"],{

/***/ "./src/addTasks.js":
/*!*************************!*\
  !*** ./src/addTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addTask(tasks) {
  const taskInput = document.getElementById('task-input');
  const taskDescription = taskInput.value.trim();

  if (taskDescription.length > 0) {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length,
    };

    tasks.push(newTask);
    taskInput.value = '';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/addTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkdGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2FkZFRhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRhc2tzKSB7XHJcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQnKTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrSW5wdXQudmFsdWUudHJpbSgpO1xyXG5cclxuICBpZiAodGFza0Rlc2NyaXB0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24sXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGgsXHJcbiAgICB9O1xyXG5cclxuICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2s7ICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=