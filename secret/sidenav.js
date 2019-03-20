const mql = e => {
  if (e.matches) {
    (function(window) {
      if (window.Package) {
        M = {};
      } else {
        window.M = {};
      }
    })(window);
    if (typeof define === 'function' && define.amd) {
      define('M', [], function() {
        return M;
      });
    } else if (typeof exports !== 'undefined' && !exports.nodeType) {
      if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
        exports = module.exports = M;
      }
      exports.default = M;
    }
    M.getOverflowParent = function(element) {
      if (element == null) {
        return null;
      }
      if (element === document.body || getComputedStyle(element).overflow !== 'visible') {
        return element;
      }
      return M.getOverflowParent(element.parentElement);
    };
    M.getIdFromTrigger = function(trigger) {
      let id = trigger.getAttribute('data-target');
      if (!id) {
        id = trigger.getAttribute('href');
        if (id) {
          id = id.slice(1);
        } else {
          id = '';
        }
      }
      return id;
    };
    M.getDocumentScrollTop = function() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    M.getDocumentScrollLeft = function() {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    };
    var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
    $jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
    $jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
    $jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
    $jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
    (function(r){M.anime=r()})(function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
      h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
      a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
      255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
        u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
      0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
      Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
      case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
        function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
          c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
          1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
          b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
            k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
            else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
              if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
                0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
                  g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
                  pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
                    d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
                    n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
                      .46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
                        d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
                      function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
                        !0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
(function (factory) {
  window.cash = factory();
})(function () {
  var doc = document, win = window, ArrayProto = Array.prototype, slice = ArrayProto.slice, filter = ArrayProto.filter, push = ArrayProto.push;
  var noop = function () {}, isFunction = function (item) {
    return typeof item === typeof noop && item.call;
  }, isString = function (item) {
    return typeof item === typeof "";
  };
  var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, htmlMatch = /<.+>/, singlet = /^\w+$/;
  function find(selector, context) {
    context = context || doc;
    var elems = (classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    return elems;
  }
  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument(null);
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }
    frag.body.innerHTML = str;
    return frag.body.childNodes;
  }
  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }
  function Init(selector, context) {
    if (!selector) {
      return this;
    }
    if (selector.cash && selector !== win) {
      return selector;
    }
    var elems = selector, i = 0, length;
    if (isString(selector)) {
      elems = (idMatch.test(selector) ?
        doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
        parseHTML(selector) :
        find(selector, context));
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }
    if (!elems) {
      return this;
    }
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }
    return this;
  }
  function cash(selector, context) {
    return new Init(selector, context);
  }
    var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
      cash: true,
      length: 0,
      push: push,
      splice: ArrayProto.splice,
      map: ArrayProto.map,
      init: Init
    };
    Object.defineProperty(fn, "constructor", { value: cash });
    cash.parseHTML = parseHTML;
    cash.noop = noop;
    cash.isFunction = isFunction;
    cash.isString = isString;
    cash.extend = fn.extend = function (target) {
      target = target || {};
      var args = slice.call(arguments), length = args.length, i = 1;
      if (args.length === 1) {
        target = this;
        i = 0;
      }
      for (; i < length; i++) {
        if (!args[i]) {
          continue;
        }
        for (var key in args[i]) {
          if (args[i].hasOwnProperty(key)) {
            target[key] = args[i][key];
          }
        }
      }
      return target;
    };
    function each(collection, callback) {
      var l = collection.length, i = 0;
      for (; i < l; i++) {
        if (callback.call(collection[i], collection[i], i, collection) === false) {
          break;
        }
      }
    }
    function matches(el, selector) {
      var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
      return !!m && m.call(el, selector);
    }

    function getCompareFunction(selector) {
      return (
        isString(selector) ? matches :
        selector.cash ? function (el) {
          return selector.is(el);
        } :
        function (el, selector) {
          return el === selector;
        });
    }
    function unique(collection) {
      return cash(slice.call(collection).filter(function (item, index, self) {
        return self.indexOf(item) === index;
      }));
    }
    cash.extend({
      merge: function (first, second) {
        var len = +second.length, i = first.length, j = 0;
        for (; j < len; i++, j++) {
          first[i] = second[j];
        }
        first.length = i;
        return first;
      },
      each: each,
      matches: matches,
      unique: unique,
      isArray: Array.isArray,
      isNumeric: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    });
    var uid = cash.uid = "_cash" + Date.now();
    function getDataCache(node) {
      return (node[uid] = node[uid] || {});
    }
    function setData(node, key, value) {
      return (getDataCache(node)[key] = value);
    }
    function getData(node, key) {
      var c = getDataCache(node);
      if (c[key] === undefined) {
        c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
      }
      return c[key];
    }
    function removeData(node, key) {
      var c = getDataCache(node);
      if (c) {
        delete c[key];
      } else if (node.dataset) {
        delete node.dataset[key];
      } else {
        cash(node).removeAttr("data-" + name);
      }
    }
    fn.extend({
      data: function (name, value) {
        if (isString(name)) {
          return (value === undefined ? getData(this[0], name) : this.each(function (v) {
            return setData(v, name, value);
          }));
        }
        for (var key in name) {
          this.data(key, name[key]);
        }
        return this;
      },
      removeData: function (key) {
        return this.each(function (v) {
          return removeData(v, key);
        });
      }
    });
    var notWhiteMatch = /\S+/g;
    function getClasses(c) {
      return isString(c) && c.match(notWhiteMatch);
    }
    function hasClass(v, c) {
      return (v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className));
    }

    function addClass(v, c, spacedName) {
      if (v.classList) {
        v.classList.add(c);
      } else if (spacedName.indexOf(" " + c + " ")) {
        v.className += " " + c;
      }
    }

    function removeClass(v, c) {
      if (v.classList) {
        v.classList.remove(c);
      } else {
        v.className = v.className.replace(c, "");
      }
    }

    fn.extend({
      addClass: function (c) {
        var classes = getClasses(c);

        return (classes ? this.each(function (v) {
          var spacedName = " " + v.className + " ";
          each(classes, function (c) {
            addClass(v, c, spacedName);
          });
        }) : this);
      },

      attr: function (name, value) {
        if (!name) {
          return undefined;
        }

        if (isString(name)) {
          if (value === undefined) {
            return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
          }

          return this.each(function (v) {
            if (v.setAttribute) {
              v.setAttribute(name, value);
            } else {
              v[name] = value;
            }
          });
        }

        for (var key in name) {
          this.attr(key, name[key]);
        }

        return this;
      },

      hasClass: function (c) {
        var check = false, classes = getClasses(c);
        if (classes && classes.length) {
          this.each(function (v) {
            check = hasClass(v, classes[0]);
            return !check;
          });
        }
        return check;
      },

      prop: function (name, value) {
        if (isString(name)) {
          return (value === undefined ? this[0][name] : this.each(function (v) {
            v[name] = value;
          }));
        }

        for (var key in name) {
          this.prop(key, name[key]);
        }

        return this;
      },

      removeAttr: function (name) {
        return this.each(function (v) {
          if (v.removeAttribute) {
            v.removeAttribute(name);
          } else {
            delete v[name];
          }
        });
      },

      removeClass: function (c) {
        if (!arguments.length) {
          return this.attr("class", "");
        }
        var classes = getClasses(c);
        return (classes ? this.each(function (v) {
          each(classes, function (c) {
            removeClass(v, c);
          });
        }) : this);
      },

      removeProp: function (name) {
        return this.each(function (v) {
          delete v[name];
        });
      },

      toggleClass: function (c, state) {
        if (state !== undefined) {
          return this[state ? "addClass" : "removeClass"](c);
        }
        var classes = getClasses(c);
        return (classes ? this.each(function (v) {
          var spacedName = " " + v.className + " ";
          each(classes, function (c) {
            if (hasClass(v, c)) {
              removeClass(v, c);
            } else {
              addClass(v, c, spacedName);
            }
          });
        }) : this);
      } });

    fn.extend({
      add: function (selector, context) {
        return unique(cash.merge(this, cash(selector, context)));
      },

      each: function (callback) {
        each(this, callback);
        return this;
      },

      eq: function (index) {
        return cash(this.get(index));
      },

      filter: function (selector) {
        if (!selector) {
          return this;
        }

        var comparator = (isFunction(selector) ? selector : getCompareFunction(selector));

        return cash(filter.call(this, function (e) {
          return comparator(e, selector);
        }));
      },

      first: function () {
        return this.eq(0);
      },

      get: function (index) {
        if (index === undefined) {
          return slice.call(this);
        }
        return (index < 0 ? this[index + this.length] : this[index]);
      },

      index: function (elem) {
        var child = elem ? cash(elem)[0] : this[0], collection = elem ? this : cash(child).parent().children();
        return slice.call(collection).indexOf(child);
      },

      last: function () {
        return this.eq(-1);
      }

    });

    var camelCase = (function () {
      var camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g;
      return function (str) {
        return str.replace(camelRegex, function (letter, index) {
          return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
        }).replace(whiteSpace, "");
      };
    }());

    var getPrefixedProp = (function () {
      var cache = {}, doc = document, div = doc.createElement("div"), style = div.style;

      return function (prop) {
        prop = camelCase(prop);
        if (cache[prop]) {
          return cache[prop];
        }

        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), prefixes = ["webkit", "moz", "ms", "o"], props = (prop + " " + (prefixes).join(ucProp + " ") + ucProp).split(" ");

        each(props, function (p) {
          if (p in style) {
            cache[p] = prop = cache[prop] = p;
            return false;
          }
        });

        return cache[prop];
      };
    }());

    cash.prefixedProp = getPrefixedProp;
    cash.camelCase = camelCase;

    fn.extend({
      css: function (prop, value) {
        if (isString(prop)) {
          prop = getPrefixedProp(prop);
          return (arguments.length > 1 ? this.each(function (v) {
            return v.style[prop] = value;
          }) : win.getComputedStyle(this[0])[prop]);
        }

        for (var key in prop) {
          this.css(key, prop[key]);
        }

        return this;
      }

    });

    function compute(el, prop) {
      return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
    }

    each(["Width", "Height"], function (v) {
      var lower = v.toLowerCase();

      fn[lower] = function () {
        return this[0].getBoundingClientRect()[lower];
      };

      fn["inner" + v] = function () {
        return this[0]["client" + v];
      };

      fn["outer" + v] = function (margins) {
        return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
      };
    });

    function registerEvent(node, eventName, callback) {
      var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
      eventCache[eventName] = eventCache[eventName] || [];
      eventCache[eventName].push(callback);
      node.addEventListener(eventName, callback);
    }

    function removeEvent(node, eventName, callback) {
      var events = getData(node, "_cashEvents"), eventCache = (events && events[eventName]), index;

      if (!eventCache) {
        return;
      }

      if (callback) {
        node.removeEventListener(eventName, callback);
        index = eventCache.indexOf(callback);
        if (index >= 0) {
          eventCache.splice(index, 1);
        }
      } else {
        each(eventCache, function (event) {
          node.removeEventListener(eventName, event);
        });
        eventCache = [];
      }
    }

    fn.extend({
      off: function (eventName, callback) {
        return this.each(function (v) {
          return removeEvent(v, eventName, callback);
        });
      },

      on: function (eventName, delegate, callback, runOnce) {
        var originalCallback;
        if (!isString(eventName)) {
          for (var key in eventName) {
            this.on(key, delegate, eventName[key]);
          }
          return this;
        }

        if (isFunction(delegate)) {
          callback = delegate;
          delegate = null;
        }

        if (eventName === "ready") {
          onReady(callback);
          return this;
        }

        if (delegate) {
          originalCallback = callback;
          callback = function (e) {
            var t = e.target;
            while (!matches(t, delegate)) {
              if (t === this || t === null) {
                return (t = false);
              }

              t = t.parentNode;
            }

            if (t) {
              originalCallback.call(t, e);
            }
          };
        }

        return this.each(function (v) {
          var finalCallback = callback;
          if (runOnce) {
            finalCallback = function () {
              callback.apply(this, arguments);
              removeEvent(v, eventName, finalCallback);
            };
          }
          registerEvent(v, eventName, finalCallback);
        });
      },

      one: function (eventName, delegate, callback) {
        return this.on(eventName, delegate, callback, true);
      },

      ready: onReady,
      trigger: function (eventName, data) {
        if (document.createEvent) {
          let evt = document.createEvent('HTMLEvents');
          evt.initEvent(eventName, true, false);
          evt = this.extend(evt, data);
          return this.each(function (v) {
            return v.dispatchEvent(evt);
          });
        }
      }

    });

    function encode(name, value) {
      return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
    }

    function getSelectMultiple_(el) {
      var values = [];
      each(el.options, function (o) {
        if (o.selected) {
          values.push(o.value);
        }
      });
      return values.length ? values : null;
    }

    function getSelectSingle_(el) {
      var selectedIndex = el.selectedIndex;
      return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
    }

    function getValue(el) {
      var type = el.type;
      if (!type) {
        return null;
      }
      switch (type.toLowerCase()) {
        case "select-one":
        return getSelectSingle_(el);
        case "select-multiple":
        return getSelectMultiple_(el);
        case "radio":
        return (el.checked) ? el.value : null;
        case "checkbox":
        return (el.checked) ? el.value : null;
        default:
        return el.value ? el.value : null;
      }
    }

    fn.extend({
      serialize: function () {
        var query = "";

        each(this[0].elements || this, function (el) {
          if (el.disabled || el.tagName === "FIELDSET") {
            return;
          }
          var name = el.name;
          switch (el.type.toLowerCase()) {
            case "file":
            case "reset":
            case "submit":
            case "button":
            break;
            case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
            default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
          }
        });

        return query.substr(1);
      },

      val: function (value) {
        if (value === undefined) {
          return getValue(this[0]);
        }

        return this.each(function (v) {
          return v.value = value;
        });
      }

    });

    function insertElement(el, child, prepend) {
      if (prepend) {
        var first = el.childNodes[0];
        el.insertBefore(child, first);
      } else {
        el.appendChild(child);
      }
    }

    function insertContent(parent, child, prepend) {
      var str = isString(child);

      if (!str && child.length) {
        each(child, function (v) {
          return insertContent(parent, v, prepend);
        });
        return;
      }

      each(parent, str ? function (v) {
        return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
      } : function (v, i) {
        return insertElement(v, (i === 0 ? child : child.cloneNode(true)), prepend);
      });
    }

    fn.extend({
      after: function (selector) {
        cash(selector).insertAfter(this);
        return this;
      },

      append: function (content) {
        insertContent(this, content);
        return this;
      },

      appendTo: function (parent) {
        insertContent(cash(parent), this);
        return this;
      },

      before: function (selector) {
        cash(selector).insertBefore(this);
        return this;
      },

      clone: function () {
        return cash(this.map(function (v) {
          return v.cloneNode(true);
        }));
      },

      empty: function () {
        this.html("");
        return this;
      },

      html: function (content) {
        if (content === undefined) {
          return this[0].innerHTML;
        }
        var source = (content.nodeType ? content[0].outerHTML : content);
        return this.each(function (v) {
          return v.innerHTML = source;
        });
      },

      insertAfter: function (selector) {
        var _this = this;


        cash(selector).each(function (el, i) {
          var parent = el.parentNode, sibling = el.nextSibling;
          _this.each(function (v) {
            parent.insertBefore((i === 0 ? v : v.cloneNode(true)), sibling);
          });
        });

        return this;
      },

      insertBefore: function (selector) {
        var _this2 = this;
        cash(selector).each(function (el, i) {
          var parent = el.parentNode;
          _this2.each(function (v) {
            parent.insertBefore((i === 0 ? v : v.cloneNode(true)), el);
          });
        });
        return this;
      },

      prepend: function (content) {
        insertContent(this, content, true);
        return this;
      },

      prependTo: function (parent) {
        insertContent(cash(parent), this, true);
        return this;
      },

      remove: function () {
        return this.each(function (v) {
          if (!!v.parentNode) {
            return v.parentNode.removeChild(v);
          }
        });
      },

      text: function (content) {
        if (content === undefined) {
          return this[0].textContent;
        }
        return this.each(function (v) {
          return v.textContent = content;
        });
      }

    });

    var docEl = doc.documentElement;

    fn.extend({
      position: function () {
        var el = this[0];
        return {
          left: el.offsetLeft,
          top: el.offsetTop
        };
      },

      offset: function () {
        var rect = this[0].getBoundingClientRect();
        return {
          top: rect.top + win.pageYOffset - docEl.clientTop,
          left: rect.left + win.pageXOffset - docEl.clientLeft
        };
      },

      offsetParent: function () {
        return cash(this[0].offsetParent);
      }

    });

    fn.extend({
      children: function (selector) {
        var elems = [];
        this.each(function (el) {
          push.apply(elems, el.children);
        });
        elems = unique(elems);

        return (!selector ? elems : elems.filter(function (v) {
          return matches(v, selector);
        }));
      },

      closest: function (selector) {
        if (!selector || this.length < 1) {
          return cash();
        }
        if (this.is(selector)) {
          return this.filter(selector);
        }
        return this.parent().closest(selector);
      },

      is: function (selector) {
        if (!selector) {
          return false;
        }

        var match = false, comparator = getCompareFunction(selector);

        this.each(function (el) {
          match = comparator(el, selector);
          return !match;
        });

        return match;
      },

      find: function (selector) {
        if (!selector || selector.nodeType) {
          return cash(selector && this.has(selector).length ? selector : null);
        }

        var elems = [];
        this.each(function (el) {
          push.apply(elems, find(selector, el));
        });

        return unique(elems);
      },

      has: function (selector) {
        var comparator = (isString(selector) ? function (el) {
          return find(selector, el).length !== 0;
        } : function (el) {
          return el.contains(selector);
        });

        return this.filter(comparator);
      },

      next: function () {
        return cash(this[0].nextElementSibling);
      },

      not: function (selector) {
        if (!selector) {
          return this;
        }

        var comparator = getCompareFunction(selector);

        return this.filter(function (el) {
          return !comparator(el, selector);
        });
      },

      parent: function () {
        var result = [];

        this.each(function (item) {
          if (item && item.parentNode) {
            result.push(item.parentNode);
          }
        });

        return unique(result);
      },

      parents: function (selector) {
        var last, result = [];

        this.each(function (item) {
          last = item;

          while (last && last.parentNode && last !== doc.body.parentNode) {
            last = last.parentNode;

            if (!selector || (selector && matches(last, selector))) {
              result.push(last);
            }
          }
        });

        return unique(result);
      },

      prev: function () {
        return cash(this[0].previousElementSibling);
      },

      siblings: function (selector) {
        var collection = this.parent().children(selector), el = this[0];

        return collection.filter(function (i) {
          return i !== el;
        });
      }

    });


    return cash;
  });
class Component {
 constructor(classDef, el, options) {
  if (!(el instanceof Element)) {
    console.error(Error(el + ' is not an HTML Element'));
  }
  let ins = classDef.getInstance(el);
  if (!!ins) {
    ins.destroy();
  }

  this.el = el;
  this.$el = cash(el);
}
static init(classDef, els, options) {
  let instances = null;
  if (els instanceof Element) {
    instances = new classDef(els, options);
  } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
    let instancesArr = [];
    for (let i = 0; i < els.length; i++) {
      instancesArr.push(new classDef(els[i], options));
    }
    instances = instancesArr;
  }

  return instances;
}
}
(function($, anim) {
  'use strict';

  let _defaults = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };
  class Sidenav extends Component {

   constructor(el, options) {
    super(Sidenav, el, options);

    this.el.M_Sidenav = this;
    this.id = this.$el.attr('id');
    this.options = $.extend({}, Sidenav.defaults, options);
    this.isOpen = false;
    this.isFixed = this.el.classList.contains('nav-out');
    this.isDragged = false;
    this.lastWindowWidth = window.innerWidth;
    this.lastWindowHeight = window.innerHeight;
    this._createOverlay();
    this._navLinks();
    this._createDragTarget();
    this._setupEventHandlers();
    this._setupClasses();
    this._setupFixed();
    Sidenav._sidenavs.push(this);
  }

  static get defaults() {
    return _defaults;
  }

  static init(els, options) {
    return super.init(this, els, options);
  }      
  static getInstance(el) {
    let domElem = !!el.jquery ? el[0] : el;
    return domElem.M_Sidenav;
  }

  destroy() {
    this._removeEventHandlers();
    this._enableBodyScrolling();
    this._overlay.parentNode.removeChild(this._overlay);
    this.dragTarget.parentNode.removeChild(this.dragTarget);
    this.el.M_Sidenav = undefined;
    this.el.style.transform = '';

    let index = Sidenav._sidenavs.indexOf(this);
    if (index >= 0) {
      Sidenav._sidenavs.splice(index, 1);
    }
  }

  _createOverlay() {
    let overlay = document.createElement('div');
    this._closeBound = this.close.bind(this);
    overlay.classList.add('nav-overlay');

    overlay.addEventListener('click', this._closeBound);

    document.querySelector('.header').appendChild(overlay);
    this._overlay = overlay;
  }

  _navLinks() {
    this._closeBound = this.close.bind(this);
    for(let i of navLinks){
      i.addEventListener('click',this._closeBound);
    }
  }

  _setupEventHandlers() {
    if (Sidenav._sidenavs.length === 0) {
      document.body.addEventListener('click', this._handleTriggerClick);
    }

    this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
    this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
    this._handleCloseDragBound = this._handleCloseDrag.bind(this);
    this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
    this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);

    this.dragTarget.addEventListener('touchmove', this._handleDragTargetDragBound);
    this.dragTarget.addEventListener('touchend', this._handleDragTargetReleaseBound);
    this._overlay.addEventListener('touchmove', this._handleCloseDragBound);
    this._overlay.addEventListener('touchend', this._handleCloseReleaseBound);
    this.el.addEventListener('touchmove', this._handleCloseDragBound);
    this.el.addEventListener('touchend', this._handleCloseReleaseBound);
    this.el.addEventListener('click', this._handleCloseTriggerClickBound);

    if (this.isFixed) {
      this._handleWindowResizeBound = this._handleWindowResize.bind(this);
      window.addEventListener('resize', this._handleWindowResizeBound);
    }
  }

  _removeEventHandlers() {
    if (Sidenav._sidenavs.length === 1) {
      document.body.removeEventListener('click', this._handleTriggerClick);
    }

    this.dragTarget.removeEventListener('touchmove', this._handleDragTargetDragBound);
    this.dragTarget.removeEventListener('touchend', this._handleDragTargetReleaseBound);
    this._overlay.removeEventListener('touchmove', this._handleCloseDragBound);
    this._overlay.removeEventListener('touchend', this._handleCloseReleaseBound);
    this.el.removeEventListener('touchmove', this._handleCloseDragBound);
    this.el.removeEventListener('touchend', this._handleCloseReleaseBound);
    this.el.removeEventListener('click', this._handleCloseTriggerClickBound);
    if (this.isFixed) {
      window.removeEventListener('resize', this._handleWindowResizeBound);
    }
  }
  _handleTriggerClick(e) {
    let $trigger = $(e.target).closest('.nav-toggle');
    if (e.target && $trigger.length) {
      let sidenavId = M.getIdFromTrigger($trigger[0]);

      let sidenavInstance = document.getElementById(sidenavId).M_Sidenav;
      if (sidenavInstance) {
        sidenavInstance.open($trigger);
      }
      e.preventDefault();
    }
  }

  _startDrag(e) {
    let clientX = e.targetTouches[0].clientX;
    this.isDragged = true;
    this._startingXpos = clientX;
    this._xPos = this._startingXpos;
    this._time = Date.now();
    this._width = this.el.getBoundingClientRect().width;
    this._overlay.style.display = 'block';
    this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
    this._verticallyScrolling = false;
    anim.remove(this.el);
    anim.remove(this._overlay);
  }
  _dragMoveUpdate(e) {
    let clientX = e.targetTouches[0].clientX;
    let currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
    this.deltaX = Math.abs(this._xPos - clientX);
    this._xPos = clientX;
    this.velocityX = this.deltaX / (Date.now() - this._time);
    this._time = Date.now();
    if (this._initialScrollTop !== currentScrollTop) {
      this._verticallyScrolling = true;
    }
  }
  _handleDragTargetDrag(e) {
        // Check if draggable
        if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
          return;
        }
        if (!this.isDragged) {
          this._startDrag(e);
        }

        this._dragMoveUpdate(e);

        let totalDeltaX = this._xPos - this._startingXpos;

        let dragDirection = totalDeltaX > 0 ? 'right' : 'left';

        totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
        if (this.options.edge === dragDirection) {
          totalDeltaX = 0;
        }

        let transformX = totalDeltaX;
        let transformPrefix = 'translateX(-100%)';
        if (this.options.edge === 'right') {
          transformPrefix = 'translateX(100%)';
          transformX = -transformX;
        }

        this.percentOpen = Math.min(1, totalDeltaX / this._width);

        this.el.style.transform = `${transformPrefix} translateX(${transformX}px)`;
        this._overlay.style.opacity = this.percentOpen;
      }

      _handleDragTargetRelease() {
        if (this.isDragged) {
          if (this.percentOpen > 0.2) {
            this.open();
          } else {
            this._animateOut();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }

      _handleCloseDrag(e) {
        if (this.isOpen) {
          if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
            return;
          }

          if (!this.isDragged) {
            this._startDrag(e);
          }

          this._dragMoveUpdate(e);

          let totalDeltaX = this._xPos - this._startingXpos;

          let dragDirection = totalDeltaX > 0 ? 'right' : 'left';

          totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
          if (this.options.edge !== dragDirection) {
            totalDeltaX = 0;
          }

          let transformX = -totalDeltaX;
          if (this.options.edge === 'right') {
            transformX = -transformX;
          }

          this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width);

          this.el.style.transform = `translateX(${transformX}px)`;
          this._overlay.style.opacity = this.percentOpen;
        }
      }

      _handleCloseRelease() {
        if (this.isOpen && this.isDragged) {
          if (this.percentOpen > 0.8) {
            this._animateIn();
          } else {
            this.close();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }


      _handleCloseTriggerClick(e) {
        let $closeTrigger = $(e.target).closest('.nav-close');
        if ($closeTrigger.length && !this._isCurrentlyFixed()) {
          this.close();
        }
      }

      _handleWindowResize() {
        // Only handle horizontal resizes
        if (this.lastWindowWidth !== window.innerWidth) {
          if (window.innerWidth > 992) {
            this.open();
          } else {
            this.close();
          }
        }

        this.lastWindowWidth = window.innerWidth;
        this.lastWindowHeight = window.innerHeight;
      }

      _setupClasses() {
        if (this.options.edge === 'right') {
          this.el.classList.add('right-aligned');
          this.dragTarget.classList.add('right-aligned');
        }
      }

      _removeClasses() {
        this.el.classList.remove('right-aligned');
        this.dragTarget.classList.remove('right-aligned');
      }

      _setupFixed() {
        if (this._isCurrentlyFixed()) {
          this.open();
        }
      }

      _isCurrentlyFixed() {
        return this.isFixed && window.innerWidth > 992;
      }

      _createDragTarget() {
        let dragTarget = document.createElement('div');
        dragTarget.classList.add('drag-target');
        document.querySelector('.header').appendChild(dragTarget);
        this.dragTarget = dragTarget;
      }

      _preventBodyScrolling() {
        let body = document.body;
        body.style.overflow = 'hidden';
      }

      _enableBodyScrolling() {
        let body = document.body;
        body.style.overflow = '';
      }

      open() {
        if (this.isOpen === true) {
          return;
        }

        this.isOpen = true;

        // Run onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Handle fixed Sidenav
        if (this._isCurrentlyFixed()) {
          anim.remove(this.el);
          anim({
            targets: this.el,
            translateX: 0,
            duration: 0,
            easing: 'easeOutQuad'
          });
          this._enableBodyScrolling();
          this._overlay.style.display = 'none';

          // Handle non-fixed Sidenav
        } else {
          if (this.options.preventScrolling) {
            this._preventBodyScrolling();
          }

          if (!this.isDragged || this.percentOpen != 1) {
            this._animateIn();
          }
        }
      }

      close() {
        if (this.isOpen === false) {
          return;
        }

        this.isOpen = false;

        // Run onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        // Handle fixed Sidenav
        if (this._isCurrentlyFixed()) {
          let transformX = this.options.edge === 'left' ? '-105%' : '105%';
          this.el.style.transform = `translateX(${transformX})`;

          // Handle non-fixed Sidenav
        } else {
          this._enableBodyScrolling();

          if (!this.isDragged || this.percentOpen != 0) {
            this._animateOut();
          } else {
            this._overlay.style.display = 'none';
          }
        }
      }

      _animateIn() {
        this._animateSidenavIn();
        this._animateOverlayIn();
      }

      _animateSidenavIn() {
        let slideOutPercent = this.options.edge === 'left' ? -1 : 1;
        if (this.isDragged) {
          slideOutPercent =
          this.options.edge === 'left'
          ? slideOutPercent + this.percentOpen
          : slideOutPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [`${slideOutPercent * 100}%`, 0],
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: () => {
            // Run onOpenEnd callback
            if (typeof this.options.onOpenEnd === 'function') {
              this.options.onOpenEnd.call(this, this.el);
            }
          }
        });
      }

      _animateOverlayIn() {
        let start = 0;
        if (this.isDragged) {
          start = this.percentOpen;
        } else {
          $(this._overlay).css({
            display: 'block'
          });
        }

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: [start, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });
      }

      _animateOut() {
        this._animateSidenavOut();
        this._animateOverlayOut();
      }

      _animateSidenavOut() {
        let endPercent = this.options.edge === 'left' ? -1 : 1;
        let slideOutPercent = 0;
        if (this.isDragged) {
          slideOutPercent =
          this.options.edge === 'left'
          ? endPercent + this.percentOpen
          : endPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [`${slideOutPercent * 100}%`, `${endPercent * 105}%`],
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: () => {
            // Run onOpenEnd callback
            if (typeof this.options.onCloseEnd === 'function') {
              this.options.onCloseEnd.call(this, this.el);
            }
          }
        });
      }

      _animateOverlayOut() {
        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: () => {
            $(this._overlay).css('display', 'none');
          }
        });
      }
    }
    Sidenav._sidenavs = [];
    M.Sidenav = Sidenav;
  })(cash, M.anime);
  var elems = document.querySelector('.nav');
  var instances = M.Sidenav.init(elems);
}else{
  nav.style.transform = 'translateX(0px)';
}
}
breakpoint.addListener(mql);
mql(breakpoint);