(this["webpackJsonppokedex-challenge"]=this["webpackJsonppokedex-challenge"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){var s={"./Bug.svg":28,"./Dark.svg":29,"./Dragon.svg":30,"./Electric.svg":31,"./Fairy.svg":32,"./Fighting.svg":33,"./Fire.svg":34,"./Flying.svg":35,"./Ghost.svg":36,"./Grass.svg":37,"./Ground.svg":38,"./Ice.svg":39,"./Normal.svg":40,"./Poison.svg":41,"./Psychic.svg":42,"./Rock.svg":43,"./Steel.svg":44,"./Water.svg":45};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id=11},,,,,,,,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Bug.3c3b7ab5.svg"},function(e,t,a){e.exports=a.p+"static/media/Dark.a015eeb6.svg"},function(e,t,a){e.exports=a.p+"static/media/Dragon.ef87a90e.svg"},function(e,t,a){e.exports=a.p+"static/media/Electric.71d71c8d.svg"},function(e,t,a){e.exports=a.p+"static/media/Fairy.9b43a25c.svg"},function(e,t,a){e.exports=a.p+"static/media/Fighting.43c2ed0e.svg"},function(e,t,a){e.exports=a.p+"static/media/Fire.1ab14d05.svg"},function(e,t,a){e.exports=a.p+"static/media/Flying.f4e6d97d.svg"},function(e,t,a){e.exports=a.p+"static/media/Ghost.3d7185b3.svg"},function(e,t,a){e.exports=a.p+"static/media/Grass.ab3ef33b.svg"},function(e,t,a){e.exports=a.p+"static/media/Ground.fd9df481.svg"},function(e,t,a){e.exports=a.p+"static/media/Ice.02eb5bd3.svg"},function(e,t,a){e.exports=a.p+"static/media/Normal.1f9c13e3.svg"},function(e,t,a){e.exports=a.p+"static/media/Poison.01d85da2.svg"},function(e,t,a){e.exports=a.p+"static/media/Psychic.017913af.svg"},function(e,t,a){e.exports=a.p+"static/media/Rock.9af8ebde.svg"},function(e,t,a){e.exports=a.p+"static/media/Steel.0e56a675.svg"},function(e,t,a){e.exports=a.p+"static/media/Water.817868f0.svg"},,,,,,function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(19),l=a.n(c),r=(a(26),a(27),a(6)),i=a(8),o=a(13);var m=function(e){var t=function(t){var a=Object(o.a)(e.typeFilters);a.indexOf(t.target.id)>-1?a.splice(a.indexOf(t.target.id),1):a.push(t.target.id),t.target.classList.contains("selected")?t.target.classList.remove("selected"):t.target.classList.add("selected"),e.setTypeFilters(a)},a=function(t){var a=Object(o.a)(e.weaknessFilters);a.indexOf(t.target.id)>-1?a.splice(a.indexOf(t.target.id),1):a.push(t.target.id),t.target.classList.contains("selected")?t.target.classList.remove("selected"):t.target.classList.add("selected"),e.setWeaknessFilters(a)};return Object(s.useEffect)((function(){var t=Object(o.a)(e.items);if(e.typeFilters.length||e.weaknessFilters.length){var a=t.filter((function(t){var a=!0,s=!0;return e.typeFilters.forEach((function(e){t.type.includes(e)||(a=!1)})),e.weaknessFilters.forEach((function(e){t.weaknesses.includes(e)||(s=!1)})),a&&s}));e.setFilteredList(a)}else e.setFilteredList(t)}),[e.typeFilters,e.weaknessFilters]),n.a.createElement("div",null,n.a.createElement("div",{className:"filter-div"},n.a.createElement("input",{type:"text",placeholder:"Search Pok\xe9mon",value:e.search,onChange:function(t){e.setSearch(t.target.value)}}),n.a.createElement("h4",null,"FILTER TYPE"),n.a.createElement("div",{className:"filters"},e.types.sort().map((function(a){return n.a.createElement("div",{key:a,id:a,className:e.typeFilters.includes(a)?"filter-button selected":"filter-button",onClick:t},a)}))),n.a.createElement("br",null),n.a.createElement("h4",null,"FILTER WEAKNESSES"),n.a.createElement("div",{className:"filters"},e.weaknesses.sort().map((function(t){return n.a.createElement("div",{key:t,id:t,className:e.weaknessFilters.includes(t)?"filter-button selected":"filter-button",onClick:a},t)})))))};var u=function(e){return n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"list-item",onClick:function(){var t=e.item;e.setSelected(t)}},n.a.createElement("div",{className:"image"},n.a.createElement("img",{className:"list-item-img",src:e.item.img,alt:e.item.name})),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"name-num"},n.a.createElement("div",{className:"num"},e.item.num),n.a.createElement("div",{className:"name"},e.item.name)),n.a.createElement("div",{className:"types-weaknesses"},n.a.createElement("div",{className:"types"},n.a.createElement("div",{style:{margin:"-5px 0 4px 0"}},"TYPE"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.item.type.map((function(e){return n.a.createElement("div",{key:"".concat(e,"-div"),className:"type-div"},n.a.createElement("img",{className:"type-small",key:e,alt:e,src:a(11)("./".concat(e,".svg"))}),n.a.createElement("p",{className:"hover-text"},e.toUpperCase()))})))),n.a.createElement("div",{className:"weaknesses"},n.a.createElement("div",{style:{margin:"-5px 0 4px 0"}},"WEAKNESSES"),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.item.weaknesses.map((function(e){return n.a.createElement("div",{key:"".concat(e,"-div"),className:"type-div"},n.a.createElement("img",{className:"type-small",key:e,alt:e,src:a(11)("./".concat(e,".svg"))}),n.a.createElement("p",{className:"hover-text"},e.toUpperCase()))}))))))))};var d=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"filters-container"},n.a.createElement(m,{items:e.items,types:e.types,weaknesses:e.weaknesses,filteredList:e.filteredList,setFilteredList:e.setFilteredList,typeFilters:e.typeFilters,setTypeFilters:e.setTypeFilters,weaknessFilters:e.weaknessFilters,setWeaknessFilters:e.setWeaknessFilters,search:e.search,setSearch:e.setSearch})),n.a.createElement("div",{className:"filters-filler"}),n.a.createElement("div",{className:"list-container"},e.filteredList.filter((function(t){return t.name.slice(0,e.search.length).toUpperCase()===e.search.toUpperCase()})).map((function(t){return n.a.createElement(i.b,{style:{width:"650px",margin:"5px"},key:"".concat(t.name,"-link"),to:"/detail"},n.a.createElement(u,{key:t.name,item:t,selected:e.selected,setSelected:e.setSelected,selectedEvol:e.selectedEvol,setSelectedEvol:e.setSelectedEvol}))}))))},v=a(1);var p=function(e){var t=e.selected;return n.a.createElement("div",{className:"row"},n.a.createElement(i.b,{className:"back-button",to:"/",onClick:function(){return e.setSelected(null)}},"\u2190\xa0 RETURN TO LIST"),n.a.createElement("div",{className:"detail-page"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"num"},t.num),n.a.createElement("div",{className:"name"},t.name)),n.a.createElement("div",{className:"row border5"},n.a.createElement("img",{className:"detail-img",src:t.img,alt:t.img}),n.a.createElement("div",null,n.a.createElement("h4",null,"TYPE"),n.a.createElement("div",{className:"row"},t.type.map((function(e){return n.a.createElement("div",{key:"".concat(e,"-div"),className:"type-div"},n.a.createElement("img",{className:"type-small",key:e,alt:e,src:a(11)("./".concat(e,".svg"))}),n.a.createElement("p",{className:"hover-text"},e.toUpperCase()))}))),n.a.createElement("h4",null,"WEAKNESSES"),n.a.createElement("div",{className:"row"},t.weaknesses.map((function(e){return n.a.createElement("div",{key:"".concat(e,"-div"),className:"type-div"},n.a.createElement("img",{className:"type-small",key:e,alt:e,src:a(11)("./".concat(e,".svg"))}),n.a.createElement("p",{className:"hover-text"},e.toUpperCase()))}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:{margin:5}},n.a.createElement("h4",null,"HEIGHT"),n.a.createElement("p",null,t.height)),n.a.createElement("div",{style:{margin:5}},n.a.createElement("h4",null,"WEIGHT"),n.a.createElement("p",null,t.weight))))),t.prev_evolution||t.next_evolution?n.a.createElement("div",{className:"column center"},n.a.createElement("h4",null,"EVOLUTION"),n.a.createElement("div",{className:"row"},e.selectedEvol.map((function(t){return n.a.createElement("div",{className:"thumbnail",onClick:function(){return e.setSelected(e.items.find((function(e){return e.name===t.name})))}},n.a.createElement("h5",null,t.name.toUpperCase()),n.a.createElement("img",{className:"evol-img",src:"http://www.serebii.net/pokemongo/pokemon/".concat(t.num,".png")}))})))):null))};var E=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(s.useState)(!1),o=Object(r.a)(l,2),m=o[0],u=o[1],E=Object(s.useState)([]),f=Object(r.a)(E,2),g=f[0],h=f[1],y=Object(s.useState)([]),k=Object(r.a)(y,2),b=k[0],N=k[1],x=Object(s.useState)([]),w=Object(r.a)(x,2),F=w[0],O=w[1],S=Object(s.useState)([]),j=Object(r.a)(S,2),L=j[0],T=j[1],C=Object(s.useState)(""),W=Object(r.a)(C,2),U=W[0],P=W[1],_=Object(s.useState)(null),G=Object(r.a)(_,2),I=G[0],D=G[1],R=Object(s.useState)(null),A=Object(r.a)(R,2),B=A[0],H=A[1],K=Object(s.useState)([]),Y=Object(r.a)(K,2),J=Y[0],M=Y[1];if(Object(s.useEffect)((function(){fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then((function(e){return e.json()})).then((function(e){u(!0),h(e.pokemon),N(e.pokemon)}),(function(e){u(!0),c(e)}))}),[]),Object(s.useEffect)((function(){H(g[0])}),[g]),Object(s.useEffect)((function(){I&&I!==B&&H(I)}),[I]),Object(s.useEffect)((function(){var e=[];I&&I.prev_evolution&&I.prev_evolution.forEach((function(t){e.push(t)})),I&&(I.prev_evolution||I.next_evolution)&&e.push(I),I&&I.next_evolution&&I.next_evolution.forEach((function(t){e.push(t)})),M(e)}),[I]),a)return n.a.createElement("div",null,"Error: error.message");if(m){var z=[],V=[];return g.forEach((function(e){e.type.forEach((function(e){z.includes(e)||z.push(e)})),e.weaknesses.forEach((function(e){V.includes(e)||V.push(e)}))})),n.a.createElement("div",null,n.a.createElement("header",{className:"center"},n.a.createElement("img",{style:{height:"200px"},src:"https://pbs.twimg.com/media/EOgcFoyXkAAzlbL.png:large"})),n.a.createElement("header",{className:"filler"}," "),n.a.createElement(i.a,null,n.a.createElement(v.c,null,n.a.createElement(v.a,{exact:!0,path:"/",render:function(){return n.a.createElement(d,{items:g,types:z,weaknesses:V,filteredList:b,setFilteredList:N,typeFilters:F,setTypeFilters:O,weaknessFilters:L,setWeaknessFilters:T,search:U,setSearch:P,selected:I,setSelected:D,selectedEvol:J,setSelectedEvol:M})}}),I?n.a.createElement(v.a,{exact:!0,path:"/detail",render:function(){return n.a.createElement(p,{selected:I,setSelected:D,items:g,selectedEvol:J,setSelectedEvol:M})}}):n.a.createElement(v.a,{exact:!0,path:"/detail",render:function(){return n.a.createElement(p,{selected:B,setSelected:D,items:g,selectedEvol:J,setSelectedEvol:M})}}))))}return n.a.createElement("div",null,"Loading...")};var f=function(){return n.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.4e448b7b.chunk.js.map