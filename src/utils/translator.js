define([], function(  ) {

    var p = Translator.prototype;

    /**
     * Translator
     * super simple translation handling. Manages strings mapped by labels
     * for easy translations.
     *
     * @param textbooklet
     * @constructor
     */
    function Translator( textbooklet ) {
        this.textbooklet = textbooklet;
        this.locale = "";
        this.variables = {};
        this.variableRegex = /(\{\$[a-zA-Z0-9]+\})/g;
    }

    p.setBooklet = function( b ) {
        this.textbooklet = b;
    }

    p.setLocale = function( l ) {
        this.locale = l;
    }

    p.getLocale = function( ) {
        return this.locale;
    }

    /**
     * define a variable that will be replaced with value
     * if it occurs in the text. In Text the variable is
     * marked like: {$key}.
     *
     * @param key
     * @param value
     */
    p.setVariable = function( key, value ) {
        this.variables[key] = value;
    }

    /**
     * get the value of a variable.
     * @param key
     * @returns {*}
     */
    p.getVariable = function( key ) {
        return this.variables[key];
    }

    p._replaceVariables = function( inputTxt ) {
        var result = inputTxt;
        var variableKey = "";
        var m = inputTxt.match(this.variableRegex);
        if(m) {
            for (var i = 0, len = m.length; i < len; i++) {
                variableKey = m[i].substring(2, m[i].length-1);
                var value = this.getVariable(variableKey);
                if( value ) {
                    result = result.replace(m[i], value);
                } else {
                    console.warn("variable with key "+variableKey+" was not found");
                }
            }
        }
        return result;
    }

    /**
     * translate
     * return the textstring of the given id.
     * if nothing is found the id itself is returned
     * @param labelId
     * @returns {*}
     */
    p.translate = function( labelId ) {
        var result  = labelId;
        var bo      = this.locale != "" ? this.textbooklet[this.locale] : this.textbooklet;
        if(!bo) {
            console.warn( "Locale "+this.locale+" is not defined in textbooklet" );
            return labelId;
        }

        if( bo[labelId] ){
            result = bo[labelId];
            result = this._replaceVariables(result);
        } else {
            // console.warn( "No text found for "+labelId );
        }
        return result;
    }

    return Translator;

});