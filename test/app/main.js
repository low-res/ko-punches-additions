
define([
    "knockout",
    "app/main"
], function(ko, kopa) {

    var o, id;

    beforeEach(function() {

    });

    afterEach(function() {

    });

    describe('Knockout punches additions', function() {

        it('should be inited', function() {
            kopa.init( ko, {label:"Text1"} );
            expect(true).toBeTruthy();
        });

        it('should expose a translate function', function() {
            kopa.init( ko, {label:"Text1"} );
            var r = kopa.translate("label");
            expect(r).toEqual("Text1");
        });

        it('should handle locales', function(){
            var booklet = {
                de: {label:"Feld1"},
                en: {label:"Field1"}
            }
            kopa.init( ko, booklet );
            kopa.setLocale("de");
            var r = kopa.translate("label");
            expect(r).toEqual("Feld1");

            kopa.setLocale("en");
            var r = kopa.translate("label");
            expect(r).toEqual("Field1");
        });

        it('should format numbers', function(){
            kopa.init( ko );
            var f = kopa.format(1000,'float');
            expect(f).toEqual("1,000.00");
        });

    });

});
