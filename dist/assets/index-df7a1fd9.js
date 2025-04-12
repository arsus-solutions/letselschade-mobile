import{d as An,c as $,w as Cn,h as On,r as te,o as m,a as h,b as f,F as O,e as N,n as w,f as W,t as y,g as Fe,i as C,j as Pn,k as Ne,l as jn,T as Te,m as D,v as ne,p as In,q as he,s as dt,u as Dn,x as En,y as ze,z as Fn}from"./vue-1a38e617.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Nn(e,t,n){return(t=zn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ft(Object(n),!0).forEach(function(r){Nn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tn(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zn(e){var t=Tn(e,"string");return typeof t=="symbol"?t:t+""}const mt=()=>{};let et={},Vt={},Ut=null,Bt={mark:mt,measure:mt};try{typeof window<"u"&&(et=window),typeof document<"u"&&(Vt=document),typeof MutationObserver<"u"&&(Ut=MutationObserver),typeof performance<"u"&&(Bt=performance)}catch{}const{userAgent:ht=""}=et.navigator||{},Y=et,_=Vt,pt=Ut,pe=Bt;Y.document;const U=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",Wt=~ht.indexOf("MSIE")||~ht.indexOf("Trident/");var Ln=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Mn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Yt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},qn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],P="classic",ke="duotone",Rn="sharp",Vn="sharp-duotone",Ht=[P,ke,Rn,Vn],Un={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Bn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Wn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Yn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Gn=["fak","fa-kit","fakd","fa-kit-duotone"],gt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Hn=["kit"],Kn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Xn=["fak","fakd"],Jn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},bt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ge={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Qn=["fak","fa-kit","fakd","fa-kit-duotone"],$n={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ea={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ta={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},na=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Me=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zn,...na],aa=["solid","regular","light","thin","duotone","brands"],Kt=[1,2,3,4,5,6,7,8,9,10],ra=Kt.concat([11,12,13,14,15,16,17,18,19,20]),sa=[...Object.keys(ta),...aa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ge.GROUP,ge.SWAP_OPACITY,ge.PRIMARY,ge.SECONDARY].concat(Kt.map(e=>"".concat(e,"x"))).concat(ra.map(e=>"w-".concat(e))),ia={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const R="___FONT_AWESOME___",qe=16,Xt="fa",Jt="svg-inline--fa",J="data-fa-i2svg",Re="data-fa-pseudo-element",oa="data-fa-pseudo-element-pending",tt="data-prefix",nt="data-icon",vt="fontawesome-i2svg",la="async",ca=["HTML","HEAD","STYLE","SCRIPT"],Zt=(()=>{try{return!0}catch{return!1}})();function de(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[P]}})}const Qt=u({},Yt);Qt[P]=u(u(u(u({},{"fa-duotone":"duotone"}),Yt[P]),gt.kit),gt["kit-duotone"]);const ua=de(Qt),Ve=u({},Yn);Ve[P]=u(u(u(u({},{duotone:"fad"}),Ve[P]),bt.kit),bt["kit-duotone"]);const yt=de(Ve),Ue=u({},Le);Ue[P]=u(u({},Ue[P]),Jn.kit);const at=de(Ue),Be=u({},ea);Be[P]=u(u({},Be[P]),Kn.kit);de(Be);const da=Ln,$t="fa-layers-text",fa=Mn,ma=u({},Un);de(ma);const ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oe=qn,pa=[...Hn,...sa],oe=Y.FontAwesomeConfig||{};function ga(e){var t=_.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ba(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=ba(ga(n));a!=null&&(oe[r]=a)});const en={styleDefault:"solid",familyDefault:P,cssPrefix:Xt,replacementClass:Jt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);const re=u(u({},en),oe);re.autoReplaceSvg||(re.observeMutations=!1);const p={};Object.keys(en).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(t){re[e]=t,le.forEach(n=>n(p))},get:function(){return re[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){re.cssPrefix=e,le.forEach(t=>t(p))},get:function(){return re.cssPrefix}});Y.FontAwesomeConfig=p;const le=[];function va(e){return le.push(e),()=>{le.splice(le.indexOf(e),1)}}const B=qe,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ya(e){if(!e||!U)return;const t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=_.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const s=n[a],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=s)}return _.head.insertBefore(t,r),e}const xa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){let e=12,t="";for(;e-- >0;)t+=xa[Math.random()*62|0];return t}function se(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rt(e){return e.classList?se(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function tn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _a(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(tn(e[n]),'" '),"").trim()}function we(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function st(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function ka(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),o={transform:"".concat(s," ").concat(i," ").concat(c)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:o,path:l}}function wa(e){let{transform:t,width:n=qe,height:r=qe,startCentered:a=!1}=e,s="";return a&&Wt?s+="translate(".concat(t.x/B-n/2,"em, ").concat(t.y/B-r/2,"em) "):a?s+="translate(calc(-50% + ".concat(t.x/B,"em), calc(-50% + ").concat(t.y/B,"em)) "):s+="translate(".concat(t.x/B,"em, ").concat(t.y/B,"em) "),s+="scale(".concat(t.size/B*(t.flipX?-1:1),", ").concat(t.size/B*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function nn(){const e=Xt,t=Jt,n=p.cssPrefix,r=p.replacementClass;let a=Sa;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");a=a.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(c,".".concat(r))}return a}let xt=!1;function Pe(){p.autoAddCss&&!xt&&(ya(nn()),xt=!0)}var Aa={mixout(){return{dom:{css:nn,insertCss:Pe}}},hooks(){return{beforeDOMElementCreation(){Pe()},beforeI2svg(){Pe()}}}};const V=Y||{};V[R]||(V[R]={});V[R].styles||(V[R].styles={});V[R].hooks||(V[R].hooks={});V[R].shims||(V[R].shims=[]);var M=V[R];const an=[],rn=function(){_.removeEventListener("DOMContentLoaded",rn),ye=1,an.map(e=>e())};let ye=!1;U&&(ye=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),ye||_.addEventListener("DOMContentLoaded",rn));function Ca(e){U&&(ye?setTimeout(e,0):an.push(e))}function fe(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?tn(e):"<".concat(t," ").concat(_a(n),">").concat(r.map(fe).join(""),"</").concat(t,">")}function _t(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Oa=function(t,n){return function(r,a,s,i){return t.call(n,r,a,s,i)}},je=function(t,n,r,a){var s=Object.keys(t),i=s.length,c=a!==void 0?Oa(n,a):n,o,l,d;for(r===void 0?(o=1,d=t[s[0]]):(o=0,d=r);o<i;o++)l=s[o],d=c(d,t[l],l,t);return d};function Pa(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((a&1023)<<10)+(s&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function We(e){const t=Pa(e);return t.length===1?t[0].toString(16):null}function ja(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function kt(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ye(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=kt(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(e,kt(t)):M.styles[e]=u(u({},M.styles[e]||{}),a),e==="fas"&&Ye("fa",t)}const{styles:ue,shims:Ia}=M,sn=Object.keys(at),Da=sn.reduce((e,t)=>(e[t]=Object.keys(at[t]),e),{});let it=null,on={},ln={},cn={},un={},dn={};function Ea(e){return~pa.indexOf(e)}function Fa(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ea(a)?a:null}const fn=()=>{const e=r=>je(ue,(a,s,i)=>(a[i]=je(s,r,{}),a),{});on=e((r,a,s)=>(a[3]&&(r[a[3]]=s),a[2]&&a[2].filter(c=>typeof c=="number").forEach(c=>{r[c.toString(16)]=s}),r)),ln=e((r,a,s)=>(r[s]=s,a[2]&&a[2].filter(c=>typeof c=="string").forEach(c=>{r[c]=s}),r)),dn=e((r,a,s)=>{const i=a[2];return r[s]=s,i.forEach(c=>{r[c]=s}),r});const t="far"in ue||p.autoFetchSvg,n=je(Ia,(r,a)=>{const s=a[0];let i=a[1];const c=a[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(r.names[s]={prefix:i,iconName:c}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:i,iconName:c}),r},{names:{},unicodes:{}});cn=n.names,un=n.unicodes,it=Se(p.styleDefault,{family:p.familyDefault})};va(e=>{it=Se(e.styleDefault,{family:p.familyDefault})});fn();function ot(e,t){return(on[e]||{})[t]}function Na(e,t){return(ln[e]||{})[t]}function X(e,t){return(dn[e]||{})[t]}function mn(e){return cn[e]||{prefix:null,iconName:null}}function Ta(e){const t=un[e],n=ot("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return it}const hn=()=>({prefix:null,iconName:null,rest:[]});function za(e){let t=P;const n=sn.reduce((r,a)=>(r[a]="".concat(p.cssPrefix,"-").concat(a),r),{});return Ht.forEach(r=>{(e.includes(n[r])||e.some(a=>Da[r].includes(a)))&&(t=r)}),t}function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=P}=t,r=ua[n][e];if(n===ke&&!e)return"fad";const a=yt[n][e]||yt[n][r],s=e in M.styles?e:null;return a||s||null}function La(e){let t=[],n=null;return e.forEach(r=>{const a=Fa(p.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function wt(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Me.concat(Qn),s=wt(e.filter(x=>a.includes(x))),i=wt(e.filter(x=>!Me.includes(x))),c=s.filter(x=>(r=x,!Gt.includes(x))),[o=null]=c,l=za(s),d=u(u({},La(i)),{},{prefix:Se(o,{family:l})});return u(u(u({},d),Va({values:e,family:l,styles:ue,config:p,canonical:d,givenPrefix:r})),Ma(n,r,d))}function Ma(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const s=t==="fa"?mn(a):{},i=X(r,a);return a=s.iconName||i||a,r=s.prefix||r,r==="far"&&!ue.far&&ue.fas&&!p.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const qa=Ht.filter(e=>e!==P||e!==ke),Ra=Object.keys(Le).filter(e=>e!==P).map(e=>Object.keys(Le[e])).flat();function Va(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:s={},config:i={}}=e,c=n===ke,o=t.includes("fa-duotone")||t.includes("fad"),l=i.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(o||l||d)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&qa.includes(n)&&(Object.keys(s).find(v=>Ra.includes(v))||i.autoFetchSvg)){const v=Wn.get(n).defaultShortPrefixId;r.prefix=v,r.iconName=X(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=G()||"fas"),r}class Ua{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(s=>{this.definitions[s]=u(u({},this.definitions[s]||{}),a[s]),Ye(s,a[s]);const i=at[P][s];i&&Ye(i,a[s]),fn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:s,iconName:i,icon:c}=r[a],o=c[2];t[s]||(t[s]={}),o.length>0&&o.forEach(l=>{typeof l=="string"&&(t[s][l]=c)}),t[s][i]=c}),t}}let St=[],ee={};const ae={},Ba=Object.keys(ae);function Wa(e,t){let{mixoutsTo:n}=t;return St=e,ee={},Object.keys(ae).forEach(r=>{Ba.indexOf(r)===-1&&delete ae[r]}),St.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(s=>{typeof a[s]=="function"&&(n[s]=a[s]),typeof a[s]=="object"&&Object.keys(a[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=a[s][i]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(i=>{ee[i]||(ee[i]=[]),ee[i].push(s[i])})}r.provides&&r.provides(ae)}),n}function Ge(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ee[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ee[e]||[]).forEach(s=>{s.apply(null,n)})}function H(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ae[e]?ae[e].apply(null,t):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||G();if(t)return t=X(n,t)||t,_t(pn.definitions,n,t)||_t(M.styles,n,t)}const pn=new Ua,Ya=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,Z("noAuto")},Ga={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(Z("beforeI2svg",e),H("pseudoElements2svg",e),H("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ca(()=>{Ka({autoReplaceSvgRoot:t}),Z("watch",e)})}},Ha={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:X(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Se(e[0]);return{prefix:n,iconName:X(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(da))){const t=Ae(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||G(),iconName:X(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=G();return{prefix:t,iconName:X(t,e)||e}}}},E={noAuto:Ya,config:p,dom:Ga,parse:Ha,library:pn,findIconDefinition:He,toHtml:fe},Ka=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=_}=e;(Object.keys(M.styles).length>0||p.autoFetchSvg)&&U&&p.autoReplaceSvg&&E.dom.i2svg({node:t})};function Ce(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>fe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!U)return;const n=_.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Xa(e){let{children:t,main:n,mask:r,attributes:a,styles:s,transform:i}=e;if(st(i)&&n.found&&!r.found){const{width:c,height:o}=n,l={x:c/o/2,y:.5};a.style=we(u(u({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ja(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:i}),children:r}]}]}function lt(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:s,symbol:i,title:c,maskId:o,titleId:l,extra:d,watchable:x=!1}=e,{width:v,height:S}=n.found?n:t,z=Xn.includes(r),T=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(F=>d.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(d.classes).join(" ");let j={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":a,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})};const g=z&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};x&&(j.attributes[J]=""),c&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(l||ce())},children:[c]}),delete j.attributes.title);const b=u(u({},j),{},{prefix:r,iconName:a,main:t,mask:n,maskId:o,transform:s,symbol:i,styles:u(u({},g),d.styles)}),{children:k,attributes:A}=n.found&&t.found?H("generateAbstractMask",b)||{children:[],attributes:{}}:H("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=k,b.attributes=A,i?Ja(b):Xa(b)}function At(e){const{content:t,width:n,height:r,transform:a,title:s,extra:i,watchable:c=!1}=e,o=u(u(u({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});c&&(o[J]="");const l=u({},i.styles);st(a)&&(l.transform=wa({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const d=we(l);d.length>0&&(o.style=d);const x=[];return x.push({tag:"span",attributes:o,children:[t]}),s&&x.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),x}function Za(e){const{content:t,title:n,extra:r}=e,a=u(u(u({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=we(r.styles);s.length>0&&(a.style=s);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ie}=M;function Ke(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Oe.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Oe.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Qa={found:!1,width:512,height:512};function $a(e,t){!Zt&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xe(e,t){let n=t;return t==="fa"&&p.styleDefault!==null&&(t=G()),new Promise((r,a)=>{if(n==="fa"){const s=mn(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ie[t]&&Ie[t][e]){const s=Ie[t][e];return r(Ke(s))}$a(e,t),r(u(u({},Qa),{},{icon:p.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}const Ct=()=>{},Je=p.measurePerformance&&pe&&pe.mark&&pe.measure?pe:{mark:Ct,measure:Ct},ie='FA "6.7.2"',er=e=>(Je.mark("".concat(ie," ").concat(e," begins")),()=>gn(e)),gn=e=>{Je.mark("".concat(ie," ").concat(e," ends")),Je.measure("".concat(ie," ").concat(e),"".concat(ie," ").concat(e," begins"),"".concat(ie," ").concat(e," ends"))};var ct={begin:er,end:gn};const be=()=>{};function Ot(e){return typeof(e.getAttribute?e.getAttribute(J):null)=="string"}function tr(e){const t=e.getAttribute?e.getAttribute(tt):null,n=e.getAttribute?e.getAttribute(nt):null;return t&&n}function nr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function ar(){return p.autoReplaceSvg===!0?ve.replace:ve[p.autoReplaceSvg]||ve.replace}function rr(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function sr(e){return _.createElement(e)}function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?rr:sr}=t;if(typeof e=="string")return _.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(bn(s,{ceFn:n}))}),r}function ir(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ve={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(bn(n),t)}),t.getAttribute(J)===null&&p.keepOriginalSource){let n=_.createComment(ir(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~rt(t).indexOf(p.replacementClass))return ve.replace(e);const r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,c)=>(c===p.replacementClass||c.match(r)?i.toSvg.push(c):i.toNode.push(c),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const a=n.map(s=>fe(s)).join(`
`);t.setAttribute(J,""),t.innerHTML=a}};function Pt(e){e()}function vn(e,t){const n=typeof t=="function"?t:be;if(e.length===0)n();else{let r=Pt;p.mutateApproach===la&&(r=Y.requestAnimationFrame||Pt),r(()=>{const a=ar(),s=ct.begin("mutate");e.map(a),s(),n()})}}let ut=!1;function yn(){ut=!0}function Ze(){ut=!1}let xe=null;function jt(e){if(!pt||!p.observeMutations)return;const{treeCallback:t=be,nodeCallback:n=be,pseudoElementsCallback:r=be,observeMutationsRoot:a=_}=e;xe=new pt(s=>{if(ut)return;const i=G();se(s).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!Ot(c.addedNodes[0])&&(p.searchPseudoElements&&r(c.target),t(c.target)),c.type==="attributes"&&c.target.parentNode&&p.searchPseudoElements&&r(c.target.parentNode),c.type==="attributes"&&Ot(c.target)&&~ha.indexOf(c.attributeName))if(c.attributeName==="class"&&tr(c.target)){const{prefix:o,iconName:l}=Ae(rt(c.target));c.target.setAttribute(tt,o||i),l&&c.target.setAttribute(nt,l)}else nr(c.target)&&n(c.target)})}),U&&xe.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function or(){xe&&xe.disconnect()}function lr(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const s=a.split(":"),i=s[0],c=s.slice(1);return i&&c.length>0&&(r[i]=c.join(":").trim()),r},{})),n}function cr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Ae(rt(e));return a.prefix||(a.prefix=G()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Na(a.prefix,e.innerText)||ot(a.prefix,We(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ur(e){const t=se(e.attributes).reduce((a,s)=>(a.name!=="class"&&a.name!=="style"&&(a[s.name]=s.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function dr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=cr(e),s=ur(e),i=Ge("parseNodeAttributes",{},e);let c=t.styleParser?lr(e):[];return u({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},i)}const{styles:fr}=M;function xn(e){const t=p.autoReplaceSvg==="nest"?It(e,{styleParser:!1}):It(e);return~t.extra.classes.indexOf($t)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}function mr(){return[...Gn,...Me]}function Dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();const n=_.documentElement.classList,r=d=>n.add("".concat(vt,"-").concat(d)),a=d=>n.remove("".concat(vt,"-").concat(d)),s=p.autoFetchSvg?mr():Gt.concat(Object.keys(fr));s.includes("fa")||s.push("fa");const i=[".".concat($t,":not([").concat(J,"])")].concat(s.map(d=>".".concat(d,":not([").concat(J,"])"))).join(", ");if(i.length===0)return Promise.resolve();let c=[];try{c=se(e.querySelectorAll(i))}catch{}if(c.length>0)r("pending"),a("complete");else return Promise.resolve();const o=ct.begin("onTree"),l=c.reduce((d,x)=>{try{const v=xn(x);v&&d.push(v)}catch(v){Zt||v.name==="MissingIcon"&&console.error(v)}return d},[]);return new Promise((d,x)=>{Promise.all(l).then(v=>{vn(v,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),o(),d()})}).catch(v=>{o(),x(v)})})}function hr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xn(e).then(n=>{n&&vn([n],t)})}function pr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:He(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:He(a||{})),e(r,u(u({},n),{},{mask:a}))}}const gr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:r=!1,mask:a=null,maskId:s=null,title:i=null,titleId:c=null,classes:o=[],attributes:l={},styles:d={}}=t;if(!e)return;const{prefix:x,iconName:v,icon:S}=e;return Ce(u({type:"icon"},e),()=>(Z("beforeDOMElementCreation",{iconDefinition:e,params:t}),p.autoA11y&&(i?l["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(c||ce()):(l["aria-hidden"]="true",l.focusable="false")),lt({icons:{main:Ke(S),mask:a?Ke(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:v,transform:u(u({},L),n),symbol:r,title:i,maskId:s,titleId:c,extra:{attributes:l,styles:d,classes:o}})))};var br={mixout(){return{icon:pr(gr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Dt,e.nodeCallback=hr,e}}},provides(e){e.i2svg=function(t){const{node:n=_,callback:r=()=>{}}=t;return Dt(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:s,prefix:i,transform:c,symbol:o,mask:l,maskId:d,extra:x}=n;return new Promise((v,S)=>{Promise.all([Xe(r,i),l.iconName?Xe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(z=>{let[T,j]=z;v([t,lt({icons:{main:T,mask:j},prefix:i,iconName:r,transform:c,symbol:o,maskId:d,title:a,titleId:s,extra:x,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:s,styles:i}=t;const c=we(i);c.length>0&&(r.style=c);let o;return st(s)&&(o=H("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(o||a.icon),{children:n,attributes:r}}}},vr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ce({type:"layer"},()=>{Z("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(s=>{r=r.concat(s.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},yr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:s={}}=t;return Ce({type:"counter",content:e},()=>(Z("beforeDOMElementCreation",{content:e,params:t}),Za({content:e.toString(),title:n,extra:{attributes:a,styles:s,classes:["".concat(p.cssPrefix,"-layers-counter"),...r]}})))}}}},xr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:r=null,classes:a=[],attributes:s={},styles:i={}}=t;return Ce({type:"text",content:e},()=>(Z("beforeDOMElementCreation",{content:e,params:t}),At({content:e,transform:u(u({},L),n),title:r,extra:{attributes:s,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:s}=n;let i=null,c=null;if(Wt){const o=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/o,c=l.height/o}return p.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,At({content:t.innerHTML,width:i,height:c,transform:a,title:r,extra:s,watchable:!0})])}}};const _r=new RegExp('"',"ug"),Et=[1105920,1112319],Ft=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Bn),ia),$n),Qe=Object.keys(Ft).reduce((e,t)=>(e[t.toLowerCase()]=Ft[t],e),{}),kr=Object.keys(Qe).reduce((e,t)=>{const n=Qe[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function wr(e){const t=e.replace(_r,""),n=ja(t,0),r=n>=Et[0]&&n<=Et[1],a=t.length===2?t[0]===t[1]:!1;return{value:We(a?t[0]:t),isSecondary:r||a}}function Sr(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Qe[n]||{})[a]||kr[n]}function Nt(e,t){const n="".concat(oa).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=se(e.children).filter(v=>v.getAttribute(Re)===t)[0],c=Y.getComputedStyle(e,t),o=c.getPropertyValue("font-family"),l=o.match(fa),d=c.getPropertyValue("font-weight"),x=c.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&x!=="none"&&x!==""){const v=c.getPropertyValue("content");let S=Sr(o,d);const{value:z,isSecondary:T}=wr(v),j=l[0].startsWith("FontAwesome");let g=ot(S,z),b=g;if(j){const k=Ta(z);k.iconName&&k.prefix&&(g=k.iconName,S=k.prefix)}if(g&&!T&&(!i||i.getAttribute(tt)!==S||i.getAttribute(nt)!==b)){e.setAttribute(n,b),i&&e.removeChild(i);const k=dr(),{extra:A}=k;A.attributes[Re]=t,Xe(g,S).then(F=>{const me=lt(u(u({},k),{},{icons:{main:F,mask:hn()},prefix:S,iconName:b,extra:A,watchable:!0})),K=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(K,e.firstChild):e.appendChild(K),K.outerHTML=me.map(Sn=>fe(Sn)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ar(e){return Promise.all([Nt(e,"::before"),Nt(e,"::after")])}function Cr(e){return e.parentNode!==document.head&&!~ca.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Re)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tt(e){if(U)return new Promise((t,n)=>{const r=se(e.querySelectorAll("*")).filter(Cr).map(Ar),a=ct.begin("searchPseudoElements");yn(),Promise.all(r).then(()=>{a(),Ze(),t()}).catch(()=>{a(),Ze(),n()})})}var Or={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Tt,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=_}=t;p.searchPseudoElements&&Tt(n)}}};let zt=!1;var Pr={mixout(){return{dom:{unwatch(){yn(),zt=!0}}}},hooks(){return{bootstrap(){jt(Ge("mutationObserverCallbacks",{}))},noAuto(){or()},watch(e){const{observeMutationsRoot:t}=e;zt?Ze():jt(Ge("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Lt=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),s=a[0];let i=a.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var jr={mixout(){return{parse:{transform:e=>Lt(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Lt(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:s}=t;const i={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(o," ").concat(l)},x={transform:"translate(".concat(s/2*-1," -256)")},v={outer:i,inner:d,path:x};return{tag:"g",attributes:u({},v.outer),children:[{tag:"g",attributes:u({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),v.path)}]}]}}}};const De={x:0,y:0,width:"100%",height:"100%"};function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ir(e){return e.tag==="g"?e.children:[e]}var Dr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Ae(n.split(" ").map(a=>a.trim())):hn();return r.prefix||(r.prefix=G()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:s,maskId:i,transform:c}=t;const{width:o,icon:l}=a,{width:d,icon:x}=s,v=ka({transform:c,containerWidth:d,iconWidth:o}),S={tag:"rect",attributes:u(u({},De),{},{fill:"white"})},z=l.children?{children:l.children.map(Mt)}:{},T={tag:"g",attributes:u({},v.inner),children:[Mt(u({tag:l.tag,attributes:u(u({},l.attributes),v.path)},z))]},j={tag:"g",attributes:u({},v.outer),children:[T]},g="mask-".concat(i||ce()),b="clip-".concat(i||ce()),k={tag:"mask",attributes:u(u({},De),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,j]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Ir(x)},k]};return n.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},De)}),{children:n,attributes:r}}}},Er={provides(e){let t=!1;Y.matchMedia&&(t=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=u(u({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:u(u({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:u(u({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Fr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Nr=[Aa,br,vr,yr,xr,Or,Pr,jr,Dr,Er,Fr];Wa(Nr,{mixoutsTo:E});E.noAuto;E.config;const Tr=E.library;E.dom;const $e=E.parse;E.findIconDefinition;E.toHtml;const zr=E.icon;E.layer;E.text;E.counter;function qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qt(Object(n),!0).forEach(function(r){I(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mr(e){var t=Lr(e,"string");return typeof t=="symbol"?t:t+""}function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_e(e)}function I(e,t,n){return t=Mr(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qr(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Rr(e,t){if(e==null)return{};var n=qr(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_n={exports:{}};(function(e){(function(t){var n=function(g,b,k){if(!l(b)||x(b)||v(b)||S(b)||o(b))return b;var A,F=0,me=0;if(d(b))for(A=[],me=b.length;F<me;F++)A.push(n(g,b[F],k));else{A={};for(var K in b)Object.prototype.hasOwnProperty.call(b,K)&&(A[g(K,k)]=n(g,b[K],k))}return A},r=function(g,b){b=b||{};var k=b.separator||"_",A=b.split||/(?=[A-Z])/;return g.split(A).join(k)},a=function(g){return z(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(b,k){return k?k.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},s=function(g){var b=a(g);return b.substr(0,1).toUpperCase()+b.substr(1)},i=function(g,b){return r(g,b).toLowerCase()},c=Object.prototype.toString,o=function(g){return typeof g=="function"},l=function(g){return g===Object(g)},d=function(g){return c.call(g)=="[object Array]"},x=function(g){return c.call(g)=="[object Date]"},v=function(g){return c.call(g)=="[object RegExp]"},S=function(g){return c.call(g)=="[object Boolean]"},z=function(g){return g=g-0,g===g},T=function(g,b){var k=b&&"process"in b?b.process:b;return typeof k!="function"?g:function(A,F){return k(A,g,F)}},j={camelize:a,decamelize:i,pascalize:s,depascalize:i,camelizeKeys:function(g,b){return n(T(a,b),g)},decamelizeKeys:function(g,b){return n(T(i,b),g,b)},pascalizeKeys:function(g,b){return n(T(s,b),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Vr)})(_n);var Ur=_n.exports,Br=["class","style"];function Wr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ur.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[a]=s,t},{})}function Yr(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(o){return kn(o)}),a=Object.keys(e.attributes||{}).reduce(function(o,l){var d=e.attributes[l];switch(l){case"class":o.class=Yr(d);break;case"style":o.style=Wr(d);break;default:o.attrs[l]=d}return o},{attrs:{},class:{},style:{}});n.class;var s=n.style,i=s===void 0?{}:s,c=Rr(n,Br);return On(e.tag,q(q(q({},t),{},{class:a.class,style:q(q({},a.style),i)},a.attrs),c),r)}var wn=!1;try{wn=!0}catch{}function Gr(){if(!wn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ee(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?I({},e,t):{}}function Hr(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},I(I(I(I(I(I(I(I(I(I(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),I(I(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Rt(e){if(e&&_e(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($e.icon)return $e.icon(e);if(e===null)return null;if(_e(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Kr=An({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=$(function(){return Rt(t.icon)}),s=$(function(){return Ee("classes",Hr(t))}),i=$(function(){return Ee("transform",typeof t.transform=="string"?$e.transform(t.transform):t.transform)}),c=$(function(){return Ee("mask",Rt(t.mask))}),o=$(function(){return zr(a.value,q(q(q(q({},s.value),i.value),c.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Cn(o,function(d){if(!d)return Gr("Could not find one or more icon(s)",a.value,c.value)},{immediate:!0});var l=$(function(){return o.value?kn(o.value.abstract[0],{},r):null});return function(){return l.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Xr={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},Jr={prefix:"fas",iconName:"road",icon:[576,512,[128739],"f018","M256 32l-74.8 0c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480L256 480l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 201.4 0c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32L320 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm64 192l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},Zr={prefix:"fas",iconName:"industry",icon:[576,512,[],"f275","M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z"]},Qr={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Q=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};Tr.add(Qr,Zr,Xr,Jr);const $r={name:"CategorySelector",components:{FontAwesomeIcon:Kr},props:{lead_types:{type:Array,required:!0}},methods:{getCategoryIcon(e){switch(e){case 1:return"car";case 2:return"industry";case 5:return"paw";case 7:return"road";default:return"question"}},getCategoryColor(e){switch(e){case 1:return"bg-blue-600 hover:bg-blue-700";case 2:return"bg-green-600 hover:bg-green-700";case 5:return"bg-purple-600 hover:bg-purple-700";case 7:return"bg-orange-600 hover:bg-orange-700";default:return"bg-gray-600 hover:bg-gray-700"}}}},es={class:"space-y-6"},ts={class:"grid grid-cols-2 gap-4"},ns=["onClick"],as={class:"font-medium text-white"};function rs(e,t,n,r,a,s){const i=te("font-awesome-icon");return m(),h("div",es,[t[0]||(t[0]=f("div",{class:"text-center space-y-4"},[f("h1",{class:"text-2xl font-cinzel text-shield-blue-dark"}," Start de letselschadetest "),f("p",{class:"text-shield-gray-dark"}," Ontdek binnen enkele minuten wat uw schadevergoeding kan zijn. Kies uw ongevalstype om te beginnen: ")],-1)),f("div",ts,[(m(!0),h(O,null,N(n.lead_types,c=>(m(),h("button",{key:c.id,onClick:o=>e.$emit("category-selected",c.id),class:w(["p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-4",s.getCategoryColor(c.id)])},[W(i,{icon:s.getCategoryIcon(c.id),class:"text-white text-4xl"},null,8,["icon"]),f("span",as,y(c.name),1)],10,ns))),128))])])}const ss=Q($r,[["render",rs]]),is={name:"StepIndicator",props:{currentStep:{type:Number,required:!0},totalSteps:{type:Number,required:!0},stepTitles:{type:Object,required:!0}},methods:{getStepTitle(e){return this.stepTitles[e]||`Stap ${e}`}}},os={class:"mb-8"},ls={class:"flex justify-between items-center"},cs=["onClick"],us={key:0,class:"absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"};function ds(e,t,n,r,a,s){return m(),h("div",os,[f("div",ls,[(m(!0),h(O,null,N(n.totalSteps,i=>(m(),h("div",{key:i,class:w(["flex items-center",{"flex-1":i<n.totalSteps}])},[f("div",{class:w(["w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer relative group",[n.currentStep>=i?"bg-shield-blue text-white":"bg-shield-gray-light text-shield-gray-dark",i<n.currentStep?"hover:bg-shield-blue-dark":""]]),onClick:c=>i<n.currentStep?e.$emit("step-clicked",i):null},[Fe(y(i)+" ",1),i>n.currentStep?(m(),h("div",us,y(s.getStepTitle(i)),1)):C("",!0)],10,cs),i<n.totalSteps?(m(),h("div",{key:0,class:w(["flex-1 h-1 mx-2",[n.currentStep>i?"bg-shield-blue":"bg-shield-gray-light"]])},null,2)):C("",!0)],2))),128))])])}const fs=Q(is,[["render",ds]]),ms={name:"FormFields",props:{fields:{type:Array,required:!0},modelValue:{type:Object,required:!0}},methods:{updateField(e,t){const n={...this.modelValue,[e]:t};this.$emit("update:modelValue",n)}}},hs=["for"],ps=["type","id","value","onInput","required"],gs=["id","value","onChange","required"],bs=["value"],vs={key:2,class:"space-y-2"},ys=["id","name","value","checked","onChange","required"],xs=["for"],_s=["id","value","onInput","required"];function ks(e,t,n,r,a,s){return m(),h("form",{onSubmit:t[0]||(t[0]=Pn(()=>{},["prevent"])),class:"space-y-6"},[(m(!0),h(O,null,N(n.fields,i=>(m(),h("div",{key:i.name,class:"space-y-2"},[f("label",{for:i.name,class:"block text-shield-gray-dark font-medium"},y(i.label),9,hs),["text","number","date"].includes(i.type)?(m(),h("input",{key:0,type:i.type,id:i.name,value:n.modelValue[i.name],onInput:c=>s.updateField(i.name,c.target.value),required:i.required,class:"w-full px-4 py-2 border border-shield-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-shield-blue focus:border-transparent"},null,40,ps)):i.type==="select"?(m(),h("select",{key:1,id:i.name,value:n.modelValue[i.name],onChange:c=>s.updateField(i.name,c.target.value),required:i.required,class:"w-full px-4 py-2 border border-shield-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-shield-blue focus:border-transparent"},[t[1]||(t[1]=f("option",{value:""},"Selecteer een optie",-1)),(m(!0),h(O,null,N(i.options,c=>(m(),h("option",{key:c.value,value:c.value},y(c.label),9,bs))),128))],40,gs)):i.type==="radio"?(m(),h("div",vs,[(m(!0),h(O,null,N(i.options,c=>(m(),h("div",{key:c.value,class:"flex items-center"},[f("input",{type:"radio",id:i.name+"-"+c.value,name:i.name,value:c.value,checked:n.modelValue[i.name]===c.value,onChange:o=>s.updateField(i.name,c.value),required:i.required,class:"mr-2"},null,40,ys),f("label",{for:i.name+"-"+c.value},y(c.label),9,xs)]))),128))])):i.type==="textarea"?(m(),h("textarea",{key:3,id:i.name,value:n.modelValue[i.name],onInput:c=>s.updateField(i.name,c.target.value),required:i.required,rows:"4",class:"w-full px-4 py-2 border border-shield-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-shield-blue focus:border-transparent"},null,40,_s)):C("",!0)]))),128))],32)}const ws=Q(ms,[["render",ks]]);const Ss={name:"LetselschadeForm",components:{CategorySelector:ss,StepIndicator:fs,FormFields:ws},props:{formData:{type:Object,required:!0},questions:{type:Object,required:!0},lead_types:{type:Array,required:!0},mainData:{type:Object,required:!0}},data(){return{selectedCategory:null,currentStep:1,localFormData:{...this.formData},direction:"slide",errors:{},isLoading:!1}},methods:{getCategoryTitle(e){const t=this.lead_types.find(n=>n.id===e);return t?t.name:""},getStepTitle(e){switch(e){case 1:return"Aansprakelijkheid";case 2:return"Schade";case 3:return"Arbeidsongeschiktheid";case 4:return"Overig";case 5:return"Overzicht";default:return""}},getStepFields(e){return{1:[{id:"erkenning",name:"erkenning",label:this.questions.erkenning,type:"switch",required:!0,displayedIf:[{field:"lead_type",value:[1,2]}],options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"toelichting_aansprakelijkheid",name:"toelichting_aansprakelijkheid",label:this.questions.toelichting_aansprakelijkheid,type:"textarea",required:!0,options:null},{id:"wanneer_ongeval",name:"wanneer_ongeval",label:this.questions.wanneer_ongeval,type:"radio",required:!0,options:[{value:"Korter dan 1 maand geleden",label:"Korter dan 1 maand geleden"},{value:"Maximaal 1 jaar geleden",label:"Maximaal 1 jaar geleden"},{value:"Tussen 1 en 3 jaar geleden",label:"Tussen 1 en 3 jaar geleden"},{value:"Langer dan 3 jaar geleden",label:"Langer dan 3 jaar geleden"}]},{id:"eerder_verhaal",name:"eerder_verhaal",label:this.questions.eerder_verhaal,type:"switch",required:!0,options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"manier_verhaal",name:"manier_verhaal",label:this.questions.manier_verhaal,type:"radio",required:!0,displayedIf:[{field:"lead_type",value:[1,2,5,7],operator:"AND"},{field:"eerder_verhaal",value:!0}],options:[{value:"Via rechtsbijstandsverzekering",label:"Via rechtsbijstandsverzekering"},{value:"Via letselschadebureau",label:"Via letselschadebureau"},{value:"Via advocaat",label:"Via advocaat"},{value:"Zelfstandig",label:"Zelfstandig"},{value:"Op een andere manier",label:"Op een andere manier"}]},{id:"juridische_hulp",name:"juridische_hulp",label:this.questions.juridische_hulp,type:"radio",required:!0,displayedIf:[{field:"lead_type",value:[1,2,5,7],operator:"AND"},{field:"eerder_verhaal",value:!1,operator:"OR"},{field:"manier_verhaal",value:["Zelfstandig","Op een andere manier"]}],options:[{value:"Ja",label:"Ja"},{value:"Ja, zo spoedig mogelijk",label:"Ja, zo spoedig mogelijk"},{value:"Ik wil eerst meer informatie",label:"Ik wil eerst meer informatie"}]},{id:"reden_ontevreden",name:"reden_ontevreden",label:this.questions.reden_ontevreden,type:"textarea",required:!0,displayedIf:[{field:"manier_verhaal",value:["Via rechtsbijstandsverzekering","Via letselschadebureau","Via advocaat"]}],extraHtmlTop:"<h3 class='text-shield-gray-dark text-lg font-bold'>Bent u ergens ontevreden over?</h3><p>Ontevredenheid over een schadebehandelaar is geen onbekend verschijnsel. U bezoekt deze website waarschijnlijk omdat u met vragen zit. Hieronder kunt u deze aangeven waar u mee zit. Een second opinion of overname van uw zaak door een van onze betrouwbare experts behoort ook tot de mogelijkheden.</p>",options:[]},{id:"interesse_overname_secondopinion",name:"interesse_overname_secondopinion",label:this.questions.interesse_overname_secondopinion,type:"radio",required:!0,displayedIf:[{field:"manier_verhaal",value:["Via rechtsbijstandsverzekering","Via letselschadebureau","Via advocaat"]}],extraHtmlTop:"<h3 class='text-shield-gray-dark text-lg font-bold'>Kan een ander mij wel helpen?</h3><p>Een overname van uw zaak door onze experts is kosteloos. Er zal vooraf een gesprek plaatsvinden over de zaak en mogelijke overname. Met een schriftelijke machtiging kan een zaak door ons worden overgenomen. Bij een overname hoeft u zich geen zorgen te maken over kosten of uw huidige behandelaar; uw recht tot overname is wettelijk bepaald.</p>",options:[{value:"Een overname",label:"Een overname"},{value:"Een second opinion",label:"Een second opinion"},{value:"Meer informatie",label:"Meer informatie"}]},{id:"durf_aansprakelijk",name:"durf_aansprakelijk",label:this.questions.durf_aansprakelijk,type:"switch",required:!0,displayedIf:[{field:"lead_type",value:[2]}],options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"data_tegenpartij",name:"data_tegenpartij",label:this.questions.data_tegenpartij,type:"switch",required:!0,displayedIf:[{field:"lead_type",value:[5,7],operator:"OR"},{field:"lead_type",value:[1],operator:"AND"},{field:"erkenning",value:!1}],options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"politie",name:"politie",label:this.questions.politie,type:"switch",required:!0,displayedIf:[{field:"lead_type",value:[5,7],operator:"OR"},{field:"lead_type",value:[1],operator:"AND"},{field:"erkenning",value:!1}],options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"politie_inspectie",name:"politie_inspectie",label:this.questions.politie_inspectie,type:"switch",required:!0,displayedIf:[{field:"lead_type",value:[2],operator:"AND"},{field:"erkenning",value:!1}],options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]}],2:[{id:"soort_letsel",name:"soort_letsel",label:this.questions.soort_letsel,type:"radio",required:!0,options:[{value:"Licht (herstel korter dan 3 maanden)",label:"Licht (herstel korter dan 3 maanden)"},{value:"Middel",label:"Middel"},{value:"Zwaar (herstel langer dan 6 maanden of blijvend)",label:"Zwaar (herstel langer dan 6 maanden of blijvend)"}]},{id:"omschrijving_letsel",name:"omschrijving_letsel",label:this.questions.omschrijving_letsel,type:"textarea",required:!0},{id:"behandeling",name:"behandeling",label:this.questions.behandeling,type:"radio",required:!0,options:[{value:"Niet onder behandeling geweest",label:"Niet onder behandeling geweest"},{value:"1 keer of minimaal behandeld",label:"1 keer of minimaal behandeld"},{value:"Nog onder behandeling",label:"Nog onder behandeling"}]},{id:"opgelopen_schade",name:"opgelopen_schade",label:this.questions.opgelopen_schade,type:"radio",required:!0,options:[{value:"Minder dan € 1.000,-",label:"Minder dan € 1.000,-"},{value:"€ 1.000,- tot € 10.000,-",label:"€ 1.000,- tot € 10.000,-"},{value:"Meer dan € 10.000,-",label:"Meer dan € 10.000,-"},{value:"Geen idee",label:"Geen idee"}]}],3:[{id:"arbeidsongeschiktheid",name:"arbeidsongeschiktheid",label:this.questions.arbeidsongeschiktheid,type:"radio",required:!0,options:[{value:"Volledig",label:"Volledig"},{value:"Gedeeltelijk / herstellend",label:"Gedeeltelijk / herstellend"},{value:"Geen",label:"Geen"}]},{id:"duur_ao",name:"duur_ao",label:this.questions.duur_ao,type:"switch",required:!0,displayedIf:[{field:"arbeidsongeschiktheid",value:["Volledig","Gedeeltelijk / herstellend"]}],options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"huishoudelijk",name:"huishoudelijk",label:this.questions.huishoudelijk,type:"radio",required:!0,options:[{value:"Ja blijvend",label:"Ja blijvend"},{value:"Ja langer dan 3 maanden",label:"Ja langer dan 3 maanden"},{value:"Ja korter dan 3 maanden",label:"Ja korter dan 3 maanden"},{value:"Nee",label:"Nee"}]},{id:"zelfstandig",name:"zelfstandig",label:this.questions.zelfstandig,type:"switch",required:!0,options:[{value:!0,label:"Ja"},{value:!1,label:"Nee"}]},{id:"leeftijdsgroep",name:"leeftijdsgroep",label:this.questions.leeftijdsgroep,type:"radio",required:!0,options:[{value:"Jonger dan 18",label:"Jonger dan 18"},{value:"Tussen 18 - 25",label:"Tussen 18 - 25"},{value:"Tussen 26 - 50",label:"Tussen 26 - 50"},{value:"Tussen 51 - 67",label:"Tussen 51 - 67"},{value:"Ouder dan 67",label:"Ouder dan 67"}]}],4:[{id:"gender",name:"gender",type:"switch",required:!0,options:[{value:"m",label:"Dhr."},{value:"f",label:"Mevr."}]},{id:"name",name:"name",label:"Naam",type:"textGroup",required:!0,groupFields:[{id:"firstname",name:"firstname",type:"text",required:!0,placeholder:"Voornaam"},{id:"lastname",name:"lastname",type:"text",required:!0,placeholder:"Achternaam"}]},{id:"address",name:"address",label:"Postcode/Huisnummer",type:"textGroup",required:!0,groupFields:[{id:"postal_code_id",name:"postal_code_id",placeholder:"1234",type:"text",required:!0,lengthPercentage:50,maxlength:"4",pattern:"[0-9]*",inputmode:"numeric"},{id:"postal_code_letters",name:"postal_code_letters",placeholder:"AB",type:"text",required:!0,lengthPercentage:25,maxlength:"2",pattern:"[A-Za-z]*"},{id:"house_number",name:"house_number",placeholder:"12-a",type:"text",required:!0,lengthPercentage:25}]},{id:"email",name:"email",label:"Email",type:"email",required:!0,placeholder:"voorbeeld@email.nl"},{id:"phone",name:"phone",label:"Telefoon",type:"tel",required:!0,placeholder:"06 12345678"},{id:"best_time_to_call",name:"best_time_to_call",label:"Wanneer bent u het beste te bereiken?",type:"textGroup",required:!0,groupFields:[{id:"best_time_hour",name:"best_time_hour",label:"Uur",type:"select",required:!0,lengthPercentage:30,options:Array.from({length:9},(n,r)=>({value:String(r+9).padStart(2,"0"),label:String(r+9).padStart(2,"0")}))},{id:"best_time_minute",name:"best_time_minute",label:"Minuten",type:"select",required:!0,lengthPercentage:30,options:[{value:"00",label:"00"},{value:"15",label:"15"},{value:"30",label:"30"},{value:"45",label:"45"}]},{id:"best_time_day",name:"best_time_day",label:"Dag",type:"select",required:!0,lengthPercentage:40,options:[{value:"maandag",label:"Maandag"},{value:"dinsdag",label:"Dinsdag"},{value:"woensdag",label:"Woensdag"},{value:"donderdag",label:"Donderdag"},{value:"vrijdag",label:"Vrijdag"}]}]},{id:"details",name:"details",label:"Eventuele vragen en/ of opmerkingen:",type:"textarea",required:!0,placeholder:"Uw vragen of opmerkingen..."}],5:[{id:"overview",name:"overview",type:"overview"}]}[e]||[]},shouldDisplayField(e){if(!e.displayedIf)return!0;const t=e.displayedIf;let n=this.evaluateCondition(t[0]);if(n&&t[0].operator==="OR")return n;for(let r=0;r<t.length-1;r++){const a=t[r],s=t[r+1],i=this.evaluateCondition(s);a.operator==="AND"?n=n&&i:a.operator==="OR"?n=n||i:n=n&&i}return n},evaluateCondition(e){const t=this.localFormData[e.field];return Array.isArray(e.value)?e.value.includes(t):t===e.value},handleFieldChange(e,t){this.localFormData[e]=t,this.errors[e]&&delete this.errors[e],this.$emit("update:formData",this.localFormData)},goBack(){this.currentStep>1?(this.direction="slide-reverse",this.currentStep--):(this.direction="slide",this.selectedCategory=null,this.currentStep=1)},backToCategories(){this.selectedCategory=null,this.currentStep=1,this.localFormData={...this.formData}},handleCategorySelection(e){this.direction="slide",this.selectedCategory=e,this.currentStep=1,this.localFormData={...this.formData,lead_type:e},this.$emit("update:mainData",{...this.mainData,request:{...this.mainData.request,register_webreaction:{...this.mainData.request.register_webreaction,lead_type_id:e}}})},validateStep(e){const t=this.getStepFields(e),n={};return t.forEach(r=>{if(this.shouldDisplayField(r)&&r.required)if(r.type==="textGroup"&&r.groupFields)r.groupFields.forEach(a=>{const s=this.localFormData[a.id];this.isEmptyValue(s)?n[a.id]="Dit veld is verplicht":a.type==="email"&&!this.isValidEmail(s)?n[a.id]="Vul een geldig e-mailadres in":a.type==="tel"&&!this.isValidDutchPhone(s)&&(n[a.id]="Vul een geldig Nederlands telefoonnummer in")});else{const a=this.localFormData[r.id];this.isEmptyValue(a)?n[r.id]="Dit veld is verplicht":r.type==="email"&&!this.isValidEmail(a)?n[r.id]="Vul een geldig e-mailadres in":r.type==="tel"&&!this.isValidDutchPhone(a)&&(n[r.id]="Vul een geldig Nederlands telefoonnummer in")}}),this.errors=n,Object.keys(n).length>0&&this.$nextTick(()=>{const r=Object.keys(n)[0],a=document.getElementById(r);a&&a.scrollIntoView({behavior:"smooth",block:"center"})}),Object.keys(n).length===0},isEmptyValue(e){return e==null?!0:typeof e=="string"?e.trim()==="":Array.isArray(e)?e.length===0:!1},async nextStep(){if(this.currentStep<5&&this.validateStep(this.currentStep))if(this.currentStep===4)try{await this.prepareFormSubmission(),this.direction="slide",this.currentStep++}catch(e){console.error("Error submitting form:",e);return}else this.direction="slide",this.currentStep++},async prepareFormSubmission(){const e={gender:this.localFormData.gender,firstname:this.localFormData.firstname,lastname:this.localFormData.lastname,email:this.localFormData.email,telephone:this.localFormData.phone,house_number:this.localFormData.house_number,postal_code_id:this.localFormData.postal_code_id,postal_code_letters:this.localFormData.postal_code_letters},t=a=>a===!0||a===1?"Ja":a===!1||a===0?"Nee":a,n={};for(let a=1;a<=3;a++)this.getStepFields(a).forEach(i=>{this.shouldDisplayField(i)&&(i.type==="textGroup"&&i.groupFields?i.groupFields.forEach(c=>{n[this.questions[c.id]]=t(this.localFormData[c.id])}):n[this.questions[i.id]]=t(this.localFormData[i.id]))});n["Wanneer bent u het beste te bereiken?"]=`${this.localFormData.best_time_hour}:${this.localFormData.best_time_minute} ${this.localFormData.best_time_day}`,n["Eventuele vragen en/ of opmerkingen:"]=this.localFormData.details;const r={...this.mainData,request:{...this.mainData.request,register_webreaction:{...this.mainData.request.register_webreaction,...e,json_details:n}}};return console.log("Updated mainData:",r),this.sendDataToApi(r)},async sendDataToApi(e){this.isLoading=!0;try{const t=await fetch("https://extranet.letselschadeclaimen.nl/api",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();console.log("API Response:",n),this.$emit("form-submitted",{success:!0,data:n})}catch(t){console.error("Error sending data to API:",t),this.$emit("form-submitted",{success:!1,error:t.message})}finally{this.isLoading=!1}},getFieldDisplayValue(e){if(!e)return"";const t=this.localFormData[e.id];if(t==null)return"";if(e.options){const n=e.options.find(r=>r.value===t);return n?n.label:t}return e.type==="textGroup"&&e.groupFields?e.groupFields.map(n=>this.localFormData[n.id]).filter(Boolean).join(" "):t},handlePostalCodeLetters(e,t){const n=t.toUpperCase().replace(/[^A-Z]/g,"");this.handleFieldChange(e,n)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},isValidDutchPhone(e){if(!e)return!1;const t=e.replace(/[\s\-\(\)]/g,"");return t.length>=10&&/^\d+$/.test(t)},handleStepClick(e){if(e<this.currentStep){let t=!0;for(let n=1;n<=e;n++)if(!this.validateStep(n)){t=!1;break}t&&(this.direction="slide-reverse",this.currentStep=e)}}},watch:{localFormData:{deep:!0,handler(e){this.$emit("update:formData",e)}}},computed:{stepTitles(){return{1:this.getStepTitle(1),2:this.getStepTitle(2),3:this.getStepTitle(3),4:this.getStepTitle(4),5:this.getStepTitle(5)}}}},As={class:"max-w-2xl mx-auto"},Cs={key:"form"},Os={class:"bg-white rounded-lg shadow-md p-6"},Ps={class:"text-shield-blue-dark font-cinzel mb-6 text-center"},js={class:"text-lg font-cinzel text-shield-blue-dark mb-4"},Is={key:0,class:"space-y-6"},Ds={class:"text-center space-y-4"},Es={class:"text-2xl font-cinzel text-shield-blue-dark"},Fs={class:"text-shield-gray-dark"},Ns={class:"space-y-4"},Ts={key:0,class:"space-y-2"},zs={class:"block text-sm font-medium text-shield-gray-dark mb-2"},Ls={class:"inline-flex"},Ms=["onClick"],qs=["onClick"],Rs={key:0,class:"mt-1 text-sm text-red-500"},Vs=["innerHTML"],Us={class:"block text-sm font-medium text-shield-gray-dark"},Bs={key:1,class:"space-y-2"},Ws=["id","name","value","onUpdate:modelValue","onChange"],Ys=["for"],Gs={key:0,class:"mt-1 text-sm text-red-500"},Hs={key:2,class:"mt-1"},Ks=["id","onUpdate:modelValue","onInput","placeholder"],Xs={key:0,class:"mt-1 text-sm text-red-500"},Js={key:3,class:"mt-1"},Zs=["id","onUpdate:modelValue","onInput","placeholder"],Qs={key:0,class:"mt-1 text-sm text-red-500"},$s={key:4,class:"mt-1"},ei=["id","onUpdate:modelValue","onInput","placeholder"],ti={key:0,class:"mt-1 text-sm text-red-500"},ni={key:5,class:"mt-1"},ai=["id","onUpdate:modelValue","onInput","placeholder"],ri={key:0,class:"mt-1 text-sm text-red-500"},si={key:6,class:"mt-1"},ii=["id","onUpdate:modelValue","onChange"],oi=["value"],li={key:0,class:"mt-1 text-sm text-red-500"},ci={key:7,class:"mt-1"},ui={class:"flex flex-wrap"},di={class:"block text-sm font-medium text-shield-gray-dark mb-1"},fi={key:0,class:"inline-flex"},mi=["onClick"],hi=["onClick"],pi=["id","onUpdate:modelValue","onChange"],gi=["value"],bi=["type","id","onUpdate:modelValue","onInput","placeholder","maxlength","pattern","inputmode"],vi={key:3,class:"mt-1 text-sm text-red-500"},yi={key:8,class:"space-y-6"},xi={class:"mt-8 space-y-6"},_i={class:"space-y-4"},ki={class:"text-xl font-cinzel text-shield-blue-dark text-center"},wi={class:"text-xl font-cinzel text-shield-blue-dark"},Si={class:"space-y-4"},Ai={class:"flex flex-col"},Ci={class:"font-medium text-shield-blue-dark"},Oi={class:"text-shield-gray-700"},Pi={class:"flex justify-between pt-4"},ji=["disabled"],Ii=["disabled"],Di={key:0,class:"fas fa-spinner fa-spin mr-2"},Ei=["disabled"],Fi=["disabled"],Ni={key:0,class:"fas fa-spinner fa-spin mr-2"};function Ti(e,t,n,r,a,s){const i=te("CategorySelector"),c=te("StepIndicator");return m(),h("div",As,[W(Te,{name:a.direction,mode:"out-in"},{default:Ne(()=>[a.selectedCategory?(m(),h("div",Cs,[f("div",Os,[f("h2",Ps,y(s.getCategoryTitle(a.selectedCategory)),1),W(c,{currentStep:a.currentStep,totalSteps:5,stepTitles:s.stepTitles,onStepClicked:s.handleStepClick},null,8,["currentStep","stepTitles","onStepClicked"]),W(Te,{name:a.direction,mode:"out-in"},{default:Ne(()=>[(m(),h("div",{key:a.currentStep,class:"mt-6"},[D(f("div",null,[f("h3",js,y(s.getStepTitle(a.currentStep)),1),a.selectedCategory?(m(),h("div",Is,[f("div",Ds,[f("h1",Es,y(s.getCategoryTitle()),1),f("p",Fs,y(s.getStepTitle()),1)]),f("div",Ns,[(m(!0),h(O,null,N(s.getStepFields(a.currentStep),o=>D((m(),h("div",{key:o.id,class:"space-y-2"},[o.type==="switch"?(m(),h("div",Ts,[f("label",zs,y(o.label),1),f("div",Ls,[f("button",{type:"button",class:w([a.localFormData[o.id]===o.options[0].value?"bg-shield-blue text-white":"bg-white text-shield-gray-700 border-shield-gray-400","px-4 py-2 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-l-md border-r-0",a.errors[o.id]?"border-red-500":""]),onClick:l=>s.handleFieldChange(o.id,a.localFormData[o.id]===o.options[0].value?null:o.options[0].value)},y(o.options[0].label),11,Ms),f("button",{type:"button",class:w([a.localFormData[o.id]===o.options[1].value?"bg-shield-blue text-white":"bg-white text-shield-gray-700 border-shield-gray-400","px-4 py-2 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-r-md",a.errors[o.id]?"border-red-500":""]),onClick:l=>s.handleFieldChange(o.id,a.localFormData[o.id]===o.options[1].value?null:o.options[1].value)},y(o.options[1].label),11,qs)]),a.errors[o.id]?(m(),h("p",Rs,y(a.errors[o.id]),1)):C("",!0)])):(m(),h(O,{key:1},[o.extraHtmlTop?(m(),h("div",{key:0,innerHTML:o.extraHtmlTop},null,8,Vs)):C("",!0),f("label",Us,y(o.label),1),o.type==="radio"?(m(),h("div",Bs,[(m(!0),h(O,null,N(o.options,l=>(m(),h("div",{key:l.value,class:"flex items-center"},[D(f("input",{type:"radio",id:o.id+"_"+l.value,name:o.id,value:l.value,"onUpdate:modelValue":d=>a.localFormData[o.id]=d,onChange:d=>s.handleFieldChange(o.id,d.target.value),class:w(["h-4 w-4 focus:ring-shield-blue",a.errors[o.id]?"border-red-500 text-red-500":"border-shield-gray-300 text-shield-blue"])},null,42,Ws),[[In,a.localFormData[o.id]]]),f("label",{for:o.id+"_"+l.value,class:"ml-3 block text-sm text-shield-gray-dark"},y(l.label),9,Ys)]))),128)),a.errors[o.id]?(m(),h("p",Gs,y(a.errors[o.id]),1)):C("",!0)])):o.type==="textarea"?(m(),h("div",Hs,[D(f("textarea",{id:o.id,"onUpdate:modelValue":l=>a.localFormData[o.id]=l,onInput:l=>s.handleFieldChange(o.id,l.target.value),rows:"3",class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white",a.errors[o.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"]),placeholder:o.placeholder||""},null,42,Ks),[[he,a.localFormData[o.id]]]),a.errors[o.id]?(m(),h("p",Xs,y(a.errors[o.id]),1)):C("",!0)])):o.type==="text"?(m(),h("div",Js,[D(f("input",{type:"text",id:o.id,"onUpdate:modelValue":l=>a.localFormData[o.id]=l,onInput:l=>s.handleFieldChange(o.id,l.target.value),class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white",a.errors[o.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"]),placeholder:o.placeholder||""},null,42,Zs),[[he,a.localFormData[o.id]]]),a.errors[o.id]?(m(),h("p",Qs,y(a.errors[o.id]),1)):C("",!0)])):o.type==="email"?(m(),h("div",$s,[D(f("input",{type:"email",id:o.id,"onUpdate:modelValue":l=>a.localFormData[o.id]=l,onInput:l=>s.handleFieldChange(o.id,l.target.value),class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white",a.errors[o.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"]),placeholder:o.placeholder||""},null,42,ei),[[he,a.localFormData[o.id]]]),a.errors[o.id]?(m(),h("p",ti,y(a.errors[o.id]),1)):C("",!0)])):o.type==="tel"?(m(),h("div",ni,[D(f("input",{type:"tel",id:o.id,"onUpdate:modelValue":l=>a.localFormData[o.id]=l,onInput:l=>s.handleFieldChange(o.id,l.target.value),class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white",a.errors[o.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"]),placeholder:o.placeholder||""},null,42,ai),[[he,a.localFormData[o.id]]]),a.errors[o.id]?(m(),h("p",ri,y(a.errors[o.id]),1)):C("",!0)])):o.type==="select"?(m(),h("div",si,[D(f("select",{id:o.id,"onUpdate:modelValue":l=>a.localFormData[o.id]=l,onChange:l=>s.handleFieldChange(o.id,l.target.value),class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm",a.errors[o.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"])},[t[4]||(t[4]=f("option",{value:""},"Selecteer een optie",-1)),(m(!0),h(O,null,N(o.options,l=>(m(),h("option",{key:l.value,value:l.value},y(l.label),9,oi))),128))],42,ii),[[dt,a.localFormData[o.id]]]),a.errors[o.id]?(m(),h("p",li,y(a.errors[o.id]),1)):C("",!0)])):o.type==="textGroup"?(m(),h("div",ci,[f("div",ui,[(m(!0),h(O,null,N(o.groupFields,l=>(m(),h("div",{key:l.id,style:Dn({width:l.lengthPercentage?l.lengthPercentage+"%":"auto",flex:l.lengthPercentage?"none":"1"}),class:"min-w-0"},[f("label",di,y(l.label),1),l.type==="switch"?(m(),h("div",fi,[f("button",{type:"button",class:w([a.localFormData[l.id]===l.options[0].value?"bg-shield-blue text-white":"bg-white text-shield-gray-700 border-shield-gray-400","px-3 py-1.5 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-l-md border-r-0",a.errors[l.id]?"border-red-500":""]),onClick:d=>s.handleFieldChange(l.id,a.localFormData[l.id]===l.options[0].value?null:l.options[0].value)},y(l.options[0].label),11,mi),f("button",{type:"button",class:w([a.localFormData[l.id]===l.options[1].value?"bg-shield-blue text-white":"bg-white text-shield-gray-700 border-shield-gray-400","px-3 py-1.5 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-r-md",a.errors[l.id]?"border-red-500":""]),onClick:d=>s.handleFieldChange(l.id,a.localFormData[l.id]===l.options[1].value?null:l.options[1].value)},y(l.options[1].label),11,hi)])):l.type==="select"?D((m(),h("select",{key:1,id:l.id,"onUpdate:modelValue":d=>a.localFormData[l.id]=d,onChange:d=>s.handleFieldChange(l.id,d.target.value),class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm",a.errors[l.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"])},[t[5]||(t[5]=f("option",{value:""},"Selecteer een optie",-1)),(m(!0),h(O,null,N(l.options,d=>(m(),h("option",{key:d.value,value:d.value},y(d.label),9,gi))),128))],42,pi)),[[dt,a.localFormData[l.id]]]):D((m(),h("input",{key:2,type:l.type,id:l.id,"onUpdate:modelValue":d=>a.localFormData[l.id]=d,onInput:d=>l.id==="postal_code_letters"?s.handlePostalCodeLetters(l.id,d.target.value):s.handleFieldChange(l.id,d.target.value),class:w(["block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white",a.errors[l.id]?"border-red-500 focus:border-red-500":"border-shield-gray-400 focus:border-shield-blue"]),placeholder:l.placeholder||"",maxlength:l.maxlength,pattern:l.pattern,inputmode:l.inputmode},null,42,bi)),[[En,a.localFormData[l.id]]]),a.errors[l.id]?(m(),h("p",vi,y(a.errors[l.id]),1)):C("",!0)],4))),128))])])):o.type==="overview"?(m(),h("div",yi,[t[6]||(t[6]=f("div",{class:"text-center space-y-4"},[f("h2",{class:"font-logo mb-2 text-xl text-blue-900"}," Letselschade Test verstuurd! "),f("p",{class:"text-lg mb-2"}," Bedankt voor het inzenden van uw gegevens over uw ongeval. Wij gaan zo spoedig mogelijk en zo zorgvuldig mogelijk uw situatie nader bekijken. "),f("p",{class:"text-lg"}," Een letselschade specialist/advocaat neemt daarna per mail of telefonisch contact op om u juridisch advies te geven. Wij wijzen er nogmaals op dat een gesprek vrijblijvend is en zonder kosten. ")],-1)),f("div",xi,[f("div",_i,[f("h3",ki,y(s.getCategoryTitle(a.selectedCategory)),1)]),(m(),h(O,null,N([1,2,3],l=>f("div",{key:l,class:"space-y-4"},[f("h3",wi,y(s.getStepTitle(l)),1),f("div",Si,[(m(!0),h(O,null,N(s.getStepFields(l),d=>D((m(),h("div",{key:d.id,class:"space-y-2"},[f("div",Ai,[f("span",Ci,y(d.label),1),f("span",Oi,[f("em",null,y(s.getFieldDisplayValue(d)),1)])])])),[[ne,s.shouldDisplayField(d)]])),128))])])),64))])])):C("",!0)],64))])),[[ne,s.shouldDisplayField(o)]])),128))]),f("div",Pi,[a.currentStep===5?(m(),h(O,{key:0},[f("button",{onClick:t[0]||(t[0]=(...o)=>s.backToCategories&&s.backToCategories(...o)),disabled:a.isLoading,class:"px-4 py-2 text-sm font-medium text-shield-blue hover:text-shield-blue-dark focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"}," Opnieuw beginnen ",8,ji),f("button",{onClick:t[1]||(t[1]=(...o)=>e.submitForm&&e.submitForm(...o)),disabled:a.isLoading,class:"px-4 py-2 text-sm font-medium text-white bg-shield-blue rounded-md hover:bg-shield-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shield-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center"},[a.isLoading?(m(),h("i",Di)):C("",!0),t[7]||(t[7]=Fe(" Naar andere pagina "))],8,Ii)],64)):(m(),h(O,{key:1},[f("button",{onClick:t[2]||(t[2]=(...o)=>s.goBack&&s.goBack(...o)),disabled:a.isLoading,class:"px-4 py-2 text-sm font-medium text-shield-blue hover:text-shield-blue-dark focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"}," Terug ",8,Ei),f("button",{onClick:t[3]||(t[3]=(...o)=>s.nextStep&&s.nextStep(...o)),disabled:a.isLoading,class:"px-4 py-2 text-sm font-medium text-white bg-shield-blue rounded-md hover:bg-shield-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shield-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center"},[a.isLoading?(m(),h("i",Ni)):C("",!0),t[8]||(t[8]=Fe(" Volgende "))],8,Fi)],64))])])):C("",!0)],512),[[ne,a.currentStep>=1&&a.currentStep<=5]])]))]),_:1},8,["name"])])])):(m(),jn(i,{onCategorySelected:s.handleCategorySelection,key:"categories",lead_types:n.lead_types,questions:n.questions},null,8,["onCategorySelected","lead_types","questions"]))]),_:1},8,["name"])])}const zi=Q(Ss,[["render",Ti]]),Li={};function Mi(e,t){return t[0]||(t[0]=ze('<h2 class="text-xl sm:text-2xl font-cinzel text-shield-blue-dark mb-4 text-center"> Informatie </h2><div class="p-6"><h2 class="font-bold font-title text-shield-blue-dark text-3xl mb-3"> Wat is letselschade? </h2><p> Letselschade ontstaat wanneer u door een ongeval of andere gebeurtenis lichamelijke en/of geestelijke schade oploopt. Dit kan variëren van een whiplash of botbreuken tot psychisch letsel door een traumatische gebeurtenis. Ook als u denkt het valt wel mee, claim toch want anders kunt u de schade later niet meer verhalen. Wij zorgen ervoor dat uw schade gemeld wordt en dat eventuele verjaring gestuit is. </p><h2 class="font-bold text-shield-blue-dark text-3xl mb-3"> Wie kan u het beste helpen? </h2><p> Een gespecialiseerde letselschade-expert is essentieel voor een juiste inschatting en afhandeling van uw schadevergoeding. </p><p> Bij Letselschade Claimen heeft u contact wij u met deskundige letselschade-expert die u persoonlijk begeleidt tijdens het hele traject. </p><p>Onze experts zijn ingeschreven bij het NIVRE.</p><h2 class="font-bold text-shield-blue-dark text-3xl mb-3"> Wat is juridische bijstand? </h2><p> Als u een letselschadeclaim heeft waarbij er een aansprakelijke tegenpartij is, dan zal de letselschade-expert in overleg met u bepalen dat er geen nota aan u wordt gestuurd, maar dat hij zijn honorarium op de verzekeringsmaatschappij van de schuldige zal verhalen. U hoeft dus geen dure advocaatkosten te betalen of voor te schieten. Dit honorarium is een onderdeel van uw schadeclaim en wordt dan ook niet in mindering gebracht op uw schadevergoeding. </p></div>',2))}const qi=Q(Li,[["render",Mi]]),Ri={};function Vi(e,t){return m(),h(O,null,[t[0]||(t[0]=f("h2",{class:"text-xl sm:text-2xl font-cinzel text-shield-blue-dark mb-4 text-center"}," Persoonlijk Advies ",-1)),t[1]||(t[1]=f("div",{class:"p-6"},[f("h2",{class:"font-bold text-shield-blue-dark text-3xl mb-3"}," Hoe werkt het? "),f("p",null," U kunt door het invullen van de letselschade-test aangeven wat voor letsel u heeft opgelopen. Vervolgens neemt de letselschade-expert vrijblijvend contact met u op. Indien u dit wenst komt de expert bij u thuis langs om de situatie te bespreken en verder te overleggen hoe en welke schade hij voor u kan claimen. Onze letselschade-experts voldoen aan de hoogste eisen vakbekwaamheid en zijn geregistreerd bij het NIVRE. "),f("h2",{class:"font-bold text-shield-blue-dark text-3xl mb-3"}," Waarom Letselschade Claimen? "),f("p",null," Wij bieden een snelle, eenvoudige manier om uw letselschade te verhalen en facturen rechtstreeks aan de tegenpartij. Onze letselschade-expert staat klaar om u te helpen . Met de hoogste waardering van klant tevredenheid. ")],-1))],64)}const Ui=Q(Ri,[["render",Vi]]),Bi="/assets/logo-f38abc3a.png";const Wi={name:"App",components:{LetselschadeForm:zi,Info:qi,Advies:Ui},data(){return{currentPage:"test",lead_types:[{id:1,name:"Verkeersongeval",icon:"faCar",color:"bg-blue-500"},{id:2,name:"Bedrijfsongeval",icon:"faIndustry",color:"bg-green-500"},{id:5,name:"Ongeval door dieren",icon:"faPaw",color:"bg-purple-500"},{id:7,name:"Ongeval door gebrek wegdek",icon:"faRoad",color:"bg-orange-500"}],formData:{lead_type:null,erkenning:null,toelichting_aansprakelijkheid:"",wanneer_ongeval:null,eerder_verhaal:null,durf_aansprakelijk:null,manier_verhaal:null,juridische_hulp:null,data_tegenpartij:null,politie_inspectie:null,reden_ontevreden:"",interesse_overname_secondopinion:null,soort_letsel:null,omschrijving_letsel:"",behandeling:null,opgelopen_schade:null,arbeidsongeschiktheid:null,duur_ao:null,huishoudelijk:null,zelfstandig:null,leeftijdsgroep:null,best_time_to_call:null,details:null},questions:{lead_type:"Wat is de aard van uw ongeval?",erkenning:"Is er aansprakelijkheid erkend?",toelichting_aansprakelijkheid:"Wat is er precies gebeurd?",wanneer_ongeval:"Wanneer vond het ongeval plaats?",eerder_verhaal:"Heeft u geprobeerd de schade te claimen?",durf_aansprakelijk:"Vindt u het goed als uw werkgever aansprakelijk wordt gesteld?",manier_verhaal:"Hoe heeft u de schade geprobeerd te claimen?",juridische_hulp:"Heeft u interesse in kosteloze hulp?",data_tegenpartij:"Zijn de gegevens van de tegenpartij bekend?",politie:"Is de politie ter plaatse geweest?",politie_inspectie:"Is de politie of arbeidsinspectie ter plaatse geweest?",reden_ontevreden:"Waar bent u ontevreden over?",interesse_overname_secondopinion:"Waar heeft u interesse in?",soort_letsel:"Hoe ernstig is het letsel?",omschrijving_letsel:"Omschrijf uw opgelopen letsel",behandeling:"Bent u al onder medische behandeling (geweest)?",opgelopen_schade:"Kunt u een indicatie geven van de tot nu toe opgelopen schade?",arbeidsongeschiktheid:"Is er sprake van arbeidsongeschiktheid?",duur_ao:"Is de arbeidsongeschiktheid blijvend of langer dan 6 maanden?",huishoudelijk:"Is er behoefte aan huishoudelijke hulp? (ingehuurd of door familie/vrienden)",zelfstandig:"Bent u zelfstandig ondernemer?",leeftijdsgroep:"In welke leeftijdsgroep valt u?"},mainData:{request:{register_webreaction:{webmodule_id:1,lead_webreaction_type_id:1,lead_type_id:0,reference:null,domain_name:"m.letselschadeclaimen.nl",gender:"m",firstname:"",lastname:"",email:"",telephone:"",house_number:"",postal_code_id:"",postal_code_letters:"",json_details:{}}},user:{api_username:"api@ongevalclaimen.nl",api_password:"c8MaUXZ6"}}}},methods:{handleFormSubmission(e){console.log("Form submitted with data:",e)},updateMainData(e){this.mainData=e}}},Yi={class:"min-h-screen bg-shield-blue-light/10 pb-24 relative"},Gi={class:"bg-white border-b border-shield-gray-light shadow-sm"},Hi={class:"container mx-auto flex justify-center"},Ki={class:"flex space-x-8"},Xi={class:"container mx-auto px-4 py-6 sm:py-8"},Ji={class:"max-w-2xl mx-auto"},Zi={class:"max-w-2xl mx-auto"};function Qi(e,t,n,r,a,s){const i=te("LetselschadeForm"),c=te("Advies"),o=te("Info");return m(),h("div",Yi,[t[3]||(t[3]=ze('<header class="bg-shield-blue p-3 sm:p-4 shadow-lg"><div class="container mx-auto flex items-center justify-center gap-3 sm:gap-4 md:gap-6"><img src="'+Bi+'" alt="Letselschade Logo" class="h-12 sm:h-14 md:h-16"><h1 class="font-cinzel text-xl sm:text-2xl md:text-3xl tracking-normal"><span class="text-white">Letselschade</span><span class="text-shield-blue-light">test</span></h1></div></header>',1)),f("nav",Gi,[f("div",Hi,[f("div",Ki,[f("button",{onClick:t[0]||(t[0]=l=>a.currentPage="test"),class:w(["px-4 py-3 font-medium transition-colors border-b-2",a.currentPage==="test"?"text-shield-blue border-shield-blue":"text-shield-gray border-transparent"])}," Test ",2),f("button",{onClick:t[1]||(t[1]=l=>a.currentPage="advies"),class:w(["px-4 py-3 font-medium transition-colors border-b-2",a.currentPage==="advies"?"text-shield-blue border-shield-blue":"text-shield-gray border-transparent"])}," Advies ",2),f("button",{onClick:t[2]||(t[2]=l=>a.currentPage="info"),class:w(["px-4 py-3 font-medium transition-colors border-b-2",a.currentPage==="info"?"text-shield-blue border-shield-blue":"text-shield-gray border-transparent"])}," Info ",2)])])]),f("main",Xi,[W(Te,{name:"fade",mode:"out-in"},{default:Ne(()=>[(m(),h("div",{key:a.currentPage},[D(f("div",null,[W(i,{formData:a.formData,questions:a.questions,lead_types:a.lead_types,mainData:a.mainData,"onUpdate:mainData":s.updateMainData},null,8,["formData","questions","lead_types","mainData","onUpdate:mainData"])],512),[[ne,a.currentPage==="test"]]),D(f("div",Ji,[W(c)],512),[[ne,a.currentPage==="advies"]]),D(f("div",Zi,[W(o)],512),[[ne,a.currentPage==="info"]])]))]),_:1})]),t[4]||(t[4]=ze('<footer class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-shield-gray-light"><div class="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center text-xs text-shield-gray-dark"><p class="text-center sm:text-left mb-2 sm:mb-0"> Copyright © 2009-2025 Letselschadeclaimen.nl is een onderdeel van Letselschadebegeleiding B.V, te Breda KvK. Nummer.60256974 </p><p class="font-medium"><span class="text-shield-blue">Tel:</span> 088 - 076 76 76 </p></div></footer>',1))])}const $i=Q(Wi,[["render",Qi]]);const eo=Fn($i);eo.mount("#app");
