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
var btn_delete_html_1 = require("./btn-delete.html");
var BtnDeleteCMP = (function () {
    function BtnDeleteCMP() {
        this.delete = null;
        this.param = null;
        this.confirm = true;
        this.confirmMsg = 'Are you sure you want to delete this record?';
        this.isDeleting = false;
        this.isError = false;
        this.isSuccess = false;
        this.isEnabled = true;
    }
    BtnDeleteCMP.prototype.click = function (event) {
        if (!this.delete) {
            this.isError = true;
            return;
        }
        if (this.confirm) {
            var userIsSure = confirm(this.confirmMsg);
            if (!userIsSure)
                return;
        }
        this.isDeleting = true;
        this.isEnabled = false;
        var obs = this.delete(this.param);
        if (!obs) {
            this.onSuccess();
            return;
        }
        obs.do(null, this.onError, this.onSuccess)
            .subscribe();
    };
    BtnDeleteCMP.prototype.onError = function () {
        this.isError = true;
        this.isEnabled = true;
    };
    BtnDeleteCMP.prototype.onSuccess = function () {
        this.isSuccess = true;
        this.isEnabled = true;
    };
    return BtnDeleteCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], BtnDeleteCMP.prototype, "delete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BtnDeleteCMP.prototype, "param", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnDeleteCMP.prototype, "confirm", void 0);
__decorate([
    core_1.Input('confirm-msg'),
    __metadata("design:type", String)
], BtnDeleteCMP.prototype, "confirmMsg", void 0);
BtnDeleteCMP = __decorate([
    core_1.Component({
        selector: 'btn-delete',
        template: btn_delete_html_1.html
    }),
    __metadata("design:paramtypes", [])
], BtnDeleteCMP);
exports.BtnDeleteCMP = BtnDeleteCMP;
