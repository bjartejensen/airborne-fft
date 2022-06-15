import * as moment from 'moment';

export {};

declare global {
  interface Date {
    //isToday(): boolean;
    addDays(days: number): Date;
    dayDiff(endDate: Date): number;
    isValid(): boolean;
    toDateFromMoment(): Date;
    format(format: string): string;
  }
}

Date.prototype.format = function (format: string): string {
  return moment(this).format(format);
};

Date.prototype.addDays = function (days: number): Date {
  if (!days) return this;

  const d = moment(this).add(days, 'days').toDate();

  return d;
};

Date.prototype.dayDiff = function (endDate: Date) {
  if (endDate === this) {
    return 0;
  }

  const diff = moment(endDate).diff(moment(this), 'days'); // 1
  return diff;
};

Date.prototype.isValid = function () {
  return moment(this).isValid();
};
