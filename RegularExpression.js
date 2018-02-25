Regular Expression: A regular expression(regex) is special text string for describing a search pattern.

Symbols:

. Matches any single character, except for line break.
* Matches any preceding expression 0 or more times.
+ Matches any preceding expression 1 or more times.
? Preceding expression optional(Matches 0 or 1 times).
^ Matches the beginning of the string.
$ Matches the end of the string.

Character-groups:

\d      Matches any single digit character.
\w 		Matches any word character.
[XYZ]	Character Set:  Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z]
[XYZ]+	Matches one or more of any of the characters in the set.
[^A-Z]  Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.



Flags:

There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.
g — Global search
i — case insensitive search
Advanced
(x) — Capturing Parenthesis: Matches x and remembers it so we can use it later.
(?:x) — Non-capturing Parenthesis: Matches x and does not remembers it.
x(?=y) — Lookahead: Matches x only if it is followed by y.



example

function toHash(str) {
  return str.replace(/^[a-z]/i, (u) => '#' + u.toLowerCase())
  			.replace(/ [a-z]/g, (u) => u.toUpperCase())
  			.replace(/ /g, '')
  			.replace(/\.$/, '');
}
toHash('Turn this sentence into a hashtag.')



function removeCc(str){
  return str.replace(/([A-Z])/g, ' $1');  
}
function lowerCase(str){
  return str.replace(/[A-Z]/g, u => u.toLowerCase());
}
function capitalize(str){
  return str.replace(/^[a-z]/, u => u.toUpperCase());
}
capitalize(lowerCase(removeCc('camelCaseIsFun')));
// "Camel case is fun"



Output: "#turnThisSentenceIntoAHashtag"



























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