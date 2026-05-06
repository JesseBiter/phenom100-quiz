(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},oi={},Qa={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),ac=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),hc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),_s=Symbol.iterator;function yc(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var $a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ya=Object.assign,Xa={};function fn(e,t,n){this.props=e,this.context=t,this.refs=Xa,this.updater=n||$a}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Za(){}Za.prototype=fn.prototype;function jo(e,t,n){this.props=e,this.context=t,this.refs=Xa,this.updater=n||$a}var Ho=jo.prototype=new Za;Ho.constructor=jo;Ya(Ho,fn.prototype);Ho.isPureReactComponent=!0;var zs=Array.isArray,Ja=Object.prototype.hasOwnProperty,Vo={current:null},el={key:!0,ref:!0,__self:!0,__source:!0};function tl(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ja.call(t,r)&&!el.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:er,type:e,key:o,ref:s,props:i,_owner:Vo.current}}function vc(e,t){return{$$typeof:er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Go(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Us=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):t.toString(36)}function Cr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case er:case ac:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ei(s,0):r,zs(i)?(n="",e!=null&&(n=e.replace(Us,"$&/")+"/"),Cr(i,t,n,"",function(c){return c})):i!=null&&(Go(i)&&(i=vc(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Us,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",zs(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ei(o,a);s+=Cr(o,t,n,l,i)}else if(l=yc(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ei(o,a++),s+=Cr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function sr(e,t,n){if(e==null)return e;var r=[],i=0;return Cr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},xr={transition:null},kc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Vo};function nl(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=fn;O.Fragment=lc;O.Profiler=cc;O.PureComponent=jo;O.StrictMode=uc;O.Suspense=pc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;O.act=nl;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ya({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Vo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ja.call(t,l)&&!el.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:er,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};O.createElement=tl;O.createFactory=function(e){var t=tl.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:hc,render:e}};O.isValidElement=Go;O.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:Sc}};O.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};O.unstable_act=nl;O.useCallback=function(e,t){return ce.current.useCallback(e,t)};O.useContext=function(e){return ce.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};O.useEffect=function(e,t){return ce.current.useEffect(e,t)};O.useId=function(){return ce.current.useId()};O.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ce.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};O.useRef=function(e){return ce.current.useRef(e)};O.useState=function(e){return ce.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ce.current.useTransition()};O.version="18.3.1";Qa.exports=O;var Q=Qa.exports;const Ec=sc(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Q,xc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Ac=Object.prototype.hasOwnProperty,Nc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function rl(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ac.call(t,r)&&!Pc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xc,type:e,key:o,ref:s,props:i,_owner:Nc.current}}oi.Fragment=Tc;oi.jsx=rl;oi.jsxs=rl;Ka.exports=oi;var m=Ka.exports,$i={},il={exports:{}},Ee={},ol={exports:{}},sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,L){var I=x.length;x.push(L);e:for(;0<I;){var b=I-1>>>1,E=x[b];if(0<i(E,L))x[b]=L,x[I]=E,I=b;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var L=x[0],I=x.pop();if(I!==L){x[0]=I;e:for(var b=0,E=x.length,B=E>>>1;b<B;){var ae=2*(b+1)-1,tt=x[ae],ze=ae+1,nt=x[ze];if(0>i(tt,I))ze<E&&0>i(nt,tt)?(x[b]=nt,x[ze]=I,b=ze):(x[b]=tt,x[ae]=I,b=ae);else if(ze<E&&0>i(nt,I))x[b]=nt,x[ze]=I,b=ze;else break e}}return L}function i(x,L){var I=x.sortIndex-L.sortIndex;return I!==0?I:x.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],g=1,p=null,h=3,w=!1,S=!1,k=!1,W=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=x)r(c),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(c)}}function y(x){if(k=!1,f(x),!S)if(n(l)!==null)S=!0,zt(C);else{var L=n(c);L!==null&&mn(y,L.startTime-x)}}function C(x,L){S=!1,k&&(k=!1,d(P),P=-1),w=!0;var I=h;try{for(f(L),p=n(l);p!==null&&(!(p.expirationTime>L)||x&&!ye());){var b=p.callback;if(typeof b=="function"){p.callback=null,h=p.priorityLevel;var E=b(p.expirationTime<=L);L=e.unstable_now(),typeof E=="function"?p.callback=E:p===n(l)&&r(l),f(L)}else r(l);p=n(l)}if(p!==null)var B=!0;else{var ae=n(c);ae!==null&&mn(y,ae.startTime-L),B=!1}return B}finally{p=null,h=I,w=!1}}var A=!1,N=null,P=-1,R=5,F=-1;function ye(){return!(e.unstable_now()-F<R)}function Ct(){if(N!==null){var x=e.unstable_now();F=x;var L=!0;try{L=N(!0,x)}finally{L?et():(A=!1,N=null)}}else A=!1}var et;if(typeof u=="function")et=function(){u(Ct)};else if(typeof MessageChannel<"u"){var or=new MessageChannel,ki=or.port2;or.port1.onmessage=Ct,et=function(){ki.postMessage(null)}}else et=function(){W(Ct,0)};function zt(x){N=x,A||(A=!0,et())}function mn(x,L){P=W(function(){x(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,zt(C))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var I=h;h=L;try{return x()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var I=h;h=x;try{return L()}finally{h=I}},e.unstable_scheduleCallback=function(x,L,I){var b=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?b+I:b):I=b,x){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=I+E,x={id:g++,callback:L,priorityLevel:x,startTime:I,expirationTime:E,sortIndex:-1},I>b?(x.sortIndex=I,t(c,x),n(l)===null&&x===n(c)&&(k?(d(P),P=-1):k=!0,mn(y,I-b))):(x.sortIndex=E,t(l,x),S||w||(S=!0,zt(C))),x},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(x){var L=h;return function(){var I=h;h=L;try{return x.apply(this,arguments)}finally{h=I}}}})(sl);ol.exports=sl;var Fc=ol.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=Q,ke=Fc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var al=new Set,_n={};function Wt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(_n[e]=t,e=0;e<t.length;e++)al.add(t[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qs={},bs={};function Oc(e){return Yi.call(bs,e)?!0:Yi.call(qs,e)?!1:Ic.test(e)?bs[e]=!0:(qs[e]=!0,!1)}function Dc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rc(e,t,n,r){if(t===null||typeof t>"u"||Dc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ko,Qo);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ko,Qo);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ko,Qo);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function $o(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rc(t,n,i,r)&&(n=null),r||i===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),qt=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),ll=Symbol.for("react.provider"),ul=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),Ji=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),cl=Symbol.for("react.offscreen"),Bs=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ci;function xn(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var xi=!1;function Ti(e,t){if(!e||xi)return"";xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Mc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function eo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case qt:return"Portal";case Xi:return"Profiler";case Yo:return"StrictMode";case Zi:return"Suspense";case Ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ul:return(e.displayName||"Context")+".Consumer";case ll:return(e._context.displayName||"Context")+".Provider";case Xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:eo(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return eo(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eo(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _c(e){var t=dl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=_c(e))}function fl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function to(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function js(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hl(e,t){t=t.checked,t!=null&&$o(e,"checked",t,!1)}function no(e,t){hl(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&ro(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ro(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(Tn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function pl(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ml(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,gl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){zc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pn[t]=Pn[e]})});function yl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+t).trim():t+"px"}function vl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,Jt=null,en=null;function Ks(e){if(e=rr(e)){if(typeof uo!="function")throw Error(v(280));var t=e.stateNode;t&&(t=ci(t),uo(e.stateNode,e.type,t))}}function wl(e){Jt?en?en.push(e):en=[e]:Jt=e}function Sl(){if(Jt){var e=Jt,t=en;if(en=Jt=null,Ks(e),t)for(e=0;e<t.length;e++)Ks(t[e])}}function kl(e,t){return e(t)}function El(){}var Ai=!1;function Cl(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return kl(e,t,n)}finally{Ai=!1,(Jt!==null||en!==null)&&(El(),Sl())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var co=!1;if($e)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){co=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{co=!1}function qc(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Fn=!1,Wr=null,_r=!1,fo=null,bc={onError:function(e){Fn=!0,Wr=e}};function Bc(e,t,n,r,i,o,s,a,l){Fn=!1,Wr=null,qc.apply(bc,arguments)}function jc(e,t,n,r,i,o,s,a,l){if(Bc.apply(this,arguments),Fn){if(Fn){var c=Wr;Fn=!1,Wr=null}else throw Error(v(198));_r||(_r=!0,fo=c)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qs(e){if(_t(e)!==e)throw Error(v(188))}function Hc(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qs(i),e;if(o===r)return Qs(i),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Tl(e){return e=Hc(e),e!==null?Al(e):null}function Al(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Al(e);if(t!==null)return t;e=e.sibling}return null}var Nl=ke.unstable_scheduleCallback,$s=ke.unstable_cancelCallback,Vc=ke.unstable_shouldYield,Gc=ke.unstable_requestPaint,K=ke.unstable_now,Kc=ke.unstable_getCurrentPriorityLevel,es=ke.unstable_ImmediatePriority,Pl=ke.unstable_UserBlockingPriority,zr=ke.unstable_NormalPriority,Qc=ke.unstable_LowPriority,Fl=ke.unstable_IdlePriority,si=null,Be=null;function $c(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Zc,Yc=Math.log,Xc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Yc(e)/Xc|0)|0}var cr=64,dr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=An(a):(o&=s,o!==0&&(r=An(o)))}else s=n&~i,s!==0?r=An(s):o!==0&&(r=An(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),i=1<<n,r|=e[n],t&=~i;return r}function Jc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Me(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Jc(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ll(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function Ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Me(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Il(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ol,ns,Dl,Rl,Ml,po=!1,fr=[],ct=null,dt=null,ft=null,qn=new Map,bn=new Map,st=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ys(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function vn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=rr(t),t!==null&&ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rd(e,t,n,r,i){switch(t){case"focusin":return ct=vn(ct,e,t,n,r,i),!0;case"dragenter":return dt=vn(dt,e,t,n,r,i),!0;case"mouseover":return ft=vn(ft,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qn.set(o,vn(qn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bn.set(o,vn(bn.get(o)||null,e,t,n,r,i)),!0}return!1}function Wl(e){var t=At(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=xl(n),t!==null){e.blockedOn=t,Ml(e.priority,function(){Dl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lo=r,n.target.dispatchEvent(r),lo=null}else return t=rr(n),t!==null&&ns(t),e.blockedOn=n,!1;t.shift()}return!0}function Xs(e,t,n){Tr(e)&&n.delete(t)}function id(){po=!1,ct!==null&&Tr(ct)&&(ct=null),dt!==null&&Tr(dt)&&(dt=null),ft!==null&&Tr(ft)&&(ft=null),qn.forEach(Xs),bn.forEach(Xs)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,po||(po=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,id)))}function Bn(e){function t(i){return wn(i,e)}if(0<fr.length){wn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&wn(ct,e),dt!==null&&wn(dt,e),ft!==null&&wn(ft,e),qn.forEach(t),bn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)Wl(n),n.blockedOn===null&&st.shift()}var tn=Je.ReactCurrentBatchConfig,qr=!0;function od(e,t,n,r){var i=M,o=tn.transition;tn.transition=null;try{M=1,rs(e,t,n,r)}finally{M=i,tn.transition=o}}function sd(e,t,n,r){var i=M,o=tn.transition;tn.transition=null;try{M=4,rs(e,t,n,r)}finally{M=i,tn.transition=o}}function rs(e,t,n,r){if(qr){var i=mo(e,t,n,r);if(i===null)_i(e,t,r,br,n),Ys(e,r);else if(rd(i,e,t,n,r))r.stopPropagation();else if(Ys(e,r),t&4&&-1<nd.indexOf(e)){for(;i!==null;){var o=rr(i);if(o!==null&&Ol(o),o=mo(e,t,n,r),o===null&&_i(e,t,r,br,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var br=null;function mo(e,t,n,r){if(br=null,e=Jo(r),e=At(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return br=e,null}function _l(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case es:return 1;case Pl:return 4;case zr:case Qc:return 16;case Fl:return 536870912;default:return 16}default:return 16}}var lt=null,is=null,Ar=null;function zl(){if(Ar)return Ar;var e,t=is,n=t.length,r,i="value"in lt?lt.value:lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ar=i.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function Zs(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hr:Zs,this.isPropagationStopped=Zs,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Ce(hn),nr=V({},hn,{view:0,detail:0}),ad=Ce(nr),Pi,Fi,Sn,ai=V({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Pi=e.screenX-Sn.screenX,Fi=e.screenY-Sn.screenY):Fi=Pi=0,Sn=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:Fi}}),Js=Ce(ai),ld=V({},ai,{dataTransfer:0}),ud=Ce(ld),cd=V({},nr,{relatedTarget:0}),Li=Ce(cd),dd=V({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Ce(dd),hd=V({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=Ce(hd),md=V({},hn,{data:0}),ea=Ce(md),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vd[e])?!!t[e]:!1}function ss(){return wd}var Sd=V({},nr,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=Ce(Sd),Ed=V({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Ce(Ed),Cd=V({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),xd=Ce(Cd),Td=V({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ad=Ce(Td),Nd=V({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=Ce(Nd),Fd=[9,13,27,32],as=$e&&"CompositionEvent"in window,Ln=null;$e&&"documentMode"in document&&(Ln=document.documentMode);var Ld=$e&&"TextEvent"in window&&!Ln,Ul=$e&&(!as||Ln&&8<Ln&&11>=Ln),na=" ",ra=!1;function ql(e,t){switch(e){case"keyup":return Fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function Id(e,t){switch(e){case"compositionend":return bl(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function Od(e,t){if(Bt)return e==="compositionend"||!as&&ql(e,t)?(e=zl(),Ar=is=lt=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ul&&t.locale!=="ko"?null:t.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dd[e.type]:t==="textarea"}function Bl(e,t,n,r){wl(r),t=Br(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,jn=null;function Rd(e){Jl(e,0)}function li(e){var t=Vt(e);if(fl(t))return e}function Md(e,t){if(e==="change")return t}var jl=!1;if($e){var Ii;if($e){var Oi="oninput"in document;if(!Oi){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Oi=typeof oa.oninput=="function"}Ii=Oi}else Ii=!1;jl=Ii&&(!document.documentMode||9<document.documentMode)}function sa(){In&&(In.detachEvent("onpropertychange",Hl),jn=In=null)}function Hl(e){if(e.propertyName==="value"&&li(jn)){var t=[];Bl(t,jn,e,Jo(e)),Cl(Rd,t)}}function Wd(e,t,n){e==="focusin"?(sa(),In=t,jn=n,In.attachEvent("onpropertychange",Hl)):e==="focusout"&&sa()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(jn)}function zd(e,t){if(e==="click")return li(t)}function Ud(e,t){if(e==="input"||e==="change")return li(t)}function qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:qd;function Hn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yi.call(t,i)||!_e(e[i],t[i]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function la(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function Vl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gl(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bd(e){var t=Gl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vl(n.ownerDocument.documentElement,n)){if(r!==null&&ls(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=la(n,o);var s=la(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=$e&&"documentMode"in document&&11>=document.documentMode,jt=null,go=null,On=null,yo=!1;function ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||jt==null||jt!==Mr(r)||(r=jt,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Hn(On,r)||(On=r,r=Br(go,"onSelect"),0<r.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jt)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Di={},Kl={};$e&&(Kl=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function ui(e){if(Di[e])return Di[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kl)return Di[e]=t[n];return e}var Ql=ui("animationend"),$l=ui("animationiteration"),Yl=ui("animationstart"),Xl=ui("transitionend"),Zl=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Zl.set(e,t),Wt(t,[e])}for(var Ri=0;Ri<ca.length;Ri++){var Mi=ca[Ri],jd=Mi.toLowerCase(),Hd=Mi[0].toUpperCase()+Mi.slice(1);St(jd,"on"+Hd)}St(Ql,"onAnimationEnd");St($l,"onAnimationIteration");St(Yl,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Xl,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jc(r,t,void 0,e),e.currentTarget=null}function Jl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;da(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;da(i,a,c),o=l}}}if(_r)throw e=fo,_r=!1,fo=null,e}function z(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function Wi(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,al.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Wi(n,!1,e),Wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Wi("selectionchange",!1,t))}}function eu(e,t,n,r){switch(_l(t)){case 1:var i=od;break;case 4:i=sd;break;default:i=rs}n=i.bind(null,t,n,e),i=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _i(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=At(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Cl(function(){var c=o,g=Jo(n),p=[];e:{var h=Zl.get(e);if(h!==void 0){var w=os,S=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":w=kd;break;case"focusin":S="focus",w=Li;break;case"focusout":S="blur",w=Li;break;case"beforeblur":case"afterblur":w=Li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=xd;break;case Ql:case $l:case Yl:w=fd;break;case Xl:w=Ad;break;case"scroll":w=ad;break;case"wheel":w=Pd;break;case"copy":case"cut":case"paste":w=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ta}var k=(t&4)!==0,W=!k&&e==="scroll",d=k?h!==null?h+"Capture":null:h;k=[];for(var u=c,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Un(u,d),y!=null&&k.push(Gn(u,y,f)))),W)break;u=u.return}0<k.length&&(h=new w(h,S,null,n,g),p.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==lo&&(S=n.relatedTarget||n.fromElement)&&(At(S)||S[Ye]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?At(S):null,S!==null&&(W=_t(S),S!==W||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(k=Js,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=ta,y="onPointerLeave",d="onPointerEnter",u="pointer"),W=w==null?h:Vt(w),f=S==null?h:Vt(S),h=new k(y,u+"leave",w,n,g),h.target=W,h.relatedTarget=f,y=null,At(g)===c&&(k=new k(d,u+"enter",S,n,g),k.target=f,k.relatedTarget=W,y=k),W=y,w&&S)t:{for(k=w,d=S,u=0,f=k;f;f=Ut(f))u++;for(f=0,y=d;y;y=Ut(y))f++;for(;0<u-f;)k=Ut(k),u--;for(;0<f-u;)d=Ut(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Ut(k),d=Ut(d)}k=null}else k=null;w!==null&&fa(p,h,w,k,!1),S!==null&&W!==null&&fa(p,W,S,k,!0)}}e:{if(h=c?Vt(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=Md;else if(ia(h))if(jl)C=Ud;else{C=_d;var A=Wd}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=zd);if(C&&(C=C(e,c))){Bl(p,C,n,g);break e}A&&A(e,h,c),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ro(h,"number",h.value)}switch(A=c?Vt(c):window,e){case"focusin":(ia(A)||A.contentEditable==="true")&&(jt=A,go=c,On=null);break;case"focusout":On=go=jt=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,ua(p,n,g);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":ua(p,n,g)}var N;if(as)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Bt?ql(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ul&&n.locale!=="ko"&&(Bt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Bt&&(N=zl()):(lt=g,is="value"in lt?lt.value:lt.textContent,Bt=!0)),A=Br(c,P),0<A.length&&(P=new ea(P,e,null,n,g),p.push({event:P,listeners:A}),N?P.data=N:(N=bl(n),N!==null&&(P.data=N)))),(N=Ld?Id(e,n):Od(e,n))&&(c=Br(c,"onBeforeInput"),0<c.length&&(g=new ea("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:c}),g.data=N))}Jl(p,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Un(e,n),o!=null&&r.unshift(Gn(e,o,i)),o=Un(e,t),o!=null&&r.push(Gn(e,o,i))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Un(n,o),l!=null&&s.unshift(Gn(n,l,a))):i||(l=Un(n,o),l!=null&&s.push(Gn(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function ha(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Kd,"")}function gr(e,t,n){if(t=ha(t),ha(e)!==t&&n)throw Error(v(425))}function jr(){}var vo=null,wo=null;function So(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(Yd)}:ko;function Yd(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),be="__reactFiber$"+pn,Kn="__reactProps$"+pn,Ye="__reactContainer$"+pn,Eo="__reactEvents$"+pn,Xd="__reactListeners$"+pn,Zd="__reactHandles$"+pn;function At(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ma(e);e!==null;){if(n=e[be])return n;e=ma(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[be]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ci(e){return e[Kn]||null}var Co=[],Gt=-1;function kt(e){return{current:e}}function U(e){0>Gt||(e.current=Co[Gt],Co[Gt]=null,Gt--)}function _(e,t){Gt++,Co[Gt]=e.current,e.current=t}var wt={},se=kt(wt),pe=kt(!1),It=wt;function sn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Hr(){U(pe),U(se)}function ga(e,t,n){if(se.current!==wt)throw Error(v(168));_(se,t),_(pe,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(v(108,Wc(e)||"Unknown",i));return V({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,It=se.current,_(se,e),_(pe,pe.current),!0}function ya(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=tu(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,U(pe),U(se),_(se,e)):U(pe),_(pe,n)}var Ve=null,di=!1,Ui=!1;function nu(e){Ve===null?Ve=[e]:Ve.push(e)}function Jd(e){di=!0,nu(e)}function Et(){if(!Ui&&Ve!==null){Ui=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,di=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),Nl(es,Et),i}finally{M=t,Ui=!1}}return null}var Kt=[],Qt=0,Gr=null,Kr=0,Te=[],Ae=0,Ot=null,Ge=1,Ke="";function xt(e,t){Kt[Qt++]=Kr,Kt[Qt++]=Gr,Gr=e,Kr=t}function ru(e,t,n){Te[Ae++]=Ge,Te[Ae++]=Ke,Te[Ae++]=Ot,Ot=e;var r=Ge;e=Ke;var i=32-Me(r)-1;r&=~(1<<i),n+=1;var o=32-Me(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ge=1<<32-Me(t)+i|n<<i|r,Ke=o+e}else Ge=1<<o|n<<i|r,Ke=e}function us(e){e.return!==null&&(xt(e,1),ru(e,1,0))}function cs(e){for(;e===Gr;)Gr=Kt[--Qt],Kt[Qt]=null,Kr=Kt[--Qt],Kt[Qt]=null;for(;e===Ot;)Ot=Te[--Ae],Te[Ae]=null,Ke=Te[--Ae],Te[Ae]=null,Ge=Te[--Ae],Te[Ae]=null}var Se=null,we=null,q=!1,Re=null;function iu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,we=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ge,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,we=null,!0):!1;default:return!1}}function xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if(q){var t=we;if(t){var n=t;if(!va(e,t)){if(xo(e))throw Error(v(418));t=ht(n.nextSibling);var r=Se;t&&va(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,q=!1,Se=e)}}else{if(xo(e))throw Error(v(418));e.flags=e.flags&-4097|2,q=!1,Se=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function yr(e){if(e!==Se)return!1;if(!q)return wa(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!So(e.type,e.memoizedProps)),t&&(t=we)){if(xo(e))throw ou(),Error(v(418));for(;t;)iu(e,t),t=ht(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Se?ht(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=we;e;)e=ht(e.nextSibling)}function an(){we=Se=null,q=!1}function ds(e){Re===null?Re=[e]:Re.push(e)}var ef=Je.ReactCurrentBatchConfig;function kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function su(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=yt(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,y){return u===null||u.tag!==6?(u=Gi(f,d.mode,y),u.return=d,u):(u=i(u,f),u.return=d,u)}function l(d,u,f,y){var C=f.type;return C===bt?g(d,u,f.props.children,y,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Sa(C)===u.type)?(y=i(u,f.props),y.ref=kn(d,u,f),y.return=d,y):(y=Rr(f.type,f.key,f.props,null,d.mode,y),y.ref=kn(d,u,f),y.return=d,y)}function c(d,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ki(f,d.mode,y),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function g(d,u,f,y,C){return u===null||u.tag!==7?(u=Lt(f,d.mode,y,C),u.return=d,u):(u=i(u,f),u.return=d,u)}function p(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Gi(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ar:return f=Rr(u.type,u.key,u.props,null,d.mode,f),f.ref=kn(d,null,u),f.return=d,f;case qt:return u=Ki(u,d.mode,f),u.return=d,u;case it:var y=u._init;return p(d,y(u._payload),f)}if(Tn(u)||gn(u))return u=Lt(u,d.mode,f,null),u.return=d,u;vr(d,u)}return null}function h(d,u,f,y){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:return f.key===C?l(d,u,f,y):null;case qt:return f.key===C?c(d,u,f,y):null;case it:return C=f._init,h(d,u,C(f._payload),y)}if(Tn(f)||gn(f))return C!==null?null:g(d,u,f,y,null);vr(d,f)}return null}function w(d,u,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,a(u,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ar:return d=d.get(y.key===null?f:y.key)||null,l(u,d,y,C);case qt:return d=d.get(y.key===null?f:y.key)||null,c(u,d,y,C);case it:var A=y._init;return w(d,u,f,A(y._payload),C)}if(Tn(y)||gn(y))return d=d.get(f)||null,g(u,d,y,C,null);vr(u,y)}return null}function S(d,u,f,y){for(var C=null,A=null,N=u,P=u=0,R=null;N!==null&&P<f.length;P++){N.index>P?(R=N,N=null):R=N.sibling;var F=h(d,N,f[P],y);if(F===null){N===null&&(N=R);break}e&&N&&F.alternate===null&&t(d,N),u=o(F,u,P),A===null?C=F:A.sibling=F,A=F,N=R}if(P===f.length)return n(d,N),q&&xt(d,P),C;if(N===null){for(;P<f.length;P++)N=p(d,f[P],y),N!==null&&(u=o(N,u,P),A===null?C=N:A.sibling=N,A=N);return q&&xt(d,P),C}for(N=r(d,N);P<f.length;P++)R=w(N,d,P,f[P],y),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?P:R.key),u=o(R,u,P),A===null?C=R:A.sibling=R,A=R);return e&&N.forEach(function(ye){return t(d,ye)}),q&&xt(d,P),C}function k(d,u,f,y){var C=gn(f);if(typeof C!="function")throw Error(v(150));if(f=C.call(f),f==null)throw Error(v(151));for(var A=C=null,N=u,P=u=0,R=null,F=f.next();N!==null&&!F.done;P++,F=f.next()){N.index>P?(R=N,N=null):R=N.sibling;var ye=h(d,N,F.value,y);if(ye===null){N===null&&(N=R);break}e&&N&&ye.alternate===null&&t(d,N),u=o(ye,u,P),A===null?C=ye:A.sibling=ye,A=ye,N=R}if(F.done)return n(d,N),q&&xt(d,P),C;if(N===null){for(;!F.done;P++,F=f.next())F=p(d,F.value,y),F!==null&&(u=o(F,u,P),A===null?C=F:A.sibling=F,A=F);return q&&xt(d,P),C}for(N=r(d,N);!F.done;P++,F=f.next())F=w(N,d,P,F.value,y),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?P:F.key),u=o(F,u,P),A===null?C=F:A.sibling=F,A=F);return e&&N.forEach(function(Ct){return t(d,Ct)}),q&&xt(d,P),C}function W(d,u,f,y){if(typeof f=="object"&&f!==null&&f.type===bt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ar:e:{for(var C=f.key,A=u;A!==null;){if(A.key===C){if(C=f.type,C===bt){if(A.tag===7){n(d,A.sibling),u=i(A,f.props.children),u.return=d,d=u;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Sa(C)===A.type){n(d,A.sibling),u=i(A,f.props),u.ref=kn(d,A,f),u.return=d,d=u;break e}n(d,A);break}else t(d,A);A=A.sibling}f.type===bt?(u=Lt(f.props.children,d.mode,y,f.key),u.return=d,d=u):(y=Rr(f.type,f.key,f.props,null,d.mode,y),y.ref=kn(d,u,f),y.return=d,d=y)}return s(d);case qt:e:{for(A=f.key;u!==null;){if(u.key===A)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Ki(f,d.mode,y),u.return=d,d=u}return s(d);case it:return A=f._init,W(d,u,A(f._payload),y)}if(Tn(f))return S(d,u,f,y);if(gn(f))return k(d,u,f,y);vr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=Gi(f,d.mode,y),u.return=d,d=u),s(d)):n(d,u)}return W}var ln=su(!0),au=su(!1),Qr=kt(null),$r=null,$t=null,fs=null;function hs(){fs=$t=$r=null}function ps(e){var t=Qr.current;U(Qr),e._currentValue=t}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){$r=e,fs=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if($r===null)throw Error(v(308));$t=e,$r.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var Nt=null;function ms(e){Nt===null?Nt=[e]:Nt.push(e)}function lu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ms(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,ms(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Pr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}function ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var i=e.updateQueue;ot=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==s&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,g=c=l=null,a=o;do{var h=a.lane,w=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,k=a;switch(h=t,w=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){p=S.call(w,p,h);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,h=typeof S=="function"?S.call(w,p,h):S,h==null)break e;p=V({},p,h);break e;case 2:ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=w,l=p):g=g.next=w,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rt|=s,e.lanes=s,e.memoizedState=p}}function Ea(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var ir={},je=kt(ir),Qn=kt(ir),$n=kt(ir);function Pt(e){if(e===ir)throw Error(v(174));return e}function ys(e,t){switch(_($n,t),_(Qn,e),_(je,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oo(t,e)}U(je),_(je,t)}function un(){U(je),U(Qn),U($n)}function cu(e){Pt($n.current);var t=Pt(je.current),n=oo(t,e.type);t!==n&&(_(Qn,e),_(je,n))}function vs(e){Qn.current===e&&(U(je),U(Qn))}var j=kt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qi=[];function ws(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var Fr=Je.ReactCurrentDispatcher,bi=Je.ReactCurrentBatchConfig,Dt=0,H=null,Y=null,Z=null,Zr=!1,Dn=!1,Yn=0,tf=0;function re(){throw Error(v(321))}function Ss(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function ks(e,t,n,r,i,o){if(Dt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?sf:af,e=n(r,i),Dn){o=0;do{if(Dn=!1,Yn=0,25<=o)throw Error(v(301));o+=1,Z=Y=null,t.updateQueue=null,Fr.current=lf,e=n(r,i)}while(Dn)}if(Fr.current=Jr,t=Y!==null&&Y.next!==null,Dt=0,Z=Y=H=null,Zr=!1,t)throw Error(v(300));return e}function Es(){var e=Yn!==0;return Yn=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Le(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(v(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function Xn(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Le(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var g=c.lane;if((Dt&g)===g)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,H.lanes|=g,Rt|=g}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,_e(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Rt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ji(e){var t=Le(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);_e(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function du(){}function fu(e,t){var n=H,r=Le(),i=t(),o=!_e(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Cs(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Zn(9,pu.bind(null,n,r,i,t),void 0,null),J===null)throw Error(v(349));Dt&30||hu(n,t,i)}return i}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&yu(e)}function mu(e,t,n){return n(function(){gu(t)&&yu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function yu(e){var t=Xe(e,1);t!==null&&We(t,e,1,-1)}function Ca(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,H,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return Le().memoizedState}function Lr(e,t,n,r){var i=qe();H.flags|=e,i.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&Ss(r,s.deps)){i.memoizedState=Zn(t,n,o,r);return}}H.flags|=e,i.memoizedState=Zn(1|t,n,o,r)}function xa(e,t){return Lr(8390656,8,e,t)}function Cs(e,t){return fi(2048,8,e,t)}function wu(e,t){return fi(4,2,e,t)}function Su(e,t){return fi(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,ku.bind(null,t,e),n)}function xs(){}function Cu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ss(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ss(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return Dt&21?(_e(n,t)||(n=Ll(),H.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function nf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=bi.transition;bi.transition={};try{e(!1),t()}finally{M=n,bi.transition=r}}function Au(){return Le().memoizedState}function rf(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nu(e))Pu(t,n);else if(n=lu(e,t,n,r),n!==null){var i=ue();We(n,e,r,i),Fu(n,t,r)}}function of(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Pu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,_e(a,s)){var l=t.interleaved;l===null?(i.next=i,ms(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=lu(e,t,i,r),n!==null&&(i=ue(),We(n,e,r,i),Fu(n,t,r))}}function Nu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Pu(e,t){Dn=Zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}var Jr={readContext:Fe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},sf={readContext:Fe,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:Ca,useDebugValue:xs,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Ca(!1),t=e[0];return e=nf.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=qe();if(q){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),J===null)throw Error(v(349));Dt&30||hu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xa(mu.bind(null,r,o,e),[e]),r.flags|=2048,Zn(9,pu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=J.identifierPrefix;if(q){var n=Ke,r=Ge;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},af={readContext:Fe,useCallback:Cu,useContext:Fe,useEffect:Cs,useImperativeHandle:Eu,useInsertionEffect:wu,useLayoutEffect:Su,useMemo:xu,useReducer:Bi,useRef:vu,useState:function(){return Bi(Xn)},useDebugValue:xs,useDeferredValue:function(e){var t=Le();return Tu(t,Y.memoizedState,e)},useTransition:function(){var e=Bi(Xn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Au,unstable_isNewReconciler:!1},lf={readContext:Fe,useCallback:Cu,useContext:Fe,useEffect:Cs,useImperativeHandle:Eu,useInsertionEffect:wu,useLayoutEffect:Su,useMemo:xu,useReducer:ji,useRef:vu,useState:function(){return ji(Xn)},useDebugValue:xs,useDeferredValue:function(e){var t=Le();return Y===null?t.memoizedState=e:Tu(t,Y.memoizedState,e)},useTransition:function(){var e=ji(Xn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Au,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function No(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=gt(e),o=Qe(r,i);o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,i),t!==null&&(We(t,e,i,r),Pr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=gt(e),o=Qe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,i),t!==null&&(We(t,e,i,r),Pr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=gt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=pt(e,i,r),t!==null&&(We(t,e,r,n),Pr(t,e,r))}};function Ta(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(i,o):!0}function Lu(e,t,n){var r=!1,i=wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(i=me(t)?It:se.current,r=t.contextTypes,o=(r=r!=null)?sn(e,i):wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Fe(o):(o=me(t)?It:se.current,i.context=sn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(No(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hi.enqueueReplaceState(i,i.state,null),Yr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Mc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ti||(ti=!0,Uo=r),Fo(e,t)},n}function Ou(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Na(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cf.bind(null,e,t,n),t.then(e,e))}function Pa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var cf=Je.ReactCurrentOwner,he=!1;function le(e,t,n,r){t.child=e===null?au(t,null,n,r):ln(t,e.child,n,r)}function La(e,t,n,r,i){n=n.render;var o=t.ref;return nn(t,i),r=ks(e,t,n,r,o,i),n=Es(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(q&&n&&us(t),t.flags|=1,le(e,t,r,i),t.child)}function Ia(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Os(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Du(e,t,o,r,i)):(e=Rr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(s,r)&&e.ref===t.ref)return Ze(e,t,i)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hn(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ze(e,t,i)}return Lo(e,t,n,r,i)}function Ru(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Xt,ve),ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(Xt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_(Xt,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_(Xt,ve),ve|=r;return le(e,t,i,n),t.child}function Mu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lo(e,t,n,r,i){var o=me(n)?It:se.current;return o=sn(t,o),nn(t,i),n=ks(e,t,n,r,o,i),r=Es(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(q&&r&&us(t),t.flags|=1,le(e,t,n,i),t.child)}function Oa(e,t,n,r,i){if(me(n)){var o=!0;Vr(t)}else o=!1;if(nn(t,i),t.stateNode===null)Ir(e,t),Lu(t,n,r),Po(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=me(n)?It:se.current,c=sn(t,c));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Aa(t,s,r,c),ot=!1;var h=t.memoizedState;s.state=h,Yr(t,r,s,i),l=t.memoizedState,a!==r||h!==l||pe.current||ot?(typeof g=="function"&&(No(t,n,g,r),l=t.memoizedState),(a=ot||Ta(t,n,a,r,h,l,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,uu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),s.props=c,p=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fe(l):(l=me(n)?It:se.current,l=sn(t,l));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Aa(t,s,r,l),ot=!1,h=t.memoizedState,s.state=h,Yr(t,r,s,i);var S=t.memoizedState;a!==p||h!==S||pe.current||ot?(typeof w=="function"&&(No(t,n,w,r),S=t.memoizedState),(c=ot||Ta(t,n,c,r,h,S,l)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Io(e,t,n,r,o,i)}function Io(e,t,n,r,i,o){Mu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ya(t,n,!1),Ze(e,t,o);r=t.stateNode,cf.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ln(t,e.child,null,o),t.child=ln(t,null,a,o)):le(e,t,a,o),t.memoizedState=r.state,i&&ya(t,n,!0),t.child}function Wu(e){var t=e.stateNode;t.pendingContext?ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ga(e,t.context,!1),ys(e,t.containerInfo)}function Da(e,t,n,r,i){return an(),ds(i),t.flags|=256,le(e,t,n,r),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function _u(e,t,n){var r=t.pendingProps,i=j.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_(j,i&1),e===null)return To(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gi(s,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Do(n),t.memoizedState=Oo,e):Ts(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return df(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=yt(a,o):(o=Lt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Do(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Oo,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ts(e,t){return t=gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&ds(r),ln(t,e.child,null,n),e=Ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Hi(Error(v(422))),wr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gi({mode:"visible",children:r.children},i,0,null),o=Lt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ln(t,e.child,null,s),t.child.memoizedState=Do(s),t.memoizedState=Oo,o);if(!(t.mode&1))return wr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Hi(o,r,void 0),wr(e,t,s,r)}if(a=(s&e.childLanes)!==0,he||a){if(r=J,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xe(e,i),We(r,e,i,-1))}return Is(),r=Hi(Error(v(421))),wr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,we=ht(i.nextSibling),Se=t,q=!0,Re=null,e!==null&&(Te[Ae++]=Ge,Te[Ae++]=Ke,Te[Ae++]=Ot,Ge=e.id,Ke=e.overflow,Ot=t),t=Ts(t,r.children),t.flags|=4096,t)}function Ra(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function Vi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function zu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(le(e,t,r.children,n),r=j.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ra(e,n,t);else if(e.tag===19)Ra(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(j,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vi(t,!0,n,null,o);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ir(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Wu(t),an();break;case 5:cu(t);break;case 1:me(t.type)&&Vr(t);break;case 4:ys(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_(Qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(j,j.current&1),t.flags|=128,null):n&t.child.childLanes?_u(e,t,n):(_(j,j.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);_(j,j.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_(j,j.current),r)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,n)}return Ze(e,t,n)}var Uu,Ro,qu,bu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ro=function(){};qu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt(je.current);var o=null;switch(n){case"input":i=to(e,i),r=to(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=io(e,i),r=io(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jr)}so(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_n.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_n.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&z("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&Hr(),ie(t),null;case 3:return r=t.stateNode,un(),U(pe),U(se),ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Bo(Re),Re=null))),Ro(e,t),ie(t),null;case 5:vs(t);var i=Pt($n.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ie(t),null}if(e=Pt(je.current),yr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[be]=t,r[Kn]=o,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<Nn.length;i++)z(Nn[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":js(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":Vs(r,o),z("invalid",r)}so(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),i=["children",""+a]):_n.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&z("scroll",r)}switch(n){case"input":lr(r),Hs(r,o,!0);break;case"textarea":lr(r),Gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ml(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[be]=t,e[Kn]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(s=ao(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nn.length;i++)z(Nn[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":js(e,r),i=to(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),z("invalid",e);break;case"textarea":Vs(e,r),i=io(e,r),z("invalid",e);break;default:i=r}so(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?vl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gl(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zn(e,l):typeof l=="number"&&zn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_n.hasOwnProperty(o)?l!=null&&o==="onScroll"&&z("scroll",e):l!=null&&$o(e,o,l,s))}switch(n){case"input":lr(e),Hs(e,r,!1);break;case"textarea":lr(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Pt($n.current),Pt(je.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return ie(t),null;case 13:if(U(j),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&we!==null&&t.mode&1&&!(t.flags&128))ou(),an(),t.flags|=98560,o=!1;else if(o=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[be]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Re!==null&&(Bo(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||j.current&1?X===0&&(X=3):Is())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return un(),Ro(e,t),e===null&&Vn(t.stateNode.containerInfo),ie(t),null;case 10:return ps(t.type._context),ie(t),null;case 17:return me(t.type)&&Hr(),ie(t),null;case 19:if(U(j),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)En(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Xr(e),s!==null){for(t.flags|=128,En(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(j,j.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>dn&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ie(t),null}else 2*K()-o.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=j.current,_(j,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function pf(e,t){switch(cs(t),t.tag){case 1:return me(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),U(pe),U(se),ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vs(t),null;case 13:if(U(j),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(j),null;case 4:return un(),null;case 10:return ps(t.type._context),null;case 22:case 23:return Ls(),null;case 24:return null;default:return null}}var Sr=!1,oe=!1,mf=typeof WeakSet=="function"?WeakSet:Set,T=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Mo(e,t,n){try{n()}catch(r){G(e,t,r)}}var Ma=!1;function gf(e,t){if(vo=qr,e=Gl(),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,g=0,p=e,h=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++g===r&&(l=s),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wo={focusedElem:e,selectionRange:n},qr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,W=S.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),W);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return S=Ma,Ma=!1,S}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mo(t,n,o)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[Kn],delete t[Eo],delete t[Xd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Wa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jr));else if(r!==4&&(e=e.child,e!==null))for(_o(e,t,n),e=e.sibling;e!==null;)_o(e,t,n),e=e.sibling}function zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zo(e,t,n),e=e.sibling;e!==null;)zo(e,t,n),e=e.sibling}var ee=null,De=!1;function rt(e,t,n){for(n=n.child;n!==null;)Hu(e,t,n),n=n.sibling}function Hu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(si,n)}catch{}switch(n.tag){case 5:oe||Yt(n,t);case 6:var r=ee,i=De;ee=null,rt(e,t,n),ee=r,De=i,ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),Bn(e)):zi(ee,n.stateNode));break;case 4:r=ee,i=De,ee=n.stateNode.containerInfo,De=!0,rt(e,t,n),ee=r,De=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Mo(n,t,s),i=i.next}while(i!==r)}rt(e,t,n);break;case 1:if(!oe&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,rt(e,t,n),oe=r):rt(e,t,n);break;default:rt(e,t,n)}}function _a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mf),t.forEach(function(r){var i=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,De=!1;break e;case 3:ee=a.stateNode.containerInfo,De=!0;break e;case 4:ee=a.stateNode.containerInfo,De=!0;break e}a=a.return}if(ee===null)throw Error(v(160));Hu(o,s,i),ee=null,De=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vu(t,e),t=t.sibling}function Vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ue(e),r&4){try{Rn(3,e,e.return),pi(3,e)}catch(k){G(e,e.return,k)}try{Rn(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Ie(t,e),Ue(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Ie(t,e),Ue(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var i=e.stateNode;try{zn(i,"")}catch(k){G(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hl(i,o),ao(a,s);var c=ao(a,o);for(s=0;s<l.length;s+=2){var g=l[s],p=l[s+1];g==="style"?vl(i,p):g==="dangerouslySetInnerHTML"?gl(i,p):g==="children"?zn(i,p):$o(i,g,p,c)}switch(a){case"input":no(i,o);break;case"textarea":pl(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Zt(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zt(i,!!o.multiple,o.defaultValue,!0):Zt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kn]=o}catch(k){G(e,e.return,k)}}break;case 6:if(Ie(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){G(e,e.return,k)}}break;case 3:if(Ie(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Ie(t,e),Ue(e);break;case 13:Ie(t,e),Ue(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=K())),r&4&&_a(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Ie(t,e),oe=c):Ie(t,e),Ue(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(T=e,g=e.child;g!==null;){for(p=T=g;T!==null;){switch(h=T,w=h.child,h.tag){case 0:case 11:case 14:case 15:Rn(4,h,h.return);break;case 1:Yt(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:Yt(h,h.return);break;case 22:if(h.memoizedState!==null){Ua(p);continue}}w!==null?(w.return=h,T=w):Ua(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yl("display",s))}catch(k){G(e,e.return,k)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){G(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ie(t,e),Ue(e),r&4&&_a(e);break;case 21:break;default:Ie(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ju(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zn(i,""),r.flags&=-33);var o=Wa(e);zo(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Wa(e);_o(e,a,s);break;default:throw Error(v(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e,t,n){T=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Sr;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||oe;a=Sr;var c=oe;if(Sr=s,(oe=l)&&!c)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?qa(i):l!==null?(l.return=s,T=l):qa(i);for(;o!==null;)T=o,Gu(o),o=o.sibling;T=i,Sr=a,oe=c}za(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):za(e)}}function za(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ea(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ea(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Bn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}oe||t.flags&512&&Wo(t)}catch(h){G(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Ua(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function qa(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(l){G(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){G(t,i,l)}}var o=t.return;try{Wo(t)}catch(l){G(t,o,l)}break;case 5:var s=t.return;try{Wo(t)}catch(l){G(t,s,l)}}}catch(l){G(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var vf=Math.ceil,ei=Je.ReactCurrentDispatcher,As=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,D=0,J=null,$=null,te=0,ve=0,Xt=kt(0),X=0,Jn=null,Rt=0,mi=0,Ns=0,Mn=null,fe=null,Ps=0,dn=1/0,He=null,ti=!1,Uo=null,mt=null,kr=!1,ut=null,ni=0,Wn=0,qo=null,Or=-1,Dr=0;function ue(){return D&6?K():Or!==-1?Or:Or=K()}function gt(e){return e.mode&1?D&2&&te!==0?te&-te:ef.transition!==null?(Dr===0&&(Dr=Ll()),Dr):(e=M,e!==0||(e=window.event,e=e===void 0?16:_l(e.type)),e):1}function We(e,t,n,r){if(50<Wn)throw Wn=0,qo=null,Error(v(185));tr(e,n,r),(!(D&2)||e!==J)&&(e===J&&(!(D&2)&&(mi|=n),X===4&&at(e,te)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(dn=K()+500,di&&Et()))}function ge(e,t){var n=e.callbackNode;ed(e,t);var r=Ur(e,e===J?te:0);if(r===0)n!==null&&$s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$s(n),t===1)e.tag===0?Jd(ba.bind(null,e)):nu(ba.bind(null,e)),$d(function(){!(D&6)&&Et()}),n=null;else{switch(Il(r)){case 1:n=es;break;case 4:n=Pl;break;case 16:n=zr;break;case 536870912:n=Fl;break;default:n=zr}n=ec(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Or=-1,Dr=0,D&6)throw Error(v(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Ur(e,e===J?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ri(e,r);else{t=r;var i=D;D|=2;var o=$u();(J!==e||te!==t)&&(He=null,dn=K()+500,Ft(e,t));do try{kf();break}catch(a){Qu(e,a)}while(!0);hs(),ei.current=o,D=i,$!==null?t=0:(J=null,te=0,t=X)}if(t!==0){if(t===2&&(i=ho(e),i!==0&&(r=i,t=bo(e,i))),t===1)throw n=Jn,Ft(e,0),at(e,r),ge(e,K()),n;if(t===6)at(e,r);else{if(i=e.current.alternate,!(r&30)&&!wf(i)&&(t=ri(e,r),t===2&&(o=ho(e),o!==0&&(r=o,t=bo(e,o))),t===1))throw n=Jn,Ft(e,0),at(e,r),ge(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:Tt(e,fe,He);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Ps+500-K(),10<t)){if(Ur(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ko(Tt.bind(null,e,fe,He),t);break}Tt(e,fe,He);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Me(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vf(r/1960))-r,10<r){e.timeoutHandle=ko(Tt.bind(null,e,fe,He),r);break}Tt(e,fe,He);break;case 5:Tt(e,fe,He);break;default:throw Error(v(329))}}}return ge(e,K()),e.callbackNode===n?Ku.bind(null,e):null}function bo(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=ri(e,t),e!==2&&(t=fe,fe=n,t!==null&&Bo(t)),e}function Bo(e){fe===null?fe=e:fe.push.apply(fe,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_e(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Ns,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function ba(e){if(D&6)throw Error(v(327));rn();var t=Ur(e,0);if(!(t&1))return ge(e,K()),null;var n=ri(e,t);if(e.tag!==0&&n===2){var r=ho(e);r!==0&&(t=r,n=bo(e,r))}if(n===1)throw n=Jn,Ft(e,0),at(e,t),ge(e,K()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,fe,He),ge(e,K()),null}function Fs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(dn=K()+500,di&&Et())}}function Mt(e){ut!==null&&ut.tag===0&&!(D&6)&&rn();var t=D;D|=1;var n=Pe.transition,r=M;try{if(Pe.transition=null,M=1,e)return e()}finally{M=r,Pe.transition=n,D=t,!(D&6)&&Et()}}function Ls(){ve=Xt.current,U(Xt)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qd(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:un(),U(pe),U(se),ws();break;case 5:vs(r);break;case 4:un();break;case 13:U(j);break;case 19:U(j);break;case 10:ps(r.type._context);break;case 22:case 23:Ls()}n=n.return}if(J=e,$=e=yt(e.current,null),te=ve=t,X=0,Jn=null,Ns=mi=Rt=0,fe=Mn=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Nt=null}return e}function Qu(e,t){do{var n=$;try{if(hs(),Fr.current=Jr,Zr){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zr=!1}if(Dt=0,Z=Y=H=null,Dn=!1,Yn=0,As.current=null,n===null||n.return===null){X=1,Jn=t,$=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,g=a,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Pa(s);if(w!==null){w.flags&=-257,Fa(w,s,a,o,t),w.mode&1&&Na(o,c,t),t=w,l=c;var S=t.updateQueue;if(S===null){var k=new Set;k.add(l),t.updateQueue=k}else S.add(l);break e}else{if(!(t&1)){Na(o,c,t),Is();break e}l=Error(v(426))}}else if(q&&a.mode&1){var W=Pa(s);if(W!==null){!(W.flags&65536)&&(W.flags|=256),Fa(W,s,a,o,t),ds(cn(l,a));break e}}o=l=cn(l,a),X!==4&&(X=2),Mn===null?Mn=[o]:Mn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Iu(o,l,t);ka(o,d);break e;case 1:a=l;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mt===null||!mt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ou(o,a,t);ka(o,y);break e}}o=o.return}while(o!==null)}Xu(n)}catch(C){t=C,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function $u(){var e=ei.current;return ei.current=Jr,e===null?Jr:e}function Is(){(X===0||X===3||X===2)&&(X=4),J===null||!(Rt&268435455)&&!(mi&268435455)||at(J,te)}function ri(e,t){var n=D;D|=2;var r=$u();(J!==e||te!==t)&&(He=null,Ft(e,t));do try{Sf();break}catch(i){Qu(e,i)}while(!0);if(hs(),D=n,ei.current=r,$!==null)throw Error(v(261));return J=null,te=0,X}function Sf(){for(;$!==null;)Yu($)}function kf(){for(;$!==null&&!Vc();)Yu($)}function Yu(e){var t=Ju(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Xu(e):$=t,As.current=null}function Xu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pf(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,$=null;return}}else if(n=hf(n,t,ve),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);X===0&&(X=5)}function Tt(e,t,n){var r=M,i=Pe.transition;try{Pe.transition=null,M=1,Ef(e,t,n,r)}finally{Pe.transition=i,M=r}return null}function Ef(e,t,n,r){do rn();while(ut!==null);if(D&6)throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(td(e,o),e===J&&($=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,ec(zr,function(){return rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var s=M;M=1;var a=D;D|=4,As.current=null,gf(e,n),Vu(n,e),bd(wo),qr=!!vo,wo=vo=null,e.current=n,yf(n),Gc(),D=a,M=s,Pe.transition=o}else e.current=n;if(kr&&(kr=!1,ut=e,ni=i),o=e.pendingLanes,o===0&&(mt=null),$c(n.stateNode),ge(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ti)throw ti=!1,e=Uo,Uo=null,e;return ni&1&&e.tag!==0&&rn(),o=e.pendingLanes,o&1?e===qo?Wn++:(Wn=0,qo=e):Wn=0,Et(),null}function rn(){if(ut!==null){var e=Il(ni),t=Pe.transition,n=M;try{if(Pe.transition=null,M=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,ni=0,D&6)throw Error(v(331));var i=D;for(D|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(T=c;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:Rn(8,g,o)}var p=g.child;if(p!==null)p.return=g,T=p;else for(;T!==null;){g=T;var h=g.sibling,w=g.return;if(Bu(g),g===c){T=null;break}if(h!==null){h.return=w,T=h;break}T=w}}}var S=o.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var W=k.sibling;k.sibling=null,k=W}while(k!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,T=d;break e}T=o.return}}var u=e.current;for(T=u;T!==null;){s=T;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,T=f;else e:for(s=u;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pi(9,a)}}catch(C){G(a,a.return,C)}if(a===s){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(D=i,Et(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(si,e)}catch{}r=!0}return r}finally{M=n,Pe.transition=t}}return!1}function Ba(e,t,n){t=cn(n,t),t=Iu(e,t,1),e=pt(e,t,1),t=ue(),e!==null&&(tr(e,1,t),ge(e,t))}function G(e,t,n){if(e.tag===3)Ba(e,e,n);else for(;t!==null;){if(t.tag===3){Ba(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=cn(n,e),e=Ou(t,e,1),t=pt(t,e,1),e=ue(),t!==null&&(tr(t,1,e),ge(t,e));break}}t=t.return}}function Cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>K()-Ps?Ft(e,0):Ns|=n),ge(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(tr(e,t,n),ge(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Zu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,ff(e,t,n);he=!!(e.flags&131072)}else he=!1,q&&t.flags&1048576&&ru(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ir(e,t),e=t.pendingProps;var i=sn(t,se.current);nn(t,n),i=ks(null,t,r,e,i,n);var o=Es();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Vr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gs(t),i.updater=hi,t.stateNode=i,i._reactInternals=t,Po(t,r,e,n),t=Io(null,t,r,!0,o,n)):(t.tag=0,q&&o&&us(t),le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ir(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nf(r),e=Oe(r,e),i){case 0:t=Lo(null,t,r,e,n);break e;case 1:t=Oa(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Ia(null,t,r,Oe(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Lo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Oa(e,t,r,i,n);case 3:e:{if(Wu(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uu(e,t),Yr(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=cn(Error(v(423)),t),t=Da(e,t,r,n,i);break e}else if(r!==i){i=cn(Error(v(424)),t),t=Da(e,t,r,n,i);break e}else for(we=ht(t.stateNode.containerInfo.firstChild),Se=t,q=!0,Re=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===i){t=Ze(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&To(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,So(r,i)?s=null:o!==null&&So(r,o)&&(t.flags|=32),Mu(e,t),le(e,t,s,n),t.child;case 6:return e===null&&To(t),null;case 13:return _u(e,t,n);case 4:return ys(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),La(e,t,r,i,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,_(Qr,r._currentValue),r._currentValue=s,o!==null)if(_e(o.value,s)){if(o.children===i.children&&!pe.current){t=Ze(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Qe(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?l.next=l:(l.next=g.next,g.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ao(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(v(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ao(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nn(t,n),i=Fe(i),r=r(i),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,i=Oe(r,t.pendingProps),i=Oe(r.type,i),Ia(e,t,r,i,n);case 15:return Du(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Ir(e,t),t.tag=1,me(r)?(e=!0,Vr(t)):e=!1,nn(t,n),Lu(t,r,i),Po(t,r,i,n),Io(null,t,r,!0,e,n);case 19:return zu(e,t,n);case 22:return Ru(e,t,n)}throw Error(v(156,t.tag))};function ec(e,t){return Nl(e,t)}function Af(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Af(e,t,n,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Zo)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Os(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case bt:return Lt(n.children,i,o,t);case Yo:s=8,i|=8;break;case Xi:return e=Ne(12,n,t,i|2),e.elementType=Xi,e.lanes=o,e;case Zi:return e=Ne(13,n,t,i),e.elementType=Zi,e.lanes=o,e;case Ji:return e=Ne(19,n,t,i),e.elementType=Ji,e.lanes=o,e;case cl:return gi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ll:s=10;break e;case ul:s=9;break e;case Xo:s=11;break e;case Zo:s=14;break e;case it:s=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function gi(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=cl,e.lanes=n,e.stateNode={isHidden:!1},e}function Gi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ds(e,t,n,r,i,o,s,a,l){return e=new Pf(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(o),e}function Ff(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return wt;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(me(n))return tu(e,n,t)}return t}function nc(e,t,n,r,i,o,s,a,l){return e=Ds(n,r,!0,e,i,o,s,a,l),e.context=tc(null),n=e.current,r=ue(),i=gt(n),o=Qe(r,i),o.callback=t??null,pt(n,o,i),e.current.lanes=i,tr(e,i,r),ge(e,r),e}function yi(e,t,n,r){var i=t.current,o=ue(),s=gt(i);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(i,t,s),e!==null&&(We(e,i,s,o),Pr(e,i,s)),s}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ja(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rs(e,t){ja(e,t),(e=e.alternate)&&ja(e,t)}function Lf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ms(e){this._internalRoot=e}vi.prototype.render=Ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));yi(e,t,null,null)};vi.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){yi(null,e,null,null)}),t[Ye]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&Wl(e)}};function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ha(){}function If(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ii(s);o.call(c)}}var s=nc(t,r,e,0,null,!1,!1,"",Ha);return e._reactRootContainer=s,e[Ye]=s.current,Vn(e.nodeType===8?e.parentNode:e),Mt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ii(l);a.call(c)}}var l=Ds(e,0,!1,null,null,!1,!1,"",Ha);return e._reactRootContainer=l,e[Ye]=l.current,Vn(e.nodeType===8?e.parentNode:e),Mt(function(){yi(t,l,n,r)}),l}function Si(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ii(s);a.call(l)}}yi(t,s,e,i)}else s=If(n,t,e,i,r);return ii(s)}Ol=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(ts(t,n|1),ge(t,K()),!(D&6)&&(dn=K()+500,Et()))}break;case 13:Mt(function(){var r=Xe(e,1);if(r!==null){var i=ue();We(r,e,1,i)}}),Rs(e,1)}};ns=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();We(t,e,134217728,n)}Rs(e,134217728)}};Dl=function(e){if(e.tag===13){var t=gt(e),n=Xe(e,t);if(n!==null){var r=ue();We(n,e,t,r)}Rs(e,t)}};Rl=function(){return M};Ml=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};uo=function(e,t,n){switch(t){case"input":if(no(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ci(r);if(!i)throw Error(v(90));fl(r),no(r,i)}}}break;case"textarea":pl(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};kl=Fs;El=Mt;var Of={usingClientEntryPoint:!1,Events:[rr,Vt,ci,wl,Sl,Fs]},Cn={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tl(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{si=Er.inject(Df),Be=Er}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ws(t))throw Error(v(200));return Ff(e,t,null,n)};Ee.createRoot=function(e,t){if(!Ws(e))throw Error(v(299));var n=!1,r="",i=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ds(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Ms(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Tl(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Mt(e)};Ee.hydrate=function(e,t,n){if(!wi(t))throw Error(v(200));return Si(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Ws(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nc(t,null,e,1,n??null,i,!1,o,s),e[Ye]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vi(t)};Ee.render=function(e,t,n){if(!wi(t))throw Error(v(200));return Si(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!wi(e))throw Error(v(40));return e._reactRootContainer?(Mt(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Ee.unstable_batchedUpdates=Fs;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Si(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),il.exports=Ee;var Rf=il.exports,Va=Rf;$i.createRoot=Va.createRoot,$i.hydrateRoot=Va.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=Q.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>Q.createElement("svg",{ref:l,...Wf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:oc("lucide",i),...a},[...s.map(([c,g])=>Q.createElement(c,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(e,t)=>{const n=Q.forwardRef(({className:r,...i},o)=>Q.createElement(_f,{ref:o,iconNode:t,className:oc(`lucide-${Mf(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=xe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=xe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=xe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=xe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=xe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=xe("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=xe("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=xe("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=xe("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xf=[{id:"seed-001",category:"Walkaround / CDL",question:"How many static wicks are on the plane and where are they located?",answer:`12 total static dischargers, all on control surfaces:

• 3 on the right aileron
• 3 on the left aileron
• 4 on the elevator
• 2 on the rudder

CDL (AFM Appendix 1) allows dispatch with as few as 8, but only 1 missing per control surface.`},{id:"seed-002",category:"Electrical",question:"What are the 7 electrical busses?",answer:`1. DC BUS 1 (powered by SG 1)
2. DC BUS 2 (powered by SG 2)
3. EMERGENCY BUS (normally fed by SG 1)
4. CENTRAL BUS (fed by SG 2, has starter contactors and hyd pump)
5. SHED BUS (fed by SG 2, drops if a generator fails in flight)
6. HOT BATT BUS 1 (always hot, direct from BATT 1)
7. HOT BATT BUS 2 (always hot, direct from BATT 2)

Split: SG 1 → DC1 + Emergency + Hot Batt 1. SG 2 → DC2 + Central + Shed + Hot Batt 2.`},{id:"seed-003",category:"Engines",question:"What are the three types of failed starts?",answer:`All three are auto-detected and stopped by the FADEC:

1. NO LIGHT OFF — ITT has not risen significantly within 15 seconds of fuel flow initiation
2. HUNG START — Time to reach idle exceeds 45 seconds
3. HOT START — ITT exceeds the starting limit (830°C)

FADEC will NOT auto-stop for:
• N1 not spinning
• Oil pressure not rising

If oil pressure doesn't come up, do NOT attempt a restart. Get maintenance.`},{id:"seed-004",category:"Memory Items",question:"Memory items for SMOKE / FIRE / FUMES?",answer:`• Crew Oxygen Masks: DON, EMER (then 100% after 2 minutes)
• Auto Dilution Valve: CLOSED
• Smoke Goggles: DON
• Communication: ESTABLISH
• DUMP Button: PUSH IN`},{id:"seed-005",category:"Memory Items",question:"Memory items for SMOKE EVACUATION?",answer:`• Crew Oxygen Masks: DON, EMER (then 100% after 2 minutes)
• Auto Dilution Valve: CLOSED
• Smoke Goggles: DON
• Communication: ESTABLISH
• O2 Supply Control Knob: CREW ONLY
• BLEED Knob: OFF VENT
• DUMP Button: PUSH IN`},{id:"seed-006",category:"Memory Items",question:"Memory items for EMERGENCY EVACUATION?",answer:`• Thrust Levers: IDLE
• Emergency / Parking Brake: ON
• Start / Stop Knobs: STOP
• Fire Shutoff Buttons: PUSH IN
• PRESN MODE Switch: MAN
• Pressurization Dump Button: PUSH IN
• ATC: NOTIFY
• Evacuation: PERFORM
• BATT 1 & 2 Switches: OFF`},{id:"seed-007",category:"Memory Items",question:"Memory items for ENGINE ABNORMAL START?",answer:"• Start / Stop Knob (affected engine): STOP"},{id:"seed-008",category:"Memory Items",question:"Memory items for ENGINE FIRE, SEVERE DAMAGE OR SEPARATION?",answer:`Affected Engine:
• Thrust Lever: IDLE
• Start / Stop Knob: STOP
• Fire Shutoff Button: PUSH IN`},{id:"seed-009",category:"Memory Items",question:"Memory items for DUAL ENGINE FAILURE?",answer:`• Thrust Levers: IDLE
• Oxygen Masks: DON 100%
• Communication: ESTABLISH`},{id:"seed-010",category:"Memory Items",question:"Memory items for INADVERTENT PUSHER ACTIVATION?",answer:`• Quick Disconnect Button: PRESS
• PUSHER CUTOUT Button: PUSH IN`},{id:"seed-011",category:"Memory Items",question:"Memory items for REJECTED TAKEOFF (at or below V1)?",answer:`• Thrust Levers: IDLE
• Brakes: APPLY MAXIMUM
• Directional Control: MAINTAIN`},{id:"seed-012",category:"Memory Items",question:"Memory items for E1 (2) FIRE?",answer:`Affected Engine:
• Thrust Lever: IDLE
• Start / Stop Knob: STOP
• Fire Shutoff Button: PUSH IN`},{id:"seed-013",category:"Memory Items",question:"Memory items for CABIN ALTITUDE HI?",answer:`• Crew Oxygen Masks: DON, 100%
• Crew Communication: ESTABLISH
• Fasten Seat Belts Sign: ON
• Altitude: 10,000 FT OR MEA, whichever is higher
• Thrust Levers: IDLE
• Airspeed: MAX 250 KIAS / Mmo
• LDG GEAR Lever: DN
• Airspeed: MAX 275 KIAS / Mmo
• Transponder: 7700
• ATC: NOTIFY`},{id:"seed-014",category:"Memory Items",question:"Memory items for EMERGENCY DESCENT?",answer:`• Fasten Seat Belts Sign: ON
• Altitude: 10,000 FT OR MEA, whichever is higher
• Thrust Levers: IDLE
• Airspeed: MAX 250 KIAS / Mmo
• LDG GEAR Lever: DN
• Airspeed: MAX 275 KIAS / Mmo
• Transponder: 7700
• ATC: NOTIFY`},{id:"seed-015",category:"Memory Items",question:"Memory items for TAKEOFF WITH ENGINE FAILURE AT OR ABOVE V1?",answer:`At VR rotate the airplane per the table:
• Flap 1: 9.5° pitch
• Flap 2: 9° pitch

With Positive Rate of Climb:
• LDG GEAR Lever: UP
• Airspeed: V2`},{id:"seed-016",category:"Memory Items",question:"Memory items for ELEC XFR FAIL?",answer:"• ELEC EMER Button: PUSH IN"},{id:"seed-017",category:"Chair Fly",question:"Chair Fly: Unusual Attitude — NOSE HIGH recovery?",answer:`• Horn goes off, open eyes and raise head
• TOGA right away
• Turn left or right to 30 to 45 degrees while nosing over
• Nose to horizon, not below it
• Level wings
• Speed up then pitch up
• DONE`},{id:"seed-018",category:"Chair Fly",question:"Chair Fly: Unusual Attitude — NOSE LOW recovery?",answer:`• Horn goes off, open eyes and raise head
• Power to idle right away
• Level wings and raise nose to above the horizon
• Apply power as speed bleeds off
• DONE`},{id:"seed-019",category:"Chair Fly",question:"Chair Fly: CLEAN STALL?",answer:`• Power to idle with AP on
• Set speed bug to 130 (FLC)
• At 130: disconnect AP and hold 5,000 or a slight climb
• Wait for the pusher
• Once pushed, TOGA power FIRST
• Keep pushing disconnect
• Nose up on the horizon
• Stick pusher disable
• Climb to 5,000 and slow to 170
• Reenable stick pusher
• AP back on`},{id:"seed-020",category:"Chair Fly",question:"Chair Fly: DEPARTURE STALL?",answer:`Setup:
• 5,000 ft and 170 knots
• Power to Idle
• Flaps 1
• Bug 130 knots
• At 130: AP disconnect
• 20 deg left turn while maintaining 5,000 or a slight climb

At aural "Stall Stall" Recover:
• TOGA Power
• Wings Level
• Pitch down to the horizon (not below it)
• Speed will quickly climb, pitch to 7 degrees nose up
• At Vfs / 130: Flaps Up
• At 170 knots and level at 5,000: AP On`},{id:"seed-021",category:"Chair Fly",question:"Chair Fly: LANDING STALL?",answer:`Setup:
• From 170 knots and 5,000 feet
• Power to 50%
• Flaps 1
• Bug 130 knots on the FLC
• Gear Down (keep hand on gear)
• Flaps 3 (after 3 green)
• At 145: Flaps full
• At 130: Disconnect AP
• Power to Idle

At aural "Stall Stall" Recover:
• TOGA Power
• Flaps 2 clicks (to Flaps 2)
• Positive rate, gear up
• At Vfs / 130: Flaps Up
• Pitch to 5 degrees
• FLC 170, follow Flight Director to 5,000
• At 170 knots and level at 5,000: AP On`},{id:"seed-022",category:"Chair Fly",question:"Chair Fly: STEEP TURNS?",answer:`• Once at 170 knots and 5,000 feet
• AP off
• FD off
• Roll left to 45 bank
• Increase power slightly, about 67%
• Trim and hold, verbalize what you're doing (little high, little slow, etc.)
• 10 degrees before 360: fast rollover to the right at 45 degrees
• 10 degrees before 360: roll out
• Power back
• Hold 170 knots and 5,000 feet
• AP back on`},{id:"seed-023",category:"Limits",question:"Max Ramp Weight (MRW)?",answer:"10,516 lbs"},{id:"seed-024",category:"Limits",question:"Max Takeoff Weight (MTOW)?",answer:"10,472 lbs"},{id:"seed-025",category:"Limits",question:"Max Landing Weight (MLW)?",answer:"9,766 lbs"},{id:"seed-026",category:"Limits",question:"Max Zero Fuel Weight (MZFW)?",answer:"8,444 lbs"},{id:"seed-027",category:"Limits",question:"Wardrobe baggage limit?",answer:"55 lbs"},{id:"seed-028",category:"Limits",question:"Lavatory cabinet baggage limit?",answer:"33 lbs"},{id:"seed-029",category:"Limits",question:"AFT baggage compartment limit?",answer:"353 lbs"},{id:"seed-030",category:"Limits",question:"FWD baggage compartment limit?",answer:"66 lbs"},{id:"seed-031",category:"Limits",question:"VLO?",answer:`180 KIAS

(Maximum landing gear operating speed.)`},{id:"seed-032",category:"Limits",question:"VLE?",answer:`275 KIAS

(Maximum landing gear extended speed.)`},{id:"seed-033",category:"Limits",question:"Mmo?",answer:"0.70 Mach"},{id:"seed-034",category:"Limits",question:"Vmo?",answer:"275 KIAS"},{id:"seed-035",category:"Limits",question:"VMC (Takeoff)?",answer:"97 KIAS"},{id:"seed-036",category:"Limits",question:"VMC (Landing, no icing)?",answer:"86 KIAS"},{id:"seed-037",category:"Limits",question:"VMC (Landing, icing)?",answer:"97 KIAS"},{id:"seed-038",category:"Limits",question:"VO?",answer:`186 KIAS

(Maximum operating maneuvering speed.)`},{id:"seed-039",category:"Limits",question:"VFE Flaps 1?",answer:"200 KIAS"},{id:"seed-040",category:"Limits",question:"VFE Flaps 2?",answer:"160 KIAS"},{id:"seed-041",category:"Limits",question:"VFE Flaps 3?",answer:"160 KIAS"},{id:"seed-042",category:"Limits",question:"VFE Flaps Full?",answer:"145 KIAS"},{id:"seed-043",category:"Limits",question:"Maximum tire ground speed?",answer:"139 kts"},{id:"seed-044",category:"Limits",question:"Max altitude for flap extension, yaw damper operative?",answer:"15,000 ft"},{id:"seed-045",category:"Limits",question:"Max altitude for flap extension, yaw damper NOT operative?",answer:"12,000 ft"},{id:"seed-046",category:"Limits",question:"Maneuvering load factor flaps up?",answer:"+3.27 g"},{id:"seed-047",category:"Limits",question:"Maneuvering load factor flaps down (1, 2, 3, Full)?",answer:"+2.00 g"},{id:"seed-048",category:"Limits",question:"Are acrobatic maneuvers authorized?",answer:"No. No acrobatic maneuvers, including spins, are authorized."},{id:"seed-049",category:"Limits",question:"Minimum crew?",answer:`1 pilot.

• Pilot must occupy the left cockpit seat
• Operative autopilot and flight director are required for single pilot ops
• Pilot must use a headset mounted microphone`},{id:"seed-050",category:"Limits",question:"Maximum passenger seating?",answer:`5, 6, or 7 PAX.

• A passenger may occupy the right seat only in single pilot ops
• Lavatory use is prohibited for taxi, takeoff, and landing if the belt is not installed
• Refers to adults. One infant under 2 may be held by an adult in an aft seat.`},{id:"seed-051",category:"Limits",question:"Pilot sun-visor limitation?",answer:"Must be kept at the vertical position when in use, and must be stowed for taxi, takeoff, and landing."},{id:"seed-052",category:"Limits",question:"Cockpit curtain use?",answer:"Ground only, during cabin temp cool down."},{id:"seed-053",category:"Limits",question:"Allowable runway slope?",answer:"Negative 2% to positive 2%."},{id:"seed-054",category:"Limits",question:"Allowable runway surface type?",answer:"Paved."},{id:"seed-055",category:"Limits",question:"Max takeoff and landing tailwind component?",answer:"10 kts"},{id:"seed-056",category:"Limits",question:"Stall warning and protection system check?",answer:"Must be tested prior to each flight."},{id:"seed-057",category:"Limits",question:"Minimum battery voltage for engine start?",answer:"24 V"},{id:"seed-058",category:"Limits",question:"Minimum GPU voltage for battery charging?",answer:"27 V"},{id:"seed-059",category:"Limits",question:"Max generator load?",answer:`250 A each.

May be exceeded up to 300 A inflight below 34,000 ft.`},{id:"seed-060",category:"Limits",question:"Maximum usable fuel quantity per tank?",answer:"1,403 lbs"},{id:"seed-061",category:"Limits",question:"Unusable fuel quantity per tank?",answer:"22 lbs"},{id:"seed-062",category:"Limits",question:"Minimum fuel temperature?",answer:"Negative 37°C"},{id:"seed-063",category:"Limits",question:"Maximum fuel temperature on the ground?",answer:"52°C"},{id:"seed-064",category:"Limits",question:"Maximum fuel temperature in the air?",answer:"80°C"},{id:"seed-065",category:"Limits",question:"Maximum ITT (T/O, Con, Start, Trans)?",answer:"830°C"},{id:"seed-066",category:"Limits",question:"Maximum N1?",answer:"100%"},{id:"seed-067",category:"Limits",question:"Time limit in T/O thrust?",answer:"5 minutes"},{id:"seed-068",category:"Limits",question:"Starter limits (1st, 2nd, 3rd, 4th)?",answer:`• 1st: 60 seconds
• 2nd: 60 seconds
• 3rd: 15 minutes (cool down)
• 4th: 30 minutes (cool down)`},{id:"seed-069",category:"Limits",question:"Max differential pressure?",answer:"8.3 psi"},{id:"seed-070",category:"Limits",question:"Max differential overpressure?",answer:"8.6 psi"},{id:"seed-071",category:"Limits",question:"Max differential pressure for takeoff and landing?",answer:"0.2 psi"},{id:"seed-072",category:"Limits",question:"When are both ENG (anti-ice) switches required ON?",answer:"When SAT (TAT inflight) is below positive 10°C and visible moisture is present."},{id:"seed-073",category:"Limits",question:"When are WiSHLD and WINGSTAB required ON?",answer:"When SAT (TAT inflight) is positive 5°C to negative 40°C and visible moisture is present."},{id:"seed-074",category:"Limits",question:"Minimum airspeed in icing?",answer:"160 KIAS"},{id:"seed-075",category:"Limits",question:"Minimum airspeed to turn on the boots?",answer:"150 KIAS"},{id:"seed-076",category:"Limits",question:"Min AP engagement height, dual engine?",answer:"500 ft AGL"},{id:"seed-077",category:"Limits",question:"Min AP engagement height, single engine?",answer:"1,000 ft AGL"},{id:"seed-078",category:"Limits",question:"Minimum use height for the autopilot?",answer:"195 ft AGL"},{id:"seed-079",category:"Limits",question:"Max altitude loss (maneuvering / cruise)?",answer:"54 feet"},{id:"seed-080",category:"Chair Fly",question:"Chair Fly: NORMAL TAKEOFF?",answer:`• Pre-takeoff briefing
• Positive rate, gear up
• Call out at 400 ft (750 AGL): say "400 ft", Flaps Up, Con/Climb
• At 500 ft: AP On
• FLC 160
• Confirm NAV
• Departure CHECKLIST
• Once told, off to departure
• Level off at 5,000, get to 170 knots, bug it in FLC`},{id:"seed-081",category:"Limits",question:"When does the XFR button need to be pushed out?",answer:"For takeoff, landing, maneuvers, and turbulence."},{id:"seed-082",category:"Limits",question:"When will FADEC NOT stop a start",answer:`1) N1 not spinning
2) Oil pressure not rising`},{id:"seed-083",category:"Chair Fly",question:"Chair fly a single engine go around",answer:`- TOGA Power
    - TOGA Button
    - Flaps Up 2 Clicks (3 to 1)
    - Positive Rate, Gear Up
    - RUDDER
    - HDG button
    - FLC Vac (push FLC and dial in Vac) 
            *Don't fly below Vac, can go up to 5 knots faster)
    - At 1,000 ft AGL
        - AP On
        - YD Off
        - FLC to Vfs
        - @ Vfs
            - Flaps Up
            - Throttle to Con / Climb
    - After departure CHECKLIST
    - Transfer Fuel Button In`},{id:"seed-084",category:"Chair Fly",question:"Chair fly a single engine landing",answer:`- Confirm you have alternate missed approach instructions
    - PROC Button: Add approach with proper transition
    - Brief approach
    - Add BARO Mins
    - NAP 1-24 - Single Engine Approach CHECKLIST
    - Slow from 170 knots to 150 by adding Flaps 1 - @150 by approach fix
    - Cleared the approach hit APR
    - Before landing single engine CHECKLIST, NAP 1-24
    - Fuel Transfer Button OUT
    - At 1 Dot ABOVE Glidescope, bring down the gear, hand on the gear 
              *This is different then 2 engines when we bring the gear down 2 Dots above
    - 3 Green - Flap 3 (last flaps, no full on single engine)
    - Once established on the GS put missed approach altitude in e.g = 2,000 ft
    - At Minimums - Auto Pilot Off
    - Hand fly & Land`},{id:"seed-085",category:"Chair Fly",question:"Chair Fly: REJECTED TAKEOFF",answer:`- Before Takeoff CHECKLIST
    - Takeoff briefing
    - Start to take off
    - Loss of direction control
        - Thrust Idle
        - Max braking
        - Maintain directional control
        - Notify ATC once stopped
        - 50 minute cool time, maintenance check`},{id:"seed-086",category:"Limits",question:"Hydraulic check interval?",answer:"Every 15 days or before next flight, whichever occurs last."},{id:"seed-087",category:"Chair Fly",question:"Chair Fly: V1 CUT",answer:`- Resume take off, expect an engine failure
    - FLY THE AIRPLANE
    - Maintain directional control
    - Positive Rate - Gear Up
    - FLC - Put in V2
    - At 1,000 Feet
        - AP - AutoPilot On
        - YD Off
        - FLC to Vfs
        - @ Vfs speed
            - Flaps Up
            - Throttles to Con / Climb
    - Restart Engine Checklist`},{id:"seed-088",category:"Chair Fly",question:"Chair Fly: CIRCLE TO LAND",answer:`** NOTES: No APR on this approach, it's dive and drive
    - Add initial PROC to FMS
    - Descent checklist
    - Brief Approach
    - Add BARO Mins for Cat C (speed will be 130)
    - Prior to IAF
        - Dial in next lower altitude
        - Slow from 170 Flaps 0 to 150 Flaps 1
    - At IAF
        - VS (Vertical Speed), 1,000 ft per min to next altitude (NO APR BUTTON)
        - At Altitude, prior to FAF, dial in the Decision Altitude
    - 3 Miles from FAF
        - Gear down - hand on handle
        - 3 Green - Flaps 3
        - Slow to 130 - Bug this in FLC
    - Before landing CHECKLIST
    - At FAF
        - VS 1,000 FPM
        - Prep HEADING to a 50 degree left or right
        - Level off at decision altitude prior to missed approach fix.  Stay at 130!! (+5 ok, slower not ok)
    - Report airport in sight
    - Once cleared to circle hit HDG on AP to start the turn
    - Keep the airport in sight 
    - Use HDG to start a left turn to square up the base
    - Confirm you see the proper runway, descend and prepare for turn to final
    - After turn to final you can slow down (no more maneuvers)
    - Get to REF and land`},{id:"seed-089",category:"Chair Fly",question:"Chair Fly: WIND SHEAR",answer:`- Before takeoff CHECKLIST
    - Takeoff Briefing
    - 70 Knot Cross Check - V1
    - V1 - Take Off
    - Positive Rate - Gear Up
    - 400 Feet - Flaps 0 and Con / Climb (probably won't get here)
    - Once windshear is noticed then power to FULL MAX
    - Pitch to 15 degrees or higher - get speed to YELLOW
    - HOLD until climb rate returns
    - Power back and get back to a normal climb @160 FLC
    - Flaps 0
    - Take Off CHECKLIST`},{id:"seed-090",category:"Chair Fly",question:"Chair Fly: FLAP FAIL",answer:`- Ask ATC for instructions to hold or a heading to deal with a flap fail and to return to the airport
    - Suspend HOLD to work on Flap Fail
    - Flap Fail Checklist
    - Before Landing CHECKLIST
    - Brief the approach *Green Needles for this!!! (in CAE Sim)
    - Set BARO Minimums
    - Fly the approach (be ready for an engine fire @ CAE) - if you get an engine fire, do nothing, just tell ATC and land the plane - do emergency evacuation.`},{id:"seed-091",category:"Chair Fly",question:"Chair Fly: EMERGENCY EVACUATION",answer:`- ENGINE FIRE / EMERGENCY EVACUATION
    - Do NOTHING - land the plane
    - Notify ATC in the air of the issue and that an evacuation will occur
    - Land
    - STOP
    - Parking Break
    - Engines to idle
    - Start stop / STOP
    - Push cut off button for affected engine ONLY (don't do the memory item of both engines, due to the fire you want the full bottle going into the affected engine)
    - Bottle Discharge
    - AFTER discharge, push cut off button for good engine
    - Pressure to Manual
    - Cabin Dump
    - No need to call ATC, you already did
    - Evacuate people
    - Bat 1 and 2 Off`},{id:"seed-092",category:"Limits",question:"What are the maneuvering speeds for each degree of flaps?",answer:`The FLAP maneuvering speeds were defined based on the capacity of the airplane to perform a coordinated turn of 40 degrees bank without the stall warning activation.

Use flap maneuvering speeds as follows:

GEAR/FLAPS     SPEED

UP/0           170 KIAS
UP/1           150 KIAS
UP/2           130 KIAS
DN/3           130 KIAS
DN/FULL        130 KIAS`},{id:"seed-093",category:"Pressurization",question:"How does the pressurization system handle a return-to-field situation?",answer:`Return-to-Field mode kicks in automatically when you have to return to the airport you just departed from. It sets:

• Cruise altitude 1,000 ft below the max altitude achieved in the first 10 minutes of flight
• Never higher than 6,000 ft
• Plane sets LTE automatically`},{id:"seed-094",category:"Cold Weather Ops",question:"What's recommended for an engine start after a cold soak?",answer:`If the airplane stayed exposed for 2 hours or more at an ambient temperature of -18°C (0°F) or lower:

• Use a GPU (if applicable), OR
• Pre-heat the battery to a temperature above -18°C (0°F) before starting the engine.`},{id:"seed-095",category:"Cold Weather Ops",question:"What's the engine warm-up procedure after starting in cold weather?",answer:`Keep thrust levers at ground idle until oil reaches minimum operating temperature of 14°C (57°F).

If you advance either thrust lever out of idle before the oil hits 14°C, you'll trigger the ENGINE EXCEEDANCE message.

Once oil temp is reached, run the engine for an additional 3 minutes to make sure no ice particles are in the fuel supply.`},{id:"seed-096",category:"Cold Weather Ops",question:"How do you prevent a D-I WINGSTB FAIL message in cold weather?",answer:`Turn the WINGSTAB switch to ON for approximately 3 minutes before flight, even when there are no ice conditions.

This clears any humidity in the line that could otherwise condensate and trigger the D-I WINGSTB FAIL message.`},{id:"seed-097",category:"Cold Weather Ops",question:"What's the flap setting when taxiing through slush or standing water?",answer:`Flaps RETRACTED.

Retracting the flaps avoids snow and slush contamination from the main gear wheels.`},{id:"seed-098",category:"Cold Weather Ops",question:"What's the configuration for holding in icing conditions?",answer:`• Landing gear: UP
• Flaps: UP
• Minimum airspeed: 160 KIAS

CAUTION: Even small accumulations of ice on the wing leading edge may change the stall characteristics or the stall protection system warning margin.`},{id:"seed-099",category:"Preflight",question:"What lights show up during the annunciator test, in order from left to right?",answer:`7 lights, left to right:

1. CVDR light 1
2. CVDR light 2
3. Electrical Emergency
4. Fuel Transfer
5. Pusher Cutout
6. Parking Brake
7. Pressure Dump`},{id:"seed-100",category:"Preflight",question:"What do you see when testing the fire system?",answer:`• 2 engines on MFD
• 2 fuel cut off buttons (red and white)
• CAS message and aural warning`},{id:"seed-101",category:"Avionics",question:"How do you activate Reversionary Mode manually, and which displays does each button affect?",answer:`Press the DISPLAY BACKUP button (red pushbutton) on the audio panel to activate. Press again to deactivate.

Each display configures based on which button is pressed:

• PFD 1: Left audio panel button
• MFD: Left OR right audio panel button
• PFD 2: Right audio panel button`},{id:"seed-102",category:"Cockpit Controls",question:`What does the SIGNS/OUTLET switch do in each of these positions?

1. PED-BELTS/OFF
2. BELTS/ON
3. OFF/ON`,answer:`PED-BELTS/OFF
• FASTEN SEAT BELTS signs: ON
• PED outlets: OFF
• Main door courtesy/safety lights: ON

BELTS/ON
• FASTEN SEAT BELTS signs: ON
• PED outlets: ON

OFF/ON
• Passenger signs: OFF
• PED outlets: ON`},{id:"seed-103",category:"Electrical",question:"What powers the Static Inverter and how is it controlled?",answer:`The Static Inverter is powered by the 28 VDC SHED BUS and protected by a Circuit Breaker.

It's a nonessential bus source, controlled manually by a switch on the cockpit main panel. This is the single way the flight crew can turn it off without leaving their seats (below 10,000 ft) by setting the SIGNS/OUTLET switch to PED-BELTS/OFF.`},{id:"seed-104",category:"Electrical",question:"When does the Static Inverter automatically remove AC power from the outlets?",answer:`Two situations:

1. GFCI trip: When current at the 110 VAC/60 Hz outlets (passenger seats, lavatory, RH forward cabinet, cockpit) exceeds a predetermined value. The internal Ground Fault Circuit Interrupter cuts power and allows convenient testing/re-testing.

2. Passenger oxygen masks deployed: AC power is automatically removed when the masks drop.`},{id:"seed-105",category:"Preflight",question:"What does the Phenom 100 emergency equipment include?",answer:`Standard:
• Cabin portable fire extinguisher
• Cockpit portable fire extinguisher
• Flashlight
• First aid kit
• Water barrier
• Passenger oxygen masks

Optional:
• Life vest
• Smoke goggles
• Protective Breathing Equipment (PBE)`},{id:"seed-106",category:"Pressurization",question:"When you push the DUMP button, what cabin altitude does the system climb to?",answer:`Depends on which control mode the system is in:

• AUTO control: 12,000 ft cabin altitude
• MANUAL control: 14,500 ft cabin altitude

The DUMP button opens the outflow valve for rapid cabin depressurization and commands the recirculation fans off. Push once to activate (white striped bar illuminates), push again to return to normal.`},{id:"seed-107",category:"Pressurization",question:"What does the CABIN ALTITUDE SELECTOR switch do in each position?",answer:`UP (momentary): Manually opens the outflow valve, increasing cabin altitude at approximately 300 ft/min.

DN (momentary): Manually closes the outflow valve, decreasing cabin altitude at approximately 300 ft/min.

NOTE: Manual actuation of the outflow valve is only possible with the PRESSURIZATION MODE switch set to MAN.`},{id:"seed-108",category:"Pressurization",question:"What do the colors mean on the Differential Pressure indicator?",answer:`GREEN (normal): Above -0.2 psid and below 8.5 psid

YELLOW (caution):
• -0.4 to -0.2 psid (inclusive)
• 8.5 to 8.6 psid (inclusive)

RED (warning): Below -0.4 psid or above 8.6 psid

RED X: Invalid, out of range, or failed

The indicator shows differential pressure between cabin interior and outside (in psi), regardless of operating mode.`},{id:"seed-109",category:"Pressurization",question:"What do the Air Shutoff Valve symbols mean on the synoptic page?",answer:`The valve shows as a circle with an internal line indicating position:

• CLOSED: White circle, white line perpendicular to the flow line
• OPEN PRESSURIZED: Green circle, green line aligned with the flow line
• OPEN UNPRESSURIZED: White circle, white line aligned with the flow line (no air bleed available)
• FAILED OPEN: Green circle, green line aligned with the flow line, covered by a yellow X
• FAILED CLOSED: White circle, white line perpendicular to the flow line, covered by a yellow X

Quick rule of thumb: Green = pressurized and good. White = no pressure. Yellow X = failed.`},{id:"seed-110",category:"Pneumatic System",question:"What is the function of the PRSOV (Pressure Regulating Shutoff Valve) in the bleed system?",answer:`Two main jobs:

1. Regulate the hot bleed air released to the ECS (Environmental Control System)
2. Provide firewall shutoff capability for the bleed air lines

There's one PRSOV per bleed line (two total).`},{id:"seed-111",category:"Pneumatic System",question:"When does the PRSOV automatically close?",answer:`Two situations:

1. Hot air leak detected: Sensors along the bleed air lines detect the leak, send a system failure message to the crew, and automatically command the affected side's PRSOV to close.

2. Single engine takeoff condition: PRSOV closes automatically.`},{id:"seed-112",category:"Pneumatic System",question:"How does the bleed manifold feed the ACS, and what controls cabin temperature?",answer:`The bleed manifold splits the bleed air flow into two paths:

1. Through the ECS HX (heat exchanger): Cooled by ram air in flight or a ground cooling fan on the ground.
2. Bypass: Goes around the heat exchanger.

The TMV (Temperature Modulating Valve) controls how much air goes through each path to keep cabin temperature within limits.

The pneumatic system also feeds utility services like the de-ice boots and door seal.`},{id:"seed-113",category:"Environmental Control",question:"What subsystems make up the ECS (Environmental Control System)?",answer:`Six integrated subsystems:

1. Bleed Air Inflow System (Pneumatic System)
2. Temperature Control System (TCS)
3. Vapor Cycle Air Conditioning System (VCS)
4. Air Distribution Ducting System
5. Emergency Ventilation System
6. Fresh Air Supply System (on ground)

The ECS runs on bleed air from the Pneumatic System. The Temperature Modulating Valve (TMV) controls how much hot bleed air is sent based on heating or cooling needs in each airplane zone.`},{id:"seed-114",category:"Environmental Control",question:"How does the Temperature Control System work, and what are the two control modes?",answer:`The system provides automatic, independent zonal temperature control for cabin and cockpit areas based on pilot selection.

How it works:
• Temperature sensors (TS) in the cabin and cockpit measure zone temperature
• Duct temperature switches (TSS) are mounted in the inflow ducting
• Two Temperature Modulating Valves (TMVs) mix cooled air from the heat exchangers with hot bleed air from the engines (PRSOVs)
• Heat exchangers are cooled by ram air in flight or ground cooling fan on the ground
• Each TMV independently controls cabin and cockpit duct temperatures

Two modes:
• Auto: System controls TMVs automatically
• Manual: Pilot controls duct temperatures via the AIR CONDITIONING panel`},{id:"seed-115",category:"Environmental Control",question:"What's the recommended max duct temperature in manual mode and why?",answer:`95°C (203°F) maximum.

This provides margin for pilot operation without triggering the overtemperature CAS messages. Duct temperatures display on the synoptic page to make it easier to manage manually.`},{id:"seed-116",category:"Environmental Control",question:"What is the FCSOV (Flow Control Shutoff Valve) and what does it do?",answer:"The FCSOV regulates air flow quantity to maintain adequate and safe supply pressure at any engine operating condition."},{id:"seed-117",category:"Environmental Control",question:"How does the VCS (Vapor Cycle Air Conditioning System) work?",answer:`The VCS provides additional cooling and is automatically activated by the temperature control system when needed.

Components:
• Vapor cycle machine with two independent refrigerant circuits (one for cabin, one for cockpit)
• Both circuits share a single compressor and condenser
• Each circuit has its own evaporator unit and pressure transducers for safe operation
• Refrigerant: R134A

How it cools:
• Refrigerant cycles through evaporation and condensation
• Evaporators pull heat out of cabin and cockpit air
• Condenser dumps the heat using ram air in flight or the ground cooling fan on the ground
• Evaporator fans double as recirculation fans, providing uniform airflow and temperature`},{id:"seed-118",category:"Environmental Control",question:"How does the Emergency Ram Air Ventilation system work?",answer:`The system consists of a ventilation flap valve installed in the emergency ventilation duct, connecting it to the ram air duct.

The valve is normally closed. It opens when the BLEED knob is positioned to OFF VENT (which closes both PRSOVs) in flight.`},{id:"seed-119",category:"Pressurization",question:"What does the Cabin Pressure Control System (CPCS) consist of?",answer:`Four components:

1. Electronic Control and Monitoring Unit (ECMU)
2. One Cabin Outflow Valve (OFV)
3. One Negative Relief Valve (NRV)
4. One Positive Relief Valve (PRV)

The CPCS operates in automatic and manual modes. Normal operation is automatic.`},{id:"seed-120",category:"Pressurization",question:"What functions does the Cabin Pressure Control System (CPCS) provide?",answer:`Six functions:

1. Cabin altitude limiting
2. Cabin decompression (due to leakage) prevention
3. Dump function for rapid cabin decompression
4. Automatic control of cabin pressure, rate of change, and differential pressure
5. Manual control of cabin pressure
6. Ability to switch between automatic and manual control

The system operates up to a 41,000 ft ceiling (cabin altitude approximately 8,000 ft). The CABIN ALTITUDE HIGH alarm activates at 10,000 ft.`},{id:"seed-121",category:"Pressurization",question:'What three conditions trigger the CPCS "Flight Abort Mode," and what does it do?',answer:`All three conditions must be met:

1. Aircraft altitude after takeoff has never exceeded 6,000 ft above the TO field elevation
2. Aircraft flight time is less than 10 minutes
3. Aircraft starts to descend

When triggered, the CPCS sets the Landing Field Elevation (LFE) back to the takeoff LFE instead of the destination LFE. This schedules the cabin pressure properly and prevents the system from pressurizing to a different LFE.

This is the same Return-to-Field logic from your CAE notes.`},{id:"seed-122",category:"Pressurization",question:"What does the Outflow Valve (OFV) do?",answer:`The OFV modulates airflow from the pressurized cabin to the surrounding environment.

It can be modulated automatically or manually.`},{id:"seed-123",category:"Pressurization",question:"What are the Negative Relief Valve (NRV) and Positive Relief Valve (PRV) and when do they open?",answer:`Both are mechanically actuated valves that stay closed during normal operations.

They only open if the differential pressure limits are reached, to prevent over and under pressurization of the fuselage that could cause structural damage to the airplane.`},{id:"seed-124",category:"Autopilot",question:"What conditions cause an abnormal autopilot disconnect?",answer:`Six conditions:

1. Autopilot is not available
2. Stall Warning is active
3. Manual trim switch is active
4. Backup Pitch Trim channel is selected
5. Roll attitude is beyond ± 45 degrees
6. Pitch attitude is beyond ± 25 degrees`},{id:"seed-125",category:"Autopilot",question:"How does the autopilot indicate a mistrim condition?",answer:`The system constantly monitors servo effort. When it exceeds a certain threshold, a mistrim is annunciated:

• AP PITCH MISTRIM message is displayed (no other indication for pitch mistrim)
• AP ROLL MISTRIM message is displayed, plus a yellow arrow on the roll trim indicator pointing in the direction of mistrim`},{id:"seed-126",category:"Autopilot",question:"What does the CWS (Control Wheel Steering) button do?",answer:`Pressing and holding CWS lets you hand-fly the airplane without disengaging the autopilot.

While CWS is held:
• Pitch and roll servos disengage from the flight control surfaces
• Flight director synchronizes to airplane attitude during the maneuver
• Pitch trim operation is interrupted
• Yaw damper engagement is unaffected
• The 'AP' annunciation is temporarily replaced by 'CWS' in white

When you release CWS:
• Autopilot re-engages with a new reference (depending on Flight Director active mode)`},{id:"seed-127",category:"Autopilot",question:"In FLC mode, how do you change the airspeed reference, and when does it auto-switch between IAS and Mach?",answer:`Two ways to change the airspeed reference:

1. Use the SPD SEL knob
2. Hand-fly to a new airspeed reference with the CWS button pressed

Auto-switch between IAS and Mach:
• Climb: IAS → Mach when 31,500 ft or 0.55 M is reached
• Descent: Mach → IAS when 30,500 ft or 250 kt is reached`},{id:"seed-128",category:"Autopilot",question:"What is Low Bank Mode and how do you select it?",answer:`Low Bank Mode limits the flight director's maximum commanded roll angle to 15°.

It can be manually selected or deselected by pressing the BANK button while in Heading Select or Navigation Modes (GPS and VOR).`},{id:"seed-129",category:"Electrical",question:"What does the ELECTRICAL EMERGENCY BUTTON do when pushed in?",answer:`Pushing it in overrides the EPGDS (Electrical Power Generation and Distribution System) automatic transfer to the electrical emergency circuitry.

The batteries connect directly to the EMERGENCY BUS, regardless of any other command from the Electrical Distribution Logic.`},{id:"seed-130",category:"Electrical",question:`What does the BUS TIE knob do in each of these positions?

1. AUTO
2. 1 OPEN
3. 2 OPEN`,answer:`AUTO: Allows the EPGDS (Electrical Power Generation and Distribution System) to automatically operate BTC1 and BTC2. Both buses are tied through the contactors during normal ops.

1 OPEN: Opens BTC1, isolating DC BUS 1. BTC2 still operates automatically.

2 OPEN: Opens BTC2, isolating DC BUS 2. BTC1 still operates automatically.

What "isolating a DC bus" means: The Bus Tie Contactors normally connect the two networks so a single generator can power both DC BUS 1 and DC BUS 2 if needed. Opening a BTC breaks that cross-tie, so the affected DC bus is fed only from its own side. In any non-normal source configuration, the system also automatically drops the SHED BUS in flight to prevent overload on the remaining source.

BTC = Bus Tie Contactor.`},{id:"seed-131",category:"Electrical",question:"During normal operation with both BATT 1 and BATT 2 switches ON, where are the batteries connected and what charges them?",answer:`Battery 1: Connected to the EMERGENCY BUS, charged by SG 1 (Starter Generator 1).

Battery 2: Connected to the CENTRAL BUS, charged by SG 2. Also provides electrical power for engine starting.

If not in an electrical emergency, the batteries are constantly charged by any source, including the GPU.`},{id:"seed-132",category:"Electrical",question:"Where are the three Power Distribution Units (PDUs) located?",answer:`LPDU (Left Power Distribution Unit): Rear electronic bay (temperature and pressure controlled)

RPDU (Right Power Distribution Unit): Rear electronic bay (temperature and pressure controlled)

EPDU (Emergency Power Distribution Unit): Nose electronic bay (NOT temperature or pressure controlled)

Additional info: The PDUs are part of the EPGDS (Electrical Power Generation and Distribution System), which also includes two main DC channels, one external power receptacle, and two batteries. The PDUs are electrical-electronic integrated devices that handle power distribution, electrical load protection, and interface with other systems.`},{id:"seed-133",category:"Electrical",question:"Which buses are on the LH and RH circuit breaker panels?",answer:`LH circuit breaker panels:
• DC BUS 1
• HOT BATT BUS 1 (main CB panel only)
• EMERGENCY BUS

RH circuit breaker panels:
• DC BUS 2
• HOT BATT BUS 2 (main CB panel only)
• EMERGENCY BUS
• SHED BUS`},{id:"seed-134",category:"Electrical",question:"What is the QSC (Quiet Start Contactor) and what does it do?",answer:`During a battery engine start, the QSC isolates Battery 2 from the rest of the electrical system. Battery 2 is then dedicated solely to powering the starter, while Battery 1 continues to power the rest of the airplane (avionics, displays, etc.).

This is what makes it a "quiet" start. The rest of the system doesn't experience the voltage sag from the heavy cranking load.

During normal operation (engines running on SGs), the QSC is open along with the BTC1 and EBC2 in the split-bus configuration.`},{id:"seed-135",category:"Fuel System",question:"What three things does the engine fuel system provide?",answer:`1. Fuel pressurization
2. Filtering
3. Heat exchange`},{id:"seed-136",category:"Fuel System",question:"How is the fuel tank divided, and how does fuel get from the wing to the engine?",answer:`Each side has 3 tanks:
• Main tank
• Collector tank
• Surge tank

Primary ejector pump: Driven by high-pressure fuel from the engine. Delivers engine burn flow from the collector tank to the Fuel Metering Unit (FMU) inlet.

Transfer ejector pump: Driven by primary ejector discharge pressure. Induces fuel from the wing to the collector tank, keeping the collector tank full until the wing tank is exhausted.

Each engine has its own supply and dedicated piping.`},{id:"seed-137",category:"Fuel System",question:"How is fuel pressurized for delivery to the engine?",answer:`A two-stage boost pump pressurizes the fuel. It includes:

• An inducer
• A regenerative pump

Both stages are driven by the AGB (Accessory Gearbox) drive gear. The pressurized fuel is then transferred to the AGB-mounted FOHE (Fuel/Oil Heat Exchanger) module.`},{id:"seed-138",category:"Fuel System",question:"What is the FMU (Fuel Metering Unit) and what are its major functions?",answer:`The FMU is controlled by the FADEC. It meters and distributes the proper amount of fuel for combustion to the injectors under all operating conditions. It also controls the shutoff valve used during normal shutdowns and provides uncontrolled thrust protection.

Major functions:

1. Pressurization of fuel supply
2. Regulation of burn fuel flow
3. Division of primary and secondary flow
4. Engine shutdown in normal and shaft shear circumstances
5. Supply of motive fuel flow for airframe usage
6. Prevention of discharge of fuel after engine shutdown`},{id:"seed-139",category:"Engines",question:"What does the oil filter do, and what happens if it gets clogged?",answer:`The oil filter traps foreign particles picked up by the oil as it lubricates the engine components.

If the filter becomes clogged, an internal filter bypass allows oil flow to continue through the system at the normal rate, preventing oil starvation.

The filter impending bypass switch monitors differential pressure across the filter. An internal mechanism prevents the switch from actuating when the oil is cold and viscous (so you don't get false warnings on a cold start).

The oil filter and its electrical monitoring sensors are combined in an oil filter module mounted on the left side of the oil tank.`},{id:"seed-140",category:"Engines",question:"How do you know visually that the oil filter needs to be replaced?",answer:"The oil filter impending bypass indicator is installed on the oil filter itself. A red button pops up to indicate that the oil filter must be replaced."},{id:"seed-141",category:"FADEC",question:"When will the FADEC automatically command both igniters on?",answer:`Two situations:

1. On the ground with temperatures below 0°C (32°F)
2. Doing a start while airborne`},{id:"seed-142",category:"FADEC",question:"At what altitude does the FADEC use Swing Start logic, and how does it work?",answer:`Swing Start is used for in-flight starts above 15,000 ft to improve relighting performance.

How it works:

Instead of running the starter continuously, the FADEC cycles the starter on and off to keep N2 speed within a window that maximizes the chance of relight:

• High threshold: 10% N2 (or 11.5% during an Electrical Emergency Start)
• Low threshold: Varies based on altitude

The cycle:
1. Starter ON until N2 hits the high threshold
2. If no relight is detected, starter turns OFF
3. N2 decays until it hits the low threshold
4. Starter turns back ON, N2 builds back to high threshold
5. Repeat

Limits:
• FADEC performs this cycle up to 3 times
• After the third cycle, the starter stays ON, and it's the crew's responsibility to abort the start
• Fuel flow and ignition stay commanded throughout the swing

If relight is detected at any point: The starter stays ON until N2 reaches 44%.`},{id:"seed-143",category:"FADEC",question:"When will moving the ENG START/STOP knob to STOP NOT shut down the engine?",answer:`If the ENG START/STOP knob is moved to STOP but the thrust lever (TLA) is not reduced to idle within 5 seconds, the FADEC will disregard the STOP selection and will not shut down the engine.

This is a safety feature to prevent engine shutdown due to spurious commands.

To shut down normally, both must occur: TLA at idle AND ENG START/STOP knob to STOP.

In an emergency, the engine fuel SHUTOFF button can also be used to cut off fuel to the engine.`},{id:"seed-144",category:"FADEC",question:"What does the FADEC do, and how does it control thrust?",answer:`The FADEC (Full Authority Digital Engine Control) controls engine operation, performance, and efficiency through full and progressive modulation in response to TLA (Thrust Lever Angle) movements. It also provides engine limit protection during ground starting.

How it controls thrust:

• Above idle: Engine thrust is directly related to N1 speed. FADEC calculates an N1 setting based on TLA position and compensates for ambient temperature, pressure altitude, bleed valve position, and operating modes.

• At idle: N2 is in thrust control, providing N2 governed idle speed.`},{id:"seed-145",category:"FADEC",question:"How does the FADEC's two-channel architecture work?",answer:`The FADEC has two identical isolated channels.

• One channel is in-control, providing the electronic control outputs
• The other channel runs in standby, processing all inputs and software, ready to take over if the active channel fails
• Built-in test features trigger an automatic channel switchover when a critical internal component malfunction is detected
• During operation with both channels healthy, the software alternates which channel is in control with each engine start`},{id:"seed-146",category:"FADEC",question:"How is the FADEC powered, and what's the backup power source?",answer:`The FADEC is primarily powered by a 28 VDC source.

Once the engine has achieved idle speed, if a failure or interruption occurs on the power source supply, both FADEC channels automatically revert to the engine-driven PMA (Permanent Magnet Alternator).

Both FADEC Channel A's are also connected to the EMERGENCY BUS, which assures power supply for engine starting during electrical emergency conditions.`},{id:"seed-147",category:"FADEC",question:"What is ATR (Automatic Thrust Reserve), and what activates it?",answer:`The ATR is controlled by the FADEC. When armed, it automatically provides maximum engine thrust reserve (TO RSV) under specific conditions.

ATR auto-activates when armed AND thrust levers are at least at TO/GA position AND any of these occur:
• N1 difference between engines is greater than 20%
• Loss of communication between both engines
• One engine failure during takeoff

ATR also activates whenever both engines are operating and both thrust levers are positioned to MAX (with ATR armed).

Selection: ATR status (ON/OFF) is selected via the MFD bezel on the Takeoff Data Set Menu. If no selection is made before takeoff, the system defaults to ON.

Indication when ATR activates:
• Green ATR indication on the MFD disappears
• Cyan thrust mode displays with an additional "RSV" indication`},{id:"seed-148",category:"FADEC",question:"What are the five idle mode selections?",answer:`1. Flight Idle without Anti-Ice
2. Flight Idle with Anti-Ice
3. Approach Idle without Anti-Ice
4. Approach Idle with Anti-Ice
5. Ground Idle

Idle mode is automatically selected by the FADEC based on inputs from the airplane.`},{id:"seed-149",category:"FADEC",question:"When does Flight Idle activate, and what does it provide?",answer:`Activation conditions (both required):
• Weight off wheels
• Approach idle NOT selected

What it provides:
The minimum thrust necessary to provide minimum engine bleed pressure to the airplane.

Flight Idle N2 provides a mechanical governing reference as a function of altitude and can change based on anti-ice bleed requirements.`},{id:"seed-150",category:"FADEC",question:"When does Approach Idle activate, and how does it differ from Flight Idle?",answer:`Activation conditions (both required):
• Weight off wheels
• Approach mode set (flaps at position 1 or greater, OR landing gear down and locked)

Key difference from Flight Idle:
Approach Idle is the same as Flight Idle without Anti-Ice, regardless of the engine ice protection switch position. So even with anti-ice on, you get the same N2 governing reference as you would without anti-ice.

It also provides mechanical N2 governing as a function of altitude.`},{id:"seed-151",category:"FADEC",question:"What is Ground Idle?",answer:`Ground Idle is the minimum thrust setting.

It provides a stable and minimum engine thrust level for ground operations.`},{id:"seed-152",category:"FADEC",question:"What is the TT0 probe heating system, and when does it activate?",answer:`The TT0 probe is mounted in the engine inlet duct and contains two independent resistance temperature devices that feed temperature data to each FADEC channel.

Why it's heated: To avoid significant loss of thrust when operating in icing conditions.

TT0 heater activates when BOTH of these are true:
• TT0 reading is below 10°C with the engine running on ground, OR TT0 is below 15°C in the air
• ENG 1 and ENG 2 Switches (Ice Protection) are selected ON

Ice crystal detection (FADEC software 5.3 and on):
• Active above 4,000 ft where ice crystal formations are more likely
• After ENG 1 and ENG 2 switches are turned ON, if the ice does not melt, the CAS message "E1 (2) TT0 PROBE ICE" is triggered after 2 minutes`},{id:"seed-153",category:"Fire",question:"Which electrical buses power the Engine Fire Protection System?",answer:`Two buses:

• Engine fire detection: EMERGENCY BUS
• Engine fire extinguishing: HOT BATT BUS 1

The Engine Fire Protection System provides both fire detection and extinguishing.`},{id:"seed-154",category:"Fire",question:"What does the engine fire detector system look like, and how is it wired?",answer:`Each engine has a single loop fire detector installed in close proximity to the main flammable fluid components inside the engine cowl. This placement maximizes the chance of detecting an engine compartment overheat or fire.

Wiring:
• Engine 1 loop connects to GEA 1 (Garmin Engine and Airframe unit)
• Engine 2 loop connects to GEA 2
• Both GEAs receive and process the electrical signals

The system detects both overheat AND fire conditions. A CAS message displays if a fault is detected in the fire detector system itself.`},{id:"seed-155",category:"Fire",question:"What indications do you get in the event of an engine fire or overheat?",answer:`Four indications:

1. Aural warning sounds
2. "FIRE" icon displayed in the respective engine ITT indication
3. CAS messages displayed
4. SHUTOFF button lights red indicating the FIRE condition (red light remains ON while the fire condition persists)

The fire button on the test control panel simulates a fire condition on the engines and activates the fire alarms, used to verify integrity of the detection system.`},{id:"seed-156",category:"Fire",question:"What happens when you push an engine SHUTOFF button (SHUTOFF 1 or 2)?",answer:`Three things happen:

1. Closes the respective side fuel and bleed shutoff valves
2. Enables the fire extinguisher bottle discharge (arms the bottle, doesn't fire it yet)
3. A white strip lights up to indicate the SHUTOFF button has been pressed

The ENG FIRE EXTINGUISHER control panel has one SHUTOFF button per engine plus the BOTTLE (extinguishing) switch.`},{id:"seed-157",category:"Fire",question:"After pushing SHUTOFF and discharging the bottle, how do you know the fire is still active?",answer:`Four indications continue if the fire/overheat condition persists:

1. SHUTOFF button red light stays on
2. "FIRE" message in the ITT field on the EICAS continues
3. CAS message E1 (2) FIRE in the CAS window continues
4. Aural warning FIRE is still heard`},{id:"seed-158",category:"Fire",question:"What happens when you set the BOTTLE switch to DISCH?",answer:`Two things:

1. Extinguishing agent is released to the engine that was selected by the SHUTOFF button
2. The CAS message ENG FIREX DISCH comes into view in the CAS window

The bottle only discharges to the engine whose SHUTOFF button was pressed. That's why selecting the right SHUTOFF button first matters.`},{id:"seed-159",category:"Fire",question:"How do you know the fire/overheat condition has been extinguished?",answer:`Four indications go away:

1. FIRE message disappears from the ITT field of the EICAS
2. SHUTOFF button red light goes off
3. CAS message E1 (2) FIRE goes out of view from the CAS window
4. Aural FIRE warning is cancelled`},{id:"seed-160",category:"Controls",question:"What is the Pitch Trim System made up of?",answer:`Two components:

1. Trim Actuator Controller (TAC)
2. Trim Actuation System

The TAC's job:
• Processes input commands from the airplane
• Controls actuation of the trim
• Monitors the trim system
• Ignores trim commands while the Quick Disconnect button is pressed

The system can operate in normal or backup mode.`},{id:"seed-161",category:"Controls",question:"What is the 3-second pitch trim limit, and why does it exist?",answer:`The TAC (Trim Actuator Controller) imposes a 3-second limit on any pitch trim command.

If you need to continue trimming after 3 seconds, you must release the switch and press it again.

This prevents a stuck or runaway trim switch from continuously trimming the airplane out of position.`},{id:"seed-162",category:"Controls",question:"How does Normal Mode pitch trim work, and what is the command priority order?",answer:`Normal mode is engaged when the Pitch Trim MODE switch is at the OFF position on the TRIM control panel.

In normal mode, the pitch trim can be operated by:
• Manual electric trim (pilot or copilot pitch trim switches)
• Auto Trim (when autopilot is engaged)

Position indication of each pitch trim tab is shown on the MFD. Trim rate is high or low based on airspeed.

Command priority order:
1. Pilot pitch trim switch
2. Copilot pitch trim switch
3. Auto Trim`},{id:"seed-163",category:"Controls",question:"How does Manual Electric Pitch Trim physically move the trim tabs?",answer:`The crew commands trim through the pitch trim switches on the control wheels.

Signal path:
1. Switch command → avionics
2. Avionics → TAC 1 (Trim Actuator Controller)
3. TAC 1 operates the LH actuator attached to the left elevator trim tab

Master/slave configuration:
The LH actuator is the master. When it operates, it drives the RH actuator (right elevator trim tab) through an interconnecting flex shaft.

Auto Trim:
When the autopilot is engaged, automatic pitch trim commands the PTA (Pitch Trim Actuator) to relieve the elevator servo effort being maintained.`},{id:"seed-164",category:"Controls",question:"How does Backup Mode pitch trim work, and when do you use it?",answer:`Use it when: The CAS message PTRIM NML FAIL indicates a pitch trim normal mode failure. The pilot or co-pilot sets the Pitch Trim MODE switch to BKP on the TRIM control panel.

Important limitation: Auto Trim does NOT work in backup mode. Manual only.

Signal path (different from normal mode):
• Commands come from the pitch trim backup switch
• Signals go directly to TAC 2 (not TAC 1)
• TAC 2 operates the RH actuator as the master
• RH actuator then drives the LH actuator through the flex shaft (master/slave is reversed from normal mode)

Trim rate: Fixed medium rate (no high/low based on airspeed like in normal mode).`},{id:"seed-165",category:"Controls",question:"What is the flap system, and what components make up the Flap Actuation System (FAS)?",answer:`The flap system has one fowler flap panel on each wing (2 panels total).

The flaps are commanded by the Flap Actuation System (FAS), a complete electromechanical system with electronic synchronization for position monitoring and control.

FAS components:

1. Flap Selector Lever (FSL)
2. Flap System Control Unit (FSCU)
3. Flap Linear Actuator (FLA)
4. Flap Position Sensor Unit (FPSU)`},{id:"seed-166",category:"Instruments",question:"What is the ADS (Air Data System) and what are the three systems?",answer:`The ADS provides primary air data information to the PFDs, MFD, IESI, flight controls, and other avionics as required.

Three ADS systems:

1. ADS 1: Pitot 1, Static port 1 (S2), Static port 2 (S1), and ADC 1
2. ADS 2: Pitot 2, Static port 2 (S2), Static port 1 (S1), and ADC 2
3. ADS Standby: Pitot-static and IESI

What the ADC computes: It receives data from the appropriate sensors and provides:
• Pressure altitude
• Vertical speed
• Airspeed values
• Air temperature information
• Density altitude

These outputs are used by various airplane systems.`},{id:"seed-167",category:"Instruments",question:"Which ADS feeds each display normally, and how does reversion work if an ADC fails?",answer:`Normal operation:
• PFD 1 and MFD: ADS 1
• PFD 2: ADS 2

Reversion logic if ADC 1 fails:
• PFD 1 automatically reverts to ADC 2
• If ADC 2 then also fails, PFD 1 reverts to ADC Standby (this also applies during electrical emergency)

Same logic applies if ADC 2 fails first.

Manual reversion to a different operative ADC is also available during normal and abnormal operations.`},{id:"seed-168",category:"Instruments",question:"What three main functions does the IESI (Integrated Electronic Standby Instrument) compute and display?",answer:`1. Attitude (pitch and roll)
2. Barometric pressure (standard or barometric-corrected)
3. Indicated airspeed`},{id:"seed-169",category:"Instruments",question:"What secondary functions does the IESI display?",answer:`Eight secondary functions/displays:

1. Indicated Mach number
2. VMO/MMO
3. Lateral acceleration/slip indication
4. Vertical speed
5. ILS
6. Barometric pressure
7. Altitude in meters
8. Heading`},{id:"seed-170",category:"Instruments",question:"How is the IESI powered, and what's the rule about its 90-second alignment?",answer:`Power:
• IESI is powered whenever the airplane is energized
• Primarily powered by the EMERGENCY BUS
• During an electrical emergency, continues to operate on batteries
• If the EMERGENCY BUS fails, automatically switches to DC BUS 1

Alignment phase:
• Takes about 90 seconds to complete after power-up
• Identified on the screen by the ALIGNING flag

Critical rule:
The airplane must NOT be moved during the first 90 seconds after power-up while the IESI is aligning. Moving the airplane during alignment can cause in-flight attitude indication errors that are not noticeable on ground.`},{id:"seed-171",category:"Instruments",question:"What is the AHRS, and what two systems are installed?",answer:`The AHRS (Attitude and Heading Reference System) provides accurate attitude, accelerations, rates, and heading information to the flight crew.

Two identical, independent systems:
• AHRS 1: Source data from GRS 1 and GMU 1
• AHRS 2: Source data from GRS 2 and GMU 2`},{id:"seed-172",category:"Instruments",question:"Which AHRS feeds each display normally, and how do you change the source?",answer:`Normal source assignment:
• AHRS 1 is the primary source for PFD 1, MFD, and IESI
• AHRS 2 is the primary source for PFD 2

Changing source: AHRS source selection is available through the softkeys at the bottom of the PFDs.`},{id:"seed-173",category:"Instruments",question:"What components make up each AHRS, and what role does each play?",answer:`Each AHRS is made up of two components:

GRS (Garmin Reference System):
• Uses a combination of internal solid-state sensors and external input data to determine airplane heading and attitude
• External inputs: magnetometer, one air data computer, and two GPS units
• Powers the GMU

GMU (Garmin Magnetometer Unit):
• Provides magnetic information to the GRS
• Powered by the GRS
• On ground, the GMU may be affected by magnetic sources or metallic structures`},{id:"seed-174",category:"Instruments",question:"How does AHRS reversion work if one AHRS fails?",answer:`If AHRS 1 fails:
• PFD 1 automatically reverts to AHRS 2
• If AHRS 2 then also fails, PFD 1 reverts to IESI (this also applies during electrical emergency)

Same reversionary logic applies if AHRS 2 fails first.`},{id:"seed-175",category:"Avionics",question:"Where are the two VHF antennas installed?",answer:`VHF 1: Top of the fuselage
VHF 2: Bottom of the fuselage

Additional info:
The antennas are installed as far apart as possible on the fuselage, but the airplane size doesn't allow enough space to fully avoid VHF interference. To minimize interference, the system attenuates the received signal on one antenna while the other is transmitting.

Depending on signal power, this attenuation may cut the reception signal of the radio that's not transmitting. If the received signal has enough power (the airplane and transmitting station are closer), the crew will still receive the communication normally.`},{id:"seed-176",category:"Avionics",question:"What does the CVDR record, and how much can it hold?",answer:`The CVDR (Cockpit Voice and Data Recorder) combines Flight Data Recorder and Cockpit Voice Recorder functions in a single solid state LRU.

Recording capacity:

Audio: Most recent 120 minutes from four input channels (only 3 used)
• 1 channel from the Cockpit Area Microphone (CAM)
• 2 channels from the primary crew microphones
• Includes voice communications, radio audio, mic signals, and Nav ident signals sent to headsets or speakers

Flight Data: Most recent 25 hours at a rate of 256 data words per second`},{id:"seed-177",category:"Avionics",question:"What is the Underwater Locator Device (ULD), and how long does its battery last?",answer:`Each CVDR and FDR has one ULD equipped with a battery that has a life expectancy of 6 years.

The ULD helps locate the recorders if the airplane is submerged.`},{id:"seed-178",category:"Avionics",question:"What is the purpose of the impact switch on the CVDR and FDR?",answer:`The impact switches remove electrical power from the recording system when the airplane experiences an impact.

This preserves the most recent recording instead of letting it be overwritten by continued operation after a crash.`},{id:"seed-179",category:"Avionics",question:"How and when do you perform the CVR pre-flight test, and what indicates a pass?",answer:`When to perform:
• Before every flight, OR
• After any maintenance that may have affected the CVR function

Conditions required for the indications to be visible:
• VDR Lever Lock Switch in TEST HOLD 5 SEC position
• WOW is TRUE (on ground)
• Parking Brake is set

How to test:
1. Wait at least 60 seconds after power-on
2. Hold the VDR Lever Lock Switch in the TEST HOLD 5 SEC position for a minimum of 5 seconds

Pass indication:
• A tone is audible through the crew headsets (must be connected to the VDR panel)
• The CVR PASS indication on the VDR panel turns green`},{id:"seed-180",category:"Fuel System",question:"How is the fuel tank vented, and what does the float valve do?",answer:`The vent system keeps the differential pressure between the tank and ambient within structural limits and prevents fuel spillage during flight maneuvers and abrupt braking.

Vent path:
• Each fuel tank is vented through a NACA air inlet/outlet flush intake in the lower surface of the wing
• Located 1.9 meters inboard of the wing tip
• Vent lines provide adequate capacity, supplemented by a float valve to protect from overpressurization

Float valve operation:
• Fuel level decreases (in the wing tank): float valve opens to vent pressure from the outboard area of the wing tank
• Fuel level rises (due to maneuvers or refueling): float valve closes to prevent fuel spillage into the surge tank`},{id:"seed-181",category:"Fuel System",question:"How is fuel quantity measured, and what happens if you lose one wing tank quantity indication?",answer:`A capacitive system measures fuel quantity in each tank. The system is self-calibrated and requires no adjustment.

The signal from each tank is processed through a fully segregated channel of the EFCU (Electronic Fuel Control Unit) and transmitted to the cockpit.

If you lose one wing tank quantity indication, the total tank quantity indication will also be lost.`},{id:"seed-182",category:"Fuel System",question:"Where is the fuel temperature sensor located?",answer:`In the left collector tank.

The EFCU monitors the resistance value of the sensor and provides the fuel temperature for display on the MFD.`},{id:"seed-183",category:"Fuel System",question:"What pumps are in each engine fuel feed system?",answer:`Three pumps in each fuel tank:

1. Ejector fuel pump (primary, no moving parts, powered by engine motive flow)
2. Scavenge ejector pump
3. Electric fuel boost pump (DC auxiliary)

The left and right engine fuel feed systems are completely independent. Closing one engine's fuel shutoff valve does not affect fuel availability to the other engine.`},{id:"seed-184",category:"Fuel System",question:"How does the EFCU (Electronic Fuel Control Unit) get powered?",answer:`Two channels with separate power:

• Left channel: EMERGENCY BUS
• Right channel: DC BUS 2

The DC auxiliary pumps in each collector tank are also powered by the EMERGENCY BUS and controlled by the EFCU.`},{id:"seed-185",category:"Fuel System",question:"What does each pump in the fuel feed system do?",answer:`Ejector fuel pump: Primary pump. Venturi (jet pump) design with no moving parts, powered by engine motive flow. Self-sustained, requires no electrical power.

Scavenge pump: Maintains fuel level in the collector tank, even during uncoordinated maneuvers. Ensures constant fuel flow to the engine during normal flight.

Electric fuel boost pump: Installed in each wing collector tank. Provides pressurized fuel for engine starting. During start or low pressure conditions, the EFCU automatically controls operation when the FUEL PUMP switch is in AUTO.`},{id:"seed-186",category:"Fuel System",question:"Is there crossfeed between engines, and how is fuel imbalance corrected?",answer:`No crossfeed capability between engine fuel feed systems.

In the event of fuel imbalance (e.g. after engine failure), lateral balance is maintained by gravity transfer through the interwing fuel transfer valve.

Procedure:
1. Level the wings and trim the airplane correctly BEFORE opening the fuel transfer valve.
2. With the transfer valve open, if imbalance doesn't correct, apply short-period rudder pedal or rudder trim inputs to produce a sideslip toward the heavy wing.

Example: If the left wing is heavy, apply left rudder pedal or yaw trim to the left.`},{id:"seed-187",category:"Fuel System",question:"What is the fuel shutoff valve and when does it close?",answer:`The fuel shutoff valve is installed in each wing feed line to prevent hazardous quantities of fuel from flowing into the fire zones.

Normally open. Only closes when the fire shutoff pushbutton in the cockpit is actuated.`},{id:"seed-188",category:"Fuel System",question:"What fuel-related warnings does the EFCU provide?",answer:`Five warnings:

1. Each collector tank level is below 90 kg (198 lb)
2. Imbalance between both wing tanks reaches 100 kg (220 lb)
3. Low pressure at each engine inlet
4. Pressure switch fail to detect low pressure at each engine inlet
5. Fuel level exceeds maximum allowed limit in the tank when the interwing transfer valve opens`},{id:"seed-189",category:"Fuel System",question:"How is the airplane refueled and defueled?",answer:`Refueling:
• Done via a gravity filler neck on the top surface of each wing, which prevents fuel capacity exceedance
• If complete refueling isn't needed, you can fill both wings from one side by opening the interwing transfer valve, up to 60% of total fuel capacity

Defueling:
• Done via a dump valve located under each wing
• Connect an appropriate device and hose
• A water drain valve is fitted inside each dump valve`},{id:"seed-190",category:"Hydraulic",question:"What does the Phenom 100 Hydraulic Power Generation System consist of, and what does it operate?",answer:`Components:
1. Hydraulic power pack
2. Hydraulic accumulator
3. Nitrogen charging valve
4. Pressure gauge
5. Temperature switch

What it operates:
• Landing gear
• Brakes
• Emergency brake`},{id:"seed-191",category:"Hydraulic",question:"What kind of hydraulic pump does the Phenom 100 use, and what's its operating pressure?",answer:`A single positive fixed displacement pump of the vane type.

Operating pressure: 3,000 psig (nominal)

The pump is located in the reservoir and is driven by an electric motor.`},{id:"seed-192",category:"Hydraulic",question:"What bus powers the hydraulic pump motor?",answer:`The hydraulic pump is driven by a brush-type 28 VDC electric motor powered from the Central Bus.

In normal operation, the Central Bus is fed by DC Bus 2 through Generator 2.

Additional info:
• A coupling between the motor and pump transmits torque
• The motor has thermal protection that automatically shuts it off in case of overload or locked rotor
• A ventilation system keeps the electric motor within the adequate temperature range on the ground`},{id:"seed-193",category:"Hydraulic",question:"How does the hydraulic motor cooling fan work, and when does it run?",answer:`What it does:
A fan admits air from the nose landing gear bay and spreads it across the electric motor case through ducts.

Power source: DC Bus 2

Turns ON automatically when:
• Nose landing gear locks down, AND
• At least one electric generator is ON

Turns OFF automatically when:
• Nose landing gear unlocks down (gear up), OR
• Both electric generators are OFF`},{id:"seed-194",category:"Ice Protection",question:"What systems make up the Phenom 100 ice and rain protection system?",answer:`Five systems:

1. Wing and Stabilizer De-Ice System
2. Engine Anti-Ice System
3. Windshield Heating System
4. Windshield Rain Protection System
5. ADS Probes Heating System`},{id:"seed-195",category:"Ice Protection",question:"How does bleed air flow to the wing and stabilizer de-ice system in normal operation?",answer:`Both engines supply bleed air to a common manifold at the pressure regulator valve inlet.

The bleed air then passes through a heat exchanger to be warmed before entering the de-ice system.`},{id:"seed-196",category:"Ice Protection",question:"Walk through the wing and stabilizer de-ice cycle. What inflates first, and what's the timing?",answer:`When the WINGSTB switch is ON, the system runs an automatic 1-minute cycle:

Sequence (6 seconds inflation each):

1. Horizontal stabilizer — EFCV energizes, de-icer inflates for 6 seconds, then EFCV de-energizes and vacuum is applied
2. Outboard wing section — same 6-second inflation, then vacuum
3. Inboard wing section — same 6-second inflation, then vacuum

After all three sections inflate:
• All EFCVs are de-energized
• Vacuum is applied to all de-icers for the remaining 42 seconds

Total cycle: 60 seconds (3 × 6 sec inflation + 42 sec vacuum hold)

If the WINGSTB switch stays ON, the cycle repeats. It continues until the switch is turned OFF.`},{id:"seed-197",category:"Ice Protection",question:"What happens when you momentarily move the WINGSTB switch from OFF to ON?",answer:`The controller operates in single cycle mode.

It cycles through all EFCVs (stabilizer, outboard wing, inboard wing) plus a 6-second dwell time, then shuts off.

Useful for a one-shot de-ice without leaving the system continuously cycling.`},{id:"seed-198",category:"Ice Protection",question:"What happens to the stall warning system when WINGSTB is turned ON, and why does it matter?",answer:`What happens:
• Stall warning system activation angles are anticipated (triggered earlier)
• This means higher stall warning speeds in the airplane
• The CAS message SWPS ICE SPEED displays on the MFD

Why it matters:
Because stall speed effectively increases when WINGSTB is ON, you must comply with the AFM limitation minimum airspeed for WINGSTB switch activation before turning the system ON.

This guarantees the airplane is faster than the new (higher) stall warning speeds.`},{id:"seed-199",category:"Ice Protection",question:"How does the Engine Anti-Ice System work, and can engines share bleed air for it?",answer:`The system removes or prevents ice formation around the engine inlet cowls (lip) using hot bleed air from the related engine compressor (dedicated bleed port).

Bleed air supply:
• Always available to the system when the engine is running
• Each Engine Anti-Ice system is independent of the other engine
• Bleed air cannot be shared between engines`},{id:"seed-200",category:"Ice Protection",question:"What are the components of the Engine Anti-Ice System?",answer:`Six components:

1. Supply duct
2. Shutoff valve (EAI valve)
3. Flow limiter (venturi)
4. Pressure transducer
5. Piccolo tube
6. Exhaust vent`},{id:"seed-201",category:"Ice Protection",question:"How is the EAI (Engine Anti-Ice) valve actuated, and what is its fail-safe position?",answer:`The EAI valve is electrically controlled and pneumatically actuated.

To close the valve: The actuating solenoid must be energized.

Fail-safe position: With no electrical signal, the valve fails open. This ensures bleed air keeps flowing to anti-ice the engine even if power is lost.

Dispatch: The valve may be locked open to allow dispatch into icing conditions. Procedures are in the dispatch documents.`},{id:"seed-202",category:"Ice Protection",question:"What is the D-chamber and how does the piccolo tube heat the engine inlet?",answer:`D-chamber: The space formed by the inner surface of the engine inlet lip skin and the forward bulkhead.

Piccolo tube operation:
1. Anti-ice air enters the inlet connection and passes into the circular piccolo tube mounted inside the D-chamber
2. Air fills the piccolo tube and exits through holes along its length
3. The exiting air distributes over the inner surface of the inlet lip skin
4. The lip skin heats up, preventing ice formation on the outer surface

After heating the lip, the air flows toward the bottom and exits the D-chamber through an exhaust vent to the atmosphere.`},{id:"seed-203",category:"Ice Protection",question:"What does the windshield heating system look like, and how does each subsystem work?",answer:`The system consists of four independent subsystems (two per windshield).

Each subsystem includes:
• A heater mat integrated into the windshield
• Two temperature sensors regulated by a Windshield Heating Control Unit (WHCU) channel

Sensor roles:
• One sensor is used for control
• The other monitors for overheats AND serves as backup for control if the first sensor fails`},{id:"seed-204",category:"Ice Protection",question:"If one starter generator fails, which windshield section gets heated and why?",answer:`The WHCU (Windshield Heating Control Unit) uses generator ON/OFF status to control the system. With a single power source, the left windshield side has priority:

• If GEN 1 fails: The left section of the left windshield is heated
• If GEN 2 fails: The right section of the left windshield is heated

Either way, the pilot's side gets heat first.`},{id:"seed-205",category:"Ice Protection",question:"What does the ADS probes heating system protect, and how does it work?",answer:`The system prevents ice formation on:

1. Pitot probes
2. Dual static ports
3. Standby pitot
4. AOA sensors

How it works:
Built-in heating elements with self-regulating controls. The regulator controls the amount of power dissipated by the heater, keeping each probe free from ice accumulation throughout operating conditions.

This ensures precise readings on the associated instruments.`},{id:"seed-206",category:"Landing Gear",question:"What does the WARNING HORN button do?",answer:`It allows you to inhibit the landing gear warning, but only when both of these are true:

• The landing flap (full flaps) is not selected, AND
• The difference between airplane altitude and LFE (Landing Field Elevation) is lower than 700 ft

This lets you silence the gear horn when descending into a field with non-standard flap configuration.`},{id:"seed-207",category:"Landing Gear",question:"What are the main elements of the nose landing gear?",answer:`Several major elements:

Shock strut (with these components):
• Main fitting
• Turning cylinder
• Sliding tube, tire fork, and wheel axle
• Torque links

Other elements:
• Shimmy damper
• Retraction actuator
• Drag brace (resists drag loads)
• Locking stay (locks the drag brace)
• Down lock release actuator
• Doors mechanism
• Hydraulic pipes and hoses
• Electrical harness`},{id:"seed-208",category:"Landing Gear",question:"What do the torque links do, and what happens when you disconnect them?",answer:`Function:
The torque links connect the turning cylinder and the NLG fork. They transfer steering rotational movement from the steering device to the NLG wheel.

Disconnecting:
The torque links can be disconnected from the NLG fork by removing a lock pin. With the torque link disconnected, the nose wheel can rotate 360 degrees.

This is useful for towing in tight spaces.`},{id:"seed-209",category:"Landing Gear",question:"What does the shimmy damper do and how is it mounted?",answer:`Function:
The shimmy damper reduces possible vibration between the turning cylinder and the main fitting (the rotation movement) that can be induced during rolling on the ground.

Mounting:
• Housing → connected to the main fitting
• Axle → connected to the torque link`},{id:"seed-210",category:"Landing Gear",question:"Where is the emergency gear extension handle, and what do you do to extend the gear?",answer:`Location: Cockpit center pedestal.

Procedure:
1. Pull out the free-fall handle, then rotate clockwise
2. This activates the free-fall selector valve, which releases all residual hydraulic pressure in the landing gear lines to the return line
3. Gravitational and aerodynamic forces extend the landing gear
4. When extension is complete, the gear is locked in the fully extended position by the downlock mechanism

Pulling force: Will not exceed 10 kgf (22 lbf) with a full stroke.`},{id:"seed-211",category:"Landing Gear",question:"When do you see the three green DN indications after an emergency gear extension?",answer:`The three green DN indications (in boxes) appear on the display only after the LDG GEAR lever has been moved to the DN position.

The free-fall procedure alone is not enough to get the indications. You still need to physically place the gear lever in DN.`},{id:"seed-212",category:"Landing Gear",question:"What do you do if one main gear doesn't lock down after emergency extension, and how do you restore normal hydraulic operation?",answer:`If one main gear does not lock down:
Slip the airplane using aerodynamic drag to lock the affected leg.

To restore normal hydraulic operation:
Stow the emergency extension lever back to its initial position.`},{id:"seed-213",category:"Landing Gear",question:"What does the Landing Gear Position and Warning Subsystem consist of?",answer:`Four types of switches:

1. Proximity switches for the "down and locked" condition
2. Proximity switches for the "up and locked" condition
3. Proximity switches for Weight On Wheels (one per MLG)
4. Micro switches installed in the landing gear control lever

The system processes signals from these switches to provide gear position indications and CAS messages.`},{id:"seed-214",category:"Landing Gear",question:"How are the landing gear doors related to the gear position sensors?",answer:`Each landing gear door is mechanically linked to its respective landing gear.

Because of that link, the landing gear position sensors indicate that each gear AND its associated door are secured in the extended (or retracted) position.

You don't need separate door sensors. Door position is implied by the gear position.`},{id:"seed-215",category:"Landing Gear",question:"What do the Weight On Wheels (WOW) sensors do, and what triggers the LG WOW SYS FAIL message?",answer:`What they do:
The WOW proximity switches are actuated by airplane weight. They tell other airplane systems whether the airplane is on the ground or in-flight.

LG WOW SYS FAIL message:
Triggered by a disagreement between the signals from the right and left WOW sensors for more than 3 seconds.`},{id:"seed-216",category:"Landing Gear",question:"How does the main brake system work, and what bus powers the BCU?",answer:`The main brake is a brake-by-wire system controlled by either pilot or copilot via rudder pedals.

Signal path:
1. Rudder pedals actuate pedal transducers
2. Pedal transducers send brake inputs to the Brake Control Unit (BCU)
3. BCU controls both LH and RH brakes independently via the shutoff valve (SOV) and two brake control valves (BCVs)
4. Each wheel brake is commanded by a dedicated electro-hydraulic BCV

BCU power: Connected to DC BUS 2.

The BCU measures wheel speed transducer, pedal transducer, and pressure transducer outputs to send commands to the appropriate BCV.`},{id:"seed-217",category:"Landing Gear",question:"What functions does the brake system include?",answer:`Five functions:

1. Locked wheel protection
2. Antiskid protection
3. Touchdown protection
4. Spin brake
5. Integrated maintenance/Built-In Test (BIT)

If the main brake fails, the emergency/parking brake is available (must be used carefully to stop the airplane).`},{id:"seed-218",category:"Landing Gear",question:"How does locked wheel protection work, and what's the dropout speed?",answer:`How it works:
The system compares wheel speed between LH and RH brakes. If a wheel speed is at or below 30% of the reference velocity, it's detected as locked. The brake control module then releases brake pressure on the slower wheel to zero, allowing speed equalization.

Recovery:
Wheel speed must be greater than 35% of the reference speed before the brake pressure dump is removed.

Dropout speed: 30 kt (below this, function drops out, allowing differential braking for steering).

Note: If a wheel is deemed locked for more than the locked wheel protection time (up to 3 seconds), the ANTISKID FAIL CAS message triggers and antiskid is disabled on that wheel.`},{id:"seed-219",category:"Landing Gear",question:"What does antiskid protection do, and at what speed does it deactivate?",answer:`Function:
Prevents tire skidding and maximizes brake efficiency for the runway surface. The system controls hydraulic pressure to the brakes and reduces pressure if needed to recover wheel speed.

Deactivation:
For wheel speeds below 10 kt, antiskid is deactivated. This allows the pilot to lock a wheel and pivot on it.

Important: Antiskid is NOT available for the emergency/parking brake system.`},{id:"seed-220",category:"Landing Gear",question:"What is touchdown protection, and when is it deactivated?",answer:`Function:
Prevents the airplane from touching down with the main brakes applied, which would cause tire blowout at touchdown.

Deactivation (single wheel):
• Speed is above 35 kt, OR
• 5 seconds after WOW has sensed the ground

Deactivation (Post-Mod SB 500-32-0008, both wheels):
• Speed is above 35 kt, OR
• 3 seconds after WOW has sensed the ground

Inhibited during:
• Spin down braking
• In-flight test`},{id:"seed-221",category:"Landing Gear",question:"What is the spin brake function?",answer:`Stops the rotation of the main landing gear wheels after takeoff, within 4.5 seconds after gear retraction is initiated.

This prevents the main gear from being retracted with the wheels still spinning. A dedicated device inside the nose landing gear bay also stops the nose wheel from spinning.

For airplanes with the spoiler system installed, spin brake is inhibited if the hydraulic system fails (to preserve main brake accumulator output for landing).`},{id:"seed-222",category:"Landing Gear",question:"What are the three Built-In Test (BIT) functions in the brake system?",answer:`1. Start-Up Test (ST): Tests the BCU's internal processing capability. Briefly affects braking. Performed when stationary or at very low wheel speed.

2. Continuous Built-In Test (CBIT): Monitors the Brake Control System LRUs in normal use, in the air or on the ground. Background test, doesn't interfere with braking.

3. In-Flight Test (IFT): Checks critical functions like SOV and BCV operation prior to landing. For airplanes with spoiler system, IFT is inhibited if the hydraulic system fails (to preserve accumulator output for landing).`},{id:"seed-223",category:"Oxygen",question:"Where is the oxygen cylinder discharge indicator located, and what does it tell you?",answer:`Location: Fuselage skin on the left side of the forward baggage compartment door.

Function: A green disc that blows out in the event of a cylinder overpressure.

If the green disc is missing during preflight, the cylinder has overpressured and discharged.`},{id:"seed-224",category:"Oxygen",question:"What does the Supply Control Knob do in each of its three positions?",answer:`Located on the OXYGEN control panel. Three positions:

PAX AUTO: Passenger masks automatically deploy when cabin pressure reaches 14,700 ft (+300/-300 ft), IF the OXYGEN SUPPLY handle is pushed.

PAX OVRD: Manual passenger mask deployment from the cockpit, IF the OXYGEN SUPPLY handle is pushed.

CREW ONLY: Automatic deployment of passenger oxygen masks is disabled.`},{id:"seed-225",category:"Oxygen",question:"What is the minimum oxygen dispatch pressure, and what does it cover?",answer:`Minimum dispatch pressure: 730 psi

What it covers:
• Emergency descent to 10,000 ft with no obstacle clearance
• 10 minutes of oxygen supply for each occupant
• Assumes 2 pilots and 6 passengers on board

Mask settings during the descent:
• Cockpit masks in 100% mode during emergency descent
• Cockpit masks in normal mode at 10,000 ft`},{id:"seed-226",category:"Warning Systems",question:"What are the four CAS message priority levels and their associated chimes?",answer:`WARNING (red): Emergency operational or airplane system conditions requiring immediate corrective or compensatory crew action.
• Aural: Triple chime

CAUTION (yellow): Abnormal operational or airplane system conditions requiring immediate crew awareness and subsequent corrective or compensatory action.
• Aural: Single chime

ADVISORY (white): Operational or airplane conditions requiring crew awareness. Subsequent or future crew action may be required.
• No chime

GOLDEN (red/yellow/white): Improves pilot awareness and helps decision-making when multiple CAS messages are triggered. Considered the root cause of other failures.`},{id:"seed-227",category:"Warning Systems",question:"What is a GOLDEN CAS message and how is it identified?",answer:`A GOLDEN CAS message is the root cause of other failures when multiple CAS messages are triggered. Its purpose is to improve pilot awareness and help with decision-making.

Procedure priority:
When applicable, the GOLDEN message procedure must be accomplished by the crew first, before working through the other CAS messages.

How to identify it:
After acknowledgement, the message displays as a steady reverse video.

GOLDEN messages can be red, yellow, or white (they take on the color of the underlying CAS priority).`},{id:"seed-228",category:"Warning Systems",question:"How does the aural warning system handle multiple alerts at once?",answer:`Aural warnings sound in a sequence and are never broken.

Priority rules:
• The highest priority alerts sound first
• For multiple alerts of the same priority, the warnings sound alternately, and the first alert triggered is the first to sound

Cancellation:
• Automatically canceled when the alerting situation no longer exists
• Can also be reset manually by the pilot

The electronic display system has two aural warning drivers that generate and prioritize the warnings.`},{id:"seed-229",category:"Warning Systems",question:"What types of sounds count as aural warnings, and what's the difference between continuous and non-continuous alerts?",answer:`Types of aural warnings:
• Alert tones
• Bells
• Horns
• Clicks
• Beeps
• Voice messages

Continuous vs non-continuous:
• Continuous alerts can be either cancelable or non-cancelable by the flight crew
• All continuous alerts are automatically canceled when the alerting condition no longer exists

Aural warnings are used when pilots need immediate knowledge of a condition without having to look at a visual display.`},{id:"seed-230",category:"Warning Systems",question:"When does the Takeoff Configuration Warning activate, and what conditions trigger it?",answer:`When it activates:
The aural warning sounds whenever the airplane is on the ground AND thrust is applied AND at least one of the trigger conditions is met. The CAS message "NO TO CONFIG" is also displayed.

Trigger conditions and their messages:

• Flaps not in takeoff position → "NO TAKEOFF FLAPS"
• Parking brakes applied → "NO TAKEOFF BRAKES"
• Pitch trim out of green range → "NO TAKEOFF TRIM"
• (If spoiler-equipped) Spoiler not in takeoff position → "NO TAKEOFF SPOILER"`},{id:"seed-231",category:"Warning Systems",question:"What are the two main functions of the SWPS (Stall Warning and Protection System)?",answer:`1. Alert the crew for an imminent stall
2. Prevent the airplane from entering a potentially dangerous stall condition`},{id:"seed-232",category:"Warning Systems",question:"What is the SWPS composed of?",answer:`Four main components:

1. One computer box with two independent channels
2. SWPS panel
3. Two Angle of Attack (AOA) sensors
4. One stick pusher actuator

To avoid spurious actuation, the SWPS receives signals from many airplane systems and adjusts its set point based on:
• Flap position
• Landing gear position
• Icing conditions
• Mach number

Each SWPC channel reads its associated AOA sensor and shares the data with the opposite channel to compensate for side slip influence on AOA measurements.`},{id:"seed-233",category:"Warning Systems",question:"What happens when an imminent stall is detected, and what happens when corrective action isn't taken?",answer:`When stall is imminent (Stall Warning):

• An aural warning alerts the crew the airplane is approaching stall
• An airspeed tape visual indication on both PFDs provides low speed awareness

If no corrective action is taken (Stall Protection):

• The stick pusher actuates, pitching the nose down
• When the airplane reaches 0.5 g or below, the stick pusher is inhibited and stops actuating on the control column

Stall Warning and Stall Protection are activated when angle of attack exceeds the Stall Warning and Stall Protection activation angles, respectively.`},{id:"seed-234",category:"Warning Systems",question:"How can you disconnect the SWPS / stick pusher?",answer:`Two ways:

1. Quick disconnect button on the control wheel — lets pilots cut the system if needed during operation
2. Cutout button on the SWPS panel — disconnects both channels (used for system failures)

CAS messages are displayed to indicate the system has failed or is cutout.`},{id:"seed-235",category:"Speeds",question:"What is VAC (Approach Climb Speed)?",answer:`The go-around speed in the approach configuration, with:
• One engine inoperative
• Approach flaps
• Landing gear retracted`},{id:"seed-236",category:"Speeds",question:"What is VAP (Approach Speed)?",answer:"The speed on the final approach, in landing configuration."},{id:"seed-237",category:"Speeds",question:"What is V1 (Decision Speed)?",answer:`Two definitions:

1. The maximum speed during takeoff at which the pilot may abort the takeoff to stop the airplane within the accelerate-stop distance available.

2. The minimum speed at which the pilot can continue the takeoff and achieve the required height above the runway (or the clearway within the takeoff distance available) when a failure of the critical engine is identified immediately after V1.`},{id:"seed-238",category:"Speeds",question:"What is VREF (Landing Reference Speed)?",answer:`A reference for VAP calculation.

It's the minimum recommended speed at 50 ft over the threshold, and the speed used in the landing distance calculations.`},{id:"seed-239",category:"Speeds",question:"What is VFS (Final Segment Speed)?",answer:`The speed to be achieved during the final takeoff segment, with:
• Landing gear up
• Flaps retracted`},{id:"seed-240",category:"Speeds",question:"What is VR (Rotation Speed)?",answer:"The speed at which the pilot initiates action to raise the nose in order to takeoff."},{id:"seed-241",category:"Speeds",question:"What is V2 (Takeoff Safety Speed)?",answer:"The speed to be attained at the screen height (e.g. 35 ft) when rotation is initiated at VR, following a failure of the critical engine at VEF."}],Ga=Xf.map(e=>({...e,status:"new",created:"2024-01-01"})),Qi="phenom100_quiz_v1",Zf="quizfeedback@biter.com";function Jf(){const[e,t]=Q.useState([]),[n,r]=Q.useState(!0),[i,o]=Q.useState("All"),[s,a]=Q.useState("all"),[l,c]=Q.useState(0),[g,p]=Q.useState(!1),[h,w]=Q.useState(!1),[S,k]=Q.useState(!1),[W,d]=Q.useState(!1),[u,f]=Q.useState({category:"",question:"",answer:""}),[y,C]=Q.useState({category:"",question:"",answer:""});Q.useEffect(()=>{try{const E=localStorage.getItem(Qi);let B=[];E&&(B=JSON.parse(E));const ae=new Set(B.map(nt=>nt.id)),tt=Ga.filter(nt=>!ae.has(nt.id)),ze=[...B,...tt];(tt.length>0||B.length===0)&&localStorage.setItem(Qi,JSON.stringify(ze)),t(ze)}catch(E){console.error("load failed",E),t(Ga)}r(!1)},[]);const A=E=>{t(E);try{localStorage.setItem(Qi,JSON.stringify(E))}catch(B){console.error("save failed",B)}},N=["All",...Array.from(new Set(e.map(E=>E.category)))],P=i==="All"?e:e.filter(E=>E.category===i),R=s==="all"?P:P.filter(E=>E.status===s),F=R[l],ye=e.filter(E=>E.status==="known").length,Ct=e.filter(E=>E.status==="review").length,et=()=>{p(!1),k(!1),d(!1),c(R.length===0?0:(l+1)%R.length)},or=()=>{p(!1),k(!1),d(!1),c(R.length===0?0:(l-1+R.length)%R.length)},ki=()=>{p(!1),k(!1),d(!1),R.length>0&&c(Math.floor(Math.random()*R.length))},zt=E=>{if(!F)return;const B=e.map(ae=>ae.id===F.id?{...ae,status:E}:ae);A(B),et()},mn=()=>{if(!F)return;const E=e.filter(B=>B.id!==F.id);A(E),c(0),p(!1),k(!1)},x=()=>{F&&(f({category:F.category,question:F.question,answer:F.answer}),d(!0),p(!0))},L=()=>{if(!F||!u.category.trim()||!u.question.trim()||!u.answer.trim())return;const E=e.map(B=>B.id===F.id?{...B,category:u.category.trim(),question:u.question.trim(),answer:u.answer.trim()}:B);A(E),d(!1)},I=()=>{d(!1),f({category:"",question:"",answer:""})},b=()=>{if(!y.category.trim()||!y.question.trim()||!y.answer.trim())return;const E={id:"q-"+Date.now(),category:y.category.trim(),question:y.question.trim(),answer:y.answer.trim(),status:"new",created:new Date().toISOString().slice(0,10)},B=[...e,E];A(B),C({category:"",question:"",answer:""}),w(!1)};return n?m.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center text-amber-400 font-mono",children:"Loading flight deck..."}):m.jsxs("div",{className:"min-h-screen text-slate-100 font-mono",children:[m.jsx("style",{children:`
        .display-font { font-family: 'Oswald', sans-serif; letter-spacing: 0.05em; }
        .glow-text { text-shadow: 0 0 12px rgba(251, 191, 36, 0.4); }
        .glow-cyan { text-shadow: 0 0 12px rgba(56, 189, 248, 0.5); }
      `}),m.jsxs("div",{className:"min-h-screen",children:[m.jsx("div",{className:"border-b-2 border-amber-500/30 bg-slate-900/80 backdrop-blur",children:m.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"bg-amber-500/10 border border-amber-500/40 p-2.5 rounded",children:m.jsx(Vf,{className:"w-6 h-6 text-amber-400"})}),m.jsxs("div",{children:[m.jsx("h1",{className:"display-font text-2xl font-bold text-amber-400 glow-text",children:"PHENOM 100 CHECKRIDE PREP"}),m.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"FREE FLASHCARD STUDY QUIZ // ANNUAL TYPE RATING"})]})]}),m.jsxs("div",{className:"flex gap-3 text-xs",children:[m.jsxs("button",{onClick:()=>{a("all"),c(0),p(!1)},className:`px-3 py-2 border rounded transition text-left ${s==="all"?"border-cyan-400 bg-cyan-500/10 ring-1 ring-cyan-400":"border-slate-700 bg-slate-900 hover:border-cyan-500/50"}`,title:"Show all questions",children:[m.jsx("div",{className:"text-slate-500",children:"TOTAL"}),m.jsx("div",{className:"text-cyan-400 font-bold text-lg glow-cyan",children:e.length})]}),m.jsxs("button",{onClick:()=>{a("known"),c(0),p(!1)},className:`px-3 py-2 border rounded transition text-left ${s==="known"?"border-emerald-400 bg-emerald-500/20 ring-1 ring-emerald-400":"border-emerald-700/50 bg-emerald-950/30 hover:border-emerald-500"}`,title:"Study only cards marked Got It",children:[m.jsx("div",{className:"text-emerald-600",children:"KNOWN"}),m.jsx("div",{className:"text-emerald-400 font-bold text-lg",children:ye})]}),m.jsxs("button",{onClick:()=>{a("review"),c(0),p(!1)},className:`px-3 py-2 border rounded transition text-left ${s==="review"?"border-amber-400 bg-amber-500/20 ring-1 ring-amber-400":"border-amber-700/50 bg-amber-950/30 hover:border-amber-500"}`,title:"Study only cards marked Need Review",children:[m.jsx("div",{className:"text-amber-600",children:"REVIEW"}),m.jsx("div",{className:"text-amber-400 font-bold text-lg",children:Ct})]})]})]})}),m.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-6",children:[m.jsx("div",{className:"flex gap-2 flex-wrap mb-6",children:N.map(E=>{const B=E==="All"?e.length:e.filter(tt=>tt.category===E).length,ae=i===E;return m.jsxs("button",{onClick:()=>{o(E),c(0),p(!1)},className:`px-3 py-1.5 text-xs uppercase tracking-wider border transition rounded ${ae?"bg-amber-500 border-amber-500 text-slate-950 font-bold":"border-slate-700 text-slate-400 hover:border-amber-500/50 hover:text-amber-400"}`,children:[E," ",m.jsxs("span",{className:"opacity-60",children:["[",B,"]"]})]},E)})}),R.length===0?m.jsxs("div",{className:"border-2 border-dashed border-slate-700 rounded p-12 text-center text-slate-500",children:[m.jsx(qf,{className:"w-8 h-8 mx-auto mb-3 text-slate-600"}),s==="known"&&'No cards marked Known yet. Hit "Got It" on cards as you nail them.',s==="review"&&'No cards in your review pile. Hit "Need Review" on cards you want to revisit.',s==="all"&&"No questions in this category yet."]}):F&&m.jsxs("div",{className:"border-2 border-amber-500/40 bg-slate-900/60 rounded-lg overflow-hidden",children:[m.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-slate-700 bg-slate-900",children:[m.jsxs("div",{className:"flex items-center gap-3 text-xs flex-wrap",children:[m.jsx("span",{className:"text-slate-500",children:"CARD"}),m.jsxs("span",{className:"text-amber-400 font-bold",children:[l+1," / ",R.length]}),m.jsx("span",{className:"text-slate-600",children:"|"}),m.jsx("span",{className:"text-cyan-400 uppercase tracking-wider",children:F.category}),F.status==="known"&&m.jsx("span",{className:"px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[10px] uppercase",children:"Known"}),F.status==="review"&&m.jsx("span",{className:"px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-[10px] uppercase",children:"Review"})]}),m.jsxs("div",{className:`flex items-center gap-3 ${S||W?"hidden":""}`,children:[m.jsx("button",{onClick:x,className:"text-slate-600 hover:text-cyan-400 transition",title:"Edit this card",children:m.jsx(Hf,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>k(!0),className:"text-slate-600 hover:text-red-400 transition",title:"Delete this card",children:m.jsx($f,{className:"w-4 h-4"})})]}),S&&m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-xs text-red-400 uppercase tracking-wider",children:"Delete?"}),m.jsx("button",{onClick:mn,className:"px-2 py-1 bg-red-600 hover:bg-red-500 text-white text-[10px] uppercase tracking-wider rounded font-bold",children:"Yes"}),m.jsx("button",{onClick:()=>k(!1),className:"px-2 py-1 border border-slate-700 hover:border-slate-500 text-slate-400 text-[10px] uppercase tracking-wider rounded",children:"Cancel"})]}),W&&m.jsx("span",{className:"text-xs text-cyan-400 uppercase tracking-wider",children:"Editing..."})]}),W?m.jsxs("div",{className:"p-6 md:p-8 space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs uppercase tracking-widest text-cyan-500 mb-2 block",children:"Category"}),m.jsx("input",{list:"edit-cat-list",value:u.category,onChange:E=>f({...u,category:E.target.value}),className:"w-full px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm"}),m.jsx("datalist",{id:"edit-cat-list",children:N.filter(E=>E!=="All").map(E=>m.jsx("option",{value:E},E))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs uppercase tracking-widest text-cyan-500 mb-2 block",children:"Question"}),m.jsx("textarea",{value:u.question,onChange:E=>f({...u,question:E.target.value}),rows:3,className:"w-full px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-base resize-none"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs uppercase tracking-widest text-cyan-500 mb-2 block",children:"Answer"}),m.jsx("textarea",{value:u.answer,onChange:E=>f({...u,answer:E.target.value}),rows:10,className:"w-full px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm resize-none whitespace-pre-wrap font-mono"})]}),m.jsxs("div",{className:"flex gap-2 justify-end",children:[m.jsx("button",{onClick:I,className:"px-4 py-2 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs uppercase tracking-wider transition rounded",children:"Cancel"}),m.jsxs("button",{onClick:L,className:"px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5",children:[m.jsx(Kf,{className:"w-3.5 h-3.5"}),"Save Changes"]})]})]}):m.jsxs("div",{className:"p-6 md:p-8",children:[m.jsx("div",{className:"text-xs uppercase tracking-widest text-amber-500 mb-3",children:"Question"}),m.jsx("div",{className:"display-font text-2xl md:text-3xl text-slate-100 leading-snug mb-8",children:F.question}),g?m.jsxs("div",{children:[m.jsx("div",{className:"text-xs uppercase tracking-widest text-emerald-500 mb-3",children:"Answer"}),m.jsx("div",{className:"bg-slate-950/80 border-l-4 border-emerald-500 p-5 rounded-r mb-5 whitespace-pre-wrap text-slate-200 leading-relaxed",children:F.answer}),m.jsxs("button",{onClick:()=>p(!1),className:"text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1.5 mb-4",children:[m.jsx(bf,{className:"w-3.5 h-3.5"}),"Hide answer"]})]}):m.jsxs("button",{onClick:()=>p(!0),className:"w-full py-4 border-2 border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 rounded",children:[m.jsx(Bf,{className:"w-5 h-5"}),"Reveal Answer"]})]}),m.jsxs("div",{className:"border-t border-slate-700 bg-slate-900 px-5 py-4 flex items-center justify-between flex-wrap gap-3",children:[m.jsxs("div",{className:"flex gap-2 flex-wrap",children:[m.jsx("button",{onClick:or,className:"px-4 py-2 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition rounded",children:"← Prev"}),m.jsx("button",{onClick:et,className:"px-4 py-2 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition rounded",children:"Next →"}),m.jsxs("button",{onClick:ki,className:"px-4 py-2 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5",children:[m.jsx(Qf,{className:"w-3.5 h-3.5"}),"Shuffle"]})]}),g&&m.jsxs("div",{className:"flex gap-2",children:[m.jsxs("button",{onClick:()=>zt("review"),className:"px-4 py-2 border border-amber-700/60 bg-amber-950/30 hover:bg-amber-900/40 text-amber-400 text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5",children:[m.jsx(Yf,{className:"w-3.5 h-3.5"}),"Need Review"]}),m.jsxs("button",{onClick:()=>zt("known"),className:"px-4 py-2 border border-emerald-700/60 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-400 text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5",children:[m.jsx(Uf,{className:"w-3.5 h-3.5"}),"Got It"]})]})]})]}),m.jsx("div",{className:"mt-6",children:h?m.jsxs("div",{className:"border-2 border-cyan-500/40 bg-slate-900/60 rounded p-5",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[m.jsx(zf,{className:"w-4 h-4 text-cyan-400"}),m.jsx("h3",{className:"display-font text-cyan-400 uppercase tracking-wider",children:"New Question"})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs text-slate-500 uppercase tracking-wider",children:"Category"}),m.jsx("input",{list:"cat-list",value:y.category,onChange:E=>C({...y,category:E.target.value}),placeholder:"e.g. Electrical, Hydraulic, Limits",className:"w-full mt-1 px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm"}),m.jsx("datalist",{id:"cat-list",children:N.filter(E=>E!=="All").map(E=>m.jsx("option",{value:E},E))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs text-slate-500 uppercase tracking-wider",children:"Question"}),m.jsx("textarea",{value:y.question,onChange:E=>C({...y,question:E.target.value}),rows:2,className:"w-full mt-1 px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm resize-none"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs text-slate-500 uppercase tracking-wider",children:"Answer"}),m.jsx("textarea",{value:y.answer,onChange:E=>C({...y,answer:E.target.value}),rows:5,className:"w-full mt-1 px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm resize-none"})]}),m.jsx("p",{className:"text-[11px] text-slate-500",children:"Your custom questions are saved in your browser only. Clearing your browser data will remove them."}),m.jsxs("div",{className:"flex gap-2 justify-end",children:[m.jsx("button",{onClick:()=>{w(!1),C({category:"",question:"",answer:""})},className:"px-4 py-2 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs uppercase tracking-wider transition rounded",children:"Cancel"}),m.jsx("button",{onClick:b,className:"px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition rounded",children:"Save Question"})]})]})]}):m.jsxs("button",{onClick:()=>w(!0),className:"w-full py-4 border-2 border-dashed border-slate-700 hover:border-amber-500 text-slate-500 hover:text-amber-400 text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 rounded",children:[m.jsx(Gf,{className:"w-4 h-4"}),"Add Your Own Question"]})}),m.jsxs("div",{className:"text-center mt-10 pb-6 space-y-3",children:[m.jsxs("a",{href:`mailto:${Zf}?subject=Phenom%20100%20Quiz%20Feedback`,className:"inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-amber-400 transition uppercase tracking-wider",children:[m.jsx(jf,{className:"w-3 h-3"}),"Send Feedback"]}),m.jsx("div",{className:"text-[10px] text-slate-700 max-w-2xl mx-auto leading-relaxed",children:"Free study tool. Not a substitute for the POH, AFM, QRH, or your training. Always verify against current official documentation."})]})]})]})]})}$i.createRoot(document.getElementById("root")).render(m.jsx(Ec.StrictMode,{children:m.jsx(Jf,{})}));
