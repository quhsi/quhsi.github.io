(()=>{"use strict";var e={35176:(e,r,t)=>{t(40702);var s=t(68048),a=t(67694);const o=(0,a.UA)();let u={},l={},n={},i=!0,c=null;o.onNotice(((e,r)=>{try{c.postMessage({type:"notice",notice:e,relay:r.url})}catch(t){console.log("error posting message to db from pool",t,"notice",e,"url ",r.url)}}));let f=0,d=(0,s.Z)((e=>c.postMessage({type:"events",events:e})),1e3,{concatArrays:!0,promise:!0,maxWait:3e3});function b(e,r){i&&(f>=2e3&&(d.flush(),f=0),d([{event:e,relay:r}]),f++)}function p(e){}function y(e){let r=Object.values(n).filter((r=>e===(r.subName||"adhoc"))).reduce(((e,{type:r,value:t})=>{if("user"===r)return e[r]=[t],e;if("feed"===r)return(!e[r]||e[r]>=t)&&(e[r]=t),e;if("tag"===r){let r=t.tagType,s=t.tagValues;return e[`#${r}`]=(e[`#${r}`]||[]).concat(s),e}return e[r]=(e[r]||[]).concat(t),e}),{}),t=Object.entries(r).map((([e,r])=>{switch(e){case"user":return{authors:r,kinds:[0,1,2,3,4]};case"userNotes":return{authors:r,kinds:[1],limit:5e3};case"userProfile":return{authors:r,kinds:[0]};case"userFollows":return{authors:r,kinds:[3]};case"userFollowers":return{"#p":r,kinds:[3]};case"userTags":return{"#p":r,kinds:[1,3,4],limit:5e3};case"userMessages":return{authors:r,kinds:[4],limit:5e3};case"feed":return{since:r,kinds:[1,2],limit:5e3};case"event":return{ids:r};default:return{[e]:r,kinds:[0,1,2,3,4]}}}));return console.log("filter",e,t),t}function v(e){let r=n[e];delete n[e],i&&(r.subName||(r.subName="adhoc"),u[r.subName]&&(0===Object.keys(n).filter((e=>r.subName===(n[e].subName||"adhoc"))).length?u[r.subName].unsub():u[r.subName].sub({filter:y(r.subName)})))}const h={close(){self.close()},activateSub(){i=!0,Object.keys(u).forEach((e=>u[e].sub({filter:y(e)})))},deactivateSub(){i=!1,Object.keys(u).forEach((e=>u[e].unsub())),d.flush()},subUser(e){return{type:"user",value:e,subName:"mainUser"}},subUserNotes(e){return{type:"userNotes",value:e}},subUserProfile(e){return{type:"userProfile",value:e}},subUserFollows(e){return{type:"userFollows",value:e}},subUserFollowers(e){return{type:"userFollowers",value:e}},subUserTags(e){return{type:"userTags",value:e,subName:"mainUser"}},subTag(e,r){let t=Array.isArray(r)?r:[r];return{type:"tag",value:{tagType:e,tagValues:t}}},subFeed(e){return{type:"feed",value:Math.max(e,0),subName:"mainFeed"}},subEvent(e){let r=Array.isArray(e)?e:[e];return{type:"event",value:r}},setRelays(e){for(let r in e)l[r]?l[r].read===e[r].read&&l[r].write===e[r].write||(o.removeRelay(r),o.addRelay(r,e[r]),console.log(r,e[r])):o.addRelay(r,e[r]);for(let r in l)e[r]||o.removeRelay(r),e[r]||console.log("removing relay",r);return l=e,l},setPrivateKey(e){return o.setPrivateKey(e),!0},publish(e,r){var t,s,a;return r?null===(t=o.relays[r])||void 0===t||null===(s=t.relay)||void 0===s||null===(a=s.publish)||void 0===a||a.call(s,e):o.publish(e,((r,t)=>{0===r&&console.log(`publish request sent to ${t}`),1===r&&console.log(`event published by ${t}`,e)})),e}};function g(e){let{name:r,args:t,id:s,cancel:a,sub:l}="string"===typeof e.data?JSON.parse(e.data):e.data;if(e.ports.length&&"setPort"===r)c=e.ports[0];else if(!e.data.type)if(a)v(s);else if(l){if(n[s]=h[r](...t),!i)return;let e=n[s].subName||"adhoc";if(u[e])u[e].sub({filter:y(e)});else{let r=e+" "+Math.random().toString().slice(-4);u[e]=o.sub({cb:b,filter:y(e)},r,p)}}else{var f={id:s};let e;try{e=h[r](...t),f.success=!0,f.data=e}catch(d){f.success=!1,f.error=d.message}self.postMessage(JSON.stringify(f))}}self.onmessage=g}},r={};function t(s){var a=r[s];if(void 0!==a)return a.exports;var o=r[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,t.x=()=>{var e=t.O(void 0,[736,64],(()=>t(35176)));return e=t.O(e),e},(()=>{var e=[];t.O=(r,s,a,o)=>{if(!s){var u=1/0;for(c=0;c<e.length;c++){for(var[s,a,o]=e[c],l=!0,n=0;n<s.length;n++)(!1&o||u>=o)&&Object.keys(t.O).every((e=>t.O[e](s[n])))?s.splice(n--,1):(l=!1,o<u&&(u=o));if(l){e.splice(c--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[s,a,o]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(s,a){if(1&a&&(s=this(s)),8&a)return s;if("object"===typeof s&&s){if(4&a&&s.__esModule)return s;if(16&a&&"function"===typeof s.then)return s}var o=Object.create(null);t.r(o);var u={};e=e||[null,r({}),r([]),r(r)];for(var l=2&a&&s;"object"==typeof l&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((e=>u[e]=()=>s[e]));return u["default"]=()=>s,t.d(o,u),o}})(),(()=>{t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,s)=>(t.f[s](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+{64:"chunk-common",736:"vendor"}[e]+"."+{64:"f275f715",736:"baaa240d"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/vendor.ac5decfc.css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{t.j=176})(),(()=>{t.p="/"})(),(()=>{var e={176:1},r=r=>{var[s,o,u]=r;for(var l in o)t.o(o,l)&&(t.m[l]=o[l]);u&&u(t);while(s.length)e[s.pop()]=1;a(r)};t.f.i=(r,s)=>{e[r]||importScripts(t.p+t.u(r))};var s=globalThis["webpackChunkastral"]=globalThis["webpackChunkastral"]||[],a=s.push.bind(s);s.push=r})(),(()=>{var e=t.x;t.x=()=>Promise.all([t.e(736),t.e(64)]).then(e)})();t.x()})();