(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),o=(a(0),a(240)),c={id:"python-find-data",title:"Find Data with python SDK",sidebar_label:"Find Data"},i={id:"SDKs/python-find-data",title:"Find Data with python SDK",description:"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want.",source:"@site/docs/SDKs/python-find-data.md",permalink:"/docs/SDKs/python-find-data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/SDKs/python-find-data.md",sidebar_label:"Find Data",sidebar:"someSidebar",previous:{title:"Change your organisation plan",permalink:"/docs/accnts_bills/change_plan"},next:{title:"Creating an Amphora with Python",permalink:"/docs/SDKs/python-create-amphora"}},l=[{value:"Buy an Amphora",id:"buy-an-amphora",children:[]}],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want."),Object(o.b)("p",null,"You can search for Amphora with the python SDK (v0.10+). The command is"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"search_for_amphorae\n")),Object(o.b)("p",null,"You can search for Amphora by labels, location, or a term. You can search with Boolean OR and AND operators too."),Object(o.b)("p",null,"Full code for searching is below"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"credentials = Credentials(username=your_username, password=your_password)\nclient = AmphoraDataRepositoryClient(credentials)\n\n# Search by location\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50)\n\n# Search by labels\namphora_list = client.search_for_amphorae(labels = 'forecast')\n\n# Search by term\namphora_list = client.search_for_amphorae(term = 'rainfall')\n\n# Search all together with OR\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50, labels = 'forecast', term = 'rainfall', search_term = 'OR')\n\n# Search all together with AND\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50, labels = 'forecast', term = 'rainfall', search_term = 'AND')\n")),Object(o.b)("h4",{id:"get-your-own-amphoras"},"Get your own Amphoras"),Object(o.b)("p",null,"You can also get the list of your own Amphoras with"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"client.get_your_amphorae()\n")),Object(o.b)("h2",{id:"buy-an-amphora"},"Buy an Amphora"),Object(o.b)("p",null,"You can buy an Amphora with the python SDK. The command is "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"client.buy_amphora(amphora_id)\n")),Object(o.b)("p",null,"Note that you must accept the terms and conditions in the Amphora through the web app. You only need to do this once for each terms and conditions, not for each Amphora."))}s.isMDXComponent=!0},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return a?r.a.createElement(b,i({ref:t},p,{components:a})):r.a.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);