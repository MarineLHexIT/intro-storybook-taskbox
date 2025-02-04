import{j as b}from"./jsx-runtime-DtgEGaVE.js";import{u as ne,a as re,f as ae,T as ie,P as oe,s as se,M as ce}from"./TaskList.stories-Bnit8xsh.js";import{r as ue}from"./index-BbAIUH2N.js";import{i as le,d as N,s as fe,c as de,R as pe,t as he,g as me,n as k,a as ve}from"./decorators-DIzpaN6C.js";import{w as ge,a as we,b as ye,f as $}from"./index-iHWlN_rr.js";import"./Task.stories-CNawHStE.js";import"./_commonjsHelpers-Cpj98o6Y.js";function G(){const e=ne(),{error:t}=re(n=>n.taskbox);return ue.useEffect(()=>{e(ae())},[]),t?b.jsx("div",{className:"page lists-show",children:b.jsxs("div",{className:"wrapper-message",children:[b.jsx("span",{className:"icon-face-sad"}),b.jsx("p",{className:"title-message",children:"Oh no!"}),b.jsx("p",{className:"subtitle-message",children:t})]})}):b.jsxs("div",{className:"page lists-show",children:[b.jsx("nav",{children:b.jsx("h1",{className:"title-page",children:"Taskbox"})}),b.jsx(ie,{})]})}G.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};function xe(){le(typeof URL<"u",N.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function Ee(e,t){return e.toLowerCase()===t.toLowerCase()}function Te(e){return e<300?"#69AB32":e<400?"#F0BB4B":"#E95F5D"}async function Re(e){const n=await e.clone().text();return{url:new URL(e.url),method:e.method,headers:Object.fromEntries(e.headers.entries()),body:n}}const{message:Ce}=fe;async function Pe(e){const t=e.clone(),n=await t.text(),r=t.status||200,a=t.statusText||Ce[r]||"OK";return{status:r,statusText:a,headers:Object.fromEntries(t.headers.entries()),body:n}}function be(e){for(var t=[],n=0;n<e.length;){var r=e[n];if(r==="*"||r==="+"||r==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(r==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(r==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(r==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(r===":"){for(var a="",o=n+1;o<e.length;){var s=e.charCodeAt(o);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){a+=e[o++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:a}),n=o;continue}if(r==="("){var d=1,E="",o=n+1;if(e[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<e.length;){if(e[o]==="\\"){E+=e[o++]+e[o++];continue}if(e[o]===")"){if(d--,d===0){o++;break}}else if(e[o]==="("&&(d++,e[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));E+=e[o++]}if(d)throw new TypeError("Unbalanced pattern at ".concat(n));if(!E)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:E}),n=o;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}function Se(e,t){t===void 0&&(t={});for(var n=be(e),r=t.prefixes,a=r===void 0?"./":r,o=t.delimiter,s=o===void 0?"/#?":o,d=[],E=0,x=0,w="",p=function(g){if(x<n.length&&n[x].type===g)return n[x++].value},C=function(g){var m=p(g);if(m!==void 0)return m;var R=n[x],D=R.type,te=R.index;throw new TypeError("Unexpected ".concat(D," at ").concat(te,", expected ").concat(g))},y=function(){for(var g="",m;m=p("CHAR")||p("ESCAPED_CHAR");)g+=m;return g},c=function(g){for(var m=0,R=s;m<R.length;m++){var D=R[m];if(g.indexOf(D)>-1)return!0}return!1},h=function(g){var m=d[d.length-1],R=g||(m&&typeof m=="string"?m:"");if(m&&!R)throw new TypeError('Must have text between two parameters, missing text after "'.concat(m.name,'"'));return!R||c(R)?"[^".concat(U(s),"]+?"):"(?:(?!".concat(U(R),")[^").concat(U(s),"])+?")};x<n.length;){var i=p("CHAR"),f=p("NAME"),P=p("PATTERN");if(f||P){var u=i||"";a.indexOf(u)===-1&&(w+=u,u=""),w&&(d.push(w),w=""),d.push({name:f||E++,prefix:u,suffix:"",pattern:P||h(u),modifier:p("MODIFIER")||""});continue}var l=i||p("ESCAPED_CHAR");if(l){w+=l;continue}w&&(d.push(w),w="");var v=p("OPEN");if(v){var u=y(),T=p("NAME")||"",S=p("PATTERN")||"",O=y();C("CLOSE"),d.push({name:T||(S?E++:""),pattern:T&&!S?h(u):S,prefix:u,suffix:O,modifier:p("MODIFIER")||""});continue}C("END")}return d}function Oe(e,t){var n=[],r=J(e,n,t);return Ae(r,n,t)}function Ae(e,t,n){n===void 0&&(n={});var r=n.decode,a=r===void 0?function(o){return o}:r;return function(o){var s=e.exec(o);if(!s)return!1;for(var d=s[0],E=s.index,x=Object.create(null),w=function(C){if(s[C]===void 0)return"continue";var y=t[C-1];y.modifier==="*"||y.modifier==="+"?x[y.name]=s[C].split(y.prefix+y.suffix).map(function(c){return a(c,y)}):x[y.name]=a(s[C],y)},p=1;p<s.length;p++)w(p);return{path:d,index:E,params:x}}}function U(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function V(e){return e&&e.sensitive?"":"i"}function _e(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,a=n.exec(e.source);a;)t.push({name:a[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),a=n.exec(e.source);return e}function je(e,t,n){var r=e.map(function(a){return J(a,t,n).source});return new RegExp("(?:".concat(r.join("|"),")"),V(n))}function Ue(e,t,n){return ke(Se(e,n),t,n)}function ke(e,t,n){n===void 0&&(n={});for(var r=n.strict,a=r===void 0?!1:r,o=n.start,s=o===void 0?!0:o,d=n.end,E=d===void 0?!0:d,x=n.encode,w=x===void 0?function(m){return m}:x,p=n.delimiter,C=p===void 0?"/#?":p,y=n.endsWith,c=y===void 0?"":y,h="[".concat(U(c),"]|$"),i="[".concat(U(C),"]"),f=s?"^":"",P=0,u=e;P<u.length;P++){var l=u[P];if(typeof l=="string")f+=U(w(l));else{var v=U(w(l.prefix)),T=U(w(l.suffix));if(l.pattern)if(t&&t.push(l),v||T)if(l.modifier==="+"||l.modifier==="*"){var S=l.modifier==="*"?"?":"";f+="(?:".concat(v,"((?:").concat(l.pattern,")(?:").concat(T).concat(v,"(?:").concat(l.pattern,"))*)").concat(T,")").concat(S)}else f+="(?:".concat(v,"(").concat(l.pattern,")").concat(T,")").concat(l.modifier);else{if(l.modifier==="+"||l.modifier==="*")throw new TypeError('Can not repeat "'.concat(l.name,'" without a prefix and suffix'));f+="(".concat(l.pattern,")").concat(l.modifier)}else f+="(?:".concat(v).concat(T,")").concat(l.modifier)}}if(E)a||(f+="".concat(i,"?")),f+=n.endsWith?"(?=".concat(h,")"):"$";else{var O=e[e.length-1],g=typeof O=="string"?i.indexOf(O[O.length-1])>-1:O===void 0;a||(f+="(?:".concat(i,"(?=").concat(h,"))?")),g||(f+="(?=".concat(i,"|").concat(h,")"))}return new RegExp(f,V(n))}function J(e,t,n){return e instanceof RegExp?_e(e,t):Array.isArray(e)?je(e,t,n):Ue(e,t,n)}function Ie(e,t=!0){return[t&&e.origin,e.pathname].filter(Boolean).join("")}const Le=/[\?|#].*$/g;function De(e){return new URL(`/${e}`,"http://localhost").searchParams}function Q(e){return e.endsWith("?")?e:e.replace(Le,"")}function Ne(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}function $e(e,t){if(Ne(e)||e.startsWith("*"))return e;const n=t||typeof document<"u"&&document.baseURI;return n?decodeURI(new URL(encodeURI(e),n).href):e}function ze(e,t){if(e instanceof RegExp)return e;const n=$e(e,t);return Q(n)}function qe(e){return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(t,n,r)=>{const a="(.*)";return n?n.startsWith(":")?`${n}${r}`:`${n}${a}`:a}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function Be(e,t,n){const r=ze(t,n),a=typeof r=="string"?qe(r):r,o=Ie(e),s=Oe(a,{decode:decodeURIComponent})(o),d=s&&s.params||{};return{matches:s!==!1,params:d}}var Me=Object.create,Z=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyNames,He=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty,Ge=(e,t)=>function(){return t||(0,e[K(e)[0]])((t={exports:{}}).exports,t),t.exports},Ve=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of K(t))!We.call(e,a)&&a!==n&&Z(e,a,{get:()=>t[a],enumerable:!(r=Fe(t,a))||r.enumerable});return e},Je=(e,t,n)=>(n=e!=null?Me(He(e)):{},Ve(Z(n,"default",{value:e,enumerable:!0}),e)),Qe=Ge({"node_modules/cookie/index.js"(e){e.parse=d,e.serialize=w;var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,a=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/;function d(c,h){if(typeof c!="string")throw new TypeError("argument str must be a string");var i={},f=c.length;if(f<2)return i;var P=h&&h.decode||p,u=0,l=0,v=0;do{if(l=c.indexOf("=",u),l===-1)break;if(v=c.indexOf(";",u),v===-1)v=f;else if(l>v){u=c.lastIndexOf(";",l-1)+1;continue}var T=E(c,u,l),S=x(c,l,T),O=c.slice(T,S);if(!n.call(i,O)){var g=E(c,l+1,v),m=x(c,v,g);c.charCodeAt(g)===34&&c.charCodeAt(m-1)===34&&(g++,m--);var R=c.slice(g,m);i[O]=y(R,P)}u=v+1}while(u<f);return i}function E(c,h,i){do{var f=c.charCodeAt(h);if(f!==32&&f!==9)return h}while(++h<i);return i}function x(c,h,i){for(;h>i;){var f=c.charCodeAt(--h);if(f!==32&&f!==9)return h+1}return i}function w(c,h,i){var f=i&&i.encode||encodeURIComponent;if(typeof f!="function")throw new TypeError("option encode is invalid");if(!r.test(c))throw new TypeError("argument name is invalid");var P=f(h);if(!a.test(P))throw new TypeError("argument val is invalid");var u=c+"="+P;if(!i)return u;if(i.maxAge!=null){var l=Math.floor(i.maxAge);if(!isFinite(l))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+l}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid");u+="; Domain="+i.domain}if(i.path){if(!s.test(i.path))throw new TypeError("option path is invalid");u+="; Path="+i.path}if(i.expires){var v=i.expires;if(!C(v)||isNaN(v.valueOf()))throw new TypeError("option expires is invalid");u+="; Expires="+v.toUTCString()}if(i.httpOnly&&(u+="; HttpOnly"),i.secure&&(u+="; Secure"),i.partitioned&&(u+="; Partitioned"),i.priority){var T=typeof i.priority=="string"?i.priority.toLowerCase():i.priority;switch(T){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(i.sameSite){var S=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(S){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u}function p(c){return c.indexOf("%")!==-1?decodeURIComponent(c):c}function C(c){return t.call(c)==="[object Date]"}function y(c,h){try{return h(c)}catch{return c}}}}),Ze=Je(Qe()),X=Ze.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function Y(e){const t=X.parse(e),n={};for(const r in t)typeof t[r]<"u"&&(n[r]=t[r]);return n}function z(){return Y(document.cookie)}function Ke(e){if(typeof document>"u"||typeof location>"u")return{};switch(e.credentials){case"same-origin":{const t=new URL(e.url);return location.origin===t.origin?z():{}}case"include":return z();default:return{}}}function Xe(e){const t=e.headers.get("cookie"),n=t?Y(t):{},r=Ke(e);for(const s in r)e.headers.append("cookie",X.serialize(s,r[s]));const a=de.getCookiesSync(e.url),o=Object.fromEntries(a.map(s=>[s.key,s.value]));for(const s of a)e.headers.append("cookie",s.toString());return{...r,...o,...n}}var j=(e=>(e.HEAD="HEAD",e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.DELETE="DELETE",e))(j||{});class Ye extends pe{constructor(t,n,r,a){super({info:{header:`${t} ${n}`,path:n,method:t},resolver:r,options:a}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:t,path:n}=this.info;if(n instanceof RegExp||Q(n)===n)return;De(n).forEach((o,s)=>{}),N.warn(`Found a redundant usage of query parameters in the request handler URL for "${t} ${n}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`)}async parse(t){var o;const n=new URL(t.request.url),r=Be(n,this.info.path,(o=t.resolutionContext)==null?void 0:o.baseUrl),a=Xe(t.request);return{match:r,cookies:a}}predicate(t){const n=this.matchMethod(t.request.method),r=t.parsedResult.match.matches;return n&&r}matchMethod(t){return this.info.method instanceof RegExp?this.info.method.test(t):Ee(this.info.method,t)}extendResolverArgs(t){var n;return{params:((n=t.parsedResult.match)==null?void 0:n.params)||{},cookies:t.parsedResult.cookies}}async log(t){const n=he(t.request.url),r=await Re(t.request),a=await Pe(t.response),o=Te(a.status);console.groupCollapsed(N.formatMessage(`${me()} ${t.request.method} ${n} (%c${a.status} ${a.statusText}%c)`),`color:${o}`,"color:inherit"),console.log("Request",r),console.log("Handler:",this),console.log("Response",a),console.groupEnd()}}function _(e){return(t,n,r={})=>new Ye(e,t,n,r)}const ee={all:_(/.+/),head:_(j.HEAD),get:_(j.GET),post:_(j.POST),put:_(j.PUT),delete:_(j.DELETE),patch:_(j.PATCH),options:_(j.OPTIONS)};class A extends Response{constructor(t,n){const r=k(n);super(t,r),ve(this,r)}static text(t,n){const r=k(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/plain"),r.headers.has("Content-Length")||r.headers.set("Content-Length",t?new Blob([t]).size.toString():"0"),new A(t,r)}static json(t,n){const r=k(n);r.headers.has("Content-Type")||r.headers.set("Content-Type","application/json");const a=JSON.stringify(t);return r.headers.has("Content-Length")||r.headers.set("Content-Length",a?new Blob([a]).size.toString():"0"),new A(a,r)}static xml(t,n){const r=k(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/xml"),new A(t,r)}static html(t,n){const r=k(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","text/html"),new A(t,r)}static arrayBuffer(t,n){const r=k(n);return r.headers.has("Content-Type")||r.headers.set("Content-Type","application/octet-stream"),t&&!r.headers.has("Content-Length")&&r.headers.set("Content-Length",t.byteLength.toString()),new A(t,r)}static formData(t,n){return new A(t,k(n))}}xe();const st={component:G,title:"Inbox Screen",decorators:[e=>b.jsx(oe,{store:se,children:e()})],tags:["autodocs"]},I={parameters:{msw:{handlers:[ee.get("https://jsonplaceholder.typicode.com/todos?userId=1",()=>A.json(ce.tasks))]}},play:async({canvasElement:e})=>{const t=ge(e);await we(await t.findByTestId("loading")),await ye(async()=>{await $.click(t.getByLabelText("pinTask-1")),await $.click(t.getByLabelText("pinTask-3"))})}},L={parameters:{msw:{handlers:[ee.get("https://jsonplaceholder.typicode.com/todos?userId=1",()=>new A(null,{status:403}))]}}};var q,B,M;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
        return HttpResponse.json(MockedState.tasks);
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  }
}`,...(M=(B=I.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var F,H,W;L.parameters={...L.parameters,docs:{...(F=L.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
        return new HttpResponse(null, {
          status: 403
        });
      })]
    }
  }
}`,...(W=(H=L.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const ct=["Default","Error"];export{I as Default,L as Error,ct as __namedExportsOrder,st as default};
