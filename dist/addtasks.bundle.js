(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["addtasks"],{

/***/ "./src/modules/addTasks.js":
/*!*********************************!*\
  !*** ./src/modules/addTasks.js ***!
  \*********************************/
/***/ ((module) => {

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
  }
}

module.exports = addTask;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/addTasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkdGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvYWRkVGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkVGFzayh0YXNrcykge1xyXG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0Jyk7XHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFza0lucHV0LnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcclxuICAgIH07XHJcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgdGFza0lucHV0LnZhbHVlID0gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRhc2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9