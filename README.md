# ko-punches-additions
Some Additions to the faboulous knockout.punches extension

Adds two new filters to ko.punches:

- format
- translate

# Usage

## Init
	define([
		"knockout",
		"ko-punches-additions",
		"knockout-punches"
	], function(ko, kopa) {
		var textbooklet = {};
		kopa.init( ko, textbooklet );
	
	});

## In HTML markup
	
Format
	
	<span>{{ 1000 | format:'float' }}</span>

Translate

	<span>{{ 'soemtextlabel' | translate }}</span>
