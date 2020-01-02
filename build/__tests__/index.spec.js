"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("../index"));
it('should setup ok', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1["default"].setup()];
            case 1:
                _a.sent();
                done();
                return [2 /*return*/];
        }
    });
}); });
it('should stop ok', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1["default"].stop()];
            case 1:
                _a.sent();
                done();
                return [2 /*return*/];
        }
    });
}); });
