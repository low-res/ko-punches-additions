define([], function(  ) {

    /**
     *
     * @param textbooklet
     * @constructor
     */
    function Translator( textbooklet ) {
        this.textbooklet = textbooklet;
        this.locale = "";
    }

    Translator.prototype.setBooklet = function( b ) {
        this.textbooklet = b;
    }

    Translator.prototype.setLocale = function( l ) {
        this.locale = l;
    }

    Translator.prototype.getLocale = function( ) {
        return this.locale;
    }

    /**
     * translate
     * return the textstring of the given id.
     * if nothing is found the id itself is returned
     * @param labelId
     * @returns {*}
     */
    Translator.prototype.translate = function( labelId ) {
        var result  = labelId;
        var bo      = this.locale != "" ? this.textbooklet[this.locale] : this.textbooklet;
        if(!bo) {
            console.warn( "Locale "+this.locale+" is not defined in textbooklet" );
            return result;
        }

        if( bo[labelId] ){
            result = bo[labelId];
        } else {
            // console.warn( "No text found for "+labelId );
        }
        return result;
    }

    return Translator;

});