(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),s=n.n(c),o=(n(12),n(3)),l=n(4),i=n(6),m=n(5),u=(n(13),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"Monster"}),r.a.createElement("h2",{className:"card__tittle"},e.monster.name),r.a.createElement("p",{className:"card__para"},e.monster.email),r.a.createElement("p",{className:"card__para"},e.monster.website))}),h=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(u,{key:e.id,monster:e})})))}),d=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(16),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"heading"},"Monster Rolodex"),r.a.createElement(d,{placeholder:"Search Monster",handleChange:this.handleChange}),r.a.createElement(h,{monsters:a}))}}]),n}(a.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.2fa514db.chunk.js.map