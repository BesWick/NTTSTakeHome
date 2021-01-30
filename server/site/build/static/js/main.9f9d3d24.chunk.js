(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{177:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),o=a.n(n),r=a(51),i=a.n(r),l=(a(59),a(26)),s=a.n(l),d=a(52),b=a(7),u=(a(61),a(5)),j=a(53),f=a.n(j);a(177);var p=function(e){var t=e.data,a=t?{labels:Object.keys(t),datasets:[{label:"# of Patents",borderColor:"#22cd59",backgroundColor:"#137633",borderWidth:1,hoverBackgroundColor:"#22cd59",hoverBorderColor:"#22cd59",data:Object.values(t)}]}:[];return Object(c.jsx)("div",{className:"barchart",children:Object(c.jsx)(u.HorizontalBar,{data:a,options:{maintainAspectRatio:!0,title:{display:!0,text:"Number of Patents per Portfolio Category",fontSize:30},tooltips:{bodyFontSize:20,titleFontSize:18,displayColors:!1,titleFontColor:"#22cd59"},legend:{display:!1},scales:{xAxes:[{ticks:{fontSize:18}}],yAxes:[{ticks:{fontSize:18}}]}}})})};a(178),a(179);var h=function(e){var t=e.data,a=t?Object.values(t).reduce((function(e,t){return e+t}),0):0,n=t?{labels:Object.keys(t),datasets:[{borderColor:"#22cd59",backgroundColor:"black",borderWidth:1,hoverBackgroundColor:"#137633",hoverBorderColor:"22cd59",data:Object.values(t)}]}:[];return Object(c.jsx)("div",{className:"piechart",children:Object(c.jsx)(u.Pie,{data:n,options:{maintainAspectRatio:!0,title:{display:!0,text:"Number of Patents per NASA Center",fontSize:30},tooltips:{callbacks:{title:function(e,t){return"NASA Center: "+t.labels[e[0].index]},label:function(e,t){var c=t.datasets[0].data[e.index]/a*100;return"# of Patents:"+t.datasets[0].data[e.index]+" ("+c.toFixed(2)+"%)"}},bodyFontSize:20,titleFontSize:18,titleFontColor:"#22cd59",displayColors:!1},legend:{display:!1},plugins:{labels:{render:"label",fontColor:"#0cf155",fontSize:22,precision:1,overlap:!1}}}})})};a(180);var O=function(e){var t=e.clickedCenter,a=e.clickedCategory,o=Object(n.useState)(!0),r=Object(b.a)(o,2),i=r[0],l=r[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){setTimeout((function(){l(!1)}),3500)};return Object(c.jsxs)("div",{className:"togglechart",children:[Object(c.jsx)("div",{className:"".concat(i?"typewriter":"hide-welcome"),children:Object(c.jsx)("div",{className:"typewriter-text",children:"Welcome..."})}),Object(c.jsxs)("div",{className:"".concat(i?"hide-welcome":"show-welcome"),children:[Object(c.jsx)("h2",{children:"NASA Patent Portfolio "}),Object(c.jsxs)("div",{className:"btnContainer",children:[Object(c.jsxs)("div",{className:"tab",children:[Object(c.jsx)("input",{type:"radio",id:"tab-1",name:"tab-group-1",defaultChecked:!0,onClick:a}),Object(c.jsx)("label",{htmlFor:"tab-1",id:"label1",children:"Category"})]}),Object(c.jsxs)("div",{className:"tab",id:"tab2",children:[Object(c.jsx)("input",{type:"radio",id:"tab-2",name:"tab-group-1",onClick:t}),Object(c.jsx)("label",{htmlFor:"tab-2",children:"Center"})]})]})]})]})};u.defaults.global.defaultColor="#22cd59",u.defaults.global.defaultFontColor="#22cd59",u.defaults.global.defaultFontFamily="Retro";var x=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),i=Object(b.a)(r,2),l=i[0],u=i[1],j=Object(n.useState)(!0),x=Object(b.a)(j,2),v=x[0],C=x[1],m=Object(n.useState)(!1),g=Object(b.a)(m,2),y=g[0],k=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("http://localhost:3003/api/metrics");case 3:t=e.sent,o(t.data.category),u(t.data.center),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"container",children:[Object(c.jsx)(O,{clickedCategory:function(){C(!0),k(!1)},clickedCenter:function(){C(!1),k(!0)}}),v&&Object(c.jsx)(p,{data:a}),y&&Object(c.jsx)(h,{data:l})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()},59:function(e,t,a){},61:function(e,t,a){}},[[181,1,2]]]);
//# sourceMappingURL=main.9f9d3d24.chunk.js.map