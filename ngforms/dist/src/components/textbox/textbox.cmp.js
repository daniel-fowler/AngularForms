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
var textbox_html_1 = require("./textbox.html");
var TextboxCMP = (function () {
    function TextboxCMP(formModel) {
        this.formModel = formModel;
        this.label = null;
        this.value = null;
        this.valueChange = new core_1.EventEmitter();
        this.multiline = false;
    }
    TextboxCMP.prototype.changeValue = function (val) {
        this.value = val;
        this.valueChange.emit(this.value);
    };
    return TextboxCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextboxCMP.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextboxCMP.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TextboxCMP.prototype, "valueChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TextboxCMP.prototype, "multiline", void 0);
TextboxCMP = __decorate([
    core_1.Component({
        selector: 'textbox',
        template: textbox_html_1.html
    }),
    __metadata("design:paramtypes", [formModel_1.FormModel])
], TextboxCMP);
exports.TextboxCMP = TextboxCMP;
