(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(14),n(6)),s=n(1),l=n(2),u=n(4),p=n(3),m=n(5),d=(n.n(m).a.arrayOf(m.string),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("p",null,this.props.good)}}]),n}(r.a.PureComponent)),f=(n(17),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.props.click},this.props.buttonName)}}]),n}(r.a.PureComponent)),g=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=Array.from(Array(10),(function(t,e){return e+1}));return r.a.createElement("select",{onChange:this.props.change,value:this.props.selected},t.map((function(t){return r.a.createElement("option",{key:t,value:t},t)})))}}]),n}(r.a.PureComponent),h=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isStarted:!1,isInitial:!0,goodCopy:Object(c.a)(t.props.goods),isSelected:1},t.startClicked=function(){t.setState({isStarted:!0})},t.reverseGoodsList=function(){t.setState((function(t){return{goodCopy:t.goodCopy.reverse(),isInitial:!1}}))},t.sortByAbc=function(){t.setState((function(t){return{goodCopy:t.goodCopy.sort(),isInitial:!1}}))},t.setInitial=function(){t.setState((function(){return{goodCopy:Object(c.a)(t.props.goods),isInitial:!0,isSelected:1}}))},t.sortByLength=function(){t.setState((function(t){return{goodCopy:t.goodCopy.sort((function(t,e){return t.length-e.length})),isInitial:!1}}))},t.filterByLength=function(e){var n=+e.target.value;t.setState((function(t){return{goodCopy:t.goodCopy.filter((function(t){return t.length>=n})),isInitial:!1,isSelected:n}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.isInitial?this.props.goods:this.state.goodCopy;return r.a.createElement("div",{className:"goods-list"},this.state.isStarted?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-group"},t.map((function(t){return r.a.createElement("li",{className:"list-group-item\n                        d-flex justify-content-between align-items-center",key:t},r.a.createElement(d,{good:t}))}))),r.a.createElement("div",{className:"control-panel"},r.a.createElement(f,{buttonName:"Reverse",click:this.reverseGoodsList}),r.a.createElement(f,{buttonName:"Sort ABC",click:this.sortByAbc}),r.a.createElement(f,{buttonName:"Sort by length",click:this.sortByLength}),r.a.createElement(f,{buttonName:"Reset",click:this.setInitial}),r.a.createElement(g,{change:this.filterByLength,selected:this.state.isSelected}))):r.a.createElement(f,{buttonName:"Start",click:this.startClicked}))}}]),n}(r.a.Component),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),r.a.createElement(h,{goods:y}))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.933f4ceb.chunk.js.map