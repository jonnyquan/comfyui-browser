import{s as _e,n as ne,r as ke,f as ye,o as Ve,b as Ce,h as Re}from"../chunks/scheduler.89bf212d.js";import{S as pe,i as be,g as L,m as ee,s as B,h as j,j as A,n as te,f as E,c as z,k as w,a as J,x as C,y as x,l as Me,e as me,o as de,r as ae,u as oe,v as ce,d as R,p as Te,b as De,t as K,z as Be,w as ue,A as ie,B as Oe,C as Ze}from"../chunks/index.7c25bbc0.js";function $e(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ge(s){let e,t,l,r,n,i,c,d,u,b;return{c(){e=L("div"),t=L("button"),l=ee("Outputs"),n=B(),i=L("button"),c=ee("Collections"),this.h()},l(p){e=j(p,"DIV",{role:!0,class:!0});var k=A(e);t=j(k,"BUTTON",{role:!0,class:!0});var _=A(t);l=te(_,"Outputs"),_.forEach(E),n=z(k),i=j(k,"BUTTON",{role:!0,class:!0});var y=A(i);c=te(y,"Collections"),y.forEach(E),k.forEach(E),this.h()},h(){w(t,"role","tab"),w(t,"class",r="tab "+s[0]("outputs")),w(i,"role","tab"),w(i,"class",d="tab "+s[0]("collections")),w(e,"role","tablist"),w(e,"class","tabs tabs-boxed sticky top-0")},m(p,k){J(p,e,k),C(e,t),C(t,l),C(e,n),C(e,i),C(i,c),u||(b=[x(t,"click",s[3]),x(i,"click",s[4])],u=!0)},p(p,[k]){k&1&&r!==(r="tab "+p[0]("outputs"))&&w(t,"class",r),k&1&&d!==(d="tab "+p[0]("collections"))&&w(i,"class",d)},i:ne,o:ne,d(p){p&&E(e),u=!1,ke(b)}}}function Ke(s,e,t){let l,{activeTab:r="outputs"}=e;function n(d){t(2,r=d)}const i=()=>n("outputs"),c=()=>n("collections");return s.$$set=d=>{"activeTab"in d&&t(2,r=d.activeTab)},s.$$.update=()=>{s.$$.dirty&4&&t(0,l=function(d){return d===r?"tab-active":""})},[l,n,r,i,c]}class Qe extends pe{constructor(e){super(),be(this,e,Ke,Ge,_e,{activeTab:2})}}var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xe(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ze={exports:{}};(function(s,e){(function(t,l){s.exports=l()})(Xe,function(){var t=1e3,l=6e4,r=36e5,n="millisecond",i="second",c="minute",d="hour",u="day",b="week",p="month",k="quarter",_="year",y="date",v="Invalid Date",D=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(S){var o=["th","st","nd","rd"],a=S%100;return"["+S+(o[(a-20)%10]||o[a]||o[0])+"]"}},H=function(S,o,a){var h=String(S);return!h||h.length>=o?S:""+Array(o+1-h.length).join(a)+S},g={s:H,z:function(S){var o=-S.utcOffset(),a=Math.abs(o),h=Math.floor(a/60),f=a%60;return(o<=0?"+":"-")+H(h,2,"0")+":"+H(f,2,"0")},m:function S(o,a){if(o.date()<a.date())return-S(a,o);var h=12*(a.year()-o.year())+(a.month()-o.month()),f=o.clone().add(h,p),T=a-f<0,M=o.clone().add(h+(T?-1:1),p);return+(-(h+(a-f)/(T?f-M:M-f))||0)},a:function(S){return S<0?Math.ceil(S)||0:Math.floor(S)},p:function(S){return{M:p,y:_,w:b,d:u,D:y,h:d,m:c,s:i,ms:n,Q:k}[S]||String(S||"").toLowerCase().replace(/s$/,"")},u:function(S){return S===void 0}},$="en",P={};P[$]=Z;var W="$isDayjsObject",m=function(S){return S instanceof N||!(!S||!S[W])},O=function S(o,a,h){var f;if(!o)return $;if(typeof o=="string"){var T=o.toLowerCase();P[T]&&(f=T),a&&(P[T]=a,f=T);var M=o.split("-");if(!f&&M.length>1)return S(M[0])}else{var F=o.name;P[F]=o,f=F}return!h&&f&&($=f),f||!h&&$},I=function(S,o){if(m(S))return S.clone();var a=typeof o=="object"?o:{};return a.date=S,a.args=arguments,new N(a)},U=g;U.l=O,U.i=m,U.w=function(S,o){return I(S,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var N=function(){function S(a){this.$L=O(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[W]=!0}var o=S.prototype;return o.parse=function(a){this.$d=function(h){var f=h.date,T=h.utc;if(f===null)return new Date(NaN);if(U.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var M=f.match(D);if(M){var F=M[2]-1||0,V=(M[7]||"0").substring(0,3);return T?new Date(Date.UTC(M[1],F,M[3]||1,M[4]||0,M[5]||0,M[6]||0,V)):new Date(M[1],F,M[3]||1,M[4]||0,M[5]||0,M[6]||0,V)}}return new Date(f)}(a),this.init()},o.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},o.$utils=function(){return U},o.isValid=function(){return this.$d.toString()!==v},o.isSame=function(a,h){var f=I(a);return this.startOf(h)<=f&&f<=this.endOf(h)},o.isAfter=function(a,h){return I(a)<this.startOf(h)},o.isBefore=function(a,h){return this.endOf(h)<I(a)},o.$g=function(a,h,f){return U.u(a)?this[h]:this.set(f,a)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(a,h){var f=this,T=!!U.u(h)||h,M=U.p(a),F=function(re,Q){var se=U.w(f.$u?Date.UTC(f.$y,Q,re):new Date(f.$y,Q,re),f);return T?se:se.endOf(u)},V=function(re,Q){return U.w(f.toDate()[re].apply(f.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(Q)),f)},q=this.$W,G=this.$M,X=this.$D,he="set"+(this.$u?"UTC":"");switch(M){case _:return T?F(1,0):F(31,11);case p:return T?F(1,G):F(0,G+1);case b:var le=this.$locale().weekStart||0,ve=(q<le?q+7:q)-le;return F(T?X-ve:X+(6-ve),G);case u:case y:return V(he+"Hours",0);case d:return V(he+"Minutes",1);case c:return V(he+"Seconds",2);case i:return V(he+"Milliseconds",3);default:return this.clone()}},o.endOf=function(a){return this.startOf(a,!1)},o.$set=function(a,h){var f,T=U.p(a),M="set"+(this.$u?"UTC":""),F=(f={},f[u]=M+"Date",f[y]=M+"Date",f[p]=M+"Month",f[_]=M+"FullYear",f[d]=M+"Hours",f[c]=M+"Minutes",f[i]=M+"Seconds",f[n]=M+"Milliseconds",f)[T],V=T===u?this.$D+(h-this.$W):h;if(T===p||T===_){var q=this.clone().set(y,1);q.$d[F](V),q.init(),this.$d=q.set(y,Math.min(this.$D,q.daysInMonth())).$d}else F&&this.$d[F](V);return this.init(),this},o.set=function(a,h){return this.clone().$set(a,h)},o.get=function(a){return this[U.p(a)]()},o.add=function(a,h){var f,T=this;a=Number(a);var M=U.p(h),F=function(G){var X=I(T);return U.w(X.date(X.date()+Math.round(G*a)),T)};if(M===p)return this.set(p,this.$M+a);if(M===_)return this.set(_,this.$y+a);if(M===u)return F(1);if(M===b)return F(7);var V=(f={},f[c]=l,f[d]=r,f[i]=t,f)[M]||1,q=this.$d.getTime()+a*V;return U.w(q,this)},o.subtract=function(a,h){return this.add(-1*a,h)},o.format=function(a){var h=this,f=this.$locale();if(!this.isValid())return f.invalidDate||v;var T=a||"YYYY-MM-DDTHH:mm:ssZ",M=U.z(this),F=this.$H,V=this.$m,q=this.$M,G=f.weekdays,X=f.months,he=f.meridiem,le=function(Q,se,ge,we){return Q&&(Q[se]||Q(h,T))||ge[se].slice(0,we)},ve=function(Q){return U.s(F%12||12,Q,"0")},re=he||function(Q,se,ge){var we=Q<12?"AM":"PM";return ge?we.toLowerCase():we};return T.replace(Y,function(Q,se){return se||function(ge){switch(ge){case"YY":return String(h.$y).slice(-2);case"YYYY":return U.s(h.$y,4,"0");case"M":return q+1;case"MM":return U.s(q+1,2,"0");case"MMM":return le(f.monthsShort,q,X,3);case"MMMM":return le(X,q);case"D":return h.$D;case"DD":return U.s(h.$D,2,"0");case"d":return String(h.$W);case"dd":return le(f.weekdaysMin,h.$W,G,2);case"ddd":return le(f.weekdaysShort,h.$W,G,3);case"dddd":return G[h.$W];case"H":return String(F);case"HH":return U.s(F,2,"0");case"h":return ve(1);case"hh":return ve(2);case"a":return re(F,V,!0);case"A":return re(F,V,!1);case"m":return String(V);case"mm":return U.s(V,2,"0");case"s":return String(h.$s);case"ss":return U.s(h.$s,2,"0");case"SSS":return U.s(h.$ms,3,"0");case"Z":return M}return null}(Q)||M.replace(":","")})},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(a,h,f){var T,M=this,F=U.p(h),V=I(a),q=(V.utcOffset()-this.utcOffset())*l,G=this-V,X=function(){return U.m(M,V)};switch(F){case _:T=X()/12;break;case p:T=X();break;case k:T=X()/3;break;case b:T=(G-q)/6048e5;break;case u:T=(G-q)/864e5;break;case d:T=G/r;break;case c:T=G/l;break;case i:T=G/t;break;default:T=G}return f?T:U.a(T)},o.daysInMonth=function(){return this.endOf(p).$D},o.$locale=function(){return P[this.$L]},o.locale=function(a,h){if(!a)return this.$L;var f=this.clone(),T=O(a,h,!0);return T&&(f.$L=T),f},o.clone=function(){return U.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},S}(),fe=N.prototype;return I.prototype=fe,[["$ms",n],["$s",i],["$m",c],["$H",d],["$W",u],["$M",p],["$y",_],["$D",y]].forEach(function(S){fe[S[1]]=function(o){return this.$g(o,S[0],S[1])}}),I.extend=function(S,o){return S.$i||(S(o,N,I),S.$i=!0),I},I.locale=O,I.isDayjs=m,I.unix=function(S){return I(1e3*S)},I.en=P[$],I.Ls=P,I.p={},I})})(ze);var et=ze.exports;const tt=xe(et);async function Se(s,e){let r=(await(await fetch(e+"/browser/"+s)).json()).files;return r.forEach(n=>{const i=n.name.split(".").pop().toLowerCase();n.fileType="unknown",["png","webp","jpeg","jpg","gif"].includes(i)&&(n.fileType="image"),["mp4","webm","mov","avi","mkv"].includes(i)&&(n.fileType="video"),s==="collections"?n.url=`${e}/browser/collections/view?filename=${n.name}`:n.url=`${e}/view?filename=${n.name}`;const c=tt.unix(n.created_at);n.formattedDatetime=c.format("YYYY-MM-DD HH-mm-ss"),n.bytes/1024/1024>1?n.formattedSize=(n.bytes/1024/1024).toFixed(2)+" MB":n.formattedSize=Math.round(n.bytes/1024)+" KB"}),r}function Je(s,e){if(s>=e)return s;const t=document.documentElement.scrollHeight;return window.innerHeight+window.scrollY>=t?s+10:s}function Ee(s){let e,t,l;return{c(){e=L("img"),this.h()},l(r){e=j(r,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),this.h()},h(){w(e,"class","h-full w-full object-contain"),w(e,"loading","lazy"),ye(e.src,t=s[0].url)||w(e,"src",t),w(e,"alt",l=s[0].name)},m(r,n){J(r,e,n)},p(r,n){n&1&&!ye(e.src,t=r[0].url)&&w(e,"src",t),n&1&&l!==(l=r[0].name)&&w(e,"alt",l)},d(r){r&&E(e)}}}function Ue(s){let e,t,l;return{c(){e=L("video"),t=L("track"),this.h()},l(r){e=j(r,"VIDEO",{class:!0,src:!0});var n=A(e);t=j(n,"TRACK",{kind:!0}),n.forEach(E),this.h()},h(){w(t,"kind","captions"),w(e,"class","h-full w-full object-contain pb-0.5 border-0.5 border-black"),ye(e.src,l=s[0].url)||w(e,"src",l),e.loop=!0,e.autoplay=!0,e.muted=!0},m(r,n){J(r,e,n),C(e,t)},p(r,n){n&1&&!ye(e.src,l=r[0].url)&&w(e,"src",l)},d(r){r&&E(e)}}}function nt(s){let e,t,l,r,n=s[0].fileType==="image"&&Ee(s),i=s[0].fileType==="video"&&Ue(s);return{c(){e=L("div"),t=L("a"),n&&n.c(),l=B(),i&&i.c(),this.h()},l(c){e=j(c,"DIV",{class:!0});var d=A(e);t=j(d,"A",{href:!0,target:!0,style:!0});var u=A(t);n&&n.l(u),l=z(u),i&&i.l(u),u.forEach(E),d.forEach(E),this.h()},h(){w(t,"href",r=s[0].url),w(t,"target","_blank"),Me(t,"height","inherit"),Me(t,"width","inherit"),w(e,"class",s[1])},m(c,d){J(c,e,d),C(e,t),n&&n.m(t,null),C(t,l),i&&i.m(t,null)},p(c,[d]){c[0].fileType==="image"?n?n.p(c,d):(n=Ee(c),n.c(),n.m(t,l)):n&&(n.d(1),n=null),c[0].fileType==="video"?i?i.p(c,d):(i=Ue(c),i.c(),i.m(t,null)):i&&(i.d(1),i=null),d&1&&r!==(r=c[0].url)&&w(t,"href",r),d&2&&w(e,"class",c[1])},i:ne,o:ne,d(c){c&&E(e),n&&n.d(),i&&i.d()}}}function st(s,e,t){let{file:l}=e,{styleClass:r}=e;return s.$$set=n=>{"file"in n&&t(0,l=n.file),"styleClass"in n&&t(1,r=n.styleClass)},[l,r]}class We extends pe{constructor(e){super(),be(this,e,st,nt,_e,{file:0,styleClass:1})}}function Ie(s){let e,t,l,r,n;return{c(){e=L("div"),t=L("div"),l=L("span"),r=ee(s[1]),this.h()},l(i){e=j(i,"DIV",{class:!0});var c=A(e);t=j(c,"DIV",{class:!0});var d=A(t);l=j(d,"SPAN",{});var u=A(l);r=te(u,s[1]),u.forEach(E),d.forEach(E),c.forEach(E),this.h()},h(){w(t,"class",n="alert "+(s[2]?"alert-success":"alert-error")),w(e,"class","toast toast-center")},m(i,c){J(i,e,c),C(e,t),C(t,l),C(l,r)},p(i,c){c&2&&de(r,i[1]),c&4&&n!==(n="alert "+(i[2]?"alert-success":"alert-error"))&&w(t,"class",n)},d(i){i&&E(e)}}}function lt(s){let e,t=s[0]&&Ie(s);return{c(){t&&t.c(),e=me()},l(l){t&&t.l(l),e=me()},m(l,r){t&&t.m(l,r),J(l,e,r)},p(l,[r]){l[0]?t?t.p(l,r):(t=Ie(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ne,o:ne,d(l){l&&E(e),t&&t.d(l)}}}function rt(s,e,t){let{showToast:l=!1}=e,{toastSuccess:r=!0}=e,{toastText:n=""}=e;function i(c,d,u,b=2e3){t(1,n=c?d:u),t(0,l=!0),setTimeout(()=>t(0,l=!1),b)}return s.$$set=c=>{"showToast"in c&&t(0,l=c.showToast),"toastSuccess"in c&&t(2,r=c.toastSuccess),"toastText"in c&&t(1,n=c.toastText)},[l,n,r,i]}class qe extends pe{constructor(e){super(),be(this,e,rt,lt,_e,{showToast:0,toastSuccess:2,toastText:1,show:3})}get show(){return this.$$.ctx[3]}}function Ne(s,e,t){const l=s.slice();return l[12]=e[t],l}function Le(s){let e,t,l,r,n,i=s[12].name+"",c,d,u,b=s[12].formattedDatetime+"",p,k,_,y=s[12].formattedSize+"",v,D,Y,Z,H,g="Collect",$,P,W="Delete",m,O,I,U;l=new We({props:{file:s[12],styleClass:"w-full h-36"}});let N=s[0]&&je(s);function fe(){return s[9](s[12])}function S(){return s[10](s[12])}return{c(){e=L("div"),t=L("div"),ae(l.$$.fragment),r=B(),n=L("p"),c=ee(i),d=B(),u=L("p"),p=ee(b),k=B(),_=L("p"),v=ee(y),D=B(),Y=L("div"),N&&N.c(),Z=B(),H=L("button"),H.textContent=g,$=B(),P=L("button"),P.textContent=W,m=B(),this.h()},l(o){e=j(o,"DIV",{class:!0});var a=A(e);t=j(a,"DIV",{class:!0});var h=A(t);oe(l.$$.fragment,h),h.forEach(E),r=z(a),n=j(a,"P",{class:!0});var f=A(n);c=te(f,i),f.forEach(E),d=z(a),u=j(a,"P",{class:!0});var T=A(u);p=te(T,b),T.forEach(E),k=z(a),_=j(a,"P",{class:!0});var M=A(_);v=te(M,y),M.forEach(E),D=z(a),Y=j(a,"DIV",{class:!0});var F=A(Y);N&&N.l(F),Z=z(F),H=j(F,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(H)!=="svelte-jct3zc"&&(H.textContent=g),$=z(F),P=j(F,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(P)!=="svelte-1t0nfha"&&(P.textContent=W),F.forEach(E),m=z(a),a.forEach(E),this.h()},h(){w(t,"class","flex items-center"),w(n,"class","font-bold max-h-12 leading-6 overflow-auto"),w(u,"class","text-gray-500"),w(_,"class","text-gray-500"),w(H,"class","btn btn-link btn-sm p-0 no-underline text-accent"),w(P,"class","btn btn-link btn-sm p-0 no-underline text-error"),w(Y,"class",""),w(e,"class","bg-base-100")},m(o,a){J(o,e,a),C(e,t),ce(l,t,null),C(e,r),C(e,n),C(n,c),C(e,d),C(e,u),C(u,p),C(e,k),C(e,_),C(_,v),C(e,D),C(e,Y),N&&N.m(Y,null),C(Y,Z),C(Y,H),C(Y,$),C(Y,P),C(e,m),O=!0,I||(U=[x(H,"click",fe),x(P,"click",S)],I=!0)},p(o,a){s=o;const h={};a&6&&(h.file=s[12]),l.$set(h),(!O||a&6)&&i!==(i=s[12].name+"")&&de(c,i),(!O||a&6)&&b!==(b=s[12].formattedDatetime+"")&&de(p,b),(!O||a&6)&&y!==(y=s[12].formattedSize+"")&&de(v,y),s[0]?N?N.p(s,a):(N=je(s),N.c(),N.m(Y,Z)):N&&(N.d(1),N=null)},i(o){O||(R(l.$$.fragment,o),O=!0)},o(o){K(l.$$.fragment,o),O=!1},d(o){o&&E(e),ue(l),N&&N.d(),I=!1,ke(U)}}}function je(s){let e,t="Load",l,r;function n(){return s[8](s[12])}return{c(){e=L("button"),e.textContent=t,this.h()},l(i){e=j(i,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-58jb7k"&&(e.textContent=t),this.h()},h(){w(e,"class","btn btn-link btn-sm p-0 no-underline text-accent")},m(i,c){J(i,e,c),l||(r=x(e,"click",n),l=!0)},p(i,c){s=i},d(i){i&&E(e),l=!1,r()}}}function Pe(s){let e=["image","video"].includes(s[12].fileType),t,l,r=e&&Le(s);return{c(){r&&r.c(),t=me()},l(n){r&&r.l(n),t=me()},m(n,i){r&&r.m(n,i),J(n,t,i),l=!0},p(n,i){i&6&&(e=["image","video"].includes(n[12].fileType)),e?r?(r.p(n,i),i&6&&R(r,1)):(r=Le(n),r.c(),R(r,1),r.m(t.parentNode,t)):r&&(Te(),K(r,1,1,()=>{r=null}),De())},i(n){l||(R(r),l=!0)},o(n){K(r),l=!1},d(n){n&&E(t),r&&r.d(n)}}}function it(s){let e,t,l,r,n=$e(s[1].slice(0,s[2])),i=[];for(let u=0;u<n.length;u+=1)i[u]=Pe(Ne(s,n,u));const c=u=>K(i[u],1,1,()=>{i[u]=null});let d={};return l=new qe({props:d}),s[11](l),{c(){e=L("div");for(let u=0;u<i.length;u+=1)i[u].c();t=B(),ae(l.$$.fragment),this.h()},l(u){e=j(u,"DIV",{class:!0});var b=A(e);for(let p=0;p<i.length;p+=1)i[p].l(b);b.forEach(E),t=z(u),oe(l.$$.fragment,u),this.h()},h(){w(e,"class","grid grid-cols-4 lg:grid-cols-6 gap-2 bg-base-300")},m(u,b){J(u,e,b);for(let p=0;p<i.length;p+=1)i[p]&&i[p].m(e,null);J(u,t,b),ce(l,u,b),r=!0},p(u,[b]){if(b&119){n=$e(u[1].slice(0,u[2]));let k;for(k=0;k<n.length;k+=1){const _=Ne(u,n,k);i[k]?(i[k].p(_,b),R(i[k],1)):(i[k]=Pe(_),i[k].c(),R(i[k],1),i[k].m(e,null))}for(Te(),k=n.length;k<i.length;k+=1)c(k);De()}const p={};l.$set(p)},i(u){if(!r){for(let b=0;b<n.length;b+=1)R(i[b]);R(l.$$.fragment,u),r=!0}},o(u){i=i.filter(Boolean);for(let b=0;b<i.length;b+=1)K(i[b]);K(l.$$.fragment,u),r=!1},d(u){u&&(E(e),E(t)),Be(i,u),s[11](null),ue(l,u)}}}function at(s,e,t){let{comfyUrl:l}=e,r,n=[],i=20,c;Ve(async()=>{t(0,r=window.top.comfyApp),t(1,n=await Se("files",l)),window.addEventListener("scroll",()=>{t(2,i=Je(i,n.length))})});async function d(v){const D=await fetch(v.url),Y=await D.blob(),Z=new File([Y],v.name,{type:D.headers.get("Content-Type")||""});await r.handleFile(Z)}async function u(v){const D=await fetch(l+"/browser/collections",{method:"POST",body:JSON.stringify({filename:v.name,folder_path:v.folder_path})});c.show(D.ok,"Added to collections","Failed to add to collections. Please check the ComfyUI server.")}async function b(v){if(!confirm("You will delete this file? "+v.name))return;const Y=await fetch(l+"/browser/files",{method:"DELETE",body:JSON.stringify({type:"files",filename:v.name,folder_path:v.folder_path})});c.show(Y.ok,"Deleted the file "+v.name,"Failed to delete the file. Please check the ComfyUI server."),t(1,n=n.filter(Z=>Z!=v))}const p=async v=>await d(v),k=async v=>await u(v),_=async v=>await b(v);function y(v){Ce[v?"unshift":"push"](()=>{c=v,t(3,c)})}return s.$$set=v=>{"comfyUrl"in v&&t(7,l=v.comfyUrl)},[r,n,i,c,d,u,b,l,p,k,_,y]}class ot extends pe{constructor(e){super(),be(this,e,at,it,_e,{comfyUrl:7})}}function Fe(s,e,t){const l=s.slice();return l[21]=e[t],l}function Ye(s){let e,t="Save",l,r;return{c(){e=L("button"),e.textContent=t,this.h()},l(n){e=j(n,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-vwqboa"&&(e.textContent=t),this.h()},h(){w(e,"class","btn btn-outline btn-accent")},m(n,i){J(n,e,i),l||(r=x(e,"click",s[7]),l=!0)},p:ne,d(n){n&&E(e),l=!1,r()}}}function Ae(s){let e,t="Load",l,r;function n(){return s[15](s[21])}return{c(){e=L("button"),e.textContent=t,this.h()},l(i){e=j(i,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-58jb7k"&&(e.textContent=t),this.h()},h(){w(e,"class","btn btn-link btn-sm p-0 no-underline text-accent")},m(i,c){J(i,e,c),l||(r=x(e,"click",n),l=!0)},p(i,c){s=i},d(i){i&&E(e),l=!1,r()}}}function He(s){let e,t,l,r,n,i,c,d,u=s[21].formattedDatetime+"",b,p,k=s[21].formattedSize+"",_,y,v,D,Y,Z="Remove",H,g,$,P,W,m,O,I;t=new We({props:{file:s[21],styleClass:"w-36"}});function U(...o){return s[14](s[21],...o)}let N=s[0]&&Ae(s);function fe(){return s[16](s[21])}function S(...o){return s[17](s[21],...o)}return{c(){e=L("li"),ae(t.$$.fragment),l=B(),r=L("div"),n=L("input"),c=B(),d=L("p"),b=ee(u),p=ee(" | "),_=ee(k),y=B(),v=L("div"),N&&N.c(),D=B(),Y=L("button"),Y.textContent=Z,H=B(),g=L("div"),$=L("textarea"),W=B(),this.h()},l(o){e=j(o,"LI",{class:!0});var a=A(e);oe(t.$$.fragment,a),l=z(a),r=j(a,"DIV",{class:!0});var h=A(r);n=j(h,"INPUT",{type:!0,class:!0}),c=z(h),d=j(h,"P",{class:!0});var f=A(d);b=te(f,u),p=te(f," | "),_=te(f,k),f.forEach(E),y=z(h),v=j(h,"DIV",{});var T=A(v);N&&N.l(T),D=z(T),Y=j(T,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(Y)!=="svelte-1mhg6fb"&&(Y.textContent=Z),T.forEach(E),h.forEach(E),H=z(a),g=j(a,"DIV",{});var M=A(g);$=j(M,"TEXTAREA",{name:!0,cols:!0,rows:!0,placeholder:!0,class:!0}),A($).forEach(E),M.forEach(E),W=z(a),a.forEach(E),this.h()},h(){w(n,"type","text"),w(n,"class","input-bordered font-bold w-full bg-base-100"),n.value=i=s[21].name,w(d,"class","text-gray-500"),w(Y,"class","btn btn-link btn-sm p-0 no-underline text-error"),w(r,"class","space-y-2 w-72"),w($,"name","notes"),w($,"cols","40"),w($,"rows","4"),w($,"placeholder","write some memos..."),w($,"class","resize-none textarea"),$.value=P=s[21].notes,w(e,"class","flex h-36 border-0 space-x-4 bg-base-100")},m(o,a){J(o,e,a),ce(t,e,null),C(e,l),C(e,r),C(r,n),C(r,c),C(r,d),C(d,b),C(d,p),C(d,_),C(r,y),C(r,v),N&&N.m(v,null),C(v,D),C(v,Y),C(e,H),C(e,g),C(g,$),C(e,W),m=!0,O||(I=[x(n,"blur",U),x(Y,"click",fe),x($,"blur",S)],O=!0)},p(o,a){s=o;const h={};a&18&&(h.file=s[21]),t.$set(h),(!m||a&18&&i!==(i=s[21].name)&&n.value!==i)&&(n.value=i),(!m||a&18)&&u!==(u=s[21].formattedDatetime+"")&&de(b,u),(!m||a&18)&&k!==(k=s[21].formattedSize+"")&&de(_,k),s[0]?N?N.p(s,a):(N=Ae(s),N.c(),N.m(v,D)):N&&(N.d(1),N=null),(!m||a&18&&P!==(P=s[21].notes))&&($.value=P)},i(o){m||(R(t.$$.fragment,o),m=!0)},o(o){K(t.$$.fragment,o),m=!1},d(o){o&&E(e),ue(t),N&&N.d(),O=!1,ke(I)}}}function ct(s){var H;let e,t,l,r,n,i="Sync",c,d,u,b,p,k,_,y=s[3]!=((H=s[2])==null?void 0:H.git_repo)&&Ye(s),v=$e(s[1].slice(0,s[4])),D=[];for(let g=0;g<v.length;g+=1)D[g]=He(Fe(s,v,g));const Y=g=>K(D[g],1,1,()=>{D[g]=null});let Z={};return b=new qe({props:Z}),s[18](b),{c(){e=L("div"),t=L("input"),l=B(),y&&y.c(),r=B(),n=L("button"),n.textContent=i,c=B(),d=L("ul");for(let g=0;g<D.length;g+=1)D[g].c();u=B(),ae(b.$$.fragment),this.h()},l(g){e=j(g,"DIV",{});var $=A(e);t=j($,"INPUT",{type:!0,placeholder:!0,class:!0}),l=z($),y&&y.l($),r=z($),n=j($,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(n)!=="svelte-118xeor"&&(n.textContent=i),$.forEach(E),c=z(g),d=j(g,"UL",{class:!0});var P=A(d);for(let W=0;W<D.length;W+=1)D[W].l(P);P.forEach(E),u=z(g),oe(b.$$.fragment,g),this.h()},h(){w(t,"type","text"),w(t,"placeholder","Input your git repository address"),w(t,"class","input input-bordered w-full max-w-lg"),w(n,"class","btn btn-outline btn-accent"),w(d,"class","space-y-2 bg-base-300")},m(g,$){J(g,e,$),C(e,t),Oe(t,s[3]),C(e,l),y&&y.m(e,null),C(e,r),C(e,n),J(g,c,$),J(g,d,$);for(let P=0;P<D.length;P+=1)D[P]&&D[P].m(d,null);J(g,u,$),ce(b,g,$),p=!0,k||(_=[x(t,"input",s[13]),x(n,"click",s[6])],k=!0)},p(g,[$]){var W;if($&8&&t.value!==g[3]&&Oe(t,g[3]),g[3]!=((W=g[2])==null?void 0:W.git_repo)?y?y.p(g,$):(y=Ye(g),y.c(),y.m(e,r)):y&&(y.d(1),y=null),$&3859){v=$e(g[1].slice(0,g[4]));let m;for(m=0;m<v.length;m+=1){const O=Fe(g,v,m);D[m]?(D[m].p(O,$),R(D[m],1)):(D[m]=He(O),D[m].c(),R(D[m],1),D[m].m(d,null))}for(Te(),m=v.length;m<D.length;m+=1)Y(m);De()}const P={};b.$set(P)},i(g){if(!p){for(let $=0;$<v.length;$+=1)R(D[$]);R(b.$$.fragment,g),p=!0}},o(g){D=D.filter(Boolean);for(let $=0;$<D.length;$+=1)K(D[$]);K(b.$$.fragment,g),p=!1},d(g){g&&(E(e),E(c),E(d),E(u)),y&&y.d(),Be(D,g),s[18](null),ue(b,g),k=!1,ke(_)}}}function ut(s,e,t){let{comfyUrl:l}=e,r,n=[],i={},c="",d=20,u;Ve(async()=>{t(0,r=window.top.comfyApp),t(1,n=await Se("collections",l)),t(2,i=await b()||{}),t(3,c=i==null?void 0:i.git_repo),window.addEventListener("scroll",()=>{t(4,d=Je(d,n.length))})});async function b(){return await(await fetch(l+"/browser/config")).json()}async function p(m){const O=m.target;O.disabled=!0,O.innerHTML="Syncing...";const I=await fetch(l+"/browser/collections/sync",{method:"POST"});u.show(I.ok,"Synced","Failed to sync. Please check the ComfyUI server."),O.disabled=!1,O.innerHTML="Sync",t(1,n=await Se("collections",l))}async function k(){const m=await fetch(l+"/browser/config",{method:"PUT",body:JSON.stringify({git_repo:c})});u.show(m.ok,"Updated config","Failed to update config. Please check the ComfyUI server.")}async function _(m){const O=await fetch(m.url),I=await O.blob(),U=new File([I],m.name,{type:O.headers.get("Content-Type")||""});await r.handleFile(U)}async function y(m){if(!confirm("You will delete this file? "+m.name))return;const I=await fetch(l+"/browser/files",{method:"DELETE",body:JSON.stringify({type:"collections",filename:m.name,folder_path:m.folder_path})});u.show(I.ok,"Deleted the file "+m.name,"Failed to delete the file. Please check the ComfyUI server."),t(1,n=n.filter(U=>U!=m))}async function v(m,O){return(await fetch(l+"/browser/collections/"+m.name,{method:"PUT",body:JSON.stringify(O)})).ok}async function D(m,O){const I=m.target.value;if(I===O.name)return;const U=await v(O,{filename:I,notes:O.notes||"",folder_path:O.folder_path});u.show(U,"Updated","Failed to update. Please check the ComfyUI server.")}async function Y(m,O){const I=m.target.value;if(I==O.notes)return;const U=await v(O,{filename:O.name,notes:I,folder_path:O.folder_path});u.show(U,"Updated","Failed to update. Please check the ComfyUI server.")}function Z(){c=this.value,t(3,c)}const H=(m,O)=>D(O,m),g=async m=>await _(m),$=async m=>await y(m),P=(m,O)=>Y(O,m);function W(m){Ce[m?"unshift":"push"](()=>{u=m,t(5,u)})}return s.$$set=m=>{"comfyUrl"in m&&t(12,l=m.comfyUrl)},[r,n,i,c,d,u,p,k,_,y,D,Y,l,Z,H,g,$,P,W]}class ft extends pe{constructor(e){super(),be(this,e,ut,ct,_e,{comfyUrl:12})}}function ht(s){let e,t;return e=new ot({props:{comfyUrl:s[1]}}),{c(){ae(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p:ne,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){K(e.$$.fragment,l),t=!1},d(l){ue(e,l)}}}function dt(s){let e,t;return e=new ft({props:{comfyUrl:s[1]}}),{c(){ae(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p:ne,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){K(e.$$.fragment,l),t=!1},d(l){ue(e,l)}}}function mt(s){let e,t,l,r,n,i,c;function d(_){s[3](_)}let u={};s[0]!==void 0&&(u.activeTab=s[0]),e=new Qe({props:u}),Ce.push(()=>Ze(e,"activeTab",d));const b=[dt,ht],p=[];function k(_,y){return _[0]==="collections"?0:1}return r=k(s),n=p[r]=b[r](s),{c(){ae(e.$$.fragment),l=B(),n.c(),i=me()},l(_){oe(e.$$.fragment,_),l=z(_),n.l(_),i=me()},m(_,y){ce(e,_,y),J(_,l,y),p[r].m(_,y),J(_,i,y),c=!0},p(_,[y]){const v={};!t&&y&1&&(t=!0,v.activeTab=_[0],Re(()=>t=!1)),e.$set(v);let D=r;r=k(_),r===D?p[r].p(_,y):(Te(),K(p[D],1,1,()=>{p[D]=null}),De(),n=p[r],n?n.p(_,y):(n=p[r]=b[r](_),n.c()),R(n,1),n.m(i.parentNode,i))},i(_){c||(R(e.$$.fragment,_),R(n),c=!0)},o(_){K(e.$$.fragment,_),K(n),c=!1},d(_){_&&(E(l),E(i)),ue(e,_),p[r].d(_)}}}function _t(s,e,t){let{data:l}=e;const{comfyUrl:r}=l;let n="outputs";function i(c){n=c,t(0,n)}return s.$$set=c=>{"data"in c&&t(2,l=c.data)},[n,r,l,i]}class vt extends pe{constructor(e){super(),be(this,e,_t,mt,_e,{data:2})}}export{vt as component};
