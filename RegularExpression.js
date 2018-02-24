Regular Expression: A regular expression(regex) is special text string for describing a search pattern.

String.prototype.search: At What Index Is There a Match?
str.search(regex)
'abba'.search(/a/); //0

RegExp.prototype.exec: Capture Groups
var matchData = regex.exec(str);
If there was no match, matchData is null. Otherwise, matchData is a match result, an array with two additional properties:

//First Match
var regex = /a(b+)/;

undefined
regex.exec('_abbb_ab_');

(2) ["abbb", "bbb", index: 1, input: "_abbb_ab_"]0: "abbb"1: "bbb"index: 1input: "_abbb_ab_"length: 2__proto__: Array(0)


String.prototype.match: Capture Groups or Return All Matching Substrings
str.match(regex);

'hhhhdddhhh'.match(/d/)
["d", index: 4, input: "hhhhdddhhh"]


String.prototype.replace: Search and Replace
str.replace(search, replacement)
search
Either a string or a regular expression:

String: To be found literally in the input string. Be warned that only the first occurrence of a string is replaced. If you want to replace multiple occurrences, you must use a regular expression with a /g flag. This is unexpected and a major pitfall.
RegularExpression: To be matched against the input string. Warning: Use the global flag, otherwise only one attempt is made to match the regular expression.

replacement
Either a string or a function:

String: Describes how to replace what has been found.
Function: Computes a replacement and is given matching information via parameters.

//first h
'hhhhdddhhh'.replace(/h/, 'M');
"Mhhhdddhhh"

//all h
'hhhhdddhhh'.replace(/h/g, 'M');
"MMMMdddMMM"