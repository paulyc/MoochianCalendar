// Copyright (C) 2019 Paul Ciarlo <paul.ciarlo@gmail.com>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

// Authors Note: Moochian Time Units are likely more applicable to time periods
// than absolute dates but this way it's extremely easy to pick one or the other
// and interconvert with little confusion over what means a period of time and
// what means an absolute date

const Constants = {
    // Times based on Fox News(R) Official Twitter(R) Press Release(TM)
    // https://twitter.com/FoxNews/status/888442749342580737
    FoxNewsAppointmentTweetTimestamp: "2017-07-21T09:57:00-04:00",
    // https://twitter.com/FoxNews/status/892095844341731328
    FoxNewsDismissalTweetTimestamp: "2017-07-31T11:53:00-04:00",
    MillisecondsPerMeanSolarDay: 24 * 60 * 60 * 1000,
    MeanSolarDaysPerJulianYear: 365.25,
};

export default function MoochianMixin() {
    for (let [key, value] of Object.entries(MoochianMixin)) {
        Date[key] = value;
    }
    for (let [key, value] of Object.entries(MoochianMixin.prototype)) {
        Date.prototype[key] = value;
    }
}

// July 21, 2017 Gregorian = day 0, Moochian Era 0 (ME0) (Engineers have day 0 and year 0)
MoochianMixin.MoochianEpoch = new Date(Constants.FoxNewsAppointmentTweetTimestamp);
// July 31, 2017 Gregorian = day 10, ME0, = day 0, ME1
MoochianMixin.LeFinDeMooch = new Date(Constants.FoxNewsDismissalTweetTimestamp);

MoochianMixin.FineMoochianPeriod = new Date(
    MoochianMixin.LeFinDeMooch - MoochianMixin.MoochianEpoch +
    Constants.MillisecondsPerMeanSolarDay // Inclusive of final day's pay
);
MoochianMixin.DecimalMoochianPeriod = MoochianMixin.FineMoochianPeriod / Constants.MillisecondsPerMeanSolarDay;
MoochianMixin.MoochianPeriod = Math.floor(MoochianMixin.DecimalMoochianPeriod);

MoochianMixin.prototype.moochianValueOf = function () {
    return this.valueOf() - MoochianMixin.MoochianEpoch;
};

// Moochian Day (MD) : number of days since July 21, 2017
MoochianMixin.prototype.getDecimalMoochianDay = function () {
    return this.moochianValueOf() / Constants.MillisecondsPerMeanSolarDay;
};

// Last fully elapsed MD
MoochianMixin.prototype.getMoochianDay = function () {
    return Math.floor(this.getDecimalMoochianDay());
};

// Moochian Era (ME) : number of days since July 21, 2017 divided by 11
MoochianMixin.prototype.getDecimalMoochianEra = function () {
    return this.getDecimalMoochianDay() / MoochianMixin.MoochianPeriod;
};

// Last fully elapsed ME
MoochianMixin.prototype.getMoochianEra = function () {
    return Math.floor(this.getDecimalMoochianEra());
};

MoochianMixin.prototype.getMooches = function () {
    return this.getDecimalMoochianEra();
};

MoochianMixin.prototype.getDekaMooches = function () {
    return this.getDecimalMoochianEra() / 1e1;
};

MoochianMixin.prototype.getHectoMooches = function () {
    return this.getDecimalMoochianEra() / 1e2;
};

MoochianMixin.prototype.getKiloMooches = function () {
    return this.getDecimalMoochianEra() / 1e3;
};

MoochianMixin.prototype.getMegaMooches = function () {
    return this.getDecimalMoochianEra() / 1e6;
};
