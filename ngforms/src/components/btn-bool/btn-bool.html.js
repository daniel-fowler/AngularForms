"use strict";
exports.html = "\n\n<btn-multi [label]=\"label\"\n           [required]=\"required\"            \n           [value]=\"value\"\n           (valueChange)=\"changeValue($event)\">\n    <btn [value]=\"true\">\n        Yes\n    </btn>\n\n    <btn [value]=\"false\"\n            [negative]=\"true\">\n        No\n    </btn>\n</btn-multi>\n\n";
