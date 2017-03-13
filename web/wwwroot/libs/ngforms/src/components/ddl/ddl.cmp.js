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
var formModel_1 = require("../ngform/formModel");
var ddl_html_1 = require("./ddl.html");
var DDLCMP = (function () {
    function DDLCMP(elementRef, formModel) {
        this.elementRef = elementRef;
        this.formModel = formModel;
        this.label = "";
        this.chooseText = '-- Choose --';
        this.list = null;
        this.value = null;
        this.valueChange = new core_1.EventEmitter();
        this.selectedItemChange = new core_1.EventEmitter();
        this.selectedItem = { id: null, name: null };
        this.chooseVal = null;
    }
    DDLCMP.prototype.ngOnChanges = function () {
        this.chooseVal = null;
        this.syncSelectedItem();
    };
    DDLCMP.prototype.onValueChanged = function (value) {
        this.value = value;
        this.valueChange.emit(value);
        this.syncSelectedItem();
    };
    DDLCMP.prototype.syncSelectedItem = function () {
        var _this = this;
        var newSelectedItem = null;
        if (!this.list)
            return;
        if (this.value)
            newSelectedItem = this.list.find(function (l) { return l.id === _this.value; });
        if (this.selectedItem !== newSelectedItem) {
            this.selectedItem = newSelectedItem;
            this.selectedItemChange.emit(this.selectedItem);
        }
    };
    return DDLCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DDLCMP.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DDLCMP.prototype, "chooseText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DDLCMP.prototype, "list", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DDLCMP.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DDLCMP.prototype, "valueChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DDLCMP.prototype, "selectedItemChange", void 0);
DDLCMP = __decorate([
    core_1.Component({
        selector: 'ddl',
        template: ddl_html_1.html
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        formModel_1.FormModel])
], DDLCMP);
exports.DDLCMP = DDLCMP;
