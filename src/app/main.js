define(
    [
        'translator',
        'formater',
        'knockout.punches'
    ],
    function ( Translator, Formater) {

        return {

            init : function init( ko, textbooklet ) {
                ko.punches.enableAll();

                // knockout punches custom filter: translation
                var translator = new Translator(textbooklet);
                ko.filters.translate = function (value) {
                    return translator.translate(ko.unwrap(value));
                };

                // knockout punches custom filter: formater
                ko.filters.format = function(value, formatType) {
                    var formatedValue = Formater.formatValueToType(ko.unwrap(value), formatType);
                    return formatedValue;
                };
            }
        }
    }
);