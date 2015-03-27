define([], function(  ) {

    /**
     *
     * @param textbooklet
     * @constructor
     */
    function Translator( textbooklet ) {
        this.textbooklet = textbooklet;
    }

    /**
     * translate
     * return the textstring of the given id.
     * if nothing is found the id itself is returned
     * @param labelId
     * @returns {*}
     */
    Translator.prototype.translate = function( labelId ) {
        var result = labelId;
        if( this.textbooklet[labelId] ){
            result = this.textbooklet[labelId]
        } else {
            console.warn( "No text found for "+labelId );
        }
        return result;
    }


    return Translator;

});