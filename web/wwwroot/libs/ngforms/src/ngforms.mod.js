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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("./components/core");
var core_3 = require("./pipes/core");
var NGFormsModule = (function () {
    function NGFormsModule() {
    }
    return NGFormsModule;
}());
NGFormsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        exports: [
            core_2.TextboxCMP,
            core_2.FormCMP,
            core_2.TextCMP,
            core_2.BtnCMP,
            core_2.BtnMultiCMP,
            core_2.CheckboxCMP,
            core_2.BtnSaveCMP,
            core_2.DDLCMP,
            core_3.WordCountPipe
        ],
        declarations: [
            core_2.TextboxCMP,
            core_2.FormCMP,
            core_2.TextCMP,
            core_2.BtnCMP,
            core_2.BtnMultiCMP,
            core_2.CheckboxCMP,
            core_2.BtnSaveCMP,
            core_2.DDLCMP,
            core_3.WordCountPipe
        ]
    }),
    __metadata("design:paramtypes", [])
], NGFormsModule);
exports.NGFormsModule = NGFormsModule;
