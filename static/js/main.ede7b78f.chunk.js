(this.webpackJsonppizzashop=this.webpackJsonppizzashop||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var i,c,r=t(1),o=t.n(r),a=t(13),s=t.n(a),d=(t(21),t(4)),p=t(2),j=t(3),b=Object(j.a)(i||(i=Object(p.a)(["\n  body {\n    margin:0;\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  h1,h2,h3{\n    font-family: 'Righteous', cursive;\n  }\n"]))),x=j.b.div(c||(c=Object(p.a)(['\nheight:200px;\nbackground-image:url("img/banner.jpeg");\nbackground-position:center;\nbackground-size:cover;\nfilter:contrast(75%);\n']))),u=t(5);function l(n){return n.toLocaleString("en-US",{style:"currency",currency:"USD"})}var h,g,O,f,m,v=[{name:"Cheese Pizza",img:"%PUBLIC_URL%/img/pizza.png",section:"Pizza",price:1},{name:"Pepperoni Pizza",img:"%PUBLIC_URL%/img/pizza2.jpeg",section:"Pizza",price:1.5},{name:"Chicken Pizza",img:"%PUBLIC_URL%/img/chicken-pizza.jpeg",section:"Pizza",price:2},{img:"%PUBLIC_URL%/img/healthy-pizza.jpeg",name:"Veggie Pizza",section:"Pizza",price:2},{img:"%PUBLIC_URL%/img/burger.jpeg",name:"Burger",section:"Sandwich",price:3},{img:"%PUBLIC_URL%/img/gyro.jpeg",name:"Gyro",section:"Sandwich",price:4.5},{img:"%PUBLIC_URL%/img/sandwich.jpeg",name:"Shrimp PoBoy",section:"Sandwich",price:6},{img:"%PUBLIC_URL%/img/fries.jpeg",name:"Fries",section:"Sides",price:1},{price:1,name:"Soda",section:"Drinks",choices:["Coke","Sprite","Root Beer"]}].reduce((function(n,e){return n[e.section]||(n[e.section]=[]),n[e.section].push(e),n}),{}),k=j.b.div(h||(h=Object(p.a)(["\nfont-family: 'Righteous', cursive;\n"]))),z=j.b.div(g||(g=Object(p.a)(["\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:20px;\n  padding-bottom: 40px;\n"]))),y=Object(j.b)(k)(O||(O=Object(p.a)(["\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 5px;\n"]))),C=j.b.div(f||(f=Object(p.a)(["\nheight: 100px; \npadding: 10px; \nfont-size: 20px; \nbackground-image: "," \nbackground-position: center;\nbackground-size: cover;\nfilter: contrast(75%); \nborder-radius: 7px; \nmargin-top: 5px; \ntransition-property: box-shadow margin-top filter; \ntransition-duration: .1s; \nbox-shadow: 0px 0px 2px 0px grey;\n&:hover {\n cursor: pointer; \n filter: contrast(100%); \n margin-top: 0px; \n margin-bottom: 5px; \n box-shadow: 0px 5px 10px 0px grey;\n}\n"])),(function(n){var e=n.img;return"url(".concat(e,");")})),P=t(0),w=j.b.div(m||(m=Object(p.a)(["\n  height: 1000px;\n  margin: 0px 400px 50px 20px;\n"])));function S(n){var e=n.setOpenFood;return Object(P.jsx)(w,{children:Object.entries(v).map((function(n){var t=Object(u.a)(n,2),i=t[0],c=t[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("h1",{children:[" ",i," "]}),Object(P.jsx)(z,{children:c.map((function(n){return Object(P.jsx)(C,{img:n.img,onClick:function(){e(n)},children:Object(P.jsxs)(y,{children:[Object(P.jsx)("div",{children:n.name}),Object(P.jsx)("div",{children:l(n.price)})]})})}))})]})}))})}var F,L,U="#f44336",B=j.b.div(F||(F=Object(p.a)(["\nbackground-color:",";\npadding:10px;\nposition:fixed;\nwidth:100%;\nz-index:999;\n"])),U),R=Object(j.b)(k)(L||(L=Object(p.a)(["\nfont-size:20px;\ncolor:white;\ntext-shadow: 1px 1px 4px #380502;\n"])));function I(){return Object(P.jsx)(B,{children:Object(P.jsxs)(R,{children:["Pizza Shop"," ",Object(P.jsx)("span",{role:"img","aria-label":"pizza slice",children:"\ud83c\udf55"})]})})}var _,T,q,V,A,D,E=t(6),J=j.b.input(_||(_=Object(p.a)(["\n  font-size: 18px;\n  width: 24px;\n  text-align: center;\n  border: none;\n  outline: none;\n"]))),M=Object(j.b)(k)(T||(T=Object(p.a)(["\n  display: flex;\n  height: 24px;\n"]))),W=j.b.div(q||(q=Object(p.a)(["\n  width: 23px;\n  color: ",";\n  font-size: 20px;\n  text-align: center;\n  cursor: pointer;\n  line-height: 23px;\n  margin: 0px 10px;\n  border: 1px solid ",";\n  ","\n  &:hover {\n    background-color: #ffe3e3;\n  }\n"])),U,U,(function(n){return n.disabled&&"opacity: 0.5; \n     pointer-events: none; \n     "}));function Y(n){var e=n.quantity;return Object(P.jsxs)(M,{children:[Object(P.jsx)("div",{children:"Quantity:"}),Object(P.jsx)(W,{onClick:function(){e.setValue(e.value-1)},disabled:1===e.value,children:"-"}),Object(P.jsx)(J,Object(d.a)({},e)),Object(P.jsx)(W,{onClick:function(){e.setValue(e.value+1)},children:"+"})]})}var G=j.b.div(V||(V=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n"]))),H=j.b.input(A||(A=Object(p.a)(["\n  margin-right: 10px;\n  cursor: pointer;\n"]))),Q=j.b.label(D||(D=Object(p.a)(["\n  cursor: pointer;\n"])));function K(n){var e=n.toppings,t=n.checkTopping;return Object(P.jsx)(G,{children:e.map((function(n,e){return Object(P.jsxs)(Q,{children:[Object(P.jsx)(H,{type:"checkbox",checked:n.checked,onClick:function(){t(e)}}),n.name]})}))})}function N(n){var e=Object(r.useState)(n||$.map((function(n){return{name:n,checked:!1}}))),t=Object(u.a)(e,2),i=t[0],c=t[1];return{checkTopping:function(n){var e=Object(E.a)(i);e[n].checked=!e[n].checked,c(e)},toppings:i}}var X,Z,$=["Extra Cheese","Pepperoni","Sausage","Onions","Peppers","Pineapple","Ham","Spinach","Artichokes","Mushrooms","Anchovies"];var nn,en,tn,cn,rn,on,an,sn="cursor: pointer",dn=j.b.input(X||(X=Object(p.a)(["\n  ","\n"])),sn),pn=j.b.label(Z||(Z=Object(p.a)(["\n  ","\n"])),sn);function jn(n){var e=n.openFood,t=n.choiceRadio;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h3",{children:"Choose one"}),e.choices.map((function(n){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(dn,{type:"radio",id:n,name:"choice",value:n,checked:t.value===n,onChange:t.onChange}),Object(P.jsxs)(pn,{for:n,children:[" ",n," "]})," "]})}))]})}var bn,xn,un,ln,hn,gn=j.b.div(nn||(nn=Object(p.a)(["\n  width: 500px;\n  background-color: white;\n  position: fixed;\n  top: 75px;\n  z-index: 5;\n  max-height: calc(100% - 100px);\n  left: calc(50% - 250px);\n  display: flex;\n  flex-direction: column;\n"]))),On=j.b.div(en||(en=Object(p.a)(["\n  overflow: auto;\n  min-height: 100px;\n  padding: 0px 40px;\n  padding-bottom: 80px;\n"]))),fn=j.b.div(tn||(tn=Object(p.a)(["\n  box-shadow: 0px -2px 10px 0px grey;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n"]))),mn=Object(j.b)(k)(cn||(cn=Object(p.a)(["\n  margin: 10px;\n  color: white;\n  height: 20px;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  width: 200px;\n  cursor: pointer;\n  background-color: ",";\n  ","\n"])),U,(function(n){return n.disabled&&"\n    opactity: .5; \n    background-color: grey; \n    pointer-events: none; \n  "})),vn=j.b.div(rn||(rn=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  background-color: black;\n  opacity: 0.7;\n  z-index: 4;\n"]))),kn=j.b.div(on||(on=Object(p.a)(["\n  min-height: 200px;\n  margin-bottom: 20px;\n  ","\n  background-position: center;\n  background-size: cover;\n"])),(function(n){var e=n.img;return e?"background-image: url(".concat(e,");"):"min-height: 75px;"})),zn=Object(j.b)(y)(an||(an=Object(p.a)(["\n  font-size: 30px;\n  padding: 5px 40px;\n  top: ",";\n"])),(function(n){return n.img?"100px":"20px"}));function yn(n){return n.quantity*(n.price+.5*n.toppings.filter((function(n){return n.checked})).length)}function Cn(n){var e=n.openFood,t=n.setOpenFood,i=n.setOrders,c=n.orders,o=function(n){var e=Object(r.useState)(n||1),t=Object(u.a)(e,2),i=t[0],c=t[1];return{value:i,setValue:c,onChange:function(n){+n.target.value>=1?c(+n.target.value):c(1)}}}(e&&e.quantity),a=N(e.toppings),s=function(n){var e=Object(r.useState)(n),t=Object(u.a)(e,2),i=t[0],c=t[1];return{value:i,onChange:function(n){c(n.target.value)}}}(e.choice),p=e.index>-1;function j(){t()}var b,x=Object(d.a)(Object(d.a)({},e),{},{quantity:o.value,toppings:a.toppings,choice:s.value});return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(vn,{onClick:j}),Object(P.jsxs)(gn,{children:[Object(P.jsx)(kn,{img:e.img,children:Object(P.jsxs)(zn,{children:[" ",e.name," "]})}),Object(P.jsxs)(On,{children:[Object(P.jsx)(Y,{quantity:o}),(b=e,"Pizza"===b.section&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h3",{children:" Would you like toppings? "}),Object(P.jsx)(K,Object(d.a)({},a))]})),e.choices&&Object(P.jsx)(jn,{openFood:e,choiceRadio:s})]}),Object(P.jsx)(fn,{children:Object(P.jsxs)(mn,{onClick:p?function(){var n=Object(E.a)(c);n[e.index]=x,i(n),j()}:function(){i([].concat(Object(E.a)(c),[x])),j()},disabled:e.choices&&!s.value,children:[p?"Update order: ":"Add to order: ",l(yn(x))]})})]})]})}function Pn(n){return n.openFood?Object(P.jsx)(Cn,Object(d.a)({},n)):null}var wn=j.b.div(bn||(bn=Object(p.a)(["\n  position: fixed;\n  right: 0px;\n  top: 48px;\n  width: 340px;\n  background-color: white;\n  height: calc(100% - 48px);\n  z-index: 10;\n  box-shadow: 4px 0px 5px 4px grey;\n  display: flex;\n  flex-direction: column;\n"]))),Sn=Object(j.b)(On)(xn||(xn=Object(p.a)(["\n  padding: 20px;\n  height: 100%;\n"]))),Fn=j.b.div(un||(un=Object(p.a)(["\n  padding: 10px 0px;\n  border-bottom: 1px solid grey;\n  ","\n"])),(function(n){return n.editable?"\n    &:hover {\n      cursor: pointer;\n      background-color: #e7e7e7;\n    }\n  ":"\n    pointer-events: none; \n  "})),Ln=j.b.div(ln||(ln=Object(p.a)(["\n  padding: 10px 0px;\n  display: grid;\n  grid-template-columns: 20px 150px 20px 60px;\n  justify-content: space-between;\n"]))),Un=j.b.div(hn||(hn=Object(p.a)(["\n  color: gray;\n  font-size: 10px;\n"])));function Bn(n){var e=n.orders,t=n.setOrders,i=n.setOpenFood,c=e.reduce((function(n,e){return n+yn(e)}),0),r=.07*c,o=c+r;return Object(P.jsxs)(wn,{children:[0===e.length?Object(P.jsx)(Sn,{children:"Your order's looking pretty empty."}):Object(P.jsxs)(Sn,{children:[" ",Object(P.jsx)(Fn,{children:" Your Order: "})," ",e.map((function(n,c){return Object(P.jsxs)(Fn,{editable:!0,children:[Object(P.jsxs)(Ln,{onClick:function(){i(Object(d.a)(Object(d.a)({},n),{},{index:c}))},children:[Object(P.jsx)("div",{children:n.quantity}),Object(P.jsx)("div",{children:n.name}),Object(P.jsx)("div",{style:{cursor:"pointer"},onClick:function(n){n.stopPropagation(),function(n){var i=Object(E.a)(e);i.splice(n,1),t(i)}(c)},children:"\ud83d\uddd1"}),Object(P.jsx)("div",{children:l(yn(n))})]}),Object(P.jsx)(Un,{children:n.toppings.filter((function(n){return n.checked})).map((function(n){return n.name})).join(", ")}),n.choice&&Object(P.jsx)(Un,{children:n.choice})]})})),Object(P.jsxs)(Fn,{children:[Object(P.jsxs)(Ln,{children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{children:"Sub-Total"}),Object(P.jsx)("div",{children:l(c)})]}),Object(P.jsxs)(Ln,{children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{children:"Tax"}),Object(P.jsx)("div",{children:l(r)})]}),Object(P.jsxs)(Ln,{children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{children:"Total"}),Object(P.jsx)("div",{children:l(o)})]})]})]}),Object(P.jsx)(fn,{children:Object(P.jsx)(mn,{children:"Checkout"})})]})}var Rn=function(){var n=function(){var n=Object(r.useState)(),e=Object(u.a)(n,2);return{openFood:e[0],setOpenFood:e[1]}}(),e=function(){var n=Object(r.useState)([]),e=Object(u.a)(n,2);return{orders:e[0],setOrders:e[1]}}();return function(n){var e=n.openFood,t=n.orders;Object(r.useEffect)((function(){document.title=e?e.name:0===t.length?"What's for dinner?":"[".concat(t.length,"] items in your order! ")}))}(Object(d.a)(Object(d.a)({},n),e)),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(b,{}),Object(P.jsx)(Pn,Object(d.a)(Object(d.a)({},n),e)),Object(P.jsx)(I,{}),Object(P.jsx)(Bn,Object(d.a)(Object(d.a)({},e),n)),Object(P.jsx)(x,{}),Object(P.jsx)(S,Object(d.a)({},n))]})},In=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),c(n),r(n),o(n)}))};s.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(Rn,{})}),document.getElementById("root")),In()}},[[25,1,2]]]);
//# sourceMappingURL=main.ede7b78f.chunk.js.map