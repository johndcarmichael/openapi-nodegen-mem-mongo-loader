"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var mongodb_memory_server_1 = require("mongodb-memory-server");
var mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var OpenapiNodegenMemMongoLoader = /** @class */ (function () {
    function OpenapiNodegenMemMongoLoader() {
    }
    OpenapiNodegenMemMongoLoader.prototype.setup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mongoUri;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Load the memory database and oass uri to mongoose
                        this.mongoServer = new mongodb_memory_server_1.MongoMemoryServer();
                        return [4 /*yield*/, this.mongoServer.getUri()];
                    case 1:
                        mongoUri = _a.sent();
                        return [4 /*yield*/, mongoose_1["default"].connect(mongoUri, {}, function (err) {
                                if (err) {
                                    console.error(err);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.mongoServer];
                }
            });
        });
    };
    OpenapiNodegenMemMongoLoader.prototype.stop = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mongoose_1["default"].disconnect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mongoServer.stop()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OpenapiNodegenMemMongoLoader;
}());
exports["default"] = new OpenapiNodegenMemMongoLoader();
