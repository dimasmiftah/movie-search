(this.webpackJsonphooked=this.webpackJsonphooked||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(10),a(2)),l=(a(11),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,e.text))}),s=function(e){var t=e.searchMovie,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1];return r.a.createElement("form",{className:"search"},r.a.createElement("input",{type:"text",value:o,onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"SEARCH",onClick:function(e){e.preventDefault(),t(o),l("")}}))},u=function(e){var t=e.movie,a="N/A"===t.Poster?"https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg":t.Poster;return r.a.createElement("div",{className:"movie"},r.a.createElement("h2",null,t.Title),r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:"The movie titled: ".concat(t.Title),width:"200"})),r.a.createElement("p",null,"(",t.Year,")"))},m=a(1),E={loading:!0,movies:[],errorMessage:null},p=function(e,t){switch(t.type){case"SEARCH_MOVIE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loading:!0,errorMessage:null});case"SEARCH_MOVIE_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}};var h=function(){var e=Object(n.useReducer)(p,E),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=a5c89c1a").then((function(e){return e.json()})).then((function(e){c({type:"SEARCH_MOVIE_SUCCESS",payload:e.Search})}))}),[]);var o=a.movies,m=a.errorMessage,h=a.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(l,{text:"YOUR MOVIE"}),r.a.createElement(s,{searchMovie:function(e){c({type:"SEARCH_MOVIE_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=a5c89c1a")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?c({type:"SEARCH_MOVIE_SUCCESS",payload:e.Search}):c({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),r.a.createElement("p",{className:"App-intro"},"Search movie by your name"),r.a.createElement("div",{className:"movies"},h&&!m?r.a.createElement("span",null,"loading..."):m?r.a.createElement("div",{className:"errorMessage"},m):o.map((function(e,t){return r.a.createElement(u,{key:"".concat(t,"-").concat(e.Title),movie:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.f19a67bb.chunk.js.map