/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2014, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

function stringToBoolean(str, defaultValue) {
  if (str === 'true') {
    return true;
  }
  if (str === 'false') {
    return false;
  }
  return defaultValue || false;
}

function stringToArray(str, defaultValue) {
  if (!(str && str.length)) {
    return defaultValue;
  }
  return str.split(',');
}

module.exports = {
  DEBUG: stringToBoolean(process.env.DEBUG, true),
  MOCK: stringToBoolean(process.env.MOCK, false),
  // the defaults for these need to be pointing to prod
  API_URL: process.env.API_URL || 'https://api.tidepool.io',
  UPLOAD_URL: process.env.UPLOAD_URL || 'https://uploads.tidepool.io',
  BLIP_URL: process.env.BLIP_URL || 'https://blip-ucsf-pilot.tidepool.io',
  CARELINK: stringToBoolean(process.env.CARELINK, true),
  DEFAULT_TIMEZONE: process.env.DEFAULT_TIMEZONE || 'America/Los_Angeles',
  DEFAULT_CARELINK_DAYS: process.env.DEFAULT_CARELINK_DAYS || '180'
};
