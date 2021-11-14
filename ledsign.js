/*
 * Copyright (c) 2021 by Tim Kim (https://codepen.io/timkim/pen/EajvGw)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Modified by Anthony96922 for transit bus LED sign use on 11/4/21
 */

var SCROLLER_LENGTH = 5*18;
var HEIGHT = 7;
var theInput = $('#theInput');
var fps = 120;

var myMessage = textToLED('Transit Bus LED Sign Simulator');
var leftPointer = SCROLLER_LENGTH + 1;
var rightPointer = 0;
var furthestLeftPoint = 0 - myMessage.length;

theInput.change(function() {
	clearLights();
	myMessage = textToLED(this.value);
	furthestLeftPoint = 0 - myMessage.length;
	leftPointer = SCROLLER_LENGTH + 1;
});

function clearLights() {
	var lightsOn = $('.on');
	lightsOn.removeClass('on');
	lightsOn.addClass('off');
}

function setLight(row, col, state) {
	var theLight = $('.'+row+'_'+col);

	if (theLight.hasClass('on') && !state) {
		theLight.removeClass('on');
		theLight.addClass('off');
	} else if (theLight.hasClass('off') && state) {
		theLight.removeClass('off');
		theLight.addClass('on');
	}
}

function drawMessage(messageArray, leftPointer) {
	var messageLength = messageArray.length;
	var totalScrollLength = SCROLLER_LENGTH + messageLength;

	if (messageLength > 0) {
		for (var col = 0; col < messageLength; col++) {
			for (var row = 0; row < HEIGHT; row++) {
				var offsetCol = leftPointer + col;

				if (offsetCol < SCROLLER_LENGTH || offsetCol >= 0) {
					setLight(row, offsetCol, messageArray[col][row]);
				}
			}
		}
	}
}

function textToLED(theWord) {
	var theMessage = [];
	for (var i = 0; i < theWord.length; i++) {
		theMessage.push(charToLED(theWord.charAt(i)));
		theMessage.push(charToLED(0));
	}

	var flatten = [];
	flatten = flatten.concat.apply(flatten, theMessage);
	return flatten;
}

/*
 * How to create new glyphs
 *
    ,-- row (top)
 *  v
 * [0,0,0,0,0,0,0], <-- column (appears first when scrolling) -->
 * [0,0,0,0,0,0,0],
 * [0,0,0,0,0,0,0],
 * [0,0,0,0,0,0,0],
 * [0,0,0,0,0,0,0]
 */

function charToLED(theChar) {
	var theLed = [];
	switch(theChar) {
		case 'A':
			theLed = [
				[0,1,1,1,1,1,1],
				[1,0,0,1,0,0,0],
				[1,0,0,1,0,0,0],
				[1,0,0,1,0,0,0],
				[0,1,1,1,1,1,1]
			];
			break;
		case 'B':
			theLed = [
				[1,1,1,1,1,1,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[0,1,1,0,1,1,0]
			];
			break;
		case 'C':
			theLed = [
				[0,1,1,1,1,1,0],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[0,1,0,0,0,1,0]];
			break;
		case 'D':
			theLed = [
				[1,0,0,0,0,0,1],
				[1,1,1,1,1,1,1],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[0,1,1,1,1,1,0]
			];
			break;
		case 'E':
			theLed = [
				[1,1,1,1,1,1,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,0,0,0,1]
			];
			break;
		case 'F':
			theLed = [
				[1,1,1,1,1,1,1],
				[1,0,0,1,0,0,0],
				[1,0,0,1,0,0,0],
				[1,0,0,1,0,0,0],
				[1,0,0,0,0,0,0]
			];
			break;
		case 'G':
			theLed = [
				[0,1,1,1,1,1,0],
				[1,0,0,0,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,1,1,0]
			];
			break;
		case 'H':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,0,0,1,0,0,0],
				[0,0,0,1,0,0,0],
				[0,0,0,1,0,0,0],
				[1,1,1,1,1,1,1]
			];
			break;
		case 'I':
			theLed = [
				[0,0,0,0,0,0,0],
				[1,0,0,0,0,0,1],
				[1,1,1,1,1,1,1],
				[1,0,0,0,0,0,1],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'J':
			theLed = [
				[0,0,0,0,0,1,0],
				[0,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[1,1,1,1,1,1,0],
				[1,0,0,0,0,0,0]
			];
			break;
		case 'K':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,0,0,1,0,0,0],
				[0,0,1,0,1,0,0],
				[0,1,0,0,0,1,0],
				[1,0,0,0,0,0,1]
			];
			break;
		case 'L':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1]
			];
			break;
		case 'M':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,1,0,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,1,0,0,0,0,0],
				[1,1,1,1,1,1,1]
			];
			break;
		case 'N':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,1,0,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,0,1,0,0,0],
				[1,1,1,1,1,1,1]
			];
			break;
		case 'O':
			theLed = [
				[0,1,1,1,1,1,0],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[0,1,1,1,1,1,0]
			];
			break;
		case 'P':
			theLed = [
				[1,1,1,1,1,1,1],
				[1,0,0,1,0,0,0],
				[1,0,0,1,0,0,0],
				[1,0,0,1,0,0,0],
				[0,1,1,0,0,0,0]
			];
			break;
		case 'Q':
			theLed = [
				[0,1,1,1,1,1,0],
				[1,0,0,0,0,0,1],
				[1,0,0,0,1,0,1],
				[1,0,0,0,0,1,0],
				[0,1,1,1,1,0,1]
			];
			break;
		case 'R':
			theLed = [
				[1,1,1,1,1,1,1],
				[1,0,0,1,0,0,0],
				[1,0,0,1,1,0,0],
				[1,0,0,1,0,1,0],
				[0,1,1,0,0,0,1]
			];
			break;
		case 'S':
			theLed = [
				[0,1,0,0,0,1,0],
				[1,0,1,0,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,0,1,0,1],
				[0,1,0,0,0,1,0]
			];
			break;
		case 'T':
			theLed = [
				[1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0],
				[1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0]
			];
			break;
		case 'U':
			theLed = [
				[1,1,1,1,1,1,0],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[1,1,1,1,1,1,0]
			];
			break;
		case 'V':
			theLed = [
				[1,1,1,1,1,0,0],
				[0,0,0,0,0,1,0],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,1,0],
				[1,1,1,1,1,0,0]
			];
			break;
		case 'W':
			theLed = [
				[1,1,1,1,1,1,0],
				[0,0,0,0,0,0,1],
				[0,0,0,0,1,1,0],
				[0,0,0,0,0,0,1],
				[1,1,1,1,1,1,0]
			];
			break;
		case 'X':
			theLed = [
				[1,1,0,0,0,1,1],
				[0,0,1,0,1,0,0],
				[0,0,0,1,0,0,0],
				[0,0,1,0,1,0,0],
				[1,1,0,0,0,1,1]
			];
			break;
		case 'Y':
			theLed = [
				[1,1,0,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,0,1,1,1,1],
				[0,0,1,0,0,0,0],
				[1,1,0,0,0,0,0]
			];
			break;
		case 'Z':
			theLed = [
				[1,0,0,0,0,1,1],
				[1,0,0,0,1,0,1],
				[1,0,0,1,0,0,1],
				[1,0,1,0,0,0,1],
				[1,1,0,0,0,0,1]
			];
			break;
		case 'a':
			theLed = [
				[0,0,0,0,0,1,0],
				[0,0,1,0,1,0,1],
				[0,0,1,0,1,0,1],
				[0,0,1,0,1,0,1],
				[0,0,0,1,1,1,1]
			];
			break;
		case 'b':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,0,1,1,1,0]
			];
			break;
		case 'c':
			theLed = [
				[0,0,0,1,1,1,0],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,0,1,0,1,0]
			];
			break;
		case 'd':
			theLed = [
				[0,0,0,1,1,1,0],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[1,1,1,1,1,1,1]
			];
			break;
		case 'e':
			theLed = [
				[0,0,0,1,1,1,0],
				[0,0,1,0,1,0,1],
				[0,0,1,0,1,0,1],
				[0,0,1,0,1,0,1],
				[0,0,0,1,1,0,0]
			];
			break;
		case 'f':
			theLed = [
				[0,0,1,0,0,0,0],
				[0,1,1,1,1,1,1],
				[1,0,1,0,0,0,0],
				[1,0,1,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'g':
			theLed = [
				[0,0,0,1,1,1,0],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,1,0,1,0,1],
				[0,0,1,0,0,1,1]
			];
			break;
		case 'h':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,0,0,1,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,0,1,1,1,1]
			];
			break;
		case 'i':
			theLed = [
				[0,0,0,0,0,0,0],
				[0,0,1,0,0,0,1],
				[1,0,1,1,1,1,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'j':
			theLed = [
				[0,0,0,0,0,0,0],
				[0,0,1,0,0,0,1],
				[1,0,1,1,1,1,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'k':
			theLed = [
				[1,1,1,1,1,1,1],
				[0,0,0,0,1,0,0],
				[0,0,0,1,0,1,0],
				[0,0,1,0,0,0,1],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'l':
			theLed = [
				[0,0,0,0,0,0,0],
				[1,0,0,0,0,0,1],
				[1,1,1,1,1,1,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'm':
			theLed = [
				[0,0,1,1,1,1,1],
				[0,0,1,0,0,0,0],
				[0,0,0,1,1,1,1],
				[0,0,1,0,0,0,0],
				[0,0,0,1,1,1,1]
			];
			break;
		case 'n':
			theLed = [
				[0,0,1,1,1,1,1],
				[0,0,1,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,0,1,1,1,1]
			];
			break;
		case 'o':
			theLed = [
				[0,0,0,1,1,1,0],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,1],
				[0,0,0,1,1,1,0]
			];
			break;
		case 'p':
			theLed = [
				[0,0,1,1,1,1,1],
				[0,0,1,0,0,1,0],
				[0,0,1,0,0,1,0],
				[0,0,1,0,0,1,0],
				[0,0,0,1,1,0,0]
			];
			break;
		case 'q':
			theLed = [
				[0,0,0,1,1,0,0],
				[0,0,1,0,0,1,0],
				[0,0,1,0,0,1,0],
				[0,0,1,0,0,1,0],
				[0,0,1,1,1,1,1]
			];
			break;
		case 'r':
			theLed = [
				[0,0,1,1,1,1,1],
				[0,0,0,1,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,1,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case 's':
			theLed = [
				[0,0,0,1,0,0,1],
				[0,0,1,0,1,0,1],
				[0,0,1,0,1,0,1],
				[0,0,1,0,1,0,1],
				[0,0,1,0,0,1,0]
			];
			break;
		case 't':
			theLed = [
				[0,0,1,0,0,0,0],
				[1,1,1,1,1,1,0],
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case 'u':
			theLed = [
				[0,0,1,1,1,1,0],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,1,1,1,1,1]
			];
			break;
		case 'v':
			theLed = [
				[0,0,1,1,0,0,0],
				[0,0,0,0,1,1,0],
				[0,0,0,0,0,0,1],
				[0,0,0,0,1,1,0],
				[0,0,1,1,0,0,0]
			];
			break;
		case 'w':
			theLed = [
				[0,0,1,1,1,1,0],
				[0,0,0,0,0,0,1],
				[0,0,1,1,1,1,0],
				[0,0,0,0,0,0,1],
				[0,0,1,1,1,1,0]
			];
			break;
		case 'x':
			theLed = [
				[0,0,1,0,0,0,1],
				[0,0,0,1,0,1,0],
				[0,0,0,0,1,0,0],
				[0,0,0,1,0,1,0],
				[0,0,1,0,0,0,1]
			];
			break;
		case 'y':
			theLed = [
				[1,1,1,1,0,0,0],
				[0,0,0,0,1,0,1],
				[0,0,0,0,1,0,1],
				[0,0,0,0,1,0,1],
				[1,1,1,1,1,1,0]
			];
			break;
		case 'z':
			theLed = [
				[0,0,1,0,0,0,1],
				[0,0,1,0,0,1,1],
				[0,0,1,0,1,0,1],
				[0,0,1,1,0,0,1],
				[0,0,1,0,0,0,1]
			];
			break;
		case ',':
			theLed = [
				[0,0,0,0,0,0,0],
				[0,0,0,1,1,0,1],
				[0,0,0,1,1,1,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case '-':
			theLed = [
				[0,0,0,1,0,0,0],
				[0,0,0,1,0,0,0],
				[0,0,0,1,0,0,0],
				[0,0,0,1,0,0,0],
				[0,0,0,1,0,0,0]
			];
			break;
		case '_':
			theLed = [
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,1]
			];
			break;
		case ':':
			theLed = [
				[0,0,0,0,0,0,0],
				[0,1,1,0,1,1,0],
				[0,1,1,0,1,1,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case '&':
			theLed = [
				[0,1,1,0,1,1,0],
				[1,0,0,1,0,0,1],
				[0,1,1,0,1,0,1],
				[0,0,0,0,0,1,0],
				[0,0,0,0,1,0,1]
			];
			break;
		case '0':
			theLed = [
				[0,1,1,1,1,1,0],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[1,0,0,0,0,0,1],
				[0,1,1,1,1,1,0]
			];
			break;
		case '1':
			theLed = [
				[0,0,0,0,0,0,0],
				[0,1,0,0,0,0,1],
				[1,1,1,1,1,1,1],
				[0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0]
			];
			break;
		case '2':
			theLed = [
				[0,1,0,0,1,1,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[0,1,1,0,0,0,1]
			];
			break;
		case '3':
			theLed = [
				[0,1,0,0,0,1,0],
				[1,0,0,0,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[0,1,1,0,1,1,0]
			];
			break;
		case '4':
			theLed = [
				[0,0,0,1,1,0,0],
				[0,0,1,0,1,0,0],
				[0,1,0,0,1,0,0],
				[1,1,1,1,1,1,1],
				[0,0,0,0,1,0,0]
			];
			break;
		case '5':
			theLed = [
				[1,1,1,1,0,1,0],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,0,1,1,0]
			];
			break;
		case '6':
			theLed = [
				[0,0,1,1,1,1,0],
				[0,1,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[0,0,0,0,1,1,0]
			];
			break;
		case '7':
			theLed = [
				[1,0,0,0,0,0,0],
				[1,0,0,0,1,1,1],
				[1,0,0,1,0,0,0],
				[1,0,1,0,0,0,0],
				[1,1,0,0,0,0,0]
			];
			break;
		case '8':
			theLed = [
				[0,1,1,0,1,1,0],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[0,1,1,0,1,1,0]
			];
			break;
		case '9':
			theLed = [
				[0,1,1,0,0,0,0],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,0,1],
				[1,0,0,1,0,1,0],
				[0,1,1,1,1,0,0]
			];
			break;
		case ' ':
			theLed = [
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0]
			];
			break;
		case 0:
			theLed = [
				[0,0,0,0,0,0,0]
			];
			break;
	}

	return theLed;
}


function draw() {
	setTimeout(function() {
		requestAnimationFrame(draw);
		if (leftPointer == furthestLeftPoint) {
			leftPointer = SCROLLER_LENGTH + 1;
		}

		drawMessage(myMessage, leftPointer);
		leftPointer--;
	}, 1000 / fps);
}

draw();
