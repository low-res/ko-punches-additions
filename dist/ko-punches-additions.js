/*!
 * Knockout Punches Additions
 * @version v0.1
 * @link https://github.com/low-res/ko-punches-additions
 * @author we.byte GmbH - http://www.webyte.org
 */

define("translator",[],function(){function e(e){this.textbooklet=e,this.locale=""}return e.prototype.setBooklet=function(e){this.textbooklet=e},e.prototype.setLocale=function(e){this.locale=e},e.prototype.getLocale=function(){return this.locale},e.prototype.translate=function(e){var t=e,n=""!=this.locale?this.textbooklet[this.locale]:this.textbooklet;return n?(n[e]&&(t=n[e]),t):(console.warn("Locale "+this.locale+" is not defined in textbooklet"),t)},e}),/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
function(){function e(e){this._value=e}function t(e,t,n,r){var a,i,o=Math.pow(10,t);return i=(n(e*o)/o).toFixed(t),r&&(a=new RegExp("0{1,"+r+"}$"),i=i.replace(a,"")),i}function n(e,t,n){var r;return r=t.indexOf("$")>-1?a(e,t,n):t.indexOf("%")>-1?i(e,t,n):t.indexOf(":")>-1?o(e,t):u(e._value,t,n)}function r(e,t){var n,r,a,i,o,u=t,l=["KB","MB","GB","TB","PB","EB","ZB","YB"],c=!1;if(t.indexOf(":")>-1)e._value=s(t);else if(t===g)e._value=0;else{for("."!==m[p].delimiters.decimal&&(t=t.replace(/\./g,"").replace(m[p].delimiters.decimal,".")),n=new RegExp("[^a-zA-Z]"+m[p].abbreviations.thousand+"(?:\\)|(\\"+m[p].currency.symbol+")?(?:\\))?)?$"),r=new RegExp("[^a-zA-Z]"+m[p].abbreviations.million+"(?:\\)|(\\"+m[p].currency.symbol+")?(?:\\))?)?$"),a=new RegExp("[^a-zA-Z]"+m[p].abbreviations.billion+"(?:\\)|(\\"+m[p].currency.symbol+")?(?:\\))?)?$"),i=new RegExp("[^a-zA-Z]"+m[p].abbreviations.trillion+"(?:\\)|(\\"+m[p].currency.symbol+")?(?:\\))?)?$"),o=0;o<=l.length&&!(c=t.indexOf(l[o])>-1?Math.pow(1024,o+1):!1);o++);e._value=(c?c:1)*(u.match(n)?Math.pow(10,3):1)*(u.match(r)?Math.pow(10,6):1)*(u.match(a)?Math.pow(10,9):1)*(u.match(i)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=c?Math.ceil(e._value):e._value}return e._value}function a(e,t,n){var r,a,i=t.indexOf("$"),o=t.indexOf("("),s=t.indexOf("-"),l="";return t.indexOf(" $")>-1?(l=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(l=" ",t=t.replace("$ ","")):t=t.replace("$",""),a=u(e._value,t,n),1>=i?a.indexOf("(")>-1||a.indexOf("-")>-1?(a=a.split(""),r=1,(o>i||s>i)&&(r=0),a.splice(r,0,m[p].currency.symbol+l),a=a.join("")):a=m[p].currency.symbol+l+a:a.indexOf(")")>-1?(a=a.split(""),a.splice(-1,0,l+m[p].currency.symbol),a=a.join("")):a=a+l+m[p].currency.symbol,a}function i(e,t,n){var r,a="",i=100*e._value;return t.indexOf(" %")>-1?(a=" ",t=t.replace(" %","")):t=t.replace("%",""),r=u(i,t,n),r.indexOf(")")>-1?(r=r.split(""),r.splice(-1,0,a+"%"),r=r.join("")):r=r+a+"%",r}function o(e){var t=Math.floor(e._value/60/60),n=Math.floor((e._value-60*t*60)/60),r=Math.round(e._value-60*t*60-60*n);return t+":"+(10>n?"0"+n:n)+":"+(10>r?"0"+r:r)}function s(e){var t=e.split(":"),n=0;return 3===t.length?(n+=60*Number(t[0])*60,n+=60*Number(t[1]),n+=Number(t[2])):2===t.length&&(n+=60*Number(t[0]),n+=Number(t[1])),Number(n)}function u(e,n,r){var a,i,o,s,u,l,c=!1,d=!1,f=!1,h="",y=!1,v=!1,b=!1,_=!1,M=!1,D="",w="",x=Math.abs(e),T=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],k="",F=!1;if(0===e&&null!==g)return g;if(n.indexOf("(")>-1?(c=!0,n=n.slice(1,-1)):n.indexOf("+")>-1&&(d=!0,n=n.replace(/\+/g,"")),n.indexOf("a")>-1&&(y=n.indexOf("aK")>=0,v=n.indexOf("aM")>=0,b=n.indexOf("aB")>=0,_=n.indexOf("aT")>=0,M=y||v||b||_,n.indexOf(" a")>-1?(h=" ",n=n.replace(" a","")):n=n.replace("a",""),x>=Math.pow(10,12)&&!M||_?(h+=m[p].abbreviations.trillion,e/=Math.pow(10,12)):x<Math.pow(10,12)&&x>=Math.pow(10,9)&&!M||b?(h+=m[p].abbreviations.billion,e/=Math.pow(10,9)):x<Math.pow(10,9)&&x>=Math.pow(10,6)&&!M||v?(h+=m[p].abbreviations.million,e/=Math.pow(10,6)):(x<Math.pow(10,6)&&x>=Math.pow(10,3)&&!M||y)&&(h+=m[p].abbreviations.thousand,e/=Math.pow(10,3))),n.indexOf("b")>-1)for(n.indexOf(" b")>-1?(D=" ",n=n.replace(" b","")):n=n.replace("b",""),o=0;o<=T.length;o++)if(a=Math.pow(1024,o),i=Math.pow(1024,o+1),e>=a&&i>e){D+=T[o],a>0&&(e/=a);break}return n.indexOf("o")>-1&&(n.indexOf(" o")>-1?(w=" ",n=n.replace(" o","")):n=n.replace("o",""),w+=m[p].ordinal(e)),n.indexOf("[.]")>-1&&(f=!0,n=n.replace("[.]",".")),s=e.toString().split(".")[0],u=n.split(".")[1],l=n.indexOf(","),u?(u.indexOf("[")>-1?(u=u.replace("]",""),u=u.split("["),k=t(e,u[0].length+u[1].length,r,u[1].length)):k=t(e,u.length,r),s=k.split(".")[0],k=k.split(".")[1].length?m[p].delimiters.decimal+k.split(".")[1]:"",f&&0===Number(k.slice(1))&&(k="")):s=t(e,null,r),s.indexOf("-")>-1&&(s=s.slice(1),F=!0),l>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m[p].delimiters.thousands)),0===n.indexOf(".")&&(s=""),(c&&F?"(":"")+(!c&&F?"-":"")+(!F&&d?"+":"")+s+k+(w?w:"")+(h?h:"")+(D?D:"")+(c&&F?")":"")}function l(e,t){m[e]=t}function c(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)}function d(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var n=c(e),r=c(t);return n>r?n:r},-(1/0))}var f,h="1.5.3",m={},p="en",g=null,y="0,0",v="undefined"!=typeof module&&module.exports;f=function(t){return f.isNumeral(t)?t=t.value():0===t||"undefined"==typeof t?t=0:Number(t)||(t=f.fn.unformat(t)),new e(Number(t))},f.version=h,f.isNumeral=function(t){return t instanceof e},f.language=function(e,t){if(!e)return p;if(e&&!t){if(!m[e])throw new Error("Unknown language : "+e);p=e}return(t||!m[e])&&l(e,t),f},f.languageData=function(e){if(!e)return m[p];if(!m[e])throw new Error("Unknown language : "+e);return m[e]},f.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),f.zeroFormat=function(e){g="string"==typeof e?e:null},f.defaultFormat=function(e){y="string"==typeof e?e:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(e,t){if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,r,a=this.length>>>0,i=!1;for(1<arguments.length&&(r=t,i=!0),n=0;a>n;++n)this.hasOwnProperty(n)&&(i?r=e(r,this[n],n,this):(r=this[n],i=!0));if(!i)throw new TypeError("Reduce of empty array with no initial value");return r}),f.fn=e.prototype={clone:function(){return f(this)},format:function(e,t){return n(this,e?e:y,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:r(this,e?e:y)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){function t(e,t){return e+n*t}var n=d.call(null,this._value,e);return this._value=[this._value,e].reduce(t,0)/n,this},subtract:function(e){function t(e,t){return e-n*t}var n=d.call(null,this._value,e);return this._value=[e].reduce(t,this._value*n)/n,this},multiply:function(e){function t(e,t){var n=d(e,t);return e*n*t*n/(n*n)}return this._value=[this._value,e].reduce(t,1),this},divide:function(e){function t(e,t){var n=d(e,t);return e*n/(t*n)}return this._value=[this._value,e].reduce(t),this},difference:function(e){return Math.abs(f(this._value).subtract(e).value())}},v&&(module.exports=f),"undefined"==typeof ender&&(this.numeral=f),"function"==typeof define&&define.amd&&define("numeral",[],function(){return f})}.call(this),function(e){function t(e,t,n,r){var a=n.lang();return a[e].call?a[e](n,r):a[e][t]}function n(e,t){return function(n){return s(e.call(this,n),t)}}function r(e){return function(t){var n=e.call(this,t);return n+this.lang().ordinal(n)}}function a(e,t,n){this._d=e,this._isUTC=!!t,this._a=e._a||null,this._lang=n||!1}function i(e){var t=this._data={},n=e.years||e.y||0,r=e.months||e.M||0,a=e.weeks||e.w||0,i=e.days||e.d||0,s=e.hours||e.h||0,u=e.minutes||e.m||0,l=e.seconds||e.s||0,c=e.milliseconds||e.ms||0;this._milliseconds=c+1e3*l+6e4*u+36e5*s,this._days=i+7*a,this._months=r+12*n,t.milliseconds=c%1e3,l+=o(c/1e3),t.seconds=l%60,u+=o(l/60),t.minutes=u%60,s+=o(u/60),t.hours=s%24,i+=o(s/24),i+=7*a,t.days=i%30,r+=o(i/30),t.months=r%12,n+=o(r/12),t.years=n,this._lang=!1}function o(e){return 0>e?Math.ceil(e):Math.floor(e)}function s(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}function u(e,t,n){var r,a=t._milliseconds,i=t._days,o=t._months;a&&e._d.setTime(+e+a*n),i&&e.date(e.date()+i*n),o&&(r=e.date(),e.date(1).month(e.month()+o*n).date(Math.min(r,e.daysInMonth())))}function l(e){return"[object Array]"===Object.prototype.toString.call(e)}function c(e,t){var n,r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),i=0;for(n=0;r>n;n++)~~e[n]!==~~t[n]&&i++;return i+a}function d(e,t,n,r){var a,i,o=[];for(a=0;7>a;a++)o[a]=e[a]=null==e[a]?2===a?1:0:e[a];return e[7]=o[7]=t,null!=e[8]&&(o[8]=e[8]),e[3]+=n||0,e[4]+=r||0,i=new Date(0),t?(i.setUTCFullYear(e[0],e[1],e[2]),i.setUTCHours(e[3],e[4],e[5],e[6])):(i.setFullYear(e[0],e[1],e[2]),i.setHours(e[3],e[4],e[5],e[6])),i._a=o,i}function f(e,t){var n,r,a=[];for(!t&&L&&(t=require("./lang/"+e)),n=0;n<C.length;n++)t[C[n]]=t[C[n]]||H.en[C[n]];for(n=0;12>n;n++)r=F([2e3,n]),a[n]=new RegExp("^"+(t.months[n]||t.months(r,""))+"|^"+(t.monthsShort[n]||t.monthsShort(r,"")).replace(".",""),"i");return t.monthsParse=t.monthsParse||a,H[e]=t,t}function h(e){var t="string"==typeof e&&e||e&&e._lang||null;return t?H[t]||f(t):F}function m(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function p(e){var t,n,r=e.match(z);for(t=0,n=r.length;n>t;t++)r[t]=te[r[t]]?te[r[t]]:m(r[t]);return function(a){var i="";for(t=0;n>t;t++)i+="function"==typeof r[t].call?r[t].call(a,e):r[t];return i}}function g(e,t){function n(t){return e.lang().longDateFormat[t]||t}for(var r=5;r--&&N.test(t);)t=t.replace(N,n);return X[t]||(X[t]=p(t)),X[t](e)}function y(e){switch(e){case"DDDD":return Z;case"YYYY":return U;case"S":case"SS":case"SSS":case"DDD":return $;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return j;case"Z":case"ZZ":return R;case"T":return V;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return E;default:return new RegExp(e.replace("\\",""))}}function v(e,t,n,r){var a,i;switch(e){case"M":case"MM":n[1]=null==t?0:~~t-1;break;case"MMM":case"MMMM":for(a=0;12>a;a++)if(h().monthsParse[a].test(t)){n[1]=a,i=!0;break}i||(n[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":null!=t&&(n[2]=~~t);break;case"YY":n[0]=~~t+(~~t>70?1900:2e3);break;case"YYYY":n[0]=~~Math.abs(t);break;case"a":case"A":r.isPm="pm"===(t+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":n[3]=~~t;break;case"m":case"mm":n[4]=~~t;break;case"s":case"ss":n[5]=~~t;break;case"S":case"SS":case"SSS":n[6]=~~(1e3*("0."+t));break;case"Z":case"ZZ":r.isUTC=!0,a=(t+"").match(q),a&&a[1]&&(r.tzh=~~a[1]),a&&a[2]&&(r.tzm=~~a[2]),a&&"+"===a[0]&&(r.tzh=-r.tzh,r.tzm=-r.tzm)}null==t&&(n[8]=!1)}function b(e,t){var n,r,a=[0,0,1,0,0,0,0],i={tzh:0,tzm:0},o=t.match(z);for(n=0;n<o.length;n++)r=(y(o[n]).exec(e)||[])[0],r&&(e=e.slice(e.indexOf(r)+r.length)),te[o[n]]&&v(o[n],r,a,i);return i.isPm&&a[3]<12&&(a[3]+=12),i.isPm===!1&&12===a[3]&&(a[3]=0),d(a,i.isUTC,i.tzh,i.tzm)}function _(e,t){var n,r,i,o,s,u=e.match(P)||[],l=99;for(i=0;i<t.length;i++)o=b(e,t[i]),r=g(new a(o),t[i]).match(P)||[],s=c(u,r),l>s&&(l=s,n=o);return n}function M(e){var t,n="YYYY-MM-DDT";if(W.exec(e)){for(t=0;4>t;t++)if(G[t][1].exec(e)){n+=G[t][0];break}return R.exec(e)?b(e,n+" Z"):b(e,n)}return new Date(e)}function D(e,t,n,r,a){var i=a.relativeTime[e];return"function"==typeof i?i(t||1,!!n,e,r):i.replace(/%d/i,t||1)}function w(e,t,n){var r=O(Math.abs(e)/1e3),a=O(r/60),i=O(a/60),o=O(i/24),s=O(o/365),u=45>r&&["s",r]||1===a&&["m"]||45>a&&["mm",a]||1===i&&["h"]||22>i&&["hh",i]||1===o&&["d"]||25>=o&&["dd",o]||45>=o&&["M"]||345>o&&["MM",O(o/30)]||1===s&&["y"]||["yy",s];return u[2]=t,u[3]=e>0,u[4]=n,D.apply({},u)}function x(e,t){F.fn[e]=function(e){var n=this._isUTC?"UTC":"";return null!=e?(this._d["set"+n+t](e),this):this._d["get"+n+t]()}}function T(e){F.duration.fn[e]=function(){return this._data[e]}}function k(e,t){F.duration.fn["as"+e]=function(){return+this/t}}for(var F,Y,S="1.7.2",O=Math.round,H={},B="en",L="undefined"!=typeof module&&module.exports,C="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),A=/^\/?Date\((\-?\d+)/i,z=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,N=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,P=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,E=/\d\d?/,$=/\d{1,3}/,Z=/\d{3}/,U=/\d{1,4}/,j=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,R=/Z|[\+\-]\d\d:?\d\d/i,V=/T/i,W=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,J="YYYY-MM-DDTHH:mm:ssZ",G=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],q=/([\+\-]|\d\d)/gi,I="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),K={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},X={},Q="DDD w M D d".split(" "),ee="M D H h m s w".split(" "),te={M:function(){return this.month()+1},MMM:function(e){return t("monthsShort",this.month(),this,e)},MMMM:function(e){return t("months",this.month(),this,e)},D:function(){return this.date()},DDD:function(){var e=new Date(this.year(),this.month(),this.date()),t=new Date(this.year(),0,1);return~~((e-t)/864e5+1.5)},d:function(){return this.day()},dd:function(e){return t("weekdaysMin",this.day(),this,e)},ddd:function(e){return t("weekdaysShort",this.day(),this,e)},dddd:function(e){return t("weekdays",this.day(),this,e)},w:function(){var e=new Date(this.year(),this.month(),this.date()-this.day()+5),t=new Date(e.getFullYear(),0,4);return~~((e-t)/864e5/7+1.5)},YY:function(){return s(this.year()%100,2)},YYYY:function(){return s(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return s(~~(this.milliseconds()/10),2)},SSS:function(){return s(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+s(~~(e/60),2)+":"+s(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+s(~~(10*e/6),4)}};Q.length;)Y=Q.pop(),te[Y+"o"]=r(te[Y]);for(;ee.length;)Y=ee.pop(),te[Y+Y]=n(te[Y],2);for(te.DDDD=n(te.DDD,3),F=function(t,n){if(null===t||""===t)return null;var r,i;return F.isMoment(t)?new a(new Date(+t._d),t._isUTC,t._lang):(n?r=l(n)?_(t,n):b(t,n):(i=A.exec(t),r=t===e?new Date:i?new Date(+i[1]):t instanceof Date?t:l(t)?d(t):"string"==typeof t?M(t):new Date(t)),new a(r))},F.utc=function(e,t){return l(e)?new a(d(e,!0),!0):("string"!=typeof e||R.exec(e)||(e+=" +0000",t&&(t+=" Z")),F(e,t).utc())},F.unix=function(e){return F(1e3*e)},F.duration=function(e,t){var n,r=F.isDuration(e),a="number"==typeof e,o=r?e._data:a?{}:e;return a&&(t?o[t]=e:o.milliseconds=e),n=new i(o),r&&(n._lang=e._lang),n},F.humanizeDuration=function(e,t,n){return F.duration(e,t===!0?null:t).humanize(t===!0?!0:n)},F.version=S,F.defaultFormat=J,F.lang=function(e,t){var n;if(!e)return B;if((t||!H[e])&&f(e,t),H[e]){for(n=0;n<C.length;n++)F[C[n]]=H[e][C[n]];F.monthsParse=H[e].monthsParse,B=e}},F.langData=h,F.isMoment=function(e){return e instanceof a},F.isDuration=function(e){return e instanceof i},F.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"}}),F.fn=a.prototype={clone:function(){return F(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?null!=this._a[8]?!!this._a[8]:!c(this._a,(this._a[7]?F.utc(this._a):F(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){return g(this,e?e:F.defaultFormat)},add:function(e,t){var n=t?F.duration(+t,e):F.duration(e);return u(this,n,1),this},subtract:function(e,t){var n=t?F.duration(+t,e):F.duration(e);return u(this,n,-1),this},diff:function(e,t,n){var r,a=this._isUTC?F(e).utc():F(e).local(),i=6e4*(this.zone()-a.zone()),o=this._d-a._d-i,s=this.year()-a.year(),u=this.month()-a.month(),l=this.date()-a.date();return r="months"===t?12*s+u+l/30:"years"===t?s+(u+l/30)/12:"seconds"===t?o/1e3:"minutes"===t?o/6e4:"hours"===t?o/36e5:"days"===t?o/864e5:"weeks"===t?o/6048e5:o,n?r:O(r)},from:function(e,t){return F.duration(this.diff(e)).lang(this._lang).humanize(!t)},fromNow:function(e){return this.from(F(),e)},calendar:function(){var e=this.diff(F().sod(),"days",!0),t=this.lang().calendar,n=t.sameElse,r=-6>e?n:-1>e?t.lastWeek:0>e?t.lastDay:1>e?t.sameDay:2>e?t.nextDay:7>e?t.nextWeek:n;return this.format("function"==typeof r?r.apply(this):r)},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<F([this.year()]).zone()||this.zone()<F([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==e?t:this.add({d:e-t})},startOf:function(e){switch(e.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return F.utc([this.year(),this.month()+1,0]).date()},lang:function(t){return t===e?h(this):(this._lang=t,this)}},Y=0;Y<I.length;Y++)x(I[Y].toLowerCase(),I[Y]);x("year","FullYear"),F.duration.fn=i.prototype={weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(e){var t=+this,n=this.lang().relativeTime,r=w(t,!e,this.lang()),a=0>=t?n.past:n.future;return e&&(r="function"==typeof a?a(r):a.replace(/%s/i,r)),r},lang:F.fn.lang};for(Y in K)K.hasOwnProperty(Y)&&(k(Y,K[Y]),T(Y.toLowerCase()));k("Weeks",6048e5),L&&(module.exports=F),"undefined"==typeof ender&&(this.moment=F),"function"==typeof define&&define.amd&&define("moment",[],function(){return F})}.call(this),define("formater",["numeral","moment"],function(e){var t={dateFormat:"DD.MM.YYYY",getFormatType:function(e){var t="",n=e.attr("class");return n&&(n=n.split(/\s+/),$.each(n,function(e,n){n.indexOf("format-")>=0&&(t=n.split("format-")[1])})),t}},n={formatValue:function(e,n){var r=t.getFormatType(n);return this.formatValueToType(e,r)},formatValueToType:function(n,r){var a=n;if(void 0!=n&&""!=n.toString())switch(r){case"float":n=this.stripCommaFromFloat(n),a=e(n).format("0,0.00");break;case"float-1":n=this.stripCommaFromFloat(n),a=e(n).format("0,0.0");break;case"float-or-empty":n=this.stripCommaFromFloat(n),a=e(n).format("0,0.00"),0==parseFloat(n)&&(a="");break;case"float-or-emptysign":n=this.stripCommaFromFloat(n),a=e(n).format("0,0.00"),0==parseFloat(n)&&(a="-,--");break;case"int":n=this.stripCommaFromFloat(n),a=e(n).format("0,0");break;case"percent":n=this.stripCommaFromFloat(n),a=e(n/100).format("0.0 %");break;case"percent-ceil":n=this.stripCommaFromFloat(n),a=e(n/100).format("0 %");break;case"percent-or-empty":n=this.stripCommaFromFloat(n),a=0==parseFloat(n)?"":e(n/100).format("0.0 %");break;case"time":a=this.formatTime(n),"00:00"==a&&(a="");break;case"date":a=moment(n).format(t.dateFormat);break;case"date-db":a=moment(n).format("DD.MM.YYYY");break;case"euro":a="€ "+this.formatValueToType(n,"float");break;case"euro-or-empty":var i=this.formatValueToType(n,"float-or-empty");a=""!=i?"€ "+i:i;break;case"":a=n;break;default:console.log("unknown format type : "+r+". In element:")}return a},setDateFormat:function(e){t.dateFormat=e},formatFloat:function(t){if(t){t=t.toString(),t.indexOf(",")>-1&&-1==t.indexOf(".")&&(t=t.replace(",","."));var n=e().unformat(t);return parseFloat(n).toFixed(2)}return 0},stripCommaFromFloat:function(e){return e=e.toString(),e.indexOf(",")>-1&&-1==e.indexOf(".")&&(e=e.replace(",",".")),e},formatTime:function(e){var t=e.split("");if(1==t.length&&t.unshift(0),t.length<4)for(var n=t.length;4>n;n++)t.push(0);for(var r="",n=0;n<t.length;n++){var a=t[n];2==n&&":"!=a&&(r+=":"),r+=a}return r},extractDateFromPHPdate:function(e){e=e||"";var t=e.split("T");return t[0]},extractTimeFromPHPdate:function(e){if(e){var t=e.split("T"),n=t[1].split(":");return n[0]+":"+n[1]}return e},formatGermanDateToDbDate:function(e){var t=e,n=e.split(".");return 3==n.length&&(t=n[2]+"-"+n[1]+"-"+n[0]),t},formatDbDateToGermanDate:function(e){var t=e,n=e.split("-");if(3==n.length){var r=n[2].split(" ");t=r[0]+"."+n[1]+"."+n[0]}return t},formatDateObjectForDb:function(e){if(e instanceof Date){var t=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getFullYear();return t+"."+n+"."+r}return e}};return n}),function(e){if("function"==typeof define&&define.amd)define("knockout.punches",["knockout"],e);else if("object"==typeof module){var t=require("knockout");e(t)}else e(window.ko)}(function(e){function t(e,t){return r(n(e),"preprocess",t)}function n(t){return"object"==typeof t?t:e.getBindingHandler(t)||(e.bindingHandlers[t]={})}function r(e,t,n){if(e[t]){var r=e[t];e[t]=function(e,t,a){return(e=r.call(this,e,t,a))?n.call(this,e,t,a):void 0}}else e[t]=n;return e}function a(t){var n=e.bindingProvider.instance;if(n.preprocessNode){var r=n.preprocessNode;n.preprocessNode=function(e){var n=r.call(this,e);return n||(n=t.call(this,e)),n}}else n.preprocessNode=t}function i(t,n){var r=e.getBindingHandler;e.getBindingHandler=function(e){var a;return r(e)||(a=e.match(t))&&n(a,e)}}function o(e){if(-1===e.indexOf("|"))return e;var t=e.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|\|\||[|:]|[^\s|:"'][^|:"']*[^\s|:"']|[^\s|:"']/g);if(t&&1<t.length){t.push("|"),e=t[0];for(var n,r,a=!1,i=!1,o=1;r=t[o];++o)"|"===r?(a&&(":"===n&&(e+="undefined"),e+=")"),a=i=!0):(i?e="ko.filters['"+r+"']("+e:a&&":"===r?(":"===n&&(e+="undefined"),e+=","):e+=r,i=!1),n=r}return e}function s(e){t(e,o)}function u(t,n,r){function a(r){i[r]&&(i[r]=function(a,i){var o=Array.prototype.slice.call(arguments,0);return o[1]=function(){var e={};return e[t]=i(),e},e.bindingHandlers[n][r].apply(this,o)})}var i=e.utils.extend({},this);return a("init"),a("update"),i.preprocess&&(i.preprocess=null),e.virtualElements.allowedBindings[n]&&(e.virtualElements.allowedBindings[r]=!0),i}function l(n,r){var a=e.getBindingHandler(n);if(a){var i=a.getNamespacedHandler||u;a.getNamespacedHandler=function(){return t(i.apply(this,arguments),r)}}}function c(t,n,r){return"{"!==t.charAt(0)?t:(t=e.expressionRewriting.parseObjectLiteral(t),void e.utils.arrayForEach(t,function(e){r(n+k+e.key,e.value)}))}function d(e){t(e,c)}function f(e){return/^([$_a-z][$\w]*|.+(\.\s*[$_a-z][$\w]*|\[.+\]))$/i.test(e)?"function(_x,_y,_z){return("+e+")(_x,_y,_z);}":e}function h(e){t(e,f)}function m(e,t,a){e=n(e),e._propertyPreprocessors||(r(e,"preprocess",p),e._propertyPreprocessors={}),r(e._propertyPreprocessors,t,a)}function p(t,n,r){if("{"!==t.charAt(0))return t;t=e.expressionRewriting.parseObjectLiteral(t);var a=[],i=this._propertyPreprocessors||{};return e.utils.arrayForEach(t,function(e){var t=e.key;e=e.value,i[t]&&(e=i[t](e,t,r)),e&&a.push("'"+t+"':"+e)}),"{"+a.join(",")+"}"}function g(e){return function(t){return"function("+e+"){return("+t+");}"}}function y(e,t,n){function r(e){var a=e.match(/^([\s\S]*)}}([\s\S]*?)\{\{([\s\S]*)$/);a?(r(a[1]),t(a[2]),n(a[3])):n(e)}(e=e.match(/^([\s\S]*?)\{\{([\s\S]*)}}([\s\S]*)$/))&&(t(e[1]),r(e[2]),t(e[3]))}function v(e){return null==e?"":e.trim?e.trim():e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function b(e){if(3===e.nodeType&&e.nodeValue&&-1!==e.nodeValue.indexOf("{{")&&"TEXTAREA"!=(e.parentNode||{}).nodeName){var t=[];if(y(e.nodeValue,function(e){e&&t.push(document.createTextNode(e))},function(n){n&&t.push.apply(t,S.wrapExpression(n,e))}),t.length){if(e.parentNode){for(var n=0,r=t.length,a=e.parentNode;r>n;++n)a.insertBefore(t[n],e);a.removeChild(e)}return t}}}function _(){a(b)}function M(t){if(1===t.nodeType&&t.attributes.length)for(var n=t.getAttribute(O),r=e.utils.arrayPushAll([],t.attributes),a=r.length,i=0;a>i;++i){var o=r[i];if(o.specified&&o.name!=O&&-1!==o.value.indexOf("{{")){var s=[],u="";if(y(o.value,function(e){e&&s.push('"'+e.replace(/"/g,'\\"')+'"')},function(e){e&&(u=e,s.push("ko.unwrap("+e+")"))}),1<s.length&&(u='""+'+s.join("+")),u){var l=o.name.toLowerCase(),l=H.attributeBinding(l,u,t)||D(l,u,t),n=n?n+(","+l):l;t.setAttribute(O,n),t.removeAttribute(o.name)}}}}function D(t,n){return e.getBindingHandler(t)?t+":"+n:"attr."+t+":"+n}function w(){a(M)}var x=e.unwrap,T=e.punches={utils:{addBindingPreprocessor:t,addNodePreprocessor:a,addBindingHandlerCreator:i,setBindingPreprocessor:t,setNodePreprocessor:a}};T.enableAll=function(){_(),w(),d("attr"),d("css"),d("event"),d("style"),e.bindingHandlers.checked.after.push("attr.value"),s("text"),s("html"),l("attr",o),h("click"),h("submit"),h("optionsAfterRender"),l("event",f),m("template","beforeRemove",f),m("template","afterAdd",f),m("template","afterRender",f)},e.filters={uppercase:function(e){return String.prototype.toUpperCase.call(x(e))},lowercase:function(e){return String.prototype.toLowerCase.call(x(e))},"default":function(e,t){return e=x(e),"function"==typeof e?e:"string"==typeof e?""===v(e)?t:e:null==e||0==e.length?t:e},replace:function(e,t,n){return String.prototype.replace.call(x(e),t,n)},fit:function(e,t,n,r){if(e=x(e),!(t&&(""+e).length>t))return e;switch(n=""+(n||"..."),t-=n.length,e=""+e,r){case"left":return n+e.slice(-t);case"middle":return r=Math.ceil(t/2),e.substr(0,r)+n+e.slice(r-t);default:return e.substr(0,t)+n}},json:function(t,n,r){return e.toJSON(t,r,n)},number:function(e){return(+x(e)).toLocaleString()}},T.textFilter={preprocessor:o,enableForBinding:s};var k=".";i(/([^\.]+)\.(.+)/,function(t,n){var r=t[1],a=e.bindingHandlers[r];return a?(r=(a.getNamespacedHandler||u).call(a,t[2],r,n),e.bindingHandlers[n]=r):void 0}),T.namespacedBinding={defaultGetHandler:u,setDefaultBindingPreprocessor:l,addDefaultBindingPreprocessor:l,preprocessor:c,enableForBinding:d},T.wrappedCallback={preprocessor:f,enableForBinding:h},T.preprocessBindingProperty={setPreprocessor:m,addPreprocessor:m};var F=g("$data,$event");if(T.expressionCallback={makePreprocessor:g,eventPreprocessor:F,enableForBinding:function(e,n){n=Array.prototype.slice.call(arguments,1).join(),t(e,g(n))}},e.bindingHandlers.on={getNamespacedHandler:function(n){return n=e.getBindingHandler("event"+k+n),t(n,F)}},!e.virtualElements.allowedBindings.html){var Y=e.bindingHandlers.html.update;e.bindingHandlers.html.update=function(t,n){if(8===t.nodeType){var r=x(n());null!=r?(r=e.utils.parseHtmlFragment(""+r),e.virtualElements.setDomNodeChildren(t,r)):e.virtualElements.emptyNode(t)}else Y(t,n)},e.virtualElements.allowedBindings.html=!0}var S=T.interpolationMarkup={preprocessor:b,enable:_,wrapExpression:function(e,t){var n,r=t?t.ownerDocument:document,a=!0;e=v(e);var i=e[0],o=e[e.length-1],s=[];return"#"===i?("/"===o?n=e.slice(1,-1):(n=e.slice(1),a=!1),(i=n.match(/^([^,"'{}()\/:[\]\s]+)\s+([^\s:].*)/))&&(n=i[1]+":"+i[2])):"/"!==i&&(n="{"===i&&"}"===o?"html:"+v(e.slice(1,-1)):"text:"+v(e)),n&&s.push(r.createComment("ko "+n)),a&&s.push(r.createComment("/ko")),s}},O="data-bind",H=T.attributeInterpolationMarkup={preprocessor:M,enable:w,attributeBinding:D};return T}),define("ko-punches-additions",["translator","formater","knockout","knockout.punches"],function(e,t,n){var r=new e;return{init:function(e,n){e.punches.enableAll(),r.setBooklet(n),e.filters.translate=function(t){return r.translate(e.unwrap(t))},e.filters.format=function(n,r){var a=t.formatValueToType(e.unwrap(n),r);return a}},translate:function(e){return r.translate(e)},format:function(e,r){var a=t.formatValueToType(n.unwrap(e),r);return a},setLocale:function(e){r.setLocale(e)},getLocale:function(){return r.getLocale()},setDateFormat:function(e){t.setDateFormat(e)}}}),require(["ko-punches-additions"]),require.config({bundles:{}});