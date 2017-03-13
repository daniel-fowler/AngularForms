"use strict";
exports.html = "\n\n<div class=\"form-group\"\n    *ngIf=\"label\">\n    <label class=\"control-label {{ formModel.labelClass }}\">\n        {{label}}\n        <icon-required *ngIf=\"required\"></icon-required>\n    </label>\n\n    <div class=\"{{ formModel.controlClass }}\">\n        <input type=\"text\"\n                *ngIf=\"!multiline\"\n                class=\"form-control\"\n                [ngModel]=\"value\"\n                (ngModelChange)=\"changeValue($event)\"/>\n\n        <textarea *ngIf=\"multiline\"\n                    class=\"form-control\"\n                    rows=\"10\"\n                    [ngModel]=\"value\"\n                    (ngModelChange)=\"changeValue($event)\"></textarea>\n\n        <span class=\"text-muted\" *ngIf=\"multiline\">\n            {{ value | wordCount }} Words\n        </span>\n    </div>\n</div>\n\n<span *ngIf=\"!label\">\n    <input type=\"text\"\n            *ngIf=\"!multiline\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"changeValue($event)\" \n            class=\"form-control\" />\n\n    <textarea *ngIf=\"multiline\"\n                rows=\"10\"\n                [ngModel]=\"value\"\n                (ngModelChange)=\"changeValue($event)\"\n                class=\"form-control\"></textarea>\n\n    <span class=\"text-muted\" *ngIf=\"multiline\">\n        {{ value | wordCount }} Words\n    </span>\n</span>\n\n";
