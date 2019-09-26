// Copyright (C) 2019 Paul Ciarlo <paul.ciarlo@gmail.com>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import MoochianMixin from "../lib/mooch.mjs";

export default function MoochianCalendarUnitTests() {
    MoochianMixin();
    console.log(new Date().getDekaMooches())
}

MoochianCalendarUnitTests();
