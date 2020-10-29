(this["webpackJsonpsuchary-react"]=this["webpackJsonpsuchary-react"]||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},37:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(37),a(16)),s=a(7),i=a(5),u=(a(38),a(23)),m=a(2),d=a(6),p=a.n(d),E=a(11),f=function(e){return{type:"setFavorites",payload:e}},h=function(e){return{type:"setLikes",payload:e}},b=function(e){return{type:"setAuth",payload:e}},g=function(e){return{type:"setPage",payload:e}},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var a=Object(E.a)(p.a.mark((function a(n,r){var c,o,l,s,i;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=2;break}return a.abrupt("return",n({type:"UPDATE_JOKES_STATE",payload:t}));case 2:return n({type:"FETCH_JOKES_REQUEST"}),a.prev=3,a.next=6,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/jokes/".concat(e));case 6:return c=a.sent,a.next=9,c.json();case 9:return o=a.sent,a.next=12,o.data.data;case 12:if(a.t0=a.sent,a.t0){a.next=17;break}return a.next=16,o.data.jokes;case 16:a.t0=a.sent;case 17:return l=a.t0,a.next=20,o.data.nextPage;case 20:if(a.t1=a.sent,a.t1){a.next=23;break}a.t1=null;case 23:return s=a.t1,a.next=26,o.data.prevPage;case 26:if(a.t2=a.sent,a.t2){a.next=29;break}a.t2=null;case 29:i=a.t2,n({type:"FETCH_JOKES_SUCCESS",payload:l,next:s,prev:i}),a.next=36;break;case 33:a.prev=33,a.t3=a.catch(3),n({type:"FETCH_JOKES_FAILURE",error:a.t3});case 36:case"end":return a.stop()}}),a,null,[[3,33]])})));return function(e,t){return a.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var r=Object(E.a)(p.a.mark((function r(c,o){var l,s;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"FETCH_ACTION_REQUEST"}),r.prev=1,r.next=4,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/".concat(t),{method:n,headers:{"Content-Type":"application/json","x-access-token":e.auth},body:JSON.stringify(a)});case 4:return l=r.sent,r.next=7,l.json();case 7:s=r.sent,c({type:"FETCH_ACTION_SUCCESS",payload:s}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),c({type:"FETCH_ACTION_FAILURE",error:r.t0});case 14:case"end":return r.stop()}}),r,null,[[1,11]])})));return function(e,t){return r.apply(this,arguments)}}()},v=function(){var e=Object(m.c)((function(e){return e.auth})),t=Object(m.b)();return r.a.createElement("nav",null,r.a.createElement(u.a,{effect:"solid",type:"info"}),r.a.createElement(s.b,{onClick:function(){t(g(1))},"data-tip":"Jeszcze jeden suchar i b\u0119d\u0119 <strong><em>najedzony!</em></strong>","data-html":!0,className:"brand",to:"/"}),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(s.b,{onClick:function(){t(g(1))},to:"/strona/1"},"najnowsze")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/losowe"},"losowe")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/mojeulubione"},"moje ulubione")),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{style:{fontWeight:"bold"},to:"/dodaj"},"dodaj suchara")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/smieszek/".concat(e.login)},e.login)," ",r.a.createElement("span",{style:{color:"#eee"}}," | "),r.a.createElement(s.b,{to:"/wyloguj"},"wyloguj"))):r.a.createElement("li",null,r.a.createElement(s.b,{style:{fontWeight:"bold"},to:"/auth"},"dodaj suchara"))))},k=a(10),O=a(8),w=a.n(O),S=a(4),x=a(17),N=function(e){var t=e.joke,a=e.noLikes,n=e.rm,c=e.jokes,o=e.setJokes,i=Object(m.c)((function(e){return e.favorites})),d=Object(m.c)((function(e){return e.likes})),b=Object(m.c)((function(e){return e.auth})),g=Object(m.b)(),j=function(e){if(i.includes(e._id)){var t=i.filter((function(t){return t!==e._id}));localStorage.setItem("favorites",JSON.stringify(t)),g(f(Object(l.a)(t)))}else i.push(e._id),g(f(Object(l.a)(i))),localStorage.setItem("favorites",JSON.stringify(i));null===localStorage.getItem(e._id||0)?localStorage.setItem(e._id,JSON.stringify(e.joke)):localStorage.removeItem(e._id)},y=function(){var e=Object(E.a)(p.a.mark((function e(t,a){var n,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("del"===a&&(n="jokes/".concat(t),r="DELETE"),"admin"===a&&(n="jokes/".concat(t,"/category/1"),r="PATCH"),!window.confirm("Czy napewno usun\u0105\u0107 tego suchara?")){e.next=10;break}return e.next=5,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/".concat(n),{method:r,headers:{"Content-Type":"application/json","x-access-token":b.auth}});case 5:return s=e.sent,e.next=8,s.json();case 8:"success"===e.sent.status&&(i=c.filter((function(e){return e._id!==t})),o(Object(l.a)(i)));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(E.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.includes(t._id)){e.next=12;break}return d.push(t._id),g(h(Object(l.a)(d))),localStorage.setItem("likes",JSON.stringify(d)),e.next=6,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/joke/vote/like/".concat(t._id),{method:"POST",headers:{"Content-Type":"application/json"}});case 6:return a=e.sent,e.next=9,a.json();case 9:n=e.sent,r=c.map((function(e){return e._id===t._id?Object(S.a)(Object(S.a)({},e),{},{likes:n.data.likes}):e})),o(r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){return r.a.createElement("button",{disabled:!!d.includes(t._id),className:"likeBtn",onClick:function(){return v(t)}},r.a.createElement("span",{className:"likeBtnContent"},d.includes(t._id)?r.a.createElement(x.a,{style:{color:"red"}}):r.a.createElement(x.b,{style:{color:"red"}}),r.a.createElement("span",{style:{paddingLeft:10}},t.likes)))};return t&&void 0===t.joke&&o(t[0]),r.a.createElement("div",null,r.a.createElement("div",{className:1===t.category?"trash suchar":"suchar"},r.a.createElement("div",null,r.a.createElement("div",{className:"trashInfo"},1===t.category&&"Suchar znajduje si\u0119 w \u015bmietniku"),t&&void 0===t.joke?t[0].joke.replace(/&quot;/g,'"'):t.joke.replace(/&quot;/g,'"'),r.a.createElement(s.b,{"data-tip":"Link do sucharka",className:"sucharLink",to:"/suchar/".concat(t._id)},r.a.createElement(x.c,null))),r.a.createElement("div",{className:"likeBox"},!a&&r.a.createElement(k,null),r.a.createElement("div",{className:"bookmarkBtn"},i.includes(t._id)?r.a.createElement(x.e,{"data-tip":"Usu\u0144 z ulubionych",onClick:function(){return j(t)},style:{color:"rgb(65,145,245)"}}):r.a.createElement(x.d,{"data-tip":"Dodaj do ulubionych",onClick:function(){return j(t)},style:{color:"rgb(65,145,245)"}}),b&&b.login===t.login&&!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.f,{onClick:function(){y(t._id,"del")},"data-tip":"Usu\u0144 sw\xf3j suchar",style:{marginLeft:20,fontSize:16,color:"orange"}})),b&&3===b.role&&!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.f,{onClick:function(){y(t._id,"admin")},"data-tip":"Do \u015bmietika",style:{marginLeft:20,fontSize:16,color:"red"}})),r.a.createElement(u.a,{effect:"solid",type:"info"})))))},C=function(){var e=Object(n.useState)(!0),t=Object(k.a)(e,2),a=t[0],c=t[1],o=Object(i.g)().pageId,l=Object(i.h)(),s=Object(m.c)((function(e){return e.page})),u=Object(m.c)((function(e){return e.jokes})),d=Object(m.b)(),p="/smietnik"===l.url?"/cat/1":"",E="/smietnik"===l.url?"/smietnik":"";Object(n.useEffect)((function(){a&&o>1?(d(j("page/".concat(o)+p)),d(g(o)),c(!1)):d(j("page/".concat(s)+p)),window.history.replaceState(null,"Strona: ".concat(s),"".concat(E,"/strona/").concat(s))}),[s]);var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"suchary"},u.jokes.map((function(e,t){return r.a.createElement(N,{joke:e,id:t,key:t,jokes:u.jokes,setJokes:function(e){d(j("page/".concat(s)+p,e))}})}))),r.a.createElement("div",{className:"paginator"},r.a.createElement("button",{className:"pageBtn",onClick:function(){d(g(u.prev))},disabled:null===u.prev&&!0},"Poprzednia strona"),r.a.createElement("h4",{style:{color:"#eee"}},"Strona: ",s),r.a.createElement("button",{className:"pageBtn",onClick:function(){d(g(u.next))},disabled:null===u.next&&!0},"Nast\u0119pna strona")))};return r.a.createElement(r.a.Fragment,null,u.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(w.a,{type:"bars",color:"grey"})):r.a.createElement(f,null))},z=function(){for(var e=Object(m.c)((function(e){return e.favorites})),t=[{}],a=0;a<e.length;a++){var n=e[a],c=JSON.parse(localStorage.getItem([n]||!1));t[a]={joke:c,_id:n}}return r.a.createElement("div",{className:"suchary"},t.map((function(t,a){return e.length>=1?r.a.createElement(N,{joke:t,id:a,key:a,noLikes:!0}):r.a.createElement("p",{style:{color:"#eee"}},"Nie doda\u0142e\u015b jeszcze \u017cadnego suchara do swojej listy (\u256f\ufe35\u2570,)")})))},_=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.jokes}));Object(n.useEffect)((function(){e(j("random"))}),[]);var a=function(){return r.a.createElement("div",{className:"randBtn"},r.a.createElement("button",{className:"pagerBtn",onClick:function(){e(j("random"))}},"Wylosuj ponownie"))},c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a,null),r.a.createElement("div",{className:"suchary"},t.jokes.map((function(a,n){return r.a.createElement(N,{joke:a,id:n,key:n,jokes:t.jokes,setJokes:function(t){e(j("random",t))}})}))),r.a.createElement(a,null))};return r.a.createElement(r.a.Fragment,null,t.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(w.a,{type:"bars",color:"grey"})):r.a.createElement(c,null))},T=function(){var e=Object(i.g)().id,t=Object(m.c)((function(e){return e.jokes})),a=Object(m.b)();Object(n.useEffect)((function(){a(j(e))}),[]);var c=function(e){return r.a.createElement("div",{className:"sucharInfo"},"Dodany przez"," ",r.a.createElement(s.b,{to:"/smieszek/".concat(e.joke.login)},e.joke.login)," w dniu ",String(e.joke.createdOn).replace(/T(.*)/g,""))},o=function(){return r.a.createElement(r.a.Fragment,null,t.jokes.map((function(n,o){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{key:1,joke:n}),r.a.createElement(N,{joke:n,id:o,key:o,jokes:t.jokes,rm:!0,setJokes:function(t){a(j(e,t))}}))})))};return r.a.createElement(r.a.Fragment,null,t.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(w.a,{type:"bars",color:"grey"})):t?r.a.createElement(o,null):r.a.createElement("h4",{style:{color:"#eee"}},"Brak podanego suchara"))},F=function(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(k.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(k.a)(l,2),i=s[0],u=s[1],d=Object(n.useState)(!1),f=Object(k.a)(d,2),h=f[0],g=f[1],j=function(){var t=Object(E.a)(p.a.mark((function t(a,n){var r,c,l,s,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),"register"!==n){t.next=8;break}if(u(!0),r="https://pbsapi.skorotkiewicz.vercel.app/api/users",a.target.password.value===a.target.password2.value){t.next=6;break}return t.abrupt("return",o("Poadane has\u0142a nie zgadzaj\u0105 si\u0119"));case 6:t.next=10;break;case 8:g(!0),r="https://pbsapi.skorotkiewicz.vercel.app/api/session";case 10:return c={user:{login:a.target.login.value,password:a.target.password.value}},t.next=13,fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 13:return l=t.sent,t.next=16,l.json();case 16:(s=t.sent).status&&(u(!1),g(!1)),"success"===s.status?(i={auth:s.data["User-Token"],login:s.data.Login,role:s.data.Role},localStorage.setItem("auth",JSON.stringify(i)),e(b(i))):o(s.message);case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),y=function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("h1",{style:{color:"#fff",marginBottom:20}},"Zarejestruj si\u0119"),r.a.createElement("form",{onSubmit:function(e){return j(e,"register")}},r.a.createElement("input",{type:"text",name:"login",placeholder:"Login"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Has\u0142o",name:"password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Wpisz ponownie has\u0142o",name:"password2"}),r.a.createElement("br",null),i?r.a.createElement(w.a,{type:"cylon",color:"grey"}):r.a.createElement("input",{style:{borderRadius:10},type:"submit",value:"Zarejestruj"})))},v=function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("h1",{style:{color:"#fff",marginBottom:20}},"Zaloguj si\u0119"),r.a.createElement("form",{onSubmit:function(e){return j(e,"login")}},r.a.createElement("input",{type:"text",name:"login",placeholder:"Login"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Twoje has\u0142o",name:"password"}),r.a.createElement("br",null),h?r.a.createElement(w.a,{type:"cylon",color:"grey"}):r.a.createElement("input",{style:{borderRadius:10},type:"submit",value:"Zaloguj"})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"authContent"},r.a.createElement(y,null),r.a.createElement("hr",{style:{marginTop:20,marginBottom:20}}),r.a.createElement(v,null)),r.a.createElement("div",{className:"authContent"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{style:{color:"#fff"}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement("em",null,"Witaj! "),"Je\u017celi nie masz jeszcze konta to mo\u017cesz sie zarejestrowac w mniej ni\u017c 15 sekund, lub zaloguj si\u0119. :)"))))},L=function(){return Object(m.b)()(b(!1)),localStorage.removeItem("auth"),r.a.createElement("div",null,r.a.createElement(i.a,{to:"/"}))},I=function(e){var t=e.auth,a=Object(n.useState)(""),c=Object(k.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(""),u=Object(k.a)(s,2),d=u[0],f=u[1],h=Object(m.c)((function(e){return e.actions})),b=Object(m.b)(),g=function(){var e=Object(E.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(o.length>5e3||o.length<20)){e.next=3;break}return e.abrupt("return",f("Suchar powinnien mie\u0107 przynajmniej 20 znak\xf3w i maksymalnie 5000 znak\xf3w."));case 3:b(y(t,"jokes",{joke:o,author:t.login},"POST"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:g},r.a.createElement("textarea",{className:"suchar",style:{width:"100%",height:"60vh"},onChange:function(e){return l(e.target.value)},name:"suchar",value:o,placeholder:"Tutaj wpisz swojego suchara..."}),h.isLoading?r.a.createElement(w.a,{type:"cylon",color:"grey"}):r.a.createElement("button",{disabled:!(o.length>=20),className:"addBtn"},"Dodaj"),o.length>0&&o.length<20&&r.a.createElement("small",{style:{color:"#aaa"}},"Aby doda\u0107 suchara napisz wi\u0119cej")),r.a.createElement("h4",{style:{color:"#eee"}},h.data.message||d),"success"===h.data.status&&r.a.createElement(i.a,{to:"/suchar/".concat(h.data.data._id)}))},U=function(e){var t=e.auth,a=Object(n.useState)(""),c=Object(k.a)(a,2),o=c[0],l=c[1],s=Object(m.c)((function(e){return e.actions})),i=Object(m.b)(),u=function(){var e=Object(E.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),a.target.newPassword.value===a.target.newPassword2.value){e.next=3;break}return e.abrupt("return",l("Podane has\u0142a nie zgadzaj\u0105 si\u0119"));case 3:n={user:{yourPassword:a.target.currentPassword.value,newPassword:a.target.newPassword.value}},i(y(t,"users",n,"PATCH"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"authContent"},r.a.createElement("div",{className:"auth"},r.a.createElement("h1",{style:{color:"#fff",marginBottom:20}},"Zmie\u0144 has\u0142o"),r.a.createElement("form",{onSubmit:u},r.a.createElement("input",{type:"password",name:"currentPassword",placeholder:"Twoje aktualne has\u0142o"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"newPassword",placeholder:"Nowe has\u0142o"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"newPassword2",placeholder:"Podaj ponownie nowe has\u0142o"}),r.a.createElement("br",null),s.isLoading?r.a.createElement(w.a,{type:"cylon",color:"grey"}):r.a.createElement("input",{style:{borderRadius:10},type:"submit",value:"Zmie\u0144 has\u0142o"})))),s.data.message||o?r.a.createElement("div",{className:"authContent"},s.data.message||o):r.a.createElement("div",{className:"authContent"},r.a.createElement("p",null,"Tutaj mo\u017cesz zmieni\u0107 swoje stare has\u0142o na nowe. Pami\u0119taj aby twoje nowe has\u0142o by\u0142o silne i unikatowe!")))},J=function(){var e=Object(i.g)(),t=e.login,a=e.pageId,c=Object(n.useState)(1),o=Object(k.a)(c,2),l=o[0],u=o[1],d=Object(n.useState)(!0),f=Object(k.a)(d,2),h=f[0],b=f[1],g=Object(m.b)(),y=Object(m.c)((function(e){return e.auth})),v=Object(m.c)((function(e){return e.jokes})),O=Object(m.c)((function(e){return e.user})),S="user/".concat(t,"/").concat(l);Object(n.useEffect)((function(){h&&a>1?(u(a),b(!1),g(j("user/".concat(t,"/").concat(a)))):g(j(S)),window.history.replaceState(null,"\u015amieszek: ".concat(t," - Strona: ").concat(l),"/smieszek/".concat(t,"/strona/").concat(l))}),[l]),Object(n.useEffect)((function(){u(1),g(function(e){return function(){var t=Object(E.a)(p.a.mark((function t(a,n){var r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_USER_REQUEST"}),t.prev=1,t.next=4,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/users/".concat(e));case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,a({type:"FETCH_USER_SUCCESS",payload:c.data}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:"FETCH_USER_FAILURE",error:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))}),[t]);var x=function(){var e=String(O.user.joined).replace(/T(.*)/g,"");return r.a.createElement("div",{style:{color:"#adadad"}},r.a.createElement("h1",{style:{color:"#eee"}},O.user.login),r.a.createElement("h4",null,"Punkty: ",r.a.createElement("em",null,O.user.points)),r.a.createElement("h4",null,"Do\u0142\u0105czy\u0142: ",r.a.createElement("em",null,e)),y.login===O.user.login&&r.a.createElement("div",{className:"settingsBox"},"ustawienia:"," ",r.a.createElement(s.b,{style:{color:"#ededed"},to:"/ustawienia/zmianahasla"},"zmie\u0144 has\u0142o")),r.a.createElement("hr",{style:{marginTop:20,marginBottom:20}}))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{color:"#eee",marginBottom:20}},"Suchary dodane przez ",t),r.a.createElement("div",{className:"suchary"},v.jokes.map((function(e,t){return r.a.createElement(N,{joke:e,id:t,key:t,noLikes:!1,jokes:v.jokes,setJokes:function(e){g(j(S,e))}})}))))},z=function(){return r.a.createElement("div",{className:"paginator"},r.a.createElement("button",{className:"pageBtn",onClick:function(){u(v.prev)},disabled:null===v.prev&&!0},"Poprzednia strona"),r.a.createElement("h4",{style:{color:"#eee"}},"Strona: ",l),r.a.createElement("button",{className:"pageBtn",onClick:function(){u(v.next)},disabled:null===v.next&&!0},"Nast\u0119pna strona"))};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,O.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(w.a,{type:"bars",color:"grey"})):O.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),v.isLoading?r.a.createElement(w.a,{type:"cylon",color:"grey"}):r.a.createElement(r.a.Fragment,null,0!==v.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(z,null)):r.a.createElement("p",{style:{color:"#eee"}},"Na tym profilu nie ma jeszcze, \u017cadnego suchara (\u256f\ufe35\u2570,)"))):r.a.createElement("p",{style:{color:"#eee"}},"Nie znaleziono \u015bmieszka")))};var P=function(){var e=JSON.parse(localStorage.getItem("favorites")||0),t=JSON.parse(localStorage.getItem("likes")||0),a=JSON.parse(localStorage.getItem("auth")||0),c=Object(m.c)((function(e){return e.auth})),o=Object(m.b)();return Object(n.useEffect)((function(){0!==e&&o(f(Object(l.a)(e))),0!==t&&o(h(Object(l.a)(t))),0!==a&&o(b(a))}),[]),r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement("div",{className:"content"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:C}),r.a.createElement(i.b,{path:"/strona/:pageId",exact:!0,component:C}),r.a.createElement(i.b,{path:"/smietnik",exact:!0,component:C}),r.a.createElement(i.b,{path:"/smietnik/strona/:pageId",exact:!0,component:C}),r.a.createElement(i.b,{path:"/losowe",exact:!0,component:_}),r.a.createElement(i.b,{path:"/mojeulubione",exact:!0,component:z}),r.a.createElement(i.b,{path:"/suchar/:id",exact:!0,component:T}),r.a.createElement(i.b,{path:"/smieszek/:login",exact:!0,component:J}),r.a.createElement(i.b,{path:"/smieszek/:login/strona/:pageId",exact:!0,component:J}),r.a.createElement(i.b,{path:"/auth",exact:!0},r.a.createElement(F,null),c&&r.a.createElement(i.a,{to:"/dodaj"})),r.a.createElement(i.b,{path:"/wyloguj",exact:!0},c&&r.a.createElement(L,null)),r.a.createElement(i.b,{path:"/dodaj",exact:!0},c&&r.a.createElement(I,{auth:c})),r.a.createElement(i.b,{path:"/ustawienia/zmianahasla",exact:!0},c&&r.a.createElement(U,{auth:c})),r.a.createElement(i.b,{path:"*",exact:!0,component:function(){return r.a.createElement("h3",{style:{color:"#eee"}},"Nie znaleziono strony (\u256f\ufe35\u2570,)")}}))),r.a.createElement("div",{className:"footer"},"\xa9 Suchary 2020 |"," ",r.a.createElement("a",{style:{color:"#eee",marginLeft:5},href:"https://github.com/skorotkiewicz/suchary"},"opensource"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R,A=a(15),B=Object(A.combineReducers)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFavorites":return t.payload;default:return e}},likes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setLikes":return t.payload;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAuth":return t.payload;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPage":return t.payload;default:return e}},jokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{jokes:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_JOKES_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0,error:null});case"FETCH_JOKES_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,jokes:t.payload,next:t.next,prev:t.prev});case"FETCH_JOKES_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,error:t.error});case"UPDATE_JOKES_STATE":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,jokes:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0,error:null});case"FETCH_USER_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,user:t.payload});case"FETCH_USER_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},actions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ACTION_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0,error:null});case"FETCH_ACTION_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,data:t.payload});case"FETCH_ACTION_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,error:t.error});default:return e}}}),H=a(31);a(45);R=Object(A.createStore)(B,Object(A.applyMiddleware)(H.a)),o.a.render(r.a.createElement(m.a,{store:R},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.de5bef63.chunk.js.map