
define([
    "knockout",
    "app/dist"
], function(ko, kopa) {

    var o, id;

    beforeEach(function() {

    });

    afterEach(function() {

    });

    describe('Knockout punches additions', function() {

        it('should be inited', function() {
            kopa.init( ko );
            expect(true).toBeTruthy();
        });

    });

});
