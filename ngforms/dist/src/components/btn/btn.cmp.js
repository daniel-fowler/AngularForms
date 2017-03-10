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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var btn_multi_cmp_1 = require("../btn-multi/btn-multi.cmp");
var btn_html_1 = require("./btn.html");
var formModel_1 = require("../ngform/formModel");
var BtnCMP = (function () {
    function BtnCMP(formModel, btnMulti) {
        this.formModel = formModel;
        this.btnMulti = btnMulti;
        this.onClicked = this.click;
        this.value = null;
        this.busy = false;
        this.selectedClass = 'btn-success';
        this._class = 'btn-default';
    }
    Object.defineProperty(BtnCMP.prototype, "test", {
        get: function () { return 'btn ' + this.class; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BtnCMP.prototype, "selected", {
        get: function () {
            return this.btnMulti
                && this.value === this.btnMulti.value;
        },
        set: function (isSelected) {
            if (isSelected && this.btnMulti)
                this.btnMulti.changeValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BtnCMP.prototype, "negative", {
        set: function (isNegative) {
            this.selectedClass = isNegative ? 'btn-danger' : 'btn-success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BtnCMP.prototype, "classSelected", {
        set: function (val) { this.selectedClass = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BtnCMP.prototype, "class", {
        get: function () {
            return this.selected ?
                this.selectedClass :
                this._class;
        },
        set: function (val) { this._class = val; },
        enumerable: true,
        configurable: true
    });
    BtnCMP.prototype.click = function () {
        if (this.btnMulti)
            this.btnMulti.changeValue(this.value);
    };
    return BtnCMP;
}());
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BtnCMP.prototype, "test", null);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Object)
], BtnCMP.prototype, "onClicked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BtnCMP.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnCMP.prototype, "busy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BtnCMP.prototype, "selectedClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BtnCMP.prototype, "selected", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BtnCMP.prototype, "negative", null);
__decorate([
    core_1.Input('class-selected'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BtnCMP.prototype, "classSelected", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BtnCMP.prototype, "class", null);
BtnCMP = __decorate([
    core_1.Component({
        selector: 'btn',
        template: btn_html_1.html
    }),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [formModel_1.FormModel,
        btn_multi_cmp_1.BtnMultiCMP])
], BtnCMP);
exports.BtnCMP = BtnCMP;
