/* This Source Code Form is subject to the terms of the MIT
* License. If a copy of the same was not distributed with this
* file, You can obtain one at
* https://github.com/akhilpandey95/m.bot/blob/master/LICENSE.
*/

const c = require('../config');

/*
 * @param1: input [string]
 * @param2: response [JSON]
 *
 * returns: JSON object
 */
let update_message = (input, response) => {
  // create a response JSON structure
  let res_text = null;

  if (!response.output) {
    response.output = {};
  } else {
    return response;
  }

  // extract the intent and the confidence
  if (response.intents && response.intents[0]) {
    let intent = response.intents[0];

    if (intent.confidence >= 0.75) {
      res_text = 'I am sure your intent was ' + intent.intent;
    } else if (intent.confidence >= 0.5) {
      res_text = 'I guess your intent was ' + intent.intent;
    } else {
      res_text = 'I do not understand your intent';
    }
  }

  // return the response
  response.output.text = res_text;
  return response;
};

// export the modules
module.exports = {
  update_message: update_message
}
