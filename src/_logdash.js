"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const util_1 = __importDefault(require("util"));
const log = {
    blue: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.blue);
    },
    red: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.red);
    },
    green: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.green);
    },
    pink: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.red.dim);
    },
    yellow: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.yellow.bold);
    },
    violet: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.magenta.dim);
    },
    magenta: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.magenta.bold);
    },
    cyan: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.cyan);
    }
};
exports.log = log;
const _log = {
    deep: (data) => {
        const options = {
            showHidden: false,
            depth: null,
            colors: true
        };
        const inspect = util_1.default.inspect(data, options);
        console.log(inspect);
    },
    info: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` Info: ${msg} `.bgBlue.white);
    },
    error: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` ERROR: ${msg} `.yellow.bold);
    },
    alert: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` Alert: ${msg} `.bgYellow.black);
    },
    warn: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` Warn: ${msg} `.bgMagenta.white);
    },
    blue: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgBlue.black);
    },
    red: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgRed.black);
    },
    green: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgGreen.black);
    },
    pink: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgRed.white);
    },
    yellow: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgYellow.white);
    },
    violet: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgMagenta.black);
    },
    cyan: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgCyan.black);
    },
    assert: (item, item_name) => {
        if (item) {
            let msg = ` SUCCESS: ${item_name} = ${item} `;
            console.log(`ASSERT`, msg.bgCyan.black);
        }
        else {
            let msg = ` FAIL: ${item_name} = ${item} `;
            console.log(`ASSERT`, msg.bgRed.black);
        }
    },
    timer: (method, method_name) => {
        console.time(`Timer ${method_name}()`);
        method();
        console.timeEnd(`Timer ${method_name}()`);
    }
};
exports.default = _log;
//# sourceMappingURL=_logdash.js.map