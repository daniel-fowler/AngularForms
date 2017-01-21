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
var checkbox_html_1 = require("./checkbox.html");
var CheckboxCMP = (function () {
    function CheckboxCMP(elRef) {
        this.elRef = elRef;
        this.readonly = false;
    }
    Object.defineProperty(CheckboxCMP.prototype, "isSelected", {
        get: function () {
            var $checkbox = $("#chk", this.elRef.nativeElement);
            return this.selected && this.selected.find(function (id) { return id == $checkbox.val(); }) != undefined;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CheckboxCMP.prototype.onCBChange = function (event) {
        if (!this.selected)
            return;
        var cb = event.target;
        var isChecked = cb.checked;
        var itemId = cb.value;
        if (isChecked
            && !this.isSelected)
            this.selected.push(itemId);
        else if (!isChecked
            && this.isSelected)
            this.selected.splice(this.selected.indexOf(itemId), 1);
    };
    return CheckboxCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckboxCMP.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckboxCMP.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CheckboxCMP.prototype, "selected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CheckboxCMP.prototype, "readonly", void 0);
CheckboxCMP = __decorate([
    core_1.Component({
        selector: 'checkbox',
        template: checkbox_html_1.html
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CheckboxCMP);
exports.CheckboxCMP = CheckboxCMP;
