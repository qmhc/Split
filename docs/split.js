!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Split",[],e):"object"==typeof exports?exports.Split=e():t.Split=e()}(this,(function(){return(n={},t.m=e=[function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]),n(3)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"split.scss"}])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,i,r,s=t[1]||"",o=t[3];if(!o)return s;if(e&&"function"==typeof btoa){var a=(n=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(r," */")),l=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")}));return[s].concat(l).concat([a]).join("\n")}return[s].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var o=0;o<t.length;o++){var a=t[o];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){var i,r,s,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),l=(s={},function(t,e){if("function"==typeof t)return t();if(void 0===s[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}s[t]=n}return s[t]}),c=null,u=0,f=[],h=n(4);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(g(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],i={},r=0;r<t.length;r++){var s=t[r],o=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[o]?i[o].parts.push(a):n.push(i[o]={id:o,parts:[a]})}return n}function v(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=f[f.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(t.insertAt.before,n);n.insertBefore(e,r)}}function _(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);0<=e&&f.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=n.nc;i&&(t.attrs.nonce=i)}return y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,i,r,s,o,a;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var l=u++;n=c=c||m(e),i=x.bind(null,n,l,!1),r=x.bind(null,n,l,!0)}else r=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=e,a=document.createElement("link"),void 0===o.attrs.type&&(o.attrs.type="text/css"),o.attrs.rel="stylesheet",y(a,o.attrs),v(o,a),i=function(t,e,n){var i=n.css,r=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||s)&&(i=h(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,n=a,e),function(){_(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=function(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){_(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}for(t&&d(p(t,e),e),r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,s=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e,n){"use strict";n.r(e),n(0);var i=function(){function t(e){var n=this,i=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),2!==n.length);i=!0);}catch(t){r=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e),r=i[0],s=i[1],o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),"string"==typeof o&&(o={container:o});var a,l=[this._qeurySelector(r),this._qeurySelector(s)];"container"in o?a=document.querySelector(o.container):(a=document.createElement("div"),l[0].parentNode.insertBefore(a,l[0]));var c=o,u=c.value,f=void 0===u?.5:u,h=c.min,d=void 0===h?100:h,p=c.transition,v=void 0===p||p,_=c.timely,m=void 0===_||_,y=c.mode,g=void 0===y?"horizontal":y;this.value=f,this.min=d||100,this.transition=v,this.timely=m,this._state=null,this._full="",this._mode="vertical"===g?"vertical":"horizontal",this._offset="vertical"===this._mode?"offsetHeight":"offsetWidth",this._events=["movestart","moving","moveend"],this._listeners={},this._container=a,this._container.classList.add("split-wrapper"),this._container.classList.add(this._mode),"horizontal"===this._mode?this._style=["left","right"]:this._style=["top","bottom"],this._elements=[];for(var b=0;b<2;b++)this._elements[b]=document.createElement("div"),this._elements[b].className="split-pane ".concat(this._style[b],"-pane"),this._elements[b].appendChild(l[b]),this._container.appendChild(this._elements[b]);this._initElement(),this._setPanesPosition(),this._handleTriggerMove=this._handleTriggerMove.bind(this),this._handleTriggerUp=this._handleTriggerUp.bind(this),this._removeTransition=this._removeTransition.bind(this),this._trigger.addEventListener("mousedown",(function(t){if(t.preventDefault(),t.stopPropagation(),n._full)return!1;n._container.classList.add("split-moving");var e=n._container[n._offset],i=n._min/e,r="vertical"===n._mode?"pageY":"pageX",s="vertical"===n._mode?"top":"left";return n._state={dir:r,outer:e,min:i,style:s,max:1-i,origin:t[r],value:n._value,target:t[r]},n.transition=!1,n._dispatchEvent("movestart"),document.addEventListener("mousemove",n._handleTriggerMove),document.addEventListener("mouseup",n._handleTriggerUp),!1})),this._fullBtns[0].addEventListener("click",(function(){if(n._setTransition(),n._full===n._style[1])return n._resetFullClass(),!1;n._elements[0].style[n._style[1]]="0",n._elements[1].style[n._style[0]]="100%",n._trigger.style[n._style[0]]="100%",n._container.classList.add("".concat(n._style[0],"-full")),n._full=n._style[0]})),this._fullBtns[1].addEventListener("click",(function(){if(n._setTransition(),"left"===n._full)return n._resetFullClass(),!1;n._elements[0].style[n._style[1]]="100%",n._elements[1].style[n._style[0]]="0",n._trigger.style[n._style[0]]="0",n._container.classList.add("".concat(n._style[1],"-full")),n._full=n._style[1]})),this._init=!0}return function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(t.prototype,[{key:"_qeurySelector",value:function(e){return e instanceof t?e.container:document.querySelector(e)}},{key:"_resetFullClass",value:function(){this._setPanesPosition(),this._container.classList.remove("left-full"),this._container.classList.remove("right-full"),this._container.classList.remove("top-full"),this._container.classList.remove("bottom-full"),this._full=""}},{key:"_setTransition",value:function(){this._transition&&(this._container.classList.add("split-transition"),this._container.addEventListener("transitionend",this._removeTransition))}},{key:"_removeTransition",value:function(){this._container.classList.remove("split-transition"),this._container.removeEventListener("transitionend",this._removeTransition)}},{key:"_initElement",value:function(){this._trigger=this._container.querySelector(".split-trigger"),this._trigger&&this._trigger.parentNode===this._container||(this._trigger=document.createElement("div"),this._trigger.className="split-trigger",this._container.appendChild(this._trigger)),this._handle=this._trigger.querySelector(".split-trigger-handler"),this._handle||(this._handle=document.createElement("div"),this._handle.className="split-trigger-handler",this._trigger.appendChild(this._handle)),this._fullBtns=[this._createButton(this._style[0]),this._createButton(this._style[1])]}},{key:"_createButton",value:function(t){var e="".concat(t,"-full"),n=this._handle.querySelector(".split-trigger-button.".concat(e));if(!n){(n=document.createElement("div")).className="split-trigger-button ".concat(e);var i=document.createElement("div");i.className="split-icon-wrapper",i.style.width="4px",i.appendChild(this._createArrowIcon()),n.appendChild(i),this._handle.appendChild(n)}return n}},{key:"_createArrowIcon",value:function(t,e){var n=0<arguments.length&&void 0!==t?t:18,i=1<arguments.length&&void 0!==e?e:"white",r=document.createElement("div");r.className="split-icon icon-arrow",r.style.width="".concat(n,"px"),r.style.height="".concat(n,"px");var s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 125 125");var o=document.createElementNS("http://www.w3.org/2000/svg","polygon");o.setAttribute("fill-rule","evenodd"),o.setAttribute("clip-rule","evenodd"),o.setAttribute("fill",i);var a=o.cloneNode();return o.setAttribute("points","72.2,58.2 51,79.2 55.9,84 77,63"),a.setAttribute("points","51,46.8 55.9,42 77,63 72.2,67.8"),s.appendChild(o),s.appendChild(a),s.style.width="".concat(n,"px"),s.style.height="".concat(n,"px"),r.appendChild(s),r}},{key:"_setPanesPosition",value:function(){this._elements[0].style[this._style[1]]="".concat(100*(1-this._value),"%"),this._trigger.style[this._style[0]]="calc(".concat(100*this._value,"% - 3px)"),this._elements[1].style[this._style[0]]="".concat(100*this._value,"%")}},{key:"_handleTriggerMove",value:function(t){var e=t[this._state.dir]-this._state.origin,n=this._state.outer,i=(n*this._state.value+e)/n;return i>this._state.max&&(i=this._state.max),i<this._state.min&&(i=this._state.min),this._timely?this.value=i:(this._trigger.style[this._state.style]="".concat(100*i,"%"),this._state.target=i),this._dispatchEvent("moving"),!1}},{key:"_handleTriggerUp",value:function(){return document.removeEventListener("mousemove",this._handleTriggerMove),document.removeEventListener("mouseup",this._handleTriggerUp),this._timely||(this.value=this._state.target),this._state=null,this._container.classList.remove("split-moving"),this.transition=!0,this._dispatchEvent("moveend"),!1}},{key:"_dispatchEvent",value:function(t,e){if(this._events.includes(t)&&this._listeners[t])for(var n=this._listeners[t],i=0,r=n.length;i<r;i++)n[i](e)}},{key:"on",value:function(t,e){this._events.includes(t)&&"function"==typeof e&&(this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e))}},{key:"off",value:function(t,e){if(this._events.includes(t)&&"function"==typeof e&&this._listeners[t]){var n=this._listeners[t].findIndex((function(t){return t===e}));~n&&this._listeners[t].splice(n,1)}}},{key:"clear",value:function(t){this._events.includes(t)&&this._listeners[t]&&(this._listeners[t]=[])}},{key:"container",get:function(){return this._container},set:function(t){console.warn("Split container is read only.")}},{key:"value",get:function(){return this._value},set:function(t){t=t<0?0:1<t?1:parseFloat(t)||.5,this._init?t.toFixed(5)!==this._value.toFixed(5)&&(this._value=t,this._setTransition(),this._setPanesPosition()):this._value=t}},{key:"min",get:function(){return this._min},set:function(t){if(t=~~t,this._init){var e=this._container.offsetWidth;if(e/2<=t)return;var n=t/e,i=1-n,r=this._value;r<n&&(r=n),i<r&&(r=i),r!==this._value&&(this.value=r)}this._min=t}},{key:"mode",get:function(){return this._mode},set:function(t){console.warn("Split mode is read only.")}},{key:"transition",get:function(){return this._transition},set:function(t){this._transition=!!t}},{key:"timely",get:function(){return this._timely},set:function(t){this._timely=!!t}}]),t}();e.default=i}],t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(t){return e[t]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=5)).default;function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e,n}));