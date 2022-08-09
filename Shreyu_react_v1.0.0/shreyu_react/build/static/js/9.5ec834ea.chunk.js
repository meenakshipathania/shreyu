(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[9],{116:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var c=t(3),r=t(35),s=t(47),n=t.n(s),i=/-(.)/g;var o=t(0),l=t(48),d=t(1),b=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function h(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,s=void 0===t?b(e):t,i=a.Component,h=a.defaultProps,u=o.forwardRef((function(a,t){var s=a.className,o=a.bsPrefix,b=a.as,h=void 0===b?i||"div":b,u=Object(r.a)(a,["className","bsPrefix","as"]),j=Object(l.a)(o,e);return Object(d.jsx)(h,Object(c.a)({ref:t,className:n()(s,j)},u))}));return u.defaultProps=h,u.displayName=s,u}},142:function(e,a,t){"use strict";var c=function(){};e.exports=c},150:function(e,a,t){"use strict";var c=t(23),r=t(3),s=t(35),n=t(47),i=t.n(n),o=t(0),l=t(48),d=t(1),b=["xxl","xl","lg","md","sm","xs"];var h=o.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,n=Object(s.a)(e,["as","bsPrefix","className"]);t=Object(l.a)(t,"col");var o=[],d=[];return b.forEach((function(e){var a,c,r,s=n[e];delete n[e],"object"===typeof s&&null!=s?(a=s.span,c=s.offset,r=s.order):a=s;var i="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=r&&d.push("order".concat(i,"-").concat(r)),null!=c&&d.push("offset".concat(i,"-").concat(c))})),[Object(r.a)(Object(r.a)({},n),{},{className:i.a.apply(void 0,[c].concat(o,d))}),{as:a,bsPrefix:t,spans:o}]}(e),n=Object(c.a)(t,2),o=n[0],h=o.className,u=Object(s.a)(o,["className"]),j=n[1],O=j.as,m=void 0===O?"div":O,f=j.bsPrefix,p=j.spans;return Object(d.jsx)(m,Object(r.a)(Object(r.a)({},u),{},{ref:a,className:i()(h,!p.length&&f)}))}));h.displayName="Col",a.a=h},180:function(e,a,t){"use strict";var c=t(3),r=t(35),s=(t(0),t(267)),n=t(1);a.a=function(e){var a=e.className,t=e.style,i=e.children,o=Object(r.a)(e,["className","style","children"]);return Object(n.jsx)(s.a,Object(c.a)(Object(c.a)({className:a,style:t},o),{},{children:i}))}},218:function(e,a,t){"use strict";var c=t(0),r=c.createContext({});a.a=r},492:function(e,a,t){"use strict";var c=t(3),r=t(35),s=t(0),n=t(218),i=t(1),o=s.forwardRef((function(e,a){var t=e.controlId,o=e.as,l=void 0===o?"div":o,d=Object(r.a)(e,["controlId","as"]),b=Object(s.useMemo)((function(){return{controlId:t}}),[t]);return Object(i.jsx)(n.a.Provider,{value:b,children:Object(i.jsx)(l,Object(c.a)(Object(c.a)({},d),{},{ref:a}))})}));o.displayName="FormGroup",a.a=o},571:function(e,a,t){"use strict";var c=t(3),r=t(35),s=t(47),n=t.n(s),i=t(0),o=t(218),l=t(48),d=t(1),b=i.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,b=e.className,h=e.type,u=void 0===h?"checkbox":h,j=e.isValid,O=void 0!==j&&j,m=e.isInvalid,f=void 0!==m&&m,p=e.as,x=void 0===p?"input":p,v=Object(r.a)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),T=Object(i.useContext)(o.a).controlId;return s=Object(l.a)(s,"form-check-input"),Object(d.jsx)(x,Object(c.a)(Object(c.a)({},v),{},{ref:a,type:u,id:t||T,className:n()(b,s,O&&"is-valid",f&&"is-invalid")}))}));b.displayName="FormCheckInput",a.a=b},585:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var c=t(23),r=t(0),s=function(){var e=Object(r.useState)(window.innerWidth),a=Object(c.a)(e,2),t=a[0],s=a[1],n=Object(r.useState)(window.innerHeight),i=Object(c.a)(n,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){var e=function(){s(window.innerWidth),l(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:t,height:o}}},586:function(e,a,t){"use strict";var c=t(3),r=t(35),s=t(47),n=t.n(s),i=t(0),o=t(492),l=t(48),d=t(1),b=i.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,b=e.controlId,h=e.label,u=Object(r.a)(e,["bsPrefix","className","children","controlId","label"]);return t=Object(l.a)(t,"form-floating"),Object(d.jsxs)(o.a,Object(c.a)(Object(c.a)({ref:a,className:n()(s,t),controlId:b},u),{},{children:[i,Object(d.jsx)("label",{htmlFor:b,children:h})]}))}));b.displayName="FloatingLabel",a.a=b},913:function(e,a,t){"use strict";var c=t(3),r=t(35),s=t(47),n=t.n(s),i=t(27),o=t.n(i),l=t(0),d=t(1),b={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},h=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,o=e.type,l=void 0===o?"valid":o,b=e.tooltip,h=void 0!==b&&b,u=Object(r.a)(e,["as","className","type","tooltip"]);return Object(d.jsx)(s,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:n()(i,"".concat(l,"-").concat(h?"tooltip":"feedback"))}))}));h.displayName="Feedback",h.propTypes=b;var u=h,j=t(571),O=t(218),m=t(48),f=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.htmlFor,o=Object(r.a)(e,["bsPrefix","className","htmlFor"]),b=Object(l.useContext)(O.a).controlId;return t=Object(m.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:i||b,className:n()(s,t)}))}));f.displayName="FormCheckLabel";var p=f,x=l.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsSwitchPrefix,o=e.inline,b=void 0!==o&&o,h=e.disabled,f=void 0!==h&&h,x=e.isValid,v=void 0!==x&&x,T=e.isInvalid,k=void 0!==T&&T,y=e.feedbackTooltip,L=void 0!==y&&y,C=e.feedback,N=e.feedbackType,_=e.className,E=e.style,I=e.title,g=void 0===I?"":I,w=e.type,F=void 0===w?"checkbox":w,S=e.label,A=e.children,P=e.as,R=void 0===P?"input":P,D=Object(r.a)(e,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"]);s=Object(m.a)(s,"form-check"),i=Object(m.a)(i,"form-switch");var U=Object(l.useContext)(O.a).controlId,B=Object(l.useMemo)((function(){return{controlId:t||U}}),[U,t]),H=null!=S&&!1!==S&&!A,M=Object(d.jsx)(j.a,Object(c.a)(Object(c.a)({},D),{},{type:"switch"===F?"checkbox":F,ref:a,isValid:v,isInvalid:k,disabled:f,as:R}));return Object(d.jsx)(O.a.Provider,{value:B,children:Object(d.jsx)("div",{style:E,className:n()(_,S&&s,b&&"".concat(s,"-inline"),"switch"===F&&i),children:A||Object(d.jsxs)(d.Fragment,{children:[M,H&&Object(d.jsx)(p,{title:g,children:S}),C&&Object(d.jsx)(u,{type:N,tooltip:L,children:C})]})})})}));x.displayName="FormCheck";var v=Object.assign(x,{Input:j.a,Label:p}),T=t(49),k=(t(142),l.forwardRef((function(e,a){var t,s,i=e.bsPrefix,o=e.type,b=e.size,h=e.htmlSize,u=e.id,j=e.className,f=e.isValid,p=void 0!==f&&f,x=e.isInvalid,v=void 0!==x&&x,k=e.plaintext,y=e.readOnly,L=e.as,C=void 0===L?"input":L,N=Object(r.a)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),_=Object(l.useContext)(O.a).controlId;(i=Object(m.a)(i,"form-control"),k)?t=Object(T.a)({},"".concat(i,"-plaintext"),!0):(s={},Object(T.a)(s,i,!0),Object(T.a)(s,"".concat(i,"-").concat(b),b),t=s);return Object(d.jsx)(C,Object(c.a)(Object(c.a)({},N),{},{type:o,size:h,ref:a,readOnly:y,id:u||_,className:n()(j,t,p&&"is-valid",v&&"is-invalid","color"===o&&"".concat(i,"-color"))}))})));k.displayName="FormControl";var y=Object.assign(k,{Feedback:u}),L=t(116),C=Object(L.a)("form-floating"),N=t(492),_=t(150),E=l.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,o=e.column,b=e.visuallyHidden,h=e.className,u=e.htmlFor,j=Object(r.a)(e,["as","bsPrefix","column","visuallyHidden","className","htmlFor"]),f=Object(l.useContext)(O.a).controlId;i=Object(m.a)(i,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=n()(h,i,b&&"visually-hidden",o&&p);return u=u||f,o?Object(d.jsx)(_.a,Object(c.a)({ref:a,as:"label",className:x,htmlFor:u},j)):Object(d.jsx)(s,Object(c.a)({ref:a,className:x,htmlFor:u},j))}));E.displayName="FormLabel",E.defaultProps={column:!1,visuallyHidden:!1};var I=E,g=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.id,o=Object(r.a)(e,["bsPrefix","className","id"]),b=Object(l.useContext)(O.a).controlId;return t=Object(m.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:n()(s,t),id:i||b}))}));g.displayName="FormRange";var w=g,F=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,i=e.htmlSize,o=e.className,b=e.isValid,h=void 0!==b&&b,u=e.isInvalid,j=void 0!==u&&u,f=e.id,p=Object(r.a)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"]),x=Object(l.useContext)(O.a).controlId;return t=Object(m.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:i,ref:a,className:n()(o,t,s&&"".concat(t,"-").concat(s),h&&"is-valid",j&&"is-invalid"),id:f||x}))}));F.displayName="FormSelect";var S=F,A=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,o=void 0===i?"small":i,l=e.muted,b=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),Object(d.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:n()(s,t,l&&"text-muted")}))}));A.displayName="FormText";var P=A,R=l.forwardRef((function(e,a){return Object(d.jsx)(v,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));R.displayName="Switch";var D=Object.assign(R,{Input:v.Input,Label:v.Label}),U=t(586),B={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},H=l.forwardRef((function(e,a){var t=e.className,s=e.validated,i=e.as,o=void 0===i?"form":i,l=Object(r.a)(e,["className","validated","as"]);return Object(d.jsx)(o,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:n()(t,s&&"was-validated")}))}));H.displayName="Form",H.propTypes=B;a.a=Object.assign(H,{Group:N.a,Control:y,Floating:C,Check:v,Switch:D,Label:I,Text:P,Range:w,Select:S,FloatingLabel:U.a})},955:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),s=t(15),n=t(26),i=t(23),o=t(14),l=t(585),d=t(913),b=t(1),h=function(e){var a=e.changeLayoutType,t=e.layoutType,c=e.layoutConstants;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Layout"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:c.LAYOUT_VERTICAL,id:"vertical-layout",checked:t===c.LAYOUT_VERTICAL}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"vertical-layout",children:"Vertical Layout"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:c.LAYOUT_HORIZONTAL,id:"horizontal-layout",checked:t===c.LAYOUT_HORIZONTAL}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"horizontal-layout",children:"Horizontal Layout"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:c.LAYOUT_DETACHED,id:"detached-layout",checked:t===c.LAYOUT_DETACHED}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"detached-layout",children:"Detached Layout"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:c.LAYOUT_TWO_COLUMN,id:"two-column-layout",checked:t===c.LAYOUT_TWO_COLUMN}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"two-column-layout",children:"Two Column Layout"})]})]})},u=function(e){var a=e.changeWidthMode,t=e.layoutWidth,c=e.layoutConstants;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Width"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"width",id:"fluid-check",value:c.LAYOUT_WIDTH_FLUID,onChange:function(e){return a(e.target.value)},checked:t===c.LAYOUT_WIDTH_FLUID}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"fluid-check",children:"Fluid"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"width",id:"boxed-check",value:c.LAYOUT_WIDTH_BOXED,onChange:function(e){return a(e.target.value)},checked:t===c.LAYOUT_WIDTH_BOXED}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"boxed-check",children:"Boxed"})]})]})},j=function(e){var a=e.changeMenuPosition,t=e.menuPosition,c=e.layoutConstants;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Menus (Leftsidebar and Topbar) Position"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"menus-position",id:"fixed-check",value:c.MENU_POSITION_FIXED,onChange:function(e){return a(e.target.value)},checked:t===c.MENU_POSITION_FIXED}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"fixed-check",children:"Fixed"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"menus-position",id:"scrollable-check",value:c.MENU_POSITION_SCROLLABLE,onChange:function(e){return a(e.target.value)},checked:t===c.MENU_POSITION_SCROLLABLE}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"scrollable-check",children:"Scrollable"})]})]})},O=function(e){var a=e.changeLeftSidebarTheme,t=e.leftSideBarTheme,c=e.layoutConstants;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Left Sidebar Color"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"theme",id:"light-check",value:c.LEFT_SIDEBAR_THEME_LIGHT,onChange:function(e){return a(e.target.value)},checked:t===c.LEFT_SIDEBAR_THEME_LIGHT}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"light-check",children:"Light"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"theme",id:"dark-check",value:c.LEFT_SIDEBAR_THEME_DARK,onChange:function(e){return a(e.target.value)},checked:t===c.LEFT_SIDEBAR_THEME_DARK}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"dark-check",children:"Dark"})]})]})},m=function(e){var a=e.changeLeftSiderbarType,t=e.leftSideBarType,c=e.layoutConstants;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Left Sidebar Size"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"leftsidebar-size",id:"default-check",value:c.LEFT_SIDEBAR_TYPE_DEFAULT,onChange:function(e){return a(e.target.value)},checked:t===c.LEFT_SIDEBAR_TYPE_DEFAULT}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"default-check",children:"Default"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"leftsidebar-size",id:"condensed-check",value:c.LEFT_SIDEBAR_TYPE_CONDENSED,onChange:function(e){return a(e.target.value)},checked:t===c.LEFT_SIDEBAR_TYPE_CONDENSED}),Object(b.jsxs)(d.a.Check.Label,{htmlFor:"condensed-check",children:["Condensed ",Object(b.jsx)("small",{children:"(Extra Small size)"})]})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"leftsidebar-size",id:"compact-check",value:c.LEFT_SIDEBAR_TYPE_COMPACT,onChange:function(e){return a(e.target.value)},checked:t===c.LEFT_SIDEBAR_TYPE_COMPACT}),Object(b.jsxs)(d.a.Check.Label,{htmlFor:"compact-check",children:["Compact ",Object(b.jsx)("small",{children:"(Small size)"})]})]})]})},f=function(e){var a=e.toggleLeftSidebarUserInfo,t=e.showSidebarUserInfo;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Sidebar User Info"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"checkbox",name:"leftsidebar-user",id:"sidebaruser-check",onChange:function(e){return a(e.target.checked)},checked:t}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"sidebaruser-check",children:"Enable"})]})]})},p=function(e){var a=e.changeTopBarTheme,t=e.topbarTheme,c=e.layoutConstants;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Topbar"}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"topbar-color",id:"darktopbar-check",value:c.TOPBAR_THEME_DARK,onChange:function(e){return a(e.target.value)},checked:t===c.TOPBAR_THEME_DARK}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"darktopbar-check",children:"Dark"})]}),Object(b.jsxs)(d.a.Check,{className:"form-check form-switch mb-1",children:[Object(b.jsx)(d.a.Check.Input,{type:"radio",name:"topbar-color",id:"lighttopbar-check",value:c.TOPBAR_THEME_LIGHT,onChange:function(e){return a(e.target.value)},checked:t===c.TOPBAR_THEME_LIGHT}),Object(b.jsx)(d.a.Check.Label,{htmlFor:"lighttopbar-check",children:"Light"})]})]})},x=function(){var e=Object(s.b)(),a=Object(l.a)().width,t=Object(s.c)((function(e){return{layoutType:e.Layout.layoutType,layoutWidth:e.Layout.layoutWidth,menuPosition:e.Layout.menuPosition,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType,showSidebarUserInfo:e.Layout.showSidebarUserInfo,topbarTheme:e.Layout.topbarTheme}})),d=t.layoutType,x=t.layoutWidth,v=t.menuPosition,T=t.leftSideBarType,k=t.leftSideBarTheme,y=t.showSidebarUserInfo,L=t.topbarTheme,C=Object(c.useState)(!1),N=Object(i.a)(C,2),_=N[0],E=N[1],I=Object(c.useState)(!1),g=Object(i.a)(I,2),w=g[0],F=g[1],S=Object(c.useState)(!1),A=Object(i.a)(S,2),P=A[0],R=A[1],D=Object(c.useState)(!1),U=Object(i.a)(D,2),B=U[0],H=U[1],M=Object(c.useCallback)((function(){E(d!==o.a.LAYOUT_TWO_COLUMN),F(d!==o.a.LAYOUT_HORIZONTAL),R(d!==o.a.LAYOUT_HORIZONTAL&&d!==o.a.LAYOUT_TWO_COLUMN&&a>991),H(d!==o.a.LAYOUT_HORIZONTAL&&d!==o.a.LAYOUT_TWO_COLUMN)}),[d,a]);Object(c.useEffect)((function(){M()}),[M]);var Y=function(a){switch(a){case"horizontal":e(Object(n.a)(o.a.LAYOUT_HORIZONTAL));break;case"detached":e(Object(n.a)(o.a.LAYOUT_DETACHED));break;case"vertical":e(Object(n.a)(o.a.LAYOUT_VERTICAL));break;default:e(Object(n.a)(o.a.LAYOUT_TWO_COLUMN))}},z=function(a){switch(a){case"boxed":e(Object(n.b)(o.b.LAYOUT_WIDTH_BOXED));break;default:e(Object(n.b)(o.b.LAYOUT_WIDTH_FLUID))}},W=function(a){switch(a){case"scrollable":e(Object(n.c)(o.c.MENU_POSITION_SCROLLABLE));break;default:e(Object(n.c)(o.c.MENU_POSITION_FIXED))}},V=function(a){switch(a){case"dark":e(Object(n.d)(o.d.LEFT_SIDEBAR_THEME_DARK));break;default:e(Object(n.d)(o.d.LEFT_SIDEBAR_THEME_LIGHT))}},G=function(a){switch(a){case"condensed":e(Object(n.e)(o.e.LEFT_SIDEBAR_TYPE_CONDENSED));break;case"compact":e(Object(n.e)(o.e.LEFT_SIDEBAR_TYPE_COMPACT));break;default:e(Object(n.e)(o.e.LEFT_SIDEBAR_TYPE_DEFAULT))}},X=function(a){var t=a;e(Object(n.n)(t))},K=function(a){switch(a){case"light":e(Object(n.f)(o.f.TOPBAR_THEME_LIGHT));break;default:e(Object(n.f)(o.f.TOPBAR_THEME_DARK))}};return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("h6",{className:"fw-medium px-3 m-0 py-2 text-uppercase bg-light",children:Object(b.jsx)("span",{className:"d-block py-1",children:"Theme Settings"})}),Object(b.jsxs)("div",{className:"p-3",children:[Object(b.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[Object(b.jsx)("strong",{children:"Customize "})," the overall color scheme, sidebar menu, etc."]}),Object(b.jsx)(h,{changeLayoutType:Y,layoutType:d,layoutConstants:o.a}),Object(b.jsx)(u,{changeWidthMode:z,layoutWidth:x,layoutConstants:o.b}),_&&Object(b.jsx)(j,{menuPosition:v,changeMenuPosition:W,layoutConstants:o.c}),w&&Object(b.jsx)(O,{changeLeftSidebarTheme:V,leftSideBarTheme:k,layoutConstants:o.d}),P&&Object(b.jsx)(m,{changeLeftSiderbarType:G,leftSideBarType:T,layoutConstants:o.e}),B&&Object(b.jsx)(f,{toggleLeftSidebarUserInfo:X,showSidebarUserInfo:y}),Object(b.jsx)(p,{changeTopBarTheme:K,topbarTheme:L,layoutConstants:o.f}),Object(b.jsx)("div",{className:"d-grid mt-4",children:Object(b.jsx)("button",{className:"btn btn-primary",id:"resetBtn",onClick:function(){return Y(o.a.LAYOUT_TWO_COLUMN),z(o.b.LAYOUT_WIDTH_FLUID),W(o.c.MENU_POSITION_FIXED),V(o.d.LEFT_SIDEBAR_THEME_LIGHT),X(!1),K(o.f.TOPBAR_THEME_LIGHT),void G(o.e.LEFT_SIDEBAR_TYPE_DEFAULT)},children:"Reset to Default"})})]})]})},v=t(180);a.default=function(e){var a=Object(s.b)(),t=Object(c.useRef)(null),i=Object(s.c)((function(e){return{isOpenRightSideBar:e.Layout.isOpenRightSideBar}})).isOpenRightSideBar,o=Object(c.useCallback)((function(e){if(i){if(t&&t.current&&t.current.contains(e.target))return;a(Object(n.h)())}}),[t,a,i]);return Object(c.useEffect)((function(){return document.addEventListener("mousedown",o,!1),function(){document.removeEventListener("mousedown",o,!1)}}),[o]),Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("div",{className:"right-bar",ref:t,children:Object(b.jsx)(v.a,{style:{maxHeight:"100%",zIndex:1e4},timeout:500,scrollbarMaxSize:320,children:Object(b.jsx)(x,{})})}),Object(b.jsx)("div",{className:"rightbar-overlay"})]})}}}]);
//# sourceMappingURL=9.5ec834ea.chunk.js.map