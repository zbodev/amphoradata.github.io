(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{183:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),r=a.n(i),o=a(242),s=a(239),c=a(238),l=a.n(c),m=a(243),d=a(132),u=a.n(d),f=a(241);var p=[{title:r.a.createElement(r.a.Fragment,null,"Australian Agtech"),imageUrl:"img/use_case_1.png",description:r.a.createElement(r.a.Fragment,null,"A leading Australian agtech uses Amphora Data to access new data sources. They use Amphora Data to get satellite imagery, soil maps, electricity forecasts for their farmer facing software.")},{title:r.a.createElement(r.a.Fragment,null,"Eliiza Data Science Consultancy"),imageUrl:"img/use_case_2.png",description:r.a.createElement(r.a.Fragment,null,"Eliiza, a leading data science consultancy in Melbourne, uses Amphora Data to find new datasets to develop new prediction tools for electricity prices and river flows.")}];function g(e){var t=e.imageUrl,a=e.title,n=e.description,i=Object(m.a)(t);return r.a.createElement("div",{className:l()("row",u.a.feature),style:{paddingBottom:"30px"}},i&&r.a.createElement("div",{className:"text--center",style:{paddingLeft:"60px",paddingRight:"60px"}},r.a.createElement("img",{className:u.a.featureImage,src:i,alt:a})),r.a.createElement("div",{style:{paddingRight:"60px",width:"600px"}},r.a.createElement("h3",{className:"font_large"},a),r.a.createElement("p",{className:"font_medium"},n)))}t.default=function(){return r.a.createElement(o.a,{title:"Simplify Integration"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:l()("row mt-12",u.a.justifyContentCenter)},r.a.createElement("div",{className:"col col--9"},r.a.createElement("div",{className:"row row--9"},r.a.createElement("p",{className:"font_large_caps",style:{paddingRight:"600px"}},"Simplify integration of third-party data"),r.a.createElement(s.a,{to:"https://identity.amphoradata.com/Account/Register"},r.a.createElement("div",{className:l()("buttons text--white text--middle")},r.a.createElement("p",null,"Register")))),r.a.createElement(f.e,{tabs:f.d}))),r.a.createElement("div",null,p&&p.length&&r.a.createElement("section",{className:u.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,p.map((function(e,t){return r.a.createElement(g,Object(n.a)({key:t},e))}))))))))}},240:function(e,t,a){var n=a(26).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||a(10)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return f}));a(240),a(78);var n=a(0),i=a.n(n),r=a(239),o=a(238),s=a.n(o),c=(a(133),[{to:"find-data",name:"Vegetation"},{to:"find-data-weather",name:"Weather"},{to:"find-data-water",name:"Water"},{to:"find-data-soil",name:"Soil"},{to:"find-data-economic",name:"Economic"},{to:"find-data-other",name:"Other"}]),l=[{to:"manage-data",name:"Impact"},{to:"manage-data-how-it-works",name:"How it Works"},{to:"manage-data-features",name:"Features"},{to:"manage-data-success",name:"Success Stories"},{to:"manage-data-details",name:"More Details"}],m=[{to:"share-data",name:"Impact"},{to:"share-data-how-it-works",name:"How it Works"},{to:"share-data-features",name:"Features"},{to:"share-data-success",name:"Success Stories"},{to:"share-data-details",name:"More Details"}],d=[{to:"simplified-integration",name:"Impact"},{to:"simplified-integration-how-it-works",name:"How it Works"},{to:"simplified-integration-features",name:"Features"},{to:"simplified-integration-success",name:"Success Stories"},{to:"simplified-integration-details",name:"More Details"}],u="undefined"!=typeof window,f=function(e){var t="";if(u&&window&&window.location&&window.location.pathname){var a=window.location.pathname.split("/");t=a[a.length-1]}return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return i.a.createElement("div",{key:e.to,className:"col"},i.a.createElement(r.a,{className:"font_medium_bold text--black",to:e.to},i.a.createElement("div",{className:s()("buttons_tab",e.to===t&&"tab_active")},e.name)))}))),e.children)}}}]);