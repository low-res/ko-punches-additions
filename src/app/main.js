define(['knockout',
        './utils/translator',
        './utils/formater',
        'knockout-punches'
    ],
    function (ko, Translator, Formater) {

        return {

            init : function init( textbooklet ) {
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