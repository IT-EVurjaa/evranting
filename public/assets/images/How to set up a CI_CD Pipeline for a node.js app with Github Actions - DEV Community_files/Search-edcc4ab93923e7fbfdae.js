(window.webpackJsonp=window.webpackJsonp||[]).push([[11,94],{12:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function a(e,t,r,n,o,c,i){try{var a=e[c](i),u=a.value}catch(s){return void r(s)}a.done?t(u):Promise.resolve(u).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function i(e){a(c,n,o,i,u,"next",e)}function u(e){a(c,n,o,i,u,"throw",e)}i(void 0)}))}}function s(e){return f.apply(this,arguments)}function f(){return(f=u((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.headers,n=t.body,c=t.method,a=void 0===c?"GET":c,u=t.csrfToken,s=void 0===u?yield getCsrfToken():u,f=i(t,["headers","body","method","csrfToken"]),l={body:n&&"string"!==typeof n?JSON.stringify(n):n},h=o(o({method:a,headers:o({Accept:"application/json","X-CSRF-Token":s,"Content-Type":"application/json"},r),credentials:"same-origin"},l),f);return fetch(e,h)}))).apply(this,arguments)}r.d(t,"a",(function(){return s}))},13:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return m}));var n=r(2),o=r(1),c=r.n(o);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,c=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e){if(e instanceof HTMLElement===!1)return!1;var t=e.nodeName.toLowerCase(),r=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==r&&"reset"!==r&&"checkbox"!==r&&"radio"!==r||e.isContentEditable}var y=function(e,t,r,n){var o=r&&r.length>0?n["".concat(r.join("~"),"~").concat(e.code)]:n["".concat(t).concat(e.code)]||n["".concat(t).concat(e.key.toLowerCase())];return o?(o(e),[]):t||"Shift"===e.key?[]:[].concat(f(r),[e.code])},d={timeout:0};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object(n.k)(e),c=s(o,1),i=c[0],u=Object(n.k)([]),f=s(u,2),l=f[0],h=f[1],b=Object(n.k)(a(a({},d),r)),m=s(b,2),v=m[0],O=m[1];Object(n.d)((function(){var e={};"number"===typeof r.timeout&&(e.timeout=r.timeout),O(a(a({},d),e))}),[r.timeout]),Object(n.d)((function(){if(!(l.length<=0)){var e=window.setTimeout((function(){clearTimeout(e),h([])}),v.timeout);return function(){return clearTimeout(e)}}}),[l.length,v.timeout]),Object(n.d)((function(){if(i&&0!==Object.keys(i).length){var e=function(e){if(!e.defaultPrevented){var t="".concat(e.ctrlKey||e.metaKey?"ctrl+":"").concat(e.altKey?"alt+":"").concat((e.ctrlKey||e.metaKey||e.altKey)&&e.shiftKey?"shift+":"");if(!(e.target instanceof Node&&p(e.target))||t){var r=y(e,t,l,i);h(r)}}};return t.addEventListener("keydown",e),function(){return t.removeEventListener("keydown",e)}}}),[l,i,t])}function m(e){return b(e.shortcuts,e.eventTarget,e.options),null}m.propTypes={shortcuts:c.a.object.isRequired,options:c.a.shape({timeout:c.a.number}),eventTarget:c.a.instanceOf(Element)},m.defaultProps={shortcuts:{},options:{},eventTarget:window}},14:function(e,t,r){"use strict";r.r(t),r.d(t,"hasInstantClick",(function(){return i})),r.d(t,"displaySearchResults",(function(){return u})),r.d(t,"getSearchTermFromUrl",(function(){return s})),r.d(t,"preloadSearchResults",(function(){return f})),r.d(t,"fetchSearch",(function(){return l}));var n=r(6);function o(e,t){var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,r=e.replace(/[[\]]/g,"\\$&"),n=new RegExp("[?&]".concat(r,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}(e,t);return r?"&".concat(e,"=").concat(r):""}function c(e){return o("filters",e)}function i(){return"undefined"!==typeof instantClick}function a(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function u(e){var t,r=e.searchTerm,n=e.location,i=void 0===n?window.location:n,u=i.origin,s=a(r),f=c(i.href),l=o("sort_by",t=i.href)+o("sort_direction",t);InstantClick.display("".concat(u,"/search?q=").concat(s).concat(f).concat(l))}function s(e){var t,r=new URLSearchParams(e),n=null!==(t=filterXSS(r.get("q")))&&void 0!==t?t:"",o=document.createElement("div");return o.innerHTML=n,null!==o.firstChild?o.firstChild.nodeValue:n}function f(e){var t=e.searchTerm,r=e.location,n=void 0===r?window.location:r,o=a(t.replace(/^[ ]+|[ ]+$/g,"")),i="".concat(n.origin,"/search?q=").concat(o).concat(c(n.href));InstantClick.preload(i)}function l(e,t){var r=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(r){var n=e[r];Array.isArray(n)?n.forEach((function(e){t.append("".concat(r,"[]"),e)})):t.append(r,n)})),t.toString()}(t);return Object(n.b)("/search/".concat(e,"?").concat(r)).then((function(e){return e.json()}))}},6:function(e,t,r){"use strict";function n(e){if(e.ok)return e;try{e.json().then((function(e){throw new Error(e.error)}))}catch(t){throw t instanceof SyntaxError?new Error(e.statusText):t}}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o.a}));var o=r(12)},93:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(82),r(2)),c=r(5),i=r(1),a=r.n(i),u=r(14),s=r(13),f=Object(c.forwardRef)((function(e,t){var r=e.searchTerm,o=e.onSearch,c=e.onSubmitSearch;return Object(n.h)("form",{action:"/search",acceptCharset:"UTF-8",method:"get",onSubmit:c},Object(n.h)("input",{name:"utf8",type:"hidden",value:"\u2713"}),Object(n.h)("input",{ref:t,className:"crayons-header--search-input crayons-textfield",type:"text",name:"q",placeholder:"Search...",autoComplete:"off","aria-label":"search",onKeyDown:o,value:r}))}));function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}f.propTypes={searchTerm:a.a.string.isRequired,onSearch:a.a.func.isRequired,onSubmitSearch:a.a.func.isRequired};var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,r,o,c=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),v(b(t=c.call(this,e)),"enableSearchPageListener",(function(){t.enableSearchPageChecker=!0})),v(b(t),"hasKeyModifiers",(function(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey})),v(b(t),"submit",(function(e){u.hasInstantClick&&e.preventDefault()})),v(b(t),"minimizeHeader",(function(e){e.preventDefault(),document.body.classList.toggle("zen-mode")})),v(b(t),"focusOnSearchBox",(function(e){e.preventDefault(),document.body.classList.remove("zen-mode");var r=t.searchInputRef.current;r.focus(),r.select()})),t.enableSearchPageChecker=!0,t.syncSearchUrlWithInput=t.syncSearchUrlWithInput.bind(b(t)),t.searchInputRef=Object(n.createRef)(null),t}return t=i,(r=[{key:"componentWillMount",value:function(){var e=this,t=this.props,r=t.searchTerm,n=t.setSearchTerm;!function t(){e.enableSearchPageChecker&&""!==r&&null===/^http(s)?:\/\/[^/]+\/search/.exec(window.location.href)&&n(""),setTimeout(t,500)}()}},{key:"syncSearchUrlWithInput",value:function(){var e=this.props.setSearchTerm,t=Object(u.getSearchTermFromUrl)(window.location.search);this.searchInputRef.current.value=t,e(t)}},{key:"componentDidMount",value:function(){InstantClick.on("change",this.enableSearchPageListener),window.addEventListener("popstate",this.syncSearchUrlWithInput)}},{key:"search",value:function(e,t){var r=this.props.searchTerm;this.enableSearchPageChecker=!1,Object(u.hasInstantClick)()&&"Enter"===e&&r!==t&&((0,this.props.setSearchTerm)(t),Object(u.preloadSearchResults)({searchTerm:t}),Object(u.displaySearchResults)({searchTerm:t}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.globalKeysListener),window.removeEventListener("popstate",this.syncSearchUrlWithInput),InstantClick.off&&InstantClick.off("change",this.enableSearchPageListener)}},{key:"render",value:function(e){var t,r=this,o=e.searchTerm;return Object(n.h)(n.Fragment,null,Object(n.h)(s.a,{shortcuts:(t={},v(t,"/",this.focusOnSearchBox),v(t,"Digit0",this.minimizeHeader),t)}),Object(n.h)(f,{searchTerm:o,onSearch:function(e){var t=e.key,n=e.target.value;r.search(t,n)},onSubmitSearch:this.submit,ref:this.searchInputRef}))}}])&&h(t.prototype,r),o&&h(t,o),i}(n.Component);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,c=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(){var e=g(Object(o.k)((function(){return Object(u.getSearchTermFromUrl)(location.search)})),2),t=e[0],r=e[1],i=g(Object(o.k)(null),2),a=i[0],s=i[1];function f(e){var t=e.detail.querystring,n=Object(u.getSearchTermFromUrl)(t),o=document.getElementById("mobile-search-container");if(a&&o!==a&&Object(c.unmountComponentAtNode)(a),o){var i=o.querySelector("form");i&&o.removeChild(i)}s(o),r(n)}return Object(o.d)((function(){return window.addEventListener("syncSearchForms",f),function(){window.removeEventListener("syncSearchForms",f)}})),Object(n.h)(c.Fragment,null,Object(n.h)(O,{searchTerm:t,setSearchTerm:r}),a&&Object(c.createPortal)(Object(n.h)(O,{searchTerm:t,setSearchTerm:r}),a))}O.propTypes={searchTerm:a.a.string.isRequired,setSearchTerm:a.a.func.isRequired},document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("header-search");Object(n.render)(Object(n.h)(w,null),e)}))}},[[93,43,82]]]);
//# sourceMappingURL=Search-edcc4ab93923e7fbfdae.chunk.js.map