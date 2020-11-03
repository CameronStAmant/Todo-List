(()=>{"use strict";const e=()=>{let e=document.getElementById("workspace"),t=[];for(let n=1;n<e.children.length;n++)if("delete-btn"!=e.children[n].className){let r=e.children[n].id;t[n]="delete-"+r;let a=document.getElementById(t[n]);a.addEventListener("click",(()=>{let e=a.id.split("-")[1];if(null===document.getElementById(e))return;document.getElementById(e).remove(),a.remove();let t=document.getElementById("workspace");localStorage.setItem("everything",""+t.innerHTML)}))}},t=(e=null)=>{let t=[],n=document.getElementById("workspace");!function(){for(let r=0;r<n.children.length;r++)if("delete-btn"!=n.children[r].className){let a=document.getElementById(n.children[r].id);for(let n=0;n<a.children.length;n++)for(let i=0;i<a.children[n].children.length;i++)if("view-todo"==a.children[n].children[i].className){let o=a.children[n].children[i].id;t[r]=o;let d=document.getElementById(t[r]),l=function(){let e,n=t[r].split("-")[1],a=document.getElementById(n);if(e=document.querySelectorAll(".todoInfo"),null===a);else{e[1].value=a.firstElementChild.innerHTML,e[1].id=a.id;let t=document.createAttribute("description");t.value=a.getAttribute("description"),e[3].setAttributeNode(t),e[3].value=t.value;let n=document.createAttribute("priority");n.value=a.getAttribute("priority"),1==n.value?document.getElementById("titlePriorityEditOpt1").checked=!0:2==n.value?document.getElementById("titlePriorityEditOpt2").checked=!0:3==n.value&&(document.getElementById("titlePriorityEditOpt3").checked=!0);let r=document.createAttribute("dueDate");r.value=a.getAttribute("dueDate"),e[6].setAttributeNode(r),e[6].value=r.value,e[0].style.display="block",e[1].style.display="block",e[2].style.display="block",e[3].style.display="block",e[4].style.display="block",e[5].style.display="block",e[6].style.display="block",e[7].style.display="block"}};d.getAttribute("listener","true")&&null===e||(d.addEventListener("click",l),d.setAttribute("listener","true"))}}}()},n=()=>{document.getElementById("workspace"),document.querySelectorAll(".delete-todo").forEach((function(e){e.addEventListener("click",(()=>{let t=e.id.split("-")[1];if(null===document.getElementById(t))return;document.getElementById(t).remove(),e.remove();let n=document.getElementById("workspace");localStorage.setItem("everything",""+n.innerHTML)}))}))};function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){r(1,arguments);var t=a(e);return!isNaN(t)}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var l,c={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var d=e.defaultWidth,l=a.width?String(a.width):e.defaultWidth;r=e.values[l]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function m(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=r.match(o);if(!d)return null;var l,c=d[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(u),l=e.valueCallback?e.valueCallback(l):l,{value:l=a.valueCallback?a.valueCallback(l):l,rest:r.slice(c.length)}}}const h={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(e,t,n,r){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(l.matchPattern);if(!a)return null;var i=a[0],o=n.match(l.parsePattern);if(!o)return null;var d=l.valueCallback?l.valueCallback(o[0]):o[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(i.length)}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function p(e,t){r(2,arguments);var n=a(e).getTime(),i=g(t);return new Date(n+i)}function f(e,t){r(2,arguments);var n=g(t);return p(e,-n)}function y(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const b=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return y("yy"===t?r%100:r,t.length)},v=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):y(n+1,2)},w=function(e,t){return y(e.getUTCDate(),t.length)},E=function(e,t){return y(e.getUTCHours()%12||12,t.length)},T=function(e,t){return y(e.getUTCHours(),t.length)},C=function(e,t){return y(e.getUTCMinutes(),t.length)},M=function(e,t){return y(e.getUTCSeconds(),t.length)},P=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return y(Math.floor(r*Math.pow(10,n-3)),t.length)};var I=864e5;function k(e){r(1,arguments);var t=1,n=a(e),i=n.getUTCDay(),o=(i<t?7:0)+i-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function B(e){r(1,arguments);var t=a(e),n=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=k(i),d=new Date(0);d.setUTCFullYear(n,0,4),d.setUTCHours(0,0,0,0);var l=k(d);return t.getTime()>=o.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function D(e){r(1,arguments);var t=B(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=k(n);return a}var N=6048e5;function U(e,t){r(1,arguments);var n=t||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,d=null==o?0:g(o),l=null==n.weekStartsOn?d:g(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(e),u=c.getUTCDay(),s=(u<l?7:0)+u-l;return c.setUTCDate(c.getUTCDate()-s),c.setUTCHours(0,0,0,0),c}function L(e,t){r(1,arguments);var n=a(e,t),i=n.getUTCFullYear(),o=t||{},d=o.locale,l=d&&d.options&&d.options.firstWeekContainsDate,c=null==l?1:g(l),u=null==o.firstWeekContainsDate?c:g(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=new Date(0);s.setUTCFullYear(i+1,0,u),s.setUTCHours(0,0,0,0);var m=U(s,t),h=new Date(0);h.setUTCFullYear(i,0,u),h.setUTCHours(0,0,0,0);var p=U(h,t);return n.getTime()>=m.getTime()?i+1:n.getTime()>=p.getTime()?i:i-1}function x(e,t){r(1,arguments);var n=t||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:g(i),d=null==n.firstWeekContainsDate?o:g(n.firstWeekContainsDate),l=L(e,t),c=new Date(0);c.setUTCFullYear(l,0,d),c.setUTCHours(0,0,0,0);var u=U(c,t);return u}var S=6048e5;function O(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+y(i,2)}function A(e,t){return e%60==0?(e>0?"-":"+")+y(Math.abs(e)/60,2):H(e,t)}function H(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+y(Math.floor(a/60),2)+n+y(a%60,2)}const j={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b(e,t)},Y:function(e,t,n,r){var a=L(e,r),i=a>0?a:1-a;return"YY"===t?y(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):y(i,t.length)},R:function(e,t){return y(B(e),t.length)},u:function(e,t){return y(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return v(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,i){var o=function(e,t){r(1,arguments);var n=a(e),i=U(n,t).getTime()-x(n,t).getTime();return Math.round(i/S)+1}(e,i);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):y(o,t.length)},I:function(e,t,n){var i=function(e){r(1,arguments);var t=a(e),n=k(t).getTime()-D(t).getTime();return Math.round(n/N)+1}(e);return"Io"===t?n.ordinalNumber(i,{unit:"week"}):y(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):w(e,t)},D:function(e,t,n){var i=function(e){r(1,arguments);var t=a(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=n-i;return Math.floor(o/I)+1}(e);return"Do"===t?n.ordinalNumber(i,{unit:"dayOfYear"}):y(i,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return y(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return y(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return y(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return E(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):y(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):C(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):M(e,t)},S:function(e,t){return P(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return A(a);case"XXXX":case"XX":return H(a);case"XXXXX":case"XXX":default:return H(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return A(a);case"xxxx":case"xx":return H(a);case"xxxxx":case"xxx":default:return H(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+O(a,":");case"OOOO":default:return"GMT"+H(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+O(a,":");case"zzzz":default:return"GMT"+H(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return y(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return y((r._originalDate||e).getTime(),t.length)}};function W(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Y(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const q={p:Y,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return W(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",W(a,t)).replace("{{time}}",Y(i,t))}};var z=6e4;function F(e){return e.getTime()%z}function X(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(z+F(t))%z:F(t);return n*z+r}var Q=["D","DD"],G=["YY","YYYY"];function R(e){return-1!==Q.indexOf(e)}function J(e){return-1!==G.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,Z=/''/g,ee=/[a-zA-Z]/;function te(e,t,n){r(2,arguments);var o=String(t),d=n||{},l=d.locale||h,c=l.options&&l.options.firstWeekContainsDate,u=null==c?1:g(c),s=null==d.firstWeekContainsDate?u:g(d.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=l.options&&l.options.weekStartsOn,p=null==m?0:g(m),y=null==d.weekStartsOn?p:g(d.weekStartsOn);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!l.localize)throw new RangeError("locale must contain localize property");if(!l.formatLong)throw new RangeError("locale must contain formatLong property");var b=a(e);if(!i(b))throw new RangeError("Invalid time value");var v=X(b),w=f(b,v),E={firstWeekContainsDate:s,weekStartsOn:y,locale:l,_originalDate:b},T=o.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,q[t])(e,l.formatLong,E):e})).join("").match(V).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ne(n);var a=j[r];if(a)return!d.useAdditionalWeekYearTokens&&J(n)&&_(n,t,e),!d.useAdditionalDayOfYearTokens&&R(n)&&_(n,t,e),a(w,n,l.localize,E);if(r.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function ne(e){return e.match($)[1].replace(Z,"'")}if((()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="ToDo",t.id="header",e.appendChild(t);let n=document.createElement("BUTTON");n.innerHTML="+ Project",n.id="addProjectButton",e.appendChild(n);let r=document.createElement("BUTTON");r.innerHTML="+ Todo",r.id="addTodoButton",e.appendChild(r);let a=document.createElement("div");a.id="createProject",e.appendChild(a);let i=document.createElement("div");i.id="createTodo",e.appendChild(i);let o=document.createElement("div");o.id="space",e.appendChild(o);let d=document.createElement("div");d.id="workspace",o.appendChild(d);let l=document.createElement("p");l.innerHTML="Projects",l.id="projectHeader",d.appendChild(l);let c=document.createElement("div");c.id="todoSpace",c.innerHTML="Todo",o.appendChild(c)})(),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Name:";let n=document.createElement("INPUT");n.setAttribute("type","text"),n.id="projectName";let r=document.createElement("INPUT");r.setAttribute("type","button"),r.value="Create",r.id="addProject";let a=document.createElement("INPUT");a.setAttribute("type","button"),a.setAttribute("value","Cancel"),a.id="cancelProject",createProject.appendChild(e),createProject.appendChild(t),createProject.appendChild(n),createProject.appendChild(r),createProject.appendChild(a);const i=document.getElementById("createProject"),o=document.getElementById("createTodo");addProjectButton.addEventListener("click",(()=>{o.style.display="none",n.value="",i.style.display="block"}))})(),document.getElementById("addProject").addEventListener("click",(()=>{let t=document.getElementById("projectName").value,n=document.getElementById("workspace"),r=document.createElement("div");r.id=t,r.className="project";let a=document.createElement("p");a.innerHTML=t,a.className="project",document.createElement("br");let i=document.createElement("BUTTON");i.innerHTML="Remove",i.className="delete-btn",i.value="a",i.id="delete-"+r.id,n.appendChild(r),r.appendChild(a),a.appendChild(i);const o=document.getElementById("createProject"),d=document.getElementById("projectName");o.style.display="none",d.value="",e()})),(()=>{let e=document.createElement("FORM"),t=document.createElement("label");t.innerHTML="Title:";let n=document.createElement("INPUT");n.setAttribute("type","text"),n.id="todoTitle";let r=document.createElement("label");r.innerHTML="Description:";let a=document.createElement("INPUT");a.setAttribute("type","text"),a.id="todoDescription";let i=document.createElement("label");i.innerHTML="Priority:";let o=document.createElement("INPUT");o.setAttribute("type","radio"),o.setAttribute("id","titlePriorityOpt1"),o.setAttribute("name","priority");let d=document.createElement("label");d.innerHTML="!!!",d.value="!!!";let l=document.createElement("INPUT");l.setAttribute("type","radio"),l.setAttribute("id","titlePriorityOpt2"),l.setAttribute("name","priority");let c=document.createElement("label");c.innerHTML="!!",c.value="!!";let u=document.createElement("INPUT");u.setAttribute("type","radio"),u.setAttribute("id","titlePriorityOpt3"),u.setAttribute("name","priority");let s=document.createElement("label");s.innerHTML="!",s.value="!";let m=document.createElement("label");m.innerHTML="Due Date:";let h=document.createElement("INPUT");h.setAttribute("type","date"),h.id="todoDueDate";let g=document.createElement("label");g.innerHTML="Project:";let p=document.createElement("SELECT");p.id="todoProject";let f=document.createElement("INPUT");f.setAttribute("type","button"),f.id="addTodo",f.value="Create";let y=document.createElement("INPUT");y.setAttribute("type","button"),y.id="cancelTodo",y.value="Cancel";let b=document.createElement("br"),v=document.createElement("br"),w=document.createElement("br"),E=document.createElement("br"),T=document.createElement("br");e.appendChild(t),e.appendChild(n),e.appendChild(b),e.appendChild(r),e.appendChild(a),e.appendChild(v),e.appendChild(i),i.appendChild(o),i.appendChild(d),i.appendChild(l),i.appendChild(c),i.appendChild(u),i.appendChild(s),e.appendChild(s),e.appendChild(w),e.appendChild(m),e.appendChild(h),e.appendChild(E),e.appendChild(g),e.appendChild(p),e.appendChild(T),e.appendChild(f),e.appendChild(y),createTodo.appendChild(e);const C=document.getElementById("createTodo"),M=document.getElementById("createProject"),P=document.getElementById("titlePriorityOpt1"),I=document.getElementById("titlePriorityOpt2"),k=document.getElementById("titlePriorityOpt3");addTodoButton.addEventListener("click",(()=>{M.style.display="none",n.value="",a.value="",P.checked=!1,I.checked=!1,k.checked=!1,h.value="",C.style.display="block";let e=[];p.innerHTML="",e=(()=>{let e=document.getElementById("workspace"),t=[];for(let n=1;n<e.children.length;n++)"delete-btn"!=e.children[n].className&&t.push(e.children[n].id);return t})();for(let t=0;t<e.length;t++){let n=document.createElement("option");n.value=e[t],n.innerHTML=e[t],p.appendChild(n)}}))})(),document.getElementById("addTodo").addEventListener("click",(()=>{let e,r=document.getElementById("todoTitle").value,a=document.getElementById("todoDescription").value;1==document.getElementById("titlePriorityOpt1").checked?e=1:1==document.getElementById("titlePriorityOpt2").checked?e=2:1==document.getElementById("titlePriorityOpt3").checked&&(e=3);let i=document.getElementById("todoDueDate").value,o=document.getElementById("workspace"),d=document.createElement("div");d.id=r;let l=document.createAttribute("description");l.value=a,d.setAttributeNode(l);let c=document.createAttribute("priority");c.value=e,d.setAttributeNode(c),d.className="item";let u=document.createAttribute("dueDate");u.value=i,d.setAttributeNode(u);let s=document.createElement("BUTTON");s.innerHTML="View",s.className="view-todo",s.id="view-"+d.id;let m=document.createElement("BUTTON");m.innerHTML="Delete",m.className="delete-todo",m.id="delete-"+d.id;let h=document.getElementById("todoProject").value,g=document.createElement("p");g.innerHTML=r,g.className="pItem";let p=document.createElement("p"),f=i.split("-");p.innerHTML=te(new Date(""+f[0],""+f[1],""+f[2]),"MM/dd/yyyy"),p.className="pItemDueDates",document.createElement("br"),document.getElementById(h).appendChild(d),document.getElementById(d.id).appendChild(g),document.getElementById(d.id).appendChild(p),document.getElementById(d.id).appendChild(s),document.getElementById(d.id).appendChild(m);const y=document.getElementById("createTodo"),b=document.getElementById("todoTitle"),v=document.getElementById("todoDescription");y.style.display="none",b.value="",v.value="",t(),n(),localStorage.setItem("everything",""+o.innerHTML)})),(()=>{const e=document.getElementById("cancelTodo"),t=document.getElementById("createTodo"),n=document.getElementById("todoTitle"),r=document.getElementById("todoDescription"),a=document.getElementById("titlePriorityOpt1"),i=document.getElementById("titlePriorityOpt2"),o=document.getElementById("titlePriorityOpt3");e.addEventListener("click",(()=>{t.style.display="none",a.checked=!1,i.checked=!1,o.checked=!1,n.value="",r.value=""}))})(),(()=>{const e=document.getElementById("cancelProject"),t=document.getElementById("createProject"),n=document.getElementById("projectName");e.addEventListener("click",(()=>{t.style.display="none",n.value=""}))})(),document.getElementById("projectName").value="Default",addProject.click(),e(),n(),t(),(()=>{document.createElement("FORM");let e=document.createElement("label");e.id="todoTitleLabel",e.className="todoInfo",e.innerHTML="Title:",todoSpace.appendChild(e);let t=document.createElement("INPUT");t.setAttribute("type","text"),t.className="todoInfo",e.appendChild(t);let n=document.createElement("label");n.id="todoDescriptionLabel",n.className="todoInfo",n.innerHTML="Description:",todoSpace.appendChild(n);let r=document.createElement("INPUT");r.setAttribute("type","text"),r.className="todoInfo",n.appendChild(r);let a=document.createElement("label");a.id="todoPriorityEditLabel",a.className="todoInfo",a.innerHTML="Priority:",todoSpace.appendChild(a);let i=document.createElement("br");a.appendChild(i);let o=document.createElement("INPUT");o.setAttribute("type","radio"),o.setAttribute("id","titlePriorityEditOpt1"),o.setAttribute("name","priority"),a.appendChild(o);let d=document.createElement("label");d.innerHTML="!!!",d.value="!!!",a.appendChild(d);let l=document.createElement("INPUT");l.setAttribute("type","radio"),l.setAttribute("id","titlePriorityEditOpt2"),l.setAttribute("name","priority"),a.appendChild(l);let c=document.createElement("label");c.innerHTML="!!",c.value="!!",a.appendChild(c);let u=document.createElement("INPUT");u.setAttribute("type","radio"),u.setAttribute("id","titlePriorityEditOpt3"),u.setAttribute("name","priority"),a.appendChild(u);let s=document.createElement("label");s.innerHTML="!",s.value="!",a.appendChild(s);let m=document.createElement("label");m.id="todoDueDateEditLabel",m.className="todoInfo",m.innerHTML="Due Date:",todoSpace.appendChild(m);let h=document.createElement("INPUT");h.setAttribute("type","date"),h.className="todoInfo",m.appendChild(h);let g=document.createElement("BUTTON");g.innerHTML="Save",g.id="todoEdit",g.className="todoInfo",todoSpace.appendChild(g)})(),document.getElementById("todoEdit").addEventListener("click",(()=>{let e,t=document.querySelectorAll(".todoInfo"),n=t[1].id,r=t[1].value,a=t[3].value;1==document.getElementById("titlePriorityEditOpt1").checked?e=1:1==document.getElementById("titlePriorityEditOpt2").checked?e=2:1==document.getElementById("titlePriorityEditOpt3").checked&&(e=3);let i=t[6].value,o=document.getElementById(n);o.firstElementChild.innerHTML=r;let d=i.split("-");o.children[1].innerHTML=te(new Date(""+d[0],""+d[1],""+d[2]),"MM/dd/yyyy"),o.setAttribute("description",a),o.setAttribute("priority",e),o.setAttribute("dueDate",i),t[0].style.display="none",t[1].style.display="none",t[2].style.display="none",t[3].style.display="none",t[4].style.display="none",t[5].style.display="none";let l=document.getElementById("workspace");localStorage.setItem("everything",""+l.innerHTML)})),n(),null!==localStorage.getItem("everything")){let r=document.getElementById("workspace");r.innerHTML="",r.innerHTML=localStorage.getItem("everything"),e(),t("true"),n()}})();