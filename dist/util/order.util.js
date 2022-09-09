"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randThree = exports.toInvoice = exports.expiring = exports.randomIn = void 0;
const moment = require("moment");
const randomIn = (length) => {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
};
exports.randomIn = randomIn;
const expiring = (day) => {
    const unixTime = Math.floor(Date.now() / 1000);
    const duration = (day * 3600 * 24);
    const expired = unixTime + duration;
    return new Date(expired * 1000);
};
exports.expiring = expiring;
const toInvoice = (day) => {
    const dmy = moment(day).format('DDMMYY');
    const tracking = (0, exports.randomIn)(7);
    const invoice = `${dmy}SKU${tracking}`;
    return { tracking, invoice };
};
exports.toInvoice = toInvoice;
const randThree = () => Math.floor(Math.random() * (100) + 100);
exports.randThree = randThree;
//# sourceMappingURL=order.util.js.map