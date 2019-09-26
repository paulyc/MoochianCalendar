// MoochianCalendar
//
// Copyright (C) 2019 Paul Ciarlo <paul.ciarlo@gmail.com>
//
// Permission to use, copy, modify, and/or distribute this software for
// any purpose with or without fee is hereby granted, provided that the
// above copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

const Constants = {
    MillisecondsInDay: 24 * 60 * 60 * 1000
};

export default function MoochianCalendar () {}

// July 21, 2017 (Appointed) Gregorian = Moochian Epoch = Moochian Period 0 (MP0)
// July 31, 2017 (Terminated, Inclusive) Gregorian = Moochian Period 1 (MP1)
MoochianCalendar.Epoch = new Date(2017, 6, 21);
MoochianCalendar.Period = new Date(11 * Constants.MillisecondsInDay);

MoochianCalendar.prototype.getMsSinceEpoch = function (date) {
   return date.valueOf() - MoochianCalendar.Epoch;
    const daysSinceEpoch = msSinceEpoch / Constants.MillisecondsInDay;
    return Math.floor(daysSinceEpoch);
};

MoochianCalendar.prototype.getDecimalDaysSinceEpoch = function (date) {
    return 1.0 * this.getMsSinceEpoch(date) / Constants.MillisecondsInDay;
};

// Moochian Day : integer number of days since July 21, 2017
MoochianCalendar.prototype.getMoochianDayforDate = function (date) {
    return Math.floor(this.getDecimalDaysSinceEpoch(date));
};

// Moochian Period : number of days since July 21, 2017 divided by 11
MoochianCalendar.prototype.getDecimalMoochianPeriodForDate = function (date) {
    return this.getDecimalDaysSinceEpoch(date) / 11.0;
};

MoochianCalendar.prototype.getCurrentMoochianPeriodForDate = function (date) {
    return Math.floor(this.getDecimalMoochianPeriodForDate(date));
};

MoochianCalendar.prototype.currentDate_M = function () {
    return this.getDecimalMoochianPeriodForDate(new Date());
};

MoochianCalendar.prototype.currentDate_DaM = function () {
    return this.getDecimalMoochianPeriodForDate(new Date()) / 1e1;
};

MoochianCalendar.prototype.currentDate_hM = function () {
    return this.getDecimalMoochianPeriodForDate(new Date()) / 1e2;
};

MoochianCalendar.prototype.currentDate_kM = function () {
    return this.getDecimalMoochianPeriodForDate(new Date()) / 1e3;
};

MoochianCalendar.prototype.currentDate_MM = function () {
    return this.getDecimalMoochianPeriodForDate(new Date()) / 1e6;
};
