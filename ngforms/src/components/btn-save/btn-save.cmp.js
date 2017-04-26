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
var btn_save_html_1 = require("./btn-save.html");
var BtnSaveCMP = (function () {
    function BtnSaveCMP() {
        this.param = null;
        this.enabled = true;
        this.text = 'Save';
        this.savingText = 'Saving...';
        this.savedText = 'Saved!';
        this.content = false;
        this.isSaving = false;
    }
    Object.defineProperty(BtnSaveCMP.prototype, "saving", {
        set: function (val) { this.isSaving = val; },
        enumerable: true,
        configurable: true
    });
    ;
    BtnSaveCMP.prototype.onClick = function () {
        var _this = this;
        if (!this.enabled || this.isSaving)
            return;
        this.isSaving = true;
        var save = null;
        //ISave (deprecated)
        if (typeof this.save !== 'function') {
            save = this.save.save(this.param);
        }
        else {
            save = this.save(this.param);
        }
        if (!save) {
            this.onCancelled();
            return;
        }
        save.subscribe(null, function () { return _this.onError(); }, function () { return _this.onSuccess(); });
    };
    BtnSaveCMP.prototype.onCancelled = function () {
        this.isSaving = false;
    };
    BtnSaveCMP.prototype.onError = function () {
        this.isSaving = false;
    };
    BtnSaveCMP.prototype.onSuccess = function () {
        this.text = this.savedText;
        this.isSaving = false;
        if (this.save)
            this.save.isSaved = true;
    };
    return BtnSaveCMP;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BtnSaveCMP.prototype, "save", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BtnSaveCMP.prototype, "param", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnSaveCMP.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BtnSaveCMP.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BtnSaveCMP.prototype, "savingText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BtnSaveCMP.prototype, "savedText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BtnSaveCMP.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BtnSaveCMP.prototype, "saving", null);
BtnSaveCMP = __decorate([
    core_1.Component({
        selector: 'btn-save',
        template: btn_save_html_1.html,
        host: {
            '(click)': 'onClick()'
        }
    }),
    __metadata("design:paramtypes", [])
], BtnSaveCMP);
exports.BtnSaveCMP = BtnSaveCMP;
