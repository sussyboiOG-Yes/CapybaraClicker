"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77782],{62545:function(e,t,n){n.d(t,{Z:function(){return eR}});var r,o,i,a,s,f=n(87462),c=n(63366),p=n(67294),l=n(30067),u=n(16600),d=n(57094);function m(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function h(e){var t=m(e).Element;return e instanceof t||e instanceof Element}function v(e){var t=m(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function y(e){if("undefined"==typeof ShadowRoot)return!1;var t=m(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var g=Math.max,b=Math.min,w=Math.round;function x(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function O(){return!/^((?!chrome|android).)*safari/i.test(x())}function E(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&v(e)&&(o=e.offsetWidth>0&&w(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&w(r.height)/e.offsetHeight||1);var a=(h(e)?m(e):window).visualViewport,s=!O()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,l=r.height/i;return{width:p,height:l,top:c,right:f+p,bottom:c+l,left:f,x:f,y:c}}function j(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function P(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){return((h(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return E(D(e)).left+j(e).scrollLeft}function k(e){return m(e).getComputedStyle(e)}function R(e){var t=k(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function M(e){var t=E(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function L(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(y(e)?e.host:null)||D(e)}function W(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(P(t))>=0?t.ownerDocument.body:v(t)&&R(t)?t:e(L(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=m(r),a=o?[i].concat(i.visualViewport||[],R(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(W(L(a)))}function B(e){return v(e)&&"fixed"!==k(e).position?e.offsetParent:null}function T(e){for(var t=m(e),n=B(e);n&&["table","td","th"].indexOf(P(n))>=0&&"static"===k(n).position;)n=B(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===k(n).position)?t:n||function(e){var t=/firefox/i.test(x());if(/Trident/i.test(x())&&v(e)&&"fixed"===k(e).position)return null;var n=L(e);for(y(n)&&(n=n.host);v(n)&&0>["html","body"].indexOf(P(n));){var r=k(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var Z="bottom",H="right",S="left",C="auto",V=["top",Z,H,S],q="start",N="viewport",U="popper",I=V.reduce(function(e,t){return e.concat([t+"-"+q,t+"-end"])},[]),_=[].concat(V,[C]).reduce(function(e,t){return e.concat([t,t+"-"+q,t+"-end"])},[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],z={placement:"bottom",modifiers:[],strategy:"absolute"};function X(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var Y={passive:!0};function $(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?$(o):null,a=o?G(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case Z:t={x:s,y:n.y+n.height};break;case H:t={x:n.x+n.width,y:f};break;case S:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?J(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case q:t[c]=t[c]-(n[p]/2-r[p]/2);break;case"end":t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n,r,o,i,a,s=e.popper,f=e.popperRect,c=e.placement,p=e.variation,l=e.offsets,u=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,y=e.isFixed,g=l.x,b=void 0===g?0:g,x=l.y,O=void 0===x?0:x,E="function"==typeof v?v({x:b,y:O}):{x:b,y:O};b=E.x,O=E.y;var j=l.hasOwnProperty("x"),P=l.hasOwnProperty("y"),A=S,R="top",M=window;if(h){var L=T(s),W="clientHeight",B="clientWidth";L===m(s)&&"static"!==k(L=D(s)).position&&"absolute"===u&&(W="scrollHeight",B="scrollWidth"),("top"===c||(c===S||c===H)&&"end"===p)&&(R=Z,O-=(y&&L===M&&M.visualViewport?M.visualViewport.height:L[W])-f.height,O*=d?1:-1),(c===S||("top"===c||c===Z)&&"end"===p)&&(A=H,b-=(y&&L===M&&M.visualViewport?M.visualViewport.width:L[B])-f.width,b*=d?1:-1)}var C=Object.assign({position:u},h&&Q),V=!0===v?(n=(t={x:b,y:O}).x,r=t.y,{x:w(n*(o=window.devicePixelRatio||1))/o||0,y:w(r*o)/o||0}):{x:b,y:O};return(b=V.x,O=V.y,d)?Object.assign({},C,((a={})[R]=P?"0":"",a[A]=j?"0":"",a.transform=1>=(M.devicePixelRatio||1)?"translate("+b+"px, "+O+"px)":"translate3d("+b+"px, "+O+"px, 0)",a)):Object.assign({},C,((i={})[R]=P?O+"px":"",i[A]=j?b+"px":"",i.transform="",i))}var et={left:"right",right:"left",bottom:"top",top:"bottom"};function en(e){return e.replace(/left|right|bottom|top/g,function(e){return et[e]})}var er={start:"end",end:"start"};function eo(e){return e.replace(/start|end/g,function(e){return er[e]})}function ei(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&y(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ea(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function es(e,t,n){var r,o,i,a,s,f,c,p,l,u;return t===N?ea(function(e,t){var n=m(e),r=D(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=O();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+A(e),y:f}}(e,n)):h(t)?((r=E(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):ea((o=D(e),a=D(o),s=j(o),f=null==(i=o.ownerDocument)?void 0:i.body,c=g(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),p=g(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),l=-s.scrollLeft+A(o),u=-s.scrollTop,"rtl"===k(f||a).direction&&(l+=g(a.clientWidth,f?f.clientWidth:0)-c),{width:c,height:p,x:l,y:u}))}function ef(){return{top:0,right:0,bottom:0,left:0}}function ec(e){return Object.assign({},ef(),e)}function ep(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function el(e,t){void 0===t&&(t={});var n,r,o,i,a,s,f,c=t,p=c.placement,l=void 0===p?e.placement:p,u=c.strategy,d=void 0===u?e.strategy:u,m=c.boundary,y=c.rootBoundary,w=c.elementContext,x=void 0===w?U:w,O=c.altBoundary,j=c.padding,A=void 0===j?0:j,R=ec("number"!=typeof A?A:ep(A,V)),M=e.rects.popper,B=e.elements[void 0!==O&&O?x===U?"reference":U:x],S=(n=h(B)?B:B.contextElement||D(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(o=W(L(n)),h(i=["absolute","fixed"].indexOf(k(n).position)>=0&&v(n)?T(n):n)?o.filter(function(e){return h(e)&&ei(e,i)&&"body"!==P(e)}):[]):[].concat(r),[void 0===y?N:y]))[0],(f=a.reduce(function(e,t){var r=es(n,t,d);return e.top=g(r.top,e.top),e.right=b(r.right,e.right),e.bottom=b(r.bottom,e.bottom),e.left=g(r.left,e.left),e},es(n,s,d))).width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f),C=E(e.elements.reference),q=K({reference:C,element:M,strategy:"absolute",placement:l}),I=ea(Object.assign({},M,q)),_=x===U?I:C,F={top:S.top-_.top+R.top,bottom:_.bottom-S.bottom+R.bottom,left:S.left-_.left+R.left,right:_.right-S.right+R.right},z=e.modifiersData.offset;if(x===U&&z){var X=z[l];Object.keys(F).forEach(function(e){var t=[H,Z].indexOf(e)>=0?1:-1,n=["top",Z].indexOf(e)>=0?"y":"x";F[e]+=X[n]*t})}return F}function eu(e,t,n){return g(e,b(t,n))}function ed(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function em(e){return["top",H,Z,S].some(function(t){return e[t]>=0})}var eh=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=m(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,Y)}),s&&f.addEventListener("resize",n.update,Y),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,Y)}),s&&f.removeEventListener("resize",n.update,Y)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:$(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];v(o)&&P(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});v(r)&&P(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=_.reduce(function(e,n){var r,o,a,s,f,c;return e[n]=(r=t.rects,a=[S,"top"].indexOf(o=$(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[S,H].indexOf(o)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=$(v),g=[v].concat(f||(y!==v&&m?function(e){if($(e)===C)return[];var t=en(e);return[eo(e),t,eo(t)]}(v):[en(v)])).reduce(function(e,n){var r,o,i,a,s,f,u,d,v,y,g,b;return e.concat($(n)===C?(o=(r={placement:n,boundary:p,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,d=void 0===(u=r.allowedAutoPlacements)?_:u,0===(g=(y=(v=G(o))?f?I:I.filter(function(e){return G(e)===v}):V).filter(function(e){return d.indexOf(e)>=0})).length&&(g=y),Object.keys(b=g.reduce(function(e,n){return e[n]=el(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[$(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),b=t.rects.reference,w=t.rects.popper,x=new Map,O=!0,E=g[0],j=0;j<g.length;j++){var P=g[j],D=$(P),A=G(P)===q,k=["top",Z].indexOf(D)>=0,R=k?"width":"height",M=el(t,{placement:P,boundary:p,rootBoundary:l,altBoundary:u,padding:c}),L=k?A?H:S:A?Z:"top";b[R]>w[R]&&(L=en(L));var W=en(L),B=[];if(i&&B.push(M[D]<=0),s&&B.push(M[L]<=0,M[W]<=0),B.every(function(e){return e})){E=P,O=!1;break}x.set(P,B)}if(O)for(var T=m?3:1,N=function(e){var t=g.find(function(t){var n=x.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},U=T;U>0&&"break"!==N(U);U--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,c=n.padding,p=n.tether,l=void 0===p||p,u=n.tetherOffset,d=void 0===u?0:u,m=el(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:f}),h=$(t.placement),v=G(t.placement),y=!v,w=J(h),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,E=t.rects.reference,j=t.rects.popper,P="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,D="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(O){if(void 0===o||o){var R,L="y"===w?"top":S,W="y"===w?Z:H,B="y"===w?"height":"width",C=O[w],V=C+m[L],N=C-m[W],U=l?-j[B]/2:0,I=v===q?E[B]:j[B],_=v===q?-j[B]:-E[B],F=t.elements.arrow,z=l&&F?M(F):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ef(),Y=X[L],K=X[W],Q=eu(0,E[B],z[B]),ee=y?E[B]/2-U-Q-Y-D.mainAxis:I-Q-Y-D.mainAxis,et=y?-E[B]/2+U+Q+K+D.mainAxis:_+Q+K+D.mainAxis,en=t.elements.arrow&&T(t.elements.arrow),er=en?"y"===w?en.clientTop||0:en.clientLeft||0:0,eo=null!=(R=null==A?void 0:A[w])?R:0,ei=eu(l?b(V,C+ee-eo-er):V,C,l?g(N,C+et-eo):N);O[w]=ei,k[w]=ei-C}if(void 0!==i&&i){var ea,es,ec=O[x],ep="y"===x?"height":"width",ed=ec+m["x"===w?"top":S],em=ec-m["x"===w?Z:H],eh=-1!==["top",S].indexOf(h),ev=null!=(ea=null==A?void 0:A[x])?ea:0,ey=eh?ed:ec-E[ep]-j[ep]-ev+D.altAxis,eg=eh?ec+E[ep]+j[ep]-ev-D.altAxis:em,eb=l&&eh?(es=eu(ey,ec,eg))>eg?eg:es:eu(l?ey:ed,ec,l?eg:em);O[x]=eb,k[x]=eb-ec}t.modifiersData[r]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=$(r.placement),c=J(f),p=[S,H].indexOf(f)>=0?"height":"width";if(a&&s){var l=ec("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:ep(t,V)),u=M(a),d=r.rects.reference[p]+r.rects.reference[c]-s[c]-r.rects.popper[p],m=s[c]-r.rects.reference[c],h=T(a),v=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,y=l["y"===c?"top":S],g=v-u[p]-l["y"===c?Z:H],b=v/2-u[p]/2+(d/2-m/2),w=eu(y,b,g);r.modifiersData[o]=((n={})[c]=w,n.centerOffset=w-b,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ei(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=el(t,{elementContext:"reference"}),s=el(t,{altBoundary:!0}),f=ed(a,r),c=ed(s,o,i),p=em(f),l=em(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?z:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,c={state:o,setOptions:function(n){var r,f,l,u,d,m="function"==typeof n?n(o.options):n;p(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:h(e)?W(e):e.contextElement?W(e.contextElement):[],popper:W(t)};var v=(f=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),l=new Map,u=new Set,d=[],f.forEach(function(e){l.set(e.name,e)}),f.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var n=l.get(t);n&&e(n)}}),d.push(t)}(e)}),F.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=v.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:c,options:void 0===n?{}:n});a.push(i||function(){})}}),c.update()},forceUpdate:function(){if(!f){var e,t,n,r,i,a,s,p,l,u,d,h,y=o.elements,g=y.reference,b=y.popper;if(X(g,b)){o.rects={reference:(t=T(b),n="fixed"===o.options.strategy,r=v(t),p=v(t)&&(a=w((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=w(i.height)/t.offsetHeight||1,1!==a||1!==s),l=D(t),u=E(g,p,n),d={scrollLeft:0,scrollTop:0},h={x:0,y:0},(r||!r&&!n)&&(("body"!==P(t)||R(l))&&(d=(e=t)!==m(e)&&v(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:j(e)),v(t)?(h=E(t,!0),h.x+=t.clientLeft,h.y+=t.clientTop):l&&(h.x=A(l))),{x:u.left+d.scrollLeft-h.x,y:u.top+d.scrollTop-h.y,width:u.width,height:u.height}),popper:M(b)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var x=0;x<o.orderedModifiers.length;x++){if(!0===o.reset){o.reset=!1,x=-1;continue}var O=o.orderedModifiers[x],k=O.fn,L=O.options,W=void 0===L?{}:L,B=O.name;"function"==typeof k&&(o=k({state:o,options:W,name:B,instance:c})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){c.forceUpdate(),e(o)}))})})),r},destroy:function(){p(),f=!0}};if(!X(e,t))return c;function p(){a.forEach(function(e){return e()}),a=[]}return c.setOptions(n).then(function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}),ev=n(94780),ey=n(78385),eg=n(34867);function eb(e){return(0,eg.Z)("MuiPopperUnstyled",e)}(0,n(1588).Z)("MuiPopperUnstyled",["root"]);var ew=n(24349),ex=n(85893);let eO=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],eE=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function ej(e){return"function"==typeof e?e():e}let eP=()=>(0,ev.Z)({root:["root"]},eb,{}),eD={},eA=p.forwardRef(function(e,t){var n;let{anchorEl:r,children:o,component:i,direction:a,disablePortal:s,modifiers:d,open:m,ownerState:h,placement:v,popperOptions:y,popperRef:g,slotProps:b={},slots:w={},TransitionProps:x}=e,O=(0,c.Z)(e,eO),E=p.useRef(null),j=(0,l.Z)(E,t),P=p.useRef(null),D=(0,l.Z)(P,g),A=p.useRef(D);(0,u.Z)(()=>{A.current=D},[D]),p.useImperativeHandle(g,()=>P.current,[]);let k=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,a),[R,M]=p.useState(k);p.useEffect(()=>{P.current&&P.current.forceUpdate()}),(0,u.Z)(()=>{if(!r||!m)return;let e=e=>{M(e.placement)};ej(r);let t=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:t})=>{e(t)}}];null!=d&&(t=t.concat(d)),y&&null!=y.modifiers&&(t=t.concat(y.modifiers));let n=eh(ej(r),E.current,(0,f.Z)({placement:k},y,{modifiers:t}));return A.current(n),()=>{n.destroy(),A.current(null)}},[r,s,d,m,y,k]);let L={placement:R};null!==x&&(L.TransitionProps=x);let W=eP(),B=null!=(n=null!=i?i:w.root)?n:"div",T=(0,ew.Z)({elementType:B,externalSlotProps:b.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:j},ownerState:(0,f.Z)({},e,h),className:W.root});return(0,ex.jsx)(B,(0,f.Z)({},T,{children:"function"==typeof o?o(L):o}))}),ek=p.forwardRef(function(e,t){let{anchorEl:n,children:r,container:o,direction:i="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:l,open:u,placement:m="bottom",popperOptions:h=eD,popperRef:v,style:y,transition:g=!1}=e,b=(0,c.Z)(e,eE),[w,x]=p.useState(!0),O=()=>{x(!1)},E=()=>{x(!0)};if(!s&&!u&&(!g||w))return null;let j=o||(n?(0,d.Z)(ej(n)).body:void 0);return(0,ex.jsx)(ey.Z,{disablePortal:a,container:j,children:(0,ex.jsx)(eA,(0,f.Z)({anchorEl:n,direction:i,disablePortal:a,modifiers:l,ref:t,open:g?!w:u,placement:m,popperOptions:h,popperRef:v},b,{style:(0,f.Z)({position:"fixed",top:0,left:0,display:!u&&s&&(!g||w)?"none":null},y),TransitionProps:g?{in:u,onEnter:O,onExited:E}:null,children:r}))})});var eR=ek},57579:function(e,t,n){n.d(t,{Z:function(){return s}});var r,o=n(67294);let i=0,a=(r||(r=n.t(o,2))).useId;function s(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,n]=o.useState(e);return o.useEffect(()=>{null==t&&n(`mui-${i+=1}`)},[t]),e||t}(e)}}}]);