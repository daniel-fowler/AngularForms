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
var btn_multi_html_1 = require("./btn-multi.html");
var formModel_1 = require("../form/formModel");
var BtnMultiCMP = (function () {
    function BtnMultiCMP(formModel) {
        this.formModel = formModel;
        this.label = null;
        this.value = null;
        this.valueChange = new core_1.EventEmitter();
        this.loading = false;
        this.required = false;
        this.readonly = false;
        this.readonlyValue = null;
    }
    BtnMultiCMP.prototype.changeValue = function (val) {
        this.value = val;
        this.valueChange.emit(val);
    };
    return BtnMultiCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BtnMultiCMP.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BtnMultiCMP.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BtnMultiCMP.prototype, "valueChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnMultiCMP.prototype, "loading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnMultiCMP.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnMultiCMP.prototype, "readonly", void 0);
__decorate([
    core_1.Input('readonly-value'),
    __metadata("design:type", String)
], BtnMultiCMP.prototype, "readonlyValue", void 0);
BtnMultiCMP = __decorate([
    core_1.Component({
        selector: 'btn-multi',
        template: btn_multi_html_1.html
    }),
    __metadata("design:paramtypes", [formModel_1.FormModel])
], BtnMultiCMP);
exports.BtnMultiCMP = BtnMultiCMP;
