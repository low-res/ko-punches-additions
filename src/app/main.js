define(
    [
        '../utils/translator.js',
        '../utils/formater.js',
        'knockout',
        'knockout.punches'
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

            translate: function( label ){
                return translator.translate(label);
            },

            format: function(value, formatType){
                var formatedValue = Formater.formatValueToType(ko.unwrap(value), formatType);
                return formatedValue;
            },

            setLocale : function(locale){
                translator.setLocale(locale);
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

            setDateFormat : function(formatStr){
                Formater.setDateFormat(formatStr);
            }
        }
    }
);