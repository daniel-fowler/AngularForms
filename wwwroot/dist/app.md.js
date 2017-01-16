"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_cmp_1 = require("./app.cmp");
var textbox_cmp_1 = require("./components/textbox/textbox.cmp");
var form_cmp_1 = require("./components/form/form.cmp");
var text_cmp_1 = require("./components/text/text.cmp");
var word_count_pipe_1 = require("./pipes/word-count.pipe");
var test_cmp_1 = require("./components/test.cmp");
var AppMD = (function () {
    function AppMD() {
    }
    return AppMD;
}());
AppMD = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        exports: [
            test_cmp_1.TestCMP
        ],
        declarations: [
            app_cmp_1.AppCMP,
            textbox_cmp_1.TextboxCMP,
            form_cmp_1.FormCMP,
            text_cmp_1.TextCMP,
            test_cmp_1.TestCMP,
            word_count_pipe_1.WordCountPipe
        ],
        bootstrap: [
            app_cmp_1.AppCMP
        ]
    }),
    __metadata("design:paramtypes", [])
], AppMD);
exports.AppMD = AppMD;
