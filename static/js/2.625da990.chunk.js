(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{312:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2kKpQ",dialogsItem:"Dialogs_dialogsItem__C1reX",active:"Dialogs_active__3HmG1",dialog:"Dialogs_dialog__RSNfL",messages:"Dialogs_messages__2a8jx",message:"Dialogs_message__1SO_m"}},315:function(e,a,s){"use strict";s.r(a);var t=s(15),n=s(11),i=s(92),l=s(108),o=s(1),m=s.n(o),d=s(103),c=s(109),g=s(14),r=s(17),u=s(312),_=s.n(u),f=function(e){return m.a.createElement("div",{className:_.a.dialog},m.a.createElement(r.b,{to:"dialogs/"+e.id},e.name))},b=function(e){return m.a.createElement("div",{className:_.a.message},e.message)},E=s(35),v=Object(c.a)({form:"dialogAddMessagesForm"})(function(e){var a=Object(E.a)(300);return m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement("div",null,m.a.createElement(d.a,{name:"newMessageBody",placeholder:"Enter your message",component:g.b,validate:[E.b,a]})),m.a.createElement("div",null,m.a.createElement("button",null,"Add Message")))}),p=function(e){var a=e.dialogsPage.dialogs.map(function(e){return m.a.createElement(f,{name:e.name,key:e.id,id:e.id})}),s=e.dialogsPage.messages.map(function(e){return m.a.createElement(b,{message:e.message,key:e.id})});return m.a.createElement("div",{className:_.a.dialogs},m.a.createElement("div",{className:_.a.dialogsItem},a),m.a.createElement("div",{className:_.a.messages},m.a.createElement(v,{onSubmit:function(a){e.AddMessage(a.newMessageBody)}}),s))};a.default=Object(n.d)(Object(t.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{AddMessage:function(a){e(Object(l.a)(a))}}}),i.a)(p)}}]);
//# sourceMappingURL=2.625da990.chunk.js.map