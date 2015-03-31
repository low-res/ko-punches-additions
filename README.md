# ko-punches-additions
Some Additions to the faboulous knockout.punches extension

Adds two new filters to ko.punches:

- format

and 

-translate

# Usage
define([
    "knockout",
    "ko-punches-additions",
    "knockout-punches"
], function(ko, kopa) {
	var textbooklet = {};
	kopa.init( ko, textbooklet );

});

<span>{{ 1000 | format:'float' }}</span>

<span>{{ 'soemtextlabel' | translate }}</span>
