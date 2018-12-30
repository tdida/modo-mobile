"use strict";
/// <reference path="../typings/tsd.d.ts" />
var fs = require("fs");
var path = require("path");
var Writer = require("./writer");
var globals = require("./globals");
function buildContents(lines, filePath) {
    var writers = globals.writers, imports = globals.imports, lessRegex = globals.lessFileRegex, cssRegex = globals.cssFileRegex, stringLiteralRegex = globals.stringLiteralRegex, currentLines = [], line, hashPath, imported, file, splitLines;
    if (typeof imports[filePath] === 'undefined') {
        imports[filePath] = true;
    }
    for (var index = 0; index < lines.length; ++index) {
        line = lines[index].trim();
        if (line.indexOf('@import ') === 0) {
            // We found an import statement
            if (currentLines.length > 0) {
                writers.push(new Writer(currentLines));
                currentLines = [];
            }
            imported = line.replace(stringLiteralRegex, '$1');
            if (!(lessRegex.test(imported) || cssRegex.test(imported))) {
                imported += '.less';
            }
            if (imported.match(/^~/)) {
                hashPath = imported.replace('~', path.join(__dirname, '../../'));
            }
            else {
                hashPath = path.resolve(filePath, '..', imported);
            }
            if (typeof imports[hashPath] === 'undefined') {
                imports[hashPath] = true;
                file = fs.readFileSync(hashPath, 'utf8');
                splitLines = file.split(/\r\n|\n/);
                splitLines[0] = splitLines[0].trim();
                buildContents(splitLines, hashPath);
            }
            continue;
        }
        currentLines.push(lines[index]);
    }
    // Push all remaining lines
    writers.push(new Writer(currentLines));
    return index;
}
module.exports = buildContents;
