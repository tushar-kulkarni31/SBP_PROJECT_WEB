(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/user.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/user.actions.ts ***!
  \*****************************************/
/*! exports provided: ADD_USER, REMOVE_USER, AddUser, RemoveUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_USER", function() { return REMOVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUser", function() { return RemoveUser; });
var ADD_USER = '[USER] Add';
var REMOVE_USER = '[USER] Remove';
var AddUser = /** @class */ (function () {
    function AddUser(payload) {
        this.payload = payload;
        this.type = ADD_USER;
    }
    return AddUser;
}());

var RemoveUser = /** @class */ (function () {
    function RemoveUser(index) {
        this.index = index;
        this.type = REMOVE_USER;
    }
    return RemoveUser;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/addtask/addtask.component */ "./src/app/task/addtask/addtask.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'add_task', component: _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_3__["AddtaskComponent"] },
    { path: 'view_task', component: _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__["TaskListComponent"] },
    { path: 'add_user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'add_project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'projectmanager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/addtask/addtask.component */ "./src/app/task/addtask/addtask.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _task_task_list_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task-list/filter.pipe */ "./src/app/task/task-list/filter.pipe.ts");
/* harmony import */ var _task_task_list_filter_num_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task/task-list/filter-num.pipe */ "./src/app/task/task-list/filter-num.pipe.ts");
/* harmony import */ var _task_task_list_filter_num_max_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task/task-list/filter-num-max.pipe */ "./src/app/task/task-list/filter-num-max.pipe.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducers/user.reducer */ "./src/app/reducers/user.reducer.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _userSearchmodal_usersearchmodal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userSearchmodal/usersearchmodal.component */ "./src/app/userSearchmodal/usersearchmodal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_8__["AddtaskComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__["TaskListComponent"],
                _task_task_list_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"],
                _task_task_list_filter_num_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterNumPipe"],
                _task_task_list_filter_num_max_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterNumMaxPipe"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_18__["ProjectComponent"],
                _userSearchmodal_usersearchmodal_component__WEBPACK_IMPORTED_MODULE_19__["UserSearchModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot({
                    users: _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_17__["userReducer"]
                })
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["HttpInterceptorService"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n        <img src=\"../../assets/manager.png\" width=\"40\" height=\"40\" alt=\"\"> Project Manager\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" [ngClass]=\"{ 'show' : navbarOpen }\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/add_project']\"> Add Project </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/add_task']\"> Add Task </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/add_user']\"> Add User </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/view_task']\">View Tasks</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.navbarOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2>Welcome to the Project Manager!</h2>\n\n    <a class=\"image\" [routerLink]=\"['/']\">\n        <img src=\"../../assets/manager.png\" width=\"200\" height=\"200\" alt=\"task manager icon\" /></a>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#setStartEndDate {\r\n    max-width: 8% !important;\r\n    display: inline !important;\r\n}\r\n\r\n.container {\r\n    margin-top: 20px\r\n}\r\n\r\n.manager-txt {\r\n    display: inherit !important;\r\n}\r\n\r\n.user-search {\r\n    margin-left: 10px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.sort-group .col-md-4 {\r\n    max-width: 20.333%;\r\n}\r\n\r\n.for-loop .list-item {\r\n    border-top-style: dotted !important;\r\n    border-top-color: blue !important;\r\n    padding-top: 5px !important;\r\n}\r\n\r\n.details-box {\r\n    display: inherit !important;\r\n}\r\n\r\n.bg-disabled {\r\n    background-color: #e9ecef;\r\n    opacity: 1;\r\n    margin: 1%\r\n}\r\n\r\n.left-fields {\r\n    margin-right: 10%;\r\n}\r\n\r\n.priority-box {\r\n    height: 96px;\r\n    padding-left: 40%;\r\n    padding-top: 34px;\r\n}\r\n\r\n.priority-header {\r\n    padding-left: 25%;\r\n}\r\n\r\n.col .align-right {\r\n    padding-left: 80%;\r\n}\r\n\r\n.user-search {\r\n    border-radius: 23px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2V0U3RhcnRFbmREYXRlIHtcclxuICAgIG1heC13aWR0aDogOCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHhcclxufVxyXG5cclxuLm1hbmFnZXItdHh0IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXItc2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc29ydC1ncm91cCAuY29sLW1kLTQge1xyXG4gICAgbWF4LXdpZHRoOiAyMC4zMzMlO1xyXG59XHJcblxyXG4uZm9yLWxvb3AgLmxpc3QtaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBkb3R0ZWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRldGFpbHMtYm94IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAxJVxyXG59XHJcblxyXG4ubGVmdC1maWVsZHMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1ib3gge1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzRweDtcclxufVxyXG5cclxuLnByaW9yaXR5LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNvbCAuYWxpZ24tcmlnaHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MCU7XHJcbn1cclxuXHJcbi51c2VyLXNlYXJjaCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <form (ngSubmit)=\"onSaveTask()\" #addForm=\"ngForm\">\n                <div class=\"form-group row\">\n                    <label for=\"task\" class=\"col-sm-3 col-form-label\">Project: </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\" id=\"projectName\" [ngModel]=\"projectToEdit?.projectName\" name=\"projectName\" required />\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-6\">\n                        <input type=\"checkbox\" class=\"form-control\" id=\"setStartEndDate\" [ngModel]=\"setStartEndDate\" name=\"setStartEndDate\" required />\n                        <label for=\"setStartEndDate\" class=\"col-form-label\">&nbsp; Set Project Start and End Date: </label>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <input type=\"date\" class=\"form-control\" id=\"start_date\" [ngModel]=\"projectToEdit?.startDate\" name=\"start_date\" [disabled]=\"!setStartEndDate\" placeholder=\"Start Date\" required />\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <input type=\"date\" class=\"form-control\" id=\"endDate\" [disabled]=\"!setStartEndDate\" [ngModel]=\"projectToEdit?.endDate\" name=\"endDate\" placeholder=\"End Date\" required />\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"customRange2\" class=\"col-sm-3 col-form-label\">Priority:\n          </label>\n                    <div class=\"col-sm-9\">\n                        <div class=\"row\">\n                            <div class=\"col\">0</div>\n                            <div class=\"col align-right\">30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <input type=\"range\" class=\"custom-range\" id=\"priority\" min=\"0\" max=\"30\" value=\"1\" [ngModel]=\"projectToEdit?.priority\" name=\"task_priority\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"manager\" class=\"col-sm-3 col-form-label\">Manager:\n          </label>\n                    <div class=\"col-sm-9 manager-txt\">\n                        <input type=\"text\" class=\"form-control\" id=\"manager\" [ngModel]=\"projectToEdit?.manager\" name=\"manager\" placeholder=\"\" disabled required />\n\n\n                        <button mat-button (click)=\"openDialog()\">Search</button>\n\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-3\"></div>\n                    <div class=\"col-sm-9\">\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                            <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"First group\">\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]='!addForm.valid'>\n                  Add\n                </button>\n                            </div>\n                            <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Second group\">\n                                <button type=\"button\" class=\"btn btn-outline-warning\" (click)='onReset()'>\n                  Reset\n                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <div class='project-details col-sm-8'>\n            <hr>\n            <div id=\"form2\" class='row'>\n                <div class=\"form-group col-md-12 row\">\n                    <input type=\"text\" class=\"form-control\" id=\"search\" [ngModel]=\"search\" name=\"search\" placeholder=\"Search ...\" />\n                </div>\n                <div class=\"sort-group form-group col-md-12 row\">\n                    Sort By:\n                    <div class=\"col-md-4\">\n                        <div class=\"btn-group mr-1\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByFirstName()'>\n                Start Date\n              </button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"btn-group mr-1\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByLastName()'>\n                End Date\n              </button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"btn-group mr-1\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByEmpId()'>\n                Priority\n              </button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"btn-group mr-1\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByEmpId()'>\n                Completed\n              </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"for-loop\">\n                <div class=\"list-tem row\">\n\n                    <div class='col-md-8 details-box'>\n                        <div class=\"col-md-8 bg-disabled\">\n                            <div class=\"form-group row\">Project: New Whales Projects</div>\n                            <div>\n                                <div class=\"form-group row\">\n                                    <span class=\"left-fields\">No Of Tasks: 89 </span>\n                                    <span class=\"right-fields\">Start Date:10/12/2019</span>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <div class=\"left-fields\">Completed: Yes</div>\n                                    <div class=\"right-fields\">End Date:11/12/2019</div>\n                                </div>\n\n                            </div>\n\n                        </div>\n                        <div class=\"col-md-4\">\n                            <span class=\"priority-header\">Priority </span>\n                            <div class=\"bg-disabled priority-box\"> 30</div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col-md-4\">\n                        <div class=\"col-sm-9\">\n                            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                                <div class=\"btn-group mr-4 mb-2\" role=\"group\" aria-label=\"First group\">\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)='editUser(user.empId)'>\n                    Update\n                  </button>\n                                </div>\n                                <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Second group\">\n                                    <button type=\"button\" class=\"btn btn-outline-warning\" (click)='deleteUser(user.empId)'>\n                    Suspend\n                  </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.model */ "./src/app/project/project.model.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.service */ "./src/app/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _usersearchmodal_usersearchmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../usersearchmodal/usersearchmodal.component */ "./src/app/usersearchmodal/usersearchmodal.component.ts");








var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, router, route, dialog, userSearchModal) {
        this.projectService = projectService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.userSearchModal = userSearchModal;
        this.mode = 'add';
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.mode = 'add';
        this.showProjects = true;
    };
    ProjectComponent.prototype.openDialog = function () {
        this.dialog.open(_usersearchmodal_usersearchmodal_component__WEBPACK_IMPORTED_MODULE_7__["UserSearchModalComponent"], {});
    };
    ProjectComponent.prototype.onSaveTask = function () {
        if (this.addNewProjectForm.invalid) {
            return;
        }
        if (this.mode === 'add') {
            var projectPriority = (this.addNewProjectForm.value.priority === null) ? 15 : this.addNewProjectForm.value.priority;
            this.newProject = new _project_model__WEBPACK_IMPORTED_MODULE_3__["Project"](null, this.addNewProjectForm.value.projectName, this.addNewProjectForm.value.manager, this.addNewProjectForm.value.start_date, this.addNewProjectForm.value.end_date, projectPriority, 'Initial');
            //this.taskService.addTask(this.newProject);
        }
        else {
            this.projectToEdit.project = this.addNewProjectForm.value.project;
            this.projectToEdit.manager = this.addNewProjectForm.value.manager;
            this.projectToEdit.startDate = this.addNewProjectForm.value.start_date;
            this.projectToEdit.endDate = this.addNewProjectForm.value.end_date;
            this.projectToEdit.priority = this.addNewProjectForm.value.task_priority;
            // this.taskService.updateTask(this.projectToEdit);
        }
        this.addNewProjectForm.reset();
        this.projectAdded = true;
        this.router.navigate(['/view_task']);
    };
    ProjectComponent.prototype.onUserSearch = function () {
        alert("Searched users");
    };
    ProjectComponent.prototype.onReset = function () {
        this.addNewProjectForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addForm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ProjectComponent.prototype, "addNewProjectForm", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _usersearchmodal_usersearchmodal_component__WEBPACK_IMPORTED_MODULE_7__["UserSearchModalComponent"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.model.ts":
/*!******************************************!*\
  !*** ./src/app/project/project.model.ts ***!
  \******************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(projectId, project, manager, startDate, endDate, priority, status) {
        this.projectId = projectId;
        this.project = project;
        this.manager = manager;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.status = status;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/project/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.tasks = [];
        this.tasksUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ProjectService.prototype.getTasks = function () {
        var _this = this;
        this.http.get(BACKEND_URL + 'tasks')
            .subscribe(function (response) {
            _this.tasks = response.data;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    ProjectService.prototype.getTask = function (taskId) {
        return this.http.get(BACKEND_URL + 'tasks/' + taskId);
    };
    ProjectService.prototype.addTask = function (task) {
        var _this = this;
        this.http.post(BACKEND_URL + 'tasks', task)
            .subscribe(function (response) {
            _this.tasks.push(response.data);
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    ProjectService.prototype.updateTask = function (task) {
        var _this = this;
        this.http.put(BACKEND_URL + 'tasks/' + task.projectId, JSON.stringify(task))
            .subscribe(function (response) {
            var updatedTasks = _this.tasks.slice();
            var oldTaskIndex = updatedTasks.findIndex(function (t) { return t.projectId === task.projectId; });
            updatedTasks[oldTaskIndex] = task;
            _this.tasks = updatedTasks;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    ProjectService.prototype.deleteTask = function (projectId) {
        var _this = this;
        this.http.delete(BACKEND_URL + 'tasks/' + projectId)
            .subscribe(function () {
            var updatedTasks = _this.tasks.filter(function (Project) { return Project.projectId !== projectId; });
            _this.tasks = updatedTasks;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    ProjectService.prototype.getTaskUpdateListener = function () {
        return this.tasksUpdated.asObservable();
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/reducers/user.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/user.reducer.ts ***!
  \******************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/user.actions */ "./src/app/actions/user.actions.ts");

function userReducer(state, action) {
    if (state === void 0) { state = []; }
    // Section 3
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_USER"]:
            return state.concat([action.payload]);
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_USER"]:
            state.splice(action.index, 1);
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService() {
    }
    HttpInterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        if (!request.headers.has('Accept')) {
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept-Language', 'en-EN') });
        return next.handle(request);
    };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/task/addtask/addtask.component.css":
/*!****************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 2%;\n    float: left;\n}\n\ninput.ng-invalid.ng-touched {\n    border: 1px solid red;\n}\n\n.align-left {\n    text-align: left;\n}\n\n.align-right {\n    text-align: right;\n}\n\n.parent-task-ckb {\n    padding-left: 58px;\n    margin-left: 19%;\n}\n\n.parent-tsk-lbl {\n    margin-left: -4%;\n}\n\n.user-search {\n    border-radius: 23px;\n}\n\n.date-field {\n    margin-left: -4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9hZGR0YXNrL2FkZHRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGFzay9hZGR0YXNrL2FkZHRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmFsaWduLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wYXJlbnQtdGFzay1ja2Ige1xuICAgIHBhZGRpbmctbGVmdDogNThweDtcbiAgICBtYXJnaW4tbGVmdDogMTklO1xufVxuXG4ucGFyZW50LXRzay1sYmwge1xuICAgIG1hcmdpbi1sZWZ0OiAtNCU7XG59XG5cbi51c2VyLXNlYXJjaCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cblxuLmRhdGUtZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAtNCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/task/addtask/addtask.component.html":
/*!*****************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <form (ngSubmit)=\"onSaveTask()\" #addForm=\"ngForm\">\n                <div class=\"form-group row\">\n                    <label for=\"projectName\" class=\"col-sm-3 col-form-label\">Project: </label>\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\" id=\"projectName\" [ngModel]=\"taskToEdit?.projectName\" name=\"projectName\" disabled required />\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <button type=\"button\" class=\"btn btn-info col-sm-9 user-search\">\n                          Search\n                        </button>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"task\" class=\"col-sm-3 col-form-label\">Task: </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\" id=\"task\" [ngModel]=\"taskToEdit?.task\" name=\"task\" required />\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-2 parent-task-ckb\">\n                        <input type=\"checkbox\" class=\"form-control\" id=\"parentTaskCkb\" [ngModel]=\"taskToEdit?.task\" name=\"parentTaskCkb\" required />\n                    </div>\n                    <label for=\"parentTaskCkb\" class=\"col-sm-3 col-form-label parent-tsk-lbl\">Parent Task </label>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"customRange2\" class=\"col-sm-3 col-form-label\">Priority:\n          </label>\n                    <div class=\"col-sm-9\">\n                        <div class=\"row\">\n                            <div class=\"col\">0</div>\n                            <div class=\"col align-right\">30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <input type=\"range\" class=\"custom-range\" id=\"priority\" min=\"0\" max=\"30\" value=\"1\" [ngModel]=\"taskToEdit?.priority\" name=\"task_priority\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"parentTask\" class=\"col-sm-3 col-form-label\">Parent Task: </label>\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\" id=\"parentTask\" [ngModel]=\"taskToEdit?.parentTask\" name=\"parentTask\" disabled required />\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <button type=\"button\" class=\"btn btn-info col-sm-9 user-search\">\n              Search\n            </button>\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <label for=\"start_date\" class=\"col-sm-2 col-form-label date-field\">Start Date:</label>\n                    <div class=\"col-sm-4 date-field\">\n                        <input type=\"date\" class=\"form-control\" id=\"start_date\" [ngModel]=\"taskToEdit?.startDate | date:'yyyy-MM-dd'\" name=\"start_date\" placeholder=\"\" required />\n                    </div>\n                    <label for=\"end_date\" class=\"col-sm-3 col-form-label date-field\">End Date:</label>\n                    <div class=\"col-sm-4 end-date date-field\">\n                        <input type=\"date\" class=\"form-control\" id=\"end_date\" [ngModel]=\"taskToEdit?.endDate | date:'yyyy-MM-dd'\" name=\"end_date\" placeholder=\"\" required />\n                    </div>\n                </div>\n\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-3\"></div>\n                    <div class=\"col-sm-9\">\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                            <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"First group\">\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]='!addForm.valid'>\n                  Save Task\n                </button>\n                            </div>\n                            <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Second group\">\n                                <button type=\"button\" class=\"btn btn-outline-warning\" (click)='onReset()'>\n                  Reset\n                </button>\n                            </div>\n                        </div>\n                        <p *ngIf='taskAdded'>New task was added!</p>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/task/addtask/addtask.component.ts":
/*!***************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.ts ***!
  \***************************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.model */ "./src/app/task/task.model.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.taskAdded = false;
        this.mode = 'add';
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('taskId')) {
                _this.mode = 'edit';
                _this.taskId = paramMap.get('taskId');
                _this.taskService.getTask(_this.taskId).subscribe(function (response) {
                    _this.taskToEdit = response.data;
                });
            }
            else {
                _this.mode = 'add';
                _this.taskId = null;
            }
        });
    };
    AddtaskComponent.prototype.onSaveTask = function () {
        if (this.addNewTaskForm.invalid) {
            return;
        }
        if (this.mode === 'add') {
            var taskpriority = (this.addNewTaskForm.value.task_priority === null) ? 15 : this.addNewTaskForm.value.task_priority;
            this.newTask = new _task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](null, this.addNewTaskForm.value.parent_task, this.addNewTaskForm.value.task, this.addNewTaskForm.value.start_date, this.addNewTaskForm.value.end_date, taskpriority, null, null, 'Init');
            this.taskService.addTask(this.newTask);
        }
        else {
            this.taskToEdit.task = this.addNewTaskForm.value.task;
            this.taskToEdit.parentId = this.addNewTaskForm.value.parent_task;
            this.taskToEdit.startDate = this.addNewTaskForm.value.start_date;
            this.taskToEdit.endDate = this.addNewTaskForm.value.end_date;
            this.taskToEdit.priority = this.addNewTaskForm.value.task_priority;
            this.taskService.updateTask(this.taskToEdit);
        }
        this.addNewTaskForm.reset();
        this.taskAdded = true;
        this.router.navigate(['/view_task']);
    };
    AddtaskComponent.prototype.onReset = function () {
        this.addNewTaskForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addForm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AddtaskComponent.prototype, "addNewTaskForm", void 0);
    AddtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/task/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/task/addtask/addtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/task/task-list/filter-num-max.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-list/filter-num-max.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FilterNumMaxPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNumMaxPipe", function() { return FilterNumMaxPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterNumMaxPipe = /** @class */ (function () {
    function FilterNumMaxPipe() {
    }
    FilterNumMaxPipe.prototype.transform = function (tasks, filterPriority, propName) {
        if (tasks.length === 0) {
            return false;
        }
        var filteredPriorityArray = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task[propName] <= filterPriority) {
                filteredPriorityArray.push(task);
            }
        }
        return filteredPriorityArray;
    };
    FilterNumMaxPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterNumMax'
        })
    ], FilterNumMaxPipe);
    return FilterNumMaxPipe;
}());



/***/ }),

/***/ "./src/app/task/task-list/filter-num.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/task/task-list/filter-num.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterNumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNumPipe", function() { return FilterNumPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterNumPipe = /** @class */ (function () {
    function FilterNumPipe() {
    }
    FilterNumPipe.prototype.transform = function (tasks, filterPriority, propName) {
        if (tasks.length === 0) {
            return false;
        }
        var filteredPriorityArray = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task[propName] >= filterPriority) {
                filteredPriorityArray.push(task);
            }
        }
        return filteredPriorityArray;
    };
    FilterNumPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterNum'
        })
    ], FilterNumPipe);
    return FilterNumPipe;
}());



/***/ }),

/***/ "./src/app/task/task-list/filter.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/task/task-list/filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (tasks, filterString, propName) {
        if (tasks.length === 0) {
            return tasks;
        }
        var filteredArray = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task[propName] === filterString ||
                task[propName].toString().startsWith(filterString)) {
                filteredArray.push(task);
            }
        }
        return filteredArray;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/task/task-list/task-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-left-padding {\n    padding-left: 0% !important;\n}\n\n.container {\n    max-width: 100%;\n}\n\n.no-right-padding {\n    padding-right: 0% !important;\n}\n\n.no-v-padding {\n    padding-top: 2% !important;\n    padding-bottom: 0% !important;\n}\n\n.card {\n    width: 95%;\n}\n\n.card-body,\n.card-title {\n    text-align: center;\n}\n\n.container {\n    padding: 2%;\n    float: left;\n}\n\n.search-sec {\n    display: inherit;\n}\n\n.sort-group .col-md-3 {\n    max-width: 18% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tbGVmdC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm5vLXJpZ2h0LXBhZGRpbmcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5uby12LXBhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAyJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDk1JTtcbn1cblxuLmNhcmQtYm9keSxcbi5jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2VhcmNoLXNlYyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLnNvcnQtZ3JvdXAgLmNvbC1tZC0zIHtcbiAgICBtYXgtd2lkdGg6IDE4JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" id=\"search_div\">\n        <div class=\"form-group row col-sm-12\">\n            <div class=\"search-sec col-sm-6 row\">\n                <label for=\"projectName\" class=\"col-sm-2 col-form-label\">Project: </label>\n                <div class=\"col-sm-6\">\n                    <input type=\"text\" class=\"form-control\" id=\"projectName\" [(ngModel)]=\"filteredProject\" placeholder=\"Project name\" />\n                </div>\n                <div class=\"col-sm-4\">\n                    <button type=\"button\" class=\"btn btn-info col-sm-4 user-search\">\n                          Search\n                        </button>\n                </div>\n\n            </div>\n            <div class=\"sort-group col-sm-6 row\">\n                Sort Task By:\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByFirstName()'>\n                Start Date\n              </button>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByLastName()'>\n                End Date\n              </button>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByEmpId()'>\n                Priority\n              </button>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByEmpId()'>\n                Completed\n              </button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\" id=taskView_div>\n        <div class=\"col-sm-12\">\n            <div class=\"col\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                            <div class=\"card\">\n                                <div class=\"card-header no-v-padding\">\n                                    <h6><b>Task</b></h6>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-title\">{{task.task}}</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                            <div class=\"card\">\n                                <div class=\"card-header no-v-padding\">\n                                    <h6><b>Parent</b></h6>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-title\">{{task.parentId}}</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-1\">\n                        <div>\n                            <h6><b>Priority</b></h6>\n                        </div>\n                        <div>{{ task.priority }}</div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div>\n                                    <h6><b>Start</b></h6>\n                                </div>\n                                <div>{{ task.startDate | date:'MM/dd/yyyy' }}</div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div>\n                                    <h6><b>End</b></h6>\n                                </div>\n                                <div>{{ task.endDate | date:'MM/dd/yyyy' }}</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-1 no-left-padding no-right-padding\">\n                        <div *ngIf=\"task.status != 'Task Ended'; else taskEditDisabled\">\n                            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/edit_task', task.taskId]\">Edit</button>\n                        </div>\n                        <ng-template #taskEditDisabled>\n                            <button type=\"button\" class=\"btn btn-secondary disabled\" (click)=\"alertReadOnly()\">Edit</button>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-1 no-left-padding no-right-padding\">\n                        <div *ngIf=\"task.status != 'Task Ended'; else deleteTaskButton\">\n                            <button type=\"button\" class=\"btn btn-warning no-left-padding no-right-padding\" (click)=\"onEndTask(task.taskId)\">End Task</button>\n                        </div>\n                        <ng-template #deleteTaskButton>\n                            <button type=\"button\" class=\"btn btn-danger no-left-padding no-right-padding\" (click)=\"onDeleteTask(task.taskId)\"> &nbsp; Delete &nbsp; </button>\n                        </ng-template>\n                    </div>\n                </div>\n                <hr>\n            </div>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.tasks = [];
        this.filteredTask = '';
        this.filteredPriorityMin = 0;
        this.filteredPriorityMax = 30;
        this.filteredParentTask = '';
        this.filteredStartDate = '';
        this.filteredEndDate = '';
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks();
        this.tasksSub = this.taskService.getTaskUpdateListener()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskListComponent.prototype.onEndTask = function (id) {
        var _this = this;
        this.taskService.getTask(id).subscribe(function (response) {
            _this.taskToEnd = response.data;
            _this.taskToEnd.status = 'Task Ended';
            _this.taskService.updateTask(_this.taskToEnd);
        });
    };
    TaskListComponent.prototype.onDeleteTask = function (taskId) {
        this.taskService.deleteTask(taskId);
    };
    TaskListComponent.prototype.alertReadOnly = function () {
        alert('Task already ended, unable to edit!');
    };
    TaskListComponent.prototype.ngDestroy = function () {
        this.tasksSub.unsubscribe();
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/task/task-list/task-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/task/task.model.ts":
/*!************************************!*\
  !*** ./src/app/task/task.model.ts ***!
  \************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, parentId, task, startDate, endDate, priority, taskId, projectId, status) {
        this.task = task;
        this.parentId = parentId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.taskId = taskId;
        this.projectId = projectId;
        this.status = status;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task/task.service.ts":
/*!**************************************!*\
  !*** ./src/app/task/task.service.ts ***!
  \**************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.tasks = [];
        this.tasksUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TaskService.prototype.getTasks = function () {
        var _this = this;
        this.http.get(BACKEND_URL + 'tasks')
            .subscribe(function (response) {
            _this.tasks = response.data;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.getTask = function (taskId) {
        return this.http.get(BACKEND_URL + 'tasks/' + taskId);
    };
    TaskService.prototype.addTask = function (task) {
        var _this = this;
        this.http.post(BACKEND_URL + 'tasks', task)
            .subscribe(function (response) {
            _this.tasks.push(response.data);
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.updateTask = function (task) {
        var _this = this;
        this.http.put(BACKEND_URL + 'tasks/' + task.taskId, JSON.stringify(task))
            .subscribe(function (response) {
            var updatedTasks = _this.tasks.slice();
            var oldTaskIndex = updatedTasks.findIndex(function (t) { return t.taskId === task.taskId; });
            updatedTasks[oldTaskIndex] = task;
            _this.tasks = updatedTasks;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.deleteTask = function (taskId) {
        var _this = this;
        this.http.delete(BACKEND_URL + 'tasks/' + taskId)
            .subscribe(function () {
            var updatedTasks = _this.tasks.filter(function (task) { return task.taskId !== taskId; });
            _this.tasks = updatedTasks;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.getTaskUpdateListener = function () {
        return this.tasksUpdated.asObservable();
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 2%;\n    float: left;\n}\n\ninput.ng-invalid.ng-touched {\n    border: 1px solid red;\n}\n\n.align-left {\n    text-align: left;\n}\n\n.align-right {\n    text-align: right;\n}\n\n.search-row .col-md-3 {\n    max-width: 22%;\n}\n\n.for-loop .list-item {\n    border-top-style: dotted !important;\n    border-top-color: blue !important;\n    padding-top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5hbGlnbi1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2VhcmNoLXJvdyAuY29sLW1kLTMge1xuICAgIG1heC13aWR0aDogMjIlO1xufVxuXG4uZm9yLWxvb3AgLmxpc3QtaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogZG90dGVkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" col-md-12>\n        <div class=\"col-sm-8\">\n            <form (ngSubmit)=\"onSaveUser()\" #addForm=\"ngForm\">\n                <div class=\"form-group row\">\n                    <label for=\"firstName\" class=\"col-sm-3 col-form-label\">First Name: </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\" id=\"firstName\" [ngModel]=\"userToEdit?.firstName\" name=\"firstName\" placeholder=\"\" required />\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"lastName\" class=\"col-sm-3 col-form-label\">Last Name: </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" class=\"form-control\" id=\"lastName\" [ngModel]=\"userToEdit?.lastName\" name=\"lastName\" placeholder=\"\" required />\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"empId\" class=\"col-sm-3 col-form-label\">Employee ID: </label>\n                    <div class=\"col-sm-4\">\n                        <input type=\"number\" maxlength=\"8\" class=\"form-control\" id=\"empId\" [ngModel]=\"userToEdit?.empId\" name=\"empId\" placeholder=\"\" required />\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-3\"></div>\n                    <div class=\"col-sm-9\">\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                            <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"First group\">\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]='!addForm.valid'>\n                                    Add\n                                </button>\n                            </div>\n                            <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Second group\">\n                                <button type=\"button\" class=\"btn btn-outline-warning\" (click)='onReset()'>\n                                    Reset\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n        <div class='user-details' *ngIf=\"showUserDetails\">\n            <hr>\n            <div id=\"form2\" class='search-row row'>\n                <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"search\" [ngModel]=\"search\" name=\"search\" placeholder=\"Search ...\" />\n                </div>\n                Sort By:\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByFirstName()'>\n                            First Name\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByLastName()'>\n                            Last Name\n                        </button>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"btn-group mr-1\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-outline-warning\" (click)='sortByEmpId()'>\n                            Emp Id\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"for-loop\" *ngFor=\"let user of users\">\n                <br>\n                <br>\n                <div class=\"list-tem row\">\n\n                    <div class='text-fields col-md-8'>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <input type=\"text\" class=\"form-control\" disabled name=\"firstName\" value={{user.firstName}}/>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <input type=\"text\" class=\"form-control\" disabled name=\"lastName\" value={{user.lastName}}/>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <input type=\"text\" class=\"form-control\" disabled name=\"empId\" value={{user.empId}}/>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col-md-4\">\n                        <div class=\"col-sm-9\">\n                            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                                <div class=\"btn-group mr-4 mb-2\" role=\"group\" aria-label=\"First group\">\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)='editUser(user.userId)'>\n                                        Edit\n                                    </button>\n                                </div>\n                                <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Second group\">\n                                    <button type=\"button\" class=\"btn btn-outline-warning\" (click)='deleteUser(user.userId)'>\n                                        Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






//import { Observable } from 'rxjs';
//import { Store } from '@ngrx/store';
//import { AppState } from './../app.state';
//import * as UserActions from './../actions/user.actions';
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.userAdded = false;
        this.mode = "add";
        this.users = new Array();
        this.showUserDetails = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.mode = "add";
        this.showUserDetails = false;
        this.userService.getUsers();
        this.usersStub = this.userService.getTaskUpdateListener()
            .subscribe(function (users) {
            _this.users = users;
            if (_this.users && _this.users.length > 0) {
                _this.showUserDetails = true;
            }
        });
    };
    UserComponent.prototype.getUserToEdit = function () {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].userId == this.userId) {
                if (this.mode == "edit") {
                    this.userToEdit = this.users[i];
                }
                else if (this.mode == "delete") {
                    //this.users.splice(i, 1);
                    this.userService.deleteUser(this.userId);
                }
            }
        }
        if (this.users.length == 0) {
            this.showUserDetails = false;
        }
    };
    UserComponent.prototype.onSaveUser = function () {
        if (this.addNewUserForm.invalid) {
            return;
        }
        if (this.mode === "add") {
            this.newUser = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"](this.addNewUserForm.value.empId, this.addNewUserForm.value.firstName, this.addNewUserForm.value.lastName, null);
            //this._store.dispatch(new UserActions.AddUser(this.newUser));
            this.showUserDetails = true;
            this.users.push(this.newUser);
            this.userService.addUser(this.newUser);
        }
        else {
            this.userToEdit.empId = this.addNewUserForm.value.empId;
            this.userToEdit.firstName = this.addNewUserForm.value.firstName;
            this.userToEdit.lastName = this.addNewUserForm.value.lastName;
            this.userService.updateUser(this.userToEdit);
        }
        this.onReset();
    };
    UserComponent.prototype.sortByFirstName = function () {
        this.users.sort(function (a, b) {
            var x = a.firstName.toLowerCase();
            var y = b.firstName.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    UserComponent.prototype.sortByLastName = function () {
        this.users.sort(function (a, b) {
            var x = a.lastName.toLowerCase();
            var y = b.lastName.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    UserComponent.prototype.sortByEmpId = function () {
        this.users.sort(function (a, b) {
            var x = a.empId;
            var y = b.empId;
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    UserComponent.prototype.deleteUser = function (userId) {
        this.userId = userId;
        this.mode = "delete";
        this.getUserToEdit();
        this.onReset();
    };
    UserComponent.prototype.editUser = function (userId) {
        this.userId = userId;
        this.mode = "edit";
        this.getUserToEdit();
    };
    UserComponent.prototype.onReset = function () {
        this.addNewUserForm.reset();
        this.mode = "add";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addForm", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], UserComponent.prototype, "addNewUserForm", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.model.ts":
/*!************************************!*\
  !*** ./src/app/user/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(empId, firstName, lastName, userId) {
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userId = userId;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.users = [];
        this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        this.http.get(BACKEND_URL + 'users')
            .subscribe(function (response) {
            _this.users = response.data;
            _this.userUpdated.next(_this.users.slice());
        });
    };
    UserService.prototype.getUser = function (userId) {
        return this.http
            .get(BACKEND_URL + 'users/' + userId);
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        this.http.post(BACKEND_URL + 'users', user)
            .subscribe(function (resData) {
            _this.users.push(user);
            _this.userUpdated.next(_this.users.slice());
        });
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        this.http.put(BACKEND_URL + 'users/' + user.userId, user)
            .subscribe(function (response) {
            var updateUsers = _this.users.slice();
            var oldTaskIndex = updateUsers.findIndex(function (t) { return t.userId === user.userId; });
            updateUsers[oldTaskIndex] = user;
            _this.users = updateUsers;
            _this.userUpdated.next(_this.users.slice());
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var _this = this;
        this.http.delete(BACKEND_URL + 'users/' + userId)
            .subscribe(function () {
            var updateUsers = _this.users.filter(function (user) { return user.userId !== userId; });
            _this.users = updateUsers;
            _this.userUpdated.next(_this.users.slice());
        });
    };
    UserService.prototype.getTaskUpdateListener = function () {
        return this.userUpdated.asObservable();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userSearchmodal/usersearchmodal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/userSearchmodal/usersearchmodal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJTZWFyY2htb2RhbC91c2Vyc2VhcmNobW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/userSearchmodal/usersearchmodal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userSearchmodal/usersearchmodal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>User Search</h1>\n<div mat-dialog-content>\n    <mat-radio-group aria-label=\"Select an option\">\n        <div class=\"for-loop\" *ngFor=\"let user of users\">\n            <mat-radio-button value=\"user.firstName user.lastname\">user.firstName user.lastname</mat-radio-button>\n        </div>\n    </mat-radio-group>"

/***/ }),

/***/ "./src/app/userSearchmodal/usersearchmodal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userSearchmodal/usersearchmodal.component.ts ***!
  \**************************************************************/
/*! exports provided: UserSearchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchModalComponent", function() { return UserSearchModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user/user.service */ "./src/app/user/user.service.ts");




var UserSearchModalComponent = /** @class */ (function () {
    function UserSearchModalComponent(data, userService) {
        this.data = data;
        this.userService = userService;
        this.users = new Array();
    }
    UserSearchModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers();
        this.usersStub = this.userService.getTaskUpdateListener()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UserSearchModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usersearchmodal',
            template: __webpack_require__(/*! ./usersearchmodal.component.html */ "./src/app/userSearchmodal/usersearchmodal.component.html"),
            styles: [__webpack_require__(/*! ./usersearchmodal.component.css */ "./src/app/userSearchmodal/usersearchmodal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array, _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserSearchModalComponent);
    return UserSearchModalComponent;
}());



/***/ }),

/***/ "./src/app/usersearchmodal/usersearchmodal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/usersearchmodal/usersearchmodal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzZWFyY2htb2RhbC91c2Vyc2VhcmNobW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/usersearchmodal/usersearchmodal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/usersearchmodal/usersearchmodal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>User Search</h1>\n<div mat-dialog-content>\n    <mat-radio-group aria-label=\"Select an option\">\n        <div class=\"for-loop\" *ngFor=\"let user of users\">\n            <mat-radio-button value=\"user.firstName user.lastname\">user.firstName user.lastname</mat-radio-button>\n        </div>\n    </mat-radio-group>"

/***/ }),

/***/ "./src/app/usersearchmodal/usersearchmodal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/usersearchmodal/usersearchmodal.component.ts ***!
  \**************************************************************/
/*! exports provided: UserSearchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchModalComponent", function() { return UserSearchModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user/user.service */ "./src/app/user/user.service.ts");




var UserSearchModalComponent = /** @class */ (function () {
    function UserSearchModalComponent(data, userService) {
        this.data = data;
        this.userService = userService;
        this.users = new Array();
    }
    UserSearchModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers();
        this.usersStub = this.userService.getTaskUpdateListener()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UserSearchModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usersearchmodal',
            template: __webpack_require__(/*! ./usersearchmodal.component.html */ "./src/app/usersearchmodal/usersearchmodal.component.html"),
            styles: [__webpack_require__(/*! ./usersearchmodal.component.css */ "./src/app/usersearchmodal/usersearchmodal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array, _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserSearchModalComponent);
    return UserSearchModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:9090/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CTS PROJECT\ProjectManager\ProjectManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map