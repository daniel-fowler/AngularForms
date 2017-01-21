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
var formModel_1 = require("./formModel");
var FormCMP = (function () {
    function FormCMP(elRef, formModel) {
        this.elRef = elRef;
        this.formModel = formModel;
    }
    Object.defineProperty(FormCMP.prototype, "formHorizontal", {
        get: function () { return 'form-horizontal'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormCMP.prototype, "classLabel", {
        set: function (val) { this.formModel.labelClass = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormCMP.prototype, "classControl", {
        set: function (val) { this.formModel.controlClass = val; },
        enumerable: true,
        configurable: true
    });
    return FormCMP;
}());
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FormCMP.prototype, "formHorizontal", null);
__decorate([
    core_1.Input('class-label'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FormCMP.prototype, "classLabel", null);
__decorate([
    core_1.Input('class-control'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FormCMP.prototype, "classControl", null);
FormCMP = __decorate([
    core_1.Component({
        selector: 'ngform',
        template: '<ng-content></ng-content>',
        providers: [
            formModel_1.FormModel
        ]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        formModel_1.FormModel])
], FormCMP);
exports.FormCMP = FormCMP;
