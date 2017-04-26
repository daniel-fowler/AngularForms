"use strict";
exports.html = "\n\n<label *ngIf=\"!readonly\">\n    <input id=\"chk\" type=\"checkbox\"\n           [value]=\"value\"\n           [checked]=\"isChecked\"\n           (change)=\"onCBChange($event)\"/>\n\n    {{ label }}\n</label>\n\n";
