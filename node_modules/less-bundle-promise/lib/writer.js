"use strict";
var Writer = /** @class */ (function () {
    /**
     * Creates a new Writer.
     *
     * @param operator The array of lines to associate with this writer.
     */
    function Writer(operator) {
        if (Array.isArray(operator)) {
            this.__lines = operator;
            return;
        }
    }
    /**
     * Writes the lines for this writer into the output array.
     *
     * @param output The output lines to which the Writer's lines should be appended.
     * @param previousLine The previous line that was added to output.
     */
    Writer.prototype.write = function (output, previousLine) {
        // If this writer has a module associated with it, we want to first add the 
        // lines for the module before adding the lines for this writer.
        var trim;
        // Add every line to the output.
        this.__lines.forEach(function (line) {
            trim = line.trim();
            if (!previousLine && !trim) {
                return;
            }
            output.push(line);
            previousLine = trim;
        });
        return previousLine;
    };
    return Writer;
}());
module.exports = Writer;
