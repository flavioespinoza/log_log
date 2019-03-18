import 'colors';
declare const log: {
    blue: (msg: any) => void;
    red: (msg: any) => void;
    green: (msg: any) => void;
    pink: (msg: any) => void;
    yellow: (msg: any) => void;
    violet: (msg: any) => void;
    magenta: (msg: any) => void;
    cyan: (msg: any) => void;
};
declare const _log: {
    deep: (data: any) => void;
    info: (msg: any) => void;
    error: (msg: any) => void;
    alert: (msg: any) => void;
    warn: (msg: any) => void;
    blue: (msg: any) => void;
    red: (msg: any) => void;
    green: (msg: any) => void;
    pink: (msg: any) => void;
    yellow: (msg: any) => void;
    violet: (msg: any) => void;
    cyan: (msg: any) => void;
    assert: (item: any, item_name: any) => void;
    timer: (method: any, method_name: any) => void;
};
export { log };
export default _log;
