(this["webpackJsonpreact-typescript-news"]=this["webpackJsonpreact-typescript-news"]||[]).push([[0],{73:function(e,t,a){e.exports=a(83)},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=a(11),o=a(29),u=a(59),s=a(14),d={isAuth:!1,user:{id:null,username:"",password:"",isAdmin:!1},usersList:[{id:1,username:"admin",password:"admin",isAdmin:!0},{id:2,username:"user",password:"user",isAdmin:!1}],errorSignIn:{isShow:!1,text:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}},p=a(64),m={posts:[{id:1,author_id:1,title:"Lorem, ipsum.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid.",date:"2020-09-23",isAccept:!0},{id:2,author_id:1,title:"Expedita provident eligendi.",description:"Expedita provident eligendi repellendus corrupti culpa soluta laboriosam sint?",date:"2020-09-23",isAccept:!0},{id:3,author_id:2,title:"de Finibus Bonorum et Malorum.",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",date:"2020-09-23",isAccept:!1}]},f=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(s.a)(Object(s.a)({},e),{},{user:t.payload,isAuth:!0,errorSignIn:Object(s.a)(Object(s.a)({},e.errorSignIn),{},{isShow:!1})});case"SIGN_OUT":return Object(s.a)(Object(s.a)({},e),{},{isAuth:!1,user:t.payload});case"SIGN_IN_ERROR":return Object(s.a)(Object(s.a)({},e),{},{errorSignIn:Object(s.a)(Object(s.a)({},e.errorSignIn),{},{isShow:t.payload})});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(p.a)(e.posts),[t.payload])});case"ACCEPT_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{isAccept:!0}):e}))});case"DECLINE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});default:return Object(s.a)({},e)}}}),h=Object(o.createStore)(f,Object(u.composeWithDevTools)()),b=a(127),g=a(39),E=a(13),O=a(121),v=a(122),j=a(119),S=a(118),y=a(19),A=a(114),I=a(129),w=function(){var e=Object(E.f)(),t=Object(n.useState)(e.location.pathname),a=Object(y.a)(t,2),i=a[0],c=a[1],l=[{label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",link:"/"},{label:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",link:"/news"}].map((function(e){return r.a.createElement(A.a,{label:e.label,to:e.link,value:e.link,component:g.b,key:e.label})}));return r.a.createElement(I.a,{value:i,onChange:function(e,t){c(t)}},l)},C=a(120),N=function(e){return{type:"SIGN_IN_ERROR",payload:e}},k=a(131),P=a(128),_=a(130),T=Object(l.b)((function(e){return{errorSignIn:e.auth.errorSignIn}}))((function(e){var t=e.errorSignIn;return t.isShow?r.a.createElement(_.a,{severity:"error"},t.text):null})),x=Object(S.a)((function(e){return{spacingTop:{marginTop:e.spacing(1)}}})),D=Object(l.b)(null,{onSignIn:function(e,t){var a=h.getState().auth.usersList.find((function(a){return e.toLowerCase()===a.username&&t===a.password}));return a?{type:"SIGN_IN",payload:a}:(h.dispatch(N(!0)),{type:""})},setSignInError:N})((function(e){var t=e.setIsOpen,a=e.onSignIn,i=e.setSignInError,c=Object(n.useState)(""),l=Object(y.a)(c,2),o=l[0],u=l[1],s=Object(n.useState)(""),d=Object(y.a)(s,2),p=d[0],m=d[1],f=x(),h=!o.trim()||!p.trim(),b=function(e){e.preventDefault(),o&&p&&a(o,p)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h5",align:"center",gutterBottom:!0},"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"),r.a.createElement(T,null),r.a.createElement("form",{onSubmit:function(e){return b(e)}},r.a.createElement(P.a,{fullWidth:!0,label:"\u041b\u043e\u0433\u0438\u043d",variant:"outlined",size:"small",value:o,className:f.spacingTop,onChange:function(e){return u(e.target.value)}}),r.a.createElement(P.a,{fullWidth:!0,margin:"normal",label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",size:"small",type:"password",value:p,onChange:function(e){return m(e.target.value)}}),r.a.createElement(C.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:h,onClick:b},"\u0412\u0445\u043e\u0434"),r.a.createElement(C.a,{fullWidth:!0,variant:"outlined",className:f.spacingTop,color:"secondary",onClick:function(){return t(!1),void i(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430")))})),W=Object(S.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:e.spacing(2,4,3)}}})),L=Object(l.b)(null,{setSignInError:N})((function(e){var t=e.setSignInError,a=Object(n.useState)(!1),i=Object(y.a)(a,2),c=i[0],l=i[1],o=W();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{color:"inherit",onClick:function(){return l(!0)}},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(k.a,{open:c,onClose:function(){return l(!1),void t(!1)}},r.a.createElement("div",{className:o.paper},r.a.createElement(D,{setIsOpen:l}))))})),B=Object(l.b)((function(e){return{isAuth:e.auth.isAuth}}),{onSignOut:function(){return{type:"SIGN_OUT",payload:{id:null,username:"",password:"",isAdmin:!1}}}})((function(e){var t=e.isAuth,a=e.onSignOut;return r.a.createElement("div",null,t?r.a.createElement(C.a,{color:"inherit",onClick:function(){return a()}},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement(L,null))})),R=Object(S.a)({title:{flexGrow:1}}),G=function(){var e=R();return r.a.createElement(O.a,{position:"relative"},r.a.createElement(v.a,{variant:"dense"},r.a.createElement(j.a,{className:e.title},"React news"),r.a.createElement(w,null),r.a.createElement(B,null)))},z=a(63),F=function e(t,a,n){Object(z.a)(this,e),this.id=Date.now(),this.author_id=void 0,this.title=void 0,this.description=void 0,this.date=(new Date).toISOString().substr(0,10),this.isAccept=!1,this.author_id=t,this.title=a,this.description=n},q=Object(l.b)((function(e){return{userId:e.auth.user.id}}),{addPost:function(e,t,a){return{type:"ADD_POST",payload:new F(e,t,a)}}})((function(e){var t=e.setIsOpen,a=e.addPost,i=e.userId,c=Object(n.useState)(""),l=Object(y.a)(c,2),o=l[0],u=l[1],s=Object(n.useState)(""),d=Object(y.a)(s,2),p=d[0],m=d[1],f=!o.trim()||!p.trim();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h5",align:"center",gutterBottom:!0},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement("form",null,r.a.createElement(P.a,{fullWidth:!0,label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",variant:"outlined",size:"small",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement(P.a,{fullWidth:!0,margin:"normal",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",variant:"outlined",size:"small",value:p,onChange:function(e){return m(e.target.value)}}),r.a.createElement(C.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),a(i,o,p),t(!1)},disabled:f},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(C.a,{fullWidth:!0,variant:"outlined",color:"secondary",onClick:function(){return t(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430")))})),J=Object(S.a)((function(e){return{buttonAddPost:{alignSelf:"flex-end"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:e.spacing(2,4,3)}}})),U=Object(l.b)((function(e){return{userId:e.auth.user.id}}))((function(e){var t=e.userId,a=Object(n.useState)(!1),i=Object(y.a)(a,2),c=i[0],l=i[1],o=J();return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"contained",color:"primary",className:o.buttonAddPost,onClick:function(){return l(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"),r.a.createElement(k.a,{open:c,onClose:function(){return l(!1)}},r.a.createElement("div",{className:o.paper},r.a.createElement(q,{setIsOpen:l})))):null})),M=a(124),H=a(125),K=a(123),Q=Object(S.a)({cardAction:{display:"flex",flexDirection:"column",alignSelf:"center"},actionButton:{marginTop:10}}),V=Object(l.b)((function(e){return{isAdmin:e.auth.user.isAdmin}}),{onAcceptPost:function(e){return{type:"ACCEPT_POST",payload:e}},onDeclinePost:function(e){return{type:"DECLINE_POST",payload:e}}})((function(e){var t=e.isAdmin,a=e.id,n=e.isAccept,i=e.onAcceptPost,c=e.onDeclinePost,l=Q();return t&&t&&!n?r.a.createElement(K.a,{className:l.cardAction,disableSpacing:!0},r.a.createElement(C.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){i(a)}},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),r.a.createElement(C.a,{variant:"contained",color:"secondary",fullWidth:!0,className:l.actionButton,onClick:function(){c(a)}},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c")):null})),X=Object(S.a)((function(e){return{card:{marginTop:e.spacing(2),display:"flex",justifyContent:"space-between"},cardAction:{display:"flex",flexDirection:"column",alignSelf:"center"},actionButton:{marginTop:10}}})),Y=function(e){var t=e.item,a=X();return r.a.createElement(M.a,{className:a.card},r.a.createElement(H.a,null,r.a.createElement(j.a,{variant:"h5",gutterBottom:!0},t.title),r.a.createElement(j.a,{paragraph:!0},t.description),r.a.createElement(j.a,null,t.date)),r.a.createElement(V,{id:t.id,isAccept:t.isAccept}))},Z=a(126),$=Object(S.a)((function(e){return{divider:{margin:"".concat(e.spacing(2),"px 0")}}})),ee=Object(l.b)((function(e,t){return{notAcceptedPosts:e.posts.posts.filter((function(e){return!e.isAccept&&(e.title.toLowerCase().includes(t.search)||e.description.toLowerCase().includes(t.search)||e.date.includes(t.search))})),isAdmin:e.auth.user.isAdmin,userId:e.auth.user.id,hasOwnNotAcceptedPosts:e.posts.posts.some((function(t){return t.author_id===e.auth.user.id&&!t.isAccept}))}}))((function(e){var t=e.notAcceptedPosts,a=e.isAdmin,n=e.userId,i=e.hasOwnNotAcceptedPosts,c=(e.search,$()),l=t.map((function(e){return n===e.author_id||a?r.a.createElement(Y,{key:e.id,item:e}):null}));return t.length?r.a.createElement("section",null,i||a&&t.length?r.a.createElement(j.a,{variant:"h4"},"\u041d\u0435\u0440\u0430\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"):null,l,i||a&&t.length?r.a.createElement(Z.a,{className:c.divider}):null):null})),te=Object(l.b)((function(e,t){return{acceptedPosts:e.posts.posts.filter((function(e){return e.isAccept&&(e.title.toLowerCase().includes(t.search)||e.description.toLowerCase().includes(t.search)||e.date.includes(t.search))}))}}))((function(e){var t=e.acceptedPosts,a=e.search;return r.a.createElement("div",null,r.a.createElement(ee,{search:a}),r.a.createElement(j.a,{variant:"h4"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),t.length?t.map((function(e){return r.a.createElement(Y,{key:e.id,item:e})})):null)})),ae=function(e){var t=e.search,a=e.setSearch;return r.a.createElement(P.a,{variant:"outlined",fullWidth:!0,margin:"dense",label:"\u041f\u043e\u0438\u0441\u043a",size:"small",value:t,onChange:function(e){return a(e.target.value)}})},ne=Object(S.a)((function(e){return{pageWrapper:{paddingTop:e.spacing(2),display:"flex",flexDirection:"column"}}})),re=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],i=t[1],c=ne();return r.a.createElement("div",{className:c.pageWrapper},r.a.createElement(U,null),r.a.createElement(ae,{search:a,setSearch:i}),r.a.createElement(te,{search:a.toLowerCase().trim()}))},ie=Object(S.a)((function(e){return{pageWrapper:{paddingTop:e.spacing(2)}}})),ce=Object(l.b)((function(e){return{username:e.auth.user.username?e.auth.user.username:"\u0413\u043e\u0441\u0442\u044c"}}))((function(e){var t=e.username,a=ie();return r.a.createElement("div",{className:a.pageWrapper},r.a.createElement(j.a,{variant:"h5",paragraph:!0},"\u041f\u0440\u0438\u0432\u0435\u0442, ",r.a.createElement("strong",null,t),"!"),r.a.createElement(j.a,{paragraph:!0},"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0430\u0440\u044b \u043b\u043e\u0433\u0438\u043d - \u043f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement(j.a,{paragraph:!0},"user - user"),r.a.createElement(j.a,{paragraph:!0},"admin - admin"),r.a.createElement(Z.a,null),r.a.createElement(j.a,{paragraph:!0},r.a.createElement("strong",null,"\u0413\u043e\u0441\u0442\u044c")," \u043c\u043e\u0436\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438."),r.a.createElement(j.a,{paragraph:!0},r.a.createElement("strong",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c")," \u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u0438. \u0412\u0438\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u044b\u0435 \u0438 \u0441\u0432\u043e\u0438 \u043d\u0435\u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438."),r.a.createElement(j.a,{paragraph:!0},r.a.createElement("strong",null,"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440")," \u043c\u043e\u0436\u0435\u0442 \u043e\u0434\u043e\u0431\u0440\u0438\u0442\u044c / \u043e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c. \u0412\u0438\u0434\u0438\u0442 \u0432\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438."),r.a.createElement(j.a,null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u044c \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u043e\u0439."))})),le=function(){return r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(G,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0},r.a.createElement(ce,null)),r.a.createElement(E.a,{path:"/news"},r.a.createElement(re,null)))))};c.a.render(r.a.createElement(l.a,{store:h},r.a.createElement(le,null)),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.7e6272b6.chunk.js.map