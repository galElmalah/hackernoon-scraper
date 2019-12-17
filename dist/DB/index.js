"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var DB = (function () {
    function DB() {
    }
    DB.has = function (id) {
        return !!DB.data[id];
    };
    DB.save = function (id) {
        DB.data[id] = true;
        console.log(DB.data);
        return new Promise(function (res, rej) {
            return fs.writeFile(path.join(__dirname, '../../posts.json'), JSON.stringify(DB.data), 'utf8', function (err) { return err ? rej() : res(); });
        });
    };
    DB.resetPosts = function () {
        return new Promise(function (res, rej) {
            return fs.writeFile(path.join(__dirname, '../../posts.json'), JSON.stringify({}), 'utf8', function (err) { return err ? rej() : res(); });
        });
    };
    DB.data = require('../../posts.json');
    return DB;
}());
exports.DB = DB;
//# sourceMappingURL=index.js.map