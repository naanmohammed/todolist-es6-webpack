"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["addtasks"],{

/***/ "./src/modules/addTasks.js":
/*!*********************************!*\
  !*** ./src/modules/addTasks.js ***!
  \*********************************/
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
      index: tasks.length + 1,
    };
    tasks.push(newTask);
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  return tasks;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/addTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkdGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvYWRkVGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFza3MpIHtcclxuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xyXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tJbnB1dC52YWx1ZS50cmltKCk7XHJcblxyXG4gIGlmICh0YXNrRGVzY3JpcHRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsXHJcbiAgICB9O1xyXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9XHJcbiAgcmV0dXJuIHRhc2tzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==