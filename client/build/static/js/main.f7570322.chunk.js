(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{186:function(e,t,a){},187:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(41),r=a.n(s),o=(a(186),a(83)),l=a(35),i=(a.p,a(187),a(6));var j=function(){var e=JSON.parse(localStorage.getItem("currentUser"));function t(){localStorage.removeItem("currentUser"),window.location.href="/login"}return Object(i.jsx)("div",{children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/home",children:"MERN HOTEL BOOKING"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon",children:Object(i.jsx)("i",{class:"fas fa-bars",style:{color:"white"}})})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:e?Object(i.jsx)("ul",{className:"navbar-nav mr-5",children:Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsxs)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(i.jsx)("i",{class:"fas fa-user mr-2"}),e.name]}),Object(i.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(i.jsx)("a",{className:"dropdown-item",href:"/profile",children:"Profile"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:t,children:"Logout"})]})]})}):Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsx)("a",{className:"nav-link",href:"/register",children:"Register"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/login",children:"Login"})})]})})]})})},d=a(147),b=a(18),u=a(29),O=a(4),m=a(37),x=a.n(m),h=(a(207),a(312)),p=a(34),f=a.n(p),v=a(314),g=a(317),y=a(310);var N=function(e){var t=e.room,a=e.fromDate,n=e.toDate,s=Object(c.useState)(!1),r=Object(O.a)(s,2),l=r[0],j=r[1],d=function(){return j(!1)};return Object(i.jsxs)("div",{className:"row bs",children:[Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsx)("img",{src:t.imageurls[0],className:"smallimg",alt:""})}),Object(i.jsxs)("div",{className:"col-md-7",children:[Object(i.jsx)("h1",{children:t.name}),Object(i.jsxs)("b",{children:[Object(i.jsxs)("p",{children:["Max Count : ",t.maxcount]}),Object(i.jsxs)("p",{children:["Phone Number : ",t.phonenumber]}),Object(i.jsxs)("p",{children:["Type : ",t.type]})]}),Object(i.jsxs)("div",{style:{float:"right"},children:[a&&n&&Object(i.jsx)(o.b,{to:"/book/".concat(t._id,"/").concat(a,"/").concat(n),children:Object(i.jsx)("button",{className:"btn btn-primary m-2",children:"Book Now"})}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){return j(!0)},children:"View Detail"})]})]}),Object(i.jsxs)(v.a,{show:l,onHide:d,size:"lg",children:[Object(i.jsx)(v.a.Header,{children:Object(i.jsx)(v.a.Title,{children:t.name})}),Object(i.jsxs)(v.a.Body,{children:[Object(i.jsx)(g.a,{prevLabel:"",nextLabel:"",children:t.imageurls.map((function(e){return Object(i.jsx)(g.a.Item,{children:Object(i.jsx)("img",{className:"d-block w-100 bigimg",src:e,alt:"First slide"})})}))}),Object(i.jsx)("p",{children:t.description})]}),Object(i.jsx)(v.a.Footer,{children:Object(i.jsx)(y.a,{variant:"secondary",onClick:d,children:"Close"})})]})]})},k=a(173),w=a.n(k);var S=function(){var e=Object(c.useState)(!0),t=Object(O.a)(e,2),a=t[0],n=(t[1],Object(c.useState)("#ffffff")),s=Object(O.a)(n,2);return s[0],s[1],Object(i.jsx)("div",{style:{marginTop:"150px"},children:Object(i.jsx)("div",{className:"sweet-loading text-center",children:Object(i.jsx)(w.a,{color:"#000",loading:a,css:"",size:25})})})};var C=function(e){var t=e.msg;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"alert alert-danger",role:"alert",children:["Something went wrong, please try again. ",t]})})},I=a(121),Y=a.n(I);a(160);Y.a.init({duration:1e3});var D=h.a.RangePicker;var M=function(){var e=Object(c.useState)(!0),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)([]),m=Object(O.a)(j,2),h=m[0],p=m[1],v=Object(c.useState)(),g=Object(O.a)(v,2),y=g[0],k=g[1],w=Object(c.useState)(),I=Object(O.a)(w,2),Y=I[0],M=I[1],E=Object(c.useState)([]),A=Object(O.a)(E,2),L=A[0],B=A[1],F=Object(c.useState)(""),R=Object(O.a)(F,2),T=R[0],P=R[1],U=Object(c.useState)("all"),J=Object(O.a)(U,2),_=J[0],H=J[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(""),n(!0),e.next=5,x.a.get("http://localhost:5000/api/rooms/getallrooms");case 5:t=e.sent.data,console.log(t,"data"),p(t),B(t),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),l(e.t0);case 15:n(!1);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row mt-5 bs",children:[Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsx)(D,{format:"DD-MM-YYYY",onChange:function(e){try{k(f()(e[0]).format("DD-MM-YYYY")),M(f()(e[1]).format("DD-MM-YYYY"));var t,a=[],c=Object(d.a)(L);try{for(c.s();!(t=c.n()).done;){var n=t.value,s=!1;if(n.currentbookings.length>0){var r,l=Object(d.a)(n.currentbookings);try{for(l.s();!(r=l.n()).done;){var i=r.value;f()(f()(e[0]).format("DD-MM-YYYY")).isBetween(i.fromdate,i.todate)||f()(f()(e[1]).format("DD-MM-YYYY")).isBetween(i.fromdate,i.todate)||f()(e[0]).format("DD-MM-YYYY")!==i.fromdate&&f()(e[0]).format("DD-MM-YYYY")!==i.todate&&f()(e[1]).format("DD-MM-YYYY")!==i.fromdate&&f()(e[1]).format("DD-MM-YYYY")!==i.todate&&(s=!0)}}catch(j){l.e(j)}finally{l.f()}}1!=s&&0!=n.currentbookings.length||a.push(n)}}catch(j){c.e(j)}finally{c.f()}p(a)}catch(o){}}})}),Object(i.jsx)("div",{className:"col-md-5",children:Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"search rooms",value:T,onChange:function(e){P(e.target.value)},onKeyUp:function(){var e=L.filter((function(e){return e.name.toLowerCase().includes(T.toLowerCase())}));p(e)}})}),Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsxs)("select",{className:"form-control",value:_,onChange:function(e){!function(e){if(H(e),console.log(e),"all"!==e){var t=L.filter((function(t){return t.type.toLowerCase()==e.toLowerCase()}));p(t)}else p(L)}(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"delux",children:"Delux"}),Object(i.jsx)("option",{value:"non-delux",children:"Non-Delux"})]})})]}),Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:a?Object(i.jsx)(S,{}):o.length>0?Object(i.jsx)(C,{msg:o}):h.map((function(e){return Object(i.jsx)("div",{className:"col-md-9 mt-3","data-aos":"flip-down",children:Object(i.jsx)(N,{room:e,fromDate:y,toDate:Y})})}))})]})},E=a(176),A=a.n(E),L=a(71),B=a.n(L);var F=function(e){var t=e.match,a=Object(c.useState)(!0),n=Object(O.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)(""),l=Object(O.a)(o,2),j=l[0],d=l[1],m=Object(c.useState)({}),h=Object(O.a)(m,2),p=h[0],v=h[1],g=Object(c.useState)(0),y=Object(O.a)(g,2),N=y[0],k=y[1],w=Object(c.useState)(0),I=Object(O.a)(w,2),Y=I[0],D=I[1],M=(t.params.roomid,f()(t.params.fromdate,"DD-MM-YYYY")),E=f()(t.params.todate,"DD-MM-YYYY");Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(Object(b.a)().mark((function e(){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(""),r(!0),e.next=5,x.a.post("/api/rooms/getroombyid",{roomid:t.params.roomid});case 5:a=e.sent.data,v(a),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),d(e.t0);case 13:r(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}JSON.parse(localStorage.getItem("currentUser"))||(window.location.href="/login"),function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){var e=f.a.duration(E.diff(M)).asDays()+1;D(e),k(Y*p.rentperday)}),[p]);var L=function(){var e=Object(u.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a={room:p,userid:JSON.parse(localStorage.getItem("currentUser"))._id,fromdate:M,todate:E,totalAmount:N,totaldays:Y,token:t},e.prev=2,r(!0),e.next=6,x.a.post("/api/bookings/bookroom",a);case 6:e.sent,r(!1),B.a.fire("Congratulations","Your Room Booked Successfully","success").then((function(e){window.location.href="/home"})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),d(e.t0),B.a.fire("Opps","Error:"+e.t0,"error");case 15:r(!1);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"m-5",children:s?Object(i.jsx)(S,{}):j.length>0?Object(i.jsx)(C,{msg:j}):Object(i.jsxs)("div",{className:"row justify-content-center mt-5 bs",children:[Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsx)("h1",{children:p.name}),Object(i.jsx)("img",{src:p.imageurls[0],alt:"",className:"bigimg"})]}),Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsxs)("div",{style:{textAlign:"right"},children:[Object(i.jsx)("h1",{children:"Booking Details"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("b",{children:[Object(i.jsxs)("p",{children:["Name : ",JSON.parse(localStorage.getItem("currentUser")).name]}),Object(i.jsxs)("p",{children:["From Date : ",t.params.fromdate]}),Object(i.jsxs)("p",{children:["To Date : ",t.params.todate]}),Object(i.jsxs)("p",{children:["Max Count : ",p.maxcount]})]})]}),Object(i.jsxs)("div",{style:{textAlign:"right"},children:[Object(i.jsx)("h1",{children:"Amount"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("b",{children:[Object(i.jsxs)("p",{children:["Total Days : ",Y]}),Object(i.jsxs)("p",{children:["Rent per day : ",p.rentperday]}),Object(i.jsxs)("p",{children:["Total Amount : ",N]})]})]}),Object(i.jsx)("div",{style:{float:"right"},children:Object(i.jsx)(A.a,{amount:100*N,currency:"USD",token:L,stripeKey:"pk_test_51Lc1OWSFrHhpRDHcVA2KktEzZldSHzdLIruaxkHx3pka0Iz5gCcIgKDNhVSsomcxDJocJnk3dHB6gLeZTUga9pIO00F8OLvq35\t",children:Object(i.jsx)("button",{className:"btn btn-primary",children:"Pay Now"})})})]})]})})};var R=function(e){var t=e.msg;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"alert alert-success",role:"alert",children:t})})};var T=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),m=d[0],h=d[1],p=Object(c.useState)(""),f=Object(O.a)(p,2),v=f[0],g=f[1],y=Object(c.useState)(!1),N=Object(O.a)(y,2),k=N[0],w=N[1],I=Object(c.useState)(""),Y=Object(O.a)(I,2),D=Y[0],M=Y[1],E=Object(c.useState)(""),A=Object(O.a)(E,2),L=A[0],B=A[1];function F(){return(F=Object(u.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m!==v){e.next=24;break}return t={name:a,email:o,password:m,cpassword:v},w(!0),M(""),B(""),e.prev=5,e.next=8,x.a.post("/api/users/register",t);case 8:c=e.sent.data,console.log(c),B(c),n(""),l(""),h(""),g(""),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),M(e.t0);case 21:w(!1),e.next=25;break;case 24:alert("Password not matched");case 25:case"end":return e.stop()}}),e,null,[[5,17]])})))).apply(this,arguments)}return Object(i.jsxs)("div",{children:[k&&Object(i.jsx)(S,{}),D.length>0&&Object(i.jsx)(C,{msg:D}),Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsxs)("div",{className:"col-md-5 mt-5",children:[L.length>0&&Object(i.jsx)(R,{msg:L}),Object(i.jsxs)("div",{className:"bs",children:[Object(i.jsx)("h2",{children:"Register"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"name",value:a,onChange:function(e){n(e.target.value)}}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"email",value:o,onChange:function(e){l(e.target.value)}}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"password",value:m,onChange:function(e){h(e.target.value)}}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"confirm password",value:v,onChange:function(e){g(e.target.value)}}),k?Object(i.jsx)("div",{children:"Registering... Please Wait..."}):Object(i.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return F.apply(this,arguments)},children:"Register"})]})]})})]})};var P=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(!1),d=Object(O.a)(j,2),m=d[0],h=d[1],p=Object(c.useState)(""),f=Object(O.a)(p,2),v=f[0],g=f[1],y=Object(c.useState)(""),N=Object(O.a)(y,2);function k(){return(k=Object(u.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t={email:a,password:o},e.prev=2,e.next=5,x.a.post("/api/users/login",t);case 5:c=e.sent.data,console.log(c),localStorage.setItem("currentUser",JSON.stringify(c)),window.location.href="/home",e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),g("Invalid Credentials");case 15:h(!1);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return N[0],N[1],Object(i.jsxs)("div",{children:[m&&Object(i.jsx)(S,{}),Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsxs)("div",{className:"col-md-5 mt-5",children:[v.length>0&&Object(i.jsx)(C,{msg:v}),Object(i.jsxs)("div",{className:"bs",children:[Object(i.jsx)("h2",{children:"Login"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"email",value:a,onChange:function(e){n(e.target.value)}}),Object(i.jsx)("input",{type:"password",className:"form-control",placeholder:"password",value:o,onChange:function(e){l(e.target.value)}}),m?Object(i.jsx)("div",{children:"Login...Please Wait..."}):Object(i.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return k.apply(this,arguments)},children:"Login"})]})]})})]})},U=a(315),J=a(181);var _=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),m=d[0],h=d[1],p=JSON.parse(localStorage.getItem("currentUser"));function f(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),l(!0),e.prev=2,e.next=5,x.a.post("/api/bookings/getbookingbyuserid",{userid:p._id});case 5:t=e.sent.data,n(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),h(e.t0);case 13:l(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function g(){return(g=Object(u.a)(Object(b.a)().mark((function e(t,a){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),l(!0),e.prev=2,e.next=5,x.a.post("/api/bookings/cancelbooking",{bookingid:t,roomid:a});case 5:e.sent.data,l(!1),B.a.fire("Congratulations","Your Room Cancelled Successfully","success").then((function(e){f()})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),B.a.fire("Opps","Error:"+e.t0,"error");case 14:l(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){f()}),[]),Object(i.jsx)("div",{children:o?Object(i.jsx)(S,{}):m.length>0?Object(i.jsx)(C,{msg:m}):Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-md-6  ml-5",children:a&&a.map((function(e){return Object(i.jsxs)("div",{className:"bs",children:[Object(i.jsx)("h1",{children:e.room}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"BookingId:"})," ",e._id]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"CheckIn:"})," ",e.fromdate]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"CheckOut:"})," ",e.todate]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Amount:"})," ",e.totalamount]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Status:"})," ","booked"===e.status?Object(i.jsx)(J.a,{color:"green",children:"CONFIRMED"}):Object(i.jsx)(J.a,{color:"red",children:"CANCELLED"})]}),"booked"===e.status&&Object(i.jsx)("div",{className:"text-right",children:Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){!function(e,t){g.apply(this,arguments)}(e._id,e.roomid)},children:"Cancel Booking"})})]})}))})})})},H=U.a.TabPane;var q=function(){var e=JSON.parse(localStorage.getItem("currentUser"));return Object(c.useEffect)((function(){e||(window.location.href="/login")}),[]),Object(i.jsx)("div",{className:"ml-3 mt-3",children:Object(i.jsxs)(U.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)},children:[Object(i.jsx)(H,{tab:"Profile",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-xs-12 ml-5 mb-5",children:Object(i.jsxs)("div",{className:"bs",children:[Object(i.jsx)("p",{children:"My Profile"}),Object(i.jsxs)("p",{children:["Name : ",e.name]}),Object(i.jsxs)("p",{children:["Email : ",e.email]}),Object(i.jsxs)("p",{children:["IsAdmin :"," ",e.isAdmin?Object(i.jsx)(J.a,{color:"green",children:"YES"}):Object(i.jsx)(J.a,{color:"red",children:"NO"})]})]})})})},"1"),Object(i.jsx)(H,{tab:"Booking",children:Object(i.jsx)(_,{})},"2")]})})},z=a(311);var K=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),m=d[0],h=d[1],p=[{title:"transactionid",dataIndex:"transactionid",key:"transactionid"},{title:"roomid",dataIndex:"roomid",key:"roomid"},{title:"room",dataIndex:"room",key:"room"},{title:"fromdate",dataIndex:"fromdate",key:"fromdate"},{title:"todate",dataIndex:"todate",key:"todate"},{title:"status",dataIndex:"status",key:"status",render:function(e){return Object(i.jsx)(i.Fragment,{children:"booked"===e?Object(i.jsx)(J.a,{color:"green",children:"CONFIRMED"}):Object(i.jsx)(J.a,{color:"red",children:"CANCELLED"})})}}];function f(){return(f=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),l(!0),e.prev=2,e.next=5,x.a.post("/api/bookings/getallbookings");case 5:t=e.sent.data,n(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),h(e.t0);case 13:l(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(i.jsx)("div",{className:"row",children:o?Object(i.jsx)(S,{}):m.length>0?Object(i.jsx)(C,{msg:m}):Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)(z.a,{columns:p,dataSource:a})})})};var G=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),m=d[0],h=d[1];function p(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),l(!0),e.prev=2,e.next=5,x.a.post("/api/rooms/getallrooms");case 5:t=e.sent.data,n(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),h(e.t0);case 13:l(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){p()}),[]),Object(i.jsx)("div",{className:"row",children:o?Object(i.jsx)(S,{}):m.length>0?Object(i.jsx)(C,{msg:m}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"col md-12",children:Object(i.jsx)("button",{className:"btn btn-success",onClick:p,children:"Refresh"})}),Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)(z.a,{columns:[{title:"roomid",dataIndex:"_id",key:"_id"},{title:"name",dataIndex:"name",key:"name"},{title:"maxcount",dataIndex:"maxcount",key:"maxcount"},{title:"phonenumber",dataIndex:"phonenumber",key:"phonenumber"},{title:"rentperday",dataIndex:"rentperday",key:"rentperday"},{title:"type",dataIndex:"type",key:"type"}],dataSource:a})})]})})};var V=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(O.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),m=d[0],h=d[1],p=[{title:"userid",dataIndex:"_id",key:"_id"},{title:"name",dataIndex:"name",key:"name"},{title:"email",dataIndex:"email",key:"email"},{title:"isAdmin",dataIndex:"isAdmin",key:"isAdmin",render:function(e){return Object(i.jsx)(i.Fragment,{children:!0===e?Object(i.jsx)(J.a,{color:"green",children:"YES"}):Object(i.jsx)(J.a,{color:"red",children:"NO"})})}}];function f(){return(f=Object(u.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),l(!0),e.prev=2,e.next=5,x.a.post("/api/users/getallusers");case 5:t=e.sent.data,n(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),h(e.t0);case 13:l(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(i.jsx)("div",{className:"row",children:o?Object(i.jsx)(S,{}):m.length>0?Object(i.jsx)(C,{msg:m}):Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)(z.a,{columns:p,dataSource:a})})})},W=a(3),Z=a(106),Q=a(313),X=a(179),$=a(316),ee=a(61),te={labelCol:{span:4},wrapperCol:{span:16}},ae={wrapperCol:{offset:8,span:16}};var ce=function(){var e=Z.a.Option,t=Object(c.useState)({}),a=Object(O.a)(t,2),n=(a[0],a[1],Object(c.useState)(!1)),s=Object(O.a)(n,2),r=s[0],o=s[1],l=Object(c.useState)(""),j=Object(O.a)(l,2),d=j[0],m=j[1],h=Q.a.useForm(),p=Object(O.a)(h,1)[0],f=function(){var e=Object(u.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),m(""),o(!0),e.prev=3,e.next=6,x.a.post("/api/rooms/addroom",t);case 6:e.sent.data,B.a.fire("Congratulations","Your Room Added Successfully","success"),p.resetFields(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),m(e.t0),B.a.fire("Opps","Error:"+e.t0,"error");case 16:o(!1);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"row",children:r?Object(i.jsx)(S,{}):d.length>0?Object(i.jsx)(C,{msg:d}):Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsxs)(Q.a,Object(W.a)(Object(W.a)({},te),{},{form:p,name:"control-hooks",onFinish:f,children:[Object(i.jsx)(Q.a.Item,{name:"name",label:"name",rules:[{required:!0}],children:Object(i.jsx)(X.a,{})}),Object(i.jsx)(Q.a.Item,{name:"description",label:"description",rules:[{required:!0}],children:Object(i.jsx)(X.a,{})}),Object(i.jsx)(Q.a.Item,{name:"maxcount",label:"maxcount",rules:[{required:!0}],children:Object(i.jsx)($.a,{min:1,defaultChecked:1})}),Object(i.jsx)(Q.a.Item,{name:"phonenumber",label:"phonenumber",rules:[{required:!0}],children:Object(i.jsx)(X.a,{})}),Object(i.jsx)(Q.a.Item,{name:"rentperday",label:"rentperday",rules:[{required:!0}],children:Object(i.jsx)($.a,{min:1,defaultChecked:1})}),Object(i.jsx)(Q.a.Item,{name:"imageurl1",label:"imageurl1",rules:[{required:!0}],children:Object(i.jsx)(X.a,{})}),Object(i.jsx)(Q.a.Item,{name:"imageurl2",label:"imageurl2",rules:[{}],children:Object(i.jsx)(X.a,{})}),Object(i.jsx)(Q.a.Item,{name:"imageurl3",label:"imageurl3",rules:[{}],children:Object(i.jsx)(X.a,{})}),Object(i.jsx)(Q.a.Item,{name:"type",label:"type",rules:[{required:!0}],children:Object(i.jsxs)(Z.a,{placeholder:"Select a room type",allowClear:!0,children:[Object(i.jsx)(e,{value:"delux",children:"Delux"}),Object(i.jsx)(e,{value:"non-delux",children:"Non-Delux"})]})}),Object(i.jsxs)(Q.a.Item,Object(W.a)(Object(W.a)({},ae),{},{children:[Object(i.jsx)(ee.a,{type:"success",htmlType:"submit",children:"Add"}),Object(i.jsx)(ee.a,{type:"danger",htmlType:"button",onClick:function(){p.resetFields()},children:"Reset"})]}))]}))})})},ne=U.a.TabPane;function se(e){console.log(e)}var re=function(){var e=JSON.parse(localStorage.getItem("currentUser"));return Object(c.useEffect)((function(){e&&0!=e.isAdmin||(window.location.href="/home")}),[]),Object(i.jsxs)("div",{className:"ml-3 mt-3 mr-3 bs",children:[Object(i.jsx)("h1",{className:"text-center",children:"Admin Panel"}),Object(i.jsxs)(U.a,{defaultActiveKey:"1",onChange:se,children:[Object(i.jsx)(ne,{tab:"Bookings",children:Object(i.jsx)(K,{})},"1"),Object(i.jsx)(ne,{tab:"Rooms",children:Object(i.jsx)(G,{})},"2"),Object(i.jsx)(ne,{tab:"Add Room",children:Object(i.jsx)(ce,{})},"3"),Object(i.jsx)(ne,{tab:"Users",children:Object(i.jsx)(V,{})},"4")]})]})};Y.a.init({duration:2e3});var oe=function(){return Object(i.jsx)("div",{className:"row landing",children:Object(i.jsxs)("div",{className:"col-md-12 text-center",children:[Object(i.jsx)("h2",{"data-aos":"zoom-in",style:{color:"white",fontSize:"100px"},children:"MERN HOTEL BOOKING"}),Object(i.jsx)("h1",{"data-aos":"zoom-out",style:{color:"white"},children:"There is only one boss. The Guest."}),Object(i.jsx)(o.b,{to:"/home",children:Object(i.jsx)("button",{className:"btn btn-primary landingBtn",children:"Get Started"})})]})})};var le=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)(o.a,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,component:oe}),Object(i.jsx)(l.a,{path:"/home",exact:!0,component:M}),Object(i.jsx)(l.a,{path:"/book/:roomid/:fromdate/:todate",exact:!0,component:F}),Object(i.jsx)(l.a,{path:"/register",exact:!0,component:T}),Object(i.jsx)(l.a,{path:"/login",exact:!0,component:P}),Object(i.jsx)(l.a,{path:"/profile",exact:!0,component:q}),Object(i.jsx)(l.a,{path:"/bookings",exact:!0,component:q}),Object(i.jsx)(l.a,{path:"/admin",exact:!0,component:re})]})]})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,318)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(le,{})}),document.getElementById("root")),ie()}},[[304,1,2]]]);
//# sourceMappingURL=main.f7570322.chunk.js.map