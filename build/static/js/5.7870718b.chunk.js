(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{100:function(e,t,n){e.exports={control:"AddMovieForm_control__3IqON",top:"AddMovieForm_top__Zi64w",cancel:"AddMovieForm_cancel__1dQHP"}},108:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(52),a=n(4),i=n(9),s=n(12),l=n(96),j=n.n(l),u=n(0),d=function(e){return console.log(e.id),Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)("li",{className:j.a.movie,children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("h3",{children:e.releaseDate}),Object(u.jsx)("p",{children:e.openingText}),Object(u.jsx)("button",{className:j.a.delete,onClick:function(){return e.onClick(e.id)},children:"Delete"})]})})},b=n(97),x=n.n(b),h=function(e){return Object(u.jsx)("ul",{className:x.a["movies-list"],children:e.movies.map((function(t){return Object(u.jsx)(d,{id:t.id,title:t.title,releaseDate:t.releaseDate,openingText:t.openingText,onClick:e.onChange},t.id)}))})},p=(n(98),n(13)),O=n(99),f=n.n(O),v=n(100),m=n.n(v);var _=function(e){var t=Object(c.useRef)(""),n=Object(c.useRef)(""),o=Object(c.useRef)("");return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={title:t.current.value,openingText:n.current.value,releaseDate:o.current.value};e.onSaveMovieData(r),t(""),n(""),o("")},children:[Object(u.jsxs)("div",{className:m.a.top,children:[Object(u.jsxs)("div",{className:m.a.control,children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title"}),Object(u.jsx)("input",{type:"text",id:"title",ref:t})]}),Object(u.jsxs)("div",{className:m.a.control,children:[Object(u.jsx)("label",{htmlFor:"opening-text",children:"Opening Text"}),Object(u.jsx)("textarea",{rows:"5",id:"opening-text",ref:n})]}),Object(u.jsxs)("div",{className:m.a.control,children:[Object(u.jsx)("label",{htmlFor:"date",children:"Release Date"}),Object(u.jsx)("input",{type:"text",id:"date",ref:o})]})]}),Object(u.jsx)("button",{children:"Add Movie"}),Object(u.jsx)("button",{className:m.a.cancel,onClick:e.onCancel,children:"Cancel"})]})})},g=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1];return Object(u.jsxs)("div",{children:[!o&&Object(u.jsx)("button",{className:f.a.addMovie,onClick:function(){r(!0)},children:"Add New Movies"}),o&&Object(u.jsx)(_,{onSaveMovieData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddMovie(n),r(!1)},onCancel:function(){r(!1)}})]})};var k=function(){var e,t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],l=n[1],j=Object(c.useState)(!1),d=Object(s.a)(j,2),b=d[0],x=d[1],p=Object(c.useState)(null),O=Object(s.a)(p,2),f=O[0],v=O[1],m=Object(c.useCallback)(Object(i.a)(Object(a.a)().mark((function e(){var t,n,c,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),v(null),e.prev=2,e.next=5,fetch("https://react-http-ba0c5-default-rtdb.firebaseio.com/movies.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(o in n=e.sent,c=[],n)c.push({id:o,title:n[o].title,openingText:n[o].openingText,releaseDate:n[o].releaseDate});l(c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),v(e.t0.message);case 19:x(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);function _(){return(_=Object(i.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-ba0c5-default-rtdb.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(i.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!window.confirm("Are you sure in deleting?")){e.next=10;break}return e.next=4,fetch("https://react-http-ba0c5-default-rtdb.firebaseio.com/movies/".concat(t,".json"),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,console.log(c),m();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.length>0&&(e=Object(u.jsx)(h,{movies:r,onChange:function(e){return k.apply(this,arguments)}})),0===r.length&&(e=Object(u.jsx)("p",{children:"No Movies found..."})),f&&(e=Object(u.jsx)("p",{children:f})),b&&(e=Object(u.jsx)("p",{children:"Loading..."})),Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)("section",{children:Object(u.jsx)(g,{onAddMovie:function(e){return _.apply(this,arguments)}})}),Object(u.jsxs)("section",{children:[Object(u.jsx)("button",{onClick:m,children:"Fetch Movies"}),Object(u.jsx)("section",{children:e})]})]})},F=n(50),M=function(e){return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(F.a,{}),Object(u.jsx)(k,{}),Object(u.jsx)(r.a,{})]})};t.default=function(){return Object(u.jsx)(M,{})}},50:function(e,t,n){"use strict";n(1);var c=n(51),o=n.n(c),r=n(0);t.a=function(){return Object(r.jsx)("div",{className:o.a.backdrop,children:Object(r.jsx)("h1",{className:o.a.text,children:"D 's Store"})})}},51:function(e,t,n){e.exports={backdrop:"BackDrop_backdrop__23GDM",text:"BackDrop_text__2DNzI"}},52:function(e,t,n){"use strict";var c=n(1),o=n(53),r=n.n(o),a=n(0);t.a=function(e){return Object(a.jsx)(c.Fragment,{children:Object(a.jsx)("div",{className:r.a.back,children:Object(a.jsx)("div",{className:r.a.footer,children:Object(a.jsx)("div",{className:r.a.title,children:"Large Store, Take A Seat..."})})})})}},53:function(e,t,n){e.exports={footer:"Footer_footer__3kRR3",title:"Footer_title__16M1V",icons:"Footer_icons__xYpN5",ul:"Footer_ul__6EiIH",li:"Footer_li__16Xg2",img:"Footer_img__G3m5v",cartButton:"Footer_cartButton__W1Mo_",cartBottom:"Footer_cartBottom__2-N4U",back:"Footer_back__3-If-"}},96:function(e,t,n){e.exports={movie:"Movie_movie__36UBF",delete:"Movie_delete__3qbH8"}},97:function(e,t,n){e.exports={"movies-list":"MoviesList_movies-list__jPm2b"}},98:function(e,t,n){},99:function(e,t,n){e.exports={addMovie:"NewMovie_addMovie__2__Cy"}}}]);
//# sourceMappingURL=5.7870718b.chunk.js.map