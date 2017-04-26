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
        this.checked = null;
        this.checkedChange = new core_1.EventEmitter();
        this.readonly = false;
    }
    Object.defineProperty(CheckboxCMP.prototype, "selected", {
        set: function (val) { this.checked = val; } //Deprecated
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxCMP.prototype, "isChecked", {
        get: function () {
            var $checkbox = $("#chk", this.elRef.nativeElement);
            return this.checked === true
                || (this.checked
                    && this.checked.constructor === Array
                    && this.checked.find(function (id) { return id == $checkbox.val(); }) != undefined);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CheckboxCMP.prototype.onCBChange = function (event) {
        console.log('onCBChange()');
        console.log('checked: ', this.checked);
        if (this.checked === null)
            return;
        var cb = event.target;
        var isChecked = cb.checked;
        if (this.checked.constructor === Array) {
            var itemId = cb.values;
            if (isChecked
                && !this.isChecked)
                this.selected.push(itemId);
            else if (!isChecked
                && this.isChecked)
                this.checked.splice(this.checked.indexOf(itemId), 1);
        }
        this.checked = isChecked;
        this.checkedChange.emit(this.checked);
    };
    return CheckboxCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheckboxCMP.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CheckboxCMP.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CheckboxCMP.prototype, "checked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], CheckboxCMP.prototype, "checkedChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CheckboxCMP.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CheckboxCMP.prototype, "selected", null);
CheckboxCMP = __decorate([
    core_1.Component({
        selector: 'checkbox',
        template: checkbox_html_1.html
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CheckboxCMP);
exports.CheckboxCMP = CheckboxCMP;
