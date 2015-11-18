
define([
    "translator"
], function(Translator) {

    var translator;

    beforeEach(function() {
        translator =  new Translator();
        translator.setBooklet( {
            "de": {
                "label1":"Text für Label1",
                "label2":"Text for {$someVariable}"
            },
            "en": {
                "label1":"Text for label1",
                "label2":"Text for {$someVariable}"
            }
        } );
        translator.setLocale("de");
    });

    afterEach(function() {

    });

    describe('Translator', function() {

        it('should translate a given label', function(){
            expect(translator.translate("label1")).toEqual("Text für Label1");
        });

        it('should return the label name if the label is not defined', function(){
            expect(translator.translate("unknownlabel")).toEqual("unknownlabel");
        });

        it('should handle differend locals', function(){
            translator.setLocale("en");
            expect(translator.translate("label1")).toEqual("Text for label1");
        });

        it('should set and get Variables', function(){
            translator.setVariable("someVariable","Variable Value");
            expect(translator.getVariable("someVariable")).toEqual("Variable Value");
        });

        it('should find variables inside texts', function(){
            var input = "This is a {$var3} with some {$var2} and another {$var1} in this {$var3}. Another {$var4} was not found.";
            translator.setVariable("var3","Text");
            translator.setVariable("var2","Variables");
            translator.setVariable("var1","One");
            var result = translator._replaceVariables( input );
            expect(result).toEqual("This is a Text with some Variables and another One in this Text. Another {$var4} was not found.");
        });

        it('should insert the variable values on translate', function(){
            translator.setVariable("someVariable","Variable Value");
            expect(translator.translate("label2")).toEqual("Text for Variable Value");
        });

    });

});
