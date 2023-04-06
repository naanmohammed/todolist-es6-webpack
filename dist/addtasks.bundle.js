"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["addtasks"],{

/***/ "./src/addTasks.js":
/*!*************************!*\
  !*** ./src/addTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask)
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
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/addTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkdGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvYWRkVGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodGFza3MpIHtcclxuICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0Jyk7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIFxyXG4gICAgaWYgKHRhc2tEZXNjcmlwdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGgsXHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=