(this["webpackJsonptimeline-task"]=this["webpackJsonptimeline-task"]||[]).push([[0],{45:function(e,t,a){e.exports=a(57)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),i=a.n(c),r=(a(50),a(51),a(38)),l=a(9),m=a(29),s=a(94),u=a(105),h=a(98),p=a(99),d=a(104),f=a(101),g=a(100),v=a(102),w=a(103),E=Object(s.a)((function(e){return Object(u.a)({wrapper:{margin:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)},media:{height:140},content:{marginBottom:"0.35em",fontSize:"16px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflowX:"hidden"},textfield:{marginBottom:"20px"}})})),b=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)([]),l=Object(m.a)(r,2),s=l[0],u=l[1],b=E(),x=function(t){var a=encodeURIComponent("q"),n=encodeURIComponent(t);if(console.log("value",t),i(t),t&&t.length>2){if(e.history&&e.history){var o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?".concat(a,"=").concat(n);window.history.pushState({path:o},"",o)}console.log("value",t),y(t)}else(!t||t&&t.length<2)&&y([])};Object(n.useEffect)((function(){e.history&&(console.log("value",e.history.location.search.replace("?q=","")),i(e.history.location.search.replace("?q=","")),x(e.history.location.search.replace("?q=","")))}),[]);var y=function(e){fetch("http://www.omdbapi.com/?apikey=7a00f7df&s=".concat(e)).then((function(e){return e.json()})).then((function(e){u(e.Search)}))};return o.a.createElement("div",{className:b.wrapper},o.a.createElement(w.a,{placeholder:"Search..",value:c,onChange:function(e){var t=e&&e.target.value;x(t)},id:"outlined-basic",label:"Search Movies",variant:"outlined",className:b.textfield}),o.a.createElement(h.a,{container:!0,className:b.root,spacing:2},s&&s.length>0&&s.map((function(t){return o.a.createElement(h.a,{item:!0,xs:6,sm:4,lg:3},o.a.createElement(p.a,{className:b.root,onClick:function(){return e.history&&e.history.push("/movie/".concat(t.imdbID))}},o.a.createElement(d.a,null,o.a.createElement(g.a,{className:b.media,image:t.Poster,title:t.Title}),o.a.createElement(f.a,null,o.a.createElement(v.a,{className:b.content,gutterBottom:!0,variant:"h5",component:"h2"},t.Title)))))}))))},x=Object(s.a)((function(e){return Object(u.a)({moviePage:{display:"flex",margin:20},title:{marginTop:0},img:{height:310,width:"55%"},control:{padding:e.spacing(2)},media:{height:140},content:{marginLeft:"15px",display:"flex",flexDirection:"column"},textfield:{marginBottom:"20px"}})}));function y(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),c=a[0],i=a[1],r=x();return Object(n.useEffect)((function(){var t=e.match&&e.match.params.id;fetch("http://www.omdbapi.com/?apikey=7a00f7df&i=".concat(t)).then((function(e){return e.json()})).then((function(e){i(e)}))}),[e.match]),o.a.createElement("div",{className:r.moviePage},c&&o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:c.Poster,className:r.img,alt:"poster"}),o.a.createElement("div",{className:r.content},o.a.createElement("h2",{className:r.title},c.Title),o.a.createElement("div",null,o.a.createElement("b",null,"Rated:")," ",c.Rated),o.a.createElement("div",null,o.a.createElement("b",null,"Director:")," ",c.Director),o.a.createElement("div",null,o.a.createElement("b",null,"Actors:")," ",c.Actors))))}var j=function(){return o.a.createElement(r.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:b}),o.a.createElement(l.a,{exact:!0,path:"/movie/:id",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.cab8d039.chunk.js.map