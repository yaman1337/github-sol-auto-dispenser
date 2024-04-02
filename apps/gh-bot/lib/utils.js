"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBountyComment = exports.extractAmount = void 0;
var extractAmount = function (comment) {
    var match = comment.match(/\/bounty\s+(\$?\d+)/);
    return match ? match[1] : null;
};
exports.extractAmount = extractAmount;
var isBountyComment = function (comment) {
    return comment.includes("/bounty");
};
exports.isBountyComment = isBountyComment;
//# sourceMappingURL=utils.js.map