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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
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
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__idea_service__["a" /* IdeaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/idea-detail/idea-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-27 22:02:15\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-28 23:02:23\r\n*/\r\n\r\n/*\r\n.wrapper__idea{\r\n\tbackground-color: white;\r\n\tpadding: 15px;\r\n\r\n\tcolor: black;\r\n\tfont-size: 18px;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 4px;\r\n\r\n\tmargin: 15px;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.idea__actions{\r\n\tposition: relative;\r\n\ttext-align: right;\r\n}\r\n\r\n.wrapper--right{\r\n}\r\n\r\n.icon{\r\n\tcursor: pointer;\r\n\tfont-size: 32px;\r\n\tmargin: 0px 15px;\r\n}\r\n\r\n.idea-card{\r\n\tmargin: 15px;\r\n}\r\n\r\n.card__header{\r\n\tfont-size: 24px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n}\r\n\r\n*/\r\n\r\n.idea-card{\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.card__header{\r\n\tfont-size: 24px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n}\r\n\r\n.card__actions{\r\n\ttext-align: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/idea-detail/idea-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"idea-card noselect\">\r\n  <mat-card-header>\r\n    <mat-card-title class=\"card__header\">{{phrase}}</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-actions class=\"card__actions\">\r\n\t  \t<button mat-icon-button color=\"accent\">\r\n\t\t\t<mat-icon class=\"icon\">share</mat-icon>\r\n\t\t</button>\r\n\t\t<button mat-icon-button color=\"accent\">\r\n\t\t\t<mat-icon class=\"icon\" (click)='pin()'>{{ isPinned ? 'favorite' : 'favorite_border' }} </mat-icon>\r\n\t\t</button>\r\n  </mat-card-actions>\r\n</mat-card>"

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

module.exports = "<div class=\"wrapper__ideas\">\r\n\t<ng-container \r\n\t\t*ngFor='let idea of ideas; let i=index'\r\n\t\t(scroll)=\"increment()\">\r\n\t\t<app-idea-detail \r\n\t\t\t*ngIf=\"i < displayedCount\"\r\n\t\t\t[phrase]='idea' \r\n\t\t\t(pinned)=\"ideaPinned($event)\"\r\n\t\t\t(shared)=\"ideaShared($event)\"></app-idea-detail>\r\n\t</ng-container>\r\n\r\n\t<mat-spinner *ngIf='!ideas' style=\"margin: 0 auto;\"></mat-spinner>\r\n</div>"

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
        this.displayedCount = this.incrementValue;
    }
    IdeaListComponent.prototype.ngOnInit = function () { };
    IdeaListComponent.prototype.ideaPinned = function ($event) {
        this.snackBar.open($event, '', { duration: 400 });
    };
    IdeaListComponent.prototype.ideaShared = function ($event) {
        this.snackBar.open('Feature coming soon!', '', { duration: 400 });
    };
    IdeaListComponent.prototype.increment = function () {
        if (this.ideas) {
            this.displayedCount = Math.max(this.ideas.length, this.displayedCount + this.incrementValue);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], IdeaListComponent.prototype, "ideas", void 0);
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
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-27 22:01:46\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-28 22:54:33\r\n*/\r\n\r\n.search__wrapper{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\r\n\tmargin: 30px 0px;\r\n}\r\n\r\n.compressed{\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n}\r\n\r\n.disabled{\r\n\tpointer-events: none;\r\n}\r\n\r\n/*\r\n\r\n\r\n\r\n.search__inputs{\r\n\tbackground: transparent;\r\n\tfont-size: 30px;\r\n\tfont-weight: 100;\r\n\r\n\tmargin: 25px 0px;\r\n\tpadding: 5px;\r\n\r\n\tborder: 0px;\r\n\tborder-bottom: 1px solid gray;\r\n\ttext-align: center;\r\n}\r\n\r\n.search__button{\r\n\theight: 50px;\r\n\r\n\tfont-size: 18px;\r\n\tline-height: 50px;\r\n\ttext-transform: uppercase;\r\n\r\n\tpadding: 10px 30px;\r\n\tmargin-top: 30px;\r\n\r\n\tborder: 1px solid #222; \r\n\tbackground-color: black;\r\n\tcolor: #f7f7f7;\r\n\tborder-radius: 4px;\r\n\ttext-align: center;\r\n}\r\n\r\n.example-full-width{\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n.compressed .search__inputs{\r\n\tfont-size: 16px;\r\n\tline-height: 18px;\r\n\tpadding: 10px 0px;\r\n}\r\n\r\n.compressed .search__button{\r\n\theight: 24px;\r\n\twidth: 24px;\r\n\tmargin-top: -25px;\r\n\tline-height: 24px;\r\n}\r\n\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/idea-search/idea-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"search__wrapper example-form\" [class.compressed]=\"compressed\">\n\t\n\t<mat-form-field class=\"example-full-width\">\n\t\t<input matInput \n\t\t\t   placeholder=\"First Idea\"\n\t\t\t   [(ngModel)]='wordA' \n\t\t\t   name='wordA'/>\n\t</mat-form-field>\n\n\t<span><mat-icon>add</mat-icon></span>\n\n\t<mat-form-field class=\"example-full-width\">\n\t\t<input matInput \n\t\t\t   placeholder=\"Second Idea\"\n\t\t\t   [(ngModel)]='wordB' \n\t\t\t   name='wordB'/>\n\t</mat-form-field>\n\n\t<a class=\"btn search__button\" \n\t\t*ngIf=\"wordA && wordB\"\n\t\t[routerLink]=\"['/results']\" [queryParams]=\"{wordA: wordA, wordB: wordB}\">\n\n\t\t<button mat-raised-button color=\"accent\" *ngIf=\"!compressed\">Get Ideas!</button>\n\t\t<button mat-raised-button color=\"accent\" *ngIf=\"compressed\"><mat-icon>refresh</mat-icon></button>\n\n\t</a>\n\n</form>\n"

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
        return this.http.get(this.baseUrl + "generate", {
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

/***/ "../../../../../src/app/page-landing/page-landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-28 00:05:15\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-28 22:34:24\r\n*/\r\n.page--landing{\r\n\tpadding-top: 100px;\r\n\ttext-align: center;\r\n}\r\n.page__content-wrapper{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; \r\n\t-webkit-box-orient: vertical; \r\n\t-webkit-box-direction: normal; \r\n\t    -ms-flex-direction: column; \r\n\t        flex-direction: column;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-landing/page-landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page page--landing\">\r\n\r\n\t<div class=\"page__content-wrapper\">\r\n\r\n\t\t<h1 class=\"page__element--header\">The Idea Generator.</h1>\r\n\r\n\t\t<p class=\"page__element--description\">Proident cupidatat eiusmod pariatur irure est ullamco amet qui culpa qui minim est aute proident velit velit cupidatat ea aute cupidatat.\r\n\t\t</p>\r\n\r\n\t\t<app-idea-search></app-idea-search>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/page-landing/page-landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLandingComponent; });
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

var PageLandingComponent = /** @class */ (function () {
    function PageLandingComponent() {
    }
    PageLandingComponent.prototype.ngOnInit = function () {
    };
    PageLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-landing',
            template: __webpack_require__("../../../../../src/app/page-landing/page-landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-landing/page-landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageLandingComponent);
    return PageLandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-results/page-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* @Author: Akshata\r\n* @Date:   2018-06-28 00:05:30\r\n* @Last Modified by:   Akshata\r\n* @Last Modified time: 2018-06-29 00:25:00\r\n*/\r\n\r\n.page--results{\r\n\ttext-align: center;\r\n\r\n\tdisplay: -webkit-box;\r\n\r\n\tdisplay: -ms-flexbox;\r\n\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n\r\n.page__content-wrapper{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; \r\n\t-webkit-box-orient: vertical; \r\n\t-webkit-box-direction: normal; \r\n\t    -ms-flex-direction: column; \r\n\t        flex-direction: column;\r\n}\r\n\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-results/page-results.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\r\n  <mat-toolbar-row>\r\n    <span><b>IdeaGenerator.</b></span>\r\n    <span class=\"example-spacer\"></span>\r\n    <a target=\"_blank\"\r\n    \thref=\"https://twitter.com/intent/tweet?text={{tweet}}!\">\r\n    \t<mat-icon class=\"example-icon\">share</mat-icon>\r\n    </a>\r\n    <a>\r\n    \t<mat-icon class=\"example-icon\">account_circle</mat-icon>\r\n\t</a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<div class=\"page page--results\">\r\n\r\n\t<!-- <h1 class=\"page__element--header\">Idea Generator App.</h1> -->\r\n\t<app-idea-search [wordA]='wordA' [wordB]='wordB' [compressed]=\"true\"></app-idea-search>\r\n\r\n\t<app-idea-list [ideas]='results | async'></app-idea-list>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-results/page-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__("../../../../../src/app/idea.service.ts");
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
    function PageResultsComponent(route, ideaService) {
        var _this = this;
        this.route = route;
        this.ideaService = ideaService;
        this.tweet = "Check out the Idea Generator at https://akshatamohanty.github.io/idea-generator";
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
    PageResultsComponent.prototype.ngOnInit = function () { };
    PageResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-results',
            template: __webpack_require__("../../../../../src/app/page-results/page-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-results/page-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */]])
    ], PageResultsComponent);
    return PageResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api/'
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