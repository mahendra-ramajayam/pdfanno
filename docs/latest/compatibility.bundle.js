(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define([],b):'object'==typeof exports?exports.PDFAnnoCore=b():a.PDFAnnoCore=b()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=91)}({91:function(){'use strict';'undefined'==typeof PDFJS&&(('undefined'==typeof window?this:window).PDFJS={}),function(){function a(a,b){return new c(this.slice(a,b))}function b(a,b){2>arguments.length&&(b=0);for(var c=0,d=a.length;c<d;++c,++b)this[b]=255&a[c]}function c(c){var d,e,f;if('number'==typeof c)for(d=[],e=0;e<c;++e)d[e]=0;else if('slice'in c)d=c.slice(0);else for(d=[],e=0,f=c.length;e<f;++e)d[e]=c[e];return d.subarray=a,d.buffer=d,d.byteLength=d.length,d.set=b,'object'==typeof c&&c.buffer&&(d.buffer=c.buffer),d}return'undefined'==typeof Uint8Array?void(window.Uint8Array=c,window.Int8Array=c,window.Uint32Array=c,window.Int32Array=c,window.Uint16Array=c,window.Float32Array=c,window.Float64Array=c):('undefined'==typeof Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(a,b){return new Uint8Array(this.slice(a,b))},Float32Array.prototype.subarray=function(a,b){return new Float32Array(this.slice(a,b))}),void('undefined'==typeof Float64Array&&(window.Float64Array=Float32Array)))}(),function(){window.URL||(window.URL=window.webkitURL)}(),function(){if('undefined'!=typeof Object.defineProperty){var a=!0;try{Object.defineProperty(new Image,'id',{value:'test'});var b=function(){};b.prototype={get id(){}},Object.defineProperty(new b,'id',{value:'',configurable:!0,enumerable:!0,writable:!1})}catch(b){a=!1}if(a)return}Object.defineProperty=function(a,b,c){delete a[b],'get'in c&&a.__defineGetter__(b,c.get),'set'in c&&a.__defineSetter__(b,c.set),'value'in c&&(a.__defineSetter__(b,function(a){return this.__defineGetter__(b,function(){return a}),a}),a[b]=c.value)}}(),function(){var a=XMLHttpRequest.prototype,b=new XMLHttpRequest;if('overrideMimeType'in b||Object.defineProperty(a,'overrideMimeType',{value:function(){}}),!('responseType'in b))return PDFJS.disableWorker=!0,Object.defineProperty(a,'responseType',{get:function(){return this._responseType||'text'},set:function(a){('text'===a||'arraybuffer'===a)&&(this._responseType=a,'arraybuffer'===a&&'function'==typeof this.overrideMimeType&&this.overrideMimeType('text/plain; charset=x-user-defined'))}}),'undefined'==typeof VBArray?void Object.defineProperty(a,'response',{get:function(){if('arraybuffer'!==this.responseType)return this.responseText;var a,b=this.responseText,c=b.length,d=new Uint8Array(c);for(a=0;a<c;++a)d[a]=255&b.charCodeAt(a);return d.buffer}}):void Object.defineProperty(a,'response',{get:function(){return'arraybuffer'===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}})}(),function(){if(!('btoa'in window)){var a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';window.btoa=function(b){var c,d,e='';for(c=0,d=b.length;c<d;c+=3){var f=255&b.charCodeAt(c),g=255&b.charCodeAt(c+1),h=255&b.charCodeAt(c+2),i=c+1<d?(15&g)<<2|h>>6:64,j=c+2<d?63&h:64;e+=a.charAt(f>>2)+a.charAt((3&f)<<4|g>>4)+a.charAt(i)+a.charAt(j)}return e}}}(),function(){if(!('atob'in window)){window.atob=function(a){if(a=a.replace(/=+$/,''),1==a.length%4)throw new Error('bad atob input');for(var b,c,d=0,e=0,f='';c=a.charAt(e++);~c&&(b=d%4?64*b+c:c,d++%4)?f+=String.fromCharCode(255&b>>(6&-2*d)):0)c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(c);return f}}}(),function(){'undefined'!=typeof Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments,1);return function(){var d=c.concat(Array.prototype.slice.call(arguments));return b.apply(a,d)}})}(),function(){var a=document.createElement('div');'dataset'in a||Object.defineProperty(HTMLElement.prototype,'dataset',{get:function(){if(this._dataset)return this._dataset;for(var a,b={},c=0,d=this.attributes.length;c<d;c++)if(a=this.attributes[c],'data-'===a.name.substring(0,5)){var e=a.name.substring(5).replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()});b[e]=a.value}return Object.defineProperty(this,'_dataset',{value:b,writable:!1,enumerable:!1}),b},enumerable:!0})}(),function(){function a(a,b,c,d){var e=a.className||'',f=e.split(/\s+/g);''===f[0]&&f.shift();var g=f.indexOf(b);return 0>g&&c&&f.push(b),0<=g&&d&&f.splice(g,1),a.className=f.join(' '),0<=g}var b=document.createElement('div');if(!('classList'in b)){var c={add:function(b){a(this.element,b,!0,!1)},contains:function(b){return a(this.element,b,!1,!1)},remove:function(b){a(this.element,b,!1,!0)},toggle:function(b){a(this.element,b,!0,!0)}};Object.defineProperty(HTMLElement.prototype,'classList',{get:function(){if(this._classList)return this._classList;var a=Object.create(c,{element:{value:this,writable:!1,enumerable:!0}});return Object.defineProperty(this,'_classList',{value:a,writable:!1,enumerable:!1}),a},enumerable:!0})}}(),function(){'console'in window?!('bind'in console.log)&&(console.log=function(a){return function(b){return a(b)}}(console.log),console.error=function(a){return function(b){return a(b)}}(console.error),console.warn=function(a){return function(b){return a(b)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){function a(b){return b.disabled||b.parentNode&&a(b.parentNode)}-1!==navigator.userAgent.indexOf('Opera')&&document.addEventListener('click',function(b){a(b.target)&&b.stopPropagation()},!0)}(),function(){0<=navigator.userAgent.indexOf('Trident')&&(PDFJS.disableCreateObjectURL=!0)}(),function(){'language'in navigator||(PDFJS.locale=navigator.userLanguage||'en-US')}(),function(){var a=0<Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor'),b=/Android\s[0-2][^\d]/,c=b.test(navigator.userAgent),d=/Chrome\/(39|40)\./.test(navigator.userAgent);(a||c||d)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),function(){(!history.pushState||0<=navigator.userAgent.indexOf('Android 2.'))&&(PDFJS.disableHistory=!0)}(),function(){if(window.CanvasPixelArray)'function'!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(a){for(var b=0,c=this.length;b<c;b++)this[b]=a[b]});else{var a,b=!1;if(0<=navigator.userAgent.indexOf('Chrom')?(a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./),b=a&&21>parseInt(a[2])):0<=navigator.userAgent.indexOf('Android')?b=/Android\s[0-4][^\d]/g.test(navigator.userAgent):0<=navigator.userAgent.indexOf('Safari')&&(a=navigator.userAgent.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//),b=a&&6>parseInt(a[1])),b){var c=window.CanvasRenderingContext2D.prototype,d=c.createImageData;c.createImageData=function(a,b){var c=d.call(this,a,b);return c.data.set=function(a){for(var b=0,c=this.length;b<c;b++)this[b]=a[b]},c},c=null}}}(),function(){function a(a){window.setTimeout(a,20)}var b=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);return b?void(window.requestAnimationFrame=a):void('requestAnimationFrame'in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||a))}(),function(){var a=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),b=/Android/g.test(navigator.userAgent);(a||b)&&(PDFJS.maxCanvasPixels=5242880)}(),function(){var a=0<=navigator.userAgent.indexOf('Trident')&&window.parent!==window;a&&(PDFJS.disableFullscreen=!0)}(),function(){'currentScript'in document||Object.defineProperty(document,'currentScript',{get:function(){var a=document.getElementsByTagName('script');return a[a.length-1]},enumerable:!0,configurable:!0})}()}})});
//# sourceMappingURL=compatibility.bundle.js.map