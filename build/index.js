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
                        global.OPENAPI_NODEGEN_MEM_MONGO_LOADER = new mongodb_memory_server_1.MongoMemoryServer();
                        return [4 /*yield*/, global.OPENAPI_NODEGEN_MEM_MONGO_LOADER.getUri()];
                    case 1:
                        mongoUri = _a.sent();
                        return [4 /*yield*/, mongoose_1["default"].connect(mongoUri, {
                                poolSize: 15,
                                useNewUrlParser: true,
                                useUnifiedTopology: true
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenapiNodegenMemMongoLoader.prototype.teardown = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mongoose_1["default"].disconnect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, global.OPENAPI_NODEGEN_MEM_MONGO_LOADER.stop()];
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
