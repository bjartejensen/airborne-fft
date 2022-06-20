"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
Date.prototype.format = function (format) {
    return moment(this).format(format);
};
Date.prototype.addDays = function (days) {
    if (!days)
        return this;
    const d = moment(this).add(days, 'days').toDate();
    return d;
};
Date.prototype.dayDiff = function (endDate) {
    if (endDate === this) {
        return 0;
    }
    const diff = moment(endDate).diff(moment(this), 'days'); // 1
    return diff;
};
Date.prototype.isValid = function () {
    return moment(this).isValid();
};
//# sourceMappingURL=airborne-date.extensions.js.map