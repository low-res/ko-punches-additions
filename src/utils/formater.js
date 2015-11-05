define([
    "numeral",
    "moment"
], function( numeral ) {
    var _private = {
        dateFormat : "DD.MM.YYYY",

        /**
         * getFormatType
         * determines the format type of the given field.
         *
         * @param $element - jQuery element
         */
        getFormatType: function( $element ) {
            var formatType	= "";

            // if the element has a class of type "format-<type>"
            // we use this as format type
            var classList = $element.attr('class');

            if( classList ) {
                classList = classList.split(/\s+/);
                $.each( classList, function(index, item){
                    if (item.indexOf("format-") >= 0){
                        formatType = item.split("format-")[1];
                    }
                });
            }
            return formatType;
        }

    }

    var publicAPI = {
        formatValue : function( value, $element ) {
            var formatType = _private.getFormatType($element);
            return this.formatValueToType(value, formatType);
        },


        formatValueToType : function( value, formatType ) {
            //console.log(">>>> <<<< formatValue >>>>>>> <<<<",arguments );
            var formatedValue = value;
            if( value != undefined && value.toString()!="" ) {
                //console.log(value+" : type : "+formatType);
                switch( formatType ) {
                    case "float":
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value ).format('0,0.00');
                        break;

                    case "float-1":
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value ).format('0,0.0');
                        break;

                    case "float-or-empty": // format like float, but set to empty if value is zero.
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value ).format('0,0.00');
                        if( parseFloat( value ) == 0.0 ) formatedValue = "";
                        break;

                    case "float-or-emptysign": // format like float, but set to -,-- if value is zero.
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value ).format('0,0.00');
                        if( parseFloat( value ) == 0.0 ) formatedValue = "-,--";
                        break;

                    case "int":
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value ).format('0,0');
                        break;

                    case "percent":
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value/100.0 ).format('0.0 %');
                        break;

                    case "percent-ceil":
                        value = this.stripCommaFromFloat( value );
                        formatedValue = numeral( value/100.0 ).format('0 %');
                        break;

                    case "percent-or-empty":
                        value = this.stripCommaFromFloat( value );
                        if( parseFloat( value ) == 0.0 ) formatedValue = "";
                        else formatedValue = numeral( value/100.0 ).format('0.0 %');
                        break;

                    case "time":
                        formatedValue = this.formatTime(value);
                        if(formatedValue == "00:00") formatedValue = "";
                        break;

                    case "date":
                        formatedValue = moment(value).format(_private.dateFormat); //this.formatDbDateToGermanDate(value);
                        break;

                    case "date-db":
                        formatedValue = moment(value).format('DD.MM.YYYY'); //this.formatDateObjectForDb(value);
                        break;

                    case "euro":
                        formatedValue = "€ "+this.formatValueToType(value,"float");
                        break;

                    case "euro-or-empty":
                        var e = this.formatValueToType(value,"float-or-empty");
                        formatedValue = e!="" ? "€ "+e : e;
                        break;

                    case "":
                        formatedValue = value;
                        break;

                    default:
                        console.log("unknown format type : "+formatType+". In element:");
                }
            }
//			console.log("formatedValue :: "+formatedValue);
            return formatedValue;
        },


        setDateFormat : function( dateFormat ) {
            _private.dateFormat = dateFormat;
        },

        /**
         * formatFloat
         * formats a given string to a number in the form 0.00
         * @param numberStr
         * @return {String}
         */
        formatFloat : function( numberStr ) {
            if( numberStr ) {
                numberStr = numberStr.toString();
                if( numberStr.indexOf(',') > -1 && numberStr.indexOf(".") == -1) numberStr = numberStr.replace(',','.'); // format numbers with single comma like 0,5 to 0.5
                var num = numeral().unformat(numberStr);
                // console.log("Formater unformat :: "+numberStr+" => "+num);
                return parseFloat(num).toFixed(2);
            } else {
                return 0;
            }
        },


        stripCommaFromFloat : function( numberStr ) {
            numberStr = numberStr.toString();
            if( numberStr.indexOf(',') > -1 && numberStr.indexOf(".") == -1) numberStr = numberStr.replace(',','.'); // format numbers with single comma like 0,5 to 0.5
            return numberStr;
        },


        /**
         * formatTime
         * formats a given string to a time string in the form 00:00
         * @param timeStr
         */
        formatTime : function( timeStr ){
            var parts = timeStr.split('');
            if( parts.length == 1 ) parts.unshift(0); // insert leading 0 if only a single digit was entered
            if( parts.length < 4 ){
                for(var i = parts.length; i < 4; i++){ parts.push(0); } // fill rest with zeros
            }
            var retValue = "";
            for(var i = 0; i < parts.length; i++) {
                var nextValue = parts[i];
                if(i==2 && nextValue != ":") retValue = retValue + ":";
                retValue = retValue + nextValue;
            }
            return retValue;
        },


        /**
         * extractDateFromPHPdate
         * when serialising entities in php and sending via json
         * they have the format "2012-11-15T00:00:00+0100".
         * This method extracts the date part and returns as string
         *
         * @param dateStr
         */
        extractDateFromPHPdate : function( dateStr ){
            dateStr = dateStr || "";
            var parts = dateStr.split("T");
            return parts[0];
        },


        extractTimeFromPHPdate : function( dateStr ) {
            if( dateStr ){
                var parts = dateStr.split("T");
                var tParts = parts[1].split(':');
                return tParts[0]+":"+tParts[1];
            } else {
                return dateStr;
            }

        },


        formatGermanDateToDbDate : function( germanDate ){
            var result = germanDate;
            var parts = germanDate.split('.');
            if( parts.length == 3 ){
                result = parts[2]+"-"+parts[1]+"-"+parts[0];
            }
            return result;
        },


        formatDbDateToGermanDate : function( germanDate ){
            var result = germanDate;
            var parts = germanDate.split('-');
            if( parts.length == 3 ) {
                var dayParts = parts[2].split(" "); // strip time string if present after day
                result = dayParts[0]+"."+parts[1]+"."+parts[0];
            }
            return result;
        },


        formatDateObjectForDb : function( dateObj ) {
            if( dateObj instanceof Date){
                var curr_date = dateObj.getDate() < 10 ? "0"+dateObj.getDate() : dateObj.getDate();
                var curr_month = dateObj.getMonth()+1 < 10 ? "0"+(dateObj.getMonth()+1) : dateObj.getMonth()+1;
                var curr_year = dateObj.getFullYear();
                return curr_date+"."+curr_month+"."+curr_year;
            } else {
                return dateObj;
            }
        }
    };

    return publicAPI;
});