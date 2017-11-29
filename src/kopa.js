define(
    [
        'low-res/translator',
        'low-res/formater',
        'knockout',
        './vendor/knockout.punches.min'
    ],
    function (Translator, Formater, ko) {

        var p = Kopa.prototype;
        var instance = null;

        function Kopa() {
            this.translator = new Translator();
            window.kopa = this;
        }


        p.init = function init(textbooklet) {
            var self = this;
            ko.punches.enableAll();

            if(textbooklet) this.setBooklet(textbooklet);

            // knockout punches custom filter: translation
            if(!ko.filters.translate) {
                ko.filters.translate = function (value, variables) {
                    return self.translator.translate(ko.unwrap(value), variables);
                };
            }

            // knockout punches custom filter: formater
            if(!ko.filters.format) {
                ko.filters.format = function (value, formatType) {
                    var formatedValue = Formater.formatValueToType(ko.unwrap(value), formatType);
                    return formatedValue;
                };
            }
        }

        p.translate = function (label, values) {
            return this.translator.translate(label, values);
        }

        p.format = function (value, formatType) {
            var formatedValue = Formater.formatValueToType(ko.unwrap(value), formatType);
            return formatedValue;
        }

        p.setBooklet = function ( textbooklet ) {
            this.translator.setBooklet(textbooklet);
        }

        p.setLocale = function (locale) {
            this.translator.setLocale(locale);
            Formater.setLocale(locale);
        }

        p.getLocale = function () {
            return this.translator.getLocale();
        }

        p.setVariable = function (key, value) {
            this.translator.setVariable(key, value);
        }

        p.getVariable = function (key) {
            return this.translator.getVariable(key);
        }

        p.addCustomFormat = function (formatId, processorFunction) {
            Formater.addCustomFormat(formatId, processorFunction);
        }

        Kopa.getInstance = function () {
            if (instance == null) instance = new Kopa();
            return instance;
        }

        return Kopa.getInstance();
    }
);