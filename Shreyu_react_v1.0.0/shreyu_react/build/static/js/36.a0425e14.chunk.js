(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[36],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a(111);function c(e,t,a,c){void 0===c&&(c=!1);var o=Object(r.a)(a);Object(n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,o,c),function(){return a.removeEventListener(t,o,c)}}),[e])}},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),r=a(35),c=a(47),o=a.n(c),i=/-(.)/g;var s=a(0),l=a(48),u=a(1),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.displayName,c=void 0===a?f(e):a,i=t.Component,b=t.defaultProps,d=s.forwardRef((function(t,a){var c=t.className,s=t.bsPrefix,f=t.as,b=void 0===f?i||"div":f,d=Object(r.a)(t,["className","bsPrefix","as"]),v=Object(l.a)(s,e);return Object(u.jsx)(b,Object(n.a)({ref:a,className:o()(c,v)},d))}));return d.defaultProps=b,d.displayName=c,d}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(114),r=a(0);function c(e,t,a){void 0===a&&(a=!1);var c=Object(r.useCallback)((function(){return document}),[]);return Object(n.a)(c,e,t,a)}},125:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a(47),o=a.n(c),i=a(1);t.a=function(e){return r.forwardRef((function(t,a){return Object(i.jsx)("div",Object(n.a)(Object(n.a)({},t),{},{ref:a,className:o()(t.className,e)}))}))}},126:function(e,t,a){"use strict";var n=a(23),r=a(0),c=(a(120),a(110),a(111));a(114),a(121);a(122),a(118);a(132),new WeakMap;var o=a(124),i=a(1),s=["onKeyDown"];var l=r.forwardRef((function(e,t){var a,r=e.onKeyDown,l=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s),u=Object(o.b)(Object.assign({tagName:"a"},l)),f=Object(n.a)(u,1)[0],b=Object(c.a)((function(e){f.onKeyDown(e),null==r||r(e)}));return((a=l.href)&&"#"!==a.trim()||l.role)&&"button"!==l.role?Object(i.jsx)("a",Object.assign({ref:t},l,{onKeyDown:r})):Object(i.jsx)("a",Object.assign({ref:t},l,f,{onKeyDown:b}))}));l.displayName="Anchor";t.a=l},130:function(e,t,a){"use strict";var n=a(0),r=n.createContext(null);r.displayName="CardHeaderContext",t.a=r},132:function(e,t,a){"use strict";(function(e){var n=a(0),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,c="undefined"!==typeof document;t.a=c||r?n.useLayoutEffect:n.useEffect}).call(this,a(71))},139:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=n.createContext(null),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null};t.a=r},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function c(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));function n(e){return"".concat("data-rr-ui-").concat(e)}function r(e){return"".concat("rrUi").concat(e)}},158:function(e,t,a){"use strict";var n=function(){};e.exports=n},161:function(e,t,a){"use strict";var n=a(3),r=a(35),c=a(47),o=a.n(c),i=a(0),s=a(48),l=a(116),u=a(125),f=a(1),b=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.variant,l=e.as,u=void 0===l?"img":l,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=Object(s.a)(a,"card-img");return Object(f.jsx)(u,Object(n.a)({ref:t,className:o()(i?"".concat(d,"-").concat(i):d,c)},b))}));b.displayName="CardImg";var d=b,v=a(130),j=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.as,u=void 0===l?"div":l,b=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(s.a)(a,"card-header"),j=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return Object(f.jsx)(v.a.Provider,{value:j,children:Object(f.jsx)(u,Object(n.a)(Object(n.a)({ref:t},b),{},{className:o()(c,d)}))})}));j.displayName="CardHeader";var O=j,p=Object(u.a)("h5"),m=Object(u.a)("h6"),x=Object(l.a)("card-body"),y=Object(l.a)("card-title",{Component:p}),g=Object(l.a)("card-subtitle",{Component:m}),N=Object(l.a)("card-link",{Component:"a"}),h=Object(l.a)("card-text",{Component:"p"}),C=Object(l.a)("card-footer"),w=Object(l.a)("card-img-overlay"),P=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.bg,l=e.text,u=e.border,b=e.body,d=e.children,v=e.as,j=void 0===v?"div":v,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(s.a)(a,"card");return Object(f.jsx)(j,Object(n.a)(Object(n.a)({ref:t},O),{},{className:o()(c,p,i&&"bg-".concat(i),l&&"text-".concat(l),u&&"border-".concat(u)),children:b?Object(f.jsx)(x,{children:d}):d}))}));P.displayName="Card",P.defaultProps={body:!1};t.a=Object.assign(P,{Img:d,Title:y,Subtitle:g,Body:x,Link:N,Text:h,Header:O,Footer:C,ImgOverlay:w})},177:function(e,t,a){"use strict";var n=a(23),r=a(3),c=a(35),o=a(47),i=a.n(o),s=a(0),l=a(48),u=a(1),f=["xxl","xl","lg","md","sm","xs"];var b=s.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,n=e.className,o=Object(c.a)(e,["as","bsPrefix","className"]);a=Object(l.a)(a,"col");var s=[],u=[];return f.forEach((function(e){var t,n,r,c=o[e];delete o[e],"object"===typeof c&&null!=c?(t=c.span,n=c.offset,r=c.order):t=c;var i="xs"!==e?"-".concat(e):"";t&&s.push(!0===t?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(t)),null!=r&&u.push("order".concat(i,"-").concat(r)),null!=n&&u.push("offset".concat(i,"-").concat(n))})),[Object(r.a)(Object(r.a)({},o),{},{className:i.a.apply(void 0,[n].concat(s,u))}),{as:t,bsPrefix:a,spans:s}]}(e),o=Object(n.a)(a,2),s=o[0],b=s.className,d=Object(c.a)(s,["className"]),v=o[1],j=v.as,O=void 0===j?"div":j,p=v.bsPrefix,m=v.spans;return Object(u.jsx)(O,Object(r.a)(Object(r.a)({},d),{},{ref:t,className:i()(b,!m.length&&p)}))}));b.displayName="Col",t.a=b},183:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},210:function(e,t,a){"use strict";var n=a(0),r=n.createContext(null);r.displayName="NavContext",t.a=r},213:function(e,t,a){"use strict";var n=a(3),r=a(35),c=a(27),o=a.n(c),i=a(0),s=a(47),l=a.n(s),u=a(1),f={"aria-label":o.a.string,onClick:o.a.func,variant:o.a.oneOf(["white"])},b=i.forwardRef((function(e,t){var a=e.className,c=e.variant,o=Object(r.a)(e,["className","variant"]);return Object(u.jsx)("button",Object(n.a)({ref:t,type:"button",className:l()("btn-close",c&&"btn-close-".concat(c),a)},o))}));b.displayName="CloseButton",b.propTypes=f,b.defaultProps={"aria-label":"Close"},t.a=b},214:function(e,t,a){"use strict";var n=a(0),r=n.createContext(null);t.a=r},224:function(e,t,a){"use strict";var n=a(0),r=n.createContext(null);r.displayName="NavbarContext",t.a=r},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},277:function(e,t,a){"use strict";a.d(t,"b",(function(){return b}));var n=a(23),r=a(0),c=a(111),o=a(210),i=a(139),s=a(124),l=a(150),u=a(1),f=["as","active","eventKey"];function b(e){var t=e.key,a=e.onClick,n=e.active,s=e.id,u=e.role,f=e.disabled,b=Object(r.useContext)(i.a),d=Object(r.useContext)(o.a),v=n,j={role:u};if(d){u||"tablist"!==d.role||(j.role="tab");var O=d.getControllerId(null!=t?t:null),p=d.getControlledId(null!=t?t:null);j[Object(l.a)("event-key")]=t,j.id=O||s,j["aria-controls"]=p,v=null==n&&null!=t?d.activeKey===t:n}return"tab"===j.role&&(f&&(j.tabIndex=-1,j["aria-disabled"]=!0),v?j["aria-selected"]=v:j.tabIndex=-1),j.onClick=Object(c.a)((function(e){f||(null==a||a(e),null!=t&&b&&!e.isPropagationStopped()&&b(t,e))})),[j,{isActive:v}]}var d=r.forwardRef((function(e,t){var a=e.as,r=void 0===a?s.a:a,c=e.active,o=e.eventKey,d=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,f),v=b(Object.assign({key:Object(i.b)(o,d.href),active:c},d)),j=Object(n.a)(v,2),O=j[0],p=j[1];return O[Object(l.a)("active")]=p.isActive,Object(u.jsx)(r,Object.assign({},d,O,{ref:t}))}));d.displayName="NavItem",t.a=d},391:function(e,t,a){"use strict";var n=a(183),r=a(0),c=a(273),o=a(269),i=a(210),s=a(139),l=a(214),u=a(150),f=a(277),b=a(1),d=["as","onSelect","activeKey","role","onKeyDown"];var v=function(){},j=Object(u.a)("event-key"),O=r.forwardRef((function(e,t){var a,f,O=e.as,p=void 0===O?"div":O,m=e.onSelect,x=e.activeKey,y=e.role,g=e.onKeyDown,N=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,d),h=Object(c.a)(),C=Object(r.useRef)(!1),w=Object(r.useContext)(s.a),P=Object(r.useContext)(l.a);P&&(y=y||"tablist",x=P.activeKey,a=P.getControlledId,f=P.getControllerId);var k=Object(r.useRef)(null),E=function(e){var t=k.current;if(!t)return null;var a=Object(n.a)(t,"[".concat(j,"]:not([aria-disabled=true])")),r=t.querySelector("[aria-selected=true]");if(!r)return null;var c=a.indexOf(r);if(-1===c)return null;var o=c+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},R=function(e,t){null!=e&&(null==m||m(e,t),null==w||w(e,t))};Object(r.useEffect)((function(){if(k.current&&C.current){var e=k.current.querySelector("[".concat(j,"][aria-selected=true]"));null==e||e.focus()}C.current=!1}));var K=Object(o.a)(t,k);return Object(b.jsx)(s.a.Provider,{value:R,children:Object(b.jsx)(i.a.Provider,{value:{role:y,activeKey:Object(s.b)(x),getControlledId:a||v,getControllerId:f||v},children:Object(b.jsx)(p,Object.assign({},N,{onKeyDown:function(e){if(null==g||g(e),P){var t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),R(t.dataset[Object(u.b)("EventKey")]||null,e),C.current=!0,h())}},ref:K,role:y}))})})}));O.displayName="Nav",t.a=Object.assign(O,{Item:f.a})},401:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function n(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,a);null!=t&&(r=t)}})),r}return(0,c.default)(n)};var n,r=a(402),c=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},402:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,n,r,c,o){var i=r||"<<anonymous>>",s=o||n;if(null==a[n])return t?new Error("Required "+c+" `"+s+"` was not specified in `"+i+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),f=6;f<l;f++)u[f-6]=arguments[f];return e.apply(void 0,[a,n,i,c,s].concat(u))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},496:function(e,t,a){"use strict";var n=a(3),r=a(35),c=a(49),o=a(47),i=a.n(o),s=a(222),l=a(0),u=a.n(l),f=a(206),b=a(212);var d,v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)},j=a(221),O=a(211),p=a(1),m={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x(e,t){var a=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=m[e];return a+parseInt(Object(s.a)(t,n[0]),10)+parseInt(Object(s.a)(t,n[1]),10)}var y=(d={},Object(c.a)(d,f.c,"collapse"),Object(c.a)(d,f.d,"collapsing"),Object(c.a)(d,f.b,"collapsing"),Object(c.a)(d,f.a,"collapse show"),d),g={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:x},N=u.a.forwardRef((function(e,t){var a=e.onEnter,c=e.onEntering,o=e.onEntered,s=e.onExit,f=e.onExiting,d=e.className,m=e.children,g=e.dimension,N=void 0===g?"height":g,h=e.getDimensionValue,C=void 0===h?x:h,w=Object(r.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),P="function"===typeof N?N():N,k=Object(l.useMemo)((function(){return v((function(e){e.style[P]="0"}),a)}),[P,a]),E=Object(l.useMemo)((function(){return v((function(e){var t="scroll".concat(P[0].toUpperCase()).concat(P.slice(1));e.style[P]="".concat(e[t],"px")}),c)}),[P,c]),R=Object(l.useMemo)((function(){return v((function(e){e.style[P]=null}),o)}),[P,o]),K=Object(l.useMemo)((function(){return v((function(e){e.style[P]="".concat(C(P,e),"px"),Object(j.a)(e)}),s)}),[s,C,P]),A=Object(l.useMemo)((function(){return v((function(e){e.style[P]=null}),f)}),[P,f]);return Object(p.jsx)(O.a,Object(n.a)(Object(n.a)({ref:t,addEndListener:b.a},w),{},{"aria-expanded":w.role?w.in:null,onEnter:k,onEntering:E,onEntered:R,onExit:K,onExiting:A,childRef:m.ref,children:function(e,t){return u.a.cloneElement(m,Object(n.a)(Object(n.a)({},t),{},{className:i()(d,m.props.className,y[e],"width"===P&&"collapse-horizontal")}))}}))}));N.defaultProps=g;t.a=N},589:function(e,t,a){"use strict";var n=a(3),r=a(35),c=a(47),o=a.n(c),i=a(0),s=a(149),l=a(146),u=a(126),f=a(48),b=a(147),d=a(213),v=a(125),j=a(116),O=a(1),p=Object(v.a)("h4");p.displayName="DivStyledAsH4";var m=Object(j.a)("alert-heading",{Component:p}),x=Object(j.a)("alert-link",{Component:u.a}),y={variant:"primary",show:!0,transition:b.a,closeLabel:"Close alert"},g=i.forwardRef((function(e,t){var a=Object(s.a)(e,{show:"onClose"}),c=a.bsPrefix,i=a.show,u=a.closeLabel,v=a.closeVariant,j=a.className,p=a.children,m=a.variant,x=a.onClose,y=a.dismissible,g=a.transition,N=Object(r.a)(a,["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),h=Object(f.a)(c,"alert"),C=Object(l.a)((function(e){x&&x(!1,e)})),w=!0===g?b.a:g,P=Object(O.jsxs)("div",Object(n.a)(Object(n.a)({role:"alert"},w?void 0:N),{},{ref:t,className:o()(j,h,m&&"".concat(h,"-").concat(m),y&&"".concat(h,"-dismissible")),children:[y&&Object(O.jsx)(d.a,{onClick:C,"aria-label":u,variant:v}),p]}));return w?Object(O.jsx)(w,Object(n.a)(Object(n.a)({unmountOnExit:!0},N),{},{ref:void 0,in:i,children:P})):i?P:null}));g.displayName="Alert",g.defaultProps=y,t.a=Object.assign(g,{Link:x,Heading:m})},591:function(e,t,a){"use strict";var n=a(49),r=a(3),c=a(35),o=a(47),i=a.n(o),s=(a(401),a(0)),l=a(149),u=a(391),f=a(48),b=a(224),d=a(130),v=a(116),j=Object(v.a)("nav-item"),O=a(23),p=a(126),m=a(277),x=a(139),y=a(1),g=s.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,s=void 0===o?p.a:o,l=e.active,u=e.eventKey,b=Object(c.a)(e,["bsPrefix","className","as","active","eventKey"]);a=Object(f.a)(a,"nav-link");var d=Object(m.b)(Object(r.a)({key:Object(x.b)(u,b.href),active:l},b)),v=Object(O.a)(d,2),j=v[0],g=v[1];return Object(y.jsx)(s,Object(r.a)(Object(r.a)(Object(r.a)({},b),j),{},{ref:t,className:i()(n,a,b.disabled&&"disabled",g.isActive&&"active")}))}));g.displayName="NavLink",g.defaultProps={disabled:!1};var N=g,h=s.forwardRef((function(e,t){var a,o,v,j=Object(l.a)(e,{activeKey:"onSelect"}),O=j.as,p=void 0===O?"div":O,m=j.bsPrefix,x=j.variant,g=j.fill,N=j.justify,h=j.navbar,C=j.navbarScroll,w=j.className,P=j.activeKey,k=Object(c.a)(j,["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"]),E=Object(f.a)(m,"nav"),R=!1,K=Object(s.useContext)(b.a),A=Object(s.useContext)(d.a);return K?(o=K.bsPrefix,R=null==h||h):A&&(v=A.cardHeaderBsPrefix),Object(y.jsx)(u.a,Object(r.a)({as:p,ref:t,activeKey:P,className:i()(w,(a={},Object(n.a)(a,E,!R),Object(n.a)(a,"".concat(o,"-nav"),R),Object(n.a)(a,"".concat(o,"-nav-scroll"),R&&C),Object(n.a)(a,"".concat(v,"-").concat(x),!!v),Object(n.a)(a,"".concat(E,"-").concat(x),!!x),Object(n.a)(a,"".concat(E,"-fill"),g),Object(n.a)(a,"".concat(E,"-justified"),N),a))},k))}));h.displayName="Nav",h.defaultProps={justify:!1,fill:!1};t.a=Object.assign(h,{Item:j,Link:N})},965:function(e,t,a){"use strict";var n=a(3),r=a(35),c=a(47),o=a.n(c),i=a(0),s=a(139),l=a(149),u=a(116),f=a(48),b=a(1),d=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,s=Object(r.a)(e,["bsPrefix","className","as"]);a=Object(f.a)(a,"navbar-brand");var l=i||(s.href?"a":"span");return Object(b.jsx)(l,Object(n.a)(Object(n.a)({},s),{},{ref:t,className:o()(c,a)}))}));d.displayName="NavbarBrand";var v=d,j=a(496),O=a(224),p=i.forwardRef((function(e,t){var a=e.children,c=e.bsPrefix,o=Object(r.a)(e,["children","bsPrefix"]);c=Object(f.a)(c,"navbar-collapse");var s=Object(i.useContext)(O.a);return Object(b.jsx)(j.a,Object(n.a)(Object(n.a)({in:!(!s||!s.expanded)},o),{},{children:Object(b.jsx)("div",{ref:t,className:c,children:a})}))}));p.displayName="NavbarCollapse";var m=p,x=a(146),y=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.children,l=e.label,u=e.as,d=void 0===u?"button":u,v=e.onClick,j=Object(r.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(f.a)(a,"navbar-toggler");var p=Object(i.useContext)(O.a)||{},m=p.onToggle,y=p.expanded,g=Object(x.a)((function(e){v&&v(e),m&&m()}));return"button"===d&&(j.type="button"),Object(b.jsx)(d,Object(n.a)(Object(n.a)({},j),{},{ref:t,onClick:g,"aria-label":l,className:o()(c,a,!y&&"collapsed"),children:s||Object(b.jsx)("span",{className:"".concat(a,"-icon")})}))}));y.displayName="NavbarToggle",y.defaultProps={label:"Toggle navigation"};var g=y,N=Object(u.a)("navbar-text",{Component:"span"}),h=i.forwardRef((function(e,t){var a=Object(l.a)(e,{expanded:"onToggle"}),c=a.bsPrefix,u=a.expand,d=a.variant,v=a.bg,j=a.fixed,p=a.sticky,m=a.className,x=a.as,y=void 0===x?"nav":x,g=a.expanded,N=a.onToggle,h=a.onSelect,C=a.collapseOnSelect,w=Object(r.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"]),P=Object(f.a)(c,"navbar"),k=Object(i.useCallback)((function(){null==h||h.apply(void 0,arguments),C&&g&&(null==N||N(!1))}),[h,C,g,N]);void 0===w.role&&"nav"!==y&&(w.role="navigation");var E="".concat(P,"-expand");"string"===typeof u&&(E="".concat(E,"-").concat(u));var R=Object(i.useMemo)((function(){return{onToggle:function(){return null==N?void 0:N(!g)},bsPrefix:P,expanded:!!g}}),[P,g,N]);return Object(b.jsx)(O.a.Provider,{value:R,children:Object(b.jsx)(s.a.Provider,{value:k,children:Object(b.jsx)(y,Object(n.a)(Object(n.a)({ref:t},w),{},{className:o()(m,P,u&&E,d&&"".concat(P,"-").concat(d),v&&"bg-".concat(v),p&&"sticky-".concat(p),j&&"fixed-".concat(j))}))})})}));h.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},h.displayName="Navbar";t.a=Object.assign(h,{Brand:v,Toggle:g,Collapse:m,Text:N})}}]);
//# sourceMappingURL=36.a0425e14.chunk.js.map