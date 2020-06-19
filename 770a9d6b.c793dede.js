(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),i=(n(0),n(239)),o={id:"register-application",title:"Register an Application",sidebar_label:"Register an App"},p={id:"applications/register-application",title:"Register an Application",description:"Registering an Application is required for users to login to a 3rd party application with their Amphora Data Identity.",source:"@site/docs/applications/register-application.md",permalink:"/docs/applications/register-application",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/applications/register-application.md",sidebar_label:"Register an App",sidebar:"someSidebar",previous:{title:"Understand Applications",permalink:"/docs/applications/understand-applications"},next:{title:"Billing and transactions",permalink:"/docs/billing-transactions"}},c=[{value:"Register an Application using Python",id:"register-an-application-using-python",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Registering an Application is required for users to login to a 3rd party application with their Amphora Data Identity."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"At this time, you can only register an application directly via the API.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Applications are only available to Organisations on the Institution plan")),Object(i.b)("h2",{id:"register-an-application-using-python"},"Register an Application using Python"),Object(i.b)("p",null,"Use the following code to register an application"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You need at least the amphoradata python SDK, version > 0.10.6")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import os\nfrom amphora.client import AmphoraDataRepositoryClient, Credentials\nfrom amphora_api_client import ApplicationsApi, CreateApplication, AppLocation\n\n# provide your login credentials\ncredentials = Credentials(username=os.environ[\'username\'],\n                          password=os.environ[\'password\'])\n# create a client for interacting with the public Amphora Data Repository\nclient = AmphoraDataRepositoryClient(credentials)\n\n# create an amphora\nappApi = ApplicationsApi(client.apiClient)\nappLocations = [\n    AppLocation(origin="http://localhost:3000", allowed_redirect_paths=["/#/callback"])\n]\n\napp = appApi.applications_create_application(\n    CreateApplication(\n    name="react-amphora-dev", \n    locations=appLocations, \n    logout_url="http://localhost:3000/logout" ))\n\nprint(f\'Your Application ID is {app.id}\')\n')))}s.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,p({ref:t},l,{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);