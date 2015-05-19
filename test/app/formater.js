
define([
    "formater"
], function(Formater) {

    var o, id;

    beforeEach(function() {

    });

    afterEach(function() {

    });

    describe('Formater', function() {

        it('should format values to float', function() {
            var f = Formater.formatValueToType(1000, "float");
            expect(f).toEqual("1,000.00");
        });

        it('should format non numeric values to float as 0.00', function() {
            var f = Formater.formatValueToType("abc", "float");
            expect(f).toEqual("0.00");
        });

        it('should format values to float with precision 1', function() {
            var f = Formater.formatValueToType(1000, "float-1");
            expect(f).toEqual("1,000.0");
        });

        it('should format to float or emtpy string with float-or-empty', function(){
            var f = Formater.formatValueToType( 0.0, "float-or-empty");
            expect(f).toEqual("");

            f = Formater.formatValueToType( 1, "float-or-empty");
            expect(f).toEqual("1.00");
        });

        it('test float-or-emptysign', function(){
            var f = Formater.formatValueToType( 0, "float-or-emptysign");
            expect(f).toEqual("-,--");
        });

        it('test int', function(){
            var f = Formater.formatValueToType( 123.456, "int");
            expect(f).toEqual("123");
        });

        it('test percent', function(){
            var f = Formater.formatValueToType( 12, "percent");
            expect(f).toEqual("12.0 %");
        });

        it('test percent-ceil', function(){
            var f = Formater.formatValueToType( 34, "percent-ceil");
            expect(f).toEqual("34 %");
        });

        it('test percent-or-empty', function(){
            var f = Formater.formatValueToType( 0.0, "percent-or-empty");
            expect(f).toEqual("");

            var f = Formater.formatValueToType( 12.3, "percent-or-empty");
            expect(f).toEqual("12.3 %");
        });

        it('test time', function(){
            var f = Formater.formatValueToType( "12:34", "time");
            expect(f).toEqual("12:34");
        });

        it('test date', function(){
            var f = Formater.formatValueToType( "2015-01-01", "date");
            expect(f).toEqual("01.01.2015");

            f = Formater.formatValueToType( "2015-10-05 12:00:00", "date");
            expect(f).toEqual("05.10.2015");
        });

        it('test date-db', function(){
            var f = Formater.formatValueToType( new Date("2015-09-14"), "date-db");
            expect(f).toEqual("14.09.2015");
        });

        it('test euro', function(){
            var f = Formater.formatValueToType( 1000, "euro");
            expect(f).toEqual("€ 1,000.00");
        });

        it('test euro-or-empty', function(){
            var f = Formater.formatValueToType( 1000, "euro-or-empty");
            expect(f).toEqual("€ 1,000.00");

            f = Formater.formatValueToType( 0, "euro-or-empty");
            expect(f).toEqual("");
        });

    });

});
