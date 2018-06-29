webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-27 21:38:57\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-28 20:35:01\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__idea_search_idea_search_component__ = __webpack_require__("../../../../../src/app/idea-search/idea-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__idea_list_idea_list_component__ = __webpack_require__("../../../../../src/app/idea-list/idea-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__idea_detail_idea_detail_component__ = __webpack_require__("../../../../../src/app/idea-detail/idea-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_landing_page_landing_component__ = __webpack_require__("../../../../../src/app/page-landing/page-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_results_page_results_component__ = __webpack_require__("../../../../../src/app/page-results/page-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__idea_service__ = __webpack_require__("../../../../../src/app/idea.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logger_service__ = __webpack_require__("../../../../../src/app/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: 'results',
        component: __WEBPACK_IMPORTED_MODULE_12__page_results_page_results_component__["a" /* PageResultsComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__page_landing_page_landing_component__["a" /* PageLandingComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__idea_search_idea_search_component__["a" /* IdeaSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__idea_list_idea_list_component__["a" /* IdeaListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__idea_detail_idea_detail_component__["a" /* IdeaDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_landing_page_landing_component__["a" /* PageLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_results_page_results_component__["a" /* PageResultsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__idea_service__["a" /* IdeaService */], __WEBPACK_IMPORTED_MODULE_14__logger_service__["a" /* LoggerService */], __WEBPACK_IMPORTED_MODULE_15__authentication_service__["a" /* AuthenticationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.http.get(this.baseUrl + "isLoggedIn")
            .subscribe(function (data) { return _this.user = data ? data["_json"] : undefined; });
    }
    Object.defineProperty(AuthenticationService.prototype, "base", {
        get: function () {
            return this.baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "loggedInUser", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.loginWithLinkedIn = function () {
        return this.http.get(this.baseUrl + "auth/linkedin");
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/idea-detail/idea-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-27 22:02:15\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-29 20:51:27\r\n*/\r\n\r\n.idea-card{\r\n\tmargin: 30px auto;\r\n}\r\n\r\n.card__header{\r\n\tfont-size: 18px;\r\n\tline-height: 32px;\r\n\tfont-weight: 100;\r\n\tfont-family: Raleway;\r\n}\r\n\r\n.card__actions{\r\n\ttext-align: right;\r\n}\r\n\r\n.card__actions button{\r\n\tmargin: 10px;\r\n}\r\n\r\n.icon{\r\n\tfont-size: 32px;\r\n}\r\n\r\n.page__content{\r\n\tmax-width: 450px;\r\n\tmin-width: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/idea-detail/idea-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"idea-card noselect\">\r\n  <mat-card-header>\r\n    <mat-card-title class=\"card__header\">{{phrase}}</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-actions class=\"card__actions\">\r\n\t  \t<button mat-icon-button color=\"accent\">\r\n\t\t\t<mat-icon class=\"icon\" (click)=\"share()\">share</mat-icon>\r\n\t\t</button>\r\n\t\t<button mat-icon-button color=\"accent\">\r\n\t\t\t<mat-icon class=\"icon\" (click)=\"pin()\">{{ isPinned ? 'favorite' : 'favorite_border' }} </mat-icon>\r\n\t\t</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/idea-detail/idea-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdeaDetailComponent = /** @class */ (function () {
    function IdeaDetailComponent() {
        this.pinned = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.shared = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    IdeaDetailComponent.prototype.ngOnInit = function () {
        this.isPinned = false;
    };
    IdeaDetailComponent.prototype.pin = function () {
        this.isPinned = !this.isPinned;
        var msg = "Option " + this.phrase + " was " + (this.isPinned ? "pinned" : "unpinned");
        this.pinned.emit(msg);
    };
    IdeaDetailComponent.prototype.share = function () {
        this.shared.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], IdeaDetailComponent.prototype, "phrase", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], IdeaDetailComponent.prototype, "pinned", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], IdeaDetailComponent.prototype, "shared", void 0);
    IdeaDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-idea-detail',
            template: __webpack_require__("../../../../../src/app/idea-detail/idea-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/idea-detail/idea-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IdeaDetailComponent);
    return IdeaDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/idea-list/idea-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-27 22:02:01\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-28 23:54:56\r\n*/\r\n\r\n.wrapper__ideas{\r\n\toverflow: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/idea-list/idea-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper__ideas\">\r\n\t<ng-container \r\n\t\t*ngFor='let idea of ideas; let i=index'>\r\n\t\t<app-idea-detail \r\n\t\t\t*ngIf=\"i < displayedCount\"\r\n\t\t\t[phrase]='idea' \r\n\t\t\t(pinned)=\"ideaPinned($event)\"\r\n\t\t\t(shared)=\"ideaShared($event)\"></app-idea-detail>\r\n\t</ng-container>\r\n\r\n\t<mat-spinner *ngIf='!ideas' style=\"margin: 0 auto;\"></mat-spinner>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/idea-list/idea-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaListComponent = /** @class */ (function () {
    function IdeaListComponent(snackBar) {
        this.snackBar = snackBar;
        this.incrementValue = 5;
        this.scrolled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.displayedCount = this.incrementValue;
    }
    // todo: Memory Leak?
    IdeaListComponent.prototype.onScroll = function () {
        if (!this.ideas)
            return;
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (this.displayedCount < this.ideas.length) {
                this.snackBar.open('Adding a few more ideas!', '', { duration: 800 });
                this.displayedCount += 10;
                this.scrolled.emit(this.displayedCount);
            }
            else {
                this.snackBar.open('Oops... out of ideas for now!', '', { duration: 400 });
            }
        }
    };
    IdeaListComponent.prototype.ngOnInit = function () { };
    IdeaListComponent.prototype.ideaPinned = function ($event) {
        this.snackBar.open($event, '', { duration: 400 });
    };
    IdeaListComponent.prototype.ideaShared = function ($event) {
        this.snackBar.open('Feature coming soon!', '', { duration: 400 });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], IdeaListComponent.prototype, "ideas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], IdeaListComponent.prototype, "scrolled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IdeaListComponent.prototype, "onScroll", null);
    IdeaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-idea-list',
            template: __webpack_require__("../../../../../src/app/idea-list/idea-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/idea-list/idea-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatSnackBar */]])
    ], IdeaListComponent);
    return IdeaListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/idea-search/idea-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-27 22:01:46\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-29 21:31:59\r\n*/\r\n\r\n.search__wrapper{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\r\n\tmargin: 30px 0px;\r\n}\r\n\r\n.compressed{\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n}\r\n\r\n.disabled{\r\n\tpointer-events: none;\r\n}\r\n\r\n.btn--square{\r\n\twidth: 45px;\r\n\theight: 45px;\r\n\tmin-width: 10px;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\ninput{\r\n\tfont-size: 24px;\r\n\tline-height: 32px;\r\n\tcolor: gray;\r\n\tfont-weight: 100;\r\n\tfont-family: 'Raleway';\r\n}\r\n\r\n.form__element{\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.icon--plus{\r\n\tmargin-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/idea-search/idea-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"search__wrapper\" [class.compressed]=\"compressed\" autocomplete=\"off\">\n\t\n\t<mat-form-field class=\"form__element\">\n\t\t<input matInput required\n\t\t\t   placeholder=\"First Idea\"\n\t\t\t   [(ngModel)]='wordA' \n\t\t\t   name='wordA'/>\n\t</mat-form-field>\n\n\t<mat-icon class=\"icon icon--plus\" *ngIf=\"compressed\">add</mat-icon>\n\n\t<mat-form-field class=\"form__element\">\n\t\t<input matInput required\n\t\t\t   placeholder=\"Second Idea\"\n\t\t\t   [(ngModel)]='wordB' \n\t\t\t   name='wordB'/>\n\t</mat-form-field>\n\n\t<a class=\"btn search__button\" \n\t\t*ngIf=\"isAllowed()\"\n\t\t[routerLink]=\"['/results']\" [queryParams]=\"{wordA: wordA, wordB: wordB}\">\n\n\t\t<button mat-raised-button color=\"accent\" *ngIf=\"!compressed\">Search</button>\n\t\t<button class=\"btn--square\" mat-raised-button color=\"accent\" *ngIf=\"compressed\"><mat-icon>search</mat-icon></button>\n\n\t</a>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/idea-search/idea-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdeaSearchComponent = /** @class */ (function () {
    function IdeaSearchComponent() {
    }
    IdeaSearchComponent.prototype.ngOnInit = function () { };
    IdeaSearchComponent.prototype.isAllowed = function () {
        return this.wordA && this.wordB && this.wordA.replace(/ /g, "").length && this.wordB.replace(/ /g, "").length > 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], IdeaSearchComponent.prototype, "wordA", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], IdeaSearchComponent.prototype, "wordB", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IdeaSearchComponent.prototype, "compressed", void 0);
    IdeaSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-idea-search',
            template: __webpack_require__("../../../../../src/app/idea-search/idea-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/idea-search/idea-search.component.css")]
        })
    ], IdeaSearchComponent);
    return IdeaSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/idea.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeaService = /** @class */ (function () {
    function IdeaService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    IdeaService.prototype.getIdeas = function (wordA, wordB) {
        return this.http.get(this.baseUrl + "api/generate", {
            params: { wordA: wordA, wordB: wordB }
        });
    };
    IdeaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IdeaService);
    return IdeaService;
}());



/***/ }),

/***/ "../../../../../src/app/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (msg) {
        console.log(new Date() + " :: msg");
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/app/page-landing/page-landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-28 00:05:15\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-30 01:51:22\r\n*/\r\n.page--landing{\r\n\tmargin-top: 90px;\r\n}\r\n.page__content-wrapper{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; \r\n\t-webkit-box-orient: vertical; \r\n\t-webkit-box-direction: normal; \r\n\t    -ms-flex-direction: column; \r\n\t        flex-direction: column;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n.page__element--description{\r\n\r\n}\r\n.page__element--full-width{\r\n\twidth: 100%;\r\n}\r\n.icon--profile{\r\n\tfont-size: 14px;\r\n\tborder-radius: 50%;\r\n\tcolor: #E6CB68;\r\n\t\r\n\tbackground: #222;\r\n\twidth: 50px;\r\n    height: 50px;\r\n    font-size: 32px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    padding: 10px;\r\n    color: #E6CB68;\r\n    background: #222;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-landing/page-landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page page--landing page--responsive\">\r\n\r\n\t<div class=\"page__content-wrapper\">\r\n\r\n\t\t<span class=\"icon--profile\" *ngIf=\"user\">\r\n            {{user?.firstName[0]}}{{user?.lastName[0]}}\r\n        </span>\r\n\r\n\t\t<h1 class=\"page__element--header logo\">IdeaMaker.</h1>\r\n\r\n\t\t<p class=\"page__element--description\">\r\n\t\t\tLorem ipsum in labore dolore aliqua in commodo commodo aliqua anim dolor duis dolore dolore sed elit culpa nulla quis.\r\n\t\t</p>\r\n\r\n\t\t<app-idea-search class=\"page__element--full-width\"></app-idea-search>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/page-landing/page-landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageLandingComponent = /** @class */ (function () {
    function PageLandingComponent(authService) {
        this.authService = authService;
    }
    PageLandingComponent.prototype.ngOnInit = function () {
    };
    PageLandingComponent.prototype.ngAfterViewInit = function () {
        this.user = this.authService.loggedInUser;
    };
    PageLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-landing',
            template: __webpack_require__("../../../../../src/app/page-landing/page-landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-landing/page-landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], PageLandingComponent);
    return PageLandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-results/page-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-28 00:05:30\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-30 01:30:19\r\n*/\r\n\r\n.page--results{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n\r\n.page__header{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; \r\n\t-webkit-box-orient: horizontal; \r\n\t-webkit-box-direction: normal; \r\n\t    -ms-flex-direction: row; \r\n\t        flex-direction: row; \r\n\t-ms-flex-wrap: wrap; \r\n\t    flex-wrap: wrap;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\r\n\tbackground: none;\r\n}\r\n\r\n.page__content{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; \r\n\t-webkit-box-orient: vertical; \r\n\t-webkit-box-direction: normal; \r\n\t    -ms-flex-direction: column; \r\n\t        flex-direction: column;\r\n\r\n\tmargin-top: 45px;\r\n}\r\n\r\n.page__content__subheading{\r\n\tfont-weight: 100;\r\n\tfont-size: 1.6em;\r\n\tline-height: 2em;\r\n}\r\n\r\n.highlight{\r\n\tcolor: #E6CB68;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.icon {\r\n  padding: 0 14px;\r\n  font-size: 32px;\r\n}\r\n\r\n.toolbar__row{\r\n\tpadding: 0px;\r\n}\r\n\r\n.icon--profile{\r\n\tmargin-left: 30px;\r\n\tfont-size: 14px;\r\n\tpadding: 10px;\r\n\tfont-size: 14px;\r\n\tborder-radius: 50%;\r\n\tcolor: #E6CB68;\r\n\tbackground: #222;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-results/page-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page page--results page--responsive\">\r\n    <mat-toolbar class=\"page__header\">\r\n      \r\n      <mat-toolbar-row class=\"toolbar__row\">\r\n\r\n        <span class=\"logo\"><a href=\"./\">IdeaMaker.</a></span>\r\n        \r\n        <div class=\"spacer\"></div>\r\n        \r\n        <a target=\"_blank\"\r\n        \thref=\"https://twitter.com/intent/tweet?text={{tweet}}!\">\r\n        \t<mat-icon class=\"icon\">share</mat-icon>\r\n        </a>\r\n        <a href=\"{{baseUrl}}auth/linkedin\" *ngIf='!user'>\r\n        \t<mat-icon class=\"icon\" matTooltip=\"Not Logged In\">account_circle</mat-icon>\r\n    \t</a>\r\n        <a href=\"{{baseUrl}}logout\" *ngIf='user'>\r\n            <span class=\"icon--profile\"  matTooltip=\"{{user?.firstName}} {{user?.lastName}}\">\r\n                {{user?.firstName[0]}}{{user?.lastName[0]}}\r\n            </span>\r\n        </a>\r\n      \r\n      </mat-toolbar-row>\r\n\r\n    </mat-toolbar>\r\n\r\n\r\n    <div class=\"page__content\">\r\n\r\n        <app-idea-search [wordA]='wordA' [wordB]='wordB' [compressed]=\"true\"></app-idea-search>\r\n\r\n        <h2 class=\"page__content__subheading\">\r\n            Do you like these ideas for <span class=\"highlight\">{{wordA}}</span> and <span class=\"highlight\">{{wordB}}</span>?\r\n        </h2>\r\n       \r\n        <app-idea-list\r\n            [ideas]='results | async' \r\n            (scrolled)='onScroll($event)'>\r\n        </app-idea-list>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-results/page-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__("../../../../../src/app/idea.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageResultsComponent = /** @class */ (function () {
    function PageResultsComponent(route, ideaService, authService) {
        var _this = this;
        this.route = route;
        this.ideaService = ideaService;
        this.authService = authService;
        this.tweet = "Check out the Idea Maker at \
                  https://akshatamohanty.github.io/idea-generator";
        this.baseUrl = authService.base;
        this.route
            .queryParams.subscribe(function (params) {
            var A = params['wordA'];
            var B = params['wordB'];
            if (A && B) {
                _this.wordA = A;
                _this.wordB = B;
                // Todo: Memory leaks?
                _this.results = ideaService.getIdeas(_this.wordA, _this.wordB);
            }
        });
    }
    PageResultsComponent.prototype.ngOnInit = function () { this.user = this.authService.loggedInUser; };
    PageResultsComponent.prototype.onScroll = function ($event) {
        if ($event > 30 && !this.user) {
            // Todo: show login screen
        }
    };
    PageResultsComponent.prototype.login = function () {
        this.user = this.authService
            .loginWithLinkedIn()
            .subscribe(function (data) { return console.log(data); });
    };
    PageResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-results',
            template: __webpack_require__("../../../../../src/app/page-results/page-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-results/page-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], PageResultsComponent);
    return PageResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://idea-generator-1991.appspot.com/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map