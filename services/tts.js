/* This Source Code Form is subject to the terms of the MIT
* License. If a copy of the same was not distributed with this
* file, You can obtain one at
* https://github.com/akhilpandey95/m.bot/blob/master/LICENSE.
*/

const fs = require('fs');
const config = require('../config');
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

function felix_invoke_tts(input) {
    // declare the parameters
    var params_tts = {
        text: input,
        voice: config.text_to_speech.tts_voice,
        accept: 'audio/flac'
    };

    // create a Text to speech object
    var text_to_speech = new TextToSpeechV1 ({
        username: config.text_to_speech.tts_uname,
        password: config.text_to_speech.tts_pwd
    });

    // Pipe the synthesized text to a file.
    text_to_speech.synthesize(params_tts).on('error', (error) => {
        console.log('Error:', error);
    }).pipe(fs.createWriteStream('felix.flac'));

}

// check for call tts function here
if (process.argv.length < 3) {
    console.error("Please pass an argument")
} else {
    var strings = [];
    for (let i = 2; i < process.argv.length; i++) {
        strings.push(String(process.argv[i]))
    }
    felix_invoke_tts(strings.join(" "));
}
