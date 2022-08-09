(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[43],{116:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var c=t(3),s=t(35),r=t(47),n=t.n(r),f=/-(.)/g;var o=t(0),i=t(48),d=t(1),h=function(a){return a[0].toUpperCase()+(e=a,e.replace(f,(function(a,e){return e.toUpperCase()}))).slice(1);var e};function l(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.displayName,r=void 0===t?h(a):t,f=e.Component,l=e.defaultProps,v=o.forwardRef((function(e,t){var r=e.className,o=e.bsPrefix,h=e.as,l=void 0===h?f||"div":h,v=Object(s.a)(e,["className","bsPrefix","as"]),T=Object(i.a)(o,a);return Object(d.jsx)(l,Object(c.a)({ref:t,className:n()(r,T)},v))}));return v.defaultProps=l,v.displayName=r,v}},123:function(a,e,t){"use strict";var c=t(3),s=t(0),r=t(47),n=t.n(r),f=t(1);e.a=function(a){return s.forwardRef((function(e,t){return Object(f.jsx)("div",Object(c.a)(Object(c.a)({},e),{},{ref:t,className:n()(e.className,a)}))}))}},128:function(a,e,t){"use strict";var c=t(0),s=c.createContext(null);s.displayName="CardHeaderContext",e.a=s},149:function(a,e,t){"use strict";var c=t(3),s=t(35),r=t(47),n=t.n(r),f=t(0),o=t(48),i=t(116),d=t(123),h=t(1),l=f.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,f=a.variant,i=a.as,d=void 0===i?"img":i,l=Object(s.a)(a,["bsPrefix","className","variant","as"]),v=Object(o.a)(t,"card-img");return Object(h.jsx)(d,Object(c.a)({ref:e,className:n()(f?"".concat(v,"-").concat(f):v,r)},l))}));l.displayName="CardImg";var v=l,T=t(128),u=f.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,i=a.as,d=void 0===i?"div":i,l=Object(s.a)(a,["bsPrefix","className","as"]),v=Object(o.a)(t,"card-header"),u=Object(f.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return Object(h.jsx)(T.a.Provider,{value:u,children:Object(h.jsx)(d,Object(c.a)(Object(c.a)({ref:e},l),{},{className:n()(r,v)}))})}));u.displayName="CardHeader";var p=u,b=Object(d.a)("h5"),j=Object(d.a)("h6"),U=Object(i.a)("card-body"),x=Object(i.a)("card-title",{Component:b}),m=Object(i.a)("card-subtitle",{Component:j}),O=Object(i.a)("card-link",{Component:"a"}),g=Object(i.a)("card-text",{Component:"p"}),A=Object(i.a)("card-footer"),y=Object(i.a)("card-img-overlay"),N=f.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,f=a.bg,i=a.text,d=a.border,l=a.body,v=a.children,T=a.as,u=void 0===T?"div":T,p=Object(s.a)(a,["bsPrefix","className","bg","text","border","body","children","as"]),b=Object(o.a)(t,"card");return Object(h.jsx)(u,Object(c.a)(Object(c.a)({ref:e},p),{},{className:n()(r,b,f&&"bg-".concat(f),i&&"text-".concat(i),d&&"border-".concat(d)),children:l?Object(h.jsx)(U,{children:v}):v}))}));N.displayName="Card",N.defaultProps={body:!1};e.a=Object.assign(N,{Img:v,Title:x,Subtitle:m,Body:U,Link:O,Text:g,Header:p,Footer:A,ImgOverlay:y})},150:function(a,e,t){"use strict";var c=t(23),s=t(3),r=t(35),n=t(47),f=t.n(n),o=t(0),i=t(48),d=t(1),h=["xxl","xl","lg","md","sm","xs"];var l=o.forwardRef((function(a,e){var t=function(a){var e=a.as,t=a.bsPrefix,c=a.className,n=Object(r.a)(a,["as","bsPrefix","className"]);t=Object(i.a)(t,"col");var o=[],d=[];return h.forEach((function(a){var e,c,s,r=n[a];delete n[a],"object"===typeof r&&null!=r?(e=r.span,c=r.offset,s=r.order):e=r;var f="xs"!==a?"-".concat(a):"";e&&o.push(!0===e?"".concat(t).concat(f):"".concat(t).concat(f,"-").concat(e)),null!=s&&d.push("order".concat(f,"-").concat(s)),null!=c&&d.push("offset".concat(f,"-").concat(c))})),[Object(s.a)(Object(s.a)({},n),{},{className:f.a.apply(void 0,[c].concat(o,d))}),{as:e,bsPrefix:t,spans:o}]}(a),n=Object(c.a)(t,2),o=n[0],l=o.className,v=Object(r.a)(o,["className"]),T=n[1],u=T.as,p=void 0===u?"div":u,b=T.bsPrefix,j=T.spans;return Object(d.jsx)(p,Object(s.a)(Object(s.a)({},v),{},{ref:e,className:f()(l,!j.length&&b)}))}));l.displayName="Col",e.a=l},169:function(a,e,t){"use strict";var c=t(3),s=t(35),r=t(47),n=t.n(r),f=t(0),o=t(48),i=t(1),d=["xxl","xl","lg","md","sm","xs"],h=f.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,f=a.as,h=void 0===f?"div":f,l=Object(s.a)(a,["bsPrefix","className","as"]),v=Object(o.a)(t,"row"),T="".concat(v,"-cols"),u=[];return d.forEach((function(a){var e,t=l[a];delete l[a],e=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==a?"-".concat(a):"";null!=e&&u.push("".concat(T).concat(c,"-").concat(e))})),Object(i.jsx)(h,Object(c.a)(Object(c.a)({ref:e},l),{},{className:n.a.apply(void 0,[r,v].concat(u))}))}));h.displayName="Row",e.a=h},211:function(a,e,t){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAAwCAMAAACrKy8OAAAC0FBMVEU4QUpQZ/dSZ/ZSaPhSavdTZPtTZvpTaPhTaPlTaPtTafdTafhTavdTavhTa/hUZvpUaPhUaPlUaPpUafhUaflUavdUavhUa/hVaPn///9UavdSavhTafhUafhUavdTafhUaflTafhTafhUavdTafhTafhVb/1TafhUavdTZ/lTafhUavdRaPdTaPlTafhUavdTafhUavdTafhUavdUaPhUavdUavc4QUpTafhTavdTafhTafhUavdTaPhTafhUavdTafhUavdTafhTaflUavdTafhUavdTafhUavdTafhUavdTafhUXvxUavdTafhTavdTafhTafg4QUpSZ/ZTafhTafhVavpTafhUavdUavdUavc4QUpUavdUavdUavdUavdUavdUavhUavdUavdUavdUavdUavc4QUpUZ/k4QUpUaPhVafpVaPpTaPg4QUpUZPpSafhSafk4QUpTaflTafk4QUpTafhTafhUaPlUZ/hTafhUavdUavdUavdTafhUavdUavdUavc4QUpTafhUavdUavdTafhUavdTafdTavlTafhUavdTZ/lTafhTavhTafhUa/pTafhUaPg4QUpTafhTaPhTafhTafhTafhTaflTafhTafhSavhTafhTafhTafhTafhUavdTafhUavc4QUpTafhUavdTafhUavdTafhUavdTafdTafhUavdTafhUavdTafhUavdTafhTafhUavdTafhTafhUavdTafhTafhTafg4QUpRZ/lTafhTafhTafhTafhQZ/hTafhTafhTafhTafhUavdTafdTafhTafdTafhTafhTafhTafdTafhTavg4QUpTafhUavhTafhTafhTafhTafhTafhTafhTafg4QUpTavhTafhTafhTafhTafhTafhTafhTafhTafhTafhTafg4QUpTafhTafhTafhTafhTafg4QUpTafhTavhUafjI/WfiAAAA7HRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECAgIDBAQFBgYHCAgJCQoKCgsLCwsMDA0NDg4PEBETFBUVFhYWFxcYGBgZGRoaGxscHBwdHR4fICEhIyMlLS4vMDAxMjM0NDU2Nzg5QEtQU1RaXWBmaW1wcXV/f4SFiImJiouM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"},212:function(a,e,t){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAAwCAMAAACrKy8OAAACzVBMVEVQZ/dSZ/ZSaPhSavdTZPtTZvpTaPhTaPlTaPtTafdTafhTavdTavhTa/hUZvpUaPhUaPlUaPpUafhUaflUavdUavhUa/hVaPn///9UavdSavhTafhUafhUavdTafhUaflTafhTafhUavdTafhTafhVb/1TafhUavdTZ/lTafhUavdRaPdTaPlTafhUavdTafhUavdTafhUavdUaPhUavdUavf///9TafhTavdTafhTafhUavdTaPhTafhUavdTafhUavdTafhTaflUavdTafhUavdTafhUavdTafhUavdTafhUXvxUavdTafhTavdTafhTafj///9SZ/ZTafhTafhVavpTafhUavdUavdUavdUavf///9UavdUavdUavdUavdUavhUavdUavdUavdUavdUavf///9UZ/n///9UaPhVafpVaPpTaPj///9UZPpSafhSafn///9TaflTaflTafj///9TafhUaPlUZ/hTafhUavdUavdUavdTafhUavdUavdUavdTafhUavf///9UavdTafhUavdTafdTavlTafhUavdTZ/lTafhTavhTafhUa/pTafhUaPj///9TafhTaPhTafhTafhTafhTaflTafhTafhSavhTafhTafhTafhTafhUavdTafhUavdTafhUavf///9TafhUavdTafhUavdTafdTafhUavdTafhUavdTafhUavdTafhTafhUavdTafhTafhUavdTafhTafhTafhRZ/n///9TafhTafhTafhTafhQZ/hTafhTafhTafhTafhUavdTafdTafhTafdTafhTafhTafhTafdTafhTavhTafhUavj///9TafhTafhTafhTafhTafhTafhTafhTavj///9TafhTafhTafhTafhTafhTafhTafhTafhTafhTafhTafj///9TafhTafhTafhTafhTafhTavhUafj////w2mdeAAAA63RSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQICAgMEBAUGBgcICAkJCgoKCwsLCwwMDQ0ODg8QERMUFRUWFhYXFxgYGBkZGhobGxwcHB0dHh8gISEjIyUtLi8wMDEyMzQ0NTY3ODlAS1BTVFpdYGZpbXBxdX9/hIWIiYmKi4yMjY6Pj4+QkZKUlJWVl5eYmZmdnp+io6OkpqanqKmpq6ytra6ur6+vsLCxsbKysrOztLS1tra3uLm6u7y/v8DDxMXGxsfIycnKysvLzM3Ozs7Pz8/Q0dLT1dfb39/g4eLj5OXm5+jt7+/x9P3+n6NC9gAABi5JREFUaN7d2vmD3FIcAPCpo3Sc3WaJ22qVFuvappSialtdLaLUEdtqS4wjCOKmGIq6x320dcVVxboWoXSVaquY1jmOWkccIX+D933vJXm5JpOsH2zeDzM5Jm/eZ/KOb96bwnockwYeddn7b1+0P3toUIHvn6ngk3V+a/1jWe+Oz52s80cLpw8Oy5lsOoUh2vhcyWasA9TchfD6YXuOZAR2IzeyC96Xt+dGNvMnAN2Atlpfhq0V7TmRzcKw6/F264uYNjEXslm9gLmO3r/WxbC3clIOZLMx7FrYbG5CLyOfh/1Vk+rJBEWv2SjVdFVkDpcNSAr7SXzEkMiOZHhJ00oCH7qWSSgbhWzJzMd0fER3Myt7p2jurmz2zwCZA7DBg7fcGmjPObQ4mWbaXqp4NgMf0NiPks/Qssm2P+kSH7iWSSgbAf98dtX7lErOldzMDO8czd2Rnf4LMK4BWHFjJCsC7Rk4tnpyjEyoBsqgZpXZtlJXxpcCXyCYHidBdgaGXY1hRIZpT8PRTyZHy6p2VCGyyfCvHy/jdbxpOvW2QnbFZBm5Y1cRGJUBbben4PjnR0fJtHDxnJJnkLmFjpaJ5CZVfNdrfKLsBBxSXUlhoy988O6zdqa0J+BMzx4RMtrGyqiNCCVanloqmQZJN/01jVxb8/UgXsOSmdpS5ZNld0Lxr6CwjhWwt2A4pT0Ge+eHYbK/gZD6YUtpZL7masTXZOZ4lVFKDcjWoMJfQmFT1pCAeDGl7QAx5ENxldHtrmj3paSX8aJvL04mubeWdh9lvgHZx6jw9+1YhNSx1on1XxqOD4xZirbvjZN5GZZtQ5PT9SD+25Ego1+I2iOpHjWhEdmlIJnfghzHuDDL6gLaEatg8+w6X+T88qGa8x/LaK2oyIHOtK7sgM9w02rxwSzrlRHFCRi2cNvYdlYVIzqXdDKhodroXkWAOt+QbJOOLwDw8LQ1li89O20ZbnJ7rR/fN9qVUt9kguFrsfEyOqgF6kqCjDSvP3/zw6y//sCwEcUomep9TUURImSGxqTYXr9iRo3y3rVMnRDMcLiTKCseudaKSYtGFCNlTkdPQz+FrxP7BUbyiJG6FjdSy1E/psE3KBuEuooDY2hPwpgdKeNV01c2pQ8yU+IbkLknpUZlA1HhJ8TIuoahk0OiY32x7LMZQlaZLvINyUQ73AqTZFO/iquN3XvHylBSmGZtV4VMMk2sU5PliBYsp5BN/Rp6kF+DPcjvlDak3oNrqWIG6n8o9jOMyL6RDlFquOzetVLfZMcDzLpnygq/7NFje+DtzX2HJDyVKzU7U9xYYp5Gknv9DLKDvwTAAy3FcatY2OPDimOX40Brp6QJB0FnW0Dj45kR6uoyysxo2eUYBp3guJUebCH0HWMw7ZzoDkRRg7GPkVImhoanjDKbaR2MbDUq/F3b4QD4UJe2YCg+MHoJ1NOwSsVzO0JgdEsrc8JPMbtMCg4EZa8khU+Zx7OxlDZ/KHmK2QVmDB4Jt6xg/6tnk7EzGtlkNOtKIFLBgWXhZnc+Du4a3CTr/mEEts8LaOfv88L3LDDC0vy01HGjkjw7lCDTfc/AzrwT3i0c94M7OYw8e557+61nbk9g++H51Hd2jfsO21RxhRSr7LNFqojY8NfHUMwpJ8kUZ7gvQdOvsSFzYcBpvc6EPqJtVNxsg82bCYxM70/cio97xkV5GBXdmcZKNw/iy8ioO8NTT8bXImICclVhQPPMXrIIAzQsa8IwvCTzEZrcjxrD+jx35WvxTn3MIJPCBaHREJJxM/BqxVy8UI3vGcBeddea+IZoSrYnT5OtjxlkvGJGw7CMm77OpTVtuuEW6K3Ng0XK0AS6Pzsp42yBYof61XSyYEnKzmCEZVwnpt20jbNK2PYa7C8jS2gxXZXshYzsA1pKmTPbrGaWoSydeUu7VvYGRyKjtFsore11vFhN1wbj4ypRVjRVlv8HS0qSrGqK7JuXoTL6t4J5eHsUhvU4fzDor+tnVMadise1eeiujXoDtpa6/5zo7zLuFEy7jWvr9t2xHMgo7Y5F8Poe81+X/i/jTv7eifWXHMLlSsad9B2FHcTlTMad+A3A3vLB8iHjDr+4e/EFu3N5kP0LQ8CVHzoP92sAAAAASUVORK5CYII="},306:function(a,e,t){"use strict";var c=t(0),s=t(107),r=t(169),n=t(150),f=t(149),o=t(564),i=t(1);e.a=function(a){var e=a.bottomLinks,t=a.children,d=Object(o.a)().t;return Object(c.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"account-pages my-5",children:Object(i.jsx)(s.a,{children:Object(i.jsx)(r.a,{className:"justify-content-center",children:Object(i.jsxs)(n.a,{xl:10,children:[Object(i.jsx)(f.a,{children:Object(i.jsx)(f.a.Body,{className:"p-0",children:Object(i.jsxs)(r.a,{className:"g-0",children:[Object(i.jsx)(n.a,{lg:6,className:"p-4",children:t}),Object(i.jsx)(n.a,{lg:6,className:"d-none d-md-inline-block",children:Object(i.jsxs)("div",{className:"auth-page-sidebar",children:[Object(i.jsx)("div",{className:"overlay"}),Object(i.jsxs)("div",{className:"auth-user-testimonial",children:[Object(i.jsx)("p",{className:"fs-24 fw-bold text-white mb-1",children:d("I simply love it!")}),Object(i.jsxs)("p",{className:"lead",children:['"',d("It's a elegent templete. I love it very much!"),'"']}),Object(i.jsxs)("p",{children:["- ",d("Admin User")]})]})]})})]})})}),e]})})})})})}},307:function(a,e,t){var c=t(308),s=t(309),r=t(310),n=t(312);a.exports=function(a,e){return c(a)||s(a,e)||r(a,e)||n()},a.exports.default=a.exports,a.exports.__esModule=!0},308:function(a,e){a.exports=function(a){if(Array.isArray(a))return a},a.exports.default=a.exports,a.exports.__esModule=!0},309:function(a,e){a.exports=function(a,e){var t=null==a?null:"undefined"!==typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=t){var c,s,r=[],n=!0,f=!1;try{for(t=t.call(a);!(n=(c=t.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(o){f=!0,s=o}finally{try{n||null==t.return||t.return()}finally{if(f)throw s}}return r}},a.exports.default=a.exports,a.exports.__esModule=!0},310:function(a,e,t){var c=t(311);a.exports=function(a,e){if(a){if("string"===typeof a)return c(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);return"Object"===t&&a.constructor&&(t=a.constructor.name),"Map"===t||"Set"===t?Array.from(a):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(a,e):void 0}},a.exports.default=a.exports,a.exports.__esModule=!0},311:function(a,e){a.exports=function(a,e){(null==e||e>a.length)&&(e=a.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=a[t];return c},a.exports.default=a.exports,a.exports.__esModule=!0},312:function(a,e){a.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a.exports.default=a.exports,a.exports.__esModule=!0},564:function(a,e,t){"use strict";t.d(e,"a",(function(){return p}));var c=t(307),s=t.n(c),r=t(52),n=t.n(r),f=t(0),o=t(106);function i(){if(console&&console.warn){for(var a,e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(a=console).warn.apply(a,t)}}var d={};function h(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];"string"===typeof e[0]&&d[e[0]]||("string"===typeof e[0]&&(d[e[0]]=new Date),i.apply(void 0,e))}function l(a,e,t){a.loadNamespaces(e,(function(){if(a.isInitialized)t();else{a.on("initialized",(function e(){setTimeout((function(){a.off("initialized",e)}),0),t()}))}}))}function v(a,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return h("i18n.languages were undefined or empty",e.languages),!0;var c=e.languages[0],s=!!e.options&&e.options.fallbackLng,r=e.languages[e.languages.length-1];if("cimode"===c.toLowerCase())return!0;var n=function(a,t){var c=e.services.backendConnector.state["".concat(a,"|").concat(t)];return-1===c||2===c};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!n(e.isLanguageChangingTo,a))&&(!!e.hasResourceBundle(c,a)||(!e.services.backendConnector.backend||!(!n(c,a)||s&&!n(r,a))))}function T(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,c)}return t}function u(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?T(Object(t),!0).forEach((function(e){n()(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.i18n,c=Object(f.useContext)(o.a)||{},r=c.i18n,n=c.defaultNS,i=t||r||Object(o.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new o.b),!i){h("You will need to pass in an i18next instance by using initReactI18next");var d=function(a){return Array.isArray(a)?a[a.length-1]:a},T=[d,{},!1];return T.t=d,T.i18n={},T.ready=!1,T}i.options.react&&void 0!==i.options.react.wait&&h("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=u(u(u({},Object(o.c)()),i.options.react),e),b=p.useSuspense,j=p.keyPrefix,U=a||n||i.options&&i.options.defaultNS;U="string"===typeof U?[U]:U||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(U);var x=(i.isInitialized||i.initializedStoreOnce)&&U.every((function(a){return v(a,i,p)}));function m(){return i.getFixedT(null,"fallback"===p.nsMode?U:U[0],j)}var O=Object(f.useState)(m),g=s()(O,2),A=g[0],y=g[1],N=Object(f.useRef)(!0);Object(f.useEffect)((function(){var a=p.bindI18n,e=p.bindI18nStore;function t(){N.current&&y(m)}return N.current=!0,x||b||l(i,U,(function(){N.current&&y(m)})),a&&i&&i.on(a,t),e&&i&&i.store.on(e,t),function(){N.current=!1,a&&i&&a.split(" ").forEach((function(a){return i.off(a,t)})),e&&i&&e.split(" ").forEach((function(a){return i.store.off(a,t)}))}}),[i,U.join()]);var P=Object(f.useRef)(!0);Object(f.useEffect)((function(){N.current&&!P.current&&y(m),P.current=!1}),[i]);var w=[A,i,x];if(w.t=A,w.i18n=i,w.ready=x,x)return w;if(!x&&!b)return w;throw new Promise((function(a){l(i,U,(function(){a()}))}))}},926:function(a,e,t){"use strict";t.r(e);t(0);var c=t(564),s=t(169),r=t(150),n=t(30),f=t(306),o=t(211),i=t(212),d=t(1),h=function(){return Object(d.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 98 98",style:{height:"140px"},children:Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{id:"XMLID_50_",className:"st0",style:{fill:"transparent"},cx:"49",cy:"49",r:"49"}),Object(d.jsxs)("g",{id:"XMLID_4_",children:[Object(d.jsx)("path",{id:"XMLID_49_",className:"st1",style:{fill:"#43d39e"},d:"M77.3,42.7V77c0,0.6-0.4,1-1,1H21.7c-0.5,0-1-0.5-1-1V42.7c0-0.3,0.1-0.6,0.4-0.8l27.3-21.7 c0.3-0.3,0.8-0.3,1.2,0l27.3,21.7C77.1,42.1,77.3,42.4,77.3,42.7z"}),Object(d.jsx)("path",{id:"XMLID_48_",className:"st2",style:{fill:"#FFFFFF",stroke:"#43d39e",strokeWidth:2,strokeMiterlimit:10},d:"M66.5,69.5h-35c-1.1,0-2-0.9-2-2V26.8c0-1.1,0.9-2,2-2h35c1.1,0,2,0.9,2,2v40.7 C68.5,68.6,67.6,69.5,66.5,69.5z"}),Object(d.jsx)("path",{id:"XMLID_47_",className:"st1",style:{fill:"#43d39e"},d:"M62.9,33.4H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,33,63.4,33.4,62.9,33.4z"}),Object(d.jsx)("path",{id:"XMLID_46_",className:"st1",style:{fill:"#43d39e"},d:"M62.9,40.3H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,39.9,63.4,40.3,62.9,40.3z"}),Object(d.jsx)("path",{id:"XMLID_45_",className:"st1",style:{fill:"#43d39e"},d:"M62.9,47.2H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,46.8,63.4,47.2,62.9,47.2z"}),Object(d.jsx)("path",{id:"XMLID_44_",className:"st1",style:{fill:"#43d39e"},d:"M62.9,54.1H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7 c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,53.7,63.4,54.1,62.9,54.1z"}),Object(d.jsx)("path",{id:"XMLID_43_",className:"st2",style:{fill:"#FFFFFF",stroke:"#43d39e",strokeWidth:2,strokeMiterlimit:10},d:"M41.6,40.1h-5.8c-0.6,0-1-0.4-1-1v-6.7c0-0.6,0.4-1,1-1h5.8c0.6,0,1,0.4,1,1v6.7 C42.6,39.7,42.2,40.1,41.6,40.1z"}),Object(d.jsx)("path",{id:"XMLID_42_",className:"st2",style:{fill:"#FFFFFF",stroke:"#43d39e",strokeWidth:2,strokeMiterlimit:10},d:"M41.6,54.2h-5.8c-0.6,0-1-0.4-1-1v-6.7c0-0.6,0.4-1,1-1h5.8c0.6,0,1,0.4,1,1v6.7 C42.6,53.8,42.2,54.2,41.6,54.2z"}),Object(d.jsx)("path",{id:"XMLID_41_",className:"st1",style:{fill:"#43d39e"},d:"M23.4,46.2l25,17.8c0.3,0.2,0.7,0.2,1.1,0l26.8-19.8l-3.3,30.9H27.7L23.4,46.2z"}),Object(d.jsx)("path",{id:"XMLID_40_",className:"st3",style:{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10},d:"M74.9,45.2L49.5,63.5c-0.3,0.2-0.7,0.2-1.1,0L23.2,45.2"})]})]})})},l=function(){var a=Object(c.a)().t;return Object(d.jsx)(s.a,{className:"mt-3",children:Object(d.jsx)(r.a,{xs:12,className:"text-center",children:Object(d.jsxs)("p",{className:"text-muted",children:[a("Back to")," ",Object(d.jsx)(n.b,{to:"/auth/login",className:"text-primary fw-bold ms-1",children:a("Login")})]})})})};e.default=function(){var a=Object(c.a)().t;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(f.a,{bottomLinks:Object(d.jsx)(l,{}),children:Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsxs)("div",{className:"auth-logo mx-auto mb-3",children:[Object(d.jsx)(n.b,{to:"/",className:"logo logo-dark text-center",children:Object(d.jsx)("span",{className:"logo-lg",children:Object(d.jsx)("img",{src:o.a,alt:"",height:"24"})})}),Object(d.jsx)(n.b,{to:"/",className:"logo logo-light text-center",children:Object(d.jsx)("span",{className:"logo-lg",children:Object(d.jsx)("img",{src:i.a,alt:"",height:"24"})})})]}),Object(d.jsx)(h,{}),Object(d.jsx)("h4",{className:"h4 mb-2 mt-2",children:a("Confirm your email")}),Object(d.jsx)("p",{className:"text-muted mt-1 mb-2",children:a("Your account has been successfully registered. To complete the verification process, please check your email for a validation request.")})]})})})}}}]);
//# sourceMappingURL=43.a35a1063.chunk.js.map