"use strict";
var globals = require("./globals");
var output = globals.output;
function removeEmptyStringsFromEnd(output) {
    while (!output[output.length - 1]) {
        output.pop();
    }
}
/**
 * Iterates through writers and invokes their write
 * function, building the output array.
 */
function generateOutput() {
    var writers = globals.writers, previousLine = '';
    writers.forEach(function (writer) {
        previousLine = writer.write(output, previousLine);
    });
    removeEmptyStringsFromEnd(output);
}
module.exports = generateOutput;
