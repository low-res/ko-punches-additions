define(
    [
        'low-res/translator',
        'low-res/formater',
        'knockout',
        './vendor/knockout.punches.min'
    ],
    function ( Translator, Formater, ko) {

        var translator =  new Translator();

        return {
            init : function init( ko, textbooklet ) {
                ko.punches.enableAll();

                // knockout punches custom filter: translation
                translator.setBooklet(textbooklet);
                ko.filters.translate = function (value) {
                    return translator.translate(ko.unwrap(value));
                };

                // knockout punches custom filter: formater
                ko.filters.format = function(value, formatType) {
                    var formatedValue = Formater.formatValueToType(ko.unwrap(value), formatType);
                    return formatedValue;
                };
            },

            translate: function( label, values ){
                return translator.translate(label, values);
            },

            format: function(value, formatType){
                var formatedValue = Formater.formatValueToType(ko.unwrap(value), formatType);
                return formatedValue;
            },

            setLocale : function(locale){
                translator.setLocale(locale);
                Formater.setLocale(locale);
            },

            getLocale : function(){
                return translator.getLocale();
            },

            setVariable : function(key, value){
                translator.setVariable(key, value);
            },

            getVariable : function(key){
                return translator.getVariable(key);
            },

            addCustomFormat : function ( formatId, processorFunction ) {
                Formater.addCustomFormat( formatId, processorFunction );
            }
        }
    }
);