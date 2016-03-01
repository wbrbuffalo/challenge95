/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
!function(a,b){function c(a){var b=a.length,c=ka.type(a);return ka.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||"function"!==c&&(0===b||"number"==typeof b&&b>0&&b-1 in a)}
// Convert String-formatted options into Object-formatted ones and store in cache
function d(a){var b=za[a]={};return ka.each(a.match(ma)||[],function(a,c){b[c]=!0}),b}function e(a,c,d,e){if(ka.acceptData(a)){var f,g,h=ka.expando,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
i=a.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
j=i?ka.cache:a,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
k=i?a[h]:a[h]&&h;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(k&&j[k]&&(e||j[k].data)||d!==b||"string"!=typeof c)
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoid exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// First Try to find as-is property data
// Test for null|undefined property data
// Try to find the camelCased property
return k||(k=i?a[h]=ba.pop()||ka.guid++:h),j[k]||(j[k]=i?{}:{toJSON:ka.noop}),("object"==typeof c||"function"==typeof c)&&(e?j[k]=ka.extend(j[k],c):j[k].data=ka.extend(j[k].data,c)),g=j[k],e||(g.data||(g.data={}),g=g.data),d!==b&&(g[ka.camelCase(c)]=d),"string"==typeof c?(f=g[c],null==f&&(f=g[ka.camelCase(c)])):f=g,f}}function f(a,b,c){if(ka.acceptData(a)){var d,e,f=a.nodeType,
// See jQuery.data for more information
g=f?ka.cache:a,i=f?a[ka.expando]:ka.expando;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(g[i]){if(b&&(d=c?g[i]:g[i].data)){
// Support array or space separated string names for data keys
ka.isArray(b)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
b=b.concat(ka.map(b,ka.camelCase)):
// try the string as a key before any manipulation
b in d?b=[b]:(
// split the camel cased version by spaces unless a key with the spaces exists
b=ka.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(c?!h(d):!ka.isEmptyObject(d))return}
// See jQuery.data for more information
(c||(delete g[i].data,h(g[i])))&&(
// Destroy the cache
f?ka.cleanData([a],!0):ka.support.deleteExpando||g!=g.window?/* jshint eqeqeq: true */
delete g[i]:g[i]=null)}}}function g(a,c,d){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(d===b&&1===a.nodeType){var e="data-"+c.replace(Ba,"-$1").toLowerCase();if(d=a.getAttribute(e),"string"==typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:
// Only convert to a number if it doesn't change the string
+d+""===d?+d:Aa.test(d)?ka.parseJSON(d):d}catch(f){}
// Make sure we set the data so it isn't changed later
ka.data(a,c,d)}else d=b}return d}
// checks a cache object for emptiness
function h(a){var b;for(b in a)
// if the public data object is empty, the private is still empty
if(("data"!==b||!ka.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function i(){return!0}function j(){return!1}function k(){try{return Y.activeElement}catch(a){}}function l(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}
// Implement the identical functionality for filter and not
function m(a,b,c){if(ka.isFunction(b))return ka.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c});if(b.nodeType)return ka.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(Qa.test(b))return ka.filter(b,a,c);b=ka.filter(b,a)}return ka.grep(a,function(a){return ka.inArray(a,b)>=0!==c})}function n(a){var b=Ua.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}
// Support: IE<8
// Manipulating tables requires a tbody
function o(a,b){return ka.nodeName(a,"table")&&ka.nodeName(1===b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function p(a){return a.type=(null!==ka.find.attr(a,"type"))+"/"+a.type,a}function q(a){var b=eb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}
// Mark scripts as having already been evaluated
function r(a,b){for(var c,d=0;null!=(c=a[d]);d++)ka._data(c,"globalEval",!b||ka._data(b[d],"globalEval"))}function s(a,b){if(1===b.nodeType&&ka.hasData(a)){var c,d,e,f=ka._data(a),g=ka._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)ka.event.add(b,c,h[c][d])}
// make the cloned public data object a copy from the original
g.data&&(g.data=ka.extend({},g.data))}}function t(a,b){var c,d,e;
// We do not need to do anything for non-Elements
if(1===b.nodeType){
// IE6-8 copies events bound via attachEvent when using cloneNode.
if(c=b.nodeName.toLowerCase(),!ka.support.noCloneEvent&&b[ka.expando]){e=ka._data(b);for(d in e.events)ka.removeEvent(b,d,e.handle);
// Event data gets referenced instead of copied if the expando gets copied too
b.removeAttribute(ka.expando)}
// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
"script"===c&&b.text!==a.text?(p(b).text=a.text,q(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),
// This path appears unavoidable for IE9. When cloning an object
// element in IE9, the outerHTML strategy above is not sufficient.
// If the src has innerHTML and the destination does not,
// copy the src.innerHTML into the dest.innerHTML. #10324
ka.support.html5Clone&&a.innerHTML&&!ka.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&bb.test(a.type)?(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
b.defaultChecked=b.checked=a.checked,
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function u(a,c){var d,e,f=0,g=typeof a.getElementsByTagName!==W?a.getElementsByTagName(c||"*"):typeof a.querySelectorAll!==W?a.querySelectorAll(c||"*"):b;if(!g)for(g=[],d=a.childNodes||a;null!=(e=d[f]);f++)!c||ka.nodeName(e,c)?g.push(e):ka.merge(g,u(e,c));return c===b||c&&ka.nodeName(a,c)?ka.merge([a],g):g}
// Used in buildFragment, fixes the defaultChecked property
function v(a){bb.test(a.type)&&(a.defaultChecked=a.checked)}
// return a css property mapped to a potentially vendor prefixed property
function w(a,b){
// shortcut for names that are not vendor prefixed
if(b in a)return b;for(
// check for vendor prefixed names
var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=yb.length;e--;)if(b=yb[e]+c,b in a)return b;return d}function x(a,b){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return a=b||a,"none"===ka.css(a,"display")||!ka.contains(a.ownerDocument,a)}function y(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ka._data(d,"olddisplay"),c=d.style.display,b?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
f[g]||"none"!==c||(d.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===d.style.display&&x(d)&&(f[g]=ka._data(d,"olddisplay",C(d.nodeName)))):f[g]||(e=x(d),(c&&"none"!==c||!e)&&ka._data(d,"olddisplay",e?c:ka.css(d,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function z(a,b,c){var d=rb.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function A(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===b?1:0,g=0;4>f;f+=2)
// both box models exclude margin, so add it if we want it
"margin"===c&&(g+=ka.css(a,c+xb[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=ka.css(a,"padding"+xb[f],!0,e)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=ka.css(a,"border"+xb[f]+"Width",!0,e))):(
// at this point, extra isn't content, so add padding
g+=ka.css(a,"padding"+xb[f],!0,e),
// at this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=ka.css(a,"border"+xb[f]+"Width",!0,e)));return g}function B(a,b,c){
// Start with offset property, which is equivalent to the border-box value
var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=kb(a),g=ka.support.boxSizing&&"border-box"===ka.css(a,"boxSizing",!1,f);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(0>=e||null==e){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
e=lb(a,b,f),(0>e||null==e)&&(e=a.style[b]),sb.test(e))return e;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
d=g&&(ka.support.boxSizingReliable||e===a.style[b]),
// Normalize "", auto, and prepare for extra
e=parseFloat(e)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return e+A(a,b,c||(g?"border":"content"),d,f)+"px"}
// Try to determine the default display value of an element
function C(a){var b=Y,c=ub[a];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Store the correct default display
return c||(c=D(a,b),"none"!==c&&c||(jb=(jb||ka("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b.documentElement),b=(jb[0].contentWindow||jb[0].contentDocument).document,b.write("<!doctype html><html><body>"),b.close(),c=D(a,b),jb.detach()),ub[a]=c),c}
// Called ONLY from within css_defaultDisplay
function D(a,b){var c=ka(b.createElement(a)).appendTo(b.body),d=ka.css(c[0],"display");return c.remove(),d}function E(a,b,c,d){var e;if(ka.isArray(b))
// Serialize array item.
ka.each(b,function(b,e){c||Ab.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
E(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==ka.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)E(a+"["+e+"]",b[e],c,d)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function F(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(ma)||[];if(ka.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function G(a,b,c,d){function e(h){var i;return f[h]=!0,ka.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Rb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function H(a,c){var d,e,f=ka.ajaxSettings.flatOptions||{};for(e in c)c[e]!==b&&((f[e]?a:d||(d={}))[e]=c[e]);return d&&ka.extend(!0,a,d),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function I(a,c,d){
// Remove auto dataType and get content-type in the process
for(var e,f,g,h,i=a.contents,j=a.dataTypes;"*"===j[0];)j.shift(),f===b&&(f=a.mimeType||c.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(f)for(h in i)if(i[h]&&i[h].test(f)){j.unshift(h);break}
// Check to see if we have a response for the expected dataType
if(j[0]in d)g=j[0];else{
// Try convertible dataTypes
for(h in d){if(!j[0]||a.converters[h+" "+j[0]]){g=h;break}e||(e=h)}
// Or just use first one
g=g||e}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return g?(g!==j[0]&&j.unshift(g),d[g]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function J(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];
// Convert to each sequential dataType
for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(
// Seek a direct converter
g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(
// If conv2 outputs current
h=e.split(" "),h[1]===f&&(
// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(g!==!0)
// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}
// Functions to create xhrs
function K(){try{return new a.XMLHttpRequest}catch(b){}}function L(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}
// Animations created synchronously will run synchronously
function M(){return setTimeout(function(){$b=b}),$b=ka.now()}function N(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))
// we're done with this property
return d}function O(a,b,c){var d,e,f=0,g=dc.length,h=ka.Deferred().always(function(){
// don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=$b||M(),c=Math.max(0,j.startTime+j.duration-b),
// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ka.extend({},b),opts:ka.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||M(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ka.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);
// resolve when we played the last frame
// otherwise, reject
return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(P(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;
// attach callbacks from options
return ka.map(k,N,j),ka.isFunction(j.opts.start)&&j.opts.start.call(a,j),ka.fx.timer(ka.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function P(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=ka.camelCase(c),e=b[d],f=a[c],ka.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=ka.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Q(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j=this,k={},l=a.style,m=a.nodeType&&x(a),n=ka._data(a,"fxshow");
// handle queue: false promises
c.queue||(h=ka._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,j.always(function(){
// doing this makes sure that the complete handler will be called
// before this completes
j.always(function(){h.unqueued--,ka.queue(a,"fx").length||h.empty.fire()})})),
// height/width overflow pass
1===a.nodeType&&("height"in b||"width"in b)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[l.overflow,l.overflowX,l.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
"inline"===ka.css(a,"display")&&"none"===ka.css(a,"float")&&(
// inline-level elements accept inline-block;
// block-level elements need to be inline with layout
ka.support.inlineBlockNeedsLayout&&"inline"!==C(a.nodeName)?l.zoom=1:l.display="inline-block")),c.overflow&&(l.overflow="hidden",ka.support.shrinkWrapBlocks||j.always(function(){l.overflow=c.overflow[0],l.overflowX=c.overflow[1],l.overflowY=c.overflow[2]}));
// show/hide pass
for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(m?"hide":"show"))continue;k[d]=n&&n[d]||ka.style(a,d)}if(!ka.isEmptyObject(k)){n?"hidden"in n&&(m=n.hidden):n=ka._data(a,"fxshow",{}),
// store state if its toggle - enables .stop().toggle() to "reverse"
f&&(n.hidden=!m),m?ka(a).show():j.done(function(){ka(a).hide()}),j.done(function(){var b;ka._removeData(a,"fxshow");for(b in k)ka.style(a,b,k[b])});for(d in k)g=N(m?n[d]:0,d,j),d in n||(n[d]=g.start,m&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function R(a,b,c,d,e){return new R.prototype.init(a,b,c,d,e)}
// Generate parameters to create a standard animation
function S(a,b){var c,d={height:a},e=0;for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
b=b?1:0;4>e;e+=2-b)c=xb[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function T(a){return ka.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}
// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
// The deferred used on DOM ready
U,
// A central reference to the root jQuery(document)
V,
// Support: IE<10
// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
W=typeof b,
// Use the correct document accordingly with window argument (sandbox)
X=a.location,Y=a.document,Z=Y.documentElement,
// Map over jQuery in case of overwrite
$=a.jQuery,
// Map over the $ in case of overwrite
_=a.$,
// [[Class]] -> type pairs
aa={},
// List of deleted data cache ids, so we can reuse them
ba=[],ca="1.10.2",
// Save a reference to some core methods
da=ba.concat,ea=ba.push,fa=ba.slice,ga=ba.indexOf,ha=aa.toString,ia=aa.hasOwnProperty,ja=ca.trim,
// Define a local copy of jQuery
ka=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
return new ka.fn.init(a,b,V)},
// Used for matching numbers
la=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
// Used for splitting on whitespace
ma=/\S+/g,
// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
na=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
oa=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
// Match a standalone tag
pa=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
// JSON RegExp
qa=/^[\],:{}\s]*$/,ra=/(?:^|:|,)(?:\s*\[)+/g,sa=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,ta=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
// Matches dashed string for camelizing
ua=/^-ms-/,va=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
wa=function(a,b){return b.toUpperCase()},
// The ready event handler
xa=function(a){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(Y.addEventListener||"load"===a.type||"complete"===Y.readyState)&&(ya(),ka.ready())},
// Clean-up method for dom ready events
ya=function(){Y.addEventListener?(Y.removeEventListener("DOMContentLoaded",xa,!1),a.removeEventListener("load",xa,!1)):(Y.detachEvent("onreadystatechange",xa),a.detachEvent("onload",xa))};ka.fn=ka.prototype={
// The current version of jQuery being used
jquery:ca,constructor:ka,init:function(a,c,d){var e,f;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if("string"==typeof a){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:oa.exec(a),!e||!e[1]&&c)return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);
// HANDLE: $(html) -> $(array)
if(e[1]){
// HANDLE: $(html, props)
if(c=c instanceof ka?c[0]:c,
// scripts is true for back-compat
ka.merge(this,ka.parseHTML(e[1],c&&c.nodeType?c.ownerDocument||c:Y,!0)),pa.test(e[1])&&ka.isPlainObject(c))for(e in c)
// Properties of context are called as methods if possible
ka.isFunction(this[e])?this[e](c[e]):this.attr(e,c[e]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(f=Y.getElementById(e[2]),f&&f.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(f.id!==e[2])return d.find(a);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=f}return this.context=Y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):ka.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),ka.makeArray(a,this))},
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return fa.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return a 'clean' array
// Return just the object
return null==a?this.toArray():0>a?this[this.length+a]:this[a]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=ka.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b.context=this.context,b},
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(a,b){return ka.each(this,a,b)},ready:function(a){
// Add the callback
return ka.ready.promise().done(a),this},slice:function(){return this.pushStack(fa.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},map:function(a){return this.pushStack(ka.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ea,sort:[].sort,splice:[].splice},
// Give the init function the jQuery prototype for later instantiation
ka.fn.init.prototype=ka.fn,ka.extend=ka.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for(
// Handle a deep copy situation
"boolean"==typeof h&&(k=h,h=arguments[1]||{},
// skip the boolean and the target
i=2),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof h||ka.isFunction(h)||(h={}),
// extend jQuery itself if only one argument is passed
j===i&&(h=this,--i);j>i;i++)
// Only deal with non-null/undefined values
if(null!=(f=arguments[i]))
// Extend the base object
for(e in f)a=h[e],d=f[e],
// Prevent never-ending loop
h!==d&&(
// Recurse if we're merging plain objects or arrays
k&&d&&(ka.isPlainObject(d)||(c=ka.isArray(d)))?(c?(c=!1,g=a&&ka.isArray(a)?a:[]):g=a&&ka.isPlainObject(a)?a:{},
// Never move original objects, clone them
h[e]=ka.extend(k,g,d)):d!==b&&(h[e]=d));
// Return the modified object
return h},ka.extend({
// Unique for each copy of jQuery on the page
// Non-digits removed to match rinlinejQuery
expando:"jQuery"+(ca+Math.random()).replace(/\D/g,""),noConflict:function(b){return a.$===ka&&(a.$=_),b&&a.jQuery===ka&&(a.jQuery=$),ka},
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?ka.readyWait++:ka.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
if(a===!0?!--ka.readyWait:!ka.isReady){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
if(!Y.body)return setTimeout(ka.ready);
// Remember that the DOM is ready
ka.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
a!==!0&&--ka.readyWait>0||(
// If there are functions bound, to execute
U.resolveWith(Y,[ka]),
// Trigger any bound ready events
ka.fn.trigger&&ka(Y).trigger("ready").off("ready"))}},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(a){return"function"===ka.type(a)},isArray:Array.isArray||function(a){return"array"===ka.type(a)},isWindow:function(a){/* jshint eqeqeq: false */
return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?aa[ha.call(a)]||"object":typeof a},isPlainObject:function(a){var c;
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!a||"object"!==ka.type(a)||a.nodeType||ka.isWindow(a))return!1;try{
// Not own constructor property must be Object
if(a.constructor&&!ia.call(a,"constructor")&&!ia.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Support: IE<9
// Handle iteration over inherited properties before own properties.
if(ka.support.ownLast)for(c in a)return ia.call(a,c);
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
for(c in a);return c===b||ia.call(a,c)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
parseHTML:function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Y;var d=pa.exec(a),e=!c&&[];
// Single tag
// Single tag
return d?[b.createElement(d[1])]:(d=ka.buildFragment([a],b,e),e&&ka(e).remove(),ka.merge([],d.childNodes))},parseJSON:function(b){
// Attempt to parse using the native JSON parser first
// Attempt to parse using the native JSON parser first
// Make sure leading/trailing whitespace is removed (IE can't handle it)
return a.JSON&&a.JSON.parse?a.JSON.parse(b):null===b?b:"string"==typeof b&&(b=ka.trim(b),b&&qa.test(b.replace(sa,"@").replace(ta,"]").replace(ra,"")))?new Function("return "+b)():void ka.error("Invalid JSON: "+b)},
// Cross-browser xml parsing
parseXML:function(c){var d,e;if(!c||"string"!=typeof c)return null;try{a.DOMParser?(// Standard
e=new DOMParser,d=e.parseFromString(c,"text/xml")):(// IE
d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return d&&d.documentElement&&!d.getElementsByTagName("parsererror").length||ka.error("Invalid XML: "+c),d},noop:function(){},
// Evaluates a script in a global context
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(b){b&&ka.trim(b)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(a.execScript||function(b){a.eval.call(a,b)})(b)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(ua,"ms-").replace(va,wa)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},
// args is for internal usage only
each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},
// Use native String.trim function wherever possible
trim:ja&&!ja.call("\ufeffÂ ")?function(a){return null==a?"":ja.call(a)}:
// Otherwise use our own trimming functionality
function(a){return null==a?"":(a+"").replace(na,"")},
// results is for internal usage only
makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?ka.merge(d,"string"==typeof a?[a]:a):ea.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if(ga)return ga.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)
// Skip accessing in sparse arrays
if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if("number"==typeof d)for(;d>f;f++)a[e++]=c[f];else for(;c[f]!==b;)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;
// Go through the array, only saving the items
// that pass the validator function
for(c=!!c;g>f;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},
// arg is for internal usage only
map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];
// Go through the array, translating each of the items to their
if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&(i[i.length]=e);else for(f in a)e=b(a[f],f,d),null!=e&&(i[i.length]=e);
// Flatten any nested arrays
return da.apply([],i)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,c){var d,e,f;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return"string"==typeof c&&(f=a[c],c=a,a=f),ka.isFunction(a)?(d=fa.call(arguments,2),e=function(){return a.apply(c||this,d.concat(fa.call(arguments)))},e.guid=a.guid=a.guid||ka.guid++,e):b},
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
access:function(a,c,d,e,f,g,h){var i=0,j=a.length,k=null==d;
// Sets many values
if("object"===ka.type(d)){f=!0;for(i in d)ka.access(a,c,i,d[i],!0,g,h)}else if(e!==b&&(f=!0,ka.isFunction(e)||(h=!0),k&&(
// Bulk operations run against the entire set
h?(c.call(a,e),c=null):(k=c,c=function(a,b,c){return k.call(ka(a),c)})),c))for(;j>i;i++)c(a[i],d,h?e:e.call(a[i],i,c(a[i],d)));
// Gets
return f?a:k?c.call(a):j?c(a[0],d):g},now:function(){return(new Date).getTime()},
// A method for quickly swapping in/out CSS properties to get correct calculations.
// Note: this method belongs to the css module but it's needed here for the support module.
// If support gets modularized, this method should be moved back to the css module.
swap:function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e}}),ka.ready.promise=function(b){if(!U)
// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
if(U=ka.Deferred(),"complete"===Y.readyState)
// Handle it asynchronously to allow scripts the opportunity to delay ready
setTimeout(ka.ready);else if(Y.addEventListener)
// Use the handy event callback
Y.addEventListener("DOMContentLoaded",xa,!1),
// A fallback to window.onload, that will always work
a.addEventListener("load",xa,!1);else{
// Ensure firing before onload, maybe late but safe also for iframes
Y.attachEvent("onreadystatechange",xa),
// A fallback to window.onload, that will always work
a.attachEvent("onload",xa);
// If IE and not a frame
// continually check to see if the document is ready
var c=!1;try{c=null==a.frameElement&&Y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!ka.isReady){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
c.doScroll("left")}catch(a){return setTimeout(e,50)}
// detach all dom ready events
ya(),
// and execute any waiting functions
ka.ready()}}()}return U.promise(b)},
// Populate the class2type map
ka.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){aa["[object "+b+"]"]=b.toLowerCase()}),
// All jQuery objects should point back to these
V=ka(Y),/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
function(a,b){function c(a,b,c,d){var e,f,g,h,
// QSA vars
i,j,k,l,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){
// Shortcuts
if(e=ta.exec(a))
// Speed-up: Sizzle("#ID")
if(g=e[1]){if(9===h){
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(f=b.getElementById(g),!f||!f.parentNode)return c;
// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(f.id===g)return c.push(f),c}else
// Context is not a document
if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return aa.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.getElementsByClassName)return aa.apply(c,b.getElementsByClassName(g)),c}
// QSA path
if(x.qsa&&(!J||!J.test(a))){
// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(l=k=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=m(a),(k=b.getAttribute("id"))?l=k.replace(wa,"\\$&"):b.setAttribute("id",l),l="[id='"+l+"'] ",i=j.length;i--;)j[i]=l+n(j[i]);o=na.test(a)&&b.parentNode||b,p=j.join(",")}if(p)try{return aa.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{k||b.removeAttribute("id")}}}
// All others
return v(a.replace(ja,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function d(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+=" ")>z.cacheLength&&delete a[b.shift()],a[c]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function e(a){return a[N]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function f(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function g(a,b){for(var c=a.split("|"),d=a.length;d--;)z.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function h(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||X)-(~a.sourceIndex||X);
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function i(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function j(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function k(a){return e(function(b){return b=+b,e(function(c,d){
// Match elements found at the specified indexes
for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}
// Easy API for creating new setFilters
function l(){}function m(a,b){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return b?0:k.slice(0);for(h=a,i=[],j=z.preFilter;h;){
// Comma and first run
(!d||(e=la.exec(h)))&&(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ma.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(ja," ")}),h=h.slice(d.length));
// Filters
for(g in z.filter)!(e=ra[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return b?h.length:h?c.error(a):S(a,i).slice(0)}function n(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=P+" "+f;
// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e)if(j=b[N]||(b[N]={}),(i=j[d])&&i[0]===k){if((h=i[1])===!0||h===y)return h===!0}else if(i=j[d]=[k],i[1]=a(b,c,g)||y,i[1]===!0)return!0}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,d,f,g){return d&&!d[N]&&(d=r(d)),f&&!f[N]&&(f=r(f,g)),e(function(e,g,h,i){var j,k,l,m=[],n=[],o=g.length,
// Get initial elements from seed or context
p=e||u(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
r=!a||!e&&b?p:q(p,m,a,h,i),s=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(e?a:o||d)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:r;
// Apply postFilter
if(
// Find primary matches
c&&c(r,s,h,i),d)for(j=q(s,n),d(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));if(e){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=s.length;k--;)(l=s[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(r[k]=l);f(null,s=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=s.length;k--;)(l=s[k])&&(j=f?ca.call(e,l):m[k])>-1&&(e[j]=!(g[j]=l))}}else s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):aa.apply(g,s)})}function s(a){for(var b,c,d,e=a.length,f=z.relative[a[0].type],g=f||z.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=o(function(a){return a===b},g,!0),j=o(function(a){return ca.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=z.relative[a[h].type])k=[o(p(k),c)];else{
// Return special upon seeing a positional matcher
if(c=z.filter[a[h].type].apply(null,a[h].matches),c[N]){for(
// Find the next relative operator (if any) for proper handling
d=++h;e>d&&!z.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ja,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&n(a))}k.push(c)}return p(k)}function t(a,b){
// A counter to specify which element is currently being matched
var d=0,f=b.length>0,g=a.length>0,h=function(e,h,i,j,k){var l,m,n,o=[],p=0,r="0",s=e&&[],t=null!=k,u=D,
// We must always have either seed elements or context
v=e||g&&z.find.TAG("*",k&&h.parentNode||h),
// Use integer dirruns iff this is the outermost matcher
w=P+=null==u?1:Math.random()||.1;
// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
for(t&&(D=h!==G&&h,y=d);null!=(l=v[r]);r++){if(g&&l){for(m=0;n=a[m++];)if(n(l,h,i)){j.push(l);break}t&&(P=w,y=++d)}
// Track unmatched elements for set filters
f&&(
// They will have gone through all possible matchers
(l=!n&&l)&&p--,
// Lengthen the array for every element, matched or not
e&&s.push(l))}if(
// Apply set filters to unmatched elements
p+=r,f&&r!==p){for(m=0;n=b[m++];)n(s,o,h,i);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(p>0)for(;r--;)s[r]||o[r]||(o[r]=$.call(j));
// Discard index placeholder values to get only actual matches
o=q(o)}
// Add matches to results
aa.apply(j,o),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
t&&!e&&o.length>0&&p+b.length>1&&c.uniqueSort(j)}
// Override manipulation of globals by nested matchers
return t&&(P=w,D=u),s};return f?e(h):h}function u(a,b,d){for(var e=0,f=b.length;f>e;e++)c(a,b[e],d);return d}function v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(
// Take a shortcut and set the context if the root selector is an ID
f=j[0]=j[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&I&&z.relative[f[1].type]){if(b=(z.find.ID(g.matches[0].replace(xa,ya),b)||[])[0],!b)return c;a=a.slice(f.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
e=ra.needsContext.test(a)?0:f.length;e--&&(g=f[e],!z.relative[h=g.type]);)if((i=z.find[h])&&(d=i(g.matches[0].replace(xa,ya),na.test(f[0].type)&&b.parentNode||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),a=d.length&&n(f),!a)return aa.apply(c,d),c;break}}
// Compile and execute a filtering function
// Provide `match` to avoid retokenization if we modified the selector above
return C(a,j)(d,b,!I,c,na.test(a)),c}var w,x,y,z,A,B,C,D,E,
// Local document vars
F,G,H,I,J,K,L,M,
// Instance-specific data
N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=d(),S=d(),T=d(),U=!1,V=function(a,b){return a===b?(U=!0,0):0},
// General-purpose constants
W=typeof b,X=1<<31,
// Instance methods
Y={}.hasOwnProperty,Z=[],$=Z.pop,_=Z.push,aa=Z.push,ba=Z.slice,
// Use a stripped-down indexOf if we can't use a native one
ca=Z.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},da="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
ea="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/css3-syntax/#characters
fa="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ga=fa.replace("w","w#"),
// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
ha="\\["+ea+"*("+fa+")"+ea+"*(?:([*^$|!~]?=)"+ea+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ga+")|)|)"+ea+"*\\]",
// Prefer arguments quoted,
//   then not containing pseudos/brackets,
//   then attribute selectors/non-parenthetical expressions,
//   then anything else
// These preferences are here to reduce the number of selectors
//   needing tokenize in the PSEUDO preFilter
ia=":("+fa+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ha.replace(3,8)+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ja=new RegExp("^"+ea+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ea+"+$","g"),la=new RegExp("^"+ea+"*,"+ea+"*"),ma=new RegExp("^"+ea+"*([>+~]|"+ea+")"+ea+"*"),na=new RegExp(ea+"*[+~]"),oa=new RegExp("="+ea+"*([^\\]'\"]*)"+ea+"*\\]","g"),pa=new RegExp(ia),qa=new RegExp("^"+ga+"$"),ra={ID:new RegExp("^#("+fa+")"),CLASS:new RegExp("^\\.("+fa+")"),TAG:new RegExp("^("+fa.replace("w","w*")+")"),ATTR:new RegExp("^"+ha),PSEUDO:new RegExp("^"+ia),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ea+"*(even|odd|(([+-]|)(\\d*)n|)"+ea+"*(?:([+-]|)"+ea+"*(\\d+)|))"+ea+"*\\)|)","i"),bool:new RegExp("^(?:"+da+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ea+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ea+"*((?:-\\d)?\\d*)"+ea+"*\\)|)(?=[^-]|$)","i")},sa=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ta=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ua=/^(?:input|select|textarea|button)$/i,va=/^h\d$/i,wa=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
xa=new RegExp("\\\\([\\da-f]{1,6}"+ea+"?|("+ea+")|.)","ig"),ya=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};
// Optimize for push.apply( _, NodeList )
try{aa.apply(Z=ba.call(O.childNodes),O.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
Z[O.childNodes.length].nodeType}catch(za){aa={apply:Z.length?
// Leverage slice if possible
function(a,b){_.apply(a,ba.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
B=c.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},
// Expose support vars for convenience
x=c.support={},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
F=c.setDocument=function(a){var b=a?a.ownerDocument||a:O,c=b.defaultView;
// If no document and documentElement is available, return
// If no document and documentElement is available, return
// Set our document
// Support tests
// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Check if getElementsByClassName can be trusted
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return b!==G&&9===b.nodeType&&b.documentElement?(G=b,H=b.documentElement,I=!B(b),c&&c.attachEvent&&c!==c.top&&c.attachEvent("onbeforeunload",function(){F()}),x.attributes=f(function(a){return a.className="i",!a.getAttribute("className")}),x.getElementsByTagName=f(function(a){return a.appendChild(b.createComment("")),!a.getElementsByTagName("*").length}),x.getElementsByClassName=f(function(a){
// Support: Opera<10
// Catch gEBCN failure to find non-leading classes
// Support: Safari<4
// Catch class over-caching
return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),x.getById=f(function(a){return H.appendChild(a).id=N,!b.getElementsByName||!b.getElementsByName(N).length}),x.getById?(z.find.ID=function(a,b){if(typeof b.getElementById!==W&&I){var c=b.getElementById(a);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return c&&c.parentNode?[c]:[]}},z.filter.ID=function(a){var b=a.replace(xa,ya);return function(a){return a.getAttribute("id")===b}}):(delete z.find.ID,z.filter.ID=function(a){var b=a.replace(xa,ya);return function(a){var c=typeof a.getAttributeNode!==W&&a.getAttributeNode("id");return c&&c.value===b}}),z.find.TAG=x.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==W?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},z.find.CLASS=x.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==W&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(x.qsa=sa.test(b.querySelectorAll))&&(f(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
a.innerHTML="<select><option selected=''></option></select>",
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||J.push("\\["+ea+"*(?:value|"+da+")"),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||J.push(":checked")}),f(function(a){
// Support: Opera 10-12/IE8
// ^= $= *= and empty values
// Should not select anything
// Support: Windows 8 Native Apps
// The type attribute is restricted during .innerHTML assignment
var c=b.createElement("input");c.setAttribute("type","hidden"),a.appendChild(c).setAttribute("t",""),a.querySelectorAll("[t^='']").length&&J.push("[*^$]="+ea+"*(?:''|\"\")"),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),J.push(",.*:")})),(x.matchesSelector=sa.test(L=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&f(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
x.disconnectedMatch=L.call(a,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
L.call(a,"[s!='']:x"),K.push("!=",ia)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),M=sa.test(H.contains)||H.compareDocumentPosition?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=H.compareDocumentPosition?function(a,c){
// Flag for duplicate removal
if(a===c)return U=!0,0;var d=c.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(c);
// Disconnected nodes
// Choose the first element that is related to our preferred document
return d?1&d||!x.sortDetached&&c.compareDocumentPosition(a)===d?a===b||M(O,a)?-1:c===b||M(O,c)?1:E?ca.call(E,a)-ca.call(E,c):0:4&d?-1:1:a.compareDocumentPosition?-1:1}:function(a,c){var d,e=0,f=a.parentNode,g=c.parentNode,i=[a],j=[c];
// Exit early if the nodes are identical
if(a===c)return U=!0,0;if(!f||!g)return a===b?-1:c===b?1:f?-1:g?1:E?ca.call(E,a)-ca.call(E,c):0;if(f===g)return h(a,c);for(
// Otherwise we need full lists of their ancestors for comparison
d=a;d=d.parentNode;)i.unshift(d);for(d=c;d=d.parentNode;)j.unshift(d);
// Walk down the tree looking for a discrepancy
for(;i[e]===j[e];)e++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return e?h(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},b):G},c.matches=function(a,b){return c(a,null,null,b)},c.matchesSelector=function(a,b){if(
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a),
// Make sure that attribute selectors are quoted
b=b.replace(oa,"='$1']"),!(!x.matchesSelector||!I||K&&K.test(b)||J&&J.test(b)))try{var d=L.call(a,b);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||x.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(e){}return c(b,G,null,[a]).length>0},c.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==G&&F(a),M(a,b)},c.attr=function(a,c){
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a);var d=z.attrHandle[c.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
e=d&&Y.call(z.attrHandle,c.toLowerCase())?d(a,c,!I):b;return e===b?x.attributes||!I?a.getAttribute(c):(e=a.getAttributeNode(c))&&e.specified?e.value:null:e},c.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
c.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
U=!x.detectDuplicates,E=!x.sortStable&&a.slice(0),a.sort(V),U){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
A=c.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (see #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=A(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
for(;b=a[d];d++)
// Do not traverse comment nodes
c+=A(b);
// Do not include comment or processing instruction nodes
return c},z=c.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:e,match:ra,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(xa,ya),a[3]=(a[4]||a[5]||"").replace(xa,ya),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||c.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&c.error(a[0]),a},PSEUDO:function(a){var c,d=!a[5]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return ra.CHILD.test(a[0])?null:(a[3]&&a[4]!==b?a[2]=a[4]:d&&pa.test(d)&&(c=m(d,!0))&&(c=d.indexOf(")",d.length-c)-d.length)&&(a[0]=a[0].slice(0,c),a[2]=d.slice(0,c)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(xa,ya).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ea+")"+a+"("+ea+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==W&&a.getAttribute("class")||"")})},ATTR:function(a,b,d){return function(e){var f=c.attr(e,a);return null==f?"!="===b:b?(f+="","="===b?f===d:"!="===b?f!==d:"^="===b?d&&0===f.indexOf(d):"*="===b?d&&f.indexOf(d)>-1:"$="===b?d&&f.slice(-d.length)===d:"~="===b?(" "+f+" ").indexOf(d)>-1:"|="===b?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){
// :(first|last|only)-(child|of-type)
if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){for(
// Seek `elem` from a previously-cached index
k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(
// Fallback to seeking `elem` from the start
m=n=0)||o.pop();)
// When found, cache indexes on `parent` and break
if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else
// Use the same loop as above to seek `elem` from the start
for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(
// Cache the index of each encountered element
s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););
// Incorporate the offset, then check against cycle size
return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var d,f=z.pseudos[a]||z.setFilters[a.toLowerCase()]||c.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[N]?f(b):f.length>1?(d=[a,a,"",b],z.setFilters.hasOwnProperty(a.toLowerCase())?e(function(a,c){for(var d,e=f(a,b),g=e.length;g--;)d=ca.call(a,e[g]),a[d]=!(c[d]=e[g])}):function(a){return f(a,0,d)}):f}},pseudos:{
// Potentially complex pseudos
not:e(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],d=C(a.replace(ja,"$1"));return d[N]?e(function(a,b,c,e){
// Match elements unmatched by `matcher`
for(var f,g=d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:e(function(a){return function(b){return c(a,b).length>0}}),contains:e(function(a){return function(b){return(b.textContent||b.innerText||A(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:e(function(a){
// lang value must be a valid identifier
return qa.test(a||"")||c.error("unsupported lang: "+a),a=a.replace(xa,ya).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
// Accessing this property makes selected-by-default
// options in Safari work properly
return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},
// Contents
empty:function(a){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
//   not comment, processing instructions, or others
// Thanks to Diego Perini for the nodeName shortcut
//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeName>"@"||3===a.nodeType||4===a.nodeType)return!1;return!0},parent:function(a){return!z.pseudos.empty(a)},
// Element/input types
header:function(a){return va.test(a.nodeName)},input:function(a){return ua.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
// use getAttribute instead to test this case
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||b.toLowerCase()===a.type)},
// Position-in-collection
first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[0>c?c+b:c]}),even:k(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},z.pseudos.nth=z.pseudos.eq;
// Add button/input type pseudos
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})z.pseudos[w]=i(w);for(w in{submit:!0,reset:!0})z.pseudos[w]=j(w);l.prototype=z.filters=z.pseudos,z.setFilters=new l,C=c.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(
// Generate a function of recursive functions that can be used to check each element
b||(b=m(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);
// Cache the compiled function
f=T(a,t(e,d))}return f},
// One-time assignments
// Sort stability
x.sortStable=N.split("").sort(V).join("")===N,
// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
x.detectDuplicates=U,
// Initialize against the default document
F(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
x.sortDetached=f(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(G.createElement("div"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
f(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||g("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
x.attributes&&f(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||g("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
f(function(a){return null==a.getAttribute("disabled")})||g(da,function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&d.specified?d.value:a[b]===!0?b.toLowerCase():null}),ka.find=c,ka.expr=c.selectors,ka.expr[":"]=ka.expr.pseudos,ka.unique=c.uniqueSort,ka.text=c.getText,ka.isXMLDoc=c.isXML,ka.contains=c.contains}(a);
// String to Object options format cache
var za={};/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
ka.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?za[a]||d(a):ka.extend({},a);var// Flag to know if list is currently firing
c,
// Last fire value (for non-forgettable lists)
e,
// Flag to know if list was already fired
f,
// End of the loop when firing
g,
// Index of currently firing callback (modified by remove if needed)
h,
// First callback to fire (used internally by add and fireWith)
i,
// Actual callback list
j=[],
// Stack of fire calls for repeatable lists
k=!a.once&&[],
// Fire callbacks
l=function(b){for(e=a.memory&&b,f=!0,h=i||0,i=0,g=j.length,c=!0;j&&g>h;h++)if(j[h].apply(b[0],b[1])===!1&&a.stopOnFalse){e=!1;// To prevent further calls using add
break}c=!1,j&&(k?k.length&&l(k.shift()):e?j=[]:m.disable())},
// Actual Callbacks object
m={
// Add a callback or a collection of callbacks to the list
add:function(){if(j){
// First, we save the current length
var b=j.length;!function d(b){ka.each(b,function(b,c){var e=ka.type(c);"function"===e?a.unique&&m.has(c)||j.push(c):c&&c.length&&"string"!==e&&
// Inspect recursively
d(c)})}(arguments),
// Do we need to add the callbacks to the
// current firing batch?
c?g=j.length:e&&(i=b,l(e))}return this},
// Remove a callback from the list
remove:function(){return j&&ka.each(arguments,function(a,b){for(var d;(d=ka.inArray(b,j,d))>-1;)j.splice(d,1),
// Handle firing indexes
c&&(g>=d&&g--,h>=d&&h--)}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?ka.inArray(a,j)>-1:!(!j||!j.length)},
// Remove all callbacks from the list
empty:function(){return j=[],g=0,this},
// Have the list do nothing anymore
disable:function(){return j=k=e=b,this},
// Is it disabled?
disabled:function(){return!j},
// Lock the list in its current state
lock:function(){return k=b,e||m.disable(),this},
// Is it locked?
locked:function(){return!k},
// Call all callbacks with the given context and arguments
fireWith:function(a,b){return!j||f&&!k||(b=b||[],b=[a,b.slice?b.slice():b],c?k.push(b):l(b)),this},
// Call all the callbacks with the given arguments
fire:function(){return m.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!f}};return m},ka.extend({Deferred:function(a){var b=[
// action, add listener, listener list, final state
["resolve","done",ka.Callbacks("once memory"),"resolved"],["reject","fail",ka.Callbacks("once memory"),"rejected"],["notify","progress",ka.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return ka.Deferred(function(c){ka.each(b,function(b,f){var g=f[0],h=ka.isFunction(a[b])&&a[b];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=h&&h.apply(this,arguments);a&&ka.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g+"With"](this===d?c.promise():this,h?[a]:arguments)})}),a=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?ka.extend(a,d):d}},e={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return d.pipe=d.then,ka.each(b,function(a,f){var g=f[2],h=f[3];
// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = [ resolved | rejected ]
c=h},b[1^a][2].disable,b[2][2].lock),
// deferred[ resolve | reject | notify ]
e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},
// Deferred helper
when:function(a){var b,c,d,e=0,f=fa.call(arguments),g=f.length,
// the count of uncompleted subordinates
h=1!==g||a&&ka.isFunction(a.promise)?g:0,
// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
i=1===h?a:ka.Deferred(),
// Update function for both resolve and progress values
j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?fa.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};
// add listeners to Deferred subordinates; treat others as resolved
if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&ka.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;
// if we're not waiting on anything, resolve the master
return h||i.resolveWith(d,f),i.promise()}}),ka.support=function(b){var c,d,e,f,g,h,i,j,k,l=Y.createElement("div");if(
// Setup
l.setAttribute("className","t"),l.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
// Finish early in limited (non-browser) environments
c=l.getElementsByTagName("*")||[],d=l.getElementsByTagName("a")[0],!d||!d.style||!c.length)return b;
// First batch of tests
f=Y.createElement("select"),h=f.appendChild(Y.createElement("option")),e=l.getElementsByTagName("input")[0],d.style.cssText="top:1px;float:left;opacity:.5",
// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
b.getSetAttribute="t"!==l.className,
// IE strips leading whitespace when .innerHTML is used
b.leadingWhitespace=3===l.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
b.tbody=!l.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
b.htmlSerialize=!!l.getElementsByTagName("link").length,
// Get the style information from getAttribute
// (IE uses .cssText instead)
b.style=/top/.test(d.getAttribute("style")),
// Make sure that URLs aren't manipulated
// (IE normalizes it by default)
b.hrefNormalized="/a"===d.getAttribute("href"),
// Make sure that element opacity exists
// (IE uses filter instead)
// Use a regex to work around a WebKit issue. See #5145
b.opacity=/^0.5/.test(d.style.opacity),
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
b.cssFloat=!!d.style.cssFloat,
// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
b.checkOn=!!e.value,
// Make sure that a selected-by-default option has a working selected property.
// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
b.optSelected=h.selected,
// Tests for enctype support on a form (#6743)
b.enctype=!!Y.createElement("form").enctype,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
b.html5Clone="<:nav></:nav>"!==Y.createElement("nav").cloneNode(!0).outerHTML,
// Will be defined later
b.inlineBlockNeedsLayout=!1,b.shrinkWrapBlocks=!1,b.pixelPosition=!1,b.deleteExpando=!0,b.noCloneEvent=!0,b.reliableMarginRight=!0,b.boxSizingReliable=!0,
// Make sure checked status is properly cloned
e.checked=!0,b.noCloneChecked=e.cloneNode(!0).checked,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
f.disabled=!0,b.optDisabled=!h.disabled;
// Support: IE<9
try{delete l.test}catch(m){b.deleteExpando=!1}
// Check if we can trust getAttribute("value")
e=Y.createElement("input"),e.setAttribute("value",""),b.input=""===e.getAttribute("value"),
// Check if an input maintains its value after becoming a radio
e.value="t",e.setAttribute("type","radio"),b.radioValue="t"===e.value,
// #11217 - WebKit loses check when the name is after the checked attribute
e.setAttribute("checked","t"),e.setAttribute("name","t"),g=Y.createDocumentFragment(),g.appendChild(e),
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
b.appendChecked=e.checked,
// WebKit doesn't clone checked state correctly in fragments
b.checkClone=g.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<9
// Opera does not clone events (and typeof div.attachEvent === undefined).
// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
l.attachEvent&&(l.attachEvent("onclick",function(){b.noCloneEvent=!1}),l.cloneNode(!0).click());
// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
for(k in{submit:!0,change:!0,focusin:!0})l.setAttribute(i="on"+k,"t"),b[k+"Bubbles"]=i in a||l.attributes[i].expando===!1;l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===l.style.backgroundClip;
// Support: IE<9
// Iteration over object's inherited properties before its own.
for(k in ka(b))break;
// Run tests that need a body at doc ready
// Null elements to avoid leaks in IE
return b.ownLast="0"!==k,ka(function(){var c,d,e,f="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",g=Y.getElementsByTagName("body")[0];g&&(c=Y.createElement("div"),c.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",g.appendChild(c).appendChild(l),
// Support: IE8
// Check if table cells still have offsetWidth/Height when they are set
// to display:none and there are still other visible table cells in a
// table row; if so, offsetWidth/Height are not reliable for use when
// determining if an element has been hidden directly using
// display:none (it is still safe to use offsets if a parent element is
// hidden; don safety goggles and see bug #4512 for more information).
l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=l.getElementsByTagName("td"),e[0].style.cssText="padding:0;margin:0;border:0;display:none",j=0===e[0].offsetHeight,e[0].style.display="",e[1].style.display="none",
// Support: IE8
// Check if empty table cells still have offsetWidth/Height
b.reliableHiddenOffsets=j&&0===e[0].offsetHeight,
// Check box-sizing and margin behavior.
l.innerHTML="",l.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
// Workaround failing boxSizing test due to offsetWidth returning wrong value
// with some non-1 values of body zoom, ticket #13543
ka.swap(g,null!=g.style.zoom?{zoom:1}:{},function(){b.boxSizing=4===l.offsetWidth}),
// Use window.getComputedStyle because jsdom on node.js will break without it.
a.getComputedStyle&&(b.pixelPosition="1%"!==(a.getComputedStyle(l,null)||{}).top,b.boxSizingReliable="4px"===(a.getComputedStyle(l,null)||{width:"4px"}).width,
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// Fails in WebKit before Feb 2011 nightlies
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
d=l.appendChild(Y.createElement("div")),d.style.cssText=l.style.cssText=f,d.style.marginRight=d.style.width="0",l.style.width="1px",b.reliableMarginRight=!parseFloat((a.getComputedStyle(d,null)||{}).marginRight)),typeof l.style.zoom!==W&&(
// Support: IE<8
// Check if natively block-level elements act like inline-block
// elements when setting their display to 'inline' and giving
// them layout
l.innerHTML="",l.style.cssText=f+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=3===l.offsetWidth,
// Support: IE6
// Check if elements with layout shrink-wrap their children
l.style.display="block",l.innerHTML="<div></div>",l.firstChild.style.width="5px",b.shrinkWrapBlocks=3!==l.offsetWidth,b.inlineBlockNeedsLayout&&(
// Prevent IE 6 from affecting layout for positioned elements #11048
// Prevent IE from shrinking the body in IE 7 mode #12869
// Support: IE<8
g.style.zoom=1)),g.removeChild(c),
// Null elements to avoid leaks in IE
c=l=e=d=null)}),c=f=g=h=d=e=null,b}({});var Aa=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Ba=/([A-Z])/g;ka.extend({cache:{},
// The following elements throw uncatchable exceptions if you
// attempt to add expando properties to them.
noData:{applet:!0,embed:!0,
// Ban all objects except for Flash (which handle expandos)
object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?ka.cache[a[ka.expando]]:a[ka.expando],!!a&&!h(a)},data:function(a,b,c){return e(a,b,c)},removeData:function(a,b){return f(a,b)},
// For internal use only.
_data:function(a,b,c){return e(a,b,c,!0)},_removeData:function(a,b){return f(a,b,!0)},
// A method for determining if a DOM node can handle the data expando
acceptData:function(a){
// Do not set data on non-element because it will not be cleared (#8335).
if(a.nodeType&&1!==a.nodeType&&9!==a.nodeType)return!1;var b=a.nodeName&&ka.noData[a.nodeName.toLowerCase()];
// nodes accept data unless otherwise specified; rejection can be conditional
return!b||b!==!0&&a.getAttribute("classid")===b}}),ka.fn.extend({data:function(a,c){var d,e,f=null,h=0,i=this[0];
// Special expections of .data basically thwart jQuery.access,
// so implement the relevant behavior ourselves
// Gets all values
if(a===b){if(this.length&&(f=ka.data(i),1===i.nodeType&&!ka._data(i,"parsedAttrs"))){for(d=i.attributes;h<d.length;h++)e=d[h].name,0===e.indexOf("data-")&&(e=ka.camelCase(e.slice(5)),g(i,e,f[e]));ka._data(i,"parsedAttrs",!0)}return f}
// Sets multiple values
// Sets multiple values
// Sets one value
// Gets one value
// Try to fetch any internally stored data first
return"object"==typeof a?this.each(function(){ka.data(this,a)}):arguments.length>1?this.each(function(){ka.data(this,a,c)}):i?g(i,a,ka.data(i,a)):null},removeData:function(a){return this.each(function(){ka.removeData(this,a)})}}),ka.extend({queue:function(a,b,c){var d;
// Speed up dequeue by getting out quickly if this is just a lookup
return a?(b=(b||"fx")+"queue",d=ka._data(a,b),c&&(!d||ka.isArray(c)?d=ka._data(a,b,ka.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=ka.queue(a,b),d=c.length,e=c.shift(),f=ka._queueHooks(a,b),g=function(){ka.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// not intended for public consumption - generates a queueHooks object, or returns the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return ka._data(a,c)||ka._data(a,c,{empty:ka.Callbacks("once memory").add(function(){ka._removeData(a,b+"queue"),ka._removeData(a,c)})})}}),ka.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),arguments.length<d?ka.queue(this[0],a):c===b?this:this.each(function(){var b=ka.queue(this,a,c);
// ensure a hooks for this queue
ka._queueHooks(this,a),"fx"===a&&"inprogress"!==b[0]&&ka.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ka.dequeue(this,a)})},
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
delay:function(a,b){return a=ka.fx?ka.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,c){var d,e=1,f=ka.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};for("string"!=typeof a&&(c=a,a=b),a=a||"fx";h--;)d=ka._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var Ca,Da,Ea=/[\t\r\n\f]/g,Fa=/\r/g,Ga=/^(?:input|select|textarea|button|object)$/i,Ha=/^(?:a|area)$/i,Ia=/^(?:checked|selected)$/i,Ja=ka.support.getSetAttribute,Ka=ka.support.input;ka.fn.extend({attr:function(a,b){return ka.access(this,ka.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ka.removeAttr(this,a)})},prop:function(a,b){return ka.access(this,ka.prop,a,b,arguments.length>1)},removeProp:function(a){return a=ka.propFix[a]||a,this.each(function(){
// try/catch handles cases where IE balks (such as removing a property on window)
try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g=0,h=this.length,i="string"==typeof a&&a;if(ka.isFunction(a))return this.each(function(b){ka(this).addClass(a.call(this,b,this.className))});if(i)for(
// The disjunction here is for better compressibility (see removeClass)
b=(a||"").match(ma)||[];h>g;g++)if(c=this[g],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Ea," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");c.className=ka.trim(d)}return this},removeClass:function(a){var b,c,d,e,f,g=0,h=this.length,i=0===arguments.length||"string"==typeof a&&a;if(ka.isFunction(a))return this.each(function(b){ka(this).removeClass(a.call(this,b,this.className))});if(i)for(b=(a||"").match(ma)||[];h>g;g++)if(c=this[g],
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Ea," "):"")){for(f=0;e=b[f++];)
// Remove *all* instances
for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");c.className=a?ka.trim(d):""}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(ka.isFunction(a)?function(c){ka(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(
// toggle individual class names
var b,d=0,e=ka(this),f=a.match(ma)||[];b=f[d++];)
// check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===W||"boolean"===c)&&(this.className&&
// store className if set
ka._data(this,"__className__",this.className),
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||a===!1?"":ka._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Ea," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];{if(arguments.length)return e=ka.isFunction(a),this.each(function(c){var f;1===this.nodeType&&(f=e?a.call(this,c,ka(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==f?f="":"number"==typeof f?f+="":ka.isArray(f)&&(f=ka.map(f,function(a){return null==a?"":a+""})),d=ka.valHooks[this.type]||ka.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
d&&"set"in d&&d.set(this,f,"value")!==b||(this.value=f))});if(f)
// handle most common string cases
// handle cases where value is null/undef or number
return d=ka.valHooks[f.type]||ka.valHooks[f.nodeName.toLowerCase()],d&&"get"in d&&(c=d.get(f,"value"))!==b?c:(c=f.value,"string"==typeof c?c.replace(Fa,""):null==c?"":c)}}}),ka.extend({valHooks:{option:{get:function(a){
// Use proper attribute retrieval(#6932, #12072)
var b=ka.find.attr(a,"value");return null!=b?b:a.text}},select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)
// oldIE doesn't update selected after form reset (#2551)
if(c=d[i],!(!c.selected&&i!==e||(
// Don't return options that are disabled or in a disabled optgroup
ka.support.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&ka.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=ka(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=ka.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=ka.inArray(ka(d).val(),f)>=0)&&(c=!0);
// force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),f}}},attr:function(a,c,d){var e,f,g=a.nodeType;
// don't get/set attributes on text, comment and attribute nodes
if(a&&3!==g&&8!==g&&2!==g)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return typeof a.getAttribute===W?ka.prop(a,c,d):(1===g&&ka.isXMLDoc(a)||(c=c.toLowerCase(),e=ka.attrHooks[c]||(ka.expr.match.bool.test(c)?Da:Ca)),d===b?e&&"get"in e&&null!==(f=e.get(a,c))?f:(f=ka.find.attr(a,c),null==f?b:f):null!==d?e&&"set"in e&&(f=e.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d):void ka.removeAttr(a,c))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(ma);if(f&&1===a.nodeType)for(;c=f[e++];)d=ka.propFix[c]||c,
// Boolean attributes get special treatment (#10870)
ka.expr.match.bool.test(c)?
// Set corresponding property to false
Ka&&Ja||!Ia.test(c)?a[d]=!1:a[ka.camelCase("default-"+c)]=a[d]=!1:ka.attr(a,c,""),a.removeAttribute(Ja?c:d)},attrHooks:{type:{set:function(a,b){if(!ka.support.radioValue&&"radio"===b&&ka.nodeName(a,"input")){
// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(a,c,d){var e,f,g,h=a.nodeType;
// don't get/set properties on text, comment and attribute nodes
if(a&&3!==h&&8!==h&&2!==h)
// Fix name and attach hooks
return g=1!==h||!ka.isXMLDoc(a),g&&(c=ka.propFix[c]||c,f=ka.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]},propHooks:{tabIndex:{get:function(a){
// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var b=ka.find.attr(a,"tabindex");return b?parseInt(b,10):Ga.test(a.nodeName)||Ha.test(a.nodeName)&&a.href?0:-1}}}}),
// Hooks for boolean attributes
Da={set:function(a,b,c){
// Remove boolean attributes when set to false
// IE<8 needs the *property* name
return b===!1?ka.removeAttr(a,c):Ka&&Ja||!Ia.test(c)?a.setAttribute(!Ja&&ka.propFix[c]||c,c):a[ka.camelCase("default-"+c)]=a[c]=!0,c}},ka.each(ka.expr.match.bool.source.match(/\w+/g),function(a,c){var d=ka.expr.attrHandle[c]||ka.find.attr;ka.expr.attrHandle[c]=Ka&&Ja||!Ia.test(c)?function(a,c,e){var f=ka.expr.attrHandle[c],g=e?b:/* jshint eqeqeq: false */
(ka.expr.attrHandle[c]=b)!=d(a,c,e)?c.toLowerCase():null;return ka.expr.attrHandle[c]=f,g}:function(a,c,d){return d?b:a[ka.camelCase("default-"+c)]?c.toLowerCase():null}}),
// fix oldIE attroperties
Ka&&Ja||(ka.attrHooks.value={set:function(a,b,c){
// Does not return so that setAttribute is also used
return ka.nodeName(a,"input")?void(a.defaultValue=b):Ca&&Ca.set(a,b,c)}}),
// IE6/7 do not support getting/setting some attributes with get/setAttribute
Ja||(
// Use this for any attribute in IE6/7
// This fixes almost every IE6/7 issue
Ca={set:function(a,c,d){
// Set the existing or create a new attribute node
var e=a.getAttributeNode(d);
// Break association with cloned elements by also using setAttribute (#9646)
return e||a.setAttributeNode(e=a.ownerDocument.createAttribute(d)),e.value=c+="","value"===d||c===a.getAttribute(d)?c:b}},ka.expr.attrHandle.id=ka.expr.attrHandle.name=ka.expr.attrHandle.coords=
// Some attributes are constructed with empty-string values when not defined
function(a,c,d){var e;return d?b:(e=a.getAttributeNode(c))&&""!==e.value?e.value:null},ka.valHooks.button={get:function(a,c){var d=a.getAttributeNode(c);return d&&d.specified?d.value:b},set:Ca.set},
// Set contenteditable to false on removals(#10429)
// Setting to empty string throws an error as an invalid value
ka.attrHooks.contenteditable={set:function(a,b,c){Ca.set(a,""===b?!1:b,c)}},
// Set width and height to auto instead of 0 on empty string( Bug #8150 )
// This is for removals
ka.each(["width","height"],function(a,b){ka.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),
// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
ka.support.hrefNormalized||
// href/src property should get the full normalized URL (#10299/#12915)
ka.each(["href","src"],function(a,b){ka.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),ka.support.style||(ka.attrHooks.style={get:function(a){
// Return undefined in the case of empty string
// Note: IE uppercases css property names, but if we were to .toLowerCase()
// .cssText, that would destroy case senstitivity in URL's, like in "background"
return a.style.cssText||b},set:function(a,b){return a.style.cssText=b+""}}),
// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
ka.support.optSelected||(ka.propHooks.selected={get:function(a){var b=a.parentNode;
// Make sure that it also works with optgroups, see #5701
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),ka.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ka.propFix[this.toLowerCase()]=this}),
// IE6/7 call enctype encoding
ka.support.enctype||(ka.propFix.enctype="encoding"),
// Radios and checkboxes getter/setter
ka.each(["radio","checkbox"],function(){ka.valHooks[this]={set:function(a,b){return ka.isArray(b)?a.checked=ka.inArray(ka(a).val(),b)>=0:void 0}},ka.support.checkOn||(ka.valHooks[this].get=function(a){
// Support: Webkit
// "" is returned instead of "on" if a value isn't specified
return null===a.getAttribute("value")?"on":a.value})});var La=/^(?:input|select|textarea)$/i,Ma=/^key/,Na=/^(?:mouse|contextmenu)|click/,Oa=/^(?:focusinfocus|focusoutblur)$/,Pa=/^([^.]*)(?:\.(.+)|)$/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
ka.event={global:{},add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r=ka._data(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(r){for(
// Caller can pass in an object of custom data in lieu of the handler
d.handler&&(j=d,d=j.handler,f=j.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
d.guid||(d.guid=ka.guid++),
// Init the element's event structure and main handler, if this is the first
(h=r.events)||(h=r.events={}),(l=r.handle)||(l=r.handle=function(a){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof ka===W||a&&ka.event.triggered===a.type?b:ka.event.dispatch.apply(l.elem,arguments)},
// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
l.elem=a),
// Handle multiple events separated by a space
c=(c||"").match(ma)||[""],i=c.length;i--;)g=Pa.exec(c[i])||[],o=q=g[1],p=(g[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
o&&(
// If event changes its type, use the special event handlers for the changed type
k=ka.event.special[o]||{},
// If selector defined, determine special event api type, otherwise given type
o=(f?k.delegateType:k.bindType)||o,
// Update special based on newly reset type
k=ka.event.special[o]||{},
// handleObj is passed to all event handlers
m=ka.extend({type:o,origType:q,data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&ka.expr.match.needsContext.test(f),namespace:p.join(".")},j),
// Init the event handler queue if we're the first
(n=h[o])||(n=h[o]=[],n.delegateCount=0,
// Only use addEventListener/attachEvent if the special events handler returns false
k.setup&&k.setup.call(a,e,p,l)!==!1||(
// Bind the global event handler to the element
a.addEventListener?a.addEventListener(o,l,!1):a.attachEvent&&a.attachEvent("on"+o,l))),k.add&&(k.add.call(a,m),m.handler.guid||(m.handler.guid=d.guid)),
// Add to the element's handler list, delegates in front
f?n.splice(n.delegateCount++,0,m):n.push(m),
// Keep track of which events have ever been used, for event optimization
ka.event.global[o]=!0);
// Nullify elem to prevent memory leaks in IE
a=null}},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ka.hasData(a)&&ka._data(a);if(q&&(k=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(ma)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=Pa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ka.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||ka.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)ka.event.remove(a,n+b[j],c,d,!0);
// Remove the expando if it's no longer used
ka.isEmptyObject(k)&&(delete q.handle,
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
ka._removeData(a,"events"))}},trigger:function(c,d,e,f){var g,h,i,j,k,l,m,n=[e||Y],o=ia.call(c,"type")?c.type:c,p=ia.call(c,"namespace")?c.namespace.split("."):[];
// Don't do events on text and comment nodes
if(i=l=e=e||Y,3!==e.nodeType&&8!==e.nodeType&&!Oa.test(o+ka.event.triggered)&&(o.indexOf(".")>=0&&(
// Namespaced trigger; create a regexp to match event type in handle()
p=o.split("."),o=p.shift(),p.sort()),h=o.indexOf(":")<0&&"on"+o,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
c=c[ka.expando]?c:new ka.Event(o,"object"==typeof c&&c),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
c.isTrigger=f?2:3,c.namespace=p.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
c.result=b,c.target||(c.target=e),
// Clone any incoming data and prepend the event, creating the handler arg list
d=null==d?[c]:ka.makeArray(d,[c]),
// Allow special events to draw outside the lines
k=ka.event.special[o]||{},f||!k.trigger||k.trigger.apply(e,d)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!f&&!k.noBubble&&!ka.isWindow(e)){for(j=k.delegateType||o,Oa.test(j+o)||(i=i.parentNode);i;i=i.parentNode)n.push(i),l=i;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
l===(e.ownerDocument||Y)&&n.push(l.defaultView||l.parentWindow||a)}for(
// Fire handlers on the event path
m=0;(i=n[m++])&&!c.isPropagationStopped();)c.type=m>1?j:k.bindType||o,
// jQuery handler
g=(ka._data(i,"events")||{})[c.type]&&ka._data(i,"handle"),g&&g.apply(i,d),
// Native handler
g=h&&i[h],g&&ka.acceptData(i)&&g.apply&&g.apply(i,d)===!1&&c.preventDefault();
// If nobody prevented the default action, do it now
if(c.type=o,!f&&!c.isDefaultPrevented()&&(!k._default||k._default.apply(n.pop(),d)===!1)&&ka.acceptData(e)&&h&&e[o]&&!ka.isWindow(e)){
// Don't re-trigger an onFOO event when we call its FOO() method
l=e[h],l&&(e[h]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
ka.event.triggered=o;try{e[o]()}catch(q){}ka.event.triggered=b,l&&(e[h]=l)}return c.result}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
a=ka.event.fix(a);var c,d,e,f,g,h=[],i=fa.call(arguments),j=(ka._data(this,"events")||{})[a.type]||[],k=ka.event.special[a.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){for(
// Determine handlers
h=ka.event.handlers.call(this,a,j),
// Run delegates first; they may want to stop propagation beneath us
c=0;(f=h[c++])&&!a.isPropagationStopped();)for(a.currentTarget=f.elem,g=0;(e=f.handlers[g++])&&!a.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,d=((ka.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),d!==b&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,c){var d,e,f,g,h=[],i=c.delegateCount,j=a.target;
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(i&&j.nodeType&&(!a.button||"click"!==a.type))/* jshint eqeqeq: false */
for(;j!=this;j=j.parentNode||this)/* jshint eqeqeq: true */
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===j.nodeType&&(j.disabled!==!0||"click"!==a.type)){for(f=[],g=0;i>g;g++)e=c[g],
// Don't conflict with Object.prototype properties (#13203)
d=e.selector+" ",f[d]===b&&(f[d]=e.needsContext?ka(d,this).index(j)>=0:ka.find(d,this,null,[j]).length),f[d]&&f.push(e);f.length&&h.push({elem:j,handlers:f})}
// Add the remaining (directly-bound) handlers
return i<c.length&&h.push({elem:this,handlers:c.slice(i)}),h},fix:function(a){if(a[ka.expando])return a;
// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Na.test(e)?this.mouseHooks:Ma.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new ka.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];
// Support: IE<9
// Fix target property (#1925)
// Support: Chrome 23+, Safari?
// Target should not be a text node (#504, #13143)
// Support: IE<9
// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
return a.target||(a.target=f.srcElement||Y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
// Add which for key events
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==a.pageX&&null!=c.clientX&&(e=a.target.ownerDocument||Y,f=e.documentElement,d=e.body,a.pageX=c.clientX+(f&&f.scrollLeft||d&&d.scrollLeft||0)-(f&&f.clientLeft||d&&d.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||d&&d.scrollTop||0)-(f&&f.clientTop||d&&d.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),a.which||g===b||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==k()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===k()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){return ka.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return ka.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Even when returnValue equals to undefined Firefox will still show alert
a.result!==b&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var e=ka.extend(new ka.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?ka.event.trigger(e,null,b):ka.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},ka.removeEvent=Y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(
// #8545, #7054, preventing memory leaks for custom events in IE6-8
// detachEvent needed property on element, by name of that event, to properly expose it to GC
typeof a[d]===W&&(a[d]=null),a.detachEvent(d,c))},ka.Event=function(a,b){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof ka.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?i:j):this.type=a,b&&ka.extend(this,b),this.timeStamp=a&&a.timeStamp||ka.now(),void(this[ka.expando]=!0)):new ka.Event(a,b)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ka.Event.prototype={isDefaultPrevented:j,isPropagationStopped:j,isImmediatePropagationStopped:j,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=i,a&&(
// If preventDefault exists, run it on the original event
a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=i,a&&(
// If stopPropagation exists, run it on the original event
a.stopPropagation&&a.stopPropagation(),
// Support: IE
// Set the cancelBubble property of the original event to true
a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i,this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
ka.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){ka.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return(!e||e!==d&&!ka.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),
// IE submit delegation
ka.support.submitBubbles||(ka.event.special.submit={setup:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Lazy-add a submit handler when a descendant form may potentially be submitted
return ka.nodeName(this,"form")?!1:void ka.event.add(this,"click._submit keypress._submit",function(a){
// Node name check avoids a VML-related crash in IE (#9807)
var c=a.target,d=ka.nodeName(c,"input")||ka.nodeName(c,"button")?c.form:b;d&&!ka._data(d,"submitBubbles")&&(ka.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),ka._data(d,"submitBubbles",!0))})},postDispatch:function(a){
// If form was submitted by the user, bubble the event up the tree
a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&ka.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
return ka.nodeName(this,"form")?!1:void ka.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
ka.support.changeBubbles||(ka.event.special.change={setup:function(){
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
// Delegated event; lazy-add a change handler on descendant inputs
return La.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ka.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),ka.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),
// Allow triggered, simulated change events (#11500)
ka.event.simulate("change",this,a,!0)})),!1):void ka.event.add(this,"beforeactivate._change",function(a){var b=a.target;La.test(b.nodeName)&&!ka._data(b,"changeBubbles")&&(ka.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||ka.event.simulate("change",this.parentNode,a,!0)}),ka._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;
// Swallow native change events from checkbox/radio, we already triggered them above
// Swallow native change events from checkbox/radio, we already triggered them above
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ka.event.remove(this,"._change"),!La.test(this.nodeName)}}),
// Create "bubbling" focus and blur events
ka.support.focusinBubbles||ka.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler while someone wants focusin/focusout
var c=0,d=function(a){ka.event.simulate(b,a.target,ka.event.fix(a),!0)};ka.event.special[b]={setup:function(){0===c++&&Y.addEventListener(a,d,!0)},teardown:function(){0===--c&&Y.removeEventListener(a,d,!0)}}}),ka.fn.extend({on:function(a,c,d,e,/*INTERNAL*/f){var g,h;
// Types can be a map of types/handlers
if("object"==typeof a){
// ( types-Object, selector, data )
"string"!=typeof c&&(
// ( types-Object, data )
d=d||c,c=b);for(g in a)this.on(g,c,d,a[g],f);return this}if(null==d&&null==e?(
// ( types, fn )
e=c,d=c=b):null==e&&("string"==typeof c?(
// ( types, selector, fn )
e=d,d=b):(
// ( types, data, fn )
e=d,d=c,c=b)),e===!1)e=j;else if(!e)return this;
// Use same guid so caller can remove using origFn
return 1===f&&(h=e,e=function(a){
// Can use an empty set, since event contains the info
return ka().off(a),h.apply(this,arguments)},e.guid=h.guid||(h.guid=ka.guid++)),this.each(function(){ka.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return e=a.handleObj,ka(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(f in a)this.off(f,c,a[f]);return this}
// ( types [, fn] )
return(c===!1||"function"==typeof c)&&(d=c,c=b),d===!1&&(d=j),this.each(function(){ka.event.remove(this,a,d,c)})},trigger:function(a,b){return this.each(function(){ka.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?ka.event.trigger(a,b,c,!0):void 0}});var Qa=/^.[^:#\[\.,]*$/,Ra=/^(?:parents|prev(?:Until|All))/,Sa=ka.expr.match.needsContext,
// methods guaranteed to produce a unique set when starting from a unique set
Ta={children:!0,contents:!0,next:!0,prev:!0};ka.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(ka(a).filter(function(){for(b=0;e>b;b++)if(ka.contains(d[b],this))return!0}));for(b=0;e>b;b++)ka.find(a,d[b],c);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return c=this.pushStack(e>1?ka.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},has:function(a){var b,c=ka(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(ka.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(m(this,a||[],!0))},filter:function(a){return this.pushStack(m(this,a||[],!1))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!m(this,"string"==typeof a&&Sa.test(a)?ka(a):a||[],!1).length},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=Sa.test(a)||"string"!=typeof a?ka(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&ka.find.matchesSelector(c,a))){c=f.push(c);break}return this.pushStack(f.length>1?ka.unique(f):f)},
// Determine the position of an element within
// the matched set of elements
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?ka.inArray(this[0],ka(a)):ka.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){var c="string"==typeof a?ka(a,b):ka.makeArray(a&&a.nodeType?[a]:a),d=ka.merge(this.get(),c);return this.pushStack(ka.unique(d))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ka.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ka.dir(a,"parentNode")},parentsUntil:function(a,b,c){return ka.dir(a,"parentNode",c)},next:function(a){return l(a,"nextSibling")},prev:function(a){return l(a,"previousSibling")},nextAll:function(a){return ka.dir(a,"nextSibling")},prevAll:function(a){return ka.dir(a,"previousSibling")},nextUntil:function(a,b,c){return ka.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return ka.dir(a,"previousSibling",c)},siblings:function(a){return ka.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return ka.sibling(a.firstChild)},contents:function(a){return ka.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:ka.merge([],a.childNodes)}},function(a,b){ka.fn[a]=function(c,d){var e=ka.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ka.filter(d,e)),this.length>1&&(Ta[a]||(e=ka.unique(e)),Ra.test(a)&&(e=e.reverse())),this.pushStack(e)}}),ka.extend({filter:function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ka.find.matchesSelector(d,a)?[d]:[]:ka.find.matches(a,ka.grep(b,function(a){return 1===a.nodeType}))},dir:function(a,c,d){for(var e=[],f=a[c];f&&9!==f.nodeType&&(d===b||1!==f.nodeType||!ka(f).is(d));)1===f.nodeType&&e.push(f),f=f[c];return e},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Ua="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Va=/ jQuery\d+="(?:null|\d+)"/g,Wa=new RegExp("<(?:"+Ua+")[\\s/>]","i"),Xa=/^\s+/,Ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Za=/<([\w:]+)/,$a=/<tbody/i,_a=/<|&#?\w+;/,ab=/<(?:script|style|link)/i,bb=/^(?:checkbox|radio)$/i,
// checked="checked" or checked
cb=/checked\s*(?:[^=]|=\s*.checked.)/i,db=/^$|\/(?:java|ecma)script/i,eb=/^true\/(.*)/,fb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
// We have to close these tags to support XHTML (#13200)
gb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default:ka.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},hb=n(Y),ib=hb.appendChild(Y.createElement("div"));gb.optgroup=gb.option,gb.tbody=gb.tfoot=gb.colgroup=gb.caption=gb.thead,gb.th=gb.td,ka.fn.extend({text:function(a){return ka.access(this,function(a){return a===b?ka.text(this):this.empty().append((this[0]&&this[0].ownerDocument||Y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=o(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=o(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},
// keepData is for internal use only--do not document
remove:function(a,b){for(var c,d=a?ka.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||ka.cleanData(u(c)),c.parentNode&&(b&&ka.contains(c.ownerDocument,c)&&r(u(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===a.nodeType&&ka.cleanData(u(a,!1));a.firstChild;)a.removeChild(a.firstChild);
// If this is a select, ensure that it displays empty (#12336)
// Support: IE<9
a.options&&ka.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return ka.clone(this,a,b)})},html:function(a){return ka.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return 1===c.nodeType?c.innerHTML.replace(Va,""):b;
// See if we can take a shortcut and just use innerHTML
if(!("string"!=typeof a||ab.test(a)||!ka.support.htmlSerialize&&Wa.test(a)||!ka.support.leadingWhitespace&&Xa.test(a)||gb[(Za.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(Ya,"<$1></$2>");try{for(;e>d;d++)
// Remove element nodes and prevent memory leaks
c=this[d]||{},1===c.nodeType&&(ka.cleanData(u(c,!1)),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var
// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
a=ka.map(this,function(a){return[a.nextSibling,a.parentNode]}),b=0;
// Force removal if there was no new content (e.g., from empty arguments)
// Make the changes, replacing each context element with the new content
return this.domManip(arguments,function(c){var d=a[b++],e=a[b++];e&&(
// Don't use the snapshot next if it has moved (#13810)
d&&d.parentNode!==e&&(d=this.nextSibling),ka(this).remove(),e.insertBefore(c,d))},!0),b?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b,c){
// Flatten any nested arrays
a=da.apply([],a);var d,e,f,g,h,i,j=0,k=this.length,l=this,m=k-1,n=a[0],o=ka.isFunction(n);
// We can't cloneNode fragments that contain checked, in WebKit
if(o||!(1>=k||"string"!=typeof n||ka.support.checkClone)&&cb.test(n))return this.each(function(d){var e=l.eq(d);o&&(a[0]=n.call(this,d,e.html())),e.domManip(a,b,c)});if(k&&(i=ka.buildFragment(a,this[0].ownerDocument,!1,!c&&this),d=i.firstChild,1===i.childNodes.length&&(i=d),d)){
// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(g=ka.map(u(i,"script"),p),f=g.length;k>j;j++)e=i,j!==m&&(e=ka.clone(e,!0,!0),
// Keep references to cloned scripts for later restoration
f&&ka.merge(g,u(e,"script"))),b.call(this[j],e,j);if(f)
// Evaluate executable scripts on first document insertion
for(h=g[g.length-1].ownerDocument,
// Reenable scripts
ka.map(g,q),j=0;f>j;j++)e=g[j],db.test(e.type||"")&&!ka._data(e,"globalEval")&&ka.contains(h,e)&&(e.src?
// Hope ajax is available...
ka._evalUrl(e.src):ka.globalEval((e.text||e.textContent||e.innerHTML||"").replace(fb,"")));
// Fix #11809: Avoid leaking memory
i=d=null}return this}}),ka.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ka.fn[a]=function(a){for(var c,d=0,e=[],f=ka(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),ka(f[d])[b](c),
// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
ea.apply(e,c.get());return this.pushStack(e)}}),ka.extend({clone:function(a,b,c){var d,e,f,g,h,i=ka.contains(a.ownerDocument,a);if(ka.support.html5Clone||ka.isXMLDoc(a)||!Wa.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ib.innerHTML=a.outerHTML,ib.removeChild(f=ib.firstChild)),!(ka.support.noCloneEvent&&ka.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ka.isXMLDoc(a)))
// Fix all IE cloning issues
for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
d=u(f),h=u(a),g=0;null!=(e=h[g]);++g)
// Ensure that the destination node is not null; Fixes #9587
d[g]&&t(e,d[g]);
// Copy the events from the original to the clone
if(b)if(c)for(h=h||u(a),d=d||u(f),g=0;null!=(e=h[g]);g++)s(e,d[g]);else s(a,f);
// Return the cloned set
// Preserve script evaluation history
return d=u(f,"script"),d.length>0&&r(d,!i&&u(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,
// Ensure a safe fragment
m=n(b),o=[],p=0;l>p;p++)if(f=a[p],f||0===f)
// Add nodes directly
if("object"===ka.type(f))ka.merge(o,f.nodeType?[f]:f);else if(_a.test(f)){for(h=h||m.appendChild(b.createElement("div")),
// Deserialize a standard representation
i=(Za.exec(f)||["",""])[1].toLowerCase(),k=gb[i]||gb._default,h.innerHTML=k[1]+f.replace(Ya,"<$1></$2>")+k[2],
// Descend through wrappers to the right content
e=k[0];e--;)h=h.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(
// Manually add leading whitespace removed by IE
!ka.support.leadingWhitespace&&Xa.test(f)&&o.push(b.createTextNode(Xa.exec(f)[0])),!ka.support.tbody)for(
// String was a <table>, *may* have spurious <tbody>
f="table"!==i||$a.test(f)?
// String was a bare <thead> or <tfoot>
"<table>"!==k[1]||$a.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)ka.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);
// Fix #12392 for oldIE
for(ka.merge(o,h.childNodes),
// Fix #12392 for WebKit and IE > 9
h.textContent="";h.firstChild;)h.removeChild(h.firstChild);
// Remember the top-level container for proper cleanup
h=m.lastChild}else o.push(b.createTextNode(f));for(
// Fix #11356: Clear elements from fragment
h&&m.removeChild(h),
// Reset defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
ka.support.appendChecked||ka.grep(u(o,"input"),v),p=0;f=o[p++];)
// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if((!d||-1===ka.inArray(f,d))&&(g=ka.contains(f.ownerDocument,f),
// Append to fragment
h=u(m.appendChild(f),"script"),
// Preserve script evaluation history
g&&r(h),c))for(e=0;f=h[e++];)db.test(f.type||"")&&c.push(f);return h=null,m},cleanData:function(a,/* internal */b){for(var c,d,e,f,g=0,h=ka.expando,i=ka.cache,j=ka.support.deleteExpando,k=ka.event.special;null!=(c=a[g]);g++)if((b||ka.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?ka.event.remove(c,d):ka.removeEvent(c,d,f.handle);
// Remove cache only if it was not already removed by jQuery.event.remove
i[e]&&(delete i[e],
// IE does not allow us to delete expando properties from nodes,
// nor does it have a removeAttribute function on Document nodes;
// we must handle all of these cases
j?delete c[h]:typeof c.removeAttribute!==W?c.removeAttribute(h):c[h]=null,ba.push(e))}},_evalUrl:function(a){return ka.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),ka.fn.extend({wrapAll:function(a){if(ka.isFunction(a))return this.each(function(b){ka(this).wrapAll(a.call(this,b))});if(this[0]){
// The elements to wrap the target around
var b=ka(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(ka.isFunction(a)?function(b){ka(this).wrapInner(a.call(this,b))}:function(){var b=ka(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ka.isFunction(a);return this.each(function(c){ka(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){ka.nodeName(this,"body")||ka(this).replaceWith(this.childNodes)}).end()}});var jb,kb,lb,mb=/alpha\([^)]*\)/i,nb=/opacity\s*=\s*([^)]*)/,ob=/^(top|right|bottom|left)$/,
// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
pb=/^(none|table(?!-c[ea]).+)/,qb=/^margin/,rb=new RegExp("^("+la+")(.*)$","i"),sb=new RegExp("^("+la+")(?!px)[a-z%]+$","i"),tb=new RegExp("^([+-])=("+la+")","i"),ub={BODY:"block"},vb={position:"absolute",visibility:"hidden",display:"block"},wb={letterSpacing:0,fontWeight:400},xb=["Top","Right","Bottom","Left"],yb=["Webkit","O","Moz","ms"];ka.fn.extend({css:function(a,c){return ka.access(this,function(a,c,d){var e,f,g={},h=0;if(ka.isArray(c)){for(f=kb(a),e=c.length;e>h;h++)g[c[h]]=ka.css(a,c[h],!1,f);return g}return d!==b?ka.style(a,c,d):ka.css(a,c)},a,c,arguments.length>1)},show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){x(this)?ka(this).show():ka(this).hide()})}}),ka.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=lb(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
"float":ka.support.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(a,c,d,e){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var f,g,h,i=ka.camelCase(c),j=a.style;
// Check if we're setting a value
if(c=ka.cssProps[i]||(ka.cssProps[i]=w(j,i)),
// gets hook for the prefixed version
// followed by the unprefixed version
h=ka.cssHooks[c]||ka.cssHooks[i],d===b)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];
// Make sure that NaN and null values aren't set. See: #7116
if(g=typeof d,
// convert relative number strings (+= or -=) to relative numbers. #7345
"string"===g&&(f=tb.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(ka.css(a,c)),
// Fixes bug #9237
g="number"),!(null==d||"number"===g&&isNaN(d)||(
// If a number was passed in, add 'px' to the (except for certain CSS properties)
"number"!==g||ka.cssNumber[i]||(d+="px"),
// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
ka.support.clearCloneStyle||""!==d||0!==c.indexOf("background")||(j[c]="inherit"),h&&"set"in h&&(d=h.set(a,d,e))===b)))
// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
// Fixes bug #5509
try{j[c]=d}catch(k){}}},css:function(a,c,d,e){var f,g,h,i=ka.camelCase(c);
// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return c=ka.cssProps[i]||(ka.cssProps[i]=w(a.style,i)),h=ka.cssHooks[c]||ka.cssHooks[i],h&&"get"in h&&(g=h.get(a,!0,d)),g===b&&(g=lb(a,c,e)),"normal"===g&&c in wb&&(g=wb[c]),""===d||d?(f=parseFloat(g),d===!0||ka.isNumeric(f)?f||0:g):g}}),
// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
a.getComputedStyle?(kb=function(b){return a.getComputedStyle(b,null)},lb=function(a,c,d){var e,f,g,h=d||kb(a),
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
i=h?h.getPropertyValue(c)||h[c]:b,j=a.style;
// A tribute to the "awesome hack by Dean Edwards"
// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return h&&(""!==i||ka.contains(a.ownerDocument,a)||(i=ka.style(a,c)),sb.test(i)&&qb.test(c)&&(e=j.width,f=j.minWidth,g=j.maxWidth,j.minWidth=j.maxWidth=j.width=i,i=h.width,j.width=e,j.minWidth=f,j.maxWidth=g)),i}):Y.documentElement.currentStyle&&(kb=function(a){return a.currentStyle},lb=function(a,c,d){var e,f,g,h=d||kb(a),i=h?h[c]:b,j=a.style;
// Avoid setting ret to empty string here
// so we don't default to auto
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// but not position css attributes, as those are proportional to the parent element instead
// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return null==i&&j&&j[c]&&(i=j[c]),sb.test(i)&&!ob.test(c)&&(e=j.left,f=a.runtimeStyle,g=f&&f.left,g&&(f.left=a.currentStyle.left),j.left="fontSize"===c?"1em":i,i=j.pixelLeft+"px",j.left=e,g&&(f.left=g)),""===i?"auto":i}),ka.each(["height","width"],function(a,b){ka.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&pb.test(ka.css(a,"display"))?ka.swap(a,vb,function(){return B(a,b,d)}):B(a,b,d):void 0},set:function(a,c,d){var e=d&&kb(a);return z(a,c,d?A(a,b,d,ka.support.boxSizing&&"border-box"===ka.css(a,"boxSizing",!1,e),e):0)}}}),ka.support.opacity||(ka.cssHooks.opacity={get:function(a,b){
// IE uses filters for opacity
return nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=ka.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
c.zoom=1,
// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
// if value === "", then remove inline opacity #12685
(b>=1||""===b)&&""===ka.trim(f.replace(mb,""))&&c.removeAttribute&&(
// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
// if "filter:" is present at all, clearType is disabled, we want to avoid this
// style.removeAttribute is IE Only, but so apparently is this code path...
c.removeAttribute("filter"),""===b||d&&!d.filter)||(
// otherwise, set new filter values
c.filter=mb.test(f)?f.replace(mb,e):f+" "+e)}}),
// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
ka(function(){ka.support.reliableMarginRight||(ka.cssHooks.marginRight={get:function(a,b){return b?ka.swap(a,{display:"inline-block"},lb,[a,"marginRight"]):void 0}}),
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
!ka.support.pixelPosition&&ka.fn.position&&ka.each(["top","left"],function(a,b){ka.cssHooks[b]={get:function(a,c){return c?(c=lb(a,b),sb.test(c)?ka(a).position()[b]+"px":c):void 0}}})}),ka.expr&&ka.expr.filters&&(ka.expr.filters.hidden=function(a){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return a.offsetWidth<=0&&a.offsetHeight<=0||!ka.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||ka.css(a,"display"))},ka.expr.filters.visible=function(a){return!ka.expr.filters.hidden(a)}),
// These hooks are used by animate to expand properties
ka.each({margin:"",padding:"",border:"Width"},function(a,b){ka.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+xb[d]+b]=f[d]||f[d-2]||f[0];return e}},qb.test(a)||(ka.cssHooks[a+b].set=z)});var zb=/%20/g,Ab=/\[\]$/,Bb=/\r?\n/g,Cb=/^(?:submit|button|image|reset|file)$/i,Db=/^(?:input|select|textarea|keygen)/i;ka.fn.extend({serialize:function(){return ka.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=ka.prop(this,"elements");return a?ka.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is(":disabled") so that fieldset[disabled] works
return this.name&&!ka(this).is(":disabled")&&Db.test(this.nodeName)&&!Cb.test(a)&&(this.checked||!bb.test(a))}).map(function(a,b){var c=ka(this).val();return null==c?null:ka.isArray(c)?ka.map(c,function(a){return{name:b.name,value:a.replace(Bb,"\r\n")}}):{name:b.name,value:c.replace(Bb,"\r\n")}}).get()}}),
//Serialize an array of form elements or a set of
//key/values into a query string
ka.param=function(a,c){var d,e=[],f=function(a,b){
// If value is a function, invoke it and return its value
b=ka.isFunction(b)?b():null==b?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
c===b&&(c=ka.ajaxSettings&&ka.ajaxSettings.traditional),ka.isArray(a)||a.jquery&&!ka.isPlainObject(a))
// Serialize the form elements
ka.each(a,function(){f(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(d in a)E(d,a[d],c,f);
// Return the resulting serialization
return e.join("&").replace(zb,"+")},ka.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
// Handle event binding
ka.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ka.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var
// Document location
Eb,Fb,Gb=ka.now(),Hb=/\?/,Ib=/#.*$/,Jb=/([?&])_=[^&]*/,Kb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,// IE leaves an \r character at EOL
// #7653, #8125, #8152: local protocol detection
Lb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mb=/^(?:GET|HEAD)$/,Nb=/^\/\//,Ob=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
// Keep a copy of the old load method
Pb=ka.fn.load,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Qb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Rb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Sb="*/".concat("*");
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{Fb=X.href}catch(Tb){
// Use the href attribute of an A element
// since IE will modify it given document.location
Fb=Y.createElement("a"),Fb.href="",Fb=Fb.href}
// Segment location into parts
Eb=Ob.exec(Fb.toLowerCase())||[],ka.fn.load=function(a,c,d){if("string"!=typeof a&&Pb)return Pb.apply(this,arguments);var e,f,g,h=this,i=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),ka.isFunction(c)?(d=c,c=b):c&&"object"==typeof c&&(g="POST"),h.length>0&&ka.ajax({url:a,
// if "type" variable is undefined, then "GET" method will be used
type:g,dataType:"html",data:c}).done(function(a){
// Save response for use in complete callback
f=arguments,h.html(e?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ka("<div>").append(ka.parseHTML(a)).find(e):
// Otherwise use the full result
a)}).complete(d&&function(a,b){h.each(d,f||[a.responseText,b,a])}),this},
// Attach a bunch of functions for handling common AJAX events
ka.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ka.fn[b]=function(a){return this.on(b,a)}}),ka.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Fb,type:"GET",isLocal:Lb.test(Eb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Sb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":ka.parseJSON,
// Parse text as xml
"text xml":ka.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?H(H(a,ka.ajaxSettings),b):H(ka.ajaxSettings,a)},ajaxPrefilter:F(Qb),ajaxTransport:F(Rb),
// Main method
ajax:function(a,c){
// Callback for when everything is done
function d(a,c,d,e){var f,l,s,t,v,x=c;
// Called once
2!==u&&(
// State is "done" now
u=2,
// Clear timeout if it exists
i&&clearTimeout(i),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
k=b,
// Cache response headers
h=e||"",
// Set readyState
w.readyState=a>0?4:0,
// Determine if successful
f=a>=200&&300>a||304===a,
// Get response data
d&&(t=I(m,w,d)),
// Convert no matter what (that way responseXXX fields are always set)
t=J(m,t,w,f),
// If successful, handle type chaining
f?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(ka.lastModified[g]=v),v=w.getResponseHeader("etag"),v&&(ka.etag[g]=v)),
// if no content
204===a||"HEAD"===m.type?x="nocontent":304===a?x="notmodified":(x=t.state,l=t.data,s=t.error,f=!s)):(
// We extract error from statusText
// then normalize statusText and status for non-aborts
s=x,(a||!x)&&(x="error",0>a&&(a=0))),
// Set data for the fake xhr object
w.status=a,w.statusText=(c||x)+"",
// Success/Error
f?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),
// Status-dependent callbacks
w.statusCode(r),r=b,j&&o.trigger(f?"ajaxSuccess":"ajaxError",[w,m,f?l:s]),
// Complete
q.fireWith(n,[w,x]),j&&(o.trigger("ajaxComplete",[w,m]),
// Handle the global AJAX counter
--ka.active||ka.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof a&&(c=a,a=b),
// Force options to be an object
c=c||{};var// Cross-domain detection vars
e,
// Loop variable
f,
// URL without anti-cache param
g,
// Response headers as string
h,
// timeout handle
i,
// To know if global events are to be dispatched
j,k,
// Response headers
l,
// Create the final options object
m=ka.ajaxSetup({},c),
// Callbacks context
n=m.context||m,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
o=m.context&&(n.nodeType||n.jquery)?ka(n):ka.event,
// Deferreds
p=ka.Deferred(),q=ka.Callbacks("once memory"),
// Status-dependent callbacks
r=m.statusCode||{},
// Headers (they are sent all at once)
s={},t={},
// The jqXHR state
u=0,
// Default abort message
v="canceled",
// Fake xhr
w={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(2===u){if(!l)for(l={};b=Kb.exec(h);)l[b[1].toLowerCase()]=b[2];b=l[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return 2===u?h:null},
// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return u||(m.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(2>u)for(b in a)
// Lazy-add the new callback in a way that preserves old ones
r[b]=[r[b],a[b]];else
// Execute the appropriate callbacks
w.always(a[w.status]);return this},
// Cancel the request
abort:function(a){var b=a||v;return k&&k.abort(b),d(0,b),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
m.url=((a||m.url||Fb)+"").replace(Ib,"").replace(Nb,Eb[1]+"//"),
// Alias method option to type as per ticket #12004
m.type=c.method||c.type||m.method||m.type,
// Extract dataTypes list
m.dataTypes=ka.trim(m.dataType||"*").toLowerCase().match(ma)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==m.crossDomain&&(e=Ob.exec(m.url.toLowerCase()),m.crossDomain=!(!e||e[1]===Eb[1]&&e[2]===Eb[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(Eb[3]||("http:"===Eb[1]?"80":"443")))),
// Convert data if not already a string
m.data&&m.processData&&"string"!=typeof m.data&&(m.data=ka.param(m.data,m.traditional)),
// Apply prefilters
G(Qb,m,c,w),2===u)return w;
// We can fire global events as of now if asked to
j=m.global,
// Watch for a new set of requests
j&&0===ka.active++&&ka.event.trigger("ajaxStart"),
// Uppercase the type
m.type=m.type.toUpperCase(),
// Determine if request has content
m.hasContent=!Mb.test(m.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
g=m.url,
// More options handling for requests with no content
m.hasContent||(
// If data is available, append data to url
m.data&&(g=m.url+=(Hb.test(g)?"&":"?")+m.data,
// #9682: remove data so that it's not used in an eventual retry
delete m.data),
// Add anti-cache in url if needed
m.cache===!1&&(m.url=Jb.test(g)?
// If there is already a '_' parameter, set its value
g.replace(Jb,"$1_="+Gb++):
// Otherwise add one to the end
g+(Hb.test(g)?"&":"?")+"_="+Gb++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
m.ifModified&&(ka.lastModified[g]&&w.setRequestHeader("If-Modified-Since",ka.lastModified[g]),ka.etag[g]&&w.setRequestHeader("If-None-Match",ka.etag[g])),
// Set the correct header, if data is being sent
(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),
// Set the Accepts header for the server, depending on the dataType
w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+Sb+"; q=0.01":""):m.accepts["*"]);
// Check for headers option
for(f in m.headers)w.setRequestHeader(f,m.headers[f]);
// Allow custom headers/mimetypes and early abort
if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))
// Abort if not done already and return
return w.abort();
// aborting is no longer a cancellation
v="abort";
// Install callbacks on deferreds
for(f in{success:1,error:1,complete:1})w[f](m[f]);
// If no transport, we auto-abort
if(
// Get transport
k=G(Rb,m,c,w)){w.readyState=1,
// Send global event
j&&o.trigger("ajaxSend",[w,m]),
// Timeout
m.async&&m.timeout>0&&(i=setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,k.send(s,d)}catch(x){
// Propagate exception as error if not done
if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return ka.get(a,b,c,"json")},getScript:function(a,c){return ka.get(a,b,c,"script")}}),ka.each(["get","post"],function(a,c){ka[c]=function(a,d,e,f){
// shift arguments if data argument was omitted
return ka.isFunction(d)&&(f=f||e,e=d,d=b),ka.ajax({url:a,type:c,dataType:f,data:d,success:e})}}),
// Install script dataType
ka.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return ka.globalEval(a),a}}}),
// Handle cache's special case and global
ka.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),
// Bind script tag hack transport
ka.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var c,d=Y.head||ka("head")[0]||Y.documentElement;return{send:function(b,e){c=Y.createElement("script"),c.async=!0,a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,
// Attach handlers for all browsers
c.onload=c.onreadystatechange=function(a,b){(b||!c.readyState||/loaded|complete/.test(c.readyState))&&(
// Handle memory leak in IE
c.onload=c.onreadystatechange=null,
// Remove the script
c.parentNode&&c.parentNode.removeChild(c),
// Dereference the script
c=null,
// Callback if not abort
b||e(200,"success"))},
// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
// Use native DOM manipulation to avoid our domManip AJAX trickery
d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(b,!0)}}}});var Ub=[],Vb=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ka.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ub.pop()||ka.expando+"_"+Gb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
ka.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.jsonp!==!1&&(Vb.test(c.url)?"url":"string"==typeof c.data&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vb.test(c.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return i||"jsonp"===c.dataTypes[0]?(f=c.jsonpCallback=ka.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,i?c[i]=c[i].replace(Vb,"$1"+f):c.jsonp!==!1&&(c.url+=(Hb.test(c.url)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||ka.error(f+" was not called"),h[0]},c.dataTypes[0]="json",g=a[f],a[f]=function(){h=arguments},e.always(function(){
// Restore preexisting value
a[f]=g,
// Save back as free
c[f]&&(
// make sure that re-using the options doesn't screw things around
c.jsonpCallback=d.jsonpCallback,
// save the callback name for future use
Ub.push(f)),
// Call if it was a function and we have a response
h&&ka.isFunction(g)&&g(h[0]),h=g=b}),"script"):void 0});var Wb,Xb,Yb=0,
// #5280: Internet Explorer will keep connections alive if we don't abort on unload
Zb=a.ActiveXObject&&function(){
// Abort all pending requests
var a;for(a in Wb)Wb[a](b,!0)};
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
ka.ajaxSettings.xhr=a.ActiveXObject?/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
function(){return!this.isLocal&&K()||L()}:
// For all other browsers, use the standard XMLHttpRequest object
K,
// Determine support properties
Xb=ka.ajaxSettings.xhr(),ka.support.cors=!!Xb&&"withCredentials"in Xb,Xb=ka.support.ajax=!!Xb,
// Create transport if the browser can provide an xhr
Xb&&ka.ajaxTransport(function(c){
// Cross domain only allowed if supported through XMLHttpRequest
if(!c.crossDomain||ka.support.cors){var d;return{send:function(e,f){
// Get a new xhr
var g,h,i=c.xhr();
// Apply custom fields if provided
if(
// Open the socket
// Passing null username, generates a login popup on Opera (#2865)
c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async),c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];
// Override mime type if needed
c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
c.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
// Need an extra try/catch for cross domain requests in Firefox 3
try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
i.send(c.hasContent&&c.data||null),
// Listener
d=function(a,e){var h,j,k,l;
// Firefox throws exceptions when accessing properties
// of an xhr when a network error occurred
// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
try{
// Was never called and is aborted or complete
if(d&&(e||4===i.readyState))
// If it's an abort
if(
// Only called once
d=b,
// Do not keep as active anymore
g&&(i.onreadystatechange=ka.noop,Zb&&delete Wb[g]),e)
// Abort it manually if needed
4!==i.readyState&&i.abort();else{l={},h=i.status,j=i.getAllResponseHeaders(),
// When requesting binary data, IE6-9 will throw an exception
// on any attempt to access responseText (#11426)
"string"==typeof i.responseText&&(l.text=i.responseText);
// Firefox throws an exception when accessing
// statusText for faulty cross-domain requests
try{k=i.statusText}catch(m){
// We normalize with Webkit giving an empty statusText
k=""}
// Filter status for non standard behaviors
// If the request is local and we have data: assume a success
// (success with no data won't get notified, that's the best we
// can do given current implementations)
h||!c.isLocal||c.crossDomain?1223===h&&(h=204):h=l.text?200:404}}catch(n){e||f(-1,n)}
// Call complete if needed
l&&f(h,k,l,j)},c.async?4===i.readyState?
// (IE6 & IE7) if it's in cache and has been
// retrieved directly we need to fire the callback
setTimeout(d):(g=++Yb,Zb&&(
// Create the active xhrs callbacks list if needed
// and attach the unload handler
Wb||(Wb={},ka(a).unload(Zb)),
// Add to list of active xhrs callbacks
Wb[g]=d),i.onreadystatechange=d):
// if we're in sync mode we fire the callback
d()},abort:function(){d&&d(b,!0)}}}});var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+la+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[Q],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(ka.cssNumber[a]?"":"px"),
// Starting value computation is required for potential unit mismatches
g=(ka.cssNumber[a]||"px"!==f&&+d)&&bc.exec(ka.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){
// Trust units reported by jQuery.css
f=f||g[3],
// Make sure we update the tween properties later on
e=e||[],
// Iteratively approximate from a nonzero starting point
g=+d||1;do
// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
h=h||".5",
// Adjust and apply
g/=h,ka.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}
// Update tween properties
// If a +=/-= token was provided, we're doing a relative animation
return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};ka.Animation=ka.extend(O,{tweener:function(a,b){ka.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),ka.Tween=R,R.prototype={constructor:R,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ka.cssNumber[c]?"":"px")},cur:function(){var a=R.propHooks[this.prop];return a&&a.get?a.get(this):R.propHooks._default.get(this)},run:function(a){var b,c=R.propHooks[this.prop];return this.options.duration?this.pos=b=ka.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(a){var b;
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=ka.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
ka.fx.step[a.prop]?ka.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[ka.cssProps[a.prop]]||ka.cssHooks[a.prop])?ka.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},
// Support: IE <=9
// Panic based approach to setting things on disconnected nodes
R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ka.each(["toggle","show","hide"],function(a,b){var c=ka.fn[b];ka.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(S(b,!0),a,d,e)}}),ka.fn.extend({fadeTo:function(a,b,c,d){
// show any hidden elements after setting opacity to 0
return this.filter(x).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ka.isEmptyObject(a),f=ka.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=O(this,ka.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||ka._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return"string"!=typeof a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=null!=a&&a+"queueHooks",f=ka.timers,g=ka._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cc.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem!==this||null!=a&&f[c].queue!==a||(f[c].anim.stop(d),b=!1,f.splice(c,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
(b||!d)&&ka.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ka._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ka.timers,g=d?d.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
c.finish=!0,
// empty the queue first
ka.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// look for any animations in the old queue and finish them
for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// turn off finishing flag
delete c.finish})}}),
// Generate shortcuts for custom animations
ka.each({slideDown:S("show"),slideUp:S("hide"),slideToggle:S("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ka.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ka.speed=function(a,b,c){var d=a&&"object"==typeof a?ka.extend({},a):{complete:c||!c&&b||ka.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ka.isFunction(b)&&b};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return d.duration=ka.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in ka.fx.speeds?ka.fx.speeds[d.duration]:ka.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){ka.isFunction(d.old)&&d.old.call(this),d.queue&&ka.dequeue(this,d.queue)},d},ka.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},ka.timers=[],ka.fx=R.prototype.init,ka.fx.tick=function(){var a,c=ka.timers,d=0;for($b=ka.now();d<c.length;d++)a=c[d],
// Checks the timer has not already been removed
a()||c[d]!==a||c.splice(d--,1);c.length||ka.fx.stop(),$b=b},ka.fx.timer=function(a){a()&&ka.timers.push(a)&&ka.fx.start()},ka.fx.interval=13,ka.fx.start=function(){_b||(_b=setInterval(ka.fx.tick,ka.fx.interval))},ka.fx.stop=function(){clearInterval(_b),_b=null},ka.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Back Compat <1.8 extension point
ka.fx.step={},ka.expr&&ka.expr.filters&&(ka.expr.filters.animated=function(a){return ka.grep(ka.timers,function(b){return a===b.elem}).length}),ka.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){ka.offset.setOffset(this,a,b)});var c,d,e={top:0,left:0},f=this[0],g=f&&f.ownerDocument;if(g)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return c=g.documentElement,ka.contains(c,f)?(typeof f.getBoundingClientRect!==W&&(e=f.getBoundingClientRect()),d=T(g),{top:e.top+(d.pageYOffset||c.scrollTop)-(c.clientTop||0),left:e.left+(d.pageXOffset||c.scrollLeft)-(c.clientLeft||0)}):e},ka.offset={setOffset:function(a,b,c){var d=ka.css(a,"position");
// set position first, in-case top/left are set even on static elem
"static"===d&&(a.style.position="relative");var e,f,g=ka(a),h=g.offset(),i=ka.css(a,"top"),j=ka.css(a,"left"),k=("absolute"===d||"fixed"===d)&&ka.inArray("auto",[i,j])>-1,l={},m={};
// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
k?(m=g.position(),e=m.top,f=m.left):(e=parseFloat(i)||0,f=parseFloat(j)||0),ka.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(l.top=b.top-h.top+e),null!=b.left&&(l.left=b.left-h.left+f),"using"in b?b.using.call(a,l):g.css(l)}},ka.fn.extend({position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
// Subtract parent offsets and element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
// we assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===ka.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ka.nodeName(a[0],"html")||(c=a.offset()),c.top+=ka.css(a[0],"borderTopWidth",!0),c.left+=ka.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-ka.css(d,"marginTop",!0),left:b.left-c.left-ka.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Z;a&&!ka.nodeName(a,"html")&&"static"===ka.css(a,"position");)a=a.offsetParent;return a||Z})}}),
// Create scrollLeft and scrollTop methods
ka.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);ka.fn[a]=function(e){return ka.access(this,function(a,e,f){var g=T(a);return f===b?g?c in g?g[c]:g.document.documentElement[e]:a[e]:void(g?g.scrollTo(d?ka(g).scrollLeft():f,d?f:ka(g).scrollTop()):a[e]=f)},a,e,arguments.length,null)}}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ka.each({Height:"height",Width:"width"},function(a,c){ka.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){
// margin is only for outerHeight, outerWidth
ka.fn[e]=function(e,f){var g=arguments.length&&(d||"boolean"!=typeof e),h=d||(e===!0||f===!0?"margin":"border");return ka.access(this,function(c,d,e){var f;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return ka.isWindow(c)?c.document.documentElement["client"+a]:9===c.nodeType?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?ka.css(c,d,h):ka.style(c,d,e,h)},c,g?e:b,g,null)}})}),
// Limit scope pollution from any deprecated API
// (function() {
// The number of elements contained in the matched element set
ka.fn.size=function(){return this.length},ka.fn.andSelf=ka.fn.addBack,
// })();
"object"==typeof module&&module&&"object"==typeof module.exports?
// Expose jQuery as module.exports in loaders that implement the Node
// module pattern (including browserify). Do not create the global, since
// the user will be storing it themselves locally, and globals are frowned
// upon in the Node module world.
module.exports=ka:(
// Otherwise expose jQuery to the global object as usual
a.jQuery=a.$=ka,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
"function"==typeof define&&define.amd&&define("jquery",[],function(){return ka}))}(window),"undefined"==typeof console&&(console={log:function(){}}),
// No-conflict mode (we may have more than 1 jQuery instance)
cvjQuery=$.noConflict(!0);var CV=function(a){function b(a,b,d){
// Width and path parameters
if(a=c(a),!b)var b="";if(!d)var d="";if(""==a)var a="/_resources/images/advocate_default.jpg";
// Check for position
return a&&(a=a.replace("/_resources/images/uploads/","images/"),a=a.replace("/_resources/images/","images/")),"production"==k?"http://cvox.imgix.net/"+a+"?crop=faces&fit=clamp&w="+b+"&h="+d:"http://cv-staging.imgix.net/"+a+"?crop=faces&fit=clamp&w="+b+"&h="+d}function c(a){/*
	     * Replace base URL in given string, if it exists, and return the result.
	     *
	     * e.g. "http://localhost:8000/api/v1/blah/" becomes "/api/v1/blah/"
	     *      "/api/v1/blah/" stays "/api/v1/blah/"
	     */
var b=/^https?:\/\/[a-z\:0-9.]+/,c="",d=b.exec(a);return null!=d&&(c=d[0]),c.length>0&&(a=a.replace(c,"")),a}function d(){a.ajax({url:"http://"+j+"/api_endpoint/info",dataType:"jsonp",success:function(b){a(".cv-funds-raised").html(
// Funds raised
"undefined"==typeof a(".cv-funds-raised").data("divide")?b.funds_raised:b.funds_raised/a(".cv-funds-raised").data("divide")),
// Funds needed
1==b.enable_funds_needed&&a(".cv-funds-needed").html("undefined"==typeof a(".cv-funds-needed").data("divide")?b.funds_needed:b.funds_needed/a(".cv-funds-needed").data("divide")),
// Percent Progress
a(".cv-percent-progress").html(b.percent_progress),
// Progress bar
a(".cv-progress-bar").html('<div class="progress"><div class="bar" style="width: '+b.percent_progress+'%;"></div></div>'),a(".cv-info").html(
// Info widget
1==b.enable_funds_needed?'<div class="section"><div class="progress"><div class="bar" style="width: '+b.percent_progress+'%;"></div></div></div><div class="section"><div class="funds-raised">$'+b.funds_raised+'</div><div class="funds-needed">of $'+b.funds_needed+"</div></div>":'<div class="section"><div class="progress"><div class="bar" style="width: '+b.percent_progress+'%;"></div></div></div><div class="section"><div class="funds-raised">$'+b.funds_raised+"</div></div>")}})}function f(){a.ajax({url:"http://"+j+"/api_endpoint/global_info",dataType:"jsonp",success:function(b){a(".cv-global-funds-raised").html(
// Funds raised
"undefined"==typeof a(".cv-global-funds-raised").data("divide")?b.funds_raised:b.funds_raised/a(".cv-global-funds-raised").data("divide")),a(".cv-global-funds-needed").html(
// Funds needed
"undefined"==typeof a(".cv-global-funds-needed").data("divide")?b.funds_needed:b.funds_needed/a(".cv-global-funds-needed").data("divide")),
// Percent Progress
a(".cv-global-percent-progress").html(b.percent_progress),
// Progress bar
a(".cv-global-progress-bar").html('<div class="progress"><div class="bar" style="width: '+b.percent_progress+'%;"></div></div>'),
// Info widget
a(".cv-global-info").html('<div class="section"><div class="progress"><div class="bar" style="width: '+b.percent_progress+'%;"></div></div></div><div class="section"><div class="funds-raised">$'+b.funds_raised+'</div><div class="funds-needed">of $'+b.funds_needed+"</div></div>")}})}function g(){
// Build the fundraisers
a(".cv-fundraisers").html('<div class="nav"><a id="cv-link-fundraisers" class="active" href="#">Fundraisers</a></div><ul class="fundraisers"></ul><ul class="teams"></ul><ul class="results"></ul>'),
// Add the search bar
a(".cv-fundraisers").data("search")===!0&&a(".cv-fundraisers").prepend('<div class="search"><input type="text" name="search" value="Search for a fundraiser or team..." /></div>');
// Default search string
var c="Search for a fundraiser...";
// Populate the fundraisers
a.ajax({url:"http://"+j+"/api_endpoint/projects?limit=500",dataType:"jsonp",success:function(c){"undefined"!=typeof c.error?a(".cv-fundraisers ul.fundraisers").append('<li class="no-results">No fundraisers.</li>'):a.map(c,function(c){a(".cv-fundraisers ul.fundraisers").append('<li><div class="image"><a href="http://'+j+"/"+c.stub+'"><img height="50" width="50" alt=" " src="'+b(c.photo_path,50,50)+'"></a></div><div class="meta"><b><a href="http://'+j+"/"+c.stub+'">'+c.fundraiser+"</a></b><em>Raised "+c.currency_sign+c.funds_raised+"</em></div></li>")})}}),a(".cv-fundraisers").data("teams")===!0&&(a(".cv-fundraisers .nav").append('<a id="cv-link-teams"  href="#">Teams</a>'),a.ajax({url:"http://"+j+"/api_endpoint/teams?limit=500",dataType:"jsonp",success:function(c){"undefined"!=typeof c.error?a(".cv-fundraisers ul.teams").append('<li class="no-results">No teams.</li>'):a.map(c,function(c){a(".cv-fundraisers ul.teams").append('<li><div class="image"><a href="http://'+j+"/team/"+c.stub+'"><img height="50" width="50" alt=" " src="'+b(c.photo_path,50,50)+'"></a></div><div class="meta"><b><a href="http://'+j+"/team/"+c.stub+'">'+c.name+"</a></b><em>Raised "+c.currency_sign+c.funds_raised+"</em></div></li>")})}}),
// Bind nav for teams
a(".cv-fundraisers .nav a").last().on("click",function(b){b.preventDefault(),a(this).siblings().removeClass("active"),a(this).addClass("active"),a(".cv-fundraisers ul.fundraisers").hide(),a(".cv-fundraisers ul.teams").css({display:"block",opacity:0}).animate({opacity:1},250)}),
// Search string for teams
c="Search for a fundraiser or team..."),// end if
// Hide the elements
a(".cv-fundraisers ul.teams, .cv-fundraisers ul.results").hide(),
// Bind event for fundraisers
a(".cv-fundraisers .nav a").first().on("click",function(b){b.preventDefault(),a(this).siblings().removeClass("active"),a(this).addClass("active"),a(".cv-fundraisers ul.fundraisers").css({display:"block",opacity:0}).animate({opacity:1},250),a(".cv-fundraisers ul.teams").hide()}),
// Search box
a(".cv-fundraisers .search input").on("focus",function(b){b.preventDefault(),a(this).val()==c&&(a(this).addClass("searching"),a(this).val(""))}).on("blur",function(b){b.preventDefault(),(""==a(this).val()||a(this).val()==c)&&(a(this).removeClass("searching"),a(this).val(c),a(".cv-fundraisers ul.fundraisers, .cv-fundraisers .nav").show(),a(".cv-fundraisers ul.results").html("").hide())}).on("keyup",function(c){a(".cv-fundraisers ul.fundraisers, .cv-fundraisers ul.teams, .cv-fundraisers .nav").hide(),a(".cv-fundraisers ul.results").show(),a.ajax({url:"http://"+j+"/api_endpoint/search?limit=50&term="+escape(a(".cv-fundraisers .search input").val()),dataType:"jsonp",success:function(c){a(".cv-fundraisers ul.results").html(""),0==c.length?a(".cv-fundraisers ul.results").append('<li class="no-results">No Results Found</li>'):a.map(c,function(c){a(".cv-fundraisers ul.results").append("fundraiser"==c.type?'<li><div class="image"><a href="http://'+j+"/"+c.stub+'"><img height="50" width="50" alt=" " src="'+b(c.photo_path,50,50)+'"></a></div><div class="meta"><b><a href="http://'+j+"/"+c.stub+'">'+c.fundraiser+"</a></b><em>Raised "+c.currency_sign+c.funds_raised+"</em></div></li>":'<li><div class="image"><a href="http://'+j+"/team/"+c.stub+'"><img height="50" width="50" alt=" " src="'+b(c.photo_path,50,50)+'"></a></div><div class="meta"><b><a href="http://'+j+"/team/"+c.stub+'">'+c.name+"</a></b><em>Raised "+c.currency_sign+c.funds_raised+"</em></div></li>")})}})})}function h(){a(".loader-wrapper").css("display","block"),setTimeout(function(){a(".loader").css({opacity:".85",filter:"alpha(opacity = 85)"})},1)}function i(){a(".loader").css({opacity:"0",filter:"alpha(opacity = 0)"}),setTimeout(function(){a(".loader-wrapper").hide()},400)}var j=window.location.hostname,k="production",l=!1;return{setDomain:function(a){j=a},setEnv:function(a){k=a},init:function(){if(
// If we are in the editor, disable links and the library stuff
"cv_editor"==window.name&&(l=!0),1==l)a(".cv-editable").on("click",function(){e.preventDefault()});else{
// IE detection
var b=!1;(a(".ie7").length>0||a(".ie8").length>0)&&(b=!0),a(".ie7, .ie8").remove();
// Close dialog
var c=function(b){"close-login"==b.data&&(a("#cv-iframe-login").hide(),i()),"close-signup"==b.data&&(a("#cv-iframe-signup").hide(),i()),"close-donate"==b.data&&(a(".cv-iframe-donate").hide(),i()),"open-signup"==b.data&&(a("#cv-iframe-login").hide(),a(".cv-signup").first().trigger("click")),"open-login"==b.data&&(a("#cv-iframe-signup").hide(),a(".cv-login").first().trigger("click"))};if(window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent&&window.attachEvent("onmessage",c),a(".cv-login").length>0&&a("body").append('<iframe id="cv-iframe-login" name="login" style="background-color: transparent; border: 0px none transparent; overflow: hidden; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9999; display: none;" target="_blank" src="http://fundraiseuk.worldbicyclerelief.org/signup" scrolling="no" frameBorder="0"></iframe>'),a(".cv-signup").length>0&&a("body").append('<iframe id="cv-iframe-signup" name="signup" style="background-color: transparent; border: 0px none transparent; overflow: hidden; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9999; display: none;" target="_blank" src="http://'+j+'/signup" scrolling="no" frameBorder="0"></iframe>'),a("body").append('<div class="loader-wrapper" style="display: none; z-index: 9998"><div class="loader" style="position: fixed; left: 0; top: 0; bottom: 0; right: 0; background: #00; background: rgba(0,0,0,0.8); background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.7) 100%); background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.7) 100%); background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.7) 100%); background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.7) 100%); filter: alpha(opacity = 0); opacity: 0; -webkit-transition: 400ms opacity ease; -moz-transition: 400ms opacity ease; transition: 400ms opacity ease;"><img src="/images/spinner_black.gif" alt="" style="display: block; margin: 0 auto; margin-top: 250px" /></div></div>'),a(".cv-donate").length>0){var m=[];a(".cv-donate").each(function(c,d){var e=a(this).data("url");if("undefined"==typeof e&&(e=j),"development"==k)var f="secure.cvdev.com";else if("staging"==k)var f="secure.cvoxdemo.com";else var f="secure.causevox.com";m[c]=!1,a(d).on("click",function(d){d.preventDefault(),console.log("loading donate box...");
// Mobile detection
var g=navigator.userAgent||navigator.vendor||window.opera;
// Show the loader
return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(g)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(g.substr(0,4))?(top.location="http://"+f+"/pay?url="+e+"&mobile=1",!1):(h(),b||"doitinadress.com"==j?(top.location="http://"+f+"/pay?url="+e,!1):void(0==m[c]?(a("#cv-iframe-donate-"+c).unbind("load"),a("#cv-iframe-donate-"+c).on("load",function(){a(this).unbind("load"),a(this).css("display","block"),window["donate-"+c].postMessage("open-donate","*"),m[c]=!0})):(a("#cv-iframe-donate-"+c).css("display","block"),window["donate-"+c].postMessage("open-donate","*"))))}),a("body").append('<iframe id="cv-iframe-donate-'+c+'" class="cv-iframe-donate" name="donate-'+c+'" style="background-color: transparent; border: 0px none transparent; overflow: hidden; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9999; display: none;" src="http://'+f+"/pay?url="+e+'" scrolling="no" frameBorder="0"></iframe>'),a("#cv-iframe-donate-"+c).on("load",function(){m[c]=!0,a(this).unbind("load")})})}
// Login button bind
var n=!1;a(".cv-login").on("click",function(c){return c.preventDefault(),console.log("loading login box..."),h(),b||"doitinadress.com"==j?(top.location="/login",!1):void(0==n?(a("#cv-iframe-login").unbind("load"),a("#cv-iframe-login").on("load",function(){a(this).unbind("load"),a(this).css("display","block"),window.login.postMessage("open-login","*"),n=!0})):(a("#cv-iframe-login").css("display","block"),window.login.postMessage("open-login","*")))}),a("#cv-iframe-login").on("load",function(){n=!0,a(this).unbind("load")});
// Signup button bind
var o=!1;a(".cv-signup").on("click",function(c){return c.preventDefault(),console.log("loading signup box..."),h(),b||"doitinadress.com"==j?(top.location="/signup",!1):void(0==o?(a("#cv-iframe-signup").unbind("load"),a("#cv-iframe-signup").on("load",function(){a(this).unbind("load"),a(this).css("display","block"),window.signup.postMessage("open-signup","*"),o=!0})):(a("#cv-iframe-signup").css("display","block"),window.signup.postMessage("open-signup","*")))}),a("#cv-iframe-signup").on("load",function(){o=!0,a(this).unbind("load")})}
// Create widget for fundraisers box
a(".cv-fundraisers").length>0&&g(),
// Campaign info widgets
(a(".cv-funds-raised").length>0||a(".cv-funds-needed").length>0||a(".cv-percent-progress").length>0||a(".cv-progress-bar").length>0||a(".cv-info").length>0)&&d(),(a(".cv-global-funds-raised").length>0||a(".cv-global-funds-needed").length>0||a(".cv-global-percent-progress").length>0||a(".cv-global-progress-bar").length>0||a(".cv-global-info").length>0)&&f()}}}(cvjQuery);
// Kick-off
cvjQuery(function(){CV.init()});